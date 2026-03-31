// 📄 Fichier : js/app.js
// 🎯 Rôle : Point d'entrée principal — initialise tous les modules au chargement

document.addEventListener('DOMContentLoaded', () => {

  // 1. Système de traductions (doit être en premier)
  I18n.init();

  // 2. Navigation sticky + hamburger + smooth scroll
  Navigation.init();

  // 3. Carousel galerie
  Carousel.init();

  // 4. Lightbox
  Lightbox.init();

  // 5. Formulaire de contact
  Form.init();

  // 6. AOS — Animate On Scroll
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });

  // 7. Enregistrement du Service Worker (PWA)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker enregistré:', reg.scope))
      .catch(err => console.warn('⚠️ Service Worker échec:', err));
  }

});
