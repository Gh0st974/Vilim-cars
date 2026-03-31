// 📄 Fichier : js/form.js
// 🎯 Rôle : Validation et soumission du formulaire de contact

const Form = (() => {

  const form = document.getElementById('contactForm');

  /**
   * Initialise le formulaire
   */
  function init() {
    if (!form) return;
    setMinDate();
    bindSubmit();
    bindRealTimeValidation();
  }

  /**
   * Définit la date minimum à aujourd'hui pour le champ date
   */
  function setMinDate() {
    const dateInput = document.getElementById('fieldDate');
    if (!dateInput) return;
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  /**
   * Validation en temps réel sur les champs obligatoires
   */
  function bindRealTimeValidation() {
    const fields = ['fieldFirstName', 'fieldLastName', 'fieldEmail',
                    'fieldEventType', 'fieldDate'];
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('blur', () => validateField(el));
      el.addEventListener('input', () => {
        if (el.classList.contains('error')) validateField(el);
      });
    });
  }

  /**
   * Valide un champ individuel
   * @param {HTMLElement} field
   * @returns {boolean}
   */
  function validateField(field) {
    const id       = field.id;
    const value    = field.value.trim();
    const errorEl  = document.getElementById(id + 'Error');
    let   message  = '';

    // Champ vide
    if (!value) {
      message = I18n.t('form.required');
    }
    // Validation email
    else if (id === 'fieldEmail' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = I18n.t('form.emailInvalid');
    }
    // Validation date future
    else if (id === 'fieldDate') {
      const selected = new Date(value);
      const today    = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        message = I18n.t('form.dateInvalid');
      }
    }

    // Affichage de l'erreur
    if (errorEl) errorEl.textContent = message;
    field.classList.toggle('error', message !== '');
    return message === '';
  }

  /**
   * Valide tous les champs du formulaire
   * @returns {boolean}
   */
  function validateAll() {
    const fields = [
      document.getElementById('fieldFirstName'),
      document.getElementById('fieldLastName'),
      document.getElementById('fieldEmail'),
      document.getElementById('fieldEventType'),
      document.getElementById('fieldDate'),
    ];
    let valid = true;
    fields.forEach(f => {
      if (f && !validateField(f)) valid = false;
    });
    return valid;
  }

  /**
   * Gère la soumission du formulaire
   */
  function bindSubmit() {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const msgSuccess = document.getElementById('formSuccess');
      const msgError   = document.getElementById('formError');

      // Reset messages
      if (msgSuccess) msgSuccess.classList.add('hidden');
      if (msgError)   msgError.classList.add('hidden');

      // Validation
      if (!validateAll()) return;

      // Désactiver le bouton pendant l'envoi
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '...';
      }

      try {
        // Simulation d'envoi (à remplacer par un vrai endpoint)
        await simulateSend();

        if (msgSuccess) {
          msgSuccess.textContent = I18n.t('form.success');
          msgSuccess.classList.remove('hidden');
        }
        form.reset();

      } catch (err) {
        if (msgError) {
          msgError.textContent = I18n.t('form.error');
          msgError.classList.remove('hidden');
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.setAttribute('data-i18n', 'form.submit');
          submitBtn.textContent = I18n.t('form.submit');
        }
      }
    });
  }

  /**
   * Simule un envoi asynchrone (à remplacer par fetch vers un vrai backend)
   * @returns {Promise}
   */
  function simulateSend() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simule un succès — remplacez par votre logique d'envoi réelle
        Math.random() > 0.05 ? resolve() : reject(new Error('Send failed'));
      }, 1200);
    });
  }

  return { init };

})();
