# Site screenshots

Captured automatically by `scripts/screenshots.mjs` against the production build (`npm run build` + `npm run preview`).

To regenerate:

```bash
npm run build
npm run preview -- --port 4173 &
PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node scripts/screenshots.mjs
```

| Page | Mobile (390 px) | Desktop (1280 px) |
|---|---|---|
| Home | `mobile-01-home.png` | `desktop-01-home.png` |
| Heart-Healthy Eating | `mobile-02-heart-healthy.png` | `desktop-02-heart-healthy.png` |
| Cholesterol-Lowering Helper | `mobile-03-cholesterol.png` | `desktop-03-cholesterol.png` |
| Triglyceride Calmer | `mobile-04-triglyceride.png` | `desktop-04-triglyceride.png` |
| FCS (with the food-fat tally) | `mobile-05-fcs.png` | `desktop-05-fcs.png` |
| About | `mobile-06-about.png` | `desktop-06-about.png` |

Open any file on GitHub to view it inline.
