"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
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
          <Link href="/" className="navbar__logo" aria-label="AESIT inicio" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Image
              src="/logo.png"
              alt="AESIT logo"
              width={66}
              height={66}
              style={{ objectFit: "contain", height: 66, width: "auto" }}
              priority
            />
            <Image
              src="/nombre.png"
              alt="AESIT"
              width={135}
              height={45}
              style={{ objectFit: "contain", height: 45, width: "auto", filter: "brightness(0) invert(1)" }}
              priority
            />
          </Link>

          <nav className="navbar__nav" aria-label="Navegación principal">
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
