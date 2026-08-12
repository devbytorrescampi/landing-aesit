import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — AESIT",
  description:
    "Contactate con AESIT, la asociación de ciberseguridad de Tucumán. Sumate como empresa socia o envianos tu consulta.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="contacto-hero" aria-labelledby="contacto-titulo">
        <div className="container">
          <FadeIn>
            <span className="eyebrow">Hablemos</span>
            <h1 id="contacto-titulo">Contactate con AESIT</h1>
            <p>
              ¿Querés sumar tu empresa, proponer una colaboración o tenés una consulta?
              Completá el formulario y te respondemos a la brevedad.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Layout lateral: info + formulario */}
      <section className="section" aria-label="Contacto">
        <div className="container">
          <div className="contacto-layout">

            {/* Sidebar */}
            <aside className="contacto-info" aria-label="Información de contacto">
              <FadeIn>
                <h2>Información de contacto</h2>
              </FadeIn>

              <FadeIn delay={60} className="contact-item">
                <div className="contact-item__icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-item__text">
                  <strong>Ubicación</strong>
                  <span>San Miguel de Tucumán, Argentina</span>
                </div>
              </FadeIn>

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

              <FadeIn delay={180} className="contact-item">
                <div className="contact-item__icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                  </svg>
                </div>
                <div className="contact-item__text">
                  <strong>Entidad vinculante</strong>
                  <a href="https://idep.gov.ar" target="_blank" rel="noopener noreferrer">IDEP Tucumán</a>
                </div>
              </FadeIn>

              <FadeIn delay={240}>
                <p className="contacto-socials-label">Seguinos en redes</p>
                <div className="contacto-socials">
                  <a href="https://www.linkedin.com/company/aesit-tucuman" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/aesit.tucuman" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </FadeIn>
            </aside>

            {/* Formulario */}
            <FadeIn delay={100}>
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
