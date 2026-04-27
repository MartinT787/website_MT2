# Lipid Nutrition Hub

Plain-language nutrition guidance for people living with lipid disorders, built around four patient-facing profiles plus a focused FCS food-fat lookup. Patient education, not medical advice.

This is the v1 scaffold: Vite + React 18 + TypeScript + Tailwind CSS + React Router. Static deploy.

## Read these first

- [`CLAUDE.md`](CLAUDE.md) — project memory, design system, tech stack, scope decisions, USDA FDC integration, calculator scope, canonical disclaimer.
- [`docs/clinical/`](docs/clinical/) — the clinical specs (sources, four profile files). Every numeric claim and food list traces back to a citation here.

## Dev setup

Requires Node 20+ (sandbox uses 22).

```bash
npm install
cp .env.example .env.local            # paste your USDA FoodData Central key
npm run dev                           # http://localhost:5173
```

Other scripts:

```bash
npm run build       # tsc + vite build → dist/
npm run preview     # serve the production build
npm run typecheck   # tsc --noEmit
npm test            # vitest (no tests yet)
```

## What's in v1

- Four profile pages: **Heart-Healthy Eating**, **Cholesterol-Lowering Helper** (FH), **Triglyceride Calmer** (severe HTG / MFCS), and **FCS**.
- One calculator: **FCS food-fat tally**, on the FCS profile only — adds foods through the day, totals grams of fat, compares to the 15–20 g daily budget. Resets at local midnight. `localStorage` only; no accounts, no syncing.
- An **About** page and a canonical disclaimer in the footer of every page.

## What's deliberately *not* in v1

- No calculators on the heart-healthy, FH, or HTG profiles.
- No multi-day tracking, charts, streaks.
- No accounts, login, or sync.
- No clinician-facing tools.
- No multi-language support (English only).

See the *Calculators in v1* and *What's out of scope (v1)* sections of `CLAUDE.md` for the full list.

## Branch & commit conventions

- **Default branch:** `main`.
- Feature branches: `feature/<short-name>`. Clinical content edits: `content/<topic>`. Bug fixes: `fix/<short-name>`.
- Open a PR for any change to `docs/clinical/*.md` — those need a clinical review before merging.

## Disclaimer

The Lipid Nutrition Hub is patient education, not medical advice. The information here is general and may not apply to your situation. Talk with your doctor, lipidologist, or registered dietitian before changing your diet, medications, or care plan. In a medical emergency, call your local emergency number.
