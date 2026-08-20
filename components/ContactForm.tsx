"use client";

import { useState, FormEvent } from "react";
import { sendContactEmail } from "@/app/actions/contacto";

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

const MOTIVOS = [
  { value: "asociarse",     label: "Quiero asociarme a AESIT" },
  { value: "colaboracion",  label: "Propuesta de colaboración" },
  { value: "prensa",        label: "Consulta de prensa / medios" },
  { value: "institucional", label: "Consulta institucional" },
  { value: "otro",          label: "Otro" },
];

const MAX_MENSAJE = 600;

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <span role="alert" className="cf-error">
      <svg viewBox="0 0 16 16" aria-hidden="true" width="12" height="12">
        <circle cx="8" cy="8" r="7" strokeWidth="1.5" fill="none" stroke="currentColor" />
        <line x1="8" y1="5" x2="8" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
      </svg>
      {msg}
    </span>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    nombre: "", apellido: "", email: "", empresa: "", motivo: "", mensaje: "",
  });
  const [errors, setErrors]     = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!form.nombre.trim())  e.nombre   = "El nombre es requerido";
    if (!form.apellido.trim()) e.apellido = "El apellido es requerido";
    if (!form.email.trim()) {
      e.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "El correo no es válido";
    }
    if (!form.motivo)         e.motivo   = "Seleccioná un motivo";
    if (!form.mensaje.trim()) e.mensaje  = "El mensaje no puede estar vacío";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setServerError(null);
    setSubmitting(true);
    const result = await sendContactEmail(form);
    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setServerError(result.error);
    }
  }

  if (submitted) {
    return (
      <div className="cf-success">
        <div className="cf-success__circle">
          <svg viewBox="0 0 52 52" aria-hidden="true">
            <circle cx="26" cy="26" r="25" fill="none" strokeWidth="2" stroke="var(--accent)" className="cf-success__ring" />
            <polyline points="14,27 22,35 38,19" fill="none" strokeWidth="2.5" stroke="var(--accent)" strokeLinecap="round" strokeLinejoin="round" className="cf-success__check" />
          </svg>
        </div>
        <h3>¡Mensaje enviado!</h3>
        <p>Gracias por contactarte con AESIT. Te respondemos a la brevedad.</p>
        <button className="btn btn--ghost" onClick={() => { setSubmitted(false); setForm({ nombre:"", apellido:"", email:"", empresa:"", motivo:"", mensaje:"" }); }}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form contact-form--flat">
      <div className="cf-header">
        <h2>Envianos tu mensaje</h2>
        <p>Los campos marcados con <span className="cf-required-mark">*</span> son obligatorios.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">

        <div className="cf-row">
          <div className={`cf-field${errors.nombre ? " cf-field--error" : ""}`}>
            <label htmlFor="nombre">Nombre <span className="cf-required-mark">*</span></label>
            <input
              type="text" id="nombre" name="nombre"
              value={form.nombre} onChange={handleChange}
              placeholder="Tu nombre"
              autoComplete="given-name"
              aria-required="true" aria-invalid={!!errors.nombre}
            />
            <FieldError msg={errors.nombre} />
          </div>

          <div className={`cf-field${errors.apellido ? " cf-field--error" : ""}`}>
            <label htmlFor="apellido">Apellido <span className="cf-required-mark">*</span></label>
            <input
              type="text" id="apellido" name="apellido"
              value={form.apellido} onChange={handleChange}
              placeholder="Tu apellido"
              autoComplete="family-name"
              aria-required="true" aria-invalid={!!errors.apellido}
            />
            <FieldError msg={errors.apellido} />
          </div>
        </div>

        <div className="cf-row">
          <div className={`cf-field${errors.email ? " cf-field--error" : ""}`}>
            <label htmlFor="email">Correo electrónico <span className="cf-required-mark">*</span></label>
            <input
              type="email" id="email" name="email"
              value={form.email} onChange={handleChange}
              placeholder="tucorreo@empresa.com"
              autoComplete="email"
              aria-required="true" aria-invalid={!!errors.email}
            />
            <FieldError msg={errors.email} />
          </div>

          <div className="cf-field">
            <label htmlFor="empresa">Empresa / Organización</label>
            <input
              type="text" id="empresa" name="empresa"
              value={form.empresa} onChange={handleChange}
              placeholder="Nombre de tu empresa"
              autoComplete="organization"
            />
          </div>
        </div>

        <div className={`cf-field${errors.motivo ? " cf-field--error" : ""}`}>
          <label htmlFor="motivo">Motivo de contacto <span className="cf-required-mark">*</span></label>
          <div className="cf-select-wrap">
            <select
              id="motivo" name="motivo"
              value={form.motivo} onChange={handleChange}
              aria-required="true" aria-invalid={!!errors.motivo}
            >
              <option value="" disabled>Seleccioná una opción</option>
              {MOTIVOS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
            <svg className="cf-select-arrow" viewBox="0 0 16 16" aria-hidden="true">
              <polyline points="4,6 8,10 12,6" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <FieldError msg={errors.motivo} />
        </div>

        <div className={`cf-field${errors.mensaje ? " cf-field--error" : ""}`}>
          <div className="cf-field-header">
            <label htmlFor="mensaje">Mensaje <span className="cf-required-mark">*</span></label>
            <span className={`cf-char-count${form.mensaje.length > MAX_MENSAJE * 0.9 ? " cf-char-count--warn" : ""}`}>
              {form.mensaje.length}/{MAX_MENSAJE}
            </span>
          </div>
          <textarea
            id="mensaje" name="mensaje"
            value={form.mensaje} onChange={handleChange}
            placeholder="Contanos de qué se trata tu consulta o cómo podemos ayudarte…"
            rows={5} maxLength={MAX_MENSAJE}
            aria-required="true" aria-invalid={!!errors.mensaje}
          />
          <FieldError msg={errors.mensaje} />
        </div>

        {serverError && (
          <p role="alert" className="cf-error" style={{ marginBottom: "1rem" }}>
            {serverError}
          </p>
        )}

        <button type="submit" className="btn btn--primary cf-submit" disabled={submitting}>
          {submitting ? (
            <>
              <span className="cf-spinner" aria-hidden="true" />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensaje
              <svg viewBox="0 0 20 20" aria-hidden="true" width="16" height="16">
                <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <polyline points="11,5 16,10 11,15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </>
          )}
        </button>

      </form>
    </div>
  );
}
