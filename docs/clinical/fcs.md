# Profile: Familial Chylomicronemia Syndrome (FCS)

**Patient-facing label:** FCS
**Clinical name:** Familial Chylomicronemia Syndrome (LPL-pathway loss-of-function)
**Internal ID:** `fcs`

---

## Who this profile is for

People with **diagnosed FCS** — a rare (~ 1 in 1 million) genetic condition caused by loss-of-function variants in *LPL*, *APOC2*, *APOA5*, *GPIHBP1*, or *LMF1*. Patients can't clear chylomicrons from blood, so triglycerides run extremely high (often > 1000 mg/dL even when fasting), and pancreatitis risk is constant.

This profile is **the strictest** on the site. It deserves its own dedicated UI because:

1. The fat ceiling is far below any other profile (< 20 g/day).
2. Standard TG-lowering medications (fibrate, statin, niacin, fish oil) **don't work** for FCS.
3. MCT oil is *welcomed* (it bypasses the chylomicron pathway) — the opposite of the HTG profile.
4. The math for **long-chain fat (LCT)** is what matters, not total fat alone.
5. New therapies (e.g., olezarsen — APOC3 ASO) are emerging but diet remains the foundation.

The tone here is critical. Drawn directly from `ref:fcs-brochure`: **Preparation, Practice, Positivity** — and a focus on what people **can** eat, not just what's forbidden.

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
| **Total long-chain fat (LCT)** | **< 20 g per day** | LCT becomes chylomicrons; chylomicrons can't be cleared in FCS. |
| **Alcohol** | **None — ever.** | Alcohol drives hepatic VLDL/TG and can precipitate pancreatitis. |
| **Added sugar** | **None or as close as possible.** | Drives hepatic VLDL production. |
| **Saturated fat** | Avoid (essentially zero). | Same chylomicron pathway. |
| **Trans fat** | Avoid. | |
| **MCT oil (C8/C10)** | Allowed and encouraged in measured amounts (typically up to 1–3 tsp/day with clinician guidance). | MCT bypasses chylomicrons; absorbed via portal vein. |
| **Sugary drinks** | None. | |
| **Restaurant food** | Almost always too risky without prep — the FCS Restaurant Guide section below covers strategies. | Hidden fat in sauces, oils, dairy. |

`[verify]` MCT dosing range against current FCS Foundation guidance and `ref:fcs-dietary-guidance`.

`[ref:fcs-dietary-guidance]`, `[ref:fcs-brochure]`, `[ext:fcs-foundation]`.

---

## The LCT calculation

This is what the site's calculator computes for every meal:

```
Long-Chain Fat (g) = Total Fat (g) − MCT C8 (g) − MCT C10 (g)
```

### Worked example

A user enters:
- 4 oz baked cod → 1 g total fat, 0 g MCT
- ½ cup brown rice → 1 g total fat, 0 g MCT
- 2 cups steamed broccoli → 1 g total fat, 0 g MCT
- 1 tsp MCT oil (C8/C10) → 4.5 g total fat, 4.5 g MCT
- 1 medium apple → 0 g total fat

| Item | Total fat | MCT | LCT |
|---|---|---|---|
| Cod | 1 g | 0 | 1 g |
| Brown rice | 1 g | 0 | 1 g |
| Broccoli | 1 g | 0 | 1 g |
| MCT oil 1 tsp | 4.5 g | 4.5 g | 0 g |
| Apple | 0 g | 0 | 0 g |
| **Day total** | **7.5 g** | **4.5 g** | **3 g** |

Far under the 20 g LCT ceiling. The MCT contributes calories without LCT.

### Implementation note

USDA FoodData Central usually reports "Fatty acids, total saturated/monounsaturated/polyunsaturated" plus individual fatty acids by chain length (e.g., 8:0, 10:0, 12:0). For the LCT calc, treat C8 (octanoic) and C10 (decanoic) as MCT; C12 (lauric) and longer are LCT. See `lib/clinical/fcs.ts` for the rule.

`[verify]` Whether C12 should be counted as MCT or LCT for FCS — clinically it's intermediate, but conservative practice in FCS is to count C12 as LCT.

---

## Daily nutrient targets

| Nutrient | Adult / Adolescent | Pediatric (under guidance of pediatric lipidologist + dietitian) |
|---|---|---|
| Total fat | ≤ 20 g/day total — this includes LCT | Often ≤ 15 g/day |
| Long-chain fat (LCT) | **< 20 g/day** (often the dietitian targets 10–15 g) | < 15 g/day |
| MCT (C8/C10) oil | 1–3 tsp/day, individualized | Per dietitian |
| Saturated fat | Effectively 0 | Effectively 0 |
| Trans fat | 0 | 0 |
| Added sugar | 0 ideally; otherwise as low as possible | 0 |
| Protein | Adequate via lean sources (egg whites, white fish, skinless poultry, fat-free dairy, legumes) | Adequate; growth monitoring essential |
| Sodium | < 2300 mg/day (or as advised) | Per dietitian |
| Energy | Adequate to maintain weight & growth — MCT and complex carbs fill the calorie gap left by fat restriction | Growth-curve-driven |
| Fat-soluble vitamins (A, D, E, K) | Supplementation usually required — confirm with clinician | Supplementation usually required |
| Essential fatty acids (linoleic, alpha-linolenic) | Small dietitian-prescribed amounts of plant oils may be needed to prevent deficiency | Same; monitored |

---

## Foods table

The traffic-light buckets here are **stricter than every other profile**. Many "healthy" foods (avocado, salmon, olive oil, nuts) are red here.

### 🟢 Allowed — eat freely (within the 20 g fat/day ceiling)

- **Vegetables** — all non-starchy, fresh, frozen, or steamed: lettuce, spinach, kale, broccoli, cauliflower, peppers, carrots, cucumber, zucchini, tomato, mushrooms, green beans, asparagus, Brussels sprouts.
- **Fruit (fresh, whole)** — apples, pears, berries, citrus, melon, peaches, plums, banana, grapes (whole-fruit only — no juice).
- **Whole grains** — oatmeal (plain), brown rice, quinoa, whole-wheat bread (check fat content), whole-wheat pasta (check fat content), barley, bulgur, air-popped popcorn (no oil/butter).
- **Starchy vegetables** — potato (no butter/oil), sweet potato, corn, peas.
- **Lean proteins (very low fat)** — egg whites, fat-free Greek yogurt, fat-free cottage cheese, fat-free milk, white fish (cod, tilapia, sole, haddock — baked or steamed), shellfish in modest portions (shrimp), skinless chicken or turkey breast (baked, grilled, no skin), beans and lentils.
- **MCT oil (C8/C10)** — measured per care plan.
- **Beverages** — water, sparkling water, unsweetened tea, black coffee.
- **Seasonings** — herbs, spices, vinegar, lemon, lime, mustard, salsa (check label), low-sodium soy sauce.

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

## Sample day (~ 1800 kcal, ~ 12 g LCT)

`[verify]` against `ref:fcs-brochure` sample meal plan and patient growth/calorie needs.

**Breakfast**
- ¾ cup oatmeal cooked with water
- ½ cup berries
- 1 tbsp fat-free Greek yogurt swirl
- Black coffee or tea

**Snack**
- 1 medium apple
- ½ cup fat-free cottage cheese

**Lunch**
- Bowl: ½ cup brown rice, 4 oz baked cod, 1 cup steamed broccoli, ½ cup black beans, salsa, lime
- 1 tsp MCT oil drizzled on the bowl
- Sparkling water with lemon

**Snack**
- 2 cups air-popped popcorn (no butter/oil)
- 1 small banana

**Dinner**
- 4 oz grilled skinless chicken breast
- 1 medium baked sweet potato (no butter)
- Large mixed-greens salad with vinegar + lemon
- Steamed asparagus

**Dessert**
- ½ cup fat-free yogurt with sliced strawberries

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
  text: Less than 20 g long-chain fat per day, no alcohol, no added sugar, MCT oil for healthy calories.

lct_over_alert:
  key: fcs.alert.lct
  trigger: daily LCT >= 18 g (yellow) or >= 20 g (red)
  text: >
    You're approaching today's long-chain fat limit. The most common silent
    sources are dressing, sauce, cheese, and "healthy" oils — try a swap or
    move the rest of the day toward vegetables and white fish.

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
- ❌ "Try omega-3 fish oil" → ✅ "Standard fish oil isn't useful in FCS — talk to your care team about whether MCT oil makes sense"
- ❌ "Salmon is a good choice" → ✅ "Salmon is too high in fat for FCS — white fish like cod or tilapia is the FCS option"
- ❌ "Avocado is a healthy fat" → ✅ "Healthy fats elsewhere, but too high in fat for FCS"
- ❌ "Just one sip" / "a little won't hurt" → ✅ "FCS doesn't have a safe alcohol amount"
- ❌ "Diet" framed as "what you can't have" → ✅ "Plate" framed as "what's on it"

---

## Citations footer (shown on the profile page)

> This guidance is based on the FCS Foundation patient education materials, the FCS Action nutritional brochure, dietary guidance for FCS (Familial Chylomicronemia Syndrome), and clinical consensus on long-chain-fat restriction with MCT supplementation. It is general education, not medical advice. FCS care belongs with a lipidologist and a registered dietitian who knows the condition — please don't make changes to your medication or fat-gram target without them.
