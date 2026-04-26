# Profile: Triglyceride Calmer

**Patient-facing label:** Triglyceride Calmer
**Clinical name:** Severe and very severe hypertriglyceridemia (HTG), excluding FCS
**Internal ID:** `htg`

---

## Who this profile is for

People with **severely elevated triglycerides** (TG ≥ 500 mg/dL) where the diagnosis is **multifactorial chylomicronemia syndrome (MCS)** or **severe HTG**, **not** monogenic FCS.

The line between this profile and **FCS** matters:

- **HTG (this profile):** TG can usually be brought down meaningfully by diet, weight loss, alcohol cessation, and medication (fibrates, omega-3, niacin). The pathophysiology is a mix of polygenic risk and lifestyle/secondary factors.
- **FCS (separate profile):** Genetic LPL pathway loss-of-function. Diet must be **drastically** restricted (< 20 g fat/day, lifelong). Standard TG-lowering medications don't work; pancreatitis risk is constant.

If a user is unsure which profile fits, route them through a brief screener and default to the more conservative one.

### Lab thresholds for routing

| Tier | Fasting TG (mg/dL) | What this means |
|---|---|---|
| Normal | < 150 | Not this profile. |
| Borderline high | 150–199 | Heart-Healthy Eating profile. |
| High | 200–499 | Heart-Healthy Eating profile, with TG-focused tweaks. |
| **Severe (this profile, tier 1)** | **500–999** | Pancreatitis risk rises; aggressive dietary changes warranted. |
| **Very severe (this profile, tier 2)** | **≥ 1000** | High pancreatitis risk; the strictest version of this profile applies, and FCS workup is appropriate. |

Pediatric tiers shift down — `[verify]` against `ref:nhlbi-2011` and `ref:aap-2020`. NHLBI 2011 uses TG ≥ 130 (ages 10–19) as elevated and ≥ 100 (ages 0–9) as elevated.

`[ref:nhlbi-2011]`, `[ref:uptodate-peds-mgmt]`, `[ext:nla-2014]`, `[ext:eas-htg-2014]`.

---

## Why this matters: pancreatitis risk

This is the single most important patient-education point for this profile. State it plainly on the homepage:

> Triglycerides above 500 mg/dL raise the risk of **pancreatitis** — a serious inflammation of the pancreas that often requires hospitalization. Above 1000, the risk goes up sharply. The goal of this profile is to get your TG well below 500 and ideally below 150.

---

## The framework: stack TG-lowering levers [`ref:ucsf-adult`, `ext:nla-2014`, `ref:htg-15pct`]

Five levers, in rough order of impact:

| Lever | Effect on TG | How |
|---|---|---|
| Cut added sugar and sugary drinks | ↓ 20–50 % | Soda, sweet tea, juice, sweetened coffee. Fructose drives hepatic VLDL production. |
| Cut alcohol (none if TG ≥ 500) | ↓ 20–80 % | Even small amounts can spike TG sharply. |
| Lose 5–10 % of body weight (if applicable) | ↓ 20–30 % | The single biggest lever for many adults. |
| Limit total fat to 15–25 % of calories (tier 1) or 10–15 % (tier 2) | ↓ 30–50 % | Lower-fat eating reduces chylomicron load. |
| Treat secondary causes | varies | Uncontrolled diabetes, hypothyroidism, certain medications (estrogens, retinoids, atypical antipsychotics, beta-blockers, thiazides). |

Medication (fibrate, prescription omega-3 like icosapent ethyl or omega-3-acid ethyl esters, niacin) typically goes alongside, not instead of, diet for TG ≥ 500.

---

## Daily nutrient targets

### Adult — Tier 1 (TG 500–999)

| Nutrient | Target | Notes |
|---|---|---|
| Total fat | **15–25 %** of total calories | Tighter than general (25–35 %). |
| Saturated fat | < 7 % of total calories | |
| Trans fat | Avoid | |
| Added sugar | **As low as possible**; explicit goal < 25 g/day or < 5 % of calories | The most actionable single lever for many patients. |
| Sugary drinks | **None.** Water, sparkling water, unsweetened tea, black coffee. | |
| 100 % fruit juice | ≤ 4 oz/day, ideally none | Whole fruit instead. |
| Refined carbs | Limit (white bread, white rice, pasta, sugary cereal) | High-glycemic carbs raise TG. |
| Total fiber | ≥ 30 g/day | Especially viscous fiber. |
| Alcohol | **None** while TG ≥ 500 | |
| Omega-3 fish oil (EPA + DHA) | 2–4 g/day, often via prescription | Discuss with care team; supplements vary widely in potency. |
| Sodium | < 2300 mg/day | |

### Adult — Tier 2 (TG ≥ 1000) [`ref:htg-15pct`, `ref:htg-worksheet`]

Same as Tier 1, with two changes:

| Nutrient | Target | Notes |
|---|---|---|
| Total fat | **10–15 %** of total calories | Very low fat. ~ 25–40 g fat/day for a 2000-kcal diet. |
| MCT oil | Optional | MCT bypasses chylomicron formation, so it can replace some long-chain fat. Discuss with care team. |
| Alcohol | **None.** | Period. |
| Added sugar | **None.** | |

### Pediatric (CHILD-2-TG diet) [`ref:nhlbi-2011`, `ref:nutrition-youth`]

| Nutrient | Target | Notes |
|---|---|---|
| Sugary drinks | **None** | Single most important change. |
| Added sugar | < 25 g/day | |
| Total fat | 25–30 % of total calories (or lower if TG is severe) | |
| Saturated fat | 8–10 % of total calories | |
| Refined carbs | Limit | |
| Sugary cereal | Replace with oatmeal or unsweetened whole-grain cereal | |
| Fish (omega-3) | ≥ 2 servings/week | |
| Fiber | Age + 5 g/day | |

---

## Foods table (traffic light)

### 🟢 Eat freely

- **Vegetables** — all kinds. Aim for half the plate.
- **Whole fruit** (not juice) — berries, apples, citrus, melon. Limit very-high-sugar fruits (grapes, mango) to 1 serving/day if TG is severe.
- **Whole grains** — oats, quinoa, barley, brown rice, whole-wheat bread/pasta. Watch portion sizes — carbs still matter at this severity.
- **Legumes** — beans, lentils, chickpeas. Excellent fiber + protein.
- **Lean fish** — cod, tilapia, sole, halibut.
- **Oily fish** (omega-3) — salmon, sardines, mackerel, trout. ≥ 2× / week.
- **Skinless poultry** — chicken or turkey breast, baked or grilled.
- **Tofu, tempeh, edamame** — heart- and TG-friendly protein.
- **Egg whites** — unrestricted.
- **Nonfat or 1 % milk, plain low-fat yogurt** | unsweetened.
- **Water, sparkling water, unsweetened tea, black coffee.**

### 🟡 Be mindful

- **Whole eggs** — ≤ 4–7 per week (yolks contain fat and cholesterol).
- **Lean red meat** — ≤ 1–2 servings/week, 3 oz portions.
- **Cheese** — small amounts of part-skim only; ≤ 1 oz/day.
- **Nuts and seeds** — heart-healthy but calorie- and fat-dense; portion to ½ oz/day at tier 1, less at tier 2.
- **Avocado** — ¼ avocado/day at tier 1; consider skipping at tier 2.
- **Olive oil** — measure (~ 1–2 tsp per meal at tier 1, less at tier 2).
- **Whole fruit with high natural sugar** — grapes, mango, pineapple, dried fruit. Single serving.
- **Starchy vegetables** — potatoes, corn, peas. Modest portions.

### 🔴 Limit / Avoid

- **Sugary drinks** — soda, sweet tea, sports drinks, energy drinks, sweetened coffee, lemonade, juice (even 100 %). The largest single TG driver for most patients.
- **Alcohol** — none while TG ≥ 500.
- **Desserts and candy** — cake, cookies, ice cream, pastries, candy bars.
- **Sugary cereals** — most "kid" cereals; granola with honey/agave.
- **Honey, agave, maple syrup, table sugar** — all behave the same way.
- **Processed and cured meats** — bacon, sausage, hot dogs, deli meat.
- **Fried foods** — French fries, fried chicken, fried fish.
- **Full-fat dairy** — whole milk, butter, cream, half-and-half, ice cream.
- **Coconut oil, palm oil, palm-kernel oil.**
- **Coconut milk, coconut cream.**
- **Pastries, croissants, biscuits, donuts.**
- **Fast-food meals** — high in everything that drives TG.

---

## Microcopy library

```yaml
profile_intro:
  key: htg.intro
  text: >
    Triglyceride Calmer is for people whose triglycerides are above 500 — a
    level that raises the risk of pancreatitis. The goal is to bring TG well
    below 500, and the food levers that work fastest are cutting sugary
    drinks, cutting alcohol, and pulling back on refined carbs.

profile_summary_one_line:
  key: htg.summary
  text: No sugary drinks, no alcohol, less added sugar, less refined carbs, more fish and fiber.

pancreatitis_warning:
  key: htg.warning.pancreatitis
  text: >
    TG above 500 raises pancreatitis risk; above 1000, the risk is high.
    Sudden severe stomach pain, especially after a big meal or alcohol, needs
    same-day medical attention.

added_sugar_alert:
  key: htg.alert.sugar
  trigger: daily added sugar > 25 g
  text: >
    Added sugar is the single biggest TG driver for most people. The most
    common source is sweetened drinks — even one a day moves the needle.

alcohol_alert:
  key: htg.alert.alcohol
  trigger: any alcohol logged
  text: >
    With TG above 500, alcohol can cause large, fast spikes — please don't
    drink at all until your TG is under control.

fat_over_alert:
  key: htg.alert.fat
  trigger: daily fat > 25 % of kcal (tier 1) or > 15 % (tier 2)
  text: >
    You're over the daily fat target for your tier. Most likely sources are
    cooking oil, cheese, fatty meat, or restaurant meals.

omega3_nudge:
  key: htg.nudge.fish
  trigger: < 2 fish servings logged in past 7 days
  text: >
    Omega-3 from fish (or a prescription) helps lower TG. Aim for two fish
    meals this week, like salmon or sardines.

weight_card:
  key: htg.weight.card
  text: >
    For many adults, losing just 5–10 % of body weight drops TG by 20–30 %.
    That's worth talking through with your care team.
```

---

## Educational cards

1. **Why high TG matters** — a one-paragraph plain explainer of the pancreatitis risk and the link to cardiovascular disease.
2. **Sugar is the biggest food lever** — visual showing TG response to a soda vs. water swap.
3. **Why alcohol hits TG so hard** — short biology explainer.
4. **Two tiers of the diet** — explain Tier 1 (500–999) vs Tier 2 (≥ 1000).
5. **Fish and fish oil** — natural sources vs. prescription, what to ask your doctor about.
6. **Hidden sugar map** — sauces, dressings, "healthy" granola, flavored yogurt, smoothies.

---

## When to talk to your care team

> **Talk to your doctor — same day — if you have:**
> - Sudden severe pain in the upper belly that wraps to the back, especially after a big meal or alcohol.
> - Persistent nausea or vomiting.
> - A fever along with belly pain.
>
> These can be signs of pancreatitis. Don't wait it out.
>
> **Talk to your doctor or lipid specialist if:**
> - Your TG hasn't dropped after 4–6 weeks of consistent changes.
> - You're starting a new medication (some raise TG).
> - You're pregnant or planning pregnancy — TG often rises in the third trimester.
> - You're considering bariatric surgery, GLP-1 medication, or a fibrate.

---

## Do-not-say list

- ❌ "Just one drink is fine" → ✅ "While TG is above 500, please don't drink"
- ❌ "Sugar in fruit is the same as soda" → ✅ "Whole fruit is OK in moderation; sugary drinks are the bigger problem"
- ❌ "Low-fat means fat-free" → ✅ "Fat is limited but not eliminated — healthy fats from fish and small amounts of olive oil still belong"
- ❌ "TG isn't a heart risk" → ✅ "Very high TG raises both pancreatitis risk and long-term heart risk"
- ❌ "Try keto" → ✅ "Very-low-carb diets sometimes raise TG initially — talk to your care team"

---

## Citations footer (shown on the profile page)

> This guidance is based on the National Lipid Association's *Recommendations for Patient-Centered Management of Dyslipidemia* (2014–2015), Hegele et al. on the polygenic nature of hypertriglyceridemia (*Lancet Diabetes Endocrinol*, 2014), the NHLBI Expert Panel on Integrated Guidelines for Cardiovascular Health and Risk Reduction in Children and Adolescents (2011), and UCSF adult dyslipidemia diet guidance (2023). It is general education, not medical advice — do not change medications without your care team.
