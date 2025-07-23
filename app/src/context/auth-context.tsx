"use client";

import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext } from "react";

interface Props {
  children: ReactNode;
}

type AuthContextType = Session["user"] | null;

const AuthContext = createContext<AuthContextType>(null);

export function AuthProvider({ children }: Props) {
  const { data: session } = useSession();

  return <AuthContext.Provider value={session?.user ?? null}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
