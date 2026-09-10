/* Français */
window.LANGS = window.LANGS || {};
window.LANGS.fr = {
  code: "fr", name: "Français", dir: "ltr",
  meta: { title: "Barrie Nissan · Espace client", description: "Tout ce dont un client de Barrie Nissan a besoin, au même endroit: heures d'ouverture, rendez-vous au service, pièces, financement, ressources propriétaires et qui appeler." },

  ui: {
    langLabel: "Langue",
    langPrompt: "Lisez cette page dans votre langue",
    hubTitle: "Espace client",
    tagline: "Tout ce dont vous avez besoin comme client de Barrie Nissan, en un clic. Heures, rendez-vous, pièces, financement, qui appeler. We make it easy, on vous simplifie la vie.",
    call: "Appeler", directions: "Itinéraire", fullWebsite: "Site complet",
    vcardLabel: "Enregistrer notre fiche contact",
    vcardHint: "Ajoute notre adresse, nos numéros, notre courriel et nos heures à vos contacts sur iPhone ou Android.",
    vcardNote: "Ventes lun-jeu 9h-20h, ven-sam 9h-17h. Service et pièces lun-ven 8h-17h. We Make It Easy.",
    openNow: "Ouvert", closedNow: "Fermé", checking: "Vérification des heures…",
    openUntil: "Ouvert · jusqu'à {t}", closedToday: "Fermé · aujourd'hui {a} – {b}", closedAllDay: "Fermé aujourd'hui", closed: "Fermé",
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    quickTitle: "De quoi avez-vous besoin aujourd'hui?", quickAccent: "On vous simplifie la vie.",
    hoursTitle: "Heures d'ouverture", findUs: "Nous trouver", openMaps: "Ouvrir dans Plans", callUs: "Nous appeler",
    localTollFree: "Local {a} · Sans frais {b}",
    depts: { sales: "Ventes", service: "Service", parts: "Pièces" },
    allBrandsTitle: "Vous ne roulez pas en Nissan? Vous êtes quand même des nôtres.",
    allBrandsText: "Si vous avez acheté votre véhicule chez nous, peu importe la marque sur le capot, tout ce qui est sur cette page s'applique à vous. Même équipe, mêmes outils de rendez-vous, mêmes programmes, mêmes standards.",
    loyaltyEyebrow: "Programme de fidélité",
    valueEyebrow: "My Mechanic",
    serviceEyebrow: "Service", serviceTitle: "À quoi vous attendre lors d'une visite au service",
    serviceIntro: "« We Make It Easy », ce n'est pas un slogan affiché au mur qu'on oublie. Voici à quoi chaque visite devrait ressembler. Si une étape ne tient pas la route, on veut le savoir le jour même.",
    salesEyebrow: "Ventes", salesTitle: "Vous venez d'acheter un véhicule? Voici la suite",
    teamEyebrow: "De vraies personnes, des lignes directes", teamTitle: "À qui s'adresser",
    teamIntro: "Sautez le menu téléphonique. Composez le (705) 726-0649 puis le poste, ou touchez pour appeler directement de votre téléphone.",
    ext: "poste",
    linksTitle: "Tous les liens, au même endroit",
    faqTitle: "Les questions qu'on entend chaque semaine",
    helpEyebrow: "On préfère le régler que le lire", helpTitle: "Quelque chose cloche? Parlez-nous d'abord.",
    helpText: "Un problème qu'on connaît est un problème qu'on peut régler, généralement dans la semaine. Joignez directement la personne responsable.",
    leaveGoogle: "Satisfait de votre visite? Laissez un avis Google", readReviews: "Lire les avis des clients",
    visitWebsite: "Visiter notre site complet", privacy: "Confidentialité", rights: "Tous droits réservés.",
    publishedBy: "Espace client conçu par",
    stickyBook: "Rendez-vous service", stickyCall: "Appeler",
    specialsEyebrow: "Promotions service", specialsTitle: "Les promotions de la saison", specialsIntro: "Montrez le coupon sur votre téléphone ou imprimez-le et remettez-le à votre conseiller. C'est tout.",
    viewCoupon: "Voir le coupon", regularPrice: "Prix régulier", validUntil: "Valide jusqu'au {d}", noExpiry: "Sans date limite", limitedSpots: "Places limitées",
    badgeSale: "En solde", badgeSave15: "Économisez 15 %", badgeNew: "Nouveau",
    couponTitle: "Coupon service", presentThis: "Présentez ce coupon à votre conseiller au service lors du dépôt du véhicule.", couponCode: "Code du coupon",
    printCoupon: "Imprimer le coupon", saveCoupon: "Enregistrer sur le téléphone", saveHint: "Sur iPhone: touchez Partager, puis Enregistrer dans Fichiers ou Ajouter à Photos. Sur Android: Partager, puis Imprimer, puis Enregistrer en PDF.", backToHub: "Retour à l'espace client",
    bookNow: "Réserver", oneCoupon: "Un coupon par visite. Ne peut être combiné à d'autres offres. Taxes et frais environnementaux en sus.",
    reviewsEyebrow: "Dites-nous comment ça s'est passé"
  },

  quickActions: {
    book:     ["Prendre rendez-vous au service", "En ligne en moins de 2 minutes, ou au poste 129"],
    call:     ["Appeler la concession", "(705) 726-0649"],
    map:      ["Obtenir l'itinéraire", "630 Veterans Dr, Barrie"],
    parts:    ["Commander des pièces d'origine", "Livraison ou cueillette en magasin"],
    tires:    ["Centre du pneu", "Pneus, jantes et changements saisonniers"],
    specials: ["Promotions service", "Offres en cours sur l'entretien"]
  },

  specials: {
    oil:     ["Promo changement d'huile", "Changement d'huile synthétique à 109,99 $ au lieu de 139,99 $.", "La plupart des marques et modèles. Jusqu'à 5 L d'huile synthétique, filtre inclus."],
    tires:   ["Changement de pneus Early Bird", "Changement, équilibrage des 4 roues, alignement des 4 roues et une saison d'entreposage de pneus, le tout pour 385 $. Réservez et complétez avant le 2 octobre 2026 et économisez 15 %.", "Le rabais de 15 % s'applique si le service est complété au plus tard le 2 octobre 2026. Entreposage pour une saison."],
    storage: ["Nouveau: entreposage de pneus", "60 $ pour la première saison. Places limitées, premier arrivé, premier servi.", "Prix de lancement pour la première saison. Tarif régulier par la suite."]
  },

  linkGroups: { shop: "Magasiner", finance: "Financement", service: "Service et pièces", owner: "Ressources propriétaires Nissan" },
  links: {
    new: "Véhicules neufs", used: "Véhicules d'occasion", cpo: "Occasion certifiée", build: "Configurer et tarifer", offers: "Offres en cours", trade: "Évaluer mon échange",
    financing: "Options de financement", apply: "Demande de financement", credit: "Vérification de crédit gratuite", loyalty: "Programme de fidélité", newcomer: "Programme nouveaux arrivants", grad: "Programme diplômés",
    serviceDept: "Département du service", partsDept: "Département des pièces", partsSpecials: "Promotions pièces", accessories: "Accessoires", collision: "Centre de collision (Zenetec)",
    recall: "Vérifier les rappels par NIV", manuals: "Manuels du propriétaire", connect: "NissanConnect", mynissan: "Application MyNissan", roadside: "Assistance routière et soutien"
  },

  hmc: {
    title: "High Mileage Club",
    text: "Votre véhicule a plus de six ans ou plus de 150 000 km? Toutes marques, tous modèles, vous êtes admissible. Le High Mileage Club, c'est notre façon de garder les véhicules plus âgés sur la route sans le prix concession.",
    bullets: [
      "15 % de rabais sur les pièces et la main-d'œuvre pour les réparations et certains entretiens préventifs",
      "Pièces d'origine installées par des techniciens formés en usine",
      "Garantie 1 an / 20 000 km pièces et main-d'œuvre sur la plupart des réparations",
      "Garantie 3 ans / km illimité sur les moteurs et transmissions",
      "Financement à 0 % sur les réparations via Flexiti, sur approbation de crédit"
    ],
    fineprint: "Exclut l'entretien programmé, les changements d'huile et la vente de pneus.",
    cta: "En savoir plus et adhérer"
  },

  value: {
    title: "De la valeur tous les jours, pas des promos ponctuelles",
    text: "Voici à quoi ressemble We Make It Easy sur la facture. Chaque jour, pour chaque client.",
    items: [
      ["Diagnostic gratuit", "avec explication des résultats"],
      ["Vérification d'alignement gratuite", "quand vous en avez besoin"],
      ["Véhicule de courtoisie à 20 $/jour", "quand vous en avez besoin, mentionnez-le à la réservation"],
      ["Garantie du plus bas prix sur les pneus", "au Centre du pneu Barrie Nissan"],
      ["Changement d'huile synthétique à 109,99 $", "prix de tous les jours"],
      ["Navette gratuite", "vers les destinations locales pendant les heures du service"]
    ]
  },

  serviceSteps: [
    ["Réservation facile", "En ligne ou par téléphone, à l'heure qui vous convient."],
    ["Accueil rapide", "On vous accueille sans attendre et votre conseiller confirme ce qui sera fait et quand ce sera prêt."],
    ["Estimation claire", "Travaux recommandés et coûts expliqués avant de commencer. Pas de surprise sur la facture."],
    ["Bien fait, à temps", "Techniciens formés en usine, pièces d'origine et un véhicule prêt à l'heure promise."],
    ["Explications et suivi", "Votre conseiller passe les travaux en revue avec vous à la livraison. On vous recontacte ensuite pour s'assurer que tout va bien."]
  ],
  purchaseSteps: [
    ["Votre livraison", "Tour complet du véhicule, jumelage du téléphone et configuration de NissanConnect avant de partir."],
    ["Les papiers, expliqués", "Chaque ligne de votre contrat, de la garantie et des produits de protection, en langage clair."],
    ["Des questions plus tard", "Appelez, textez ou passez nous voir. Votre conseiller aux ventes reste votre contact après la vente."],
    ["Premier entretien", "On vous rappelle quand le premier entretien est dû et on le planifie selon votre horaire."]
  ],

  team: {
    booking:  ["Prendre ou modifier un rendez-vous au service", "Coordonnatrice des rendez-vous"],
    advisors: ["Questions pendant votre visite au service", "Conseillers au service"],
    warranty: ["Questions de garantie", "Conseiller garantie"],
    parts:    ["Pièces, accessoires et pneus", "Spécialiste des pièces"],
    finance:  ["Financement et produits de protection", "Directeurs des services financiers"],
    reception: ["Tout le reste", "Réception"]
  },
  roles: { fixedOps: "Directeur des opérations fixes (service et pièces)", salesMgr: "Directeur général des ventes", gm: "Directeur général" },

  reviews: {
    title: "Bonne expérience? Dites-le à tout le monde. Mauvaise? Dites-le à Bjorn.",
    text: "Les avis, c'est ce qui fait grandir une concession familiale, et honnêtement, ça fait la journée de l'équipe. Si on vous a simplifié la vie, une note rapide sur l'une de ces plateformes prend environ une minute. Sinon, oubliez l'avis et écrivez directement au directeur général. Il lit chaque message.",
    platforms: {
      google:      ["Notez-nous sur Google", "Notre fiche Google, 5 étoiles si on les mérite"],
      facebook:    ["Recommandez-nous sur Facebook", "Avis et recommandations Facebook"],
      dealerrater: ["Évaluez-nous sur DealerRater", "Le site d'avis sur les concessions au Canada"]
    },
    unhappyLabel: "Pas satisfait? Écrire au directeur général",
    unhappySubject: "Feedback on my visit to Barrie Nissan",
    unhappyBody: "Hi Bjorn,\n\nI recently visited Barrie Nissan and wanted to share some feedback. (Vous pouvez écrire en français ci-dessous.)\n\nDate of visit / Date de la visite: \nDepartment / Département (Sales / Service / Parts): \nWhat happened / Ce qui s'est passé: \n\nBest way to reach me / Meilleure façon de me joindre: \n\nThank you,\n"
  },

  faq: [
    ["Comment prendre rendez-vous au service?", "En ligne en quelques minutes avec le bouton « Prendre rendez-vous au service » ci-dessus, ou en appelant Nancy au (705) 726-0649, poste 129, pendant les heures du service. Dites-nous ce que vous remarquez et on réserve le temps qu'il faut. We make it easy."],
    ["Concrètement, « We Make It Easy », ça me donne quoi?", "Des prix de tous les jours plutôt que des promos ponctuelles: diagnostic gratuit, vérification d'alignement gratuite, véhicule de courtoisie à 20 $/jour, garantie du plus bas prix sur les pneus et changement d'huile synthétique à 109,99 $. En plus, une navette locale gratuite et 15 % de rabais sur les réparations des véhicules plus âgés ou à fort kilométrage via le High Mileage Club."],
    ["Entretenez-vous des véhicules qui ne sont pas des Nissan?", "Oui, toutes marques et tous modèles. Si vous avez acheté un véhicule d'occasion chez nous, peu importe la marque, vous êtes un client de Barrie Nissan et tout ce qui est sur cette page s'applique à vous. Le High Mileage Club est aussi ouvert à toutes les marques."],
    ["Vais-je connaître le coût avant les travaux?", "Oui. Votre conseiller passe en revue les travaux recommandés et l'estimation avec vous avant de commencer, et vous appelle pour approbation si quelque chose de nouveau apparaît pendant la visite."],
    ["Comment serai-je tenu au courant pendant ma visite?", "Votre conseiller confirme l'heure promise au dépôt du véhicule et vous contacte si le délai ou l'étendue des travaux change. TODO (à confirmer avec la concession): téléphone seulement, ou aussi par texto."],
    ["Offrez-vous une navette ou un véhicule de courtoisie?", "Les deux. Une navette gratuite dessert les destinations locales pendant les heures du service, et des véhicules de courtoisie sont offerts à 20 $ par jour quand vous en avez besoin. Mentionnez-le à la réservation pour que tout soit prêt à votre arrivée."],
    ["Puis-je attendre sur place?", "Bien sûr. Prenez un café dans le salon, connectez-vous au Wi-Fi et avancez votre travail pendant qu'on s'occupe du véhicule. TODO (à confirmer avec la concession): liste exacte des commodités."],
    ["Comment vérifier si mon véhicule fait l'objet d'un rappel?", "Utilisez l'outil de vérification des rappels de Nissan Canada avec votre NIV (lien ci-dessus). Les réparations liées à un rappel sont sans frais. On peut aussi vérifier pour vous à votre prochaine visite."],
    ["Où aller pour les pneus et les changements saisonniers?", "Au Centre du pneu Barrie Nissan, directement sur place, avec la garantie du plus bas prix sur les pneus. Réservez un changement saisonnier comme n'importe quel rendez-vous au service. Nouveau cette saison: entreposage de pneus à 60 $ pour la première saison, places limitées. Voyez le forfait Early Bird dans les promotions ci-dessus."],
    ["Je viens d'acheter mon véhicule. Que se passe-t-il ensuite?", "Votre spécialiste à la livraison vous fait le tour du véhicule, jumelle votre téléphone et configure NissanConnect. Si des questions surgissent une fois à la maison, on préfère que vous appeliez plutôt que de deviner. Un appel de suivi dans les jours suivants est normal, et le rappel de votre premier entretien viendra de nous."],
    ["Quelque chose n'a pas fonctionné lors de ma visite. À qui parler?", "Dites-le-nous d'abord, et vite. Steve Ward dirige le service et les pièces, Quinn Graham dirige les ventes et Bjorn Surmann est le directeur général. Leurs lignes directes sont ci-dessous pour que le problème soit réglé la même semaine, pas après qu'un sondage arrive dans votre boîte courriel."]
  ]
};
