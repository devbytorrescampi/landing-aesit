import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { isExpoconAdmin } from "@/lib/expoconAuth";

function csvEscape(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET() {
  if (!(await isExpoconAdmin())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const sql = getSql();
  const rows = await sql`
    SELECT nombre_apellido, edad, email, telefono, situacion, cargo, empresa_organizacion, created_at
    FROM expocon_2026_leads
    ORDER BY created_at DESC
  `;

  const header = [
    "Nombre y apellido",
    "Edad",
    "Email",
    "Teléfono",
    "Situación",
    "Cargo",
    "Empresa/Organización/Institución",
    "Fecha de carga",
  ];

  const lines = [header.join(",")];
  for (const row of rows) {
    lines.push(
      [
        csvEscape(row.nombre_apellido),
        csvEscape(row.edad),
        csvEscape(row.email),
        csvEscape(row.telefono),
        csvEscape(row.situacion),
        csvEscape(row.cargo),
        csvEscape(row.empresa_organizacion),
        csvEscape(new Date(row.created_at).toLocaleString("es-AR")),
      ].join(",")
    );
  }

  const csv = "﻿" + lines.join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="expocon-2026-leads.csv"',
    },
  });
}
