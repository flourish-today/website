# Website working instructions

This repo is getflourish.org: a plain homepage of big cards, one per app, and a page for each app with its own distinct theme. Today it holds only `beeswax/` (beeswax.getflourish.org). The owner is tech savvy but not a developer; explain what a change means for them in plain words.

## Planning files

- Read `planning/How we work.md` and `planning/Plan.md` before planning; `planning/History.md` when needed.
- Don't reopen recorded decisions without new information. When a task changes a decision or next step, update these files.

## Hosting and deploy

- Cloudflare Pages, connected to this GitHub repo: a push to `main` deploys. Project `website` serves `beeswax/` as its root. Pages serves one folder per project, so each site (the homepage in `home/`, each app) gets its own folder and its own Pages project and subdomain. Dashboard steps are the owner's; give exact clicks and values.
- DNS and redirect rules are on Cloudflare. getflourish.org redirects to Beeswax until the homepage goes live; `code.getflourish.org` points to Forgejo. Never suggest Cloudflare Access.

## Design

- Each site has its own `DESIGN.md`. Changes keep that site's look and do not redesign it.
- New designs start from reference sites the owner picks, and are shown as rough versions to react to before anything is built properly.

## Rules for every site

- Static HTML and CSS, works without JavaScript. Fonts, images, styles and scripts are local files; the CSP (a `<meta>` tag in each page) allows them only from `'self'`. No tracking, no third parties.
- Link `style.css` and scripts with `?v=` and the first 8 characters of their SHA-256.
- Works at 400px wide with no horizontal scroll; tap targets at least 44px; visible focus ring.
