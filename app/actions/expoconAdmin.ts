"use server";

import { cookies } from "next/headers";
import { checkPassword, expectedCookieValue, EXPOCON_COOKIE } from "@/lib/expoconAuth";

export async function loginExpoconAdmin(
  password: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!checkPassword(password)) {
    return { ok: false, error: "Contraseña incorrecta" };
  }
  const store = await cookies();
  store.set(EXPOCON_COOKIE, expectedCookieValue()!, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 12,
    path: "/expocon-2026",
  });
  return { ok: true };
}

export async function logoutExpoconAdmin() {
  const store = await cookies();
  store.delete({ name: EXPOCON_COOKIE, path: "/expocon-2026" });
}
