# Profile: Heart-Healthy Eating

**Patient-facing label:** Heart-Healthy Eating
**Clinical name:** General cardiovascular nutrition (AHA Life's Essential 8 framework)
**Internal ID:** `general`

---

## Who this profile is for

The default starting profile for visitors who:

- Have **no diagnosis** but want to eat for long-term heart health, **or**
- Have **mildly elevated** lipids that don't yet meet treatment thresholds, **or**
- Are a **family member** of someone with a lipid condition and want to eat alongside them.

This profile is the **fallback** when nothing more specific applies. It's also the **floor** that all other profiles build on: Cholesterol-Lowering Helper, Triglyceride Calmer, and FCS each take this profile and tighten specific levers.

### Lab thresholds for this profile

A user lands on this profile (rather than a more specific one) when **all** of the following are true:

| Lab | Adult cut-off | Pediatric cut-off (ages 2–19) |
|---|---|---|
| LDL-C | < 130 mg/dL | < 130 mg/dL |
| Total cholesterol | < 200 mg/dL | < 200 mg/dL |
| Triglycerides (fasting) | < 200 mg/dL | < 130 mg/dL |
| HDL-C | ≥ 40 (men) / ≥ 50 (women) | ≥ 40 mg/dL |
| Non-HDL-C | < 160 mg/dL | < 145 mg/dL |

If any value crosses into the elevated range, the routing logic should **suggest** a more specific profile but not force it. Cite `[ref:nhlbi-2011]`, `[ref:aap-2020]`, `[ref:uptodate-peds-dx]`.

---

## The framework: AHA Life's Essential 8 [`ref:aha-essential8`, `ext:aha-le8-2022`]

This profile uses Life's Essential 8 as its scaffolding. The food guidance below maps to component #1 (Diet). The other seven (physical activity, nicotine exposure, sleep, BMI, lipids, blood glucose, blood pressure) are mentioned in the patient-facing copy but are not what this site primarily addresses.

The dietary pattern is **Mediterranean-style with DASH overlap** — vegetables, fruits, whole grains, legumes, nuts, fish, olive oil, low-fat dairy, limited red meat, very limited processed food.

---

## Daily nutrient targets

> **Patient-facing rule:** these numbers are the **clinical spec**, not the UI copy. The site does not show a parent "limit sodium to 2300 mg/day" — it shows "most sodium hides in packaged food and bread, those are the ones to pull back on." See the **Patient-facing translations** section below for the food-language version of every target. Numbers live here for the future calculator and for clinician reference.

### Adult (≥ 20 years)

| Nutrient | Target | Source |
|---|---|---|
| Total fat | 25–35 % of total calories | `ref:ucsf-adult`, `ext:dga-2020` |
| Saturated fat | < 10 % of total calories | `ext:dga-2020` |
| Trans fat | As low as possible (effectively 0 g) | `ext:aha-le8-2022` |
| Dietary cholesterol | < 300 mg/day | `ref:ucsf-adult` |
| Total fiber | ≥ 25 g (women) / ≥ 38 g (men); or 14 g per 1000 kcal | `ext:dga-2020` |
| Sodium | < 2300 mg/day; ideally < 1500 mg/day | `ext:dga-2020`, `ext:aha-le8-2022` |
| Added sugars | < 10 % of total calories; AHA: < 25 g (women), < 36 g (men) | `ext:aha-le8-2022` |
| Fruits + vegetables | ≥ 5 servings/day (≥ 4½ cups) | `ext:aha-le8-2022` |
| Whole grains | ≥ 3 servings/day | `ext:aha-le8-2022` |
| Fish (preferably oily) | ≥ 2 servings/week | `ext:aha-le8-2022` |
| Nuts/legumes | ≥ 4 servings/week | `ext:aha-le8-2022` |
| Alcohol | ≤ 1 drink/day (women), ≤ 2 (men); none is also a healthy choice | `ext:dga-2020` |

### Pediatric (ages 2–19)

| Nutrient | Target | Source |
|---|---|---|
| Total fat | 25–30 % of total calories (after age 2) | `ref:nutrition-youth`, `ref:nhlbi-2011` |
| Saturated fat | 8–10 % of total calories | `ref:nhlbi-2011` |
| Trans fat | Avoid | `ref:nhlbi-2011` |
| Dietary cholesterol | < 300 mg/day | `ref:nhlbi-2011` |
| Total fiber (g/day) | "Age + 5" rule, up to age + 10 (e.g., 9-yr-old: 14–19 g) | `ref:nutrition-youth` |
| Sodium | Age-graded; < 1500 mg (4–8 yr), < 1800 (9–13), < 2300 (14+) | `ext:dga-2020` |
| Added sugars | < 25 g/day (kids 2–18); avoid sugary drinks | AHA pediatric guidance |
| Fruits + vegetables | ≥ 5 servings/day | `ref:nhlbi-2011` |
| Sugary drinks | None or rare; water and milk are the default beverages | `ref:nutrition-youth` |

---

## Patient-facing translations

The table above is for the spec; this is what the UI actually says. When a clinical target maps to a food-language equivalent, use the right-hand column. **The numbers from the table above never appear on patient-facing pages in v1.**

| Clinical target | What the site actually says |
|---|---|
| Sat fat < 10 % of calories | "Less butter, fatty meat, and full-fat dairy. More olive oil, fish, and nuts." |
| Trans fat avoid | "Skip anything with 'partially hydrogenated oil' on the label." |
| Cholesterol < 300 mg/day | "Egg yolks once or twice a week is plenty. Egg whites are unrestricted." |
| Sodium < 2300 mg/day | "Most sodium hides in packaged food, bread, fast food, and restaurant meals — not the salt shaker." |
| Added sugar < 10 % cal (women < 25 g, men < 36 g, kids < 25 g) | "Skip sugary drinks. A flavored yogurt, a granola bar, or a single cookie can add a day's worth of sugar fast — that's the place to look first." |
| Fiber 25–38 g/day | "Most days, eat oats, beans, fruit with the skin, and a vegetable at every meal — that's enough." |
| Fruits + vegetables ≥ 5 servings/day | "Half your plate, every meal." |
| Fish ≥ 2 servings/week | "Two fish dinners a week — salmon, sardines, tuna, or trout." |
| Alcohol ≤ 1/day women, ≤ 2/day men | "If you drink, less is better than more. None is also a healthy choice." |

---

## Foods table (traffic light)

The website surfaces this as three columns: **Eat freely** (green), **Be mindful of portions** (amber), **Limit** (rust). On the food-search page each USDA item is mapped into one of these buckets via the rules in `lib/clinical/general.ts`.

### 🟢 Eat freely

- **Vegetables** — all kinds, fresh or frozen, with no added sauce or fat. Aim for color variety.
- **Fruits** — whole fruit preferred over juice. Berries, apples, pears, citrus, melon, stone fruit.
- **Whole grains** — oats (steel-cut or rolled), brown rice, quinoa, barley, bulgur, whole-wheat bread/pasta, popcorn (air-popped, no butter).
- **Legumes** — beans (black, kidney, pinto, garbanzo), lentils, split peas, edamame.
- **Fish** — salmon, sardines, mackerel, trout, tuna, cod (baked, broiled, grilled). 2× / week minimum.
- **Poultry** — skinless chicken or turkey breast.
- **Nuts and seeds** — almonds, walnuts, pistachios, pecans, chia, flax, pumpkin seeds. ~1 oz / day. Unsalted.
- **Healthy oils** — extra-virgin olive oil, canola oil, avocado oil. Use for cooking and salads.
- **Low-fat dairy** — skim or 1 % milk, plain low-fat yogurt, low-fat cottage cheese.
- **Plant-based proteins** — tofu, tempeh, edamame.
- **Beverages** — water, sparkling water, unsweetened tea, black coffee.

### 🟡 Be mindful of portions

- **Lean red meat** — sirloin, tenderloin, 90 % + lean ground beef. ≤ 1–2 servings/week, 3 oz portion.
- **Whole eggs** — up to 1/day if other dietary cholesterol is low. Egg whites unrestricted.
- **Cheese** — small amounts of part-skim mozzarella, feta, parmesan. ≤ 1 oz/day.
- **Avocado, olives** — heart-healthy but calorie-dense. ¼ avocado = 1 serving.
- **Refined grains** — white pasta, white rice, white bread. Replace where you can.
- **100 % fruit juice** — ≤ 4 oz/day for adults, ≤ 4 oz/day for kids ≥ 1 yr (AAP). Whole fruit is better.
- **Dark chocolate** — ≥ 70 % cacao. 1 small square as a treat.
- **Coffee with cream/sugar** — small amounts.
- **Alcohol** — see adult target row above.

### 🔴 Limit

- **Processed and cured meats** — bacon, sausage, hot dogs, deli meat, salami, pepperoni.
- **Fried foods** — French fries, fried chicken, donuts, fried fish.
- **Full-fat dairy** — whole milk, butter, cream, cream cheese, ice cream.
- **Baked goods made with butter, lard, or palm/coconut oil** — pastries, croissants, biscuits, most cookies and cakes.
- **Sugary drinks** — soda, sweet tea, sports drinks, energy drinks, sweetened coffee drinks, lemonade. (Hardest single change for most pediatric patients.)
- **Tropical oils** — coconut oil, palm oil, palm-kernel oil.
- **Trans fats** — anything with "partially hydrogenated oil" on the label. Mostly gone from the US food supply but still in some imports and shortenings.
- **Salty snacks** — chips, salted crackers, salted nuts, pretzels.
- **Fast food meals** — most are simultaneously high in saturated fat, sodium, and added sugar.

---

## Microcopy library

Strings are referenced by `key` from the React components. Keep them short, plain, and warm. There is **no day-tracker on this profile in v1**, so these are static education / tooltip strings — not numerically triggered alerts.

```yaml
profile_intro:
  key: general.intro
  text: >
    Heart-Healthy Eating is the foundation everyone benefits from — kids,
    adults, and anyone who wants to keep their heart in good shape for the
    long haul. It's based on the Mediterranean-style pattern that decades of
    research show works.

profile_summary_one_line:
  key: general.summary
  text: Eat plants, whole grains, fish, and nuts. Limit added sugar, salt, and processed meat.

eat_more_card:
  key: general.eatmore.title
  text: Eat more of these
  body: Vegetables, fruit, beans, whole grains, fish, nuts, and olive oil.

limit_card:
  key: general.limit.title
  text: Limit these
  body: Sugary drinks, processed meat, fried food, butter, and full-fat dairy.

sugar_education:
  key: general.edu.sugar
  text: >
    The biggest single source of added sugar for most people is sweetened
    drinks — soda, sweet tea, juice, sports drinks, sweetened coffee. A
    flavored yogurt, granola bar, or single cookie can add a day's worth of
    sugar fast.

sodium_education:
  key: general.edu.sodium
  text: >
    Most sodium hides in packaged food, bread, fast food, and restaurant
    meals — not the salt shaker. Cooking at home is the easiest way to pull
    it back without thinking about numbers.

fiber_education:
  key: general.edu.fiber
  text: >
    A bowl of oats, a serving of beans, an apple with the skin — that's most
    of a day's fiber right there. Fiber is one of the few things the typical
    American diet is short on.

fish_nudge:
  key: general.edu.fish
  text: >
    Two fish meals a week — salmon, sardines, tuna, or trout — give you
    omega-3 fats that the rest of your diet can't easily replace.
```

---

## Educational cards

Short, illustrated cards on the profile homepage. Each is ~80 words.

1. **What "heart-healthy" really means** — a one-paragraph plain-language overview of why this pattern lowers risk.
2. **The Mediterranean plate** — a visual of the plate composition (½ veg & fruit, ¼ whole grain, ¼ lean protein, side of healthy fat).
3. **Reading a nutrition label for the heart** — the four numbers to look at first: saturated fat, sodium, added sugar, fiber.
4. **Easy swaps** — water for soda, olive oil for butter, brown rice for white, salmon for steak, etc.
5. **Eating out** — three rules: ask for sauces on the side, choose grilled/baked over fried, share a dessert.
6. **For families** — kids learn what they see; the same plate works for everyone over age 2.

---

## When to talk to your care team

Show this card on every page in this profile. The exact text:

> **Talk to your doctor if:**
> - Your cholesterol numbers go up despite eating well for 3–6 months.
> - You're starting or stopping a medication.
> - You have a family history of early heart disease and haven't had a lipid panel in over a year.
> - You're pregnant or planning to be — some lipid medications need to be paused.

---

## Do-not-say list

Wording that should **not** appear in patient-facing copy on this profile:

- ❌ "low-fat diet" → ✅ "Mediterranean-style eating" (we want healthy fats in)
- ❌ "bad cholesterol" → ✅ "LDL cholesterol" (avoid moralizing)
- ❌ "cheat day" → ✅ "treat" or "occasional indulgence"
- ❌ "diet" used as a verb → ✅ "eating pattern" or "the way you eat"
- ❌ "you should" / "you must" → ✅ "you can try" / "many people find that"

---

## Citations footer (shown on the profile page)

> This guidance is based on the American Heart Association's Life's Essential 8 framework (Lloyd-Jones DM et al., *Circulation*, 2022), the U.S. Dietary Guidelines for Americans 2020–2025, and the NHLBI Expert Panel on Integrated Guidelines for Cardiovascular Health and Risk Reduction in Children and Adolescents (2011). Pediatric content also draws on American Academy of Pediatrics guidance (2020). It is general education, not medical advice — talk to your care team about choices for your specific situation.
