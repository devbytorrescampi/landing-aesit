import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sg",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AESIT — Agrupación de Empresas de Seguridad de la Información Tucumán",
    template: "%s — AESIT Tucumán",
  },
  description:
    "AESIT es la primera asociación tucumana de empresas de ciberseguridad. Unimos a las organizaciones del sector para fortalecer la seguridad digital en el NOA.",
  keywords: [
    "ciberseguridad",
    "Tucumán",
    "Argentina",
    "NOA",
    "seguridad informática",
    "AESIT",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        style={
          {
            fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)",
          } as React.CSSProperties
        }
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
