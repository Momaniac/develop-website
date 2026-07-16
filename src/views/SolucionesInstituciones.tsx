"use client";

import React from "react";
import { ArrowRight, BookOpen, Users, CheckCircle2, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle, GlassCard, StatCard, Button, IconBox } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function SolucionesInstituciones() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Soluciones · Instituciones Educativas
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Lleva formación de clase mundial a{" "}
              <span className="gradient-text">tus aulas</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              Integra nuestras certificaciones y metodología DQS en tu currícula.
              Casos de éxito con CONALEP, ANIEI y universidades de todo México lo respaldan.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/contacto">
                Agenda una reunión <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="/resultados">
                Ver convenios
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── SERVICIOS ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Servicios"
            title="Un modelo probado para transformar la educación TI"
            text="Desde la integración curricular hasta la certificación docente, acompañamos a tu institución en cada paso."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Cursos Universitarios Certificados",
                desc: "Programas diseñados para integrarse en tu plan de estudios sin sustituirlo. Tus alumnos obtienen certificaciones internacionales Oracle, Java y Cloud como parte de su formación académica.",
                features: ["Certificaciones reconocidas mundialmente", "Integración con planes de estudio vigentes", "Evaluaciones alineadas a estándares internacionales"],
                cta: "Solicita información",
                href: "/contacto",
              },
              {
                icon: Monitor,
                title: "Integración Curricular (DQS)",
                desc: "Nuestro sistema de calidad DQS monitorea en tiempo real el avance de cada alumno, garantizando estándares de enseñanza medibles y transparentes.",
                features: ["Monitoreo en tiempo real", "Reportes de avance automáticos", "Dashboard para coordinadores académicos"],
                cta: "Conoce el sistema DQS",
                href: "/contacto",
              },
              {
                icon: Users,
                title: "Certificación Docente",
                desc: "Formamos a tus profesores para que sean agentes de cambio tecnológico. Con nuestro programa, CONALEP logró certificar al 99% de su cuerpo docente.",
                features: ["Programas para profesores en activo", "Metodología Blended E-Learning", "Caso CONALEP: 99% certificación"],
                cta: "Solicita tu programa",
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

      {/* ───── CONVENIOS Y ALIANZAS ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                kicker="Programas de Colaboración"
                title="Alianzas que transforman la educación en México"
                text="Trabajamos con instituciones públicas y privadas para llevar la certificación internacional a todos los rincones del país, sin que la distancia sea una barrera."
                align="left"
              />
              <motion.div {...fadeUp} className="mt-8 space-y-4">
                {[
                  "Convenios con CONALEP para certificación masiva a nivel nacional",
                  "Colaboración con ANIEI para estandarización curricular",
                  "Programas especiales para universidades públicas y privadas",
                  "Modalidad Blended E-Learning adaptada a infraestructura existente",
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
              <StatCard value="99%" label="CONALEP" description="Docentes certificados en todo el país." />
              <StatCard value="500+" label="Instituciones" description="Confían en nuestro modelo educativo." />
              <StatCard value="91%" label="Certificación" description="Tasa de éxito de nuestros alumnos." />
              <StatCard value="24/7" label="Plataforma DQS" description="Monitoreo en tiempo real." />
            </div>
          </div>
        </div>
      </section>

      {/* ───── CASO DE ÉXITO ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.figure
            {...fadeUp}
            className="relative rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-10 lg:p-14"
          >
            <span className="inline-flex rounded-full bg-develop-blue/[0.06] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-develop-blue">
              Caso de éxito
            </span>
            <h3 className="mt-5 text-2xl font-bold text-text-primary sm:text-3xl">
              CONALEP: 99% de docentes certificados en Java
            </h3>
            <p className="mt-4 text-base leading-8 text-text-secondary">
              En alianza con el gobierno federal, logramos un hito histórico: llevar la certificación
              internacional en Java a cientos de profesores de todo el país, elevando el nivel de la
              educación técnica en México. Hoy replicamos el modelo con Inteligencia Artificial.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/[0.04] pt-8">
              <div>
                <div className="text-2xl font-bold text-develop-blue">99%</div>
                <div className="mt-1 text-xs text-text-muted">Certificación docente</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-develop-blue">Nacional</div>
                <div className="mt-1 text-xs text-text-muted">Cobertura</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-develop-blue">Java + IA</div>
                <div className="mt-1 text-xs text-text-muted">Tecnologías</div>
              </div>
            </div>
          </motion.figure>
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
                  ¿Listo para transformar tu institución?
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">
                  Diseñamos un programa a la medida de tu currícula y tus necesidades institucionales.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button variant="primary" size="lg" href="/contacto" className="w-full lg:w-auto">
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
