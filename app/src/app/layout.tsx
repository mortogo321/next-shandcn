import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Next.js Admin Dashboard",
  description: "Next.js admin dashboard starter — shadcn/ui, NextAuth, role-based layouts",
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
