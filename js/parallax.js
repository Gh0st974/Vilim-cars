// 📄 Fichier : js/parallax.js
// 🎯 Rôle : Effet parallax — image de fond qui défile lentement sur toute la page

const Parallax = (() => {

  // ── Configuration ──────────────────────────────────────────
  const CONFIG = {
    speed: 0.05,        // 0 = fixe, 1 = défile avec le contenu, 0.4 = lent
    opacity: 0.75,     // Très discret — watermark élégant
    mobileBreakpoint: 768, // Désactivé sous cette largeur (px)
  };

  // ── Références DOM ─────────────────────────────────────────
  let bgEl = null;
  let ticking = false;
  let isEnabled = false;

  // ── Initialisation ─────────────────────────────────────────
  function init() {
    bgEl = document.getElementById('parallax-bg');
    if (!bgEl) return;

    // Désactivation sur mobile
    if (window.innerWidth < CONFIG.mobileBreakpoint) {
      bgEl.style.display = 'none';
      return;
    }

    isEnabled = true;
    bgEl.style.opacity = CONFIG.opacity;

    // Position initiale
    updatePosition();

    // Écoute du scroll avec requestAnimationFrame
    window.addEventListener('scroll', onScroll, { passive: true });

    // Recalcul si la fenêtre est redimensionnée
    window.addEventListener('resize', onResize, { passive: true });
  }

  // ── Gestion du scroll (optimisé RAF) ───────────────────────
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updatePosition();
        ticking = false;
      });
      ticking = true;
    }
  }

  // ── Calcul et application de la position Y ─────────────────
  function updatePosition() {
    if (!bgEl || !isEnabled) return;

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // L'image se déplace à CONFIG.speed fois la vitesse du scroll
    // Résultat : elle avance plus lentement → effet de profondeur
    const translateY = scrollY * CONFIG.speed;

    bgEl.style.transform = `translateX(-50%) translateY(${translateY}px)`;
  }

  // ── Gestion du redimensionnement ───────────────────────────
  function onResize() {
    const wasMobile = !isEnabled;
    const isMobile = window.innerWidth < CONFIG.mobileBreakpoint;

    if (isMobile && !wasMobile) {
      // Passage en mobile → désactiver
      isEnabled = false;
      bgEl.style.display = 'none';
    } else if (!isMobile && wasMobile) {
      // Passage en desktop → réactiver
      isEnabled = true;
      bgEl.style.display = 'block';
      bgEl.style.opacity = CONFIG.opacity;
      updatePosition();
    }
  }

  // ── API publique ───────────────────────────────────────────
  return { init };

})();
