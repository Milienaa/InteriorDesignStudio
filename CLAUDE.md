# Oriel — interior design studio website

Portfolio concept for a fictional Kyiv studio. Research and brand decisions live in
`docs/research/2026-11-04-niche-research.md` and `docs/brand/brand-board.html`; the site follows them.

## Brand
- **What:** Interior design studio in Podil, Kyiv, that designs apartments around the daylight they actually get.
  Proof: a light study at 08:00, 13:00 and 18:00, published fees, five process steps with weeks.
- **Audience:** owners of north-facing, deep-plan and older Kyiv flats (65–120 m²); one persona lives abroad.
- **Values / voice:** observant, exact, calm. Specifics over adjectives. Numbers in tabular figures.
- **Palette (tokens in `src/styles/tokens.css`):** Chalk #F1EFEA page, Noon #F8F7F4 raised, Limestone #E5E1D9 band,
  Ink #1F2328 text, Mute #585D64, Slate #3E5568 accent (links, hours, focus), Sun #C29243 drawings/logo dot only (never text),
  Dusk #1A1F26 contact + footer, Lamplight #D8B26E accent on Dusk. Warm light, cool shadow.
- **Type:** Newsreader (display, weight 300, opsz 72, italic for captions) + Hanken Grotesk (text/data, 400/500, tabular nums).
- **Motion:** light only. Hero rises on load; blocks fade up 16 px once on scroll; project photos scale 2.5% on hover. One easing (`--ease-out`), all off under reduced motion.
- **Avoid:** cream + serif + terracotta cliché, parallax, autoplay, looping animation, lofty copy, hidden fees, stock people.

## Site
- **Goal:** book a 30-minute consultation. Secondary: read fees and process.
- **Primary action:** the contact form validates and opens a pre-filled email (no backend yet).
- **Language:** English only.
- **Structure (one page, one day of light):** Hero → 07:00 Approach → 09:00 Selected work (3 project plates with
  light-study toggle) → 12:00 Services & fees → 15:00 Process → 17:00 Studio → 19:00 Questions → 21:00 Contact → footer.
  Backgrounds move from morning chalk to blue-hour dusk.
- **Imagery:** 5 temporary photos extracted from the brand board (`src/assets/photos/`), plus SVG daylight plans.
  Swap through `src/content/site.ts`.
- **Stack:** Astro, static output, vanilla JS under 5 KB, self-hosted fonts (@fontsource-variable).
- **Rules:** one H1, real alt text, 44 px touch targets, visible slate focus ring, `prefers-reduced-motion` makes everything instant.
- **All editable copy and data:** `src/content/site.ts`. Fictional facts (fees, projects, quote, contacts) are marked `// SAMPLE`.
- **No footer credit** for the author (user's decision, 5 Nov 2026).
