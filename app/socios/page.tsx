import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Socios",
  description:
    "Conocé las 13 empresas tucumanas de ciberseguridad que integran AESIT, la primera asociación de seguridad de la información del NOA.",
};

/* ── Datos de socios ───────────────────────────────────────── */
const SOCIOS = [
  {
    nombre: "Zenith",
    tipo: "Seguridad de la información",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
        <path d="M12 8v8M8 10l4-2 4 2" />
      </svg>
    ),
  },
  {
    nombre: "JCA Seguridad",
    tipo: "Consultoría en ciberseguridad",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    nombre: "Clypeus",
    tipo: "Protección de infraestructuras",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    nombre: "SecureTec NOA",
    tipo: "Auditoría y cumplimiento",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    nombre: "CiberDefensa TUC",
    tipo: "Respuesta a incidentes",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    nombre: "DataShield",
    tipo: "Protección de datos",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    nombre: "NetGuard TUC",
    tipo: "Seguridad de redes",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    nombre: "Axiom Security",
    tipo: "Desarrollo seguro de software",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    nombre: "WatchPoint",
    tipo: "Monitoreo y SOC",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
  },
  {
    nombre: "CryptNorth",
    tipo: "Criptografía aplicada",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    nombre: "SecureCloud NOA",
    tipo: "Seguridad en nube",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <path d="M2 12c0 2.21 4.48 4 10 4s10-1.79 10-4" />
        <path d="M2 8c0 2.21 4.48 4 10 4s10-1.79 10-4" />
      </svg>
    ),
  },
  {
    nombre: "PhishStop",
    tipo: "Antiphishing y concientización",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M1 6l11 7L23 6M1 6v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6" />
      </svg>
    ),
  },
  {
    nombre: "ComplianceAR",
    tipo: "Normativa y certificaciones",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
  },
] as const;

/* ── Page ───────────────────────────────────────────────────── */
export default function SociosPage() {
  return (
    <>
      {/* Hero */}
      <section className="socios-hero" aria-labelledby="socios-titulo">
        <div className="container">
          <span className="eyebrow">Empresas socias</span>
          <h1 id="socios-titulo">Las organizaciones que conforman AESIT</h1>
          <p style={{ maxWidth: "56ch" }}>
            Trece empresas tucumanas de seguridad de la información que trabajan
            juntas para elevar la ciberseguridad en toda la región NOA.
          </p>
        </div>
      </section>

      {/* Grilla de socios */}
      <section className="section" aria-labelledby="grilla-titulo">
        <div className="container">
          <div className="section-header" style={{ maxWidth: 600, textAlign: "left", marginInline: 0 }}>
            <h2
              id="grilla-titulo"
              style={{ fontSize: "1.4rem", color: "var(--text-muted)", fontWeight: 500 }}
            >
              Miembros fundadores
            </h2>
            <span className="accent-line" />
          </div>

          <div className="socios-grid" role="list" aria-label="Empresas socias de AESIT">
            {SOCIOS.map((s, i) => (
              <FadeIn
                key={s.nombre}
                as="article"
                delay={i * 40}
                className="socio-card"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...({ role: "listitem" } as any)}
              >
                <div className="socio-card__logo-wrap">{s.icon}</div>
                <div>
                  <div className="socio-card__name">{s.nombre}</div>
                  <div className="socio-card__type">{s.tipo}</div>
                </div>
                <span className="socio-card__tag">Miembro fundador</span>
              </FadeIn>
            ))}

            {/* Card: Sumate */}
            <FadeIn
              as="article"
              delay={SOCIOS.length * 40}
              className="socio-card socio-card--cta"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...({ role: "listitem" } as any)}
            >
              <div
                className="socio-card__logo-wrap"
                style={{
                  backgroundColor: "var(--accent-glow)",
                  borderColor: "rgba(0,212,255,0.3)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  style={{ stroke: "var(--accent)" }}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div>
                <div className="socio-card__name" style={{ color: "var(--accent)" }}>
                  Tu empresa aquí
                </div>
                <div className="socio-card__type">Sumate a la asociación</div>
              </div>
              <Link
                href="/contacto"
                className="btn btn--primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.82rem" }}
              >
                Contactanos
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bloque IDEP */}
      <section className="section section--alt" aria-labelledby="idep-titulo">
        <div className="container">
          <div className="idep-layout">
            <FadeIn>
              <span className="eyebrow">Respaldo institucional</span>
              <h2 id="idep-titulo" style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>
                Impulsada por el IDEP Tucumán
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.75rem", maxWidth: "52ch" }}>
                El Instituto de Desarrollo Productivo de Tucumán acompañó la creación
                y presentación oficial de AESIT, reconociendo al sector de ciberseguridad
                como pilar de la Economía del Conocimiento provincial.
              </p>
              <a
                href="https://idep.gov.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Conocer el IDEP
              </a>
            </FadeIn>

            <FadeIn
              className="mission-card"
              style={{ backgroundColor: "var(--ink)" } as React.CSSProperties}
            >
              <blockquote style={{ margin: 0 }}>
                <p
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--text)",
                    fontStyle: "italic",
                    marginBottom: "1.25rem",
                    maxWidth: "none",
                  }}
                >
                  "AESIT es la primera iniciativa del sector privado que busca
                  fortalecer la conciencia sobre la seguridad en entornos
                  digitales en Tucumán."
                </p>
                <footer
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                  }}
                >
                  — IDEP Tucumán
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-label="Llamado a la acción">
        <div className="container">
          <FadeIn className="cta-section">
            <span className="eyebrow">Crecemos juntos</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>
              ¿Tu empresa trabaja en seguridad digital?
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                marginInline: "auto",
                marginBottom: "2rem",
              }}
            >
              AESIT está abierta a sumar nuevos miembros que compartan el
              compromiso con la ciberseguridad regional. Completá el formulario
              y te contactamos.
            </p>
            <Link href="/contacto" className="btn btn--primary btn--lg">
              Quiero sumarme
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
