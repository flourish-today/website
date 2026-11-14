# How we work

Started Nov 8, 2026. The owner's general profile is in `~/.t3/projects/management/planning/How we work.md`; read it. This file holds only what's specific to the website.

- Design without a generic AI look: the Beeswax site worked because the owner iterated a lot and borrowed ideas from a real site they liked. So ask for one or two reference sites, say which of their ideas we copy, write the site's `DESIGN.md`, then show rough versions to react to, not finished pages.
- Always open drafts in Brave for the owner: serve the folder (`python3 -m http.server 8791 --bind 127.0.0.1` in the background) and `open -a "Brave Browser"` the page.
- No logos or icons drawn by Claude: they look like AI slop. Use real ones or none.
- Show designs rendered, at phone and desktop widths, and describe what they'll see on screen.
- Design reviews are blind: a fresh reviewer each round that sees only the current draft (no earlier drafts, planning files or history) and scores separate areas (first impression, hierarchy, clutter, type, colour, logo, spacing, mobile, accessibility, trust). Skip suggestions that go against the owner's decisions.
- One thing at a time: the homepage is being made with Beeswax only for now.
- For wording, the owner uses `site-editor` (`~/.local/bin/site-editor`, outside the repo): the file on the left, the live page on the right, saves as they type. Start it with `cd ~/.t3/projects/website/<folder> && site-editor`, then open http://127.0.0.1:8770/__edit/ in Brave. They can change words there, not layout. Don't edit a file while they have it open in the editor.
