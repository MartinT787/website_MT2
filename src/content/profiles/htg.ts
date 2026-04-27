import type { ProfileContent } from "./types";

export const htg: ProfileContent = {
  id: "htg",
  slug: "triglyceride",
  label: "Triglyceride Calmer",
  clinicalName:
    "Severe hypertriglyceridemia (HTG) and multifactorial chylomicronemia syndrome (MFCS)",
  oneLiner:
    "No sugary drinks. No alcohol. Less added sugar and refined carbs. More fish and fiber.",
  intro:
    "Triglyceride Calmer is for people whose triglycerides are above 500 — a level that raises the risk of pancreatitis. The goal is to bring TG well below 500. The food levers that work fastest are cutting sugary drinks, cutting alcohol, and pulling back on refined carbs.",
  foods: {
    eat: [
      "Vegetables — half the plate, every meal.",
      "Whole fruit (not juice) — berries, apples, citrus, melon.",
      "Whole grains — oats, quinoa, barley, brown rice, whole-wheat bread.",
      "Beans, lentils, chickpeas.",
      "Lean white fish — cod, tilapia, sole, halibut.",
      "Oily fish for omega-3 — salmon, sardines, mackerel, trout. Twice a week.",
      "Skinless chicken or turkey, baked or grilled.",
      "Tofu, tempeh, edamame.",
      "Egg whites — unrestricted.",
      "Nonfat or 1 % milk, plain low-fat yogurt (no added sugar).",
      "Water, sparkling water, unsweetened tea, black coffee.",
    ],
    mindful: [
      "Whole eggs — a few a week.",
      "Lean red meat — once or twice a week, palm-size portion.",
      "Cheese — small amounts of part-skim.",
      "Nuts and seeds — a small handful, not a bowlful.",
      "Avocado — a quarter of one.",
      "Olive oil — measured, not splashed.",
      "Higher-sugar fruits — grapes, mango, pineapple, dried fruit. One serving.",
      "Starchy vegetables — potatoes, corn, peas. Modest portions.",
    ],
    avoid: [
      "Sugary drinks — soda, sweet tea, sports drinks, energy drinks, sweetened coffee, juice (even 100 %). The largest single TG driver for most people.",
      "Alcohol — none while triglycerides are above 500.",
      "Desserts and candy — cake, cookies, ice cream, pastries.",
      "Sugary cereals; granola with honey or agave.",
      "Honey, agave, maple syrup, table sugar — all behave the same way.",
      "Processed and cured meats — bacon, sausage, hot dogs.",
      "Fried foods — French fries, fried chicken, fried fish.",
      "Full-fat dairy — whole milk, butter, cream, ice cream.",
      "Coconut oil, palm oil, coconut milk.",
      "Pastries, croissants, biscuits, donuts.",
      "Most fast-food meals.",
    ],
  },
  cards: [
    {
      title: "Most cases of severe high triglycerides are preventable",
      body: "If your TG was elevated before you started a new medication or before a new condition (like diabetes or kidney disease), make sure your doctor knows. Switching one medication or controlling one condition is sometimes the whole fix.",
    },
    {
      title: "Why high triglycerides matter",
      body: "Triglycerides above 500 raise the risk of pancreatitis — a serious inflammation of the pancreas that often requires hospitalization. Above 1000, the risk goes up sharply.",
    },
    {
      title: "Sugar is the biggest food lever",
      body: "Cutting sweetened drinks is the single most effective change for most people with high triglycerides. Hidden sugar in flavored yogurt, sauces, granola, and \"healthy\" smoothies is next.",
    },
    {
      title: "Why alcohol hits triglycerides so hard",
      body: "Even small amounts of alcohol can cause large, fast spikes in triglycerides. With TG above 500 there isn't a safe amount.",
    },
    {
      title: "The diet adjusts with your numbers",
      body: "While TG is above 1000, the diet is very strict on fat. Once it drops below 1000, your dietitian will help you liberalize it. The diet is staged, not fixed for life.",
    },
    {
      title: "Medications that can raise your triglycerides",
      body: "Thiazide diuretics, non-selective beta blockers, oral estrogens, corticosteroids, certain HIV medications, immunosuppressants, atypical antipsychotics, antidepressants, and isotretinoin can all raise TG. Mention this list when a new prescription comes up — don't stop anything on your own.",
    },
  ],
  careTeam: [
    "Sudden severe pain in the upper belly that wraps to the back, especially after a big meal or alcohol.",
    "Persistent nausea or vomiting.",
    "A fever along with belly pain.",
    "Your TG hasn't dropped after 4 to 6 weeks of consistent changes.",
    "You're starting a new medication (some raise TG).",
    "You're pregnant or planning pregnancy — TG often rises in the third trimester.",
    "You're considering bariatric surgery, GLP-1 medication, or a fibrate.",
  ],
  citations:
    "Based on Goldberg RB & Chait A, A Comprehensive Update on the Chylomicronemia Syndrome (Frontiers in Endocrinology, 2020), the National Lipid Association's Recommendations for Patient-Centered Management of Dyslipidemia (2014-2015), Hegele et al. (Lancet Diabetes Endocrinol, 2014), and the NHLBI Expert Panel on Integrated Guidelines (2011).",
};
