# Profile: Familial Chylomicronemia Syndrome (FCS)

**Patient-facing label:** FCS
**Clinical name:** Familial Chylomicronemia Syndrome (LPL-pathway loss-of-function)
**Internal ID:** `fcs`

---

## Who this profile is for

People with **diagnosed FCS** — a rare (~ 1 in 1 million) genetic condition caused by loss-of-function variants in *LPL*, *APOC2*, *APOA5*, *GPIHBP1*, or *LMF1*. Patients can't clear chylomicrons from blood, so triglycerides run extremely high (often > 1000 mg/dL even when fasting), and pancreatitis risk is constant.

This profile is **the strictest** on the site. It deserves its own dedicated UI because:

1. The fat ceiling is far below any other profile (≤ 15–20 g of fat per day, < 10–15 % of total daily energy intake — Williams et al. 2018, the NLA-published dietary guideline). `[ext:williams-2018]`
2. Standard TG-lowering medications (fibrate, prescription omega-3, niacin) **typically do not work** in FCS. `[ext:goldberg-chait-2020]` (Orlistat has helped in case reports.)
3. MCT oil is *welcomed* (it bypasses chylomicron formation) — the opposite of the HTG profile.
4. New therapies are emerging (APOC3 antisense oligonucleotides — volanesorsen, with olezarsen in trials) but **diet remains the foundation**.
5. This is the **only profile in v1 with a calculator** — a focused food-fat lookup. See "FCS food-fat lookup scope" below and the section in CLAUDE.md.

The tone is critical. Drawn directly from `ref:fcs-brochure`: **Preparation, Practice, Positivity** — and a focus on what people **can** eat, not just what's forbidden.

### Routing into this profile

Genetic confirmation is the gold standard. Clinical features that should prompt a workup (and route a user to "talk to your care team about FCS testing"):

- Fasting TG persistently ≥ 880 mg/dL (10 mmol/L) **and**
- History of pancreatitis or eruptive xanthomas or lipemic plasma, **or**
- Failure to respond to fibrates, omega-3, and standard TG-lowering measures, **or**
- Symptom onset in childhood / strong family history.

`[ref:fcs-info]`, `[ref:fcs-brochure]`, `[ext:fcs-foundation]`.

---

## The framework: the FCS Plate [`ref:fcs-brochure`]

The brochure organizes the diet around a visual plate. The site replicates it as the homepage hero of this profile.

| Plate region | What goes there | Hand-portion guide |
|---|---|---|
| **Half the plate** | Non-starchy vegetables (raw, steamed, baked — never fried) | Two open hands |
| **Quarter the plate** | Lean protein (white fish, skinless chicken or turkey breast, egg whites, fat-free dairy, beans/lentils) | One palm |
| **Quarter the plate** | Complex carbohydrate (whole-grain bread, brown rice, quinoa, sweet potato, oatmeal) | One closed fist |
| **Side** | Fruit (whole, fresh) | One closed fist |
| **Fat allowance** | MCT oil only — measured | 1 teaspoon, used sparingly |
| **Drink** | Water, sparkling water, unsweetened tea | — |

---

## The hard rules

These are non-negotiable. Show them as a sticky reference card on every page in this profile.

| Rule | Target | Why |
|---|---|---|
| **Total fat** | **≤ 15–20 g per day** (< 10–15 % of total daily energy intake) | Animal *and* vegetable fat both restricted. From Williams et al. 2018, the published NLA dietary guideline. `[ext:williams-2018]` |
| **Alcohol** | **None — ever.** | Alcohol drives hepatic VLDL/TG and can precipitate pancreatitis. |
| **Added sugar** | **None or as close as possible.** | Drives hepatic VLDL production. |
| **Saturated fat** | Avoid (essentially zero — counted within total fat). | |
| **Trans fat** | Avoid. | |
| **Complex carbohydrates over refined** | Choose whole grains, legumes, vegetables; limit white bread, pasta, pastries, sugary cereals. | Williams 2018 guideline. |
| **Essential fatty acids** | Linoleic acid (omega-6) and α-linolenic acid (omega-3) must be met — usually a small dietitian-prescribed amount of plant oil. | Cannot be skipped; otherwise EFA deficiency develops. `[ext:williams-2018]` |
| **MCT oil** | Allowed and encouraged. **Amount is set by your dietitian.** | MCT bypasses chylomicrons; absorbed via portal vein. |
| **Fat-soluble vitamins (A, D, E, K), minerals** | Supplement as needed. | Very-low-fat eating impairs absorption. `[ext:williams-2018]` |
| **Calorie balance** | Adjust to maintain weight (or healthy growth in pediatric patients). | |
| **Sugary drinks** | None. | |
| **Restaurant food** | Almost always too risky without prep — see the Restaurant survival guide below. | Hidden fat in sauces, oils, dairy. |

`[ref:fcs-dietary-guidance]`, `[ref:fcs-brochure]`, `[ext:fcs-foundation]`, `[ext:williams-2018]`, `[ext:goldberg-chait-2020]`.

---

## FCS food-fat lookup scope (the v1 calculator)

This is the **only calculator on the site in v1**. Scope is deliberately narrow.

**What it does:**
- A user types a food name → the lookup finds it in USDA FoodData Central → it shows **total grams of fat per portion** (with portion options like "1 fillet (4 oz)" plus a grams field).
- The user can optionally add foods to a **today's tally**, which sums total fat for the day and compares against the 15–20 g ceiling.
- MCT oil is logged as a separate entry that contributes calories but is **not** counted against the daily fat ceiling — this matches how FCS dietitians actually counsel patients.

**What it does not do:**
- No long-term history, no graphs, no streaks, no weekly trends.
- No chain-length math (no C8 / C10 / C12 distinction in v1 — total fat is what Williams 2018's published guideline targets).
- No saved profiles or accounts. The day's tally lives in `localStorage` and resets at the user's local midnight.
- No claim that the user is "safe" if under the ceiling — the disclaimer "this is an estimate; confirm your fat budget with your dietitian" is paired with every result.

Implementation reference: `lib/clinical/fcs.ts` and `lib/fdc/`. See the **Calculators in v1** section of `CLAUDE.md` for the full design contract.

---

## Daily nutrient targets

| Nutrient | Adult / Adolescent | Pediatric (under guidance of pediatric lipidologist + dietitian) |
|---|---|---|
| Total fat | **≤ 15–20 g/day** (< 10–15 % of total daily energy) `[ext:williams-2018]` | Often ≤ 15 g/day |
| MCT oil | Allowed; **amount set by dietitian** | Per dietitian |
| Saturated fat | Effectively 0 (counted within total fat) | Effectively 0 |
| Trans fat | 0 | 0 |
| Added sugar | 0 ideally; otherwise as low as possible | 0 |
| Protein | Adequate via lean sources (egg whites, white fish, skinless poultry, fat-free dairy without added sugars, legumes) | Adequate; growth monitoring essential |
| Carbohydrates | Choose **complex** (whole grains, legumes, vegetables); limit simple and refined | Same |
| Sodium | < 2300 mg/day (or as advised) | Per dietitian |
| Energy | Adequate to maintain weight — MCT and complex carbs fill the calorie gap. Adjust calories for weight management. `[ext:williams-2018]` | Growth-curve-driven; never under-feed for fat restriction |
| Fat-soluble vitamins (A, D, E, K), minerals | Supplementation usually required — confirm with clinician `[ext:williams-2018]` | Supplementation usually required |
| Essential fatty acids (linoleic, α-linolenic) | Small dietitian-prescribed amounts of plant oil to meet EFA needs | Same; monitored |

---

## Foods table

The traffic-light buckets here are **stricter than every other profile**. Many "healthy" foods (avocado, salmon, olive oil, nuts) are red here.

### 🟢 Allowed — eat freely (within the 15–20 g fat/day ceiling)

- **Vegetables** — all non-starchy, fresh, frozen, or steamed: lettuce, spinach, kale, broccoli, cauliflower, peppers, carrots, cucumber, zucchini, tomato, mushrooms, green beans, asparagus, Brussels sprouts.
- **Whole grains** — oatmeal (plain), brown rice, quinoa, whole-wheat bread (check fat content), whole-wheat pasta (check fat content), barley, bulgur, air-popped popcorn (no oil/butter). **Choose complex over refined** per Williams 2018.
- **Starchy vegetables** — potato (no butter/oil), sweet potato, corn, peas.
- **Legumes** — beans, lentils, chickpeas, split peas.
- **Lean proteins (very low fat)** — egg whites, **fat-free milk products without added sugars** (Williams 2018 wording — fat-free Greek yogurt, fat-free cottage cheese, fat-free milk), white fish (cod, tilapia, sole, haddock — baked or steamed), shellfish in modest portions (shrimp), skinless chicken or turkey breast (baked, grilled, no skin).
- **MCT oil** — amount set by the patient's dietitian.
- **Beverages** — water, sparkling water, unsweetened tea, black coffee.
- **Seasonings** — herbs, spices, vinegar, lemon, lime, mustard, salsa (check label), low-sodium soy sauce.

### 🟡 Be mindful — fruits in limited amounts

Williams 2018 explicitly lists *"fruits in limited amounts"* (1–2 servings/day, whole fruit only — no juice). High-natural-sugar fruits (grapes, mango, dried fruit) are smaller portions or rare.

- **Whole, fresh fruit** — apples, pears, berries, citrus, melon, peaches, plums, banana — **1–2 servings/day**, no juice.

### 🔴 Not allowed (or extremely strict)

| Category | Examples |
|---|---|
| Added oils & fats | Olive oil, canola oil, sunflower oil, vegetable oil, butter, margarine, lard, ghee, coconut oil, palm oil. |
| High-fat fish | Salmon, tuna (esp. canned in oil), mackerel, sardines, herring. |
| All red meat | Beef, pork, lamb, processed meat. |
| Skin-on poultry | Chicken or turkey with skin; duck. |
| Full-fat dairy | Whole milk, 2 % milk, butter, cream, half-and-half, cheese (any kind), ice cream, full-fat yogurt. |
| Eggs (yolks) | Whole eggs, egg-yolk-containing dishes. (Egg whites are fine.) |
| Nuts and seeds | Almonds, walnuts, pistachios, peanuts, cashews, peanut butter, almond butter, sunflower seeds, chia, flax. |
| Avocado, olives | Heart-healthy elsewhere; too high in fat for FCS. |
| Coconut products | Coconut oil, coconut milk, coconut cream, shredded coconut. |
| Fried foods | French fries, fried chicken, donuts, fried fish, chips. |
| Baked goods | Cookies, cake, pastry, croissant, biscuit, pie. |
| Sugary drinks & desserts | Soda, juice, sweet tea, sports drinks, ice cream, candy. |
| Alcohol | All forms — beer, wine, spirits, mixed drinks, kombucha. |
| Hidden fat | Cream-based soups and sauces, salad dressings, mayo, gravy, hummus, restaurant rice/pasta cooked with oil. |

`[ref:fcs-fat-grams]`, `[ref:fcs-snacks]`, `[ref:fcs-dietary-guidance]`.

---

## One day on the FCS plate

A sample day. **Calorie and gram targets are individualized by your dietitian** — this is just an illustration of what FCS-friendly meals look like.

**Breakfast**
- Plain oatmeal cooked with water
- A small serving of berries
- A swirl of fat-free Greek yogurt
- Black coffee or tea

**Snack**
- Fresh whole fruit (1 piece)
- Fat-free cottage cheese

**Lunch**
- Bowl: brown rice, baked cod, steamed broccoli, black beans, salsa, lime
- MCT oil drizzled on the bowl (amount per your dietitian)
- Sparkling water with lemon

**Snack**
- Air-popped popcorn (no butter/oil)
- A small banana

**Dinner**
- Grilled skinless chicken breast
- Baked sweet potato (no butter)
- Mixed-greens salad with vinegar and lemon
- Steamed asparagus

**Dessert**
- Fat-free yogurt with sliced strawberries

---

## Restaurant survival guide

Drawn from `ref:fcs-brochure` (the three-Ps framing).

### Preparation
- Look at the menu **before** going.
- Call ahead to ask about prep — many kitchens will steam, broil, or grill without oil if you ask.
- Eat a small low-fat snack before going so you're not ravenous.

### What to ask for
- "Steamed, baked, broiled, or grilled — no oil, no butter."
- "Sauce on the side, or no sauce."
- "Plain — no dressing, no cheese, no croutons."
- "Extra vegetables instead of the side that comes with fries."

### What to order
- Plain baked potato with salsa
- Grilled white fish (no butter, no oil) + steamed vegetables
- Garden salad with vinegar or lemon, no dressing/cheese/croutons/avocado
- Plain steamed rice + grilled chicken breast (no skin, no oil)
- Fresh fruit
- Sparkling water, unsweetened iced tea, water with lemon

### FCS danger words on a menu
*Cream, creamy, cheesy, breaded, crispy, fried, sautéed, pan-fried, alfredo, bisque, butter, hollandaise, marinated (often in oil), drizzled, tempura, wrapped in pastry, en croûte.*

---

## Microcopy library

```yaml
profile_intro:
  key: fcs.intro
  text: >
    FCS is rare and demanding — but it's manageable, and the people who do
    well share three things: Preparation, Practice, and Positivity. This
    profile is built around what you can eat, not just what you can't.

profile_summary_one_line:
  key: fcs.summary
  text: 15–20 g of fat a day, no alcohol, no added sugar, MCT oil for healthy calories.

fat_over_alert:
  key: fcs.alert.fat
  trigger: daily total fat >= 15 g (yellow) or >= 20 g (red)  -- used by the FCS food-fat lookup only
  text: >
    You're approaching today's fat budget. The most common silent sources
    are dressing, sauce, cheese, and "healthy" oils — try a swap or move the
    rest of the day toward vegetables and white fish.

alcohol_alert:
  key: fcs.alert.alcohol
  trigger: any alcohol logged
  text: >
    With FCS, alcohol can trigger pancreatitis — please don't drink at all.

mct_card:
  key: fcs.mct.card
  text: >
    MCT oil bypasses the FCS pathway, which is why it's allowed when other
    fats aren't. Use it to add calories and a little richness — measured
    teaspoons, not splashes.

fat_soluble_vit_card:
  key: fcs.fsv.card
  text: >
    Very-low-fat eating can leave you short on vitamins A, D, E, and K. Most
    people with FCS need a supplement — confirm with your care team.

essential_fa_card:
  key: fcs.efa.card
  text: >
    A small, prescribed amount of plant oil (often a teaspoon a few times a
    week) prevents essential-fatty-acid deficiency. Your dietitian sets the
    amount.

restaurant_card:
  key: fcs.restaurant.card
  text: >
    Restaurants are doable with prep. Look at the menu first, call ahead, and
    have a low-fat snack before you go so you're not deciding hungry.

three_ps_card:
  key: fcs.three.ps
  text: >
    Preparation: think a meal ahead.
    Practice: the third week is easier than the first.
    Positivity: focus on what's on your plate, not what isn't.
```

---

## Educational cards

1. **What is FCS?** — Plain explainer of the LPL pathway and chylomicron clearance.
2. **The FCS Plate** — Replicate the brochure visual with our color palette.
3. **MCT vs. LCT** — Why MCT is OK and LCT is not (plus a quick look at the math).
4. **Hidden fat detective** — The places fat hides: dressings, sauces, "healthy" snacks, restaurant rice, smoothies.
5. **Travel & holidays** — pre-trip prep, packing safe snacks, holiday meal strategies.
6. **The three Ps** — Preparation, Practice, Positivity.
7. **Working with your care team** — pediatric lipidologist, dietitian, mental-health support; lab cadence; pancreatitis warning signs.
8. **What about new medications?** — Brief, neutral note on emerging therapies (APOC3-targeted, e.g., olezarsen) — does not replace diet.

---

## When to talk to your care team

> **Go to the ER or call 911 if:**
> - Sudden severe upper-belly pain, especially after a meal, that wraps to the back.
> - Persistent vomiting and you can't keep fluids down.
> - Belly pain with fever.
>
> These can be signs of pancreatitis. With FCS, do not wait it out.
>
> **Talk to your care team if:**
> - Your TG goes back above your usual baseline.
> - You're losing weight without trying — it can mean calorie intake is too low.
> - You're pregnant or planning pregnancy (TG often rises and management changes).
> - You're starting a new medication (some can raise TG).
> - You feel burned out — FCS is a heavy lift, and a dietitian or counselor can help.

---

## Do-not-say list

- ❌ "Just avoid fat" → ✅ "Long-chain fat under 20 g a day, with MCT for healthy calories"
- ❌ "Try omega-3 fish oil" → ✅ "Standard fibrates, omega-3, and niacin generally don't work in FCS — talk to your care team about MCT oil and emerging therapies."
- ❌ "Salmon is a good choice" → ✅ "Salmon is too high in fat for FCS — white fish like cod or tilapia is the FCS option"
- ❌ "Avocado is a healthy fat" → ✅ "Healthy fats elsewhere, but too high in fat for FCS"
- ❌ "Just one sip" / "a little won't hurt" → ✅ "FCS doesn't have a safe alcohol amount"
- ❌ "Diet" framed as "what you can't have" → ✅ "Plate" framed as "what's on it"

---

## Citations footer (shown on the profile page)

> This guidance is based primarily on Williams L et al., *Familial chylomicronemia syndrome: Bringing to life dietary recommendations throughout the life span* (*Journal of Clinical Lipidology*, 2018) — the National Lipid Association's published dietary guideline for FCS — and Goldberg RB & Chait A, *A Comprehensive Update on the Chylomicronemia Syndrome* (*Frontiers in Endocrinology*, 2020). It also draws on the FCS Foundation's patient education materials and the FCS Action nutritional brochure. It is general education, not medical advice. FCS care belongs with a lipidologist and a registered dietitian who knows the condition — please don't make changes to your medication or fat-gram target without them.
