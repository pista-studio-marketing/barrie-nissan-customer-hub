/* ============================================================
   Customer Hub — renders the page from window.DEALER + window.LANGS
   Language is picked from ?lang=xx, then localStorage, then the
   browser language, then DEALER.languages[0]. Switching re-renders
   the whole page in place. You should not need to edit this file.
   ============================================================ */
(function () {
  const D = window.DEALER;
  const LANGS = window.LANGS || {};
  const CODES = (D.languages || ["en"]).filter((c) => LANGS[c]);
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => { if (v !== undefined && v !== null && v !== "") n.setAttribute(k, v); });
    if (html) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fill = (s, vars) => String(s).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
  const telHref = (p) => {
    const m = String(p).match(/(?:ext|poste|дод)\.?\s*(\d+)/i);
    const base = String(p).replace(/(?:ext|poste|дод)\.?\s*\d+/i, "").replace(/\D/g, "").replace(/^1/, "");
    return "tel:+1" + base + (m ? "," + m[1] : "");
  };
  const extl = (url) => (/^https?:/i.test(url) ? { target: "_blank", rel: "noopener" } : {});
  const clear = (id) => { const n = $(id); if (n) n.innerHTML = ""; return n; };

  const ICONS = {
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L22 9l-3-3-2.3.3zM3 21l8.5-8.5"/><path d="M14.7 6.3L6 15"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    parts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    tire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>'
  };

  /* ---------- Language selection ---------- */
  const store = { get: () => { try { return localStorage.getItem("hub-lang"); } catch (e) { return null; } }, set: (v) => { try { localStorage.setItem("hub-lang", v); } catch (e) {} } };
  const pickLang = () => {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS[q]) return q;
    const s = store.get(); if (s && LANGS[s]) return s;
    const nav = (navigator.languages || [navigator.language || ""]).map((l) => l.toLowerCase().split("-")[0]);
    for (const n of nav) { if (LANGS[n] && CODES.includes(n)) return n; }
    return CODES[0];
  };
  let current = pickLang();

  const setLang = (code, push) => {
    if (!LANGS[code]) return;
    current = code; store.set(code);
    if (push) { const u = new URL(location.href); u.searchParams.set("lang", code); history.replaceState(null, "", u); }
    render();
  };

  const renderLangButtons = (containerId, cls) => {
    const box = clear(containerId);
    CODES.forEach((c) => {
      const b = el("button", { type: "button", class: cls + (c === current ? " is-active" : ""), lang: c, "aria-pressed": c === current ? "true" : "false" }, esc(LANGS[c].name));
      b.addEventListener("click", () => setLang(c, true));
      box.append(b);
    });
  };

  /* ---------- Render everything ---------- */
  function render() {
    const L = LANGS[current]; const U = L.ui;
    document.documentElement.lang = current;
    document.documentElement.dir = L.dir || "ltr";
    document.title = L.meta.title;
    const md = document.querySelector('meta[name="description"]'); if (md) md.content = L.meta.description;

    renderLangButtons("langButtons", "langbtn");
    renderLangButtons("footerLangs", "langbtn langbtn--footer");
    $("langPrompt").textContent = U.langPrompt;

    // Header
    $("dealerName").textContent = D.name;
    $("hubTitle").textContent = U.hubTitle;
    $("footerName").textContent = D.name; $("footerName2").textContent = D.name;
    $("tagline").textContent = U.tagline;
    if (D.slogan) $("slogan").textContent = D.slogan; else $("slogan").hidden = true;
    $("year").textContent = new Date().getFullYear();
    $("rights").textContent = U.rights;
    $("logoLink").href = D.website;
    const logo = $("logoImg");
    if (logo && !logo.dataset.done) {
      logo.dataset.done = "1"; logo.alt = D.name; logo.src = D.logo;
      logo.onerror = () => {
        if (D.logoFallback && logo.src !== D.logoFallback) { logo.src = D.logoFallback; return; }
        logo.replaceWith(el("span", { class: "hero__logo-text" }, esc(D.name)));
      };
    }
    const cta = clear("heroCta");
    cta.append(el("a", { class: "btn btn--red", href: telHref(D.phones.main) }, esc(U.call + " " + D.phones.main)));
    cta.append(el("a", { class: "btn btn--white", href: D.address.mapsUrl, target: "_blank", rel: "noopener" }, esc(U.directions)));
    cta.append(el("a", { class: "btn btn--outline-light", href: D.website, target: "_blank", rel: "noopener" }, esc(U.fullWebsite)));

    // vCard
    if (D.vcard && D.vcard.enabled) {
      const digits = (p) => "+1" + String(p).replace(/(?:ext|poste|дод)\.?\s*\d+/i, "").replace(/\D/g, "").replace(/^1/, "");
      const lines = ["BEGIN:VCARD", "VERSION:3.0", "N:;" + D.name + ";;;", "FN:" + D.name, "ORG:" + D.name, "TEL;TYPE=WORK,VOICE,PREF:" + digits(D.phones.main)];
      if (D.phones.tollFree) lines.push("TEL;TYPE=WORK,VOICE:" + digits(D.phones.tollFree));
      if (D.email) lines.push("EMAIL;TYPE=WORK:" + D.email);
      lines.push("ADR;TYPE=WORK:;;" + D.address.line1 + ";" + D.address.city + ";" + D.address.province + ";" + D.address.postal + ";Canada");
      lines.push("URL:" + D.website);
      if (U.vcardNote) lines.push("NOTE:" + U.vcardNote.replace(/,/g, "\\,"));
      lines.push("REV:" + new Date().toISOString(), "END:VCARD");
      const b = $("vcardBtn");
      b.href = "data:text/vcard;charset=utf-8," + encodeURIComponent(lines.join("\r\n") + "\r\n");
      b.setAttribute("download", D.name.replace(/\s+/g, "-") + ".vcf");
      $("vcardLabel").textContent = U.vcardLabel;
      $("vcardHint").textContent = U.vcardHint;
      $("vcardWrap").hidden = false;
    }

    // Quick actions
    $("quickTitle").textContent = U.quickTitle; $("quickAccent").textContent = U.quickAccent;
    const qa = clear("quickActions");
    D.quickActions.forEach((a) => {
      const t = L.quickActions[a.key] || [a.key, ""];
      const n = el("a", { class: "tile" + (a.primary ? " tile--primary" : ""), href: a.url, ...extl(a.url) });
      n.innerHTML = `<span class="tile__icon">${ICONS[a.icon] || ICONS.star}</span><span class="tile__label">${esc(t[0])}</span><span class="tile__sub">${esc(t[1])}</span>`;
      qa.append(n);
    });

    // Reviews
    if (D.reviews) {
      const R = L.reviews;
      $("reviews").hidden = false;
      $("reviewsEyebrow").textContent = U.reviewsEyebrow;
      $("reviewsTitle").textContent = R.title; $("reviewsText").textContent = R.text;
      const glyph = { google: "G", facebook: "f", dealerrater: "DR" };
      const box = clear("reviewPlatforms");
      D.reviews.platforms.forEach((pf) => {
        const t = R.platforms[pf.key] || [pf.key, ""];
        const a = el("a", { class: "platform", href: pf.url, target: "_blank", rel: "noopener" });
        a.innerHTML = `<span class="platform__icon platform__icon--${esc(glyph[pf.key] ? pf.key : "default")}">${esc(glyph[pf.key] || "★")}</span><span><span class="platform__label">${esc(t[0])}</span><br><span class="platform__sub">${esc(t[1])}</span></span>`;
        box.append(a);
      });
      if (D.reviews.unhappyTo) {
        $("unhappyBtn").href = "mailto:" + D.reviews.unhappyTo + "?subject=" + encodeURIComponent(R.unhappySubject || "") + "&body=" + encodeURIComponent(R.unhappyBody || "");
        $("unhappyLabel").textContent = R.unhappyLabel;
      } else $("unhappyBtn").hidden = true;
    }

    // Hours
    const fmt = (t) => { const [h, m] = t.split(":").map(Number); const ap = h >= 12 ? "pm" : "am"; const hh = h % 12 || 12; return m ? `${hh}:${String(m).padStart(2, "0")} ${ap}` : `${hh} ${ap}`; };
    const now = new Date(), today = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
    const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
    const isOpen = (dept) => { const r = dept[today]; return !!r && mins >= toMin(r[0]) && mins < toMin(r[1]); };
    $("hoursTitle").textContent = U.hoursTitle; $("findUs").textContent = U.findUs;
    const ht = clear("hoursTable");
    Object.entries(D.hours).forEach(([key, rows], i) => {
      const open = isOpen(rows), tr = rows[today];
      const box = el("div", { class: "hours__dept" + (i === 0 ? " is-expanded" : "") });
      const head = el("div", { class: "hours__head", role: "button", tabindex: "0", "aria-expanded": i === 0 ? "true" : "false" });
      const stat = open ? fill(U.openUntil, { t: fmt(tr[1]) }) : (tr ? fill(U.closedToday, { a: fmt(tr[0]), b: fmt(tr[1]) }) : U.closedAllDay);
      head.innerHTML = `<span>${esc(U.depts[key] || key)}</span><small class="${open ? "is-open" : "is-closed"}">${esc(stat)}</small>`;
      const body = el("div", { class: "hours__rows" });
      [1, 2, 3, 4, 5, 6, 0].forEach((d) => {
        const r = rows[d];
        body.append(el("div", { class: "hours__row" + (d === today ? " is-today" : "") }, `<span>${esc(U.days[d])}</span><span>${r ? fmt(r[0]) + " – " + fmt(r[1]) : esc(U.closed)}</span>`));
      });
      const toggle = () => { const x = box.classList.toggle("is-expanded"); head.setAttribute("aria-expanded", x); };
      head.addEventListener("click", toggle);
      head.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      box.append(head, body); ht.append(box);
    });
    const first = Object.values(D.hours)[0];
    const status = $("status"); status.classList.remove("status--open", "status--closed");
    status.classList.add(isOpen(first) ? "status--open" : "status--closed");
    $("statusText").textContent = isOpen(first) ? U.openNow : U.closedNow;

    // Location
    $("addressLine").textContent = D.address.line1;
    $("addressCity").textContent = `${D.address.city}, ${D.address.province} ${D.address.postal}`;
    $("mapsBtn").href = D.address.mapsUrl; $("mapsBtn").textContent = U.openMaps;
    $("callBtn").href = telHref(D.phones.main); $("callBtn").textContent = U.callUs;
    $("tollFree").textContent = D.phones.tollFree ? fill(U.localTollFree, { a: D.phones.main, b: D.phones.tollFree }) : D.phones.main;

    // All brands
    $("allBrandsTitle").textContent = U.allBrandsTitle; $("allBrandsText").textContent = U.allBrandsText;

    // High Mileage Club
    if (D.highMileageClub && D.highMileageClub.enabled) {
      $("hmc").hidden = false;
      $("loyaltyEyebrow").textContent = U.loyaltyEyebrow;
      $("hmcTitle").textContent = L.hmc.title; $("hmcText").textContent = L.hmc.text;
      const c = $("hmcCta"); c.textContent = L.hmc.cta; c.href = D.highMileageClub.ctaUrl;
      $("hmcFine").textContent = L.hmc.fineprint || "";
      const ul = clear("hmcBullets"); L.hmc.bullets.forEach((b) => ul.append(el("li", {}, esc(b))));
    }

    // Everyday value
    if (D.everydayValue && D.everydayValue.enabled) {
      $("value").hidden = false;
      $("valueEyebrow").textContent = U.valueEyebrow;
      $("valueTitle").textContent = L.value.title; $("valueText").textContent = L.value.text;
      const vl = clear("valueList");
      L.value.items.forEach((it) => vl.append(el("div", { class: "value" }, `<div class="value__label">${esc(it[0])}</div><div class="value__sub">${esc(it[1] || "")}</div>`)));
    }

    // Steps
    $("serviceEyebrow").textContent = U.serviceEyebrow; $("serviceTitle").textContent = U.serviceTitle; $("serviceIntro").textContent = U.serviceIntro;
    $("salesEyebrow").textContent = U.salesEyebrow; $("salesTitle").textContent = U.salesTitle;
    const steps = (id, arr) => { const o = clear(id); arr.forEach((s) => o.append(el("li", {}, `<h3>${esc(s[0])}</h3><p>${esc(s[1])}</p>`))); };
    steps("serviceSteps", L.serviceSteps); steps("purchaseSteps", L.purchaseSteps);

    // Team
    $("teamEyebrow").textContent = U.teamEyebrow; $("teamTitle").textContent = U.teamTitle; $("teamIntro").textContent = U.teamIntro;
    const tl = clear("teamList");
    (D.team || []).forEach((t) => {
      const txt = L.team[t.key] || [t.key, ""];
      const single = t.ext && !/\//.test(t.ext);
      const row = el("div", { class: "team__row" });
      row.innerHTML = `<div><div class="team__need">${esc(txt[0])}</div><div class="team__name">${esc(t.name)}</div><div class="team__role">${esc(txt[1])}</div></div>` +
        (t.ext ? (single ? `<a class="team__ext" href="${telHref(D.phones.main + " ext. " + t.ext)}">${esc(U.ext)} ${esc(t.ext)}</a>` : `<span class="team__ext">${esc(U.ext)} ${esc(t.ext)}</span>`) : "");
      tl.append(row);
    });

    // Links
    $("linksTitle").textContent = U.linksTitle;
    const lg = clear("linkGroups");
    D.linkGroups.forEach((g) => {
      const box = el("div", { class: "linkgroup" }, `<h3>${esc(L.linkGroups[g.key] || g.key)}</h3>`);
      g.links.forEach((l) => box.append(el("a", { href: l.url, ...extl(l.url) }, esc(L.links[l.key] || l.key))));
      lg.append(box);
    });

    // FAQ
    $("faqTitle").textContent = U.faqTitle;
    const fl = clear("faqList");
    L.faq.forEach((f) => { const d = el("details"); d.append(el("summary", {}, esc(f[0]))); d.append(el("div", { class: "faq__a" }, esc(f[1]))); fl.append(d); });

    // Escalation
    $("helpEyebrow").textContent = U.helpEyebrow; $("helpTitle").textContent = U.helpTitle; $("helpText").textContent = U.helpText;
    const es = clear("escalation");
    D.escalation.forEach((c) => {
      const box = el("div", { class: "contact" });
      box.innerHTML = `<div class="contact__role">${esc(L.roles[c.roleKey] || c.roleKey)}</div><div class="contact__name">${esc(c.name)}</div>` +
        (c.phone ? `<a href="${telHref(c.phone)}">${esc(c.phone)}</a>` : "") + (c.email ? `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : "");
      es.append(box);
    });
    const rr = clear("reviewRow");
    const g = (D.reviews && D.reviews.platforms.find((p) => p.key === "google")) || null;
    if (g) rr.append(el("a", { class: "btn btn--white", href: g.url, target: "_blank", rel: "noopener" }, esc(U.leaveGoogle)));
    if (D.reviewsUrl) rr.append(el("a", { class: "btn btn--outline-light", href: D.reviewsUrl, target: "_blank", rel: "noopener" }, esc(U.readReviews)));

    // Footer
    const so = clear("social"); D.social.forEach((s) => so.append(el("a", { href: s.url, target: "_blank", rel: "noopener" }, esc(s.label))));
    $("footerSite").href = D.website; $("footerSite").textContent = U.visitWebsite;
    if (D.privacyUrl) { $("privacyLink").href = D.privacyUrl; $("privacyLink").textContent = U.privacy; } else $("privacyLink").hidden = true;
    if (D.publisher) $("publisher").innerHTML = `${esc(U.publishedBy)} <a href="${esc(D.publisher.url)}" target="_blank" rel="noopener">${esc(D.publisher.name)}</a> · pista.ca`;

    // Sticky mobile bar
    const book = D.quickActions.find((a) => a.primary);
    const bar = clear("stickybar");
    bar.append(el("a", { class: "btn btn--red", href: book ? book.url : D.website, ...extl(book ? book.url : D.website) }, esc(U.stickyBook)));
    bar.append(el("a", { class: "btn btn--white", href: telHref(D.phones.main) }, esc(U.stickyCall)));
    document.body.classList.add("has-stickybar");
  }

  render();
})();
