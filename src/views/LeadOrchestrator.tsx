"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Clock,
  Award,
  Users,
  ChevronDown,
  Sparkles,
  Rocket,
  Shield,
  GitBranch,
  Zap,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, Button, IconBox, GlassCard, Pill } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";
import { useFormSubmit } from "../lib/useFormSubmit";
import { Honeypot, SubmitSuccessModal, SubmitErrorNote } from "../components/FormFeedback";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const routePhases = [
  {
    phase: "Fase I",
    title: "Certificación Internacional",
    hours: "Validación global",
    topics: [
      "Capacitación Obligatoria: Remote Work Professional Certification (Certiprof)",
      "Microcredenciales en Fundamentos tecnológicos",
      "Especialización en IA: Certificado Profesional en IA Generativa",
      "Respaldo de Pearson VUE, Oracle y Certiprof",
    ],
  },
  {
    phase: "Fase II",
    title: "Experiencia Real — Fuerzas de Tareas",
    hours: "Proyectos de industria",
    topics: [
      "Integración en equipos que resuelven proyectos reales de la industria",
      "Asignación por talento: según tus intereses y capacidades",
      "Metodología de alto rendimiento con métricas y seguimiento",
      "Entrega de resultados bajo estándares de calidad internacional",
    ],
  },
  {
    phase: "Fase III",
    title: "Despegue Profesional",
    hours: "Empleabilidad directa",
    topics: [
      "Optimización de CV y preparación para entrevistas de alto nivel",
      "Acceso directo a vacantes en el ecosistema Develop y Quary",
      "Posibilidad de contratación directa en SYE Software",
      "Comunidad permanente de networking y respaldo profesional",
    ],
  },
];

const agentTypes = [
  { icon: Layers, title: "Agentes de Gestión", desc: "PMO, análisis y documentación técnica automatizada." },
  { icon: Code2, title: "Agentes Técnicos", desc: "Especialistas en programación, testing, QA y DevSecOps." },
  { icon: Sparkles, title: "Agentes de Experiencia", desc: "Diseño UX/UI y producción multimedia impulsada por IA." },
  { icon: Network, title: "Conectividad Total", desc: "Integración vía MCP con GitHub, Slack, AWS y Google Docs." },
];

export default function LeadOrchestrator() {
  const { status, handleSubmit, reset } = useFormSubmit("Nueva postulación · Lead Orchestrator");
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div {...fadeUp}>
                <Pill variant="dark">
                  <span className="h-2 w-2 rounded-full bg-accent-glow animate-hero-dot" />
                  <span className="text-white/70">Programa de vanguardia · 2026</span>
                </Pill>
              </motion.div>

              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.08]"
              >
                No enseñamos a usar la IA.{" "}
                <span className="gradient-text">
                  Enseñamos a gobernarla.
                </span>
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
              >
                El desarrollo de software ha cambiado para siempre. Ya no se trata de escribir código,
                sino de orquestar la inteligencia. Transfórmate en el líder que diseña, supervisa y
                gobierna ecosistemas de agentes autónomos.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Button variant="primary" size="lg" href="#inscripcion">
                  Conviértete en Lead Orchestrator <ArrowRight size={18} />
                </Button>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/50 sm:gap-8"
              >
                <div className="flex items-center gap-2">
                  <Clock size={16} /> Programa completo
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} /> Certificaciones internacionales
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} /> Cupo limitado
                </div>
              </motion.div>
            </div>

            {/* Right: Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex lg:items-center lg:justify-center"
            >
              <div className="relative h-[400px] w-[400px]">
                {/* Orbiting rings */}
                <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                <div className="absolute inset-[40px] rounded-full border border-white/[0.08]" />
                <div className="absolute inset-[80px] rounded-full border border-white/[0.12]" />

                {/* Center brain */}
                <div className="absolute inset-[110px] flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(100,3,84,0.6),rgba(41,0,142,0.6))] shadow-[0_0_60px_rgba(100,3,84,0.3)]">
                  <Brain size={48} className="text-white/80" />
                </div>

                {/* Orbiting nodes */}
                <div className="absolute left-[10px] top-[50%] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-md animate-float">
                  <Code2 size={20} className="text-white/70" />
                </div>
                <div className="absolute right-[10px] top-[30%] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md animate-float-delayed">
                  <Cpu size={20} className="text-white/70" />
                </div>
                <div className="absolute bottom-[30px] left-[50%] flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-md animate-float">
                  <Layers size={20} className="text-white/70" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── LA EVOLUCIÓN ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="La Evolución"
            title="Del código a la orquestación"
            text="El camino hacia la madurez tecnológica pasa por tres etapas. Te preparamos para la que define el futuro."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                step: "01",
                title: "Vibe Coding",
                desc: "Interactúas directamente con LLMs para generar lógica de alto nivel. El código es una conversación.",
                opacity: "opacity-60",
              },
              {
                icon: Cpu,
                step: "02",
                title: "Editores de Nueva Generación",
                desc: "Dominio de herramientas como Cursor y VS Code, integradas con los modelos más potentes: Claude y Gemini.",
                opacity: "opacity-80",
              },
              {
                icon: Brain,
                step: "03",
                title: "Desarrollo Agéntico (MCP)",
                desc: "La IA no solo sugiere código: resuelve problemas complejos con contexto real mediante el Model Context Protocol.",
                opacity: "opacity-100",
              },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className={`h-full p-8 ${item.opacity}`}>
                  <div className="flex items-center justify-between">
                    <IconBox variant={i === 2 ? "gradient" : "light"}>
                      <item.icon size={22} />
                    </IconBox>
                    <span className="text-3xl font-bold text-black/[0.06]">{item.step}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ORQUESTACIÓN A2A ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Nivel Maestro"
            title="Orquestación Agent-to-Agent (A2A)"
            text="En las etapas más avanzadas, el rol humano evoluciona hacia la supervisión estratégica. Lidera un equipo donde múltiples agentes especializados colaboran bajo tu mando."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agentTypes.map((agent, i) => (
              <motion.div key={agent.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <GlassCard className="h-full p-6 text-center">
                  <IconBox variant="gradient" className="mx-auto">
                    <agent.icon size={22} />
                  </IconBox>
                  <h3 className="mt-5 text-base font-bold text-text-primary">{agent.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{agent.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="mx-auto mt-10 max-w-2xl text-center text-base leading-7 text-text-secondary">
            Tú no eres un operario; eres el <strong className="text-text-primary">Lead Orchestrator</strong> que asegura que cada pieza encaje.
          </motion.p>
        </div>
      </section>

      {/* ───── RUTA DEL PARTICIPANTE ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTitle
            kicker="Ruta del Participante"
            title="De la teoría a la industria"
            text="Un modelo operativo probado por múltiples generaciones de expertos, dividido en tres fases críticas."
          />

          <div className="mt-14 space-y-4">
            {routePhases.map((module, i) => (
              <motion.details
                key={module.phase}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] open:shadow-[0_16px_50px_rgba(0,0,0,0.06)]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-develop-blue/[0.07] text-sm font-bold text-develop-blue">
                      {module.phase.split(" ")[1]}
                    </span>
                    <div>
                      <div className="text-base font-semibold text-text-primary">{module.title}</div>
                      <div className="mt-0.5 text-xs text-text-muted">{module.hours}</div>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className="text-text-muted transition group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-5 space-y-3 border-t border-black/[0.04] pl-4 pt-5 sm:pl-14">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-develop-plum" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BENEFICIOS ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Beneficios Exclusivos"
            title="Lo que solo el ecosistema Develop puede ofrecerte"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Respaldo SYE Software", desc: "Una de las empresas líderes en desarrollo de software en la región respalda tu formación y tu inserción profesional." },
              { icon: Award, title: "Becas de Certificación", desc: "Acceso a exámenes internacionales financiados por el programa. Tu inversión se traduce directamente en credenciales." },
              { icon: Users, title: "Comunidad de por Vida", desc: "Una vez dentro del ecosistema Lead Orchestrator, cuentas con nuestra red de contactos y respaldo profesional de forma permanente." },
            ].map((b, i) => (
              <motion.div key={b.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-8">
                  <IconBox variant="gradient"><b.icon size={22} /></IconBox>
                  <h3 className="mt-6 text-lg font-bold text-text-primary">{b.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{b.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FORMULARIO DE INSCRIPCIÓN ───── */}
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
              El futuro del desarrollo ya llegó. ¿Estás listo para gobernarlo?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/60">
              Completa el formulario y en menos de 48 horas recibirás información para continuar tu proceso de admisión.
            </p>
          </div>

          <motion.form
            {...fadeUp}
            className="mt-12 space-y-5 rounded-[20px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md sm:rounded-[28px] sm:p-8 lg:p-10"
            onSubmit={handleSubmit}
          >
            <Honeypot />
            <input type="hidden" name="Programa" value="Lead Orchestrator" />
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
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">Teléfono</label>
              <input
                type="tel"
                name="Teléfono"
                placeholder="+52 55 ..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/60">Motivación</label>
              <textarea
                rows={3}
                name="Motivación"
                placeholder="Cuéntanos por qué te interesa gobernar agentes inteligentes..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
              {status === "submitting" ? "Enviando..." : <>Postúlate al programa <ArrowRight size={16} /></>}
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
        message="Gracias por tu interés en Lead Orchestrator. En menos de 48 horas recibirás información para continuar tu proceso de admisión."
      />
    </>
  );
}
