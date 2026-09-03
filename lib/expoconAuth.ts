import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const EXPOCON_COOKIE = "expocon_admin";

function hash(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function expectedCookieValue() {
  const password = process.env.EXPOCON_ADMIN_PASSWORD;
  if (!password) return null;
  return hash(password);
}

export function checkPassword(password: string) {
  const expected = process.env.EXPOCON_ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(hash(password));
  const b = Buffer.from(hash(expected));
  return timingSafeEqual(a, b);
}

export async function isExpoconAdmin() {
  const expected = expectedCookieValue();
  if (!expected) return false;
  const store = await cookies();
  const value = store.get(EXPOCON_COOKIE)?.value;
  if (!value) return false;
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
