import { SessionUser } from "@/types/user";
import { cookies } from "next/headers";

export function getUserFromCookie(cookie: string | undefined): SessionUser | null {
  if (!cookie) return null;

  try {
    const parts = cookie.split(".");
    const payloadSegment = parts[1];
    if (!payloadSegment) return null;
    const payload: unknown = JSON.parse(atob(payloadSegment));

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
