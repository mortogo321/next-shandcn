import { getServerUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const user = await getServerUser();

  if (!user || user.role !== "admin") {
    redirect("/login");
  }

  return <div>Welcome Admin</div>;
}
