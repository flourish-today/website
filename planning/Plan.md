# Plan

## Goal

getflourish.org: a deliberately plain homepage so the apps stand out, mostly big cards, one per app, each with a preview of that app's page. Each app page has its own theme, the way Beeswax has its bee-sticker look.

## Where things stand (Nov 8, 2026)

- Repo set up as a project (this file, `CLAUDE.md`). Only `beeswax/` exists; getflourish.org redirects to it.
- The owner wrote the homepage's words (`planning/Homepage copy.md`): a short personal page, "Hello, I'm FlourishDev", with what to check out, what's coming, and how to say hi. Previews go with the "check out" items.
- Inspiration the owner likes (all product pages, so mainly for app pages): Mullvad VPN, KeePassDX, KeePassium, Signal, Tuta (laggy), Ente, Things. Beeswax was built from Obscura's site.

## Decisions in force

- **Homepage first, with Beeswax only (Nov 8).** Other apps come later. Likely later: big cards for apps built from scratch (Beeswax, Flourish), smaller cards for ones built on others' work (ObsidianCode, maybe PathFinish, Things sync once its Android app and encryption work). Forks credit what they're built on.
- **Previews (Nov 8):** the owner wants them to feel real. First choice to try: the live app page, shrunk inside the card, not clickable inside, loaded only when scrolled to; the whole card links to the page. Needs the homepage CSP to allow framing the app subdomains (thought fine, not yet tested). Fallback: screenshots taken with headless Brave by a local script.
- **Hosting (Nov 8):** the homepage lives in `home/` (Flourish later in `home/flourish/`) with its own Cloudflare Pages project on getflourish.org, and redirect rules changed when it goes live.
- **Domains (Nov 8):** the owner bought getflourish.org for Flourish (the private meditation app frontend), and wants both it and the homepage on getflourish.org. Decided: the plain homepage is the root; once Flourish exists it's the first and biggest card, and its water-themed page is getflourish.org/flourish/ (same Pages project as the homepage). ObsidianCode gets obsidiancode.getflourish.org.
- **Flourish's page (later):** like Beeswax's, but water-themed instead of bees.

## Next steps

1. Reference sites from the owner; note which ideas we copy.
2. `home/DESIGN.md` in Beeswax's format, kept plain and neutral.
3. 2–3 rough versions in `home/drafts/` for the owner to react to; iterate.
4. Build `home/`, then the owner's dashboard steps (new Pages project, custom domain, remove the redirect), then check the live site.
