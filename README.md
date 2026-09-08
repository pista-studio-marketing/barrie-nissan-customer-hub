# Customer Hub — Barrie Nissan

A one-page customer hub. Not a website: a dashboard that sends the customer to the right place (booking, parts, financing, directions, who to call) and sets expectations around the touchpoints measured in CSI / SSI surveys.

Static files only. No build step, no framework, no dependencies.

## Structure

```
index.html            page structure (you rarely touch this)
css/styles.css        design; brand colours are the tokens at the top
js/dealer-config.js   ALL dealer data: name, hours, links, FAQ, contacts  ← edit this
js/app.js             renders the page from the config (no need to edit)
assets/logo.svg       placeholder wordmark, replace with the dealer's logo
assets/favicon.svg    tab icon
```

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

Search `TODO` in `js/dealer-config.js`. Each one is a fact pulled from nowhere public and needs the dealer's answer:

- Direct phone lines for Service and Parts (currently the main number)
- High Mileage Club: perks and sign-up / program page URL
- Service Manager and Sales Manager names, emails, direct lines
- Google "Write a review" link (`googleReviewUrl`) — get it from Google Business Profile → *Ask for reviews*
- Shuttle / courtesy vehicle: radius, hours, loaner availability
- Lounge amenities (Wi-Fi, coffee, work space)
- Tire storage: offered or not, price, how to book the seasonal swap
- SMS / text updates during service visits: offered or not
- Official logo file (replace `assets/logo.svg`)

Hours were taken from barrienissan.ca on 2026-09-08. Confirm they're still right, and remember holiday hours aren't handled automatically.

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
2. Rewrite `js/dealer-config.js` (name, address, phones, hours, links, contacts, FAQ, programs). Set `highMileageClub.enabled` to `false` if the dealer has no equivalent program.
3. Swap `assets/logo.svg` and `assets/favicon.svg`.
4. In `css/styles.css`, change `--red` (and `--red-dark`) to the brand colour.
5. Update `<title>` and `<meta name="description">` in `index.html`.
6. Publish.

Nothing else changes. Roughly 30 minutes per dealer once the info is in hand.

---
Built by Pista Studio.
