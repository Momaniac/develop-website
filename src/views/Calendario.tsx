"use client";

import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Sparkles,
  BellRing,
  CheckCircle2,
  Users,
  Database,
  Brain,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, GlassCard, Button, IconBox } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* Próximas aperturas / inscripciones abiertas */
const upcoming = [
  {
    icon: Sparkles,
    title: "Generación Agosto · //TODO Academy",
    when: "Agosto 2026",
    status: "Inscripciones abiertas",
    desc: "Nueva generación de nuestro programa intensivo. Plan de estudios, fechas exactas y becas por confirmar. Aparta tu lugar y sé de los primeros en recibir la información.",
    note: "Información por actualizar",
    cta: { label: "Solicitar información", href: "/contacto" },
  },
];

/* Especialidades con cupo lleno */
const soldOut = [
  { icon: Users, title: "Metodologías Ágiles", partner: "Certiprof", note: "Scrum Master, Product Owner, Kanban" },
  { icon: Database, title: "Bases de Datos e Infraestructura", partner: "Oracle", note: "Introduction to SQL, OCA" },
  { icon: Brain, title: "Inteligencia Artificial", partner: "Certiprof · Develop", note: "Generative AI, Lead Orchestrator" },
  { icon: Smartphone, title: "Desarrollo Móvil y Multimedia", partner: "Android ATC · Unity · Adobe", note: "Android, Unity, Adobe" },
];

export default function Calendario() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md">
                <CalendarDays size={20} className="text-accent-glow" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Programas · Calendario de aperturas
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Calendario de <span className="gradient-text">aperturas</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              Aquí ves de un vistazo qué está por abrir y qué tiene el cupo lleno. Nuestras aperturas
              se publican por calendario para garantizar grupos dinámicos y atención personalizada.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───── PRÓXIMAS APERTURAS ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Próximas aperturas"
            title="Lo que viene"
            text="Generaciones e inscripciones que están por abrir. Aparta tu lugar con anticipación."
          />

          <div className="mx-auto mt-14 max-w-4xl space-y-6">
            {upcoming.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="relative overflow-hidden rounded-[28px] premium-dark-surface p-8 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-10">
                  <GradientBlob
                    className="right-[-80px] top-[-60px] h-[260px] w-[260px] opacity-30"
                    style={{ background: "linear-gradient(135deg, rgba(100,3,84,0.5), rgba(41,0,142,0.4))" }}
                  />
                  <div className="relative z-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-green-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> {item.status}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                          <CalendarDays size={12} /> {item.when}
                        </span>
                      </div>
                      <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-base leading-7 text-white/65">{item.desc}</p>
                      <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                        <Clock size={12} /> {item.note}
                      </p>
                    </div>
                    <div className="flex lg:justify-end">
                      <Button variant="primary" size="lg" href={item.cta.href}>
                        {item.cta.label} <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CUPO LLENO ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Cupo lleno"
            title="Generaciones agotadas"
            text="Estas especialidades alcanzaron su cupo. Déjanos tus datos y te avisamos en cuanto abra la próxima fecha."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {soldOut.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.45, delay: i * 0.08 }}>
                <GlassCard className="h-full p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <IconBox variant="light"><item.icon size={22} className="text-develop-blue" /></IconBox>
                      <div>
                        <h3 className="text-base font-bold text-text-primary">{item.title}</h3>
                        <span className="text-xs font-medium text-text-muted">{item.note}</span>
                      </div>
                    </div>
                    <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-danger/20 bg-danger/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-danger">
                      <span className="h-1.5 w-1.5 rounded-full bg-danger" /> Agotado
                    </span>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-black/[0.05] pt-4">
                    <span className="text-xs text-text-muted">Partner: {item.partner}</span>
                    <a
                      href="/contacto"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-develop-plum transition hover:text-develop-blue"
                    >
                      <BellRing size={13} /> Avísame
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:rounded-[32px] sm:p-10 lg:p-14"
          >
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  ¿No encuentras la fecha que buscas?
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">
                  Publicamos nuevas aperturas con frecuencia. Déjanos tus datos y te avisamos en cuanto
                  se abra la generación o el curso que te interesa.
                </p>
              </div>
              <div className="flex items-center gap-3 lg:justify-end">
                <Button variant="primary" size="lg" href="/contacto">
                  Avísame de próximas fechas <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
