// FCS clinical rules and constants.
// Sourced from Williams et al. 2018 (J Clin Lipidol) — the NLA-published FCS
// dietary guideline — and Goldberg & Chait 2020 (Front Endocrinol).

export const CLINICAL_RULES_VERSION = 1;

// Williams 2018: limit fat to <15-20 g per day (<10-15% of total daily energy).
// We surface 20 g as the upper bound for the v1 day tally; the warning band
// starts at 15 g.
export const FCS_FAT_CEILING_G_PER_DAY = 20;
export const FCS_FAT_WARNING_G_PER_DAY = 15;

export type FatStatus = "ok" | "warning" | "over";

export function fatStatus(totalFatGrams: number): FatStatus {
  if (totalFatGrams >= FCS_FAT_CEILING_G_PER_DAY) return "over";
  if (totalFatGrams >= FCS_FAT_WARNING_G_PER_DAY) return "warning";
  return "ok";
}
