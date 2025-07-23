export type UserRole = "admin" | "tenant" | "user";

export interface SessionUser {
  id: string;
  email: string;
  role: UserRole;
}
