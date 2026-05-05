import type { ReactNode } from "react";
import type { ProfileContent } from "@/content/profiles/types";
import FoodLists from "./FoodLists";
import EducationCards from "./EducationCards";
import CareTeam from "./CareTeam";
import CitationsFooter from "./CitationsFooter";

interface ProfilePageProps {
  profile: ProfileContent;
  children?: ReactNode;
}

export default function ProfilePage({ profile, children }: ProfilePageProps) {
  return (
    <article>
      <section className="bg-parchment-50">
        <div className="container-prose pt-24 pb-12 md:pt-32 md:pb-16">
          <p className="font-serif text-xl uppercase tracking-widest text-terracotta-deep">
            Profile
          </p>
          <h1 className="mt-4">{profile.label}</h1>
          <p className="mt-2 text-sm uppercase tracking-wider text-ink-soft">
            {profile.clinicalName}
          </p>
          <p className="mt-6 text-lg italic text-ink">{profile.oneLiner}</p>
          <p className="mt-6 text-base text-ink-soft">{profile.intro}</p>
        </div>
      </section>

      {children}

      <FoodLists foods={profile.foods} />
      <EducationCards cards={profile.cards} />
      <CareTeam items={profile.careTeam} />
      <CitationsFooter text={profile.citations} />
    </article>
  );
}
