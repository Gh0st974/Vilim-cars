// 📄 Fichier : js/navigation.js
// 🎯 Rôle : Gestion navbar sticky, hamburger mobile, smooth scroll

const Navigation = (() => {

  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');

  /**
   * Initialise tous les comportements de navigation
   */
  function init() {
    bindScroll();
    bindHamburger();
    bindSmoothScroll();
    bindMobileMenuLinks();
  }

  /**
   * Gère le changement de style de la navbar au scroll
   */
  function bindScroll() {
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // état initial
  }

  /**
   * Ouvre / ferme le menu hamburger sur mobile
   */
  function bindHamburger() {
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', !isOpen);
      hamburger.classList.toggle('open', !isOpen);
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  /**
   * Ferme le menu mobile quand on clique sur un lien
   */
  function bindMobileMenuLinks() {
    if (!mobileMenu) return;
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /**
   * Smooth scroll sur tous les liens d'ancre
   */
  function bindSmoothScroll() {
    document.querySelectorAll('.smooth-scroll').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        // Offset pour compenser la hauteur de la navbar fixe
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetY = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({ top: targetY, behavior: 'smooth' });
      });
    });
  }

  return { init };

})();
