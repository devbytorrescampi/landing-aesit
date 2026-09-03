import type { Metadata } from "next";
import { getSql } from "@/lib/db";
import { isExpoconAdmin } from "@/lib/expoconAuth";
import ExpoconAdminLogin from "@/components/ExpoconAdminLogin";
import ExpoconAdminLogout from "@/components/ExpoconAdminLogout";

export const metadata: Metadata = {
  title: "Administración Expocon 2026 — AESIT",
  robots: { index: false, follow: false },
};

const SITUACION_LABELS: Record<string, string> = {
  estudia: "Estudia",
  trabaja: "Trabaja",
};

export default async function Expocon2026AdminPage() {
  const authorized = await isExpoconAdmin();

  if (!authorized) {
    return (
      <section className="section" aria-label="Acceso administración">
        <div className="container">
          <ExpoconAdminLogin />
        </div>
      </section>
    );
  }

  const sql = getSql();
  const leads = await sql`
    SELECT id, nombre_apellido, edad, email, telefono, situacion, cargo, empresa_organizacion, created_at
    FROM expocon_2026_leads
    ORDER BY created_at DESC
  `;

  return (
    <section className="section" aria-label="Contactos cargados Expocon 2026">
      <div className="container">
        <div className="expocon-admin-header">
          <div>
            <h1>Contactos — Expocon 2026</h1>
            <p style={{ color: "var(--text-muted)" }}>{leads.length} contacto(s) cargado(s)</p>
          </div>
          <div className="expocon-admin-actions">
            <a className="btn btn--primary" href="/expocon-2026/admin/export">
              Exportar CSV
            </a>
            <ExpoconAdminLogout />
          </div>
        </div>

        {leads.length === 0 ? (
          <p style={{ color: "var(--text-muted)" }}>Todavía no se cargó ningún contacto.</p>
        ) : (
          <div className="expocon-admin-table-wrap">
            <table className="expocon-admin-table">
              <thead>
                <tr>
                  <th>Nombre y apellido</th>
                  <th>Edad</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Situación</th>
                  <th>Cargo</th>
                  <th>Empresa/Org./Institución</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id as number}>
                    <td>{lead.nombre_apellido || "—"}</td>
                    <td>{lead.edad ?? "—"}</td>
                    <td>{lead.email || "—"}</td>
                    <td>{lead.telefono || "—"}</td>
                    <td>{SITUACION_LABELS[lead.situacion as string] || "—"}</td>
                    <td>{lead.cargo || "—"}</td>
                    <td>{lead.empresa_organizacion || "—"}</td>
                    <td>{new Date(lead.created_at as string).toLocaleString("es-AR")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
