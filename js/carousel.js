// 📄 Fichier : js/carousel.js
// 🎯 Rôle : Gestion du carousel d'images avec navigation, indicateurs et auto-play

const Carousel = (() => {

  let currentIndex  = 0;
  let totalSlides   = 0;
  let autoPlayTimer = null;
  const AUTO_PLAY_DELAY = 4000;

  // Éléments DOM
  const track      = document.getElementById('carouselTrack');
  const prevBtn    = document.getElementById('carouselPrev');
  const nextBtn    = document.getElementById('carouselNext');
  const indicators = document.getElementById('carouselIndicators');

  /**
   * Initialise le carousel
   */
  function init() {
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;

    if (totalSlides === 0) return;

    buildIndicators();
    updateCarousel();
    bindControls();
    bindThumbnails();
    startAutoPlay();
    bindPauseOnHover();
  }

  /**
   * Crée les points indicateurs dynamiquement
   */
  function buildIndicators() {
    if (!indicators) return;
    indicators.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      indicators.appendChild(dot);
    }
  }

  /**
   * Met à jour la position du carousel et les indicateurs actifs
   */
  function updateCarousel() {
    if (!track) return;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Mise à jour des dots
    if (indicators) {
      indicators.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
  }

  /**
   * Navigue vers un slide précis
   * @param {number} index
   */
  function goTo(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    updateCarousel();
  }

  /**
   * Slide suivant
   */
  function next() { goTo(currentIndex + 1); }

  /**
   * Slide précédent
   */
  function prev() { goTo(currentIndex - 1); }

  /**
   * Bind les boutons prev / next
   */
  function bindControls() {
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoPlay(); });

    // Navigation clavier (touches fléchées)
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  { prev(); resetAutoPlay(); }
      if (e.key === 'ArrowRight') { next(); resetAutoPlay(); }
    });

    // Swipe tactile
    bindSwipe();
  }

  /**
   * Bind les miniatures (thumbnails) sous le carousel
   */
  function bindThumbnails() {
    document.querySelectorAll('.thumb-item').forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
        goTo(i);
        resetAutoPlay();
      });
    });
  }

  /**
   * Démarre l'auto-play
   */
  function startAutoPlay() {
    autoPlayTimer = setInterval(next, AUTO_PLAY_DELAY);
  }

  /**
   * Arrête l'auto-play
   */
  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  /**
   * Remet à zéro l'auto-play (après interaction manuelle)
   */
  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  /**
   * Pause l'auto-play au survol du carousel
   */
  function bindPauseOnHover() {
    const container = document.getElementById('carouselContainer');
    if (!container) return;
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);
  }

  /**
   * Support du swipe tactile sur mobile
   */
  function bindSwipe() {
    if (!track) return;
    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      if (!isDragging) return;
      const deltaX = e.changedTouches[0].clientX - startX;
      if (Math.abs(deltaX) > 50) {
        deltaX < 0 ? next() : prev();
        resetAutoPlay();
      }
      isDragging = false;
    }, { passive: true });
  }

  /**
   * Retourne l'index courant (utilisé par la lightbox)
   * @returns {number}
   */
  function getCurrentIndex() { return currentIndex; }

  return { init, goTo, next, prev, getCurrentIndex };

})();
