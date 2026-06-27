"use client";

import React from "react";
import { TrendingUp, Users, Award, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, GlassCard, StatCard, Button } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";
import { MoonoPeek } from "../components/Moono";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const cases = [
  {
    tag: "Gobierno",
    title: "CONALEP: 99% de docentes certificados",
    desc: "En alianza con el gobierno federal, logramos un hito histórico: llevar la certificación internacional en Java a cientos de profesores de todo el país, elevando el nivel de la educación técnica en México.",
    metric: "99%",
    metricLabel: "Docentes certificados",
  },
  {
    tag: "Empresa",
    title: "Accenture: Talento listo para producir",
    desc: "A través de nuestra Fábrica de Talento, formamos perfiles específicos para proyectos de alta demanda, reduciendo el tiempo de integración a semanas en lugar de meses.",
    metric: "3x",
    metricLabel: "Más rápido en integración",
  },
  {
    tag: "Educación",
    title: "Aguascalientes: Formación masiva en IA",
    desc: "Programa piloto de certificación en inteligencia artificial para estudiantes universitarios, con tasas de aprobación superiores al 90%.",
    metric: "90%+",
    metricLabel: "Tasa de aprobación",
  },
];

export default function Resultados() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Resultados
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Las cifras que nos respaldan,{" "}
              <span className="gradient-text">las personas que nos inspiran</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              Transparencia total en cada indicador. Nuestro éxito se mide en la empleabilidad
              de nuestros egresados y en la satisfacción de las empresas que confían en nosotros.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───── DASHBOARD DE MÉTRICAS ───── */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="35,000+" label="Talentos Certificados" description="Profesionales formados con certificaciones internacionales desde 2007." />
            <StatCard value="91%" label="Tasa de Certificación" description="El índice más alto del sector educativo TI en Latinoamérica." />
            <StatCard value="500+" label="Instituciones Aliadas" description="Universidades, CONALEPs y centros de formación en todo México." />
            <StatCard value="96%" label="Inserción Laboral" description="Egresados que consiguen empleo en los primeros 3 meses, apoyados por Quary." />
          </div>
        </div>
      </section>

      {/* ───── CASOS DE ÉXITO ───── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <MoonoPeek className="left-2 top-4 sm:left-10" size={68} chance={0.5} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Casos de Éxito"
            title="Historias que demuestran resultados reales"
            text="Cada caso refleja la aplicación directa de nuestro modelo Academia-Industria-Gobierno."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {cases.map((c, i) => (
              <motion.div key={c.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="flex h-full flex-col p-8">
                  <span className="inline-flex w-fit rounded-full bg-develop-blue/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-develop-blue">
                    {c.tag}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-text-primary">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">{c.desc}</p>

                  <div className="mt-6 rounded-2xl bg-surface p-5">
                    <div className="text-3xl font-bold tracking-tight text-develop-blue">
                      {c.metric}
                    </div>
                    <div className="mt-1 text-xs text-text-muted">{c.metricLabel}</div>
                  </div>

                  <button className="mt-5 flex items-center gap-2 text-sm font-medium text-develop-blue transition hover:gap-3">
                    Lee el caso completo <ArrowRight size={14} />
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:rounded-[32px] sm:p-10 lg:p-14"
          >
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  ¿Quieres resultados similares para tu organización?
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">
                  Platiquemos sobre cómo nuestro modelo puede adaptarse a tus necesidades.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Button variant="primary" size="lg" href="/contacto">
                  Agenda una reunión <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
