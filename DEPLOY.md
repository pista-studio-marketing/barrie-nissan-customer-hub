# Deploy — Barrie Nissan Customer Hub

## Option A — Vercel (recommended, 3 commands)

```bash
cd barrie-nissan-hub
npm i -g vercel          # once
vercel                   # answers: Set up and deploy? Y · Scope: Pista Studio · Link to existing? N · Name: barrie-nissan-hub · Directory: ./ · Modify settings? N
vercel --prod            # production URL
```

Custom domain later: `vercel domains add hub.barrienissan.ca` then have the dealer add the CNAME Vercel shows you.

## Option B — GitHub + Vercel auto-deploy

```bash
cd barrie-nissan-hub
git init && git add . && git commit -m "Barrie Nissan Customer Hub v1"
gh repo create pista-studio/barrie-nissan-hub --private --source=. --push
```

Then on vercel.com → Add New Project → import the repo → Framework preset: Other → Deploy. Every push to `main` redeploys.

## Option C — GitHub Pages only

Same git commands as B, then Repo → Settings → Pages → Branch `main` / root. Live at `https://<org>.github.io/barrie-nissan-hub/`.

## Prompt to paste into an AI assistant in VS Code

> Deploy this folder as a static site. It has no build step (plain index.html + css/ + js/ + assets/). Initialize git if needed, commit everything as "Barrie Nissan Customer Hub v1", create a private GitHub repo named barrie-nissan-hub under my account and push to main. Then deploy it to Vercel with the CLI (framework preset "Other", output directory "/", no build command) and give me the production URL. Don't modify any files in the project.
