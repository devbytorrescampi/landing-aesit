import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con AESIT, la asociación de ciberseguridad de Tucumán. Sumate como empresa socia o envianos tu consulta.",
};

/* ── Page ───────────────────────────────────────────────────── */
export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="contacto-hero" aria-labelledby="contacto-titulo">
        <div className="container">
          <span className="eyebrow">Hablemos</span>
          <h1 id="contacto-titulo">Contactate con AESIT</h1>
          <p style={{ maxWidth: "52ch" }}>
            ¿Querés sumar tu empresa como socia, tenés una consulta o querés
            proponer una colaboración? Completá el formulario y te respondemos
            a la brevedad.
          </p>
        </div>
      </section>

      {/* Layout principal */}
      <section
        className="section"
        style={{ paddingBlockStart: 0 } as React.CSSProperties}
        aria-labelledby="form-titulo"
      >
        <div className="container">
          <div className="contacto-layout">

            {/* Sidebar de info */}
            <aside className="contacto-info" aria-label="Información de contacto">
              <FadeIn>
                <h2>Información de contacto</h2>
                <span className="accent-line" />
              </FadeIn>

              {/* Ubicación */}
              <FadeIn delay={60} className="contact-item">
                <div className="contact-item__icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-item__text">
                  <strong>Ubicación</strong>
                  <span>San Miguel de Tucumán</span>
                  <br />
                  <span>Tucumán, Argentina</span>
                </div>
              </FadeIn>

              {/* Email */}
              <FadeIn delay={120} className="contact-item">
                <div className="contact-item__icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-item__text">
                  <strong>Correo electrónico</strong>
                  <a href="mailto:contacto@aesit.org.ar">contacto@aesit.org.ar</a>
                </div>
              </FadeIn>

              {/* Institución */}
              <FadeIn delay={180} className="contact-item">
                <div className="contact-item__icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                  </svg>
                </div>
                <div className="contact-item__text">
                  <strong>Entidad vinculante</strong>
                  <a
                    href="https://idep.gov.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IDEP Tucumán
                  </a>
                </div>
              </FadeIn>

              {/* Redes sociales */}
              <FadeIn delay={240}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.85rem",
                  }}
                >
                  Seguinos en redes
                </p>
                <div className="contacto-socials">
                  <a
                    href="https://www.linkedin.com/company/aesit-tucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="AESIT en LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/aesit.tucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="AESIT en Instagram"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </FadeIn>

              {/* Card de contexto */}
              <FadeIn
                delay={300}
                className="mission-card"
                style={{ backgroundColor: "var(--surface-2)", padding: "1.5rem" } as React.CSSProperties}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    maxWidth: "none",
                    margin: 0,
                  }}
                >
                  AESIT está impulsada por el IDEP y trabaja en alineación con las
                  políticas de Economía del Conocimiento de la provincia de Tucumán.
                  Si tu empresa opera en el sector de seguridad de la información,
                  sos bienvenido a formar parte.
                </p>
              </FadeIn>
            </aside>

            {/* Formulario */}
            <FadeIn delay={100}>
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Mapa / Ubicación */}
      <section className="section section--alt" aria-labelledby="ubicacion-titulo">
        <div className="container">
          <FadeIn className="section-header" style={{ marginBottom: "2rem" } as React.CSSProperties}>
            <span className="eyebrow">Ubicación</span>
            <h2 id="ubicacion-titulo" style={{ fontSize: "1.6rem" }}>
              Tucumán, Argentina
            </h2>
          </FadeIn>

          <FadeIn>
            <div
              className="location-map"
              role="img"
              aria-label="Mapa de San Miguel de Tucumán, Argentina"
            >
              {/* Cuadrícula decorativa */}
              <svg
                className="location-map__grid"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#00D4FF"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>

              <div className="location-map__marker">
                <div className="location-map__pin" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ width: 24, height: 24 }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="location-map__city">San Miguel de Tucumán</p>
                <p className="location-map__region">Tucumán, Argentina — NOA</p>
                <a
                  href="https://maps.google.com/?q=San+Miguel+de+Tucuman+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                  style={{ fontSize: "0.825rem", padding: "0.5rem 1rem" }}
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
