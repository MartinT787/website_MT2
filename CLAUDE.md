# Lipid Nutrition Hub

Plain-language nutrition guidance for people living with lipid disorders (and the family members eating with them). Built around four patient-facing profiles, with a USDA-backed food search and per-profile calculators.

This file is the project's source of truth for any Claude Code session. Read this first.

---

## Mission

Most lipid-disorder patients are handed a one-page diet sheet at diagnosis and never given a tool to use it day-to-day. This site gives them:

1. A profile that matches their condition (and routes them to the right one).
2. A food search that tells them whether a specific item fits their profile, with the **why**.
3. A meal-day tracker that surfaces the relevant numbers (fat, sat fat, cholesterol, fiber, added sugar, sodium — and for FCS, **long-chain fat**).
4. Education cards in patient language, sourced and cited.

It is **patient education**, not medical advice. The disclaimer below is canonical.

---

## Audience

- **Primary:** patients with a lipid diagnosis and the parents of pediatric patients.
- **Secondary:** the general public looking for trustworthy heart-healthy guidance.
- **Tertiary:** clinicians who want a tool to point patients to.

Pediatric and adult content live in the same profile pages with toggles where the guidance diverges (e.g., daily nutrient targets, sample days). We do not maintain separate pediatric and adult profile pages.

---

## The four profiles

| Patient-facing label | Internal ID | Spec |
|---|---|---|
| Heart-Healthy Eating | `general` | [`docs/clinical/general.md`](docs/clinical/general.md) |
| Cholesterol-Lowering Helper | `fh` | [`docs/clinical/fh.md`](docs/clinical/fh.md) |
| Triglyceride Calmer | `htg` | [`docs/clinical/htg.md`](docs/clinical/htg.md) |
| FCS | `fcs` | [`docs/clinical/fcs.md`](docs/clinical/fcs.md) |

Each profile spec defines: lab thresholds for routing, daily nutrient targets (adult & pediatric), traffic-light food categorization, microcopy library, education card list, "talk to your care team" copy, do-not-say list, and citations.

`docs/clinical/sources.md` catalogs every reference and is the citation foundation for the four profile files.

---

## Tone rules

These apply to **every** patient-facing string on the site.

1. **Plain language.** Read aloud at an 8th-grade level. If you wouldn't say it to a worried parent in clinic, don't write it.
2. **Direct, not soft-pedaled.** "Sugary drinks raise your triglycerides" — not "may potentially have an effect on lipid levels."
3. **What you CAN do, not what you can't.** Especially for FCS. Lead with the plate, not the prohibition list.
4. **No moral language.** No "good food / bad food," no "cheat day," no "splurge." Use "everyday foods" and "occasional treats."
5. **No fear porn.** Pancreatitis and CV risk are real, and we name them — but factually, in one sentence, not in a paragraph designed to scare.
6. **No diagnosing.** Lab numbers route the user toward a profile suggestion. We never say "you have FH" — we say "your numbers fit a pattern your doctor would want to look at."
7. **Pediatric voice = adult voice.** Kids and parents read the same words; we don't infantilize.
8. **Honest about uncertainty.** When a recommendation depends on individual factors, say so. "For most people…" "Talk with your care team about your situation."

The per-profile **do-not-say lists** in `docs/clinical/*.md` are authoritative. Add to them when copy reviews uncover new patterns.

---

## Design system

### Palette

Confirmed against the martinthelin.com reference (warm, editorial, considered).

| Token | Hex | Use |
|---|---|---|
| `parchment` | `#E8E1D5` | Page background, cards |
| `parchment-50` | `#F2EDE3` | Subtle card lift, hover |
| `ink` | `#1F1A14` | Body text, headings |
| `ink-soft` | `#4A4035` | Secondary text, captions |
| `terracotta` | `#C97B5C` | Primary accent, links, CTAs, focus rings |
| `terracotta-deep` | `#A66045` | Hover, active state |
| `sage` | `#4A574F` | Dark surfaces, footer, header bar |
| `sage-light` | `#6B7C70` | Sage on cream sections |
| `peach` | `#E0A084` | Accents on sage, secondary CTAs |
| `eat-green` | `#6B8E5A` | "Eat" indicator |
| `eat-green-soft` | `#D8E4CD` | "Eat" card background |
| `caution-amber` | `#C99B4D` | "Be mindful" indicator |
| `caution-soft` | `#F0E4C8` | "Be mindful" card background |
| `avoid-rust` | `#B85A4A` | "Limit / Avoid" indicator |
| `avoid-rust-soft` | `#F0D4CC` | "Limit / Avoid" card background |

These tokens are defined in `tailwind.config.ts` under `theme.extend.colors`. Do not hardcode hex values in components.

### Typography

- **Headings:** a serif in the editorial-classical family (target: Lora, EB Garamond, or Cormorant Garamond — pick one and stick with it). Weight 500–600.
- **Body:** the same serif at body weight (400), or a humanist sans (Inter, Source Sans) if serif body proves hard to read at small sizes. Decide via a visual test on the homepage and lock the choice.
- **Code/numbers:** a monospaced font (JetBrains Mono or system-ui-monospace) for lab values, fat grams, and calculator displays.
- **Type scale:** Tailwind defaults are fine; use `text-base` for body, `text-2xl`/`text-3xl` for section headings, `text-4xl`/`text-5xl` for the hero.

### Spacing & layout

- 8 px grid (Tailwind defaults).
- Max line length: 70 characters for body copy. Use `max-w-prose` aggressively.
- Generous vertical rhythm — this is patient-facing content, not a dashboard. Default `py-12` between major sections.
- Mobile-first. Most users will land here on a phone, often after a clinic visit.

### Accessibility

- WCAG **AA** minimum, AAA where text is small.
- All interactive elements ≥ 44 × 44 px touch targets.
- Color contrast must be verified against the palette tokens — `terracotta` on `parchment` is borderline at small sizes; use `terracotta-deep` for body links.
- Every food card and chart has a text alternative.
- Reduce motion respected via `prefers-reduced-motion`.
- Test with VoiceOver and screen reader before launch.

### Copy density

The site favors **short paragraphs, lots of white space, and lists over walls of text**. If a section needs more than three short paragraphs, break it into cards.

---

## Tech stack

Locked decisions:

- **Vite + React 18 + TypeScript** — chosen for speed, simplicity, and to keep the dev story tight on a single laptop.
- **Tailwind CSS** with the palette tokens above. No CSS-in-JS, no separate design-system package.
- **React Router** for routing. No Next.js for the v1.
- **Vitest + React Testing Library** for tests. Playwright for one or two end-to-end smoke tests.
- **Static deploy** to Netlify or Vercel — no backend in v1.
- **USDA FoodData Central API** for nutrition data. Cached aggressively (see below).

Open decisions (defer until they bite):

- State management: starts as React Context + URL state. Reach for Zustand only if context becomes unwieldy.
- Form library: native `<form>` + custom hooks first; React Hook Form if forms grow.
- Analytics: none in v1. If we add it later, prefer Plausible or Fathom for privacy.

---

## USDA FoodData Central integration

The food-search experience depends on USDA FDC.

### Approach

1. **API key** lives in `.env.local` as `VITE_FDC_API_KEY`. Never commit. `.env.example` documents the variable.
2. **Search** uses the FDC `/v1/foods/search` endpoint with `dataType=Foundation,SR%20Legacy,Survey%20(FNDDS)` — skip Branded by default to keep results clean and reproducible. Branded is opt-in via a "Brand-name results" toggle.
3. **Cache** every fetched food into `localStorage` keyed by FDC ID. Cache also feeds the day-tracker so the same item doesn't refetch.
4. **Per-food classification** — when a food loads, we run it through `lib/clinical/<profile>.ts` rules to assign a traffic-light bucket. The classification is stored alongside the food in cache. If the rules change in code, cached classifications are invalidated by version-bumping a `CLINICAL_RULES_VERSION` constant.
5. **The numbers we always extract** from the FDC payload:
   - Energy (kcal)
   - Total fat (g)
   - Saturated fat (g)
   - Trans fat (g)
   - Cholesterol (mg)
   - Carbohydrates (g)
   - Fiber (g)
   - Total sugars (g)
   - **Added sugars (g)** when present (often missing in Foundation; fall back to Survey/FNDDS)
   - Sodium (mg)
   - Protein (g)
   - **Fatty acids by chain length:** 8:0, 10:0, 12:0, 14:0, 16:0, 18:0, 18:1, 18:2, 18:3, 20:5 (EPA), 22:6 (DHA) — needed for the FCS LCT calc and the omega-3 nudge.
6. **Per-100g normalization** — FDC payloads are per-100g. The day-tracker takes a portion size in grams or household units and scales.
7. **Citation** — every food card shows "Source: USDA FoodData Central · FDC ID xxxxxxx · accessed YYYY-MM-DD".

### FCS LCT math (lives in `lib/clinical/fcs.ts`)

```
LCT(g) = totalFat(g) − fattyAcid_8_0(g) − fattyAcid_10_0(g)
```

C12 (lauric) is **counted as LCT** for FCS, despite its borderline metabolic profile. Document this choice in code comments.

If the FDC payload is missing the chain-length fields for a given food, the calculator surfaces the food as "C8/C10 unknown — assume 0 g MCT" and warns the user. We do not silently treat MCT as 0 in the totals without flagging.

---

## Canonical disclaimer

This exact text appears in the footer of every page. Do not paraphrase.

> The Lipid Nutrition Hub is patient education, not medical advice. The information here is general and may not apply to your situation. Talk with your doctor, lipidologist, or registered dietitian before changing your diet, medications, or care plan. In a medical emergency, call your local emergency number.

A shorter version for inline contexts (food card, calculator):

> General education, not medical advice. Talk with your care team.

---

## Citation conventions

- Inside `docs/clinical/*.md`, use short tags: `[ref:...]` for project files, `[ext:...]` for external standards. The tags resolve in `docs/clinical/sources.md`.
- In **code**, every clinical constant has a comment with the source tag:
  ```ts
  // FCS daily LCT ceiling — ref:fcs-dietary-guidance, ext:fcs-foundation
  export const FCS_LCT_CEILING_G_PER_DAY = 20;
  ```
- In the **UI**, profile pages have an "About this guidance" footer that lists external sources by name + year + issuing body. Project files (PDFs in `references/`) are not linked from the UI.
- USDA FDC food entries always cite FDC ID + accessed date.

---

## File structure

```
.
├── CLAUDE.md                          ← this file
├── README.md
├── docs/
│   └── clinical/
│       ├── sources.md                 ← citation index
│       ├── general.md                 ← Heart-Healthy Eating profile
│       ├── fh.md                      ← Cholesterol-Lowering Helper profile
│       ├── htg.md                     ← Triglyceride Calmer profile
│       └── fcs.md                     ← FCS profile
├── references/                        ← committed PDFs/docs (not shipped)
│   ├── FCS/
│   └── nutrition_documents/
├── src/                               ← (to be created)
│   ├── lib/
│   │   ├── clinical/                  ← per-profile rules and calculators
│   │   │   ├── general.ts
│   │   │   ├── fh.ts
│   │   │   ├── htg.ts
│   │   │   └── fcs.ts                 ← LCT math lives here
│   │   └── fdc/                       ← USDA FoodData Central client + cache
│   ├── components/
│   ├── pages/
│   └── styles/
└── tests/
    └── clinical/                      ← fixture-driven tests for each profile
```

---

## What's out of scope (v1)

Saying these out loud so they don't sneak back in:

- User accounts, login, sync. v1 is single-device, `localStorage`-only.
- A native mobile app. The site is mobile-first PWA-friendly.
- Telehealth booking, EHR integration, or any handling of PHI.
- A clinician-side tool. v1 is patient-facing only.
- Multi-language. v1 is English-only.
- An LLM-powered chat. v1 is hand-authored content + deterministic calculators.
- Recommending specific medications, dosing, or products by brand for a treatment effect. We mention plant-sterol-fortified products by category, not brand-as-endorsement.

---

## Dev setup (after scaffolding lands)

```bash
nvm use 20
npm install
cp .env.example .env.local            # add VITE_FDC_API_KEY
npm run dev                           # http://localhost:5173
```

Tests:
```bash
npm test                              # vitest
npm run test:e2e                      # playwright (smoke only)
npm run typecheck
npm run lint
```

Build:
```bash
npm run build
npm run preview
```

---

## Branch & commit conventions

- **Default branch:** `main`.
- **Feature branches:** `feature/<short-name>` for site features; `content/<topic>` for clinical-content edits; `fix/<short-name>` for bug fixes.
- **Commits:** imperative voice, ≤ 72-char subject. Body explains *why*, not *what*. Reference clinical sources when relevant: `Add viscous-fiber target to FH profile (ref:nla-2014)`.
- Open a PR for any change to `docs/clinical/*.md` — these are clinical content and need a second look before merging to `main`.

---

## Verification flag

Anything in the clinical files marked `[verify]` is something Claude wasn't 100 % confident about and needs Martin's clinical sign-off before launch. Search the codebase for `[verify]` regularly and clear them as they're confirmed.
