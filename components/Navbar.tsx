"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`} role="banner">
        <div className="container navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="AESIT inicio">
            {/* Logo placeholder: reemplazar con <Image src="/logo.png" … /> cuando esté disponible */}
            <div
              aria-hidden="true"
              style={{
                width: 36,
                height: 36,
                borderRadius: 6,
                backgroundColor: "var(--accent-glow)",
                border: "1px solid rgba(0,212,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
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
            <span className="navbar__logo-text">
              AE<span>SIT</span>
            </span>
          </Link>

          <nav className="navbar__nav" aria-label="Navegación principal">
            <Link href="/" className={`nav-link${isActive("/") ? " active" : ""}`}>
              Inicio
            </Link>
            <Link href="/socios" className={`nav-link${isActive("/socios") ? " active" : ""}`}>
              Socios
            </Link>
            <Link href="/contacto" className={`nav-link${isActive("/contacto") ? " active" : ""}`}>
              Contacto
            </Link>
          </nav>

          <Link href="/contacto" className="btn btn--primary nav-cta">
            Sumate a AESIT
          </Link>

          <button
            className={`navbar__toggle${open ? " open" : ""}`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className={`navbar__mobile${open ? " open" : ""}`} aria-label="Menú mobile">
        <Link href="/" className={`nav-link${isActive("/") ? " active" : ""}`}>
          Inicio
        </Link>
        <Link href="/socios" className={`nav-link${isActive("/socios") ? " active" : ""}`}>
          Socios
        </Link>
        <Link href="/contacto" className={`nav-link${isActive("/contacto") ? " active" : ""}`}>
          Contacto
        </Link>
        <Link href="/contacto" className="btn btn--primary" style={{ marginTop: "0.5rem" }}>
          Sumate a AESIT
        </Link>
      </nav>
    </>
  );
}
