import { getServerUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function UserDashboard() {
  const user = await getServerUser();

  if (!user || user.role !== "user") {
    redirect("/login");
  }

  return <div>Welcome User</div>;
}
