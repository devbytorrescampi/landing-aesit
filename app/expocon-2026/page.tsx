import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ExpoconForm from "@/components/ExpoconForm";

export const metadata: Metadata = {
  title: "Expocon 2026 — AESIT",
  description:
    "Cargá los contactos de potenciales clientes relevados durante Expocon 2026.",
};

export default function Expocon2026Page() {
  return (
    <>
      <section className="contacto-hero" aria-labelledby="expocon-titulo">
        <div className="container">
          <FadeIn>
            <h1 id="expocon-titulo">Expocon 2026</h1>
          </FadeIn>
        </div>
      </section>

      <section className="section" aria-label="Formulario de carga de contactos">
        <div className="container" style={{ maxWidth: "640px" }}>
          <FadeIn delay={100}>
            <ExpoconForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
