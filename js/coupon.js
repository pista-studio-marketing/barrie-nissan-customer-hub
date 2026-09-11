/* Printable / saveable coupon page. Reads ?id=<special id>&lang=<code>. */
(function () {
  const D = window.DEALER, LANGS = window.LANGS || {};
  const CODES = (D.languages || ["en"]).filter((c) => LANGS[c]);
  const $ = (id) => document.getElementById(id);
  const q = new URLSearchParams(location.search);
  const fill = (s, v) => String(s).replace(/\{(\w+)\}/g, (_, k) => v[k] ?? "");
  let lang = q.get("lang");
  if (!LANGS[lang]) { try { lang = localStorage.getItem("hub-lang"); } catch (e) {} }
  if (!LANGS[lang]) lang = CODES[0];
  const sp = D.specials.find((s) => s.id === q.get("id") && s.coupon !== false) || D.specials[0];

  function render() {
    const L = LANGS[lang], U = L.ui, t = L.specials[sp.id] || [sp.id, "", ""];
    document.documentElement.lang = lang;
    document.title = `${D.name} · ${U.couponTitle} · ${t[0]}`;
    const fmtDate = (iso) => new Date(iso + "T12:00:00").toLocaleDateString(lang === "uk" ? "uk-UA" : lang === "tl" ? "en-CA" : lang + "-CA", { year: "numeric", month: "long", day: "numeric" });
    const badge = { sale: U.badgeSale, save15: U.badgeSave15, new: U.badgeNew, free: U.badgeFree || U.badgeSale }[sp.badge] || "";

    // language switcher
    const ls = $("langs"); ls.innerHTML = "";
    CODES.forEach((c) => {
      const b = document.createElement("button"); b.type = "button"; b.className = "langbtn" + (c === lang ? " is-active" : ""); b.textContent = LANGS[c].name;
      b.addEventListener("click", () => { lang = c; try { localStorage.setItem("hub-lang", c); } catch (e) {} const u = new URL(location.href); u.searchParams.set("lang", c); history.replaceState(null, "", u); render(); });
      ls.append(b);
    });

    $("back").textContent = "← " + U.backToHub; $("back").href = "index.html?lang=" + lang + "#specials";
    $("ticket").className = "ticket ticket--" + (sp.badge || "sale");
    const isParts = (sp.dept || "service") === "parts";
    $("kind").innerHTML = `${isParts ? (U.partsCoupon || U.couponTitle) : U.couponTitle}<strong>${D.slogan || ""}</strong>`;
    $("badge").textContent = badge;
    $("title").textContent = t[0];
    $("price").textContent = sp.price;
    $("regular").textContent = sp.regular ? sp.regular : ""; $("regular").hidden = !sp.regular;
    $("text").textContent = t[1];
    $("terms").textContent = (t[2] ? t[2] + " " : "") + U.oneCoupon;
    $("dealer").textContent = D.name;
    $("address").textContent = `${D.address.line1}, ${D.address.city}, ${D.address.province} ${D.address.postal}`;
    $("phone").textContent = isParts ? (D.phones.parts || D.phones.main) : (D.phones.service || D.phones.main);
    $("validity").textContent = sp.validUntil ? fill(U.validUntil, { d: fmtDate(sp.validUntil) }) : (sp.id === "storage" ? U.limitedSpots : U.noExpiry);
    if (sp.price && /\$\d/.test(sp.price) && !sp.regular && isParts) $("price").textContent = sp.price + " " + (U.plusTax || "");
    $("codeLabel").textContent = U.couponCode; $("code").textContent = sp.code || "";
    $("present").textContent = isParts ? (U.presentThisParts || U.presentThis) : U.presentThis;

    $("printBtn").textContent = U.printCoupon;
    $("shareBtn").textContent = U.saveCoupon;
    $("bookBtn").textContent = isParts ? (U.orderParts || U.bookNow) : U.bookNow;
    const book = D.quickActions.find((a) => (isParts ? a.key === "parts" : a.primary)); $("bookBtn").href = book ? book.url : D.website;
    $("hint").textContent = U.saveHint;
    $("foot").innerHTML = `${D.name} · <a href="index.html?lang=${lang}">${U.backToHub}</a>`;
  }

  $("printBtn").addEventListener("click", () => window.print());
  $("shareBtn").addEventListener("click", async () => {
    const L = LANGS[lang], t = L.specials[sp.id] || [sp.id, ""];
    const url = location.href;
    if (navigator.share) {
      try { await navigator.share({ title: `${D.name} · ${t[0]}`, text: `${t[0]} · ${sp.price} · ${L.ui.couponCode}: ${sp.code}`, url }); return; } catch (e) {}
    }
    window.print(); // desktop fallback: "Save as PDF" lives in the print dialog
  });

  render();
})();
