import type { ProfileContent } from "./types";

export const general: ProfileContent = {
  id: "general",
  slug: "heart-healthy",
  label: "Heart-Healthy Eating",
  clinicalName: "General cardiovascular nutrition (AHA Life's Essential 8)",
  oneLiner:
    "Eat plants, whole grains, fish, and nuts. Limit added sugar, salt, and processed meat.",
  intro:
    "Heart-Healthy Eating is the foundation everyone benefits from — kids, adults, and anyone who wants to keep their heart in good shape for the long haul. It's based on the Mediterranean-style pattern that decades of research show works.",
  foods: {
    eat: [
      "Vegetables — fresh or frozen, all kinds, no added sauce. Aim for color variety.",
      "Fruit — whole fruit over juice. Berries, apples, pears, citrus, melon.",
      "Whole grains — oats, brown rice, quinoa, whole-wheat bread, popcorn (air-popped).",
      "Beans and lentils.",
      "Fish — salmon, sardines, mackerel, tuna, cod (baked, broiled, grilled). Twice a week.",
      "Skinless chicken or turkey.",
      "Nuts and seeds — about a handful a day, unsalted.",
      "Olive oil, canola oil, avocado oil for cooking.",
      "Skim or 1 % milk, plain low-fat yogurt.",
      "Water, sparkling water, unsweetened tea, black coffee.",
    ],
    mindful: [
      "Lean red meat — once or twice a week, palm-size portion.",
      "Whole eggs — about one a day if other cholesterol is low; egg whites unrestricted.",
      "Cheese — small amounts of part-skim mozzarella, feta, parmesan.",
      "Avocado, olives — heart-healthy but calorie-dense.",
      "100 % fruit juice — small glass; whole fruit is better.",
      "Dark chocolate — a small square as a treat.",
      "Alcohol — less is better than more. None is also a healthy choice.",
    ],
    avoid: [
      "Sugary drinks — soda, sweet tea, sports drinks, energy drinks, sweetened coffee.",
      "Processed and cured meats — bacon, sausage, hot dogs, deli meat.",
      "Fried foods — French fries, fried chicken, donuts.",
      "Full-fat dairy — whole milk, butter, cream, ice cream.",
      "Pastries, croissants, biscuits, most cookies and cakes.",
      "Tropical oils — coconut oil, palm oil.",
      "Trans fats — anything with \"partially hydrogenated oil\" on the label.",
      "Most fast-food meals.",
    ],
  },
  cards: [
    {
      title: "What heart-healthy actually means",
      body: "It's not a diet. It's a pattern: vegetables, fruit, whole grains, beans, fish, nuts, olive oil. The same plate works for kids and adults.",
    },
    {
      title: "The Mediterranean plate",
      body: "Half vegetables and fruit. A quarter whole grains. A quarter lean protein. A small amount of healthy fat on the side.",
    },
    {
      title: "The four numbers on a label",
      body: "When you flip a package over, look for saturated fat, sodium, added sugar, and fiber. Those four tell you most of what you need to know.",
    },
    {
      title: "Easy swaps",
      body: "Water for soda. Olive oil for butter. Salmon for steak. Brown rice for white. Most of the work is in the swaps, not the rules.",
    },
  ],
  careTeam: [
    "Your cholesterol goes up despite eating well for 3 to 6 months.",
    "You're starting or stopping a medication.",
    "You have a family history of early heart disease and haven't had a lipid panel in over a year.",
    "You're pregnant or planning to be — some lipid medications need to be paused.",
  ],
  citations:
    "Based on the AHA's Life's Essential 8 framework (Lloyd-Jones DM et al., Circulation, 2022), the U.S. Dietary Guidelines for Americans 2020-2025, and the NHLBI Expert Panel on Integrated Guidelines for Cardiovascular Health and Risk Reduction in Children and Adolescents (2011).",
};
