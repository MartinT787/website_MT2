import { general } from "./general";
import { fh } from "./fh";
import { htg } from "./htg";
import { fcs } from "./fcs";
import type { ProfileContent, ProfileId } from "./types";

export const profiles: Record<ProfileId, ProfileContent> = {
  general,
  fh,
  htg,
  fcs,
};

export const profileList: ProfileContent[] = [general, fh, htg, fcs];

export type { ProfileContent, ProfileId } from "./types";
