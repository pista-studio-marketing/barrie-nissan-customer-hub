/* ============================================================
   DEALER CONFIG — Barrie Nissan
   ------------------------------------------------------------
   This is the ONLY file you need to edit to adapt the hub to
   another dealership. Everything on the page is rendered from
   this object. Items marked TODO are placeholders to confirm
   with the dealer before going live.
   ============================================================ */

window.DEALER = {
  name: "Barrie Nissan",
  brand: "Nissan",
  tagline: "Your customer hub. Everything you need, one tap away.",
  logo: "assets/logo.svg",              // swap for the dealer's logo (PNG/SVG)
  website: "https://www.barrienissan.ca/",

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
    service: "(705) 726-0649",          // TODO: confirm if service has a direct line
    parts: "(705) 726-0649"             // TODO: confirm if parts has a direct line
  },

  // 0 = Sunday ... 6 = Saturday. Use null for closed. 24h format.
  hours: {
    Sales:   { 1:["9:00","20:00"], 2:["9:00","20:00"], 3:["9:00","20:00"], 4:["9:00","20:00"], 5:["9:00","17:00"], 6:["9:00","17:00"], 0:null },
    Service: { 1:["8:00","17:00"], 2:["8:00","17:00"], 3:["8:00","17:00"], 4:["8:00","17:00"], 5:["8:00","17:00"], 6:null, 0:null },
    Parts:   { 1:["8:00","17:00"], 2:["8:00","17:00"], 3:["8:00","17:00"], 4:["8:00","17:00"], 5:["8:00","17:00"], 6:null, 0:null }
  },

  // Primary actions — shown as the big tiles at the top
  quickActions: [
    { icon: "wrench",  label: "Book a service appointment", sub: "Online, in under 2 minutes", url: "https://conscheduling.tekioncloud.com/consumer-scheduling/sign-in/phone?accessToken=barrienissan_367_1856", primary: true },
    { icon: "phone",   label: "Call the dealership",        sub: "(705) 726-0649",             url: "tel:+17057260649" },
    { icon: "pin",     label: "Get directions",             sub: "630 Veterans Dr, Barrie",    url: "https://www.google.com/maps/dir/?api=1&destination=630+Veterans+Dr,+Barrie,+ON+L4N+9J4" },
    { icon: "parts",   label: "Order genuine parts",        sub: "Ship or pick up in store",   url: "https://parts.barrienissan.ca/" },
    { icon: "tire",    label: "Tire Centre",                sub: "Tires, rims and seasonal swaps", url: "https://www.barrienissan.ca/barrie-nissan-tire-centre/" },
    { icon: "tag",     label: "Service specials",           sub: "Current offers on maintenance", url: "https://www.barrienissan.ca/service-specials/" }
  ],

  // Secondary links, grouped
  linkGroups: [
    {
      title: "Shop",
      links: [
        { label: "New inventory",            url: "https://www.barrienissan.ca/inventory/new/" },
        { label: "Pre-owned inventory",      url: "https://www.barrienissan.ca/inventory/used/" },
        { label: "Certified Pre-Owned",      url: "https://www.barrienissan.ca/inventory/certified/" },
        { label: "Build & price",            url: "https://www.barrienissan.ca/buildandprice/nissan" },
        { label: "Current offers",           url: "https://www.barrienissan.ca/nissan-regional-offers/" },
        { label: "Value my trade-in",        url: "https://www.barrienissan.ca/appraise-my-trade-in/" }
      ]
    },
    {
      title: "Finance",
      links: [
        { label: "Financing options",        url: "https://www.barrienissan.ca/financial-services/" },
        { label: "Apply for financing",      url: "https://www.barrienissan.ca/financial-services/apply/" },
        { label: "Free credit check",        url: "https://www.barrienissan.ca/free-credit-check/" },
        { label: "Loyalty program",          url: "https://www.barrienissan.ca/nissan-loyalty-program/" },
        { label: "Newcomer program",         url: "https://www.barrienissan.ca/nissan-newcomer-program/" },
        { label: "Graduate program",         url: "https://www.barrienissan.ca/nissan-grad-program/" }
      ]
    },
    {
      title: "Service & parts",
      links: [
        { label: "Service department",       url: "https://www.barrienissan.ca/service/" },
        { label: "Parts department",         url: "https://www.barrienissan.ca/parts/" },
        { label: "Parts specials",           url: "https://www.barrienissan.ca/parts-specials/" },
        { label: "Accessories",              url: "https://www.barrienissan.ca/accessories/" },
        { label: "Collision Centre (Zenetec)", url: "https://www.zenetec.com/barrie-nissan/" }
      ]
    },
    {
      title: "Nissan owner resources",
      links: [
        { label: "Recall lookup by VIN",     url: "https://www.nissan.ca/service/vin-recall.html" },
        { label: "Owner's manuals & guides", url: "https://www.nissan.ca/owners/manuals-and-guides.html" },
        { label: "NissanConnect",            url: "https://www.nissan.ca/services/apps/nissan-connect/overview.html" },
        { label: "MyNissan app",             url: "https://www.nissan.ca/services/apps/mynissan-app.html" },
        { label: "Roadside assistance & owner support", url: "https://www.nissan.ca/owners/owner-support.html" }
      ]
    }
  ],

  // High Mileage Club — TODO: replace URL and details with the dealer's program page
  highMileageClub: {
    enabled: true,
    title: "High Mileage Club",
    text: "Drive a lot? You're our kind of customer. The High Mileage Club rewards drivers who put in the kilometres with exclusive perks on maintenance and service at Barrie Nissan.",
    bullets: [
      "TODO: perk #1 (e.g. priority booking)",
      "TODO: perk #2 (e.g. savings on scheduled maintenance)",
      "TODO: perk #3 (e.g. seasonal tire swap benefit)"
    ],
    ctaLabel: "Join the High Mileage Club",
    ctaUrl: "https://www.barrienissan.ca/"    // TODO: program page or sign-up form
  },

  // Direct contacts for when something isn't right. TODO: confirm names / emails / direct lines.
  escalation: [
    { role: "Service Manager", name: "TODO", phone: "(705) 726-0649", email: "" },
    { role: "Sales Manager",   name: "TODO", phone: "(705) 726-0649", email: "" },
    { role: "General Manager", name: "Bjorn Surmann", phone: "(705) 726-0649", email: "bsurmann@barrienissan.com" }
  ],

  social: [
    { label: "Facebook",  url: "https://www.facebook.com/NissanBarrie/" },
    { label: "Instagram", url: "https://www.instagram.com/barrienissan/" },
    { label: "YouTube",   url: "https://www.youtube.com/channel/UCjnloXsmYbSHQ5p1WT6-nSQ" }
  ],

  reviewsUrl: "https://www.barrienissan.ca/customer-reviews/",
  googleReviewUrl: "",                 // TODO: paste the "Write a review" Google link (g.page/r/... )
  privacyUrl: "http://applications.edealer.ca/PrivacyPolicy.htm",

  // FAQ — written around the themes customers are asked about in Nissan owner surveys.
  faq: [
    { q: "How do I book a service appointment?",
      a: "Online in a couple of minutes using the Book a service appointment button above, or by calling (705) 726-0649 during service hours. Tell us what you're noticing and we'll book the right amount of time." },
    { q: "Do you service vehicles that aren't Nissans?",
      a: "Yes. If you bought a pre-owned vehicle from us, whatever the badge on the hood, you're a Barrie Nissan customer and every service, program and contact on this page applies to you." },
    { q: "Will I know the cost before any work is done?",
      a: "Yes. Your service advisor reviews the recommended work and the estimate with you before anything starts, and calls you for approval if something new comes up during the visit." },
    { q: "How will I be kept updated during my visit?",
      a: "Your advisor will confirm the promised time when you drop off and reach out by phone or text if the timing or the scope changes. TODO: confirm text/SMS update availability." },
    { q: "Do you offer a shuttle or courtesy vehicle?",
      a: "TODO: confirm shuttle radius, hours and loaner availability, then describe them here. Ask your advisor when booking so it can be arranged in advance." },
    { q: "Can I wait at the dealership?",
      a: "Absolutely. TODO: describe the lounge (Wi-Fi, coffee, work space, kids' area) so customers know what to expect." },
    { q: "How do I check if my vehicle has an open recall?",
      a: "Use the Nissan Canada recall lookup with your VIN (link above). Recall repairs are done at no charge. We can also check for you at your next visit." },
    { q: "Where are my seasonal tires stored?",
      a: "TODO: confirm whether tire storage is offered, pricing and how to book a seasonal swap. The Tire Centre link above covers tires, rims and installation." },
    { q: "I just bought my vehicle. What happens next?",
      a: "Your delivery specialist walks you through the vehicle, pairs your phone and sets up NissanConnect. If you have questions once you're home, we'd rather you call than guess. A follow-up call within a few days is normal, and your first maintenance reminder will come from us." },
    { q: "Something wasn't right with my visit. Who do I talk to?",
      a: "Please tell us first, and tell us quickly. The direct contacts below exist so a problem gets fixed the same week, not after a survey lands in your inbox." }
  ],

  // Service visit steps (aligned with typical CSI survey touchpoints)
  serviceSteps: [
    { title: "Easy booking",         text: "Online or by phone, with a time that fits your day." },
    { title: "Prompt welcome",       text: "You're greeted quickly and your advisor confirms what's being done and when it'll be ready." },
    { title: "Clear estimate",       text: "Recommended work and cost explained before anything starts. No surprises on the invoice." },
    { title: "Done right, on time",  text: "Factory-trained technicians, genuine parts, and a vehicle ready when promised." },
    { title: "Walk-through & follow-up", text: "Your advisor reviews the work with you at pick-up. We'll check in afterwards to make sure everything's still right." }
  ],

  // After purchase steps (aligned with typical SSI survey touchpoints)
  purchaseSteps: [
    { title: "Your delivery",        text: "A full walk-through of the vehicle, phone pairing and NissanConnect setup before you drive off." },
    { title: "Paperwork, explained", text: "Every line of your agreement, warranty and protection products explained in plain language." },
    { title: "Questions later",      text: "Call, text or come by. Your sales consultant stays your point of contact after the sale." },
    { title: "First service",        text: "We'll remind you when your first maintenance is due and book it around your schedule." }
  ]
};
