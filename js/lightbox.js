// 📄 Fichier : js/lightbox.js
// 🎯 Rôle : Gestion de la lightbox — ouverture, fermeture, navigation entre images

const Lightbox = (() => {

  let images       = [];
  let currentIndex = 0;

  // Éléments DOM
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose   = document.getElementById('lightboxClose');
  const lbPrev    = document.getElementById('lightboxPrev');
  const lbNext    = document.getElementById('lightboxNext');
  const lbOverlay = document.getElementById('lightboxOverlay');

  /**
   * Initialise la lightbox
   * Collecte toutes les images du carousel et des thumbnails
   */
  function init() {
    collectImages();
    bindCarouselImages();
    bindThumbnails();
    bindControls();
    bindKeyboard();
  }

  /**
   * Collecte toutes les sources d'images disponibles
   */
  function collectImages() {
  images = [];
  document.querySelectorAll('.carousel-img').forEach(img => {
    images.push({ src: img.src, el: img }); // ← on stocke l'élément, pas le alt
  });
}

  /**
   * Ouvre la lightbox à un index donné
   * @param {number} index
   */
  function open(index) {
    if (!lightbox || images.length === 0) return;
    currentIndex = index;
    updateImage();
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Ferme la lightbox
   */
  function close() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  /**
   * Met à jour l'image affichée dans la lightbox
   */
  function updateImage() {
  if (!lbImg || images.length === 0) return;
  const img = images[currentIndex];
  const altText = img.el.getAttribute('alt') || ''; // ← lecture live
  lbImg.src = img.src;
  lbImg.alt = altText;
  if (lbCaption) {
    lbCaption.textContent = altText
      ? `${altText} — ${currentIndex + 1} / ${images.length}`
      : `${currentIndex + 1} / ${images.length}`;
  }
}


  /**
   * Navigue vers l'image suivante
   */
  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  /**
   * Navigue vers l'image précédente
   */
  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }

  /**
   * Bind les clics sur les images du carousel pour ouvrir la lightbox
   */
  function bindCarouselImages() {
    document.querySelectorAll('.carousel-img').forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => open(i));
    });
  }

  /**
   * Bind les clics sur les thumbnails pour ouvrir la lightbox
   */
  function bindThumbnails() {
    document.querySelectorAll('.thumb-item').forEach((thumb, i) => {
      thumb.addEventListener('click', () => open(i));
    });
  }

  /**
   * Bind les boutons de navigation et de fermeture
   */
  function bindControls() {
    if (lbClose)   lbClose.addEventListener('click', close);
    if (lbOverlay) lbOverlay.addEventListener('click', close);
    if (lbPrev)    lbPrev.addEventListener('click', e => { e.stopPropagation(); prev(); });
    if (lbNext)    lbNext.addEventListener('click', e => { e.stopPropagation(); next(); });
  }

  /**
   * Navigation clavier dans la lightbox
   */
  function bindKeyboard() {
    document.addEventListener('keydown', e => {
      if (!lightbox || lightbox.classList.contains('hidden')) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    });
  }

  return { init, open, close };

})();
