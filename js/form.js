// 📄 Fichier : js/form.js
// 🎯 Rôle : Validation et soumission du formulaire de contact via Netlify Forms

const Form = (() => {

  const form = document.getElementById('contactForm');

  function init() {
    if (!form) return;
    setMinDate();
    bindSubmit();
    bindRealTimeValidation();
  }

  function setMinDate() {
    const dateInput = document.getElementById('fieldDate');
    if (!dateInput) return;
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  function bindRealTimeValidation() {
    // AJOUT : 'fieldAddress' ajouté à la liste
    const fields = ['fieldFirstName', 'fieldLastName', 'fieldEmail',
                    'fieldEventType', 'fieldDate', 'fieldAddress'];
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('blur', () => validateField(el));
      el.addEventListener('input', () => {
        if (el.classList.contains('error')) validateField(el);
      });
    });
  }

  function validateField(field) {
    const id       = field.id;
    const value    = field.value.trim();
    const errorEl  = document.getElementById(id + 'Error');
    let   message  = '';

    if (!value) {
      message = I18n.t('form.required');
    } else if (id === 'fieldEmail' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = I18n.t('form.emailInvalid');
    } else if (id === 'fieldDate') {
      const selected = new Date(value);
      const today    = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) message = I18n.t('form.dateInvalid');
    }

    if (errorEl) errorEl.textContent = message;
    field.classList.toggle('error', message !== '');
    return message === '';
  }

  function validateAll() {
    const fields = [
      document.getElementById('fieldFirstName'),
      document.getElementById('fieldLastName'),
      document.getElementById('fieldEmail'),
      document.getElementById('fieldEventType'),
      document.getElementById('fieldDate'),
      document.getElementById('fieldAddress'), // AJOUT : validation du champ adresse
    ];
    let valid = true;
    fields.forEach(f => {
      if (f && !validateField(f)) valid = false;
    });
    return valid;
  }

  function bindSubmit() {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const msgSuccess = document.getElementById('formSuccess');
      const msgError   = document.getElementById('formError');

      if (msgSuccess) msgSuccess.classList.add('hidden');
      if (msgError)   msgError.classList.add('hidden');

      if (!validateAll()) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '...';
      }

      try {
        await sendToNetlify();

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
   * Envoie les données du formulaire à Netlify Forms
   * @returns {Promise}
   */
  function sendToNetlify() {
    const data = new URLSearchParams({
      'form-name': 'contact',
      'firstName':  document.getElementById('fieldFirstName').value.trim(),
      'lastName':   document.getElementById('fieldLastName').value.trim(),
      'email':      document.getElementById('fieldEmail').value.trim(),
      'phone':      document.getElementById('fieldPhone').value.trim(),
      'eventType':  document.getElementById('fieldEventType').value,
      'date':       document.getElementById('fieldDate').value,
      'address':    document.getElementById('fieldAddress').value.trim(), // AJOUT : Envoi de l'adresse
      'message':    document.getElementById('fieldMessage').value.trim(),
    });

    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString()
    }).then(response => {
      if (!response.ok) throw new Error('Netlify error: ' + response.status);
    });
  }

  return { init };

})();
