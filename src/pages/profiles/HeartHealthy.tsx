import ProfilePage from "@/components/profile/ProfilePage";
import { profiles } from "@/content/profiles";

export default function HeartHealthy() {
  return <ProfilePage profile={profiles.general} />;
}
