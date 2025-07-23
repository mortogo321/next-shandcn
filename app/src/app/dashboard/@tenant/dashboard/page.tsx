import { getServerUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function TenantDashboard() {
  const user = await getServerUser();

  if (!user || user.role !== "tenant") {
    redirect("/login");
  }

  return <div>Welcome Tenant</div>;
}
