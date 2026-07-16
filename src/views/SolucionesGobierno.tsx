"use client";

import React from "react";
import { ArrowRight, Landmark, CheckCircle2, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle, GlassCard, StatCard, Button, IconBox } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function SolucionesGobierno() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Soluciones · Gobierno
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Programas de formación masiva con{" "}
              <span className="gradient-text">impacto social</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              Llevamos la certificación internacional a programas federales y estatales,
              con transparencia total en cada indicador y un impacto económico medible.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contacto">
                Colabora con nosotros <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="/resultados">
                Ver resultados
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── IMPACTO EN NÚMEROS ───── */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="35,000+" label="Beneficiarios" description="Profesionales formados a través de programas gubernamentales." />
            <StatCard value="99%" label="Certificación CONALEP" description="El hito más alto en formación docente TI en México." />
            <StatCard value="15+" label="Estados" description="Cobertura geográfica de nuestros programas de formación." />
            <StatCard value="100%" label="Transparencia" description="Métricas verificables en tiempo real con sistema DQS." />
          </div>
        </div>
      </section>

      {/* ───── SERVICIOS ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Servicios"
            title="Formación masiva con estándares internacionales"
            text="Programas diseñados para escalar a nivel estatal y nacional, con resultados verificables y un modelo replicable."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Landmark,
                title: "Formación Masiva",
                desc: "Programas de certificación a gran escala para docentes, estudiantes y servidores públicos. Probados con CONALEP y gobiernos estatales como Aguascalientes.",
                features: ["Escalabilidad a nivel nacional", "Logística operativa incluida", "Soporte técnico dedicado"],
              },
              {
                icon: BarChart3,
                title: "Impacto Económico",
                desc: "Cada egresado certificado contribuye directamente a la productividad del país. Nuestros indicadores de empleabilidad son el mejor retorno de inversión social.",
                features: ["96% inserción laboral", "Métricas de impacto verificables", "ROI social documentado"],
              },
              {
                icon: Shield,
                title: "Transparencia Total",
                desc: "El sistema DQS permite monitoreo en tiempo real del avance de cada participante. Reportes automáticos para rendición de cuentas.",
                features: ["Dashboard en tiempo real", "Reportes para auditoría", "Trazabilidad completa"],
              },
            ].map((service, i) => (
              <motion.div key={service.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="flex h-full flex-col p-8">
                  <IconBox variant="gradient">
                    <service.icon size={22} />
                  </IconBox>
                  <h3 className="mt-6 text-xl font-bold text-text-primary">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{service.desc}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary">
                        <CheckCircle2 size={15} className="flex-shrink-0 text-develop-plum" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PROGRAMAS GOBIERNO ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                kicker="Iniciativas"
                title="Programas que transforman comunidades"
                text="Nuestro modelo ha sido seleccionado por instituciones federales y estatales para llevar la tecnología a donde más se necesita."
                align="left"
              />
              <motion.div {...fadeUp} className="mt-8 space-y-4">
                {[
                  "CONALEP 2026: Certificación masiva de docentes en Java e Inteligencia Artificial",
                  "Aguascalientes: Programa piloto de IA para universitarios con 90%+ de aprobación",
                  "México First: Alianza estratégica para formación tecnológica a escala nacional",
                  "Programas de becas para comunidades con acceso limitado a la educación TI",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-develop-plum" />
                    <span className="text-sm leading-6 text-text-secondary">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Caso de éxito compacto */}
            <motion.div {...fadeUp}>
              <GlassCard className="p-8" hover={false}>
                <span className="inline-flex rounded-full bg-develop-blue/[0.06] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-develop-blue">
                  Caso destacado
                </span>
                <h3 className="mt-5 text-xl font-bold text-text-primary">
                  CONALEP: Un hito nacional en educación tecnológica
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  En alianza con el gobierno federal, llevamos la certificación internacional en Java
                  a cientos de profesores en todo el país, elevando el nivel de la educación técnica
                  en México. Hoy replicamos el modelo con Inteligencia Artificial.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-black/[0.04] pt-6">
                  <div>
                    <div className="text-xl font-bold text-develop-blue">99%</div>
                    <div className="mt-0.5 text-[10px] text-text-muted">Certificación</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-develop-blue">Nacional</div>
                    <div className="mt-0.5 text-[10px] text-text-muted">Cobertura</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-develop-blue">2026</div>
                    <div className="mt-0.5 text-[10px] text-text-muted">Nueva fase IA</div>
                  </div>
                </div>
                <Button variant="secondary" size="md" href="/resultados" className="mt-6 w-full">
                  Ver más resultados <ArrowRight size={14} />
                </Button>
              </GlassCard>
            </motion.div>
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
                  ¿Diseñamos un programa de formación para tu entidad?
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">
                  Nuestro modelo es replicable, escalable y con resultados probados a nivel nacional.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button variant="primary" size="lg" href="/contacto" className="w-full lg:w-auto">
                  Colabora con nosotros <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
