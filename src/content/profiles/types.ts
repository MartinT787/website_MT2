export type ProfileId = "general" | "fh" | "htg" | "fcs";

export interface FoodList {
  eat: string[];
  mindful: string[];
  avoid: string[];
}

export interface EducationCard {
  title: string;
  body: string;
}

export interface ProfileContent {
  id: ProfileId;
  slug: string;
  label: string;
  clinicalName: string;
  oneLiner: string;
  intro: string;
  foods: FoodList;
  cards: EducationCard[];
  careTeam: string[];
  citations: string;
}
