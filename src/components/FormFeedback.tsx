"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

/**
 * Honeypot anti-spam invisible. Colócalo dentro de cada <form>.
 * Los bots lo rellenan; los humanos no lo ven.
 */
export function Honeypot() {
  return (
    <input
      type="text"
      name="_honey"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  );
}

/**
 * Ventana de confirmación propia de la marca. Se muestra al enviar con éxito,
 * sin sacar al usuario del sitio.
 */
export function SubmitSuccessModal({
  open,
  onClose,
  title = "¡Mensaje enviado!",
  message = "Gracias por escribirnos. Nuestro equipo te responderá en menos de 24 horas.",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-hero-base/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            style={{
              background:
                "radial-gradient(ellipse 72% 52% at 18% 12%, rgba(41,0,142,0.45), transparent 70%), radial-gradient(ellipse 62% 46% at 82% 88%, rgba(100,3,84,0.4), transparent 70%), linear-gradient(135deg, #07052e 0%, #0f094f 48%, #12063b 100%)",
            }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.4)]"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-5 top-5 text-white/40 transition hover:text-white"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 14 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10"
            >
              <CheckCircle2 size={36} className="text-accent-glow" />
            </motion.div>
            <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">{message}</p>
            <button
              onClick={onClose}
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-sm font-medium text-hero-base shadow-lg transition hover:-translate-y-0.5"
            >
              Entendido
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Aviso de error de envío, en línea bajo el formulario. */
export function SubmitErrorNote({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <p className="text-center text-sm text-accent-pink">
      Ocurrió un error al enviar. Inténtalo de nuevo o escríbenos a{" "}
      <a href="mailto:contacto@develop.com.mx" className="underline">
        contacto@develop.com.mx
      </a>
      .
    </p>
  );
}
