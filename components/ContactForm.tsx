"use client";

import { useState, useRef, FormEvent } from "react";

interface FormState {
  nombre: string;
  apellido: string;
  email: string;
  empresa: string;
  motivo: string;
  mensaje: string;
}

interface FieldErrors {
  nombre?: string;
  apellido?: string;
  email?: string;
  motivo?: string;
  mensaje?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
    motivo: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!form.nombre.trim()) errs.nombre = "Nombre requerido";
    if (!form.apellido.trim()) errs.apellido = "Apellido requerido";
    if (!form.email.trim()) {
      errs.email = "Correo requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Correo inválido";
    }
    if (!form.motivo) errs.motivo = "Seleccioná un motivo";
    if (!form.mensaje.trim()) errs.mensaje = "El mensaje no puede estar vacío";
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    // Simulate async submission — replace with real endpoint
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="contact-form form-success" style={{ display: "block" }}>
        <div className="form-success__icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="20,6 9,17 4,12" />
          </svg>
        </div>
        <h3>Mensaje enviado</h3>
        <p>Gracias por contactarte. Nos pondremos en comunicación con vos a la brevedad.</p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h2 style={{ fontSize: "1.35rem", marginBottom: "0.4rem" }}>
        Envianos tu mensaje
      </h2>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.875rem",
          marginBottom: "2rem",
          maxWidth: "none",
        }}
      >
        Los campos marcados con * son obligatorios.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        aria-label="Formulario de contacto"
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={!!errors.nombre}
              className={errors.nombre ? "error" : ""}
            />
            {errors.nombre && (
              <span
                role="alert"
                style={{ fontSize: "0.78rem", color: "var(--error)", marginTop: "0.2rem" }}
              >
                {errors.nombre}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido *</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              placeholder="Tu apellido"
              autoComplete="family-name"
              aria-required="true"
              aria-invalid={!!errors.apellido}
              className={errors.apellido ? "error" : ""}
            />
            {errors.apellido && (
              <span
                role="alert"
                style={{ fontSize: "0.78rem", color: "var(--error)", marginTop: "0.2rem" }}
              >
                {errors.apellido}
              </span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tucorreo@empresa.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span
              role="alert"
              style={{ fontSize: "0.78rem", color: "var(--error)", marginTop: "0.2rem" }}
            >
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="empresa">Empresa / Organización</label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={form.empresa}
            onChange={handleChange}
            placeholder="Nombre de tu empresa"
            autoComplete="organization"
          />
        </div>

        <div className="form-group">
          <label htmlFor="motivo">Motivo de contacto *</label>
          <select
            id="motivo"
            name="motivo"
            value={form.motivo}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.motivo}
            className={errors.motivo ? "error" : ""}
          >
            <option value="" disabled>
              Seleccioná una opción
            </option>
            <option value="asociarse">Quiero asociarme a AESIT</option>
            <option value="colaboracion">Propuesta de colaboración</option>
            <option value="prensa">Consulta de prensa / medios</option>
            <option value="institucional">Consulta institucional</option>
            <option value="otro">Otro</option>
          </select>
          {errors.motivo && (
            <span
              role="alert"
              style={{ fontSize: "0.78rem", color: "var(--error)", marginTop: "0.2rem" }}
            >
              {errors.motivo}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Contanos de qué se trata tu consulta o cómo podemos ayudarte…"
            rows={5}
            aria-required="true"
            aria-invalid={!!errors.mensaje}
            className={errors.mensaje ? "error" : ""}
          />
          {errors.mensaje && (
            <span
              role="alert"
              style={{ fontSize: "0.78rem", color: "var(--error)", marginTop: "0.2rem" }}
            >
              {errors.mensaje}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn--primary form-submit"
          disabled={submitting}
        >
          {submitting ? "Enviando…" : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
}
