import { general } from "./general";
import { fh } from "./fh";
import { htg } from "./htg";
import type { ProfileContent, ProfileId } from "./types";

export const profiles: Record<ProfileId, ProfileContent> = {
  general,
  fh,
  htg,
};

export const profileList: ProfileContent[] = [general, fh, htg];

export type { ProfileContent, ProfileId } from "./types";
