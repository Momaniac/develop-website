import { useState } from "react";

/**
 * Envío de formularios vía FormSubmit (AJAX) → contacto@develop.com.mx
 *
 * Usamos el endpoint /ajax/ para recibir una respuesta JSON y mostrar nuestra
 * propia ventana de confirmación, en lugar de la pantalla por defecto de
 * FormSubmit (que saca al usuario del sitio y genera desconfianza).
 *
 * Nota de activación: el primer envío dispara un correo de confirmación de
 * FormSubmit a contacto@develop.com.mx. Hay que abrir ese correo y confirmar
 * una sola vez para que empiecen a llegar los mensajes.
 */
const DESTINATION = "contacto@develop.com.mx";
const ENDPOINT = `https://formsubmit.co/ajax/${DESTINATION}`;

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useFormSubmit(subject: string) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot anti-spam: si está relleno, lo tomamos como bot y no enviamos.
    if (formData.get("_honey")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload: Record<string, string> = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
    };
    formData.forEach((value, key) => {
      if (key !== "_honey") payload[key] = String(value);
    });

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json.success === "true" || json.success === true)) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
  }

  return { status, handleSubmit, reset };
}
