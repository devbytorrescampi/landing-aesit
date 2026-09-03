"use client";

import { useState, FormEvent } from "react";
import { submitExpoconLead, ExpoconLeadInput } from "@/app/actions/expocon";

const EMPTY_FORM: ExpoconLeadInput = {
  nombreApellido: "",
  edad: "",
  email: "",
  telefono: "",
  situacion: "",
  cargo: "",
  empresaOrganizacion: "",
};

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

export default function ExpoconForm() {
  const [form, setForm] = useState<ExpoconLeadInput>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((p) => ({
      ...p,
      [name]: value,
      ...(name === "situacion" && value !== "trabaja" ? { cargo: "" } : {}),
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    setSubmitting(true);
    const result = await submitExpoconLead(form);
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
        <h3>¡Registro cargado!</h3>
        <p>El contacto se guardó correctamente para Expocon 2026.</p>
        <button className="btn btn--ghost" onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}>
          Cargar otro contacto
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form contact-form--flat">
      <div className="cf-header">
        <h2>Cargar contacto</h2>
        <p>Todos los campos son opcionales — completá lo que tengas disponible.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate aria-label="Formulario de carga de contactos Expocon 2026">

        <div className="cf-row">
          <div className="cf-field">
            <label htmlFor="nombreApellido">Nombre y apellido</label>
            <input
              type="text" id="nombreApellido" name="nombreApellido"
              value={form.nombreApellido} onChange={handleChange}
              placeholder="Nombre y apellido del contacto"
              autoComplete="name"
            />
          </div>

          <div className="cf-field">
            <label htmlFor="edad">Edad</label>
            <input
              type="number" id="edad" name="edad"
              value={form.edad} onChange={handleChange}
              placeholder="Edad"
              min={0} max={120}
              inputMode="numeric"
            />
          </div>
        </div>

        <div className="cf-row">
          <div className={`cf-field${serverError ? " cf-field--error" : ""}`}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email" id="email" name="email"
              value={form.email} onChange={handleChange}
              placeholder="correo@ejemplo.com"
              autoComplete="email"
            />
          </div>

          <div className="cf-field">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel" id="telefono" name="telefono"
              value={form.telefono} onChange={handleChange}
              placeholder="Teléfono de contacto"
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="cf-row">
          <div className="cf-field">
            <label htmlFor="situacion">¿Estudia o trabaja?</label>
            <div className="cf-select-wrap">
              <select
                id="situacion" name="situacion"
                value={form.situacion} onChange={handleChange}
              >
                <option value="">Sin especificar</option>
                <option value="estudia">Estudia</option>
                <option value="trabaja">Trabaja</option>
              </select>
              <svg className="cf-select-arrow" viewBox="0 0 16 16" aria-hidden="true">
                <polyline points="4,6 8,10 12,6" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {form.situacion === "trabaja" && (
            <div className="cf-field">
              <label htmlFor="cargo">Cargo</label>
              <input
                type="text" id="cargo" name="cargo"
                value={form.cargo} onChange={handleChange}
                placeholder="Cargo o puesto actual"
                autoComplete="organization-title"
              />
            </div>
          )}
        </div>

        <div className="cf-field">
          <label htmlFor="empresaOrganizacion">Empresa / Organización / Institución</label>
          <input
            type="text" id="empresaOrganizacion" name="empresaOrganizacion"
            value={form.empresaOrganizacion} onChange={handleChange}
            placeholder="Empresa, organización o institución del contacto"
            autoComplete="organization"
          />
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
              Guardando…
            </>
          ) : (
            <>
              Guardar contacto
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
