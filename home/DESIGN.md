# Homepage: design

getflourish.org. This page sets the direction. Changes keep this look and do not redesign it. Current draft: `drafts/h-flourish.html`.

Dial: ENERGY 1 / RHYTHM 1 / MOTION 0

## Identity

As plain as possible, so the apps stand out. Modelled on donatemonero.org. Not personal: no greeting, no name of a person. The group of apps is called "Flourish" for now (placeholder). The only colour on the page comes from the logo, app icons and previews. Icons share the Beeswax sticker style: flat colour on a round backdrop, dark outlines.

## Palette

- Background `#0e0e0e` (near-black). Cards `#171717`, lines and card borders `#292929`, card hover `#1b1b1b` with border `#393939`.
- Text `#e0e0e0`, headings and links `#f0f0f0`. Secondary text `#9f9f9f`.
- No accent colour. Focus ring is the text colour, 2px, offset 3px.

## Type

- The system font (`system-ui`) for everything; the Monero address in the system monospace.
- The site name in the header is the one big heading. Section headings ("Projects", "In progress") are small and bold with a hairline under them.

## Layout

- About 1120px wide, 16px side margins on phones.
- Site header: logo (colour sprout, `icons/flourish-sprout.svg`) and name only. No tagline, no line under it.
- Projects: a big card per app built from scratch, the live app page shrunk inside (not clickable inside, loaded lazily, faded at the bottom), text beside it on desktop (preview 5/7 of the width) and under it on phones; the app name's link covers the whole card. Smaller cards (48px icon, bold name, grey line) in a grid for forks.
- In progress: the same small cards without a fill (not links), the percentage in a dashed box where the icon goes.
- Footer, after Beeswax's: name and "Everything here is dedicated to the public domain under CC0 1.0" (not "Flourish apps"); Contact (email, SimpleX, GitHub); Support (Donate with Monero and the address, selectable on one tap; no copy button, since there's no JavaScript).

## Rules

- Static, works without JavaScript. Styles local; the CSP allows framing only the app subdomains.
- Hover changes colour only. No motion.
- Works at 400px wide; tap targets at least 44px.
