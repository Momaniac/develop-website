"use client";

import React from "react";
import {
  ArrowRight,
  Users,
  Target,
  Search,
  Clock,
  BarChart3,
  GraduationCap,
  Building2,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle, Button, IconBox, GlassCard, StatCard } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const methodology = [
  {
    stage: "1",
    title: "Nivelación",
    focus: "Soft Skills y Valores",
    desc: "Ética, adaptabilidad, iniciativa y efectividad personal. Construimos las bases humanas antes de las técnicas.",
    icon: Users,
  },
  {
    stage: "2",
    title: "Aceleración",
    focus: "Capacitación Técnica",
    desc: "Dominio de tecnologías específicas, liderazgo técnico y tolerancia a la frustración en entornos de alta presión.",
    icon: Zap,
  },
  {
    stage: "3",
    title: "Vinculación",
    focus: "Integración Laboral",
    desc: "Transición fluida a la estructura operativa y administrativa de tu empresa. El talento llega listo para producir.",
    icon: Building2,
  },
];

const lifecycle = [
  {
    phase: "Prospección",
    time: "2–4 semanas",
    desc: "Definimos el perfil, las plazas disponibles y diseñamos el programa de formación a la medida de tu proyecto.",
    icon: Search,
  },
  {
    phase: "Lanzamiento",
    time: "3–6 semanas",
    desc: "Reclutamiento masivo, evaluaciones técnicas rigurosas y aplicación de nuestra psicometría orgánica.",
    icon: Sparkles,
  },
  {
    phase: "Aceleración",
    time: "6–12 semanas",
    desc: "Formación intensiva, exámenes de certificación y selección final de los mejores elementos para tu operación.",
    icon: Zap,
  },
];

const operationModels = [
  {
    title: "Fábrica de Talento",
    subtitle: "1 a 3 meses",
    desc: "Ideal para perfiles con bases técnicas que necesitan especialización final para un proyecto inmediato. Formación acelerada y enfocada.",
    icon: Target,
  },
  {
    title: "//TODO Academy",
    subtitle: "4 a 6 meses",
    desc: "Diseñado para maximizar el potencial de recién egresados y convertirlos en A-Players antes de su contratación.",
    icon: GraduationCap,
  },
];

export default function FabricaTalento() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Soluciones · Fábrica de Talento
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Co-creamos el perfil que{" "}
              <span className="gradient-text">tu proyecto necesita</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              En un mercado donde las vacantes TI se duplican cada 3 años mientras el número de
              egresados se reduce, el reclutamiento tradicional ya no es suficiente. Junto a nuestra
              división de talento <strong className="text-white">Quary</strong>, hemos
              perfeccionado un modelo de academia personalizada que garantiza perfiles productivos,
              certificados y alineados a la cultura de tu empresa.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contacto">
                Solicita tu Fábrica de Talento <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="/talento/encuentra-talento">
                Conoce el método Quary
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── EL PROBLEMA ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="El Desafío"
            title="La brecha de talento es real"
            text="Menos del 40% de los perfiles TI cuentan con las habilidades adecuadas para sus funciones. La industria enfrenta un problema estructural."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Search, title: "Escasez Crítica", desc: "Dificultad para encontrar perfiles que combinen dominio técnico con las soft skills que tu operación requiere." },
              { icon: Clock, title: "Retrasos Operativos", desc: "El tiempo de búsqueda limita el arranque de proyectos estratégicos. Cada semana sin talento es un costo." },
              { icon: Target, title: "Nuestra Respuesta", desc: "No buscamos el talento; lo fabricamos con precisión quirúrgica, bajo tus estándares y en tu timeline." },
            ].map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-8">
                  <IconBox variant={i === 2 ? "gradient" : "light"}><p.icon size={22} /></IconBox>
                  <h3 className="mt-6 text-lg font-bold text-text-primary">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{p.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PROPUESTA DE VALOR: QUARY + DEVELOP ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Propuesta de Valor"
            title="El ecosistema Quary + Develop"
            text="Al unir la autoridad educativa de Develop con la ciencia del reclutamiento de Quary, ofrecemos un alcance sin precedentes."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <motion.div {...fadeUp}><StatCard value="700+" label="Instituciones educativas aliadas en todo México" /></motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}><StatCard value="50,000+" label="Profesionales en nuestra base de datos activa" /></motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}><StatCard value="1,000+" label="Nuevos aspirantes por semana ingresando al ecosistema" /></motion.div>
          </div>
        </div>
      </section>

      {/* ───── METODOLOGÍA: ACADEMIA PERSONALIZADA ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Metodología"
            title="La Academia Personalizada"
            text="Habilitamos grupos de ingenieros mediante un programa de inmersión estructurado en tres niveles."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {methodology.map((m, i) => (
              <motion.div key={m.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="relative h-full overflow-hidden p-8">
                  <div className="absolute right-4 top-4 text-6xl font-black text-black/[0.03]">{m.stage}</div>
                  <IconBox variant="gradient"><m.icon size={22} /></IconBox>
                  <h3 className="mt-6 text-lg font-bold text-text-primary">{m.title}</h3>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-develop-plum">{m.focus}</div>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{m.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── MODELOS DE OPERACIÓN ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Modelos de Operación"
            title="Adaptamos la profundidad según tu urgencia"
            text="Dos modalidades que se ajustan al nivel del perfil y la inmediatez de tu necesidad."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {operationModels.map((model, i) => (
              <motion.div key={model.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-8">
                  <div className="flex items-center gap-4">
                    <IconBox variant="gradient"><model.icon size={22} /></IconBox>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{model.title}</h3>
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-develop-plum">{model.subtitle}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">{model.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CICLO DE VIDA ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Ciclo de Vida"
            title="Del kickoff a la productividad"
            text="Un proceso transparente y medible en cada fase, desde la definición del perfil hasta la entrega de talento listo."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {lifecycle.map((step, i) => (
              <motion.div key={step.phase} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="relative h-full p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-develop-blue/[0.07] text-sm font-bold text-develop-blue">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-text-primary">{step.phase}</h3>
                      <span className="text-xs text-text-muted">{step.time}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-text-secondary">{step.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PSICOMETRÍA ORGÁNICA ───── */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-10 lg:p-14"
          >
            <div className="flex items-start gap-5">
              <IconBox variant="gradient" className="flex-shrink-0"><BarChart3 size={24} /></IconBox>
              <div>
                <h3 className="text-xl font-bold text-text-primary sm:text-2xl">Nuestra Ventaja Científica: Psicometría Orgánica</h3>
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  No evaluamos solo una vez. Utilizamos el sistema <strong className="text-text-primary">Psicotest</strong> de
                  forma continua para medir la curva de aprendizaje, la facilidad de adaptación y el patrón de desempeño
                  de cada candidato. Esto asegura que el talento que recibes no solo sepa programar, sino que sepa
                  evolucionar dentro de tu organización.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:rounded-[32px] sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Listo para dejar de buscar y empezar a contratar?</h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">Platiquemos sobre cómo fabricar el talento exacto que tu proyecto necesita.</p>
              </div>
              <div className="flex lg:justify-end">
                <Button variant="primary" size="lg" href="/contacto">Solicita tu Fábrica <ArrowRight size={16} /></Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
