/* English — master file. Every other js/lang/*.js mirrors these keys. */
window.LANGS = window.LANGS || {};
window.LANGS.en = {
  code: "en", name: "English", dir: "ltr",
  meta: { title: "Barrie Nissan · Customer Hub", description: "Everything a Barrie Nissan customer needs in one place: hours, service booking, parts, financing, owner resources and who to call." },

  ui: {
    langLabel: "Language",
    langPrompt: "Read this page in your language",
    hubTitle: "Customer Hub",
    tagline: "Everything you need as a Barrie Nissan customer, one tap away. Hours, booking, parts, financing, who to call. We make it easy.",
    call: "Call", directions: "Directions", fullWebsite: "Full website",
    vcardLabel: "Save our contact card",
    vcardHint: "Adds our address, phone numbers, email and hours to your contacts on iPhone or Android.",
    vcardNote: "Sales Mon-Thu 9am-8pm, Fri-Sat 9am-5pm. Service & Parts Mon-Fri 8am-5pm. We Make It Easy.",
    openNow: "Open now", closedNow: "Closed now", checking: "Checking hours…",
    openUntil: "Open now · until {t}", closedToday: "Closed now · today {a} – {b}", closedAllDay: "Closed today", closed: "Closed",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    quickTitle: "What do you need today?", quickAccent: "We make it easy.",
    hoursTitle: "Hours", findUs: "Find us", openMaps: "Open in Maps", callUs: "Call us",
    localTollFree: "Local {a} · Toll free {b}",
    depts: { sales: "Sales", service: "Service", parts: "Parts" },
    allBrandsTitle: "Not driving a Nissan? You're still one of ours.",
    allBrandsText: "If you bought your vehicle here, whatever the badge on the hood, everything on this page applies to you. Same team, same booking tools, same programs, same standards of care.",
    loyaltyEyebrow: "Loyalty program",
    valueEyebrow: "My Mechanic",
    serviceEyebrow: "Service", serviceTitle: "What to expect from a service visit",
    serviceIntro: "\"We Make It Easy\" isn't a slogan we put on the wall and forget. Here's what a visit should look like, every time. If any step falls short, we want to hear about it the same day.",
    salesEyebrow: "Sales", salesTitle: "Just bought a vehicle? Here's what comes next",
    teamEyebrow: "Real people, direct lines", teamTitle: "Who to ask for",
    teamIntro: "Skip the phone tree. Call (705) 726-0649 and dial the extension, or tap to call directly from your phone.",
    ext: "ext.",
    linksTitle: "All the links, in one place",
    faqTitle: "Questions we get every week",
    helpEyebrow: "We'd rather fix it than read about it", helpTitle: "Something not right? Talk to us first.",
    helpText: "A problem we know about is a problem we can solve, usually within the week. Reach the person in charge directly.",
    leaveGoogle: "Happy with your visit? Leave a Google review", readReviews: "Read customer reviews",
    visitWebsite: "Visit our full website", privacy: "Privacy", rights: "All rights reserved.",
    publishedBy: "Customer Hub built by",
    stickyBook: "Book service", stickyCall: "Call",
    specialsEyebrow: "Service specials", specialsTitle: "This season's specials", specialsIntro: "Show the coupon on your phone or print it and hand it to your advisor. That's it.",
    viewCoupon: "View coupon", regularPrice: "Regular price", validUntil: "Valid until {d}", noExpiry: "No expiry", limitedSpots: "Limited spots",
    badgeSale: "On sale", badgeSave15: "Save 15%", badgeNew: "New", badgeFree: "Free",
    couponTitle: "Service coupon", presentThis: "Present this coupon to your service advisor at drop-off.", couponCode: "Coupon code",
    printCoupon: "Print coupon", saveCoupon: "Save to phone", saveHint: "On iPhone: tap Share, then Save to Files or Add to Photos. On Android: tap Share, then Print, then Save as PDF.", backToHub: "Back to the hub",
    bookNow: "Book now", oneCoupon: "One coupon per visit. Cannot be combined with other offers. Taxes and environmental fees extra.",
    specialsService: "Service", specialsParts: "Parts & accessories", presentThisParts: "Present this coupon at the parts counter at time of purchase.", plusTax: "plus tax", partsCoupon: "Parts coupon", orderParts: "Order online", askParts: "Ask the parts team",
    reviewsEyebrow: "Tell us how we did"
  },

  quickActions: {
    book:     ["Book a service appointment", "Online in under 2 minutes, or call ext. 129"],
    call:     ["Call the dealership", "(705) 726-0649"],
    map:      ["Get directions", "630 Veterans Dr, Barrie"],
    parts:    ["Order genuine parts", "Ship or pick up in store"],
    tires:    ["Tire Centre", "Tires, rims and seasonal swaps"],
    specials: ["Service specials", "Current offers on maintenance"]
  },

  specials: {
    oil:     ["Oil change special", "Full synthetic oil change, on sale for $109.99 instead of $139.99.", "Most makes and models. Up to 5 L of synthetic oil, filter included."],
    tires:   ["Early Bird tire changeover", "Changeover, 4-wheel balance, 4-wheel alignment and one season of tire storage, all for $385. Book and complete before October 2, 2026 and save 15%.", "15% off applies when the service is completed by October 2, 2026. Storage is one season."],
    storage: ["New: tire storage", "$60 for the first season. Limited spots available, first come, first served.", "Introductory price for the first season. Standard rate applies afterwards."],
    wipers:   ["Wiper blades + washer fluid", "Front wiper blades and a jug of washer fluid for $64.99 plus tax.", "Most makes and models. In-stock blades only."],
    acc:      ["10% off all accessories", "Every accessory in the catalogue, floor mats and liners included.", "Excludes installation labour. In-stock and special-order accessories."],
    battery:  ["$25 off car & truck batteries", "$25 off any car or truck battery, installation available on the spot.", "One battery per coupon. Installation labour extra."],
    tpms:     ["10% off tire pressure sensors", "Ten percent off TPMS sensors, just in time for winter tires.", "Parts only. Installation and programming extra."],
    fob:      ["Key fob batteries: buy one, get one 50% off", "Buy one key fob battery, get the second at half price.", "Second battery must be of equal or lesser value."],
    frames:   ["Free Barrie Nissan licence plate frames", "Front and rear Barrie Nissan licence plate frames, no charge.", "One set per customer, while supplies last."],
    delivery: ["New: local home delivery", "Order your parts and accessories online or by phone and we'll deliver to your door in the Barrie area.", "Ask the parts team about delivery zones and timing."]
  },

  linkGroups: { shop: "Shop", finance: "Finance", service: "Service & parts", owner: "Nissan owner resources" },
  links: {
    new: "New inventory", used: "Pre-owned inventory", cpo: "Certified Pre-Owned", build: "Build & price", offers: "Current offers", trade: "Value my trade-in",
    financing: "Financing options", apply: "Apply for financing", credit: "Free credit check", loyalty: "Loyalty program", newcomer: "Newcomer program", grad: "Graduate program",
    serviceDept: "Service department", partsDept: "Parts department", partsSpecials: "Parts specials", accessories: "Accessories", collision: "Collision Centre (Zenetec)",
    recall: "Recall lookup by VIN", manuals: "Owner's manuals & guides", connect: "NissanConnect", mynissan: "MyNissan app", roadside: "Roadside assistance & owner support"
  },

  hmc: {
    title: "High Mileage Club",
    text: "Is your vehicle more than six years old, or past 150,000 km? Any make, any model, you're in. The High Mileage Club is how we keep older vehicles on the road without the dealership price tag.",
    bullets: [
      "15% off parts and labour on repairs and select preventative maintenance",
      "Genuine parts installed by factory-trained technicians",
      "1-year / 20,000 km parts and labour warranty on most repairs",
      "3-year / unlimited km warranty on engines and transmissions",
      "0% financing on repairs available through Flexiti, on approved credit"
    ],
    fineprint: "Excludes scheduled maintenance, oil changes and tire sales.",
    cta: "Learn more & join"
  },

  value: {
    title: "Everyday value, not one-time specials",
    text: "This is what We Make It Easy looks like on the invoice. Every day, for every customer.",
    items: [
      ["Free diagnostic scans", "with a consultation on the results"],
      ["Free alignment checks", "anytime you need one"],
      ["$20/day loaner vehicles", "anytime you need one, ask when booking"],
      ["Lowest price guarantee on tires", "through the Barrie Nissan Tire Centre"],
      ["$109.99 full synthetic oil change", "everyday price"],
      ["Free shuttle", "to local destinations during service hours"]
    ]
  },

  serviceSteps: [
    ["Easy booking", "Online or by phone, with a time that fits your day."],
    ["Prompt welcome", "You're greeted quickly and your advisor confirms what's being done and when it'll be ready."],
    ["Clear estimate", "Recommended work and cost explained before anything starts. No surprises on the invoice."],
    ["Done right, on time", "Factory-trained technicians, genuine parts, and a vehicle ready when promised."],
    ["Walk-through & follow-up", "Your advisor reviews the work with you at pick-up. We'll check in afterwards to make sure everything's still right."]
  ],
  purchaseSteps: [
    ["Your delivery", "A full walk-through of the vehicle, phone pairing and NissanConnect setup before you drive off."],
    ["Paperwork, explained", "Every line of your agreement, warranty and protection products explained in plain language."],
    ["Questions later", "Call, text or come by. Your sales consultant stays your point of contact after the sale."],
    ["First service", "We'll remind you when your first maintenance is due and book it around your schedule."]
  ],

  team: {
    booking:  ["Book or change a service appointment", "Service Appointment Coordinator"],
    advisors: ["Questions during your service visit", "Service Consultants"],
    warranty: ["Warranty questions", "Warranty Consultant"],
    parts:    ["Parts, accessories and tires", "Parts Specialist"],
    finance:  ["Financing and protection products", "Financial Services Managers"],
    reception: ["Anything else", "Reception"]
  },
  roles: { fixedOps: "Fixed Operations Manager (Service & Parts)", salesMgr: "General Sales Manager", gm: "General Manager" },

  reviews: {
    title: "Had a good experience? Tell the world. Had a bad one? Tell Bjorn.",
    text: "Reviews are how a family-run dealership grows, and honestly, they make the team's day. If we made it easy for you, a quick rating on one of these takes about a minute. If we didn't, skip the review and write to the General Manager directly. He reads every message.",
    platforms: {
      google:      ["Rate us on Google", "Our Google listing, 5 stars if we earned them"],
      facebook:    ["Recommend us on Facebook", "Facebook reviews and recommendations"],
      dealerrater: ["Review us on DealerRater", "Canada's dealership review site"]
    },
    unhappyLabel: "Not satisfied? Email the General Manager",
    unhappySubject: "Feedback on my visit to Barrie Nissan",
    unhappyBody: "Hi Bjorn,\n\nI recently visited Barrie Nissan and wanted to share some feedback.\n\nDate of visit: \nDepartment (Sales / Service / Parts): \nWhat happened: \n\nBest way to reach me: \n\nThank you,\n"
  },

  faq: [
    ["How do I book a service appointment?", "Online in a couple of minutes using the Book a service appointment button above, or call Nancy at (705) 726-0649 ext. 129 during service hours. Tell us what you're noticing and we'll book the right amount of time. We make it easy."],
    ["What does \"We Make It Easy\" actually get me?", "Everyday prices instead of one-time specials: free diagnostic scans, free alignment checks, $20/day loaners, a lowest price guarantee on tires and a $109.99 full synthetic oil change. Plus a free local shuttle and 15% off repairs for older or high-kilometre vehicles through the High Mileage Club."],
    ["Do you service vehicles that aren't Nissans?", "Yes, any make and any model. If you bought a pre-owned vehicle from us, whatever the badge on the hood, you're a Barrie Nissan customer and every service, program and contact on this page applies to you. The High Mileage Club is open to all makes too."],
    ["Will I know the cost before any work is done?", "Yes. Your service advisor reviews the recommended work and the estimate with you before anything starts, and calls you for approval if something new comes up during the visit."],
    ["How will I be kept updated during my visit?", "Your advisor will confirm the promised time when you drop off and reach out if the timing or the scope changes. TODO (dealer to confirm): phone only, or text/SMS updates too."],
    ["Do you offer a shuttle or courtesy vehicle?", "Both. A free shuttle runs to local destinations during service hours, and loaner vehicles are available for $20 a day whenever you need one. Mention it when you book so it's ready when you arrive."],
    ["Can I wait at the dealership?", "Absolutely. Grab a coffee in the lounge, connect to the Wi-Fi and get some work done while we take care of the vehicle. TODO (dealer to confirm): list the exact amenities."],
    ["How do I check if my vehicle has an open recall?", "Use the Nissan Canada recall lookup with your VIN (link above). Recall repairs are done at no charge. We can also check for you at your next visit."],
    ["Where do I go for tires and seasonal swaps?", "The Barrie Nissan Tire Centre, right here on site, with a lowest price guarantee on tires. Book a seasonal changeover like any other service appointment. New this season: tire storage for $60 for the first season, limited spots. See the specials above for the Early Bird changeover bundle."],
    ["I just bought my vehicle. What happens next?", "Your delivery specialist walks you through the vehicle, pairs your phone and sets up NissanConnect. If you have questions once you're home, we'd rather you call than guess. A follow-up call within a few days is normal, and your first maintenance reminder will come from us."],
    ["Something wasn't right with my visit. Who do I talk to?", "Please tell us first, and tell us quickly. Steve Ward runs Service and Parts, Quinn Graham runs Sales, and Bjorn Surmann is the General Manager. Their direct lines are below so a problem gets fixed the same week, not after a survey lands in your inbox."]
  ]
};
