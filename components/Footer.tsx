export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            {/* Logo placeholder — reemplazar con <Image src="/logo.png" …> */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  backgroundColor: "var(--accent-glow)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display, Space Grotesk, sans-serif)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--white)",
                }}
              >
                AE<span style={{ color: "var(--accent)" }}>SIT</span>
              </span>
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
