"use server";

import { getSql } from "@/lib/db";

export type ExpoconLeadInput = {
  nombreApellido: string;
  edad: string;
  email: string;
  telefono: string;
  situacion: "" | "estudia" | "trabaja";
  cargo: string;
  empresaOrganizacion: string;
};

export type ExpoconLeadResult = { ok: true } | { ok: false; error: string };

export async function submitExpoconLead(
  input: ExpoconLeadInput
): Promise<ExpoconLeadResult> {
  if (input.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    return { ok: false, error: "El correo no es válido" };
  }

  let edad: number | null = null;
  if (input.edad.trim()) {
    const parsed = Number(input.edad);
    if (!Number.isInteger(parsed) || parsed < 0 || parsed > 120) {
      return { ok: false, error: "La edad no es válida" };
    }
    edad = parsed;
  }

  const isEmpty =
    !input.nombreApellido.trim() &&
    edad === null &&
    !input.email.trim() &&
    !input.telefono.trim() &&
    !input.situacion &&
    !input.empresaOrganizacion.trim();
  if (isEmpty) {
    return { ok: false, error: "Completá al menos un dato antes de enviar" };
  }

  try {
    const sql = getSql();
    await sql`
      INSERT INTO expocon_2026_leads
        (nombre_apellido, edad, email, telefono, situacion, cargo, empresa_organizacion)
      VALUES (
        ${input.nombreApellido.trim() || null},
        ${edad},
        ${input.email.trim() || null},
        ${input.telefono.trim() || null},
        ${input.situacion || null},
        ${input.situacion === "trabaja" ? input.cargo.trim() || null : null},
        ${input.empresaOrganizacion.trim() || null}
      )
    `;
    return { ok: true };
  } catch (err) {
    console.error("[expocon] Error guardando lead:", err);
    return { ok: false, error: "No se pudo guardar el registro. Intentá nuevamente." };
  }
}
