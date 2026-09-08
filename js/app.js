/* ============================================================
   Customer Hub — renders the page from window.DEALER
   You should not need to edit this file to adapt to a dealer.
   ============================================================ */
(function () {
  const D = window.DEALER;
  const $ = (id) => document.getElementById(id);
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => { if (v !== undefined && v !== null && v !== "") n.setAttribute(k, v); });
    if (html) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const telHref = (p) => "tel:+1" + String(p).replace(/\D/g, "").replace(/^1/, "");
  const ext = (url) => (/^https?:/i.test(url) ? { target: "_blank", rel: "noopener" } : {});

  const ICONS = {
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L22 9l-3-3-2.3.3zM3 21l8.5-8.5"/><path d="M14.7 6.3L6 15"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    parts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    tire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13l2-5a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 8l2 5"/><rect x="2.5" y="13" width="19" height="6" rx="1.5"/><circle cx="7" cy="16" r="1"/><circle cx="17" cy="16" r="1"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
    dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
  };

  /* ---------- Header ---------- */
  document.title = `${D.name} · Customer Hub`;
  $("dealerName").textContent = D.name;
  $("footerName").textContent = D.name;
  $("footerName2").textContent = D.name;
  $("tagline").textContent = D.tagline || "";
  $("year").textContent = new Date().getFullYear();
  $("logoLink").href = D.website;
  const logo = $("logoImg");
  logo.src = D.logo; logo.alt = D.name;
  logo.onerror = () => { logo.replaceWith(el("span", { class: "hero__logo-text" }, esc(D.name))); };

  const cta = $("heroCta");
  cta.append(el("a", { class: "btn btn--red", href: telHref(D.phones.main) }, "Call " + esc(D.phones.main)));
  cta.append(el("a", { class: "btn btn--white", href: D.address.mapsUrl, target: "_blank", rel: "noopener" }, "Directions"));
  cta.append(el("a", { class: "btn btn--outline-light", href: D.website, target: "_blank", rel: "noopener" }, "Full website"));

  /* ---------- Quick actions ---------- */
  const qa = $("quickActions");
  D.quickActions.forEach((a) => {
    const t = el("a", { class: "tile" + (a.primary ? " tile--primary" : ""), href: a.url, ...ext(a.url) });
    t.innerHTML = `<span class="tile__icon">${ICONS[a.icon] || ICONS.star}</span><span class="tile__label">${esc(a.label)}</span><span class="tile__sub">${esc(a.sub || "")}</span>`;
    qa.append(t);
  });

  /* ---------- Hours ---------- */
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const fmt = (t) => { const [h, m] = t.split(":").map(Number); const ap = h >= 12 ? "pm" : "am"; const hh = h % 12 || 12; return m ? `${hh}:${String(m).padStart(2, "0")} ${ap}` : `${hh} ${ap}`; };
  const now = new Date();
  const today = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
  const isOpenNow = (dept) => { const r = dept[today]; return !!r && mins >= toMin(r[0]) && mins < toMin(r[1]); };

  const ht = $("hoursTable");
  Object.entries(D.hours).forEach(([dept, rows], i) => {
    const open = isOpenNow(rows);
    const todayRow = rows[today];
    const box = el("div", { class: "hours__dept" + (i === 0 ? " is-expanded" : "") });
    const head = el("div", { class: "hours__head", role: "button", tabindex: "0", "aria-expanded": i === 0 ? "true" : "false" });
    head.innerHTML = `<span>${esc(dept)}</span><small class="${open ? "is-open" : "is-closed"}">${open ? "Open now · until " + fmt(todayRow[1]) : (todayRow ? "Closed now · today " + fmt(todayRow[0]) + " – " + fmt(todayRow[1]) : "Closed today")}</small>`;
    const body = el("div", { class: "hours__rows" });
    [1, 2, 3, 4, 5, 6, 0].forEach((d) => {
      const r = rows[d];
      body.append(el("div", { class: "hours__row" + (d === today ? " is-today" : "") }, `<span>${DAYS[d]}</span><span>${r ? fmt(r[0]) + " – " + fmt(r[1]) : "Closed"}</span>`));
    });
    const toggle = () => { const x = box.classList.toggle("is-expanded"); head.setAttribute("aria-expanded", x); };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    box.append(head, body);
    ht.append(box);
  });

  // Global status pill: based on Sales dept (first entry) or Service if you prefer
  const firstDept = Object.values(D.hours)[0];
  const status = $("status");
  if (isOpenNow(firstDept)) { status.classList.add("status--open"); $("statusText").textContent = "Open now"; }
  else { status.classList.add("status--closed"); $("statusText").textContent = "Closed now"; }

  /* ---------- Location ---------- */
  $("addressLine").textContent = D.address.line1;
  $("addressCity").textContent = `${D.address.city}, ${D.address.province} ${D.address.postal}`;
  $("mapsBtn").href = D.address.mapsUrl;
  $("callBtn").href = telHref(D.phones.main);
  $("tollFree").textContent = D.phones.tollFree ? `Local ${D.phones.main} · Toll free ${D.phones.tollFree}` : `Phone ${D.phones.main}`;

  /* ---------- High Mileage Club ---------- */
  if (D.highMileageClub && D.highMileageClub.enabled) {
    const h = D.highMileageClub;
    $("hmc").hidden = false;
    $("hmcTitle").textContent = h.title;
    $("hmcText").textContent = h.text;
    const c = $("hmcCta"); c.textContent = h.ctaLabel; c.href = h.ctaUrl;
    h.bullets.forEach((b) => $("hmcBullets").append(el("li", {}, esc(b))));
  }

  /* ---------- Steps ---------- */
  const renderSteps = (id, steps) => steps.forEach((s) => $(id).append(el("li", {}, `<h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>`)));
  renderSteps("serviceSteps", D.serviceSteps);
  renderSteps("purchaseSteps", D.purchaseSteps);

  /* ---------- Link groups ---------- */
  const lg = $("linkGroups");
  D.linkGroups.forEach((g) => {
    const box = el("div", { class: "linkgroup" }, `<h3>${esc(g.title)}</h3>`);
    g.links.forEach((l) => box.append(el("a", { href: l.url, ...ext(l.url) }, esc(l.label))));
    lg.append(box);
  });

  /* ---------- FAQ ---------- */
  D.faq.forEach((f) => {
    const d = el("details");
    d.append(el("summary", {}, esc(f.q)));
    d.append(el("div", { class: "faq__a" }, esc(f.a)));
    $("faqList").append(d);
  });

  /* ---------- Escalation ---------- */
  D.escalation.forEach((c) => {
    const box = el("div", { class: "contact" });
    box.innerHTML = `<div class="contact__role">${esc(c.role)}</div><div class="contact__name">${esc(c.name)}</div>` +
      (c.phone ? `<a href="${telHref(c.phone)}">${esc(c.phone)}</a>` : "") +
      (c.email ? `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : "");
    $("escalation").append(box);
  });
  const rr = $("reviewRow");
  if (D.googleReviewUrl) rr.append(el("a", { class: "btn btn--white", href: D.googleReviewUrl, target: "_blank", rel: "noopener" }, "Happy with your visit? Leave a Google review"));
  if (D.reviewsUrl) rr.append(el("a", { class: "btn btn--outline-light", href: D.reviewsUrl, target: "_blank", rel: "noopener" }, "Read customer reviews"));

  /* ---------- Footer ---------- */
  D.social.forEach((s) => $("social").append(el("a", { href: s.url, target: "_blank", rel: "noopener" }, esc(s.label))));
  $("footerSite").href = D.website;
  if (D.privacyUrl) $("privacyLink").href = D.privacyUrl; else $("privacyLink").remove();

  /* ---------- Mobile sticky bar ---------- */
  const book = D.quickActions.find((a) => a.primary);
  const bar = el("div", { class: "stickybar" });
  bar.append(el("a", { class: "btn btn--red", href: book ? book.url : D.website, ...ext(book ? book.url : D.website) }, "Book service"));
  bar.append(el("a", { class: "btn btn--white", href: telHref(D.phones.main) }, "Call"));
  document.body.append(bar);
  document.body.classList.add("has-stickybar");
})();
