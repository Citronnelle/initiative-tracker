import ProfileDetails from "@/app/profile/profile-details";
import EncounterList from "@/app/profile/encounter-list";
import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <p className="text-center mt-20">
        You need to be logged in to view this page.
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-12">
      <ProfileDetails user={user} />
      <EncounterList userId={user.id} />
    </div>
  );
}