"use client";

import Image from "next/image";

const SOCIOS = [
  { nombre: "EndPoint",         logo: "/empresas/endpoint.png",        url: "https://endpointsecurity.com.ar" },
  { nombre: "Zenith",           logo: "/empresas/zenith2.png",         url: "https://zenith.com.ar" },
  { nombre: "ToolsDevs",        logo: "/empresas/toolsdevs.png",       url: "https://toolsdevs.com.ar" },
  { nombre: "JCA Seguridad",    logo: "/empresas/jca-seguridad.png",   url: "https://centurion.com.ar" },
  { nombre: "TorresCampi Soft", logo: "/empresas/torrescampisoft.png", url: "https://torrescampisoft.com" },
  { nombre: "Tecno Yangu",      logo: "/empresas/tecno-yangu.png",     url: "https://instagram.com/tecno_yangu" },
];

function LogoPlaceholder({ nombre }: { nombre: string }) {
  const initials = nombre
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="carousel-placeholder" aria-hidden="true">
      <span>{initials}</span>
    </div>
  );
}

function SocioSlide({ socio }: { socio: typeof SOCIOS[number] }) {
  return (
    <a
      href={socio.url}
      target="_blank"
      rel="noopener noreferrer"
      className="carousel-slide"
      aria-label={`Visitar sitio de ${socio.nombre}`}
    >
      {socio.logo ? (
        <Image
          src={socio.logo}
          alt={socio.nombre}
          width={300}
          height={150}
          style={{ objectFit: "contain", maxHeight: 150, width: "auto" }}
        />
      ) : (
        <LogoPlaceholder nombre={socio.nombre} />
      )}
      <span className="carousel-slide__name">{socio.nombre}</span>
    </a>
  );
}

export default function InfiniteCarousel() {
  const track = [...SOCIOS, ...SOCIOS, ...SOCIOS];

  return (
    <div className="carousel-viewport" aria-label="Empresas socias de AESIT">
      <div className="carousel-track">
        {track.map((s, i) => (
          <SocioSlide key={`${s.nombre}-${i}`} socio={s} />
        ))}
      </div>
    </div>
  );
}
