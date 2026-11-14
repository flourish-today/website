# History

- Oct 20–22, 2026: Beeswax site built, mostly through GitHub's web editor, then iterated in Claude Code; its look is in `beeswax/DESIGN.md`.
- Nov 8: repo registered in T3 and set up as a project. Hosting found: Cloudflare Pages project `website`, Git-connected, serving `beeswax/`. Screenshots-only previews dropped as first choice because the owner wants previews that feel real.

## Homepage drafts (Nov 8, 2026)

- Round 1: an editor window with line numbers and markdown marks (JetBrains Mono), a `//` document (IBM Plex Mono), a bold one (Space Mono). The owner disliked the "Hello, I'm FlourishDev" greeting and the name, and found the editor and markdown looks like bad clones; C was the weakest.
- Round 2: D (stacked cards, JetBrains Mono, yellow accent, progress bars) and E (left-column index, Plex Mono). D chosen, then stripped of the yellow and the bars.
- Round 3: F (donatemonero.org directory, icons instead of previews) made from the owner's reference.
- Round 4: G = F plus site header, live Beeswax preview card and footer. Reviewed twice by one Claude Opus delegate from headless Brave screenshots (round 1: desktop 7, phone 7.5; round 2: 8 and 8.5); its fixes applied (smaller section headings, fade at the preview's bottom, valid card link, dashed unclickable In progress cards, contrast, balanced line breaks). Screenshots: headless Brave without a separate profile folder; phone shot in a 400px iframe.
- Round 5 (H): the owner disliked G's grey leaf logo, the line under the header, the tagline and "All Flourish apps"; liked the footer. Three colour logos drawn in the Beeswax sticker style (sprout used). Earlier G reviews weren't blind (same reviewer saw both rounds), so reviews are now blind. Blind review of H: desktop/phone first impression 7/6, hierarchy 7/7, clutter 8/8, type 7/7, colour 8/8, logo 7/7, spacing 7/6, mobile 6, accessibility 8, trust 6. Applied: phone preview cropped above the cut-off text, wider desktop preview, underlined footer links. Skipped: adding the tagline back (owner's call); ObsidianCode alone in its row (waits for more apps).
- Then H was cut back: the owner called the drawn logos AI slop (deleted) and the big Beeswax preview beside a small ObsidianCode card lopsided, so no logo and no previews for now; footer line shortened to "Dedicated to the public domain under CC0 1.0".
- Sorting: "Projects / In progress" replaced by "Apps / Patches" with status on each card; PathFinish and Atoms added (PathFinish uses StreetComplete's icon from its repo).

## Nov 14, 2026: Beeswax More features page

Added `/features/` on the Beeswax 1.03 docs branch, with Schedule, User profiles, Recovery wait and Extra settings. It uses the existing small-page layout, styles, fonts and script. A More features button sits below the homepage feature cards; the owner's shorter Block any app text is preserved. The FAQ keeps detailed instructions and limits. The page is in the local editor for the owner to revise, not deployed. Local links and IDs checked; rendered without horizontal overflow at 1280px and 400px.
