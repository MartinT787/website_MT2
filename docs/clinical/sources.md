# Clinical sources

This document catalogues every reference that informs the Lipid Nutrition Hub's clinical content. Every numeric claim, food list, and microcopy block in `docs/clinical/*.md` should trace back to a citation here.

When a future change touches clinical guidance, update both the relevant profile file and this list.

---

## How citations work in this project

- **In-file citations** use a short tag: `[ref:fcs-brochure]`, `[ref:nla-2019]`, `[ref:ucsf-adult]`.
- **Tags resolve** to the entries below.
- **External standard guidelines** (AHA, NLA, NHLBI, ACC) are cited by title + year + issuing body. We don't link to external URLs in patient-facing copy by default; we cite them in the "About this guidance" footer of each profile page.
- **Project reference files** live in `references/` and are committed to git for traceability. They are **not** shipped to the production site.

---

## Project reference files

### Pediatric & general dyslipidemia

| Tag | File | Notes |
|---|---|---|
| `ref:nhlbi-2011` | `references/nutrition_documents/Pediatric Dyslipidemia Guidelines 2019.pdf` | NHLBI Expert Panel integrated CV health guidelines (2011, with 2019 supplements). Source of CHILD-1 / CHILD-2-LDL / CHILD-2-TG dietary tiers. |
| `ref:aap-2020` | `references/nutrition_documents/APA Hyperlipidemia 2020.pdf` | American Academy of Pediatrics clinical report on pediatric dyslipidemia. |
| `ref:nutrition-youth` | `references/nutrition_documents/Nutrition for Dyslipidemia in Youth Guideline.pdf` | Practical youth-focused nutrition guide. Source of pediatric food lists and serving sizes. |
| `ref:dyslip-youth-doc` | `references/nutrition_documents/Dyslipidemia in Youth.docx` | Supplementary youth notes. |
| `ref:uptodate-peds-dx` | `references/nutrition_documents/Dyslipidemia in children and adolescents: Definition, screening, and diagnosis - UpToDate.pdf` | UpToDate reference for pediatric thresholds and screening. |
| `ref:uptodate-peds-mgmt` | `references/nutrition_documents/Dyslipidemia in children and adolescents: Management - UpToDate.pdf` | UpToDate reference for pediatric management including diet tiers. |

### Adult lipid management

| Tag | File | Notes |
|---|---|---|
| `ref:ucsf-adult` | `references/nutrition_documents/Diet for Dyslipidemia - Adults 2023.pdf` | UCSF adult dyslipidemia diet handout. Source of adult Eat/Be Mindful/Avoid food categorization and portion guidance. |
| `ref:patient-handout` | `references/nutrition_documents/Cholesterol and Triglycerides ENG (1).pdf` | Patient-facing handout. Source of plain-language phrasing for adult education. |
| `ref:aha-essential8` | `references/nutrition_documents/Healthy 8.pdf` | AHA Life's Essential 8 framework (diet, activity, nicotine, sleep, BMI, lipids, glucose, BP). Source of the general heart-healthy framing. |

### Familial Chylomicronemia Syndrome (FCS)

| Tag | File | Notes |
|---|---|---|
| `ref:fcs-brochure` | `references/FCS/FCS_nutritional_brochure.pdf` | The "FCS Action" nutritional brochure. Source of the FCS Plate, the three-Ps (Preparation, Practice, Positivity), and patient tone. |
| `ref:fcs-info` | `references/FCS/FCS information (1).pdf` | FCS general patient information. |
| `ref:fcs-dietary-guidance` | `references/FCS/Dietary-Guidance-for-FCS.pdf` | Strict dietary guidance for FCS. Source of the <20 g fat/day target. |
| `ref:fcs-fat-grams` | `references/FCS/Fat grams of food items.pdf` | Fat grams per serving for common foods. Source of the FCS allowed/avoid food categorization. |
| `ref:fcs-snacks` | `references/FCS/Less than 3 gm fat snacks (1).docx` | Snack list under 3 g fat per serving. |

### Hypertriglyceridemia (HTG, severe but not FCS)

| Tag | File | Notes |
|---|---|---|
| `ref:htg-15pct` | `references/FCS/Fat 10-15% of total calory diet (1).pdf` | Diet plan limiting fat to 10–15 % of total calories. Used for the most severe HTG tier. |
| `ref:htg-worksheet` | `references/FCS/Practice working sheet_HyperTG Diet at 15 percent dietary kcals (1) (1).doc` | Practice worksheet for the 15 % kcal-from-fat HTG diet. |

### Visual references

| Tag | File | Notes |
|---|---|---|
| `ref:screenshot-1` | `references/nutrition_documents/Screenshot 2026-04-25 at 9.19.49 PM.png` | (Document the source of this screenshot before launch.) |
| `ref:screenshot-2` | `references/nutrition_documents/Screenshot 2026-04-25 at 9.20.01 PM.png` | (Document the source of this screenshot before launch.) |

---

## External standard guidelines

These are not in the repo. They are cited by name in patient-facing "About this guidance" footers.

| Tag | Citation |
|---|---|
| `ext:nla-2014` | National Lipid Association. *Recommendations for Patient-Centered Management of Dyslipidemia*, Part 1 (2014) and Part 2 (2015). |
| `ext:nla-fh-2011` | National Lipid Association Expert Panel on Familial Hypercholesterolemia. *Familial hypercholesterolemias: Prevalence, genetics, diagnosis, and screening recommendations* (2011). |
| `ext:acc-aha-2018` | Grundy SM et al. *2018 ACC/AHA/Multisociety Guideline on the Management of Blood Cholesterol.* |
| `ext:aha-le8-2022` | Lloyd-Jones DM et al. *Life's Essential 8: Updating and Enhancing the AHA's Construct of Cardiovascular Health.* Circulation. 2022. |
| `ext:nhlbi-peds-2011` | NHLBI Expert Panel on Integrated Guidelines for Cardiovascular Health and Risk Reduction in Children and Adolescents (2011). |
| `ext:dga-2020` | U.S. Dietary Guidelines for Americans, 2020–2025. |
| `ext:eas-htg-2014` | Hegele RA et al. *The polygenic nature of hypertriglyceridemia: implications for definition, diagnosis, and management.* Lancet Diabetes Endocrinol. 2014. |
| `ext:fcs-foundation` | FCS Foundation patient education materials and clinical consensus on FCS dietary management. |
| `ext:usda-fdc` | USDA FoodData Central, https://fdc.nal.usda.gov/ . Source of all per-food nutrient values used by the calculators. Cite as "USDA FoodData Central, accessed YYYY-MM-DD" with the FDC ID. |

---

## What to verify before publishing

The clinical files in this directory were drafted from a mix of the project references and standard guideline knowledge. Before the site goes live, a clinician (Martin) should verify:

1. **Every numeric threshold** (LDL cut-offs, TG cut-offs, fat-gram limits, fiber targets, sodium limits, age-adjusted values).
2. **Every food on the Eat / Be Mindful / Avoid lists**, especially brand-name examples.
3. **Every microcopy alert** that triggers off a lab value or nutrient threshold.
4. **The FCS LCT calculation** (Total Fat − C8 − C10 = LCT).
5. **Safety-net language** ("Talk to your care team if…") — these are the highest-risk strings on the site.

Any item flagged with `[verify]` in a profile file is one I (Claude) am not 100 % confident about and is waiting on your sign-off.

---

## How to add a new source

1. Save the file to `references/<category>/`.
2. Add a row to the table above with a stable `ref:` tag.
3. In the profile file(s) that use it, add the tag inline next to the claim it supports.
4. If it changes a numeric threshold or a food categorization, update the corresponding test fixture in `tests/clinical/`.
