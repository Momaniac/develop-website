"use client";

import React from "react";
import {
  ArrowRight,
  Rocket,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Target,
  Sparkles,
  Brain,
  Code2,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, Button, IconBox, GlassCard, StatCard, Pill } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stages = [
  {
    phase: "Etapa I",
    title: "Capacitación y Certificación",
    subtitle: "Conocimientos críticos para tu vida profesional",
    items: [
      { label: "CO 1", text: "Remote Work Professional Certification (Certiprof)" },
      { label: "CO 2", text: "Microcredenciales en Fundamentos tecnológicos" },
      { label: "COO", text: "Generative AI Professional Certificate" },
      { label: "COO", text: "User Stories Foundations Certificate" },
      { label: "CA", text: "Especializaciones según perfil y proyecto asignado" },
    ],
  },
  {
    phase: "Etapa II",
    title: "Experiencia Profesional — Fuerzas de Tareas",
    subtitle: "Inmersión en proyectos reales bajo metodología Lead Orchestrator",
    items: [
      { label: "Práctica", text: "Desarrollo en Fuerzas de Tareas con clientes reales" },
      { label: "Seguimiento", text: "Reportes de progreso y métricas de proyecto" },
      { label: "Resultados", text: "Enfoque en entregables medibles para clientes internos y externos" },
      { label: "Metodología", text: "Co-desarrollo con IA y gobierno de agentes inteligentes" },
    ],
  },
  {
    phase: "Etapa III",
    title: "Colocación Profesional",
    subtitle: "Integración directa al mercado laboral tecnológico",
    items: [
      { label: "Vinculación", text: "Categorización de perfiles, presentación de vacantes y procesos de selección con empresas como SYE Software y Google" },
      { label: "Preparación", text: "Entrenamiento para entrevistas, optimización de CV y registro en plataformas de empleo especializadas" },
      { label: "Respaldo", text: "Carta de recomendación oficial y acompañamiento permanente del ecosistema Develop" },
      { label: "Contratación", text: "Posibilidad de contratación directa en SYE Software o para proyectos internos de Software e IA" },
      { label: "KPI", text: "El programa se considera exitoso cuando el egresado obtiene su puesto de trabajo" },
    ],
  },
];

const certPartners = [
  { name: "Pearson VUE / Prometric", desc: "El estándar global en exámenes de certificación." },
  { name: "Certiprof", desc: "Certificados profesionales con reconocimiento internacional." },
  { name: "ATC Android", desc: "Especialización en desarrollo móvil." },
  { name: "Certiport", desc: "Programas de Microsoft, Adobe y Autodesk." },
];

export default function TodoAcademy() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:pb-28 lg:pt-28">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <Pill variant="dark">
                <span className="h-2 w-2 rounded-full bg-accent-glow animate-hero-dot" />
                <span className="text-white/70">Programas · //TODO Academy</span>
              </Pill>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.8rem] xl:leading-[1.1]"
            >
              El horno donde se forjan{" "}
              <span className="gradient-text">
                los A-Players
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
            >
              //TODO Academy es nuestra experiencia de inmersión total diseñada para cerrar la brecha entre
              la academia y las demandas reales de la industria tecnológica. No es un curso más; es una
              transformación profesional completa.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg" href="#inscripcion">
                Ingresa a la Academy <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/contacto">
                Habla con un asesor
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── EL PROPÓSITO ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="El Propósito"
            title="Cerrar la brecha entre la academia y la industria"
            text="Los conocimientos académicos suelen estar desconectados de la realidad. Nuestro ecosistema especializado proporciona las herramientas, la metodología y las certificaciones internacionales que los convierten en ventaja competitiva."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Briefcase, title: "Proyectos Reales", desc: "Participación en fuerzas de tareas que resuelven problemas reales de clientes externos, no ejercicios de libro." },
              { icon: Award, title: "Certificaciones Globales", desc: "Validación de competencias por líderes como Pearson VUE, Oracle y Certiprof con reconocimiento internacional." },
              { icon: Target, title: "Enfoque en Empleabilidad", desc: "Alineación total con los requerimientos de las empresas más importantes del sector tecnológico." },
            ].map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-8">
                  <IconBox variant="gradient"><p.icon size={22} /></IconBox>
                  <h3 className="mt-6 text-lg font-bold text-text-primary">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{p.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ESTRUCTURA DEL PROGRAMA ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTitle
            kicker="Estructura del Programa"
            title="Tres etapas diseñadas para maximizar tu potencial"
            text="Cada fase construye sobre la anterior: de la certificación a la experiencia real, y de la experiencia a tu colocación profesional."
          />

          <div className="mt-14 space-y-4">
            {stages.map((stage, i) => (
              <motion.details
                key={stage.phase}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] open:shadow-[0_16px_50px_rgba(0,0,0,0.06)]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-develop-blue/[0.07] text-sm font-bold text-develop-blue">
                      {stage.phase.split(" ")[1]}
                    </span>
                    <div>
                      <div className="text-base font-semibold text-text-primary">{stage.title}</div>
                      <div className="mt-0.5 text-xs text-text-muted">{stage.subtitle}</div>
                    </div>
                  </div>
                  <ChevronDown size={18} className="text-text-muted transition group-open:rotate-180" />
                </summary>
                <ul className="mt-5 space-y-3 border-t border-black/[0.04] pl-4 pt-5 sm:pl-14">
                  {stage.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-develop-plum" />
                      <span><strong className="text-text-primary">{item.label}:</strong> {item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── MODELO LEAD ORCHESTRATOR EN LA ACADEMY ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Formación de Vanguardia"
            title="El modelo Lead Orchestrator en //TODO Academy"
            text="El desarrollo de software ha evolucionado. Formamos a nuestros alumnos bajo la visión del Lead Orchestrator: el profesional que gobierna la inteligencia artificial."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Code2, title: "Co-desarrollo con IA", desc: "Uso de herramientas como Cursor y VS Code con los modelos de IA más potentes del mercado." },
              { icon: Cpu, title: "Gobierno de Agentes", desc: "Coordinación de equipos de agentes inteligentes que automatizan codificación, pruebas y despliegue." },
              { icon: Brain, title: "Enfoque en Decisiones", desc: "El código se genera, pero la arquitectura y las decisiones estratégicas son del orquestador humano." },
            ].map((m, i) => (
              <motion.div key={m.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-8">
                  <IconBox variant="gradient"><m.icon size={22} /></IconBox>
                  <h3 className="mt-6 text-lg font-bold text-text-primary">{m.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{m.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ECOSISTEMA DE CERTIFICACIÓN ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Ecosistema de Certificación"
            title="Certificados emitidos por las marcas líderes"
            text="Nuestros alumnos obtienen credenciales directamente de los organismos con mayor reconocimiento en la industria global."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certPartners.map((partner, i) => (
              <motion.div key={partner.name} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <GlassCard className="h-full p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-develop-blue/[0.07]">
                    <Award size={22} className="text-develop-blue" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-text-primary">{partner.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-text-secondary">{partner.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── RESULTADOS ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Resultados"
            title="Números que hablan por sí solos"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <motion.div {...fadeUp}><StatCard value="+35,000" label="Alumnos capacitados y certificados en el ecosistema Develop" /></motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}><StatCard value="91%" label="Tasa de éxito en certificación internacional" /></motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}><StatCard value="100%" label="Inserción directa vía empresas globales o división Quary" /></motion.div>
          </div>
        </div>
      </section>

      {/* ───── CTA DE INSCRIPCIÓN ───── */}
      <section id="inscripcion" className="relative overflow-hidden premium-dark-surface py-20 lg:py-28">
        <GradientBlob
          className="left-[30%] top-[-100px] h-[400px] w-[400px] opacity-20"
          style={{ background: "radial-gradient(circle, rgba(100,3,84,0.5), transparent)" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Inscripción
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              ¿Listo para convertirte en el arquitecto de la era de la IA?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/60">
              Completa el formulario y un asesor te contactará para iniciar tu proceso de admisión a //TODO Academy.
            </p>
          </div>

          <motion.form
            {...fadeUp}
            className="mt-12 space-y-5 rounded-[20px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md sm:rounded-[28px] sm:p-8 lg:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Nombre completo</label>
                <input type="text" placeholder="Tu nombre" className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-white/60">Correo electrónico</label>
                <input type="email" placeholder="tu@correo.com" className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">Teléfono</label>
              <input type="tel" placeholder="+52 55 ..." className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">¿Por qué //TODO Academy?</label>
              <textarea rows={3} placeholder="Cuéntanos tu motivación..." className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10" />
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Quiero ser un A-Player <ArrowRight size={16} />
            </Button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
