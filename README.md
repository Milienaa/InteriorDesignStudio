# Oriel — interiors shaped by daylight

One-page website for a fictional interior design studio in Podil, Kyiv. Portfolio concept.
Research and brand decisions: `docs/research/2026-11-04-niche-research.md`, `docs/brand/brand-board.html`.

## Run

Requires Node 22.12 or newer (Astro 6). With nvm for Windows:

```
nvm use 22.22.0
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve dist/
```

## Edit

- All copy, fees, projects, FAQ and contact details: `src/content/site.ts`. Items marked `SAMPLE` are illustrative.
- Colours, type scale, spacing and motion tokens: `src/styles/tokens.css`.
- Photos: `src/assets/photos/` (temporary selection from the brand board), referenced from `site.ts`.
- Daylight plans: drawn from the `plan` data of each project in `site.ts` (rooms, windows, three light states).
- Sections: one component each in `src/components/`, assembled in `src/pages/index.astro`.

## How the form works

There is no backend. The form validates in the browser, then opens the visitor's email app with the
details pre-filled (`mailto:` to the address in `site.ts`). Without JavaScript it posts to the same address.
Swap in a real endpoint by changing the `action` in `src/components/Contact.astro` and the submit handler in `src/scripts/main.ts`.
