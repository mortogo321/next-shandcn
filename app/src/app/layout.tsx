import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Welcome to Lokblok",
  description: "Enterprise-grade zero trust platform with phantom secrets, non-custodial key management, and certified hardware tokens for ultimate security",
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
