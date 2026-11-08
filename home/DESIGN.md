# Homepage: design

getflourish.org. This page sets the direction. Changes keep this look and do not redesign it.

Dial: ENERGY 1 / RHYTHM 1 / MOTION 0

## Identity

As plain as possible, so the apps stand out. Not personal: no greeting, no name. The only colour on the page comes from the app previews.

## Palette

- Background `#202124` (dark grey). Cards `#28292d`, lines `#3a3c41`, card border on hover `#6b6e75`.
- Text `#eeece8`. Secondary text and section labels `#9a9ea6`.
- No accent colour. Focus ring is the text colour, 2px, offset 3px.

## Type

- JetBrains Mono (one local variable font in `fonts/`) for everything.
- "Projects" is the one big heading (800 weight). Section labels are small, grey, uppercase.

## Layout

- One column, about 820px wide.
- Projects: a big card per app built from scratch, with the live app page shrunk inside (not clickable inside, loaded lazily); the whole card links to the page. Smaller cards without a preview for forks.
- In progress: one row per item, name on the left, percentage on the right, thin lines between rows.
- Contact: plain underlined links.

## Rules

- Static, works without JavaScript. Fonts and styles local; the CSP allows framing only the app subdomains.
- Hover changes colour only. No motion.
- Works at 400px wide; tap targets at least 44px.
