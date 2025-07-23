import Sidebar from "@/components/dashboard/sidebar";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  admin: ReactNode;
  tenant: ReactNode;
  user: ReactNode;
  default: ReactNode;
}

export default async function DashboardLayout({ children, admin, tenant, user, default: defaultSlot }: Props) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const session = getUserFromCookie(cookie);

  const slot = session?.role;

  let content = null;

  switch (slot) {
    case "admin":
      content = admin;
      break;
    case "tenant":
      content = tenant;
      break;
    case "user":
      content = user;
      break;
    default:
      content = defaultSlot ?? children;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">{content}</div>
    </div>
  );
}
