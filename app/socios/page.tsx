import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import InfiniteCarousel from "@/components/InfiniteCarousel";

export const metadata: Metadata = {
  title: "Socios — AESIT",
  description:
    "Conocé las empresas tucumanas de ciberseguridad que integran AESIT, la primera asociación de seguridad de la información del NOA.",
};

export default function SociosPage() {
  return (
    <>
      {/* Hero */}
      <section className="socios-hero" aria-labelledby="socios-titulo">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Empresas socias</span>
            <h1 id="socios-titulo">Las organizaciones que conforman AESIT</h1>
            <p style={{ maxWidth: "56ch" }}>
              6 empresas tucumanas de seguridad de la información que trabajan
              juntas para elevar la ciberseguridad en toda la región NOA.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Carrusel infinito */}
      <section className="section section--alt" aria-label="Socios de AESIT">
        <div className="container" style={{ marginBottom: "2.5rem" }}>
          <FadeIn className="section-header">
            <span className="eyebrow">Miembros fundadores</span>
            <h2>Las empresas detrás de AESIT</h2>
            <p>
              Hacé click en cada empresa para conocer más sobre su trabajo.
            </p>
          </FadeIn>
        </div>
        <FadeIn>
          <InfiniteCarousel />
        </FadeIn>
      </section>

      {/* Bloque IDEP */}
      <section className="section" aria-labelledby="idep-titulo">
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

            <FadeIn className="mission-card" style={{ backgroundColor: "var(--surface)" } as React.CSSProperties}>
              <blockquote style={{ margin: 0 }}>
                <p style={{ fontSize: "1.05rem", color: "var(--text)", fontStyle: "italic", marginBottom: "1.25rem", maxWidth: "none" }}>
                  "AESIT es la primera iniciativa del sector privado que busca
                  fortalecer la conciencia sobre la seguridad en entornos
                  digitales en Tucumán."
                </p>
                <footer style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  — IDEP Tucumán
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt" aria-label="Llamado a la acción">
        <div className="container">
          <FadeIn className="cta-section">
            <span className="eyebrow">Crecemos juntos</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>
              ¿Tu empresa trabaja en seguridad digital?
            </h2>
            <p style={{ color: "var(--text-muted)", marginInline: "auto", marginBottom: "2rem" }}>
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
