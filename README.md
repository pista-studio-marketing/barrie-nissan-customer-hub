# Customer Hub — Barrie Nissan

A one-page customer hub. Not a website: a dashboard that sends the customer to the right place (booking, parts, financing, directions, who to call) and sets expectations around the touchpoints measured in CSI / SSI surveys.

Static files only. No build step, no framework, no dependencies.

## Structure

```
index.html            page structure (you rarely touch this)
css/styles.css        design; brand colours are the tokens at the top
js/dealer-config.js   dealer DATA: names, numbers, URLs, hours, people, which languages  ← edit this
js/lang/en.js         every customer-facing TEXT, in English (master file)          ← edit this
js/lang/uk.js …       Ukrainian, French, Spanish, Portuguese, Tagalog (same keys as en.js)
js/app.js             renders the page from config + language (no need to edit)
assets/logo.png       drop the dealer's logo here (falls back to the JPG on their site)
assets/favicon.svg    tab icon
```

## Languages

Barrie is 81% English mother tongue, 14% non-official languages, with a large Ukrainian community since 2022 and long-standing Portuguese, Spanish, Italian, Polish and Filipino communities. The hub ships in six languages: English (default), Ukrainian, French, Spanish, Portuguese and Tagalog.

The language bar is the first thing on the page (sticky) and repeats in the footer. The page auto-selects the browser's language on first visit, remembers the choice, and accepts `?lang=uk` in the URL, so a QR code or a text message can land the customer directly in Ukrainian: `https://your-domain/?lang=uk`.

To add a language: copy `js/lang/en.js` to `js/lang/xx.js`, translate the values (keep the keys), add `<script src="js/lang/xx.js">` in `index.html`, and add `"xx"` to `languages` in `dealer-config.js`. To remove one: delete it from `languages`. Prices, phone numbers, names and "We Make It Easy" stay as-is in every language on purpose.

Translations were produced by Pista Studio; a native-speaker read-through before launch is cheap insurance, especially for Ukrainian and Tagalog.

## Preview in VS Code

1. Open the folder in VS Code.
2. Install the **Live Server** extension (Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **Open with Live Server**. The page reloads on every save.

Opening `index.html` directly in a browser also works.

## Publish

Any static host works. Three options, from fastest to most "real":

**Netlify Drop (2 minutes, no account needed to test)**
Drag the whole folder onto https://app.netlify.com/drop. You get a URL immediately. Create an account to keep it and add a custom domain.

**GitHub Pages**
1. Create a repo, push the folder (`git init`, `git add .`, `git commit -m "Customer hub"`, push).
2. Repo → Settings → Pages → Source: `main` / root.
3. Live at `https://<user>.github.io/<repo>/` within a minute.

**Vercel / Cloudflare Pages**
Connect the repo, framework preset "Other", no build command, output directory `/`. Each push redeploys.

**Custom domain** — the natural home is a subdomain of the dealer, e.g. `hub.barrienissan.ca` or `clients.barrienissan.ca`. The dealer (or their web vendor, eDealer for Barrie) adds one CNAME record pointing at the host. No changes to their main site.

## Before going live: things to confirm with the dealer

Most content was pulled from barrienissan.ca on 2026-09-08 (hours, staff and extensions, High Mileage Club terms, My Mechanic everyday values, shuttle). Only three `TODO (dealer to confirm)` remain, all in the FAQ (search `TODO` in `js/lang/*.js`):

- Lounge amenities (Wi-Fi, coffee, work space): confirm the exact list
- Tire storage: offered or not, price, how to book
- SMS / text updates during a service visit: offered or not

Also worth confirming: the official logo PNG (drop it in `assets/logo.png`), that ext. 129 (Nancy) and ext. 120 (Nicole) are the ones the dealer wants customers using, and that Bjorn is comfortable being the "Not satisfied?" email contact. Holiday hours are not handled automatically.

## Why the page is built this way (CSI / SSI logic)

Owner surveys ask the customer about specific moments. The page pre-frames each one so the dealer is measured against expectations it set itself:

| Survey theme | Where it lives on the page |
|---|---|
| Ease of scheduling | "Book a service appointment" tile, sticky mobile button, FAQ |
| Greeted promptly / advisor courtesy | Service steps 01-02 |
| Work and cost explained before starting | Service step 03, FAQ "Will I know the cost…" |
| Kept informed during the visit | Service step 04, FAQ on updates |
| Vehicle ready when promised / fixed right first time | Service step 04 |
| Explanation of work at pick-up, follow-up contact | Service step 05 |
| Facilities, waiting area, shuttle | FAQ |
| Delivery explanation, features & tech setup (SSI) | Purchase steps 01-02 |
| Paperwork clarity, time spent (SSI) | Purchase step 02 |
| Post-sale follow-up (SSI) | Purchase step 03-04 |
| Likelihood to recommend / review | Escalation section + review buttons |
| Complaint resolution | "Something not right?" section with direct contacts |

The escalation section matters most: a customer who can reach a manager in one tap is far less likely to vent in the survey.

## Reusing for another dealer

1. Copy the folder.
2. Rewrite `js/dealer-config.js` (name, address, phones, hours, links, contacts, programs, languages). Set `highMileageClub.enabled` / `everydayValue.enabled` to `false` if the dealer has no equivalent.
3. Rewrite the texts in `js/lang/en.js`, then regenerate the other language files from it.
4. Swap `assets/logo.png` and `assets/favicon.svg`.
5. In `css/styles.css`, change `--red` (and `--red-dark`) to the brand colour.
6. Publish.

Nothing else changes. Roughly 30 minutes per dealer once the info is in hand.

---
Built by Pista Studio Marketing inc. — https://pista.ca
