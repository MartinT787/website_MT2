import type { ProfileContent } from "./types";

export const fh: ProfileContent = {
  id: "fh",
  slug: "cholesterol",
  label: "Cholesterol-Lowering Helper",
  clinicalName:
    "Familial hypercholesterolemia (FH) and high-LDL nutrition support",
  oneLiner:
    "Less saturated fat. Less dietary cholesterol. More fiber. Plant sterols. A handful of nuts.",
  intro:
    "Cholesterol-Lowering Helper is built for people whose LDL stays high even on a regular heart-healthy diet — most often because of familial hypercholesterolemia (FH). It's not about eating less; it's about pulling specific levers that lower LDL. For most people with FH, diet works alongside medication, not instead of it.",
  foods: {
    eat: [
      "Oats — a bowl most days. Oats lower LDL.",
      "Beans and lentils — every other day or more.",
      "Barley as a substitute for rice.",
      "Vegetables — half the plate.",
      "Whole fruit — apples, pears, oranges, berries.",
      "Almonds, walnuts — about a handful a day, unsalted.",
      "Olive oil for cooking and dressing.",
      "Fish — salmon, sardines, trout, cod. Twice a week.",
      "Skinless chicken or turkey.",
      "Tofu, tempeh, edamame, plain unsweetened soy milk.",
      "Skim or 1 % milk, plain low-fat yogurt.",
      "Plant-sterol-fortified products (some spreads, certain orange juices) — talk to your dietitian.",
    ],
    mindful: [
      "Egg yolks — twice a week is plenty. Egg whites unrestricted.",
      "Shrimp and shellfish — once a week.",
      "Lean red meat — once a week, palm-size portion.",
    ],
    avoid: [
      "Butter, ghee, lard — replace with olive oil for cooking.",
      "Coconut oil, palm oil, palm-kernel oil — these are saturated fats, not the healthy kind.",
      "Full-fat dairy — whole milk, butter, cream, cream cheese.",
      "Cheese — minimize, even part-skim.",
      "Pastries, croissants, biscuits — almost always made with butter or palm shortening.",
      "Cream-based sauces and gravies.",
      "Processed meats — bacon, sausage, hot dogs.",
      "Coconut creamers and ice creams.",
      "Sugary drinks.",
    ],
  },
  cards: [
    {
      title: "What is FH?",
      body: "Familial hypercholesterolemia is a genetic condition (about 1 in 250) where the body can't clear LDL cholesterol well. Diet and medication together work — diet alone usually isn't enough.",
    },
    {
      title: "The single biggest food lever",
      body: "Saturated fat. The fat in butter, cheese, fatty meat, palm oil, and coconut oil. Swapping olive oil for butter and fish for steak is most of the work.",
    },
    {
      title: "Plant sterols, in plain language",
      body: "Plant sterols are natural compounds that block some cholesterol absorption. They're added to certain spreads, juices, and supplements. Talk to your dietitian about whether they fit your plan.",
    },
    {
      title: "Statins and food",
      body: "Diet typically lowers LDL by 5 to 15 percent on top of your medication. If your doctor has prescribed a statin, keep taking it.",
    },
    {
      title: "FH runs in families",
      body: "If you have FH, your parents, siblings, and children should all get a lipid panel. Kids as young as 2 can be screened.",
    },
  ],
  careTeam: [
    "Your LDL hasn't dropped at all after 3 months of consistent changes.",
    "You're considering stopping a statin because of cost or side effects.",
    "You're pregnant, planning pregnancy, or breastfeeding — most lipid medications need to be paused.",
    "You have new chest pain, shortness of breath, or pain in your calves or thighs.",
    "A first-degree relative was just diagnosed with FH — get yourself and your kids screened.",
  ],
  citations:
    "Based on the National Lipid Association's Recommendations for Patient-Centered Management of Dyslipidemia (2014-2015), the NLA Expert Panel on Familial Hypercholesterolemia (2011), the 2018 ACC/AHA/Multisociety Cholesterol Guideline, and the NHLBI Expert Panel on Integrated Guidelines for Cardiovascular Health and Risk Reduction in Children and Adolescents (2011). Diet does not replace medication for FH.",
};
