/* ============================================================
   DEALER CONFIG — Barrie Nissan
   ------------------------------------------------------------
   Non-translatable data only: names, numbers, URLs, hours,
   people. Every piece of customer-facing TEXT lives in
   js/lang/<code>.js so the page can switch language.
   To adapt to another dealer: edit this file + js/lang/en.js,
   then hand en.js to translators (or regenerate the others).
   ============================================================ */

window.DEALER = {
  name: "Barrie Nissan",
  brand: "Nissan",
  slogan: "We Make It Easy",            // brand line, kept in English in every language
  logo: "assets/logo.png",             // drop the dealer's PNG here (transparent background)
  logoFallback: "https://www.barrienissan.ca/wp-content/uploads/2024/08/BNI-Logo-w-Tag_0624_FINAL-RED.jpg",
  website: "https://www.barrienissan.ca/",

  // Languages offered, in display order. Codes must match a file in js/lang/. First one is the default.
  languages: ["en", "uk", "fr", "es", "pt", "tl"],

  address: {
    line1: "630 Veterans Drive",
    city: "Barrie",
    province: "ON",
    postal: "L4N 9J4",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=630+Veterans+Dr,+Barrie,+ON+L4N+9J4"
  },

  phones: {
    main: "(705) 726-0649",
    tollFree: "(866) 895-9224",
    service: "(705) 726-0649 ext. 129", // Nancy Quinn, Service Appointment Coordinator
    parts: "(705) 726-0649 ext. 120"    // Nicole Balado, Parts Specialist
  },
  email: "reception@barrienissan.com",

  vcard: { enabled: true },

  // 0 = Sunday ... 6 = Saturday. null = closed. 24h format.
  hours: {
    sales:   { 1:["9:00","20:00"], 2:["9:00","20:00"], 3:["9:00","20:00"], 4:["9:00","20:00"], 5:["9:00","17:00"], 6:["9:00","17:00"], 0:null },
    service: { 1:["8:00","17:00"], 2:["8:00","17:00"], 3:["8:00","17:00"], 4:["8:00","17:00"], 5:["8:00","17:00"], 6:null, 0:null },
    parts:   { 1:["8:00","17:00"], 2:["8:00","17:00"], 3:["8:00","17:00"], 4:["8:00","17:00"], 5:["8:00","17:00"], 6:null, 0:null }
  },

  // Big tiles. Text comes from lang.quickActions[key].
  quickActions: [
    { key: "book",   icon: "wrench", url: "https://conscheduling.tekioncloud.com/consumer-scheduling/sign-in/phone?accessToken=barrienissan_367_1856", primary: true },
    { key: "call",   icon: "phone",  url: "tel:+17057260649" },
    { key: "map",    icon: "pin",    url: "https://www.google.com/maps/dir/?api=1&destination=630+Veterans+Dr,+Barrie,+ON+L4N+9J4" },
    { key: "parts",  icon: "parts",  url: "https://parts.barrienissan.ca/" },
    { key: "tires",  icon: "tire",   url: "https://www.barrienissan.ca/barrie-nissan-tire-centre/" },
    { key: "specials", icon: "tag",  url: "#specials" }
  ],

  // Service specials shown as coupons. Text (title, details, terms) comes from lang.specials[id].
  // price / regular are display strings; validUntil is ISO (null = no end date); code is shown on the coupon.
  specials: [
    { id: "oil",   price: "$109.99", regular: "$139.99", validUntil: null,         code: "BN-OIL-109",  badge: "sale" },
    { id: "tires", price: "$385",    regular: null,      validUntil: "2026-10-02", code: "BN-EARLY-15", badge: "save15" },
    { id: "storage", price: "$60",   regular: null,      validUntil: null,         code: "BN-STORE-60", badge: "new" }
  ],
  specialsContact: { name: "Steve Ward", email: "sward@barrienissan.com" },

  // Grouped links. Group titles and link labels come from lang.linkGroups / lang.links.
  linkGroups: [
    { key: "shop", links: [
      { key: "new",       url: "https://www.barrienissan.ca/inventory/new/" },
      { key: "used",      url: "https://www.barrienissan.ca/inventory/used/" },
      { key: "cpo",       url: "https://www.barrienissan.ca/inventory/certified/" },
      { key: "build",     url: "https://www.barrienissan.ca/buildandprice/nissan" },
      { key: "offers",    url: "https://www.barrienissan.ca/nissan-regional-offers/" },
      { key: "trade",     url: "https://www.barrienissan.ca/appraise-my-trade-in/" }
    ]},
    { key: "finance", links: [
      { key: "financing", url: "https://www.barrienissan.ca/financial-services/" },
      { key: "apply",     url: "https://www.barrienissan.ca/financial-services/apply/" },
      { key: "credit",    url: "https://www.barrienissan.ca/free-credit-check/" },
      { key: "loyalty",   url: "https://www.barrienissan.ca/nissan-loyalty-program/" },
      { key: "newcomer",  url: "https://www.barrienissan.ca/nissan-newcomer-program/" },
      { key: "grad",      url: "https://www.barrienissan.ca/nissan-grad-program/" }
    ]},
    { key: "service", links: [
      { key: "serviceDept", url: "https://www.barrienissan.ca/service/" },
      { key: "partsDept",   url: "https://www.barrienissan.ca/parts/" },
      { key: "partsSpecials", url: "https://www.barrienissan.ca/parts-specials/" },
      { key: "accessories", url: "https://www.barrienissan.ca/accessories/" },
      { key: "collision",   url: "https://www.zenetec.com/barrie-nissan/" }
    ]},
    { key: "owner", links: [
      { key: "recall",    url: "https://www.nissan.ca/service/vin-recall.html" },
      { key: "manuals",   url: "https://www.nissan.ca/owners/manuals-and-guides.html" },
      { key: "connect",   url: "https://www.nissan.ca/services/apps/nissan-connect/overview.html" },
      { key: "mynissan",  url: "https://www.nissan.ca/services/apps/mynissan-app.html" },
      { key: "roadside",  url: "https://www.nissan.ca/owners/owner-support.html" }
    ]}
  ],

  highMileageClub: { enabled: true, ctaUrl: "https://www.barrienissan.ca/service/high-mileage-club/" },
  everydayValue: { enabled: true },

  // Escalation contacts. Role label comes from lang.roles[roleKey].
  escalation: [
    { roleKey: "fixedOps", name: "Steve Ward",    phone: "(705) 726-0649 ext. 119", email: "sward@barrienissan.com" },
    { roleKey: "salesMgr", name: "Quinn Graham",  phone: "(705) 726-0649 ext. 105", email: "qgraham@barrienissan.com" },
    { roleKey: "gm",       name: "Bjorn Surmann", phone: "(705) 726-0649 ext. 108", email: "bsurmann@barrienissan.com" }
  ],

  // Who to ask for. Need + role text come from lang.team[key].
  team: [
    { key: "booking",  name: "Nancy Quinn",       ext: "129", email: "nquinn@barrienissan.com" },
    { key: "advisors", name: "Meagan Hardy, Tony Morra, Madisyn Vermeire", ext: "124 / 118 / 117", email: "" },
    { key: "warranty", name: "Scott Pierce",      ext: "104", email: "spierce@barrienissan.com" },
    { key: "parts",    name: "Nicole Balado",     ext: "120", email: "nbalado@barrienissan.com" },
    { key: "finance",  name: "Graham McElhone, Farid Bozorgmehri", ext: "109 / 107", email: "" },
    { key: "reception", name: "Samantha",         ext: "101", email: "reception@barrienissan.com" }
  ],

  reviews: {
    platforms: [
      { key: "google",      url: "https://search.google.com/local/writereview?placeid=ChIJdTDPmrW9KogRyVvvqVBzJss" },
      { key: "facebook",    url: "https://www.facebook.com/NissanBarrie/reviews" },
      { key: "dealerrater", url: "https://www.dealerrater.ca/dealer/Barrie-Nissan-review-31769/" }
    ],
    unhappyTo: "bsurmann@barrienissan.com"   // the GM reads English; subject/body stay in English (see lang.reviews.unhappy*)
  },
  googlePlaceId: "ChIJdTDPmrW9KogRyVvvqVBzJss",
  reviewsUrl: "https://www.barrienissan.ca/customer-reviews/",

  social: [
    { label: "Facebook",  url: "https://www.facebook.com/NissanBarrie/" },
    { label: "Instagram", url: "https://www.instagram.com/barrienissan/" },
    { label: "YouTube",   url: "https://www.youtube.com/channel/UCjnloXsmYbSHQ5p1WT6-nSQ" }
  ],
  privacyUrl: "http://applications.edealer.ca/PrivacyPolicy.htm",
  publisher: { name: "Pista Studio Marketing inc.", url: "https://pista.ca" }
};
