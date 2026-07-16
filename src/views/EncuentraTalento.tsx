"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Filter, ShieldCheck, Users, CheckCircle2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, GlassCard, Button, IconBox, Pill } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";
import { useFormSubmit } from "../lib/useFormSubmit";
import { Honeypot, SubmitSuccessModal, SubmitErrorNote } from "../components/FormFeedback";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const talentProfiles = [
  { role: "Desarrollador Backend Sr.", skills: ["Java", "Spring Boot", "Oracle"], experience: "5 años", english: "Avanzado", cert: "Oracle Certified" },
  { role: "Full Stack Developer", skills: ["React", "Node.js", "TypeScript"], experience: "3 años", english: "Intermedio", cert: "//TODO Academy" },
  { role: "Lead Orchestrator IA", skills: ["Python", "LangChain", "MCP"], experience: "2 años", english: "Avanzado", cert: "Lead Orchestrator" },
  { role: "DevOps Engineer", skills: ["AWS", "Docker", "CI/CD"], experience: "4 años", english: "Avanzado", cert: "Cloud Foundations" },
  { role: "QA Automation", skills: ["Selenium", "Java", "Cypress"], experience: "3 años", english: "Intermedio", cert: "Java SE" },
  { role: "Desarrollador Android", skills: ["Kotlin", "Firebase", "REST"], experience: "2 años", english: "Intermedio", cert: "Oracle Mobile" },
];

export default function EncuentraTalento() {
  const { status, handleSubmit, reset } = useFormSubmit("Nueva solicitud · Solicita talento (Quary)");
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Talento · Para Empresas
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              El talento que necesitas,{" "}
              <span className="gradient-text">donde otros no pueden encontrarlo</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              Olvídate del 82% de dificultad en contratación. Nuestro ecosistema te entrega perfiles
              certificados, evaluados con Top Grading y listos para producir desde el primer día.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#solicita">
                Solicita Talento <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="https://www.quary.mx">
                Conoce nuestros servicios
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── BUSCADOR DE PERFILES ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Perfiles disponibles"
            title="Talento certificado y listo"
            text="Explora perfiles anonimizados de profesionales evaluados con nuestro método Top Grading."
          />

          {/* Filtros */}
          <motion.div {...fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["Todos", "Java", "React", "Python", "Cloud", "IA", "DevOps"].map((filter) => (
              <button
                key={filter}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  filter === "Todos"
                    ? "border-develop-blue bg-develop-blue text-white"
                    : "border-black/10 bg-white text-text-secondary hover:border-develop-plum hover:text-develop-plum"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Grid de perfiles */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {talentProfiles.map((profile, i) => (
              <motion.div key={profile.role} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <GlassCard className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-develop-blue/[0.07]">
                      <Briefcase size={18} className="text-develop-blue" />
                    </div>
                    <span className="rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-success">
                      Disponible
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-text-primary">{profile.role}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {profile.skills.map((skill) => (
                      <span key={skill} className="inline-flex rounded-full border border-black/10 bg-white px-2.5 py-1 text-[11px] font-medium text-text-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2 border-t border-black/[0.04] pt-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Experiencia</span>
                      <span className="font-medium text-text-primary">{profile.experience}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Inglés</span>
                      <span className="font-medium text-text-primary">{profile.english}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-muted">Certificación</span>
                      <span className="font-medium text-develop-plum">{profile.cert}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PROCESO TOP GRADING ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                kicker="Método Quary"
                title="Más allá del currículum: la evaluación definitiva"
                text="Quary, nuestra división de reclutamiento, aplica el modelo Top Grading para asegurar que cada candidato es un &quot;A-Player&quot;."
                align="left"
              />
              <motion.div {...fadeUp} className="mt-8 space-y-4">
                {[
                  "Verificación exhaustiva de historial profesional",
                  "Evaluación de competencias técnicas con estándares Silicon Valley",
                  "Análisis de ajuste cultural con tu organización",
                  "Garantía de calidad en cada contratación",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-develop-plum" />
                    <span className="text-sm leading-6 text-text-secondary">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div {...fadeUp} className="mt-8">
                <Button variant="primary" size="lg" href="https://www.quary.mx">
                  Explora el universo Quary <ArrowRight size={16} />
                </Button>
              </motion.div>
            </div>

            <motion.div {...fadeUp}>
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} className="text-develop-blue" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
                    Método Top Grading
                  </span>
                </div>
                <div className="mt-6 space-y-5">
                  {[
                    { step: "1", title: "Screening Inicial", desc: "Filtrado de perfiles por tecnología, experiencia y certificaciones." },
                    { step: "2", title: "Evaluación Técnica", desc: "Pruebas prácticas y entrevistas con expertos de la industria." },
                    { step: "3", title: "Verificación de Historial", desc: "Comprobación de referencias, trayectoria y logros verificables." },
                    { step: "4", title: "Match Cultural", desc: "Evaluación de compatibilidad con la cultura de tu empresa." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-develop-blue/[0.07] text-xs font-bold text-develop-blue">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-text-primary">{item.title}</div>
                        <div className="mt-0.5 text-xs leading-5 text-text-secondary">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── FORMULARIO SOLICITA TALENTO ───── */}
      <section id="solicita" className="relative overflow-hidden premium-dark-surface py-20 lg:py-28">
        <GradientBlob
          className="right-[-100px] top-[-100px] h-[400px] w-[400px] opacity-20"
          style={{ background: "radial-gradient(circle, rgba(100,3,84,0.5), transparent)" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Solicita talento
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              Cuéntanos qué perfil necesitas
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/60">
              Completa el formulario y nuestro equipo Quary te contactará en menos de 24 horas.
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
                <label className="mb-1.5 block text-xs font-medium text-white/60">Empresa</label>
                <input
                  type="text"
                  name="Empresa"
                  required
                  placeholder="Nombre de tu empresa"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Contacto</label>
                <input
                  type="text"
                  name="Contacto"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Email corporativo</label>
                <input
                  type="email"
                  name="Email corporativo"
                  required
                  placeholder="tu@empresa.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Número de posiciones</label>
                <input
                  type="number"
                  name="Número de posiciones"
                  placeholder="1"
                  min="1"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">Tecnologías requeridas</label>
              <input
                type="text"
                name="Tecnologías requeridas"
                placeholder="Java, React, Python, AWS..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">Descripción del perfil</label>
              <textarea
                rows={3}
                name="Descripción del perfil"
                required
                placeholder="Describe el perfil ideal, experiencia requerida, nivel de inglés..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
              {status === "submitting" ? "Enviando..." : <>Solicitar talento <ArrowRight size={16} /></>}
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
        title="¡Solicitud recibida!"
        message="Gracias por confiar en Quary. Nuestro equipo te contactará en menos de 24 horas con los perfiles que se ajusten a lo que necesitas."
      />
    </>
  );
}
