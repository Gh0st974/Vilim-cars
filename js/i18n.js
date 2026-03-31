// 📄 Fichier : js/i18n.js
// 🎯 Rôle : Gestion du système de traduction — détection, switching, injection DOM

const I18n = (() => {

  // Langue par défaut : slovaque
  let currentLang = 'sk';

  /**
   * Initialise le système i18n
   * Charge la langue sauvegardée ou utilise SK par défaut
   */
  function init() {
    const saved = localStorage.getItem('lang');
    currentLang = saved && TRANSLATIONS[saved] ? saved : 'sk';
    applyTranslations();
    updateLangButtons();
    bindLangButtons();
  }

  /**
   * Applique toutes les traductions dans le DOM
   * Cible les éléments avec data-i18n et data-i18n-placeholder
   */
  function applyTranslations() {
    const dict = TRANSLATIONS[currentLang];
    if (!dict) return;

    // Textes principaux
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Placeholders des inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Attributs alt des images
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) {
        el.setAttribute('alt', dict[key]);
    }
    });

    // Attribut lang sur <html>
    document.documentElement.lang = currentLang;
  }

  /**
   * Met à jour l'état visuel des boutons de langue
   */
  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }

  /**
   * Bind les clics sur les boutons de langue
   */
  function bindLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && TRANSLATIONS[lang] && lang !== currentLang) {
          currentLang = lang;
          localStorage.setItem('lang', lang);
          applyTranslations();
          updateLangButtons();
        }
      });
    });
  }

  /**
   * Retourne une traduction par clé
   * @param {string} key
   * @returns {string}
   */
  function t(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
      ? TRANSLATIONS[currentLang][key]
      : (TRANSLATIONS['sk'][key] || key);
  }

  /**
   * Retourne la langue courante
   * @returns {string}
   */
  function getLang() { return currentLang; }

  return { init, t, getLang, applyTranslations };

})();
