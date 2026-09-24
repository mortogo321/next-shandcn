import { describe, expect, it } from "vitest";
import { getUserFromCookie } from "@/lib/auth";

function b64(obj: unknown): string {
  return Buffer.from(JSON.stringify(obj), "utf-8").toString("base64");
}

describe("getUserFromCookie", () => {
  it("returns null for missing cookie", () => {
    expect(getUserFromCookie(undefined)).toBeNull();
  });

  it("returns null for malformed cookie", () => {
    expect(getUserFromCookie("not-a-jwt")).toBeNull();
    expect(getUserFromCookie("a.b.c")).toBeNull();
  });

  it("parses a JWT-style payload", () => {
    const user = { id: "1", email: "admin@example.com", role: "admin" };
    const cookie = `header.${b64(user)}.sig`;
    expect(getUserFromCookie(cookie)).toEqual(user);
  });

  it("returns null when payload segment is missing", () => {
    expect(getUserFromCookie("onlyone")).toBeNull();
  });
});
