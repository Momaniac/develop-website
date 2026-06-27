"use client";

import React from "react";
import { ArrowRight, GraduationCap, Zap, BookOpen, Briefcase, CheckCircle2, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, GlassCard, StatCard, Button, IconBox, Pill } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function SolucionesEstudiantes() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.div {...fadeUp}>
                <Pill variant="dark">
                  <span className="h-2 w-2 rounded-full bg-accent-glow animate-hero-dot" />
                  <span className="text-white/70">Tu camino en TI comienza aquí</span>
                </Pill>
              </motion.div>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Encuentra tu camino en TI y{" "}
                <span className="gradient-text">certifícate internacionalmente</span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
              >
                Con el respaldo de los líderes de la industria, transforma tu potencial en una carrera exitosa.
                El <strong className="text-white">96% de nuestros egresados</strong> consigue empleo en los primeros 3 meses.
              </motion.p>
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-9 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="#programas">
                  Explorar programas <ArrowRight size={18} />
                </Button>
                <Button variant="outline" size="lg" href="/talento/unete-como-colaborador">
                  Súbete al talento
                </Button>
              </motion.div>
            </div>

            {/* Stats cluster — glassmorphic dark */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "96%", label: "Inserción Laboral", desc: "Empleo en los primeros 3 meses." },
                  { value: "91%", label: "Certificación", desc: "El más alto del sector TI." },
                  { value: "35K+", label: "Egresados", desc: "Talento formado desde 2007." },
                  { value: "4", label: "Certificaciones", desc: "En el programa //TODO Academy." },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="rounded-2xl border border-white/[0.1] bg-white/[0.06] p-5 backdrop-blur-md"
                  >
                    <div className="text-xs font-medium text-white/50">{stat.label}</div>
                    <div className="mt-1.5 text-3xl font-extrabold tracking-tight text-white">{stat.value}</div>
                    {stat.desc && <div className="mt-2 text-xs leading-5 text-white/40">{stat.desc}</div>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── RUTA DE EMPLEABILIDAD ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Tu ruta"
            title="De estudiante a profesional certificado"
            text="Un camino claro hacia tu primer empleo en tecnología, con soporte en cada etapa."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Elige tu programa", desc: "Selecciona entre //TODO Academy, Lead Orchestrator o Cursos de Certificación.", icon: BookOpen },
              { step: "02", title: "Fórmate y certifícate", desc: "Metodología Blended E-Learning con seguimiento DQS y mentoría personalizada.", icon: GraduationCap },
              { step: "03", title: "Obtén tu certificación", desc: "Certificaciones Oracle, Java, Cloud e IA reconocidas internacionalmente.", icon: Award },
              { step: "04", title: "Consigue empleo", desc: "Nuestro ecosistema Quary te conecta con las mejores empresas del sector.", icon: Briefcase },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-7">
                  <div className="flex items-center justify-between">
                    <IconBox variant="gradient">
                      <item.icon size={20} />
                    </IconBox>
                    <span className="text-3xl font-bold text-black/[0.06]">{item.step}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-text-secondary">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PROGRAMAS DISPONIBLES ───── */}
      <section id="programas" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Programas"
            title="Elige la formación que se adapta a ti"
            text="Desde inmersiones intensivas de 6 meses hasta cursos individuales de certificación."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "//TODO Academy",
                tag: "INMERSIÓN · 6 MESES",
                desc: "El programa más completo. 6 meses de formación total, 4 certificaciones internacionales y prácticas reales con empresas.",
                href: "/programas/todo-academy",
                features: ["6+ meses de inmersión", "4 certificaciones internacionales", "Prácticas con empresas reales"],
              },
              {
                icon: TrendingUp,
                title: "Lead Orchestrator",
                tag: "IA · 50 HORAS",
                desc: "El programa del futuro. Aprende a gobernar equipos de agentes de IA con certificación internacional incluida.",
                href: "/programas/lead-orchestrator",
                features: ["50 horas intensivas", "Certificación internacional", "El rol más demandado"],
              },
              {
                icon: BookOpen,
                title: "Cursos de Certificación",
                tag: "INDIVIDUAL",
                desc: "Domina tecnologías específicas y obtén certificaciones internacionales sin invertir meses enteros.",
                href: "/programas/cursos-certificacion",
                features: ["Más de 100 cursos disponibles", "21 áreas de formación", "Certificación internacional incluida"],
              },
            ].map((prog, i) => (
              <motion.div key={prog.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="group flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <IconBox variant="gradient">
                      <prog.icon size={22} />
                    </IconBox>
                    <span className="rounded-full bg-develop-blue/[0.06] px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-develop-blue">
                      {prog.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-text-primary">{prog.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{prog.desc}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {prog.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary">
                        <CheckCircle2 size={15} className="flex-shrink-0 text-develop-plum" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary" size="md" href={prog.href} className="mt-7 w-full">
                    Conocer programa <ArrowRight size={14} />
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CERTIFICACIONES ───── */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Certificaciones"
            title="Tu pasaporte al mercado laboral global"
            text="Certificaciones reconocidas internacionalmente que abren puertas en cualquier país."
          />

          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-6">
            {["Oracle Certified", "Java SE", "Cloud Foundations", "Pearson VUE", "Prometric", "Lead Orchestrator IA"].map((cert, i) => (
              <motion.div
                key={cert}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex h-16 items-center rounded-2xl border border-black/[0.04] bg-white px-8 shadow-sm transition hover:shadow-md hover:border-develop-plum/20"
              >
                <span className="text-sm font-semibold text-text-muted">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BOLSA DE TRABAJO (PREÁMBULO QUARY) ───── */}
      <section className="relative overflow-hidden premium-dark-surface py-20 lg:py-28">
        <GradientBlob className="left-[-150px] top-[-100px] h-[400px] w-[400px] opacity-30" style={{ background: "linear-gradient(135deg, rgba(100,3,84,0.4), rgba(41,0,142,0.3))" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Bolsa de Trabajo</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Que las empresas te encuentren
              </h2>
              <p className="mt-5 text-base leading-7 text-white/65">
                Sube tu CV a nuestro ecosistema. Si tu perfil encaja, te guiaremos en un proceso de
                capacitación y certificación para presentarte a las mejores oportunidades de la industria a través de Quary.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="/talento/unete-como-colaborador">
                  Postúlate como talento <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "96%", label: "Inserción laboral" },
                { value: "50K+", label: "Profesionales en red" },
                { value: "3 meses", label: "Tiempo promedio de colocación" },
                { value: "Global", label: "Oportunidades" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIO ───── */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.figure
            {...fadeUp}
            className="relative rounded-[24px] border border-black/[0.06] bg-white p-6 shadow-[0_24px_60px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-10 lg:p-14"
          >
            <div className="text-5xl font-serif text-develop-plum leading-none">"</div>
            <blockquote className="mt-4 text-xl font-medium leading-9 text-text-primary sm:text-2xl">
              El programa //TODO Academy fue el punto de inflexión de mi carrera. Pasé de no tener experiencia
              a trabajar en una empresa multinacional en solo 8 meses.
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-develop-blue/[0.07] text-sm font-bold text-develop-blue">
                CM
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Carlos M.</div>
                <div className="text-xs text-text-muted">Full Stack Developer — Consultora IT</div>
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ───── CTA FINAL ───── */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:rounded-[32px] sm:p-10 lg:p-14"
          >
            <GradientBlob className="right-[-100px] top-[-80px] h-[300px] w-[300px] opacity-20" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent)" }} />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  ¿Listo para dar el primer paso?
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">
                  Descubre qué programa se adapta mejor a tu perfil y comienza tu transformación profesional.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button variant="primary" size="lg" href="/contacto" className="w-full lg:w-auto">
                  Inscríbete ahora <ArrowRight size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/contacto"
                  className="w-full border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/15 hover:text-white lg:w-auto"
                >
                  Habla con un asesor
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
