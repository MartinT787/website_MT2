import ProfilePage from "@/components/profile/ProfilePage";
import { profiles } from "@/content/profiles";
import FoodFatLookup from "@/components/fcs/FoodFatLookup";

export default function FCS() {
  return (
    <ProfilePage profile={profiles.fcs}>
      <section className="container-wide py-12">
        <FoodFatLookup />
      </section>
    </ProfilePage>
  );
}
