"use client";

import { useRouter } from "next/navigation";
import { logoutExpoconAdmin } from "@/app/actions/expoconAdmin";

export default function ExpoconAdminLogout() {
  const router = useRouter();

  async function handleLogout() {
    await logoutExpoconAdmin();
    router.refresh();
  }

  return (
    <button type="button" className="btn btn--ghost" onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
}
