# Plan

## Goal

getflourish.org: a deliberately plain homepage so the apps stand out, mostly big cards, one per app, each with a preview of that app's page. Each app page has its own theme, the way Beeswax has its bee-sticker look.

## Where things stand (Nov 8, 2026)

- Repo set up as a project (this file, `CLAUDE.md`). Only `beeswax/` exists; getflourish.org redirects to it.
- The owner wrote the homepage's words (`planning/Homepage copy.md`): a short personal page, "Hello, I'm FlourishDev", with what to check out, what's coming, and how to say hi. Previews go with the "check out" items.
- **Current draft (Nov 8):** H, `home/drafts/h-flourish.html`: G with the owner's changes (colour sprout logo, no tagline, no line under the header, footer says "Everything here" instead of "All Flourish apps"). Logo options in `home/drafts/icons/flourish-{sprout,drop,bloom}.svg`. One blind review applied. Look in `home/DESIGN.md`. Waiting on the owner's reaction, logo pick and group name (ideas: Flourish, Groundwork, Common Ground, Quiet Tools, Hearth).
- **Reference site (Nov 8):** donatemonero.org: near-black `#0e0e0e`, the system font, a grid of small equal cards (48px icon, bold name, one or two grey lines), section headings with a hairline under them, one line of intro. Copied without its orange accent. Icons in `home/drafts/icons/`.
- Inspiration the owner likes (all product pages, so mainly for app pages): Mullvad VPN, KeePassDX, KeePassium, Signal, Tuta (laggy), Ente, Things. Beeswax was built from Obscura's site.

## Decisions in force

- **Not personal (Nov 8):** no "Hello, I'm FlourishDev" and not that name; the page says "Projects", with as little of the owner's writing as possible. Draft wording: Projects (Beeswax, ObsidianCode with their one-line descriptions), In progress (Meditation app 70%, Things 3 with E2EE and Android 50%), Contact (email, SimpleX). This replaces the personal tone of `Homepage copy.md`.
- **Look (Nov 8):** donatemonero.org's plain dark directory (draft F/G), no accent colour; this replaces D's grey JetBrains Mono look. See `home/DESIGN.md`.

- **Homepage first, with Beeswax only (Nov 8).** Other apps come later. Likely later: big cards for apps built from scratch (Beeswax, Flourish), smaller cards for ones built on others' work (ObsidianCode, maybe PathFinish, Things sync once its Android app and encryption work). Forks credit what they're built on.
- **Previews (Nov 8):** the owner wants them to feel real. First choice to try: the live app page, shrunk inside the card, not clickable inside, loaded only when scrolled to; the whole card links to the page. Needs the homepage CSP to allow framing the app subdomains (thought fine, not yet tested). Fallback: screenshots taken with headless Brave by a local script.
- **Hosting (Nov 8):** the homepage lives in `home/` (Flourish later in `home/flourish/`) with its own Cloudflare Pages project on getflourish.org, and redirect rules changed when it goes live.
- **Domains (Nov 8):** the owner bought getflourish.org for Flourish (the private meditation app frontend), and wants both it and the homepage on getflourish.org. Decided: the plain homepage is the root; once Flourish exists it's the first and biggest card, and its water-themed page is getflourish.org/flourish/ (same Pages project as the homepage). ObsidianCode gets obsidiancode.getflourish.org.
- **Flourish's page (later):** like Beeswax's, but water-themed instead of bees.

## Next steps

1. The owner reacts to draft H, picks a logo and a group name; iterate if needed.
2. Build `home/`, then the owner's dashboard steps (new Pages project, custom domain, remove the redirect), then check the live site.
