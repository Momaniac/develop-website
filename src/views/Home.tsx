"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Building2,
  GraduationCap,
  Landmark,
  Users,
  Award,
  TrendingUp,
  ShieldCheck,
  Zap,
  BookOpen,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, GlassCard, SectionTitle, StatCard, Pill, Button, IconBox } from "../components/ui";
import HeroFluidIntelligence from "../components/HeroFluidIntelligence";
import { MoonoPeek } from "../components/Moono";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark">
        {/* WebGL fluid intelligence layer */}
        <HeroFluidIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Content */}
            <div>
              <motion.div {...fadeUp}>
                <Pill variant="dark">
                  <span className="h-2 w-2 rounded-full bg-accent-glow animate-hero-dot" />
                  <span className="text-white/70">Ecosistema de talento TI</span>
                </Pill>
              </motion.div>

              {/* El H1 es el elemento LCP: se pinta ya (opacity 1), solo desliza — no espera al fade. */}
              <motion.h1
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.2rem] xl:leading-[1.05]"
              >
                Formamos a los arquitectos de la{" "}
                <span className="gradient-text">era de la inteligencia artificial</span>
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
              >
                Certifica a tu equipo o conviértete en el profesional que el mundo necesita.
                Cerramos la brecha de talento con el <strong className="text-white">91% de éxito</strong> en certificación internacional.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Button variant="primary" size="lg" href="#programas">
                  Descubre cómo <ArrowRight size={18} />
                </Button>
                <Button variant="outline" size="lg" href="/resultados">
                  Conoce sus historias
                </Button>
              </motion.div>
            </div>

            {/* Right: Stats Cluster */}
            <div className="relative hidden min-h-[420px] items-center justify-center sm:flex lg:min-h-[520px]">
              {/* Floating StatCards — glassmorphic dark */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-[5%] top-[35%] z-10 animate-float"
              >
                <div className="w-[210px] rounded-2xl border border-white/[0.12] bg-white/[0.07] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <div className="text-xs font-medium tracking-wider text-white/50">Certificados globalmente</div>
                  <div className="mt-1.5 text-3xl font-extrabold tracking-tight text-white">
                    35K<span className="text-accent-pink">+</span>
                  </div>
                  <div className="mt-2 text-xs leading-5 text-white/45">Talento formado y certificado internacionalmente.</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-[10%] right-[5%] z-10 animate-float-delayed"
              >
                <div className="w-[200px] rounded-2xl border border-white/[0.12] bg-white/[0.07] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                  <div className="text-xs font-medium tracking-wider text-white/50">Tasa de certificación</div>
                  <div className="mt-1.5 text-3xl font-extrabold tracking-tight text-white">
                    91<span className="text-accent-glow">%</span>
                  </div>
                  <div className="mt-2 text-xs leading-5 text-white/45">Garantizamos tu futuro profesional.</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SELECTOR DE PERFIL ───── */}
      <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <MoonoPeek className="bottom-2 right-3 sm:right-8" size={72} chance={0.55} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Ecosistema"
            title="El ecosistema Develop se adapta a ti"
            text="¿Qué necesitas hoy? Selecciona tu perfil y descubre cómo podemos ayudarte."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Soy Estudiante",
                desc: "Certifícate internacionalmente con el respaldo de los líderes de la industria.",
                href: "/soluciones/estudiantes",
                color: "text-develop-violet",
              },
              {
                icon: Building2,
                title: "Soy Empresa",
                desc: "Accede al talento listo para el mercado y reduce el costo de contratación.",
                href: "/soluciones/empresas",
                color: "text-develop-blue",
              },
              {
                icon: BookOpen,
                title: "Soy Institución",
                desc: "Lleva formación de clase mundial a tus aulas con metodología probada.",
                href: "/soluciones/instituciones",
                color: "text-develop-plum",
              },
              {
                icon: Landmark,
                title: "Soy Gobierno",
                desc: "Programas de formación masiva con impacto social y transparencia total.",
                href: "/soluciones/gobierno",
                color: "text-develop-blue",
              },
            ].map((card, i) => (
              <motion.div key={card.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link href={card.href}>
                  <GlassCard className="group relative h-full p-7 transition-all duration-300 hover:border-develop-plum/20">
                    <IconBox variant="light">
                      <card.icon size={22} className={card.color} />
                    </IconBox>
                    <h3 className="mt-5 text-lg font-semibold text-text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-text-secondary">
                      {card.desc}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-develop-blue opacity-0 transition group-hover:opacity-100">
                      Descubrir <ArrowRight size={14} />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── STATS BAND ───── */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="35,000+" label="Talentos Certificados" description="Transformando vidas desde 2007 con certificaciones internacionales." />
            <StatCard value="91%" label="Tasa de Certificación" description="El estándar más alto de la industria en formación TI." />
            <StatCard value="500+" label="Instituciones Aliadas" description="Educación de clase mundial en todo México." />
            <StatCard value="96%" label="Inserción Laboral" description="Nuestros egresados encuentran empleo rápidamente." />
          </div>
        </div>
      </section>

      {/* ───── PROGRAMAS DESTACADOS ───── */}
      <section id="programas" className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <MoonoPeek className="left-2 top-6 sm:left-8" size={64} chance={0.45} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Programas"
            title="Formación que transforma carreras"
            text="Desde inmersiones intensivas hasta cursos de actualización. Cada programa está diseñado para maximizar tu empleabilidad."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Lead Orchestrator",
                tag: "NUEVO · IA",
                desc: "Aprende a gobernar equipos de agentes inteligentes. 50 horas, certificación internacional incluida. El rol del futuro.",
                href: "/programas/lead-orchestrator",
                featured: true,
              },
              {
                icon: Zap,
                title: "//TODO Academy",
                tag: "INMERSIÓN · 6 MESES",
                desc: "Más de 6 meses de formación total, 4 certificaciones y prácticas reales con empresas líderes.",
                href: "/programas/todo-academy",
                featured: false,
              },
              {
                icon: Target,
                title: "Cursos de Certificación",
                tag: "INDIVIDUAL · 21 ÁREAS",
                desc: "Más de 100 cursos con certificación internacional incluida. Domina tecnologías específicas a tu ritmo.",
                href: "/programas/cursos-certificacion",
                featured: false,
              },
            ].map((prog, i) => (
              <motion.div key={prog.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Link href={prog.href}>
                  {prog.featured ? (
                    <motion.div
                      whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative h-full rounded-[28px] border border-white/10 premium-dark-surface p-8 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
                    >
                      <div className="flex items-center justify-between">
                        <IconBox variant="dark"><prog.icon size={22} /></IconBox>
                        <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white/80">
                          {prog.tag}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-white">{prog.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">{prog.desc}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white">
                        Conocer programa <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  ) : (
                    <GlassCard className="group relative h-full p-8">
                      <div className="flex items-center justify-between">
                        <IconBox variant="gradient"><prog.icon size={22} /></IconBox>
                        <span className="rounded-full bg-develop-blue/[0.06] px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-develop-blue">
                          {prog.tag}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-text-primary">{prog.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-text-secondary">{prog.desc}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-develop-blue">
                        Conocer programa <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                      </div>
                    </GlassCard>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ECOSISTEMA QUARY & //TODO ───── */}
      <section className="relative overflow-hidden premium-dark-surface py-20 lg:py-28">
        <GradientBlob className="left-[-150px] top-[-100px] h-[400px] w-[400px] opacity-30" style={{ background: "linear-gradient(135deg, rgba(100,3,84,0.4), rgba(41,0,142,0.3))" }} />
        <GradientBlob className="right-[-100px] bottom-[-100px] h-[350px] w-[350px] opacity-25" style={{ background: "linear-gradient(135deg, rgba(41,0,142,0.4), rgba(100,3,84,0.3))" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Ecosistema"
            title="Un universo de oportunidades conectadas"
            text="Dos plataformas especializadas que extienden el poder de Develop hacia la contratación de élite y la formación inmersiva."
            dark
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Quary */}
            <motion.div {...fadeUp} className="flex">
              <div className="flex flex-1 flex-col rounded-[28px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md transition hover:bg-white/[0.1]">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={24} className="text-white/80" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    Reclutamiento
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white lg:text-3xl">Quary</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/65">
                  La ciencia de encontrar al mejor. Top Grading, evaluaciones Silicon Valley
                  y un ecosistema de más de 50,000 profesionales. Así aseguramos que el
                  talento que llega a tu empresa sea excepcional.
                </p>
                <Button variant="primary" size="md" className="mt-7" href="/talento/encuentra-talento">
                  Descubre el método Quary <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>

            {/* //TODO Academy */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="flex">
              <div className="flex flex-1 flex-col rounded-[28px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md transition hover:bg-white/[0.1]">
                <div className="flex items-center gap-3">
                  <Award size={24} className="text-white/80" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    Formación Intensiva
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white lg:text-3xl">//TODO Academy</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/65">
                  El horno donde se forjan los devs. Más de 6 meses de inmersión total,
                  4 certificaciones internacionales y prácticas reales con empresas líderes.
                </p>
                <Button variant="primary" size="md" className="mt-7" href="/programas/todo-academy">
                  Ingresa a la Academy <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIOS ───── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <MoonoPeek className="bottom-4 right-3 sm:right-10" size={70} chance={0.5} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Testimonios"
            title="35,000 historias de éxito"
            text="No solo enseñamos código; transformamos vidas y conectamos a los mejores con empresas globales."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                quote: "Fue como la primera puerta al mundo real de la programación. Me enseñaron mucho de lo que involucra trabajar en un ambiente productivo; agarras experiencia en ámbitos que de otra manera no tendrías aún.",
                theme: "Puerta al mundo profesional",
              },
              {
                quote: "El trato es súper cordial y muy cálido. La calidad humana es gratificante: te hace sentir cómodo, te hace sentir que sí puedes. El ambiente te hace sentir como en familia.",
                theme: "Trato humano y ambiente",
              },
              {
                quote: "Me animé a tomar un curso de certificación de Java Programmer, me preparé para el examen y lo pasé. Tienes acceso a cursos que cuestan dinero y a nosotros nos dan la oportunidad de tomarlos.",
                theme: "Aprendizaje y certificaciones",
              },
            ].map((t, i) => (
              <motion.figure
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-[28px] border border-black/[0.06] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)]"
              >
                <div className="text-4xl font-serif leading-none text-develop-plum">"</div>
                <blockquote className="mt-4 text-base leading-8 text-text-secondary">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-black/[0.04] pt-5">
                  <div className="text-sm font-semibold text-text-primary">{t.theme}</div>
                  <div className="mt-0.5 text-xs text-text-muted">Testimonio anónimo · Comunidad Develop</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA FINAL ───── */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:rounded-[32px] sm:p-10 lg:p-14">
            <GradientBlob className="right-[-100px] top-[-80px] h-[300px] w-[300px] opacity-20" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent)" }} />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                  Da el primer paso
                </div>
                <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
                  ¿Listo para transformar tu futuro en tecnología?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/65">
                  Ya sea que busques certificarte, contratar talento o transformar tu institución, estamos aquí para ayudarte.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button variant="primary" size="lg" href="/contacto" className="w-full lg:w-auto">
                  Habla con un asesor
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#programas"
                  className="w-full border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/15 hover:text-white lg:w-auto"
                >
                  Explorar programas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
