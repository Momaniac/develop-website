"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Globe, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle, GlassCard, StatCard, Button, IconBox } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function SolucionesEmpresas() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Soluciones · Empresas
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
              <Button variant="primary" size="lg" href="#servicios">
                Solicita Talento <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="/soluciones/fabrica-de-talento">
                Conoce la Fábrica
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── SERVICIOS ───── */}
      <section id="servicios" className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Servicios"
            title="Un ecosistema completo para tu talento TI"
            text="Desde la formación a medida hasta el reclutamiento de élite, cubrimos todo el ciclo."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Fábrica de Talento",
                desc: "Co-creamos el perfil que tu proyecto necesita. En 1 a 3 meses, cuentas con talento productivo y alineado a tu cultura.",
                features: ["Perfil personalizado", "Formación a medida", "Entrega en 1-3 meses"],
                cta: "Solicita tu cotización",
                href: "/soluciones/fabrica-de-talento",
              },
              {
                icon: ShieldCheck,
                title: "Top Grading (Quary)",
                desc: "Verificamos historial, competencias y ajuste cultural para minimizar el riesgo de contratación.",
                features: ["Evaluaciones Silicon Valley", "Verificación de historial", "Garantía de calidad"],
                cta: "Explora Quary",
                href: "https://www.quary.mx",
              },
              {
                icon: Globe,
                title: "Nearshoring",
                desc: "Talento mexicano certificado para operaciones cerca de EE.UU. Zona horaria compatible, costos competitivos.",
                features: ["Mismo huso horario", "Certificaciones internacionales", "Inglés verificado"],
                cta: "Conoce más",
                href: "/contacto",
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

                  <Button variant="secondary" size="md" href={service.href} className="mt-7 w-full">
                    {service.cta} <ArrowRight size={14} />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CAPACITACIÓN CORPORATIVA ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                kicker="Capacitación Corporativa"
                title="Certifica a tu equipo con estándares internacionales"
                text="Programas personalizados para elevar las competencias de tus colaboradores en las tecnologías que tu negocio necesita."
                align="left"
              />
              <motion.div {...fadeUp} className="mt-8 space-y-4">
                {[
                  "Programas adaptados a las necesidades de tu empresa",
                  "Certificaciones Oracle, Java, Cloud y más",
                  "Metodología Blended E-Learning con seguimiento DQS",
                  "Reportes de avance en tiempo real",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-develop-plum" />
                    <span className="text-sm leading-6 text-text-secondary">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div {...fadeUp} className="mt-8">
                <Button variant="primary" size="lg" href="/contacto">
                  Agenda una reunión <ArrowRight size={16} />
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard value="91%" label="Certificación" description="El más alto del sector." />
              <StatCard value="500+" label="Empresas" description="Confían en nuestro modelo." />
              <StatCard value="50h" label="Programas Desde" description="Intensivos y efectivos." />
              <StatCard value="24/7" label="Plataforma DQS" description="Monitoreo en tiempo real." />
            </div>
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
                  ¿Listo para resolver tu problema de talento?
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">
                  Cuéntanos qué necesitas y diseñaremos la solución perfecta para tu empresa.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button variant="primary" size="lg" href="/contacto" className="w-full lg:w-auto">
                  Solicita Talento <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
