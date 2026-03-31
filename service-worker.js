// 📄 Fichier : service-worker.js
// 🎯 Rôle : Cache PWA pour fonctionnement hors-ligne et performance

const CACHE_NAME    = 'mercedes-230e-v1';
const CACHE_OFFLINE = 'mercedes-offline-v1';

// Ressources à mettre en cache lors de l'installation
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/i18n.js',
  '/js/translations.js',
  '/js/navigation.js',
  '/js/carousel.js',
  '/js/lightbox.js',
  '/js/form.js',
  '/manifest.json',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
];

// ===== INSTALLATION =====
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker : mise en cache des ressources');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// ===== ACTIVATION =====
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== CACHE_OFFLINE)
          .map(key => {
            console.log('🗑️ Service Worker : suppression ancien cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ===== FETCH — Stratégie Cache First =====
self.addEventListener('fetch', event => {
  // On ignore les requêtes non-GET
  if (event.request.method !== 'GET') return;

  // On ignore les requêtes vers des APIs externes (fonts, CDN)
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;

        // Pas en cache : on va chercher sur le réseau
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200) return response;

            // On met en cache la nouvelle ressource
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));

            return response;
          })
          .catch(() => {
            // Hors-ligne et pas en cache : retourne index.html si possible
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
          });
      })
  );
});
