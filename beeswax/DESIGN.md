# Beeswax site: design

This page sets the direction. Changes keep this look and do not redesign it.

Dial: ENERGY 3 / RHYTHM 2 / MOTION 1 (smooth in-page scrolling only)

## Identity

Bee stickers: everything looks like a die-cut sticker. Flat fills and dark ink outlines, with no shadows. It is a friendly, slightly playful look for a strict tool.

## Palette

- Ink `#1A1A1A`: outlines, headings, text on honey.
- Honey `#F7CB46`: the main buttons, the beta bar, hexagons, the highlighted word in the headline. Hover is `#F9D566`.
- Honey pale `#FFF0BF`: the download card, inline code.
- Sky pale `#DFEDFC`: the page background, with pale clouds.
- Grass `#84C46B` / `#99D27F`: the ground, the footer, the privacy facts, the screenshot step hexagons, the FAQ "+", the Source button, "Android" in the headline. Text on green is `#1E3517`.
- Body text `#3A4049`. White `#FFFFFF` for cards.
- Focus ring `#2D5F8E`, 3px, offset 3px.

## Type

- Fredoka 600/700 for headings, buttons, captions and labels. Rounded letters match the sticker shapes.
- Nunito 400/700 for body text.
- Both are local files in `fonts/`, loaded by `style.css` (the CSP allows no outside fonts). Code uses the system monospace.
- The headline's key words are stickers too: honey or green fill, ink stroke.

## Layout

- A thin honey bar with ink text at the very top holds the beta notice.
- The hero is left-aligned: headline, one sentence pair, one button, and the before and after screenshots on the right, cropped to the app icons (below the button on phones).
- Screenshots: the five steps in one row, each with a hexagon number and a caption. Narrower screens scroll the row sideways inside itself.
- Section headings stay centered.
- Bees: each has a dotted flight path ("tail") and sits at its end. Two path shapes, flipped, tilted and sized differently per bee, scattered by the before and after and through Screenshots, Why, Privacy, Setup and FAQ. They never cover text.

## Small pages

`/setup/`, `/faq/`, `/privacy/` and `/monero/` are built like the main page's sections, made for reading. The Setup, FAQ and Privacy pages carry the public docs (`SETUP.md`, `FAQ.md`, `PRIVACY.md`); links show only their words.

- The head: a big centered title, then the doc's first sentence as a centered lede (the main page's `.lead`). Monero shows its round symbol above the title.
- Each part is a centered heading on the sky over one white card. No dividers, no heading ornaments.
- Accents stay quiet and match the main page: honey link underlines, inline code on light grey, tables framed by the card (an ink rule under the header, hairlines between rows). Numbered steps are plain bold Fredoka numbers. A note is one round sticker icon (green tick, honey "!") on a pale grey panel.
- Setup's three ways to connect ADB are three cards like the main page's features, each with a round honey icon.
- Privacy lists its parts under the lede as quiet links, like the download card's.
- Monero: orange only in the symbol at the top. The address is the dark code box with a copy button, and Learn more is three columns.
- The FAQ page is the main page's FAQ: every question a card that opens with the green "+". A link to a question opens it.
- Bees and clouds are placed by hand in each page's markup, like the main page's, not at random. A bee sits beside a heading (`--dx` from the centre, `--y` from the top of its part); "wide" bees beside the cards show only from 1200px. Below 720px bees sit above their heading at the edge, and clouds marked `nm` hide where they'd sit behind a heading. Nothing overlaps: bees stay off text, cards, clouds and each other. Density is about the main page's.
- `style.css` and `site.js` are linked with `?v=` and the first 8 characters of their SHA-256, so browsers fetch new versions.

## Shapes

- Cards: white, 2px ink border, 22px radius, no shadow.
- Buttons: 2.5px ink border (2px for small ones), 16px radius (12px small), no shadow. Main buttons are honey; the Source button is green.
- Hexagons with an ink outline for numbers and the step picker; round icons with an ink outline.
- Illustrations: bees, a skep hive, daisies, honeycomb, clouds, dotted flight paths. All drawn in the same outline style.

## Motion

Hover changes color only. No lifts, slides, pulses or drifting. The one exception: links within the page (like Download) scroll smoothly, and jump instead when the visitor's system asks for reduced motion.

## Rules

- Fonts, images, styles and the script stay local. Every page shares `style.css`, `fonts/` and `site.js`; the CSP allows scripts, styles and fonts only from the site itself (`'self'`).
- The page works fully without JavaScript. The script (`site.js`) only adds the copy buttons, the bees' "bzz" and opening a linked FAQ question.
- Tap targets are at least 44px (small copy buttons get an invisible 44px hit area). Every focusable element shows the focus ring.
- `og.png` (1200×630) is the link preview: the hero's headline, first sentence and before and after. Re-render it when the hero changes.
- No horizontal scroll at any width.
