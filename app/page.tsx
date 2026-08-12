import type { Metadata } from "next";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import AnimatedStat from "@/components/AnimatedStat";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "AESIT — Agrupación de Empresas de Seguridad de la Información Tucumán",
};

/* ── Icon helpers ──────────────────────────────────────────── */
function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21C12 21 3 15.5 3 9a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 6.5-9 12-9 12Z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <polyline points="2,6 5,9 10,3" />
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ====================================================
          HERO
      ==================================================== */}
      <section className="hero" aria-label="Presentación de AESIT">
        <HeroCanvas />
        {/* Cover decorativo — reemplazar con background-image real cuando esté disponible */}
        <div className="hero__cover" aria-hidden="true" />

        <div className="container">
          <div className="hero__content">
            <span className="hero__badge">Tucumán · Argentina · Ciberseguridad</span>

            <h1>
              Protegemos el<br />
              <em>futuro digital</em><br />
              del NOA
            </h1>

            <p className="hero__lead">
              AESIT es la primera asociación tucumana de empresas de seguridad de
              la información. Articulamos el sector privado para fortalecer la
              ciberseguridad regional.
            </p>

            <div className="hero__actions">
              <Link href="/socios" className="btn btn--primary btn--lg">
                Conocé los socios
              </Link>
              <Link href="/contacto" className="btn btn--ghost btn--lg">
                Unirse a AESIT
              </Link>
            </div>
          </div>

          <div className="hero__stats" aria-label="Números de AESIT">
            <AnimatedStat value={13} suffix="+" label="Empresas socias" />
            <AnimatedStat value={2024} suffix="" label="Año de fundación" />
            <AnimatedStat value={1} suffix="ª" label="Asociación de ciberseguridad del NOA" />
          </div>
        </div>
      </section>

      {/* ====================================================
          MISIÓN Y VISIÓN
      ==================================================== */}
      <section className="section section--alt" aria-labelledby="mision-titulo">
        <div className="container">
          <FadeIn className="section-header">
            <span className="eyebrow">Quiénes somos</span>
            <h2 id="mision-titulo">
              Nacimos para dar forma<br />
              al ecosistema de seguridad digital
            </h2>
            <p>
              Impulsada por el IDEP Tucumán y conformada por referentes del sector
              privado, AESIT articula empresas, instituciones y profesionales que
              trabajan a diario para que organizaciones y ciudadanos estén más
              seguros en el entorno digital.
            </p>
          </FadeIn>

          <div className="mission-grid">
            <FadeIn delay={0} className="mission-card">
              <div className="mission-card__icon"><IconTarget /></div>
              <h3>Misión</h3>
              <p>
                Nuclear a las empresas tucumanas del sector de seguridad de la
                información para fortalecer la conciencia digital, promover el
                desarrollo del sector y articular iniciativas de prevención del
                cibercrimen en la región NOA.
              </p>
            </FadeIn>

            <FadeIn delay={80} className="mission-card">
              <div className="mission-card__icon"><IconEye /></div>
              <h3>Visión</h3>
              <p>
                Ser el referente regional en ciberseguridad del NOA: un ecosistema
                donde la colaboración público-privada impulse la innovación, la
                formación y la soberanía digital como pilares del crecimiento de
                Tucumán.
              </p>
            </FadeIn>

            <FadeIn delay={160} className="mission-card">
              <div className="mission-card__icon"><IconHeart /></div>
              <h3>Valores</h3>
              <p>
                Colaboración, transparencia, excelencia técnica, compromiso con la
                comunidad y ética profesional son los principios que guían el
                accionar de cada empresa que integra nuestra asociación.
              </p>
            </FadeIn>

            <FadeIn delay={240} className="mission-card">
              <div className="mission-card__icon"><IconShield /></div>
              <h3>Compromiso</h3>
              <p>
                AESIT trabaja en alineación con las políticas de Economía del
                Conocimiento de la provincia, contribuyendo activamente a
                posicionar a Tucumán como polo tecnológico de seguridad digital
                en Argentina.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====================================================
          ACTIVIDADES
      ==================================================== */}
      <section className="section" aria-labelledby="actividades-titulo">
        <div className="container">
          <FadeIn className="section-header">
            <span className="eyebrow">Actividades</span>
            <h2 id="actividades-titulo">Qué hacemos desde AESIT</h2>
            <p>
              Trabajamos en múltiples frentes para elevar el nivel de seguridad
              digital en toda la región.
            </p>
          </FadeIn>

          <div className="activities-grid">
            {[
              {
                num: "01",
                title: "Concienciación ciudadana",
                desc: "Campañas y talleres para que empresas y ciudadanos reconozcan y respondan a amenazas digitales.",
              },
              {
                num: "02",
                title: "Formación profesional",
                desc: "Capacitaciones, jornadas técnicas y articulación con universidades para desarrollar talento local en ciberseguridad.",
              },
              {
                num: "03",
                title: "Prevención del cibercrimen",
                desc: "Vinculación con organismos de seguridad y justicia para sumar expertise privado en la lucha contra delitos digitales.",
              },
              {
                num: "04",
                title: "Networking sectorial",
                desc: "Espacios de encuentro entre empresas socias para compartir inteligencia de amenazas y buenas prácticas.",
              },
              {
                num: "05",
                title: "Articulación público-privada",
                desc: "Diálogo permanente con el IDEP, el gobierno provincial y entes públicos para co-diseñar política digital.",
              },
              {
                num: "06",
                title: "Desarrollo del sector",
                desc: "Posicionamiento de Tucumán como referente regional en servicios de seguridad de la información.",
              },
            ].map((a, i) => (
              <FadeIn key={a.num} delay={i * 60} className="activity-card">
                <div className="activity-card__num">{a.num}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          BENEFICIOS
      ==================================================== */}
      <section className="section section--alt" aria-labelledby="beneficios-titulo">
        <div className="container">
          <div className="benefits-layout">
            <div>
              <FadeIn style={{ marginBottom: "2.5rem" } as React.CSSProperties}>
                <span className="eyebrow">Beneficios</span>
                <h2 id="beneficios-titulo">
                  Razones para<br />ser parte de AESIT
                </h2>
              </FadeIn>

              <ul className="benefits-list" aria-label="Beneficios de ser socio">
                {[
                  {
                    title: "Visibilidad y posicionamiento",
                    desc: "Tu empresa presente en el directorio oficial y en todas las comunicaciones de la asociación.",
                  },
                  {
                    title: "Red de contactos calificados",
                    desc: "Acceso directo a otras empresas del sector, organismos públicos y referentes técnicos.",
                  },
                  {
                    title: "Representación gremial",
                    desc: "Participación en mesas de diálogo con el sector público y defensa de los intereses del sector.",
                  },
                  {
                    title: "Formación y actualización continua",
                    desc: "Acceso preferencial a jornadas técnicas, certificaciones y programas de capacitación.",
                  },
                  {
                    title: "Inteligencia de amenazas compartida",
                    desc: "Canales seguros de intercambio de información sobre vulnerabilidades e incidentes regionales.",
                  },
                ].map((b, i) => (
                  <FadeIn key={b.title} delay={i * 70} as="li" className="benefit-item">
                    <div className="benefit-item__check" aria-hidden="true">
                      <CheckIcon />
                    </div>
                    <div className="benefit-item__text">
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </ul>
            </div>

            <FadeIn className="benefits-cta-box">
              <span className="accent-number" aria-label="13 empresas socias">13</span>
              <p>
                empresas ya forman parte de la primera asociación de ciberseguridad
                del NOA
              </p>
              <Link
                href="/socios"
                className="btn btn--ghost"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Ver empresas socias
              </Link>
              <Link
                href="/contacto"
                className="btn btn--primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Quiero sumarme
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ====================================================
          CTA FINAL
      ==================================================== */}
      <section className="section" aria-label="Llamado a la acción">
        <div className="container">
          <FadeIn className="cta-section">
            <span className="eyebrow">Trabajemos juntos</span>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "1.25rem" }}>
              La ciberseguridad regional<br />se construye entre todos
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                marginBottom: "2.5rem",
                marginInline: "auto",
              }}
            >
              Si tu empresa trabaja en seguridad de la información, da el paso y
              sé parte de la red que está transformando el ecosistema digital del NOA.
            </p>
            <div className="cta-section__actions">
              <Link href="/contacto" className="btn btn--primary btn--lg">
                Contactanos
              </Link>
              <Link href="/socios" className="btn btn--ghost btn--lg">
                Ver socios
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
