"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";
import { useFormSubmit } from "../lib/useFormSubmit";
import { Honeypot, SubmitSuccessModal, SubmitErrorNote } from "../components/FormFeedback";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@develop.com.mx",
    href: "mailto:contacto@develop.com.mx",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 56 1024 8938",
    href: "tel:+525610248938",
  },
  {
    icon: MapPin,
    label: "Oficinas",
    value: "Ciudad de México, México",
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lunes a viernes, 9:00 a.m. – 6:00 p.m.",
  },
];

export default function Contacto() {
  const { status, handleSubmit, reset } = useFormSubmit("Nueva consulta · Formulario de Contacto");
  return (
    <>
      <section className="contact-immersive hero-dark hero-static-intelligence min-h-[calc(100vh-72px)] py-20 lg:py-28">
        <HeroStaticIntelligence className="opacity-80" />
        <div aria-hidden className="contact-signal-field">
          <span className="contact-signal-line contact-signal-line-1" />
          <span className="contact-signal-line contact-signal-line-2" />
          <span className="contact-signal-line contact-signal-line-3" />
          <span className="contact-signal-node contact-signal-node-1" />
          <span className="contact-signal-node contact-signal-node-2" />
          <span className="contact-signal-node contact-signal-node-3" />
          <span className="contact-signal-node contact-signal-node-4" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left: Info */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="contact-orbital-badge"
                aria-hidden
              >
                <Sparkles size={18} />
              </motion.div>

              <motion.div {...fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-glow/80 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-glow shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
                  Contacto
                </span>
              </motion.div>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Hablemos sobre tu{" "}
                <span className="gradient-text">próximo paso</span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base leading-7 text-white/60"
              >
                Ya sea que busques certificar a tu equipo, encontrar talento o explorar nuestros programas,
                estamos aquí para guiarte.
              </motion.p>

              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {contactChannels.map((channel, index) => {
                  const Icon = channel.icon;
                  const content = (
                    <motion.div
                      whileHover={{ x: 4, borderColor: "rgba(167,139,250,0.34)" }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                      className="contact-channel-card"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                        <Icon size={18} className="text-white/80" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{channel.label}</div>
                        <div className="text-sm text-white/55 transition group-hover:text-white">{channel.value}</div>
                      </div>
                    </motion.div>
                  );

                  return (
                    <motion.div
                      key={channel.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.28 + index * 0.08 }}
                    >
                      {channel.href ? (
                        <a href={channel.href} className="group block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10">
                <div className="contact-assistant-card">
                  <MessageCircle size={20} className="mt-0.5 flex-shrink-0 text-accent-glow" />
                  <div>
                    <div className="text-sm font-semibold text-white">BellA · Asistente IA</div>
                    <div className="mt-1 text-sm leading-6 text-white/50">
                      ¿Necesitas ayuda rápida? Conversa con BellA, nuestra asistente con IA, disponible 24/7 en el botón de chat.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="contact-form-shell">
                <div className="contact-form-glow" aria-hidden />
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-xl font-bold text-white">Envía tu consulta</h2>
                    <p className="mt-2 text-sm text-white/58">
                      Completa el formulario y te responderemos en menos de 24 horas.
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:inline-flex">
                    24h
                  </div>
                </div>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <Honeypot />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/50">Nombre</label>
                      <input
                        type="text"
                        name="Nombre"
                        required
                        placeholder="Tu nombre"
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/50">Apellido</label>
                      <input
                        type="text"
                        name="Apellido"
                        placeholder="Tu apellido"
                        className="contact-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/50">Email</label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder="tu@correo.com"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/50">¿Cómo podemos ayudarte?</label>
                    <select name="Motivo" className="contact-input text-white/72">
                      <option>Selecciona una opción</option>
                      <option>Quiero certificar a mi equipo</option>
                      <option>Busco talento para mi empresa</option>
                      <option>Me interesa un programa de formación</option>
                      <option>Soy institución educativa</option>
                      <option>Soy entidad de gobierno</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/50">Mensaje</label>
                    <textarea
                      rows={4}
                      name="Mensaje"
                      required
                      placeholder="Cuéntanos más sobre lo que necesitas..."
                      className="contact-input resize-none"
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
                    {status === "submitting" ? "Enviando..." : <>Enviar consulta <ArrowRight size={16} /></>}
                  </Button>
                  <SubmitErrorNote show={status === "error"} />
                  <p className="text-center text-xs text-white/42">
                    Al enviar, aceptas nuestra{" "}
                    <Link href="/privacidad" className="underline transition hover:text-white/70">
                      política de privacidad
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SubmitSuccessModal open={status === "success"} onClose={reset} />
    </>
  );
}
