import { SessionUser } from "@/types/user";
import { cookies } from "next/headers";

export function getUserFromCookie(cookie: string | undefined): SessionUser | null {
  if (!cookie) return null;

  try {
    const payload = JSON.parse(atob(cookie.split(".")[1]));

    return payload as SessionUser;
  } catch {
    return null;
  }
}

export async function getServerUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  return getUserFromCookie(cookie);
}
