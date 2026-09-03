"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loginExpoconAdmin } from "@/app/actions/expoconAdmin";

export default function ExpoconAdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const result = await loginExpoconAdmin(password);
    setSubmitting(false);
    if (result.ok) {
      router.refresh();
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="contact-form contact-form--flat" style={{ maxWidth: "420px", margin: "0 auto" }}>
      <div className="cf-header">
        <h2>Acceso administración</h2>
        <p>Ingresá la contraseña para ver los contactos cargados.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate aria-label="Acceso administración Expocon 2026">
        <div className={`cf-field${error ? " cf-field--error" : ""}`}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password" id="password" name="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña de administración"
            autoComplete="current-password"
            autoFocus
          />
          {error && (
            <span role="alert" className="cf-error">{error}</span>
          )}
        </div>
        <button type="submit" className="btn btn--primary cf-submit" disabled={submitting}>
          {submitting ? "Verificando…" : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
