"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, GraduationCap, Upload, Heart, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, GlassCard, Button, IconBox } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";
import { useFormSubmit } from "../lib/useFormSubmit";
import { Honeypot, SubmitSuccessModal, SubmitErrorNote } from "../components/FormFeedback";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const vacantes = [
  { title: "Instructor de IA y Machine Learning", area: "Educación", location: "CDMX / Remoto", type: "Tiempo completo" },
  { title: "Ejecutivo de Ventas B2B", area: "Comercial", location: "CDMX", type: "Tiempo completo" },
  { title: "Diseñador UX/UI Senior", area: "Marketing", location: "Remoto", type: "Tiempo completo" },
  { title: "Coordinador Académico", area: "Operaciones", location: "CDMX", type: "Tiempo completo" },
];

export default function UneteColaborador() {
  const { status, handleSubmit, reset } = useFormSubmit("Nueva postulación · Talento externo");
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Talento · Únete al equipo
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Construye el futuro del talento TI{" "}
              <span className="gradient-text">desde dentro</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              Esto es más que un trabajo. Es la misión de dotar a México de los profesionales que
              liderarán la era digital. ¿Te unes?
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#vacantes">
                Ver vacantes <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="#talento-externo">
                Postúlate como talento externo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── POR QUÉ DEVELOP ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Cultura"
            title="¿Por qué trabajar en Develop?"
            text="Buscamos personas con pasión por la tecnología y un profundo sentido de responsabilidad social."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: "Misión con impacto", desc: "Cada día contribuyes a transformar vidas a través de la educación tecnológica." },
              { icon: GraduationCap, title: "Crecimiento continuo", desc: "Acceso a todas nuestras certificaciones y programas de forma gratuita." },
              { icon: Users, title: "Equipo excepcional", desc: "Trabaja con los mejores especialistas en educación TI de México." },
              { icon: Briefcase, title: "Flexibilidad", desc: "Modelos híbridos y remotos para que encuentres tu equilibrio." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-7">
                  <IconBox variant="light">
                    <item.icon size={22} className="text-develop-blue" />
                  </IconBox>
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-text-secondary">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── VACANTES INTERNAS ───── */}
      <section id="vacantes" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTitle
            kicker="Vacantes"
            title="Vacantes en Develop"
            text="Si vibras con nuestra misión, aquí hay un espacio para ti."
          />

          <div className="mt-14 space-y-4">
            {vacantes.map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <GlassCard className="group p-6 transition-all duration-300 hover:border-develop-plum/20">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-text-primary">{v.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                        <span className="inline-flex items-center gap-1">
                          <Briefcase size={12} /> {v.area}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} /> {v.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={12} /> {v.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm" href="/contacto">
                      Postúlate <ArrowRight size={14} />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-8 text-center">
            <p className="text-sm text-text-muted">
              ¿No ves una vacante que se ajuste a tu perfil?{" "}
              <a href="/contacto" className="font-medium text-develop-blue transition hover:text-develop-plum">
                Envíanos tu CV
              </a>{" "}
              y te contactaremos cuando surja la oportunidad indicada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── TALENTO EXTERNO ───── */}
      <section id="talento-externo" className="relative overflow-hidden premium-dark-surface py-20 lg:py-28">
        <GradientBlob
          className="left-[-150px] top-[-100px] h-[400px] w-[400px] opacity-30"
          style={{ background: "linear-gradient(135deg, rgba(100,3,84,0.4), rgba(41,0,142,0.3))" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Bolsa de Talento Externo
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Que las empresas te encuentren
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/60">
              Sube tu CV a nuestro ecosistema. Si tu perfil encaja, te guiaremos en un proceso de
              capacitación y certificación para presentarte a las mejores oportunidades.
            </p>
          </div>

          <motion.form
            {...fadeUp}
            className="mt-12 space-y-5 rounded-[20px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md sm:rounded-[28px] sm:p-8 lg:p-10"
            onSubmit={handleSubmit}
          >
            <Honeypot />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Nombre completo</label>
                <input
                  type="text"
                  name="Nombre completo"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Correo electrónico</label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Tecnología principal</label>
                <input
                  type="text"
                  name="Tecnología principal"
                  placeholder="Java, React, Python..."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Años de experiencia</label>
                <input
                  type="text"
                  name="Años de experiencia"
                  placeholder="0-1, 1-3, 3-5, 5+"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">CV (descripción breve)</label>
              <textarea
                rows={3}
                name="CV (descripción)"
                required
                placeholder="Describe brevemente tu experiencia, certificaciones y qué tipo de oportunidad buscas..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">Enlace a tu CV (Drive, LinkedIn, portafolio)</label>
              <input
                type="url"
                name="Enlace CV"
                placeholder="https://..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
              />
              <p className="mt-2 flex items-center gap-2 text-xs text-white/40">
                <Upload size={14} /> Comparte el enlace a tu CV en PDF/DOC. Si avanzas, te pediremos el archivo por correo.
              </p>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
              {status === "submitting" ? "Enviando..." : <>Postúlate como talento externo <ArrowRight size={16} /></>}
            </Button>
            <SubmitErrorNote show={status === "error"} />
            <p className="text-center text-xs text-white/40">
              Al enviar, aceptas nuestra{" "}
              <Link href="/privacidad" className="underline transition hover:text-white/70">
                política de privacidad
              </Link>
              .
            </p>
          </motion.form>
        </div>
      </section>

      <SubmitSuccessModal
        open={status === "success"}
        onClose={reset}
        title="¡Postulación recibida!"
        message="Gracias por sumarte a nuestra bolsa de talento. Si tu perfil encaja con una oportunidad, te contactaremos muy pronto."
      />
    </>
  );
}
