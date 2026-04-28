// 📄 Fichier : js/translations.js
// 🎯 Rôle : Contient toutes les chaînes de traduction SK / FR / EN

const TRANSLATIONS = {

/* ===================== SLOVAQUE (défaut) ===================== */
sk: {
  // Navigation
  'nav.vehicle':    'Vozidlo',
  'nav.gallery':    'Galéria',
  'nav.events':     'Udalosti',
  'nav.how':        'Ako to funguje',
  'nav.pricing':    'Cenník',
  'nav.contact':    'Kontakt',

  // Hero
  'hero.tagline':   'Historické vozidlo na prenájom',
  'hero.subtitle':  'Prenajmite si kúsok histórie na váš výnimočný deň. Elegancia, štýl a nezabudnuteľné spomienky.',
  'hero.cta':       'Rezervovať termín',
  'hero.discover':  'Objaviť vozidlo',

  // vehicle — SK
  'vehicle.label':       'Naše vozidlo',
  'vehicle.title':       'Ikona nemeckej elegancie',
  'vehicle.description': 'Mercedes-Benz 230E z roku 1983 je oveľa viac než automobil — je to symbol nezničiteľnej kvality a nadčasovej elegancie, éry, v ktorej nemecké inžinierstvo definovalo pojem trvanlivosť. So svojím kultivovaným motorom so vstrekovaním paliva a ikonickou siluetou radu W123 predstavuje vrchol éry, kedy boli automobily stavané na celý život a luxus znamenal absolútnu spoľahlivosť.',

  // Specs — labels
  'vehicle.specs.model.label':        'Model',
  'vehicle.specs.year.label':         'Rok výroby',
  'vehicle.specs.engine.label':       'Motor',
  'vehicle.specs.color.label':        'Farba',
  'vehicle.specs.seats.label':        'Sedadlá',
  'vehicle.specs.category.label':     'Kategória',
  'vehicle.specs.manufacturer.label': 'Výrobca',
  'vehicle.specs.location.label':     'Lokalita',

  // Specs — values
  'vehicle.specs.model.value':        '230E W123',
  'vehicle.specs.year.value':         '1983',
  'vehicle.specs.engine.value':       '2.3L · 136 hp',
  'vehicle.specs.color.value': 'Zelená metalíza',
  'vehicle.specs.seats.value':        '5',
  'vehicle.specs.category.value':     'Historické',
  'vehicle.specs.manufacturer.value': 'Mercedes-Benz',
  'vehicle.specs.location.value':     'Žilinsky kraj, Slovensko',

  'vehicle.feat1': 'Zachovalý a pôvodný interiér',
  'vehicle.feat2': 'Bezchybný technický stav',
  'vehicle.feat3': 'Ideálne na svadobné fotografie alebo iné udalosti či projekty',
  'vehicle.feat4': 'Profesionálny šofér k dispozícii',

  // Gallery
  'gallery.label': 'Galéria',
  'gallery.title': 'Fotografie',
  'gallery.alt1':  'Mercedes 230E - Pohľad spredu',
  'gallery.alt2':  'Mercedes 230E - Pohľad z ľavej strany',
  'gallery.alt3':  'Mercedes 230E - Pohľad zozadu',
  'gallery.alt4':  'Mercedes 230E - Detail prednej časti',
  'gallery.alt5':  'Mercedes 230E - Pohľad na prednú pneumatiku',
  'gallery.alt6':  'Mercedes 230E - Detail hviezdy Mercedes',
  'gallery.alt7':  'Mercedes 230E - Interiér na strane vodiča',
  'gallery.alt8':  'Mercedes 230E - Palubná doska a volant',
  'gallery.alt9':  'Mercedes 230E - Pohľad zozadu so znakom 230E',
  'gallery.alt10': 'Mercedes 230E - Pohľad z predného rohu',
  'gallery.alt11': 'Mercedes 230E - Pohľad zozadu ŠPZ',
  'gallery.alt12': 'Mercedes 230E - Detail znaku 230E na kufri',
  'gallery.alt13': 'Mercedes 230E - Pohľad spredu v noci so zapnutými svetlami',
  'gallery.alt14': 'Mercedes 230E - Pohľad spredu pri západe slnka',
  'gallery.alt15': 'Mercedes 230E - Detail hviezdy Mercedes',




  // Events
  'events.label':          'Udalosti',
  'events.title':          'Pre každú výnimočnú udalosť',
  'events.wedding.title':  'Svadba',
  'events.wedding.desc':   'Príďte na váš svadobný deň v štýle a elegancii legendárneho Mercedesu.',
  'events.birthday.title': 'Narodeniny',
  'events.birthday.desc':  'Spravte zo svojich narodenín nezabudnuteľný zážitok s nádychom luxusu.',
  'events.photo.title':    'Fotenie',
  'events.photo.desc':     'Perfektná kulisa pre módne, reklamné alebo osobné fotografické projekty.',
  'events.other.title':    'Iné udalosti',
  'events.other.desc':     'Firemné akcie, filmy, výstavy... Kontaktujte nás pre individuálnu ponuku.',

  // How it works
  'how.label':       'Ako to funguje?',
  'how.title':       'Proces',
  'how.step1.title': 'Kontaktujte nás',
  'how.step1.desc':  'Pošlite nám email alebo vyplňte kontaktný formulár so svojou požiadavkou a požadovaným dátumom.',
  'how.step2.title': 'Dohodneme detaily',
  'how.step2.desc':  'Preberieme trasu, čas, miesto a všetky vaše špeciálne požiadavky.',
  'how.step3.title': 'Potvrdenie rezervácie',
  'how.step3.desc':  'Po dohode potvrdíme rezerváciu a termín je váš.',
  'how.step4.title': 'Váš výnimočný deň',
  'how.step4.desc':  'Vychutnajte si každý moment s eleganciou a štýlom legendárneho Mercedesu.',

    // Pricing
    'pricing.label':           'Cenník',
    'pricing.title':           'Naše ponuky',

    'pricing.basic.tier':      'OBRAD',
    'pricing.basic.name':      'Svadba',
    'pricing.basic.f1':        'Fotenie pred svadbou',
    'pricing.basic.f2':        'Odvoz na obrad a späť',
    'pricing.basic.f3':        'Profesionálny vodič k dispozícii až po svadobný obed',
    'pricing.basic.f4':        'Príplatok: výzdoba vozidla — 50 €, Chladené šampanské — 20 €',
    'pricing.basic.cta':       'Rezervovať termín',

    'pricing.premium.tier':    'EXPOZÍCIA',
    'pricing.premium.name':    'Exhibition',
    'pricing.premium.period':  '/ hod',
    'pricing.premium.f1':      'Fotenie, expozície',
    'pricing.premium.f2':      'Nakrúcanie filmov, komparz',
    'pricing.premium.f3':      'Hudobné videoklipy',
    'pricing.premium.f4':      'Reklamné spoty',
    'pricing.premium.cta':     'Rezervovať termín',

    'pricing.vip.tier':        'NA MIERU',
    'pricing.vip.name':        'Váš projekt',
    'pricing.vip.price':       'Na dopyt',
    'pricing.vip.f1':          'Neváhajte nás kontaktovať s akýmkoľvek nápadom — radi s vami preberieme možnosti a realizáciu',
    'pricing.vip.f2':          'Cena bude úplne personalizovaná podľa vášho projektu',
    'pricing.vip.cta':         'Kontaktujte nás',

    'pricing.note':            '* Každá ponuka bude individuálne prediskutovaná a prispôsobená vašim špecifickým potrebám',


  // Contact
  'contact.label':        'Kontaktujte nás',
  'contact.title':        'Rezervácia',
  'contact.infoTitle':    'Informácie',
  'contact.infoSubtitle': 'Rezervujte si váš jedinečný zážitok, neváhajte nás kontaktovať na akékoľvek otázky radi odpovieme.',
  'contact.address':      'Adresa',
  'contact.phone':        'Telefón',
  'contact.email':        'Email',

    // Form
    'form.firstName':    'Meno',
    'form.firstNamePh':  'Ján',
    'form.lastName':     'Priezvisko',
    'form.lastNamePh':   'Novák',
    'form.email':        'Email',
    'form.emailPh':      'jan@example.com',
    'form.phone':        'Telefón',
    'form.phonePh':      '+421 900 000 000',
    'form.eventType':    'Typ udalosti',
    'form.eventSelect':  '-- Vyberte typ --',
    'form.eventWedding': 'Svadba',
    'form.eventBirthday':'Výstava',
    'form.eventPhoto':   'Váš projekt',
    'form.date':         'Dátum udalosti',
    'form.address':      'Adresa udalosti', // Nouveau
    'form.addressPh':    'Ulica, mesto, PSČ', // Nouveau
    'form.message':      'Správa',
    'form.messagePh':    'Popíšte vašu udalosť...',
    'form.submit':       'Odoslať správu',
    'form.success':      '✅ Vaša správa bola odoslaná. Budeme vás čoskoro kontaktovať!',
    'form.error':        '❌ Vyskytla sa chyba. Skúste to prosím znova.',
    'form.required':     'Toto pole je povinné.',
    'form.emailInvalid': 'Zadajte prosím platnú emailovú adresu.',
    'form.dateInvalid':  'Vyberte prosím dátum v budúcnosti.',


  // Footer
  'footer.tagline': 'Elegancia nie je o tom, aby si bol spozorovaný, ale aby si bol zapamätaný. — Giorgio Armani',
  'footer.links':   'Rýchle odkazy',
  'footer.contact': 'Kontakt',
  'footer.copy':    '© 2026 VILIM Classic cars.',
  'footer.made':    'Made by JD',
},


  /* ===================== FRANÇAIS ===================== */
  fr: {
    // Navigation
    'nav.vehicle':    'Véhicule',
    'nav.gallery':    'Galerie',
    'nav.events':     'Événements',
    'nav.how':        'Comment ça marche',
    'nav.pricing':    'Tarifs',
    'nav.contact':    'Contact',

    // Hero
    'hero.tagline':   'Véhicule historique à louer',
    'hero.subtitle':  'Louez un morceau d\'histoire pour votre journée exceptionnelle. Élégance, style et souvenirs inoubliables.',
    'hero.cta':       'Réserver une date',
    'hero.discover':  'Découvrir le véhicule',

    // vehicle — FR
    'vehicle.label':       'Notre véhicule',
    'vehicle.title':       'Icône de l\'élégance allemande',
    'vehicle.description': 'La Mercedes-Benz 230E de 1983 est bien plus qu\'une automobile — c\'est le symbole d\'une qualité indestructible et d\'une élégance intemporelle, d\'une époque où l\'ingénierie allemande définissait la durabilité. Avec son moteur à injection raffiné et la silhouette iconique de la série W123, elle représente le sommet d\'une ère où les voitures étaient construites pour durer toute une vie.',

    // Specs — labels
    'vehicle.specs.model.label':        'Modèle',
    'vehicle.specs.year.label':         'Année',
    'vehicle.specs.engine.label':       'Moteur',
    'vehicle.specs.color.label':        'Couleur',
    'vehicle.specs.seats.label':        'Sièges',
    'vehicle.specs.category.label':     'Catégorie',
    'vehicle.specs.manufacturer.label': 'Fabricant',
    'vehicle.specs.location.label':     'Localité',

    // Specs — values
    'vehicle.specs.model.value':        '230E W123',
    'vehicle.specs.year.value':         '1983',
    'vehicle.specs.engine.value':       '2.3L · 136 ch',
    'vehicle.specs.color.value':        'Vert métalisée',
    'vehicle.specs.seats.value':        '5',
    'vehicle.specs.category.value':     'Véhicule historique',
    'vehicle.specs.manufacturer.value': 'Mercedes-Benz',
    'vehicle.specs.location.value':     'Région de Žilina, Slovaquie',

    'vehicle.feat1': 'Intérieur préservé et d\'origine',
    'vehicle.feat2': 'État technique irréprochable',
    'vehicle.feat3': 'Idéal pour les photos de mariage ou autres événements et projets',
    'vehicle.feat4': 'Chauffeur professionnel disponible',

    // Gallery
    'gallery.label': 'Galerie',
    'gallery.title': 'Photographies',
    'gallery.alt1':  'Mercedes 230E - Vue de face',
    'gallery.alt2':  'Mercedes 230E - Vue de côté gauche',
    'gallery.alt3':  'Mercedes 230E - Vue de derrière',
    'gallery.alt4':  'Mercedes 230E - Détail de la face avant',
    'gallery.alt5':  'Mercedes 230E - Vue roue avant',
    'gallery.alt6':  'Mercedes 230E - Détail de l\'étoile Mercedes',
    'gallery.alt7':  'Mercedes 230E - Intérieur côté conducteur',
    'gallery.alt8':  'Mercedes 230E - Tableau de bord et volant',
    'gallery.alt9':  'Mercedes 230E - Vue de derrière avec badge 230E',
    'gallery.alt10': 'Mercedes 230E - Vue trois-quart avant',
    'gallery.alt11': 'Mercedes 230E - Vue de derrière plaque',
    'gallery.alt12': 'Mercedes 230E - Détail du badge 230E sur le coffre',
    'gallery.alt13': 'Mercedes 230E - Vue de face de nuit phares allumés',
    'gallery.alt14': 'Mercedes 230E - Vue de face au coucher du soleil',
    'gallery.alt15': 'Mercedes 230E - Détail de l\'étoile Mercedes',



    // Events
    'events.label':          'Événements',
    'events.title':          'Pour chaque occasion exceptionnelle',
    'events.wedding.title':  'Mariage',
    'events.wedding.desc':   'Arrivez à votre mariage avec le style et l\'élégance de la légendaire Mercedes.',
    'events.birthday.title': 'Anniversaire',
    'events.birthday.desc':  'Faites de votre anniversaire un moment inoubliable avec une touche de luxe.',
    'events.photo.title':    'Séance photo',
    'events.photo.desc':     'Un décor parfait pour vos projets photographiques mode, publicitaires ou personnels.',
    'events.other.title':    'Autres événements',
    'events.other.desc':     'Événements d\'entreprise, films, expositions... Contactez-nous pour une offre personnalisée.',

    // How it works
    'how.label':       'Comment ça marche ?',
    'how.title':       'Le processus',
    'how.step1.title': 'Contactez-nous',
    'how.step1.desc':  'Envoyez-nous un email ou remplissez le formulaire de contact avec votre demande et la date souhaitée.',
    'how.step2.title': 'Nous discutons des détails',
    'how.step2.desc':  'Nous définissons ensemble le trajet, les horaires, le lieu et toutes vos exigences particulières.',
    'how.step3.title': 'Confirmation de la réservation',
    'how.step3.desc':  'Une fois tout convenu, nous confirmons la réservation et la date est à vous.',
    'how.step4.title': 'Votre journée exceptionnelle',
    'how.step4.desc':  'Profitez de chaque instant avec l\'élégance et le style de la légendaire Mercedes.',

    // Pricing
    'pricing.label':           'Tarifs',
    'pricing.title':           'Nos formules',

    'pricing.basic.tier':      'CÉRÉMONIE',
    'pricing.basic.name':      'Mariage',
    'pricing.basic.f1':        'Séance photo avant le mariage',
    'pricing.basic.f2':        'Transport vers la cérémonie et retour',
    'pricing.basic.f3':        'Chauffeur professionnel disponible jusqu\'au repas de noces',
    'pricing.basic.f4':        'En supplément : décoration du véhicule — 50 €, Vin mousseux frais — 20 €',
    'pricing.basic.cta':       'Réserver une date',

    'pricing.premium.tier':    'EXPOSITION',
    'pricing.premium.name':    'Exhibition',
    'pricing.premium.period':  '/ heure',
    'pricing.premium.f1':      'Séances photo, expositions',
    'pricing.premium.f2':      'Tournages de films, figuration',
    'pricing.premium.f3':      'Clips musicaux',
    'pricing.premium.f4':      'Spots publicitaires',
    'pricing.premium.cta':     'Réserver une date',

    'pricing.vip.tier':        'SUR-MESURE',
    'pricing.vip.name':        'Votre projet',
    'pricing.vip.price':       'Sur devis',
    'pricing.vip.f1':          'N\'hésitez pas à nous contacter avec n\'importe quelle idée — nous discuterons volontiers des possibilités et de sa réalisation',
    'pricing.vip.f2':          'Le tarif sera entièrement personnalisé selon votre projet',
    'pricing.vip.cta':         'Contactez-nous',

    'pricing.note':            '* Chaque offre sera individuellement discutée et adaptée à vos besoins spécifiques',

    // Contact
    'contact.label':        'Contactez-nous',
    'contact.title':        'Réservation',
    'contact.infoTitle':    'Informations',
    'contact.infoSubtitle': 'Nous sommes là pour vous. Réservez votre expérience unique — n\'hésitez pas à nous contacter, nous répondrons volontiers à toutes vos questions.',
    'contact.address':      'Adresse',
    'contact.phone':        'Téléphone',
    'contact.email':        'Email',

    // Form
    'form.firstName':    'Prénom',
    'form.firstNamePh':  'Jean',
    'form.lastName':     'Nom',
    'form.lastNamePh':   'Dupont',
    'form.email':        'Email',
    'form.emailPh':      'jean@example.com',
    'form.phone':        'Téléphone',
    'form.phonePh':      '+421 900 000 000',
    'form.eventType':    'Type d\'événement',
    'form.eventSelect':  '-- Sélectionnez un type --',
    'form.eventWedding': 'Mariage',
    'form.eventBirthday':'Exposition',
    'form.eventPhoto':   'Votre projet',
    'form.date':         'Date de l\'événement',
    'form.address':      'Adresse de l\'événement', // Nouveau
    'form.addressPh':    'Rue, ville, code postal', // Nouveau
    'form.message':      'Message',
    'form.messagePh':    'Décrivez votre événement...',
    'form.submit':       'Envoyer le message',
    'form.success':      '✅ Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais !',
    'form.error':        '❌ Une erreur est survenue. Veuillez réessayer.',
    'form.required':     'Ce champ est obligatoire.',
    'form.emailInvalid': 'Veuillez saisir une adresse email valide.',
    'form.dateInvalid':  'Veuillez sélectionner une date future.',

    // Footer
    'footer.tagline': 'L\'élégance, ce n\'est pas d\'être remarqué, c\'est d\'être mémorable. — Giorgio Armani',
    'footer.links':   'Liens rapides',
    'footer.contact': 'Contact',
    'footer.copy':    '© 2026 VILIM Classic cars.',
    'footer.made':    'Made by JD',
  },

  /* ===================== ANGLAIS ===================== */
  en: {
    // Navigation
    'nav.vehicle':    'Vehicle',
    'nav.gallery':    'Gallery',
    'nav.events':     'Events',
    'nav.how':        'How it works',
    'nav.pricing':    'Pricing',
    'nav.contact':    'Contact',

    // Hero
    'hero.tagline':   'Historic vehicle for hire',
    'hero.subtitle':  'Rent a piece of history for your exceptional day. Elegance, style and unforgettable memories.',
    'hero.cta':       'Book a date',
    'hero.discover':  'Discover the vehicle',

    // vehicle — EN
    'vehicle.label':       'Our vehicle',
    'vehicle.title':       'Icon of German elegance',
    'vehicle.description': 'The 1983 Mercedes-Benz 230E is far more than a car — it is a symbol of indestructible quality and timeless elegance, from an era when German engineering defined the very notion of durability. With its refined fuel-injected engine and the iconic W123 silhouette, it represents the pinnacle of a time when cars were built to last a lifetime.',

    // Specs — labels
    'vehicle.specs.model.label':        'Model',
    'vehicle.specs.year.label':         'Year',
    'vehicle.specs.engine.label':       'Engine',
    'vehicle.specs.color.label':        'Color',
    'vehicle.specs.seats.label':        'Seats',
    'vehicle.specs.category.label':     'Category',
    'vehicle.specs.manufacturer.label': 'Manufacturer',
    'vehicle.specs.location.label':     'Location',

    // Specs — values
    'vehicle.specs.model.value':        '230E W123',
    'vehicle.specs.year.value':         '1983',
    'vehicle.specs.engine.value':       '2.3L · 136 hp',
    'vehicle.specs.color.value':        'Metallic green',
    'vehicle.specs.seats.value':        '5',
    'vehicle.specs.category.value':     'Historic vehicle',
    'vehicle.specs.manufacturer.value': 'Mercedes-Benz',
    'vehicle.specs.location.value':     'Žilina Region, Slovakia',

    'vehicle.feat1': 'Preserved and original interior',
    'vehicle.feat2': 'Impeccable technical condition',
    'vehicle.feat3': 'Ideal for wedding photos or other events and projects',
    'vehicle.feat4': 'Professional chauffeur available',

    // Gallery
    'gallery.label': 'Gallery',
    'gallery.title': 'Photography',
    'gallery.alt1':  'Mercedes 230E - Front view',
    'gallery.alt2':  'Mercedes 230E - Left side view',
    'gallery.alt3':  'Mercedes 230E - Rear view',
    'gallery.alt4':  'Mercedes 230E - Front detail',
    'gallery.alt5':  'Mercedes 230E - Front wheel view',
    'gallery.alt6':  'Mercedes 230E - Mercedes star detail',
    'gallery.alt7':  'Mercedes 230E - Driver side interior',
    'gallery.alt8':  'Mercedes 230E - Dashboard and steering wheel',
    'gallery.alt9':  'Mercedes 230E - Rear view with 230E badge',
    'gallery.alt10': 'Mercedes 230E - Three quarter front view',
    'gallery.alt11': 'Mercedes 230E - Rear view license plate',
    'gallery.alt12': 'Mercedes 230E - 230E badge detail on trunk',
    'gallery.alt13': 'Mercedes 230E - Front view at night headlights on',
    'gallery.alt14': 'Mercedes 230E - Front view at sunset',
    'gallery.alt15': 'Mercedes 230E - Mercedes star detail',


    // Events
    'events.label':          'Events',
    'events.title':          'For every exceptional occasion',
    'events.wedding.title':  'Wedding',
    'events.wedding.desc':   'Arrive at your wedding day in the style and elegance of the legendary Mercedes.',
    'events.birthday.title': 'Birthday',
    'events.birthday.desc':  'Make your birthday an unforgettable experience with a touch of luxury.',
    'events.photo.title':    'Photo shoot',
    'events.photo.desc':     'A perfect backdrop for fashion, advertising or personal photography projects.',
    'events.other.title':    'Other events',
    'events.other.desc':     'Corporate events, films, exhibitions... Contact us for a personalised quote.',

    // How it works
    'how.label':       'How does it work?',
    'how.title':       'The process',
    'how.step1.title': 'Contact us',
    'how.step1.desc': 'Send us an email or fill in the contact form with your request and desired date.',
    'how.step2.title': 'We discuss the details',
    'how.step2.desc':  'We go over the route, timing, location and all your special requirements.',
    'how.step3.title': 'Booking confirmation',
    'how.step3.desc':  'Once everything is agreed, we confirm the booking and the date is yours.',
    'how.step4.title': 'Your exceptional day',
    'how.step4.desc':  'Enjoy every moment with the elegance and style of the legendary Mercedes.',

    // Pricing
    'pricing.label':           'Pricing',
    'pricing.title':           'Our packages',

    'pricing.basic.tier':      'CEREMONY',
    'pricing.basic.name':      'Wedding',
    'pricing.basic.f1':        'Pre-wedding photo session',
    'pricing.basic.f2':        'Transport to and from the ceremony',
    'pricing.basic.f3':        'Professional chauffeur available through the wedding lunch',
    'pricing.basic.f4':        'Optional extras: vehicle decoration — €50, Chilled sparkling wine — €20',
    'pricing.basic.cta':       'Book a date',

    'pricing.premium.tier':    'EXHIBITION',
    'pricing.premium.name':    'Exhibition',
    'pricing.premium.period':  '/ hour',
    'pricing.premium.f1':      'Photo sessions, exhibitions',
    'pricing.premium.f2':      'Film shoots, background acting',
    'pricing.premium.f3':      'Music video clips',
    'pricing.premium.f4':      'Advertising spots',
    'pricing.premium.cta':     'Book a date',

    'pricing.vip.tier':        'BESPOKE',
    'pricing.vip.name':        'Your project',
    'pricing.vip.price':       'On request',
    'pricing.vip.f1':          'Feel free to reach out with any idea — we will gladly discuss the possibilities and how to bring it to life',
    'pricing.vip.f2':          'The price will be fully customised according to your project',
    'pricing.vip.cta':         'Contact us',

    'pricing.note':            '* Every offer will be individually discussed and tailored to your specific needs',


    // Contact
    'contact.label':        'Contact us',
    'contact.title':        'Booking',
    'contact.infoTitle':    'Information',
    'contact.infoSubtitle': 'We are here for you. Book your unique experience — feel free to get in touch, we will be happy to answer any questions you may have.',
    'contact.address':      'Address',
    'contact.phone':        'Phone',
    'contact.email':        'Email',

    // Form
    'form.firstName':    'First Name',
    'form.firstNamePh':  'John',
    'form.lastName':     'Last Name',
    'form.lastNamePh':   'Doe',
    'form.email':        'Email',
    'form.emailPh':      'john@example.com',
    'form.phone':        'Phone',
    'form.phonePh':      '+421 900 000 000',
    'form.eventType':    'Event Type',
    'form.eventSelect':  '-- Select a type --',
    'form.eventWedding': 'Wedding',
    'form.eventBirthday':'Exhibition',
    'form.eventPhoto':   'Your project',
    'form.date':         'Event Date',
    'form.address':      'Event Address', // Nouveau
    'form.addressPh':    'Street, city, zip code', // Nouveau
    'form.message':      'Message',
    'form.messagePh':    'Describe your event...',
    'form.submit':       'Send Message',
    'form.success':      '✅ Your message has been sent. We will get back to you shortly!',
    'form.error':        '❌ An error occurred. Please try again.',
    'form.required':     'This field is required.',
    'form.emailInvalid': 'Please enter a valid email address.',
    'form.dateInvalid':  'Please select a future date.',


    // Footer
    'footer.tagline': 'Elegance is not about being noticed, it\'s about being remembered. — Giorgio Armani',
    'footer.links':   'Quick links',
    'footer.contact': 'Contact',
    'footer.copy':    '© 2026 VILIM Classic cars.',
    'footer.made':    'Made by JD',
  },

};
