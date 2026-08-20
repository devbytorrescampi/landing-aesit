"use server";

import { Resend } from "resend";

/**
 * Server Action que envía el formulario de contacto por email vía Resend.
 *
 * Para activarlo en producción:
 * 1. Crear una cuenta en https://resend.com y verificar el dominio aesit.com.ar
 *    (o el dominio que se use para enviar correos).
 * 2. Generar una API key en Resend y agregarla como variable de entorno:
 *      vercel env add RESEND_API_KEY
 *    (o pegarla en Project Settings → Environment Variables en el dashboard de Vercel).
 * 3. Definir de dónde y hacia dónde se envían los correos (también como env vars,
 *    ver CONTACT_FROM_EMAIL y CONTACT_TO_EMAIL más abajo).
 * 4. Redeployar — no se necesita ningún otro cambio de código.
 *
 * Mientras RESEND_API_KEY no esté configurada, esta acción devuelve un error
 * controlado y no rompe el build ni el formulario (ver comprobación al inicio).
 */

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

export type ContactFormInput = {
  nombre: string;
  apellido: string;
  email: string;
  empresa: string;
  motivo: string;
  mensaje: string;
};

const MOTIVO_LABELS: Record<string, string> = {
  asociarse: "Quiero asociarme a AESIT",
  colaboracion: "Propuesta de colaboración",
  prensa: "Consulta de prensa / medios",
  institucional: "Consulta institucional",
  otro: "Otro",
};

// Remitente verificado en Resend. Debe ser un dominio verificado en la cuenta de Resend.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "AESIT <contacto@aesit.com.ar>";
// Casilla que recibe las consultas del formulario.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contacto@aesit.com.ar";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(input: ContactFormInput): string | null {
  if (!input.nombre.trim()) return "El nombre es requerido";
  if (!input.apellido.trim()) return "El apellido es requerido";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return "El correo no es válido";
  if (!input.motivo) return "Seleccioná un motivo";
  if (!input.mensaje.trim()) return "El mensaje no puede estar vacío";
  return null;
}

export async function sendContactEmail(
  input: ContactFormInput
): Promise<ContactFormResult> {
  const validationError = validate(input);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[contacto] RESEND_API_KEY no está configurada. Agregala en las variables de entorno del proyecto."
    );
    return {
      ok: false,
      error:
        "El envío de correo no está configurado todavía. Por favor, intentá más tarde o escribinos directamente.",
    };
  }

  const resend = new Resend(apiKey);
  const motivoLabel = MOTIVO_LABELS[input.motivo] || input.motivo;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: input.email,
      subject: `[Contacto AESIT] ${motivoLabel} — ${input.nombre} ${input.apellido}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto de AESIT</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(input.nombre)} ${escapeHtml(input.apellido)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(input.email)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(input.empresa || "—")}</p>
        <p><strong>Motivo:</strong> ${escapeHtml(motivoLabel)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(input.mensaje).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("[contacto] Error de Resend:", error);
      return { ok: false, error: "No se pudo enviar el mensaje. Intentá nuevamente." };
    }

    return { ok: true };
  } catch (err) {
    console.error("[contacto] Error inesperado enviando el email:", err);
    return { ok: false, error: "No se pudo enviar el mensaje. Intentá nuevamente." };
  }
}
