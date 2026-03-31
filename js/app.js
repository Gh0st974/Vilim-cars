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

    // 6. Parallax background
  Parallax.init();
  // 7. AOS — Animate On Scroll
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });

  // 8. Enregistrement du Service Worker (PWA)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker enregistré:', reg.scope))
      .catch(err => console.warn('⚠️ Service Worker échec:', err));
  }

  // 9. Images de fond des event-cards
  // Lit l'attribut data-bg-image de chaque carte et l'applique en CSS
  document.querySelectorAll('.event-card[data-bg-image]').forEach(card => {
    const imagePath = card.getAttribute('data-bg-image');
    if (imagePath) {
      card.style.backgroundImage = `url('${imagePath}')`;
    }
  });

});
