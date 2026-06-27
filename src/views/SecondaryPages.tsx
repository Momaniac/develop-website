"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Landmark, Zap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, GlassCard, Button, IconBox } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── Generic Solutions Pages ─── */
const solutionsData: Record<string, {
  kicker: string;
  title: string;
  highlight: string;
  desc: string;
  features: { icon: any; title: string; desc: string }[];
}> = {
  estudiantes: {
    kicker: "Soluciones · Estudiantes y Profesionales",
    title: "Encuentra tu camino en TI y ",
    highlight: "certifícate internacionalmente",
    desc: "Con el respaldo de los líderes de la industria, transforma tu potencial en una carrera exitosa con certificaciones que el mundo reconoce.",
    features: [
      { icon: GraduationCap, title: "Certificaciones Internacionales", desc: "Oracle, Java, Cloud y más. Tu pasaporte al mercado laboral global." },
      { icon: Zap, title: "Empleabilidad Real", desc: "96% de inserción laboral. Te conectamos con empresas que buscan tu perfil." },
      { icon: BookOpen, title: "Bolsa de Trabajo", desc: "Accede a oportunidades exclusivas a través de nuestro ecosistema Quary." },
    ],
  },
  instituciones: {
    kicker: "Soluciones · Instituciones Educativas",
    title: "Lleva formación de clase mundial a ",
    highlight: "tus aulas",
    desc: "Integra nuestras certificaciones y metodología DQS en tu currícula. Casos de éxito con CONALEP y universidades de todo México.",
    features: [
      { icon: BookOpen, title: "Integración Curricular", desc: "Nuestro sistema DQS se adapta a tu plan de estudios sin sustituirlo." },
      { icon: Users, title: "Certificación Docente", desc: "Formamos a tus profesores para que sean agentes de cambio tecnológico." },
      { icon: Target, title: "Convenios Institucionales", desc: "Modelos flexibles que se adaptan a las necesidades de cada institución." },
    ],
  },
  gobierno: {
    kicker: "Soluciones · Gobierno",
    title: "Programas de formación masiva con ",
    highlight: "impacto social",
    desc: "Llevamos la certificación internacional a programas federales y estatales, con transparencia total en cada indicador.",
    features: [
      { icon: Landmark, title: "Formación Masiva", desc: "Programas probados con CONALEP 2026 y gobiernos estatales." },
      { icon: Users, title: "Impacto Económico", desc: "Cada egresado certificado contribuye directamente a la productividad del país." },
      { icon: Target, title: "Transparencia Total", desc: "Reportes de avance y métricas de certificación en tiempo real." },
    ],
  },
};

export function SolucionesPage({ perfil }: { perfil?: string }) {
  const data = solutionsData[perfil || ""] || solutionsData.estudiantes;

  return (
    <>
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                {data.kicker}
              </span>
            </motion.div>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {data.title}<span className="gradient-text">{data.highlight}</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              {data.desc}
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8">
              <Button variant="primary" size="lg" href="/contacto">
                Agenda una reunión <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {data.features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-8">
                  <IconBox variant="gradient"><f.icon size={22} /></IconBox>
                  <h3 className="mt-6 text-xl font-bold text-text-primary">{f.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{f.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:rounded-[32px] sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Quieres saber más?</h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">Platiquemos sobre cómo adaptar nuestro modelo a tus necesidades.</p>
              </div>
              <div className="flex lg:justify-end">
                <Button variant="primary" size="lg" href="/contacto">Contáctanos <ArrowRight size={16} /></Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}




/* ─── Talento Page ─── */
export function TalentoPage() {
  return (
    <>
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">Talento</span>
            </motion.div>
            <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              El talento que necesitas, <span className="gradient-text">donde otros no pueden encontrarlo</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Nuestro ecosistema conecta a empresas con profesionales certificados, evaluados y listos para producir desde el primer día.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <Link href="/talento/encuentra-talento">
                <GlassCard className="group h-full p-8">
                  <IconBox variant="gradient"><Users size={22} /></IconBox>
                  <h3 className="mt-6 text-2xl font-bold text-text-primary">Encuentra Talento</h3>
                  <p className="mt-3 text-base leading-7 text-text-secondary">Para empresas: busca perfiles certificados, solicita talento a medida o conoce nuestro método Quary de selección Top Grading.</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-develop-blue opacity-0 transition group-hover:opacity-100">
                    Explorar <ArrowRight size={14} />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <Link href="/talento/unete-como-colaborador">
                <GlassCard className="group h-full p-8">
                  <IconBox variant="gradient"><GraduationCap size={22} /></IconBox>
                  <h3 className="mt-6 text-2xl font-bold text-text-primary">Únete como Colaborador</h3>
                  <p className="mt-3 text-base leading-7 text-text-secondary">Para profesionales: ve nuestras vacantes internas, sube tu CV a la bolsa de talento o postúlate para ser presentado a empresas cliente.</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-develop-blue opacity-0 transition group-hover:opacity-100">
                    Explorar <ArrowRight size={14} />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Blog Placeholder ─── */
export function BlogPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          kicker="Recursos"
          title="Blog Develop"
          text="Tendencias en IA, nearshoring, educación tecnológica y más. Próximamente con contenido dinámico desde nuestro CMS."
        />
        <motion.div {...fadeUp} className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
          {[
            { title: "Cómo convertirse en Lead Orchestrator", tag: "IA", date: "Próximamente" },
            { title: "Nearshoring TI México 2026: Oportunidades", tag: "Nearshoring", date: "Próximamente" },
            { title: "Qué es Top Grading y por qué funciona", tag: "Talento", date: "Próximamente" },
            { title: "El futuro del desarrollo de software con IA", tag: "Tendencias", date: "Próximamente" },
          ].map((post) => (
            <GlassCard key={post.title} className="p-6">
              <span className="inline-flex rounded-full bg-develop-blue/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-develop-blue">{post.tag}</span>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">{post.title}</h3>
              <p className="mt-2 text-xs text-text-muted">{post.date}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
