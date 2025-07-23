import { getUserFromCookie } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(jpg|jpeg|png|svg|webp|gif|ico|css|js|woff2?|ttf|map)$/;
const INTERNAL_PATHS = ["/_next/image", "/_next/static", "/_next/font", "/favicon.ico", "/api"];
const WHITELIST_PATHS = process.env.NEXT_PUBLIC_WHITELIST_PATHS?.split(",") || ["/"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (INTERNAL_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  if (WHITELIST_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get("session")?.value;
  const user = getUserFromCookie(cookie);

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/dashboard") {
    return NextResponse.redirect(new URL(`/dashboard/(${user.role})`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
