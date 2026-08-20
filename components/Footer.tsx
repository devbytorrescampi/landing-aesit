import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Image
                src="/logo.png"
                alt="AESIT logo"
                width={44}
                height={44}
                style={{ objectFit: "contain", height: 44, width: "auto" }}
              />
              <Image
                src="/nombre.png"
                alt="AESIT"
                width={90}
                height={30}
                style={{ objectFit: "contain", height: 30, width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p>
              Agrupación de Empresas de Seguridad de la Información Tucumán.
              Primera asociación de ciberseguridad del NOA, Argentina.
            </p>
            <div className="footer__socials" aria-label="Redes sociales">
              <a
                href="https://www.linkedin.com/company/aesit-tucuman"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn de AESIT"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aesit.tucuman"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram de AESIT"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="footer__col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/socios">Empresas socias</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/contacto">Sumate a AESIT</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="mailto:contacto@aesit.org.ar">contacto@aesit.org.ar</a>
              </li>
              <li>
                <span style={{ color: "var(--text-faint)", fontSize: "0.875rem" }}>
                  San Miguel de Tucumán, Argentina
                </span>
              </li>
              <li>
                <a
                  href="https://idep.gov.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Impulsado por IDEP
                </a>
              </li>
              <li>
                <a
                  href="https://enteculturaltucuman.gob.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Impulsado por Ente Cultural
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} AESIT — Todos los derechos reservados.
          </p>
          <div className="footer__legal">
            <a href="#">Aviso legal</a>
            <a href="#">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
