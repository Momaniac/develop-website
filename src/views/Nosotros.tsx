"use client";

import React from "react";
import { Heart, Award, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle, GlassCard, StatCard, IconBox } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";
import { MoonoPeek } from "../components/Moono";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const timeline = [
  { year: "2007", title: "Fundación", desc: "Nace Develop como centro de certificación Sun Microsystems en México." },
  { year: "2009", title: "Quary", desc: "Nace la división de reclutamiento especializado con metodología Top Grading." },
  { year: "2009", title: "Oracle Partnership", desc: "Nos convertimos en Oracle Workforce Development Partner." },
  { year: "2012", title: "México First", desc: "Alianza estratégica con el programa México First para formación masiva." },
  { year: "2015", title: "Pearson VUE", desc: "Centro autorizado Pearson VUE y Prometric para certificaciones internacionales." },
  { year: "2018", title: "CONALEP Nacional", desc: "Certificación histórica del 99% de docentes CONALEP en Java." },
  { year: "2019", title: "//TODO Academy", desc: "Lanzamiento de nuestro programa intensivo de 6 meses para developers." },
  { year: "2025", title: "Lead Orchestrator", desc: "Primer programa de certificación en orquestación de agentes de IA." },
];

const values = [
  { icon: Heart, title: "Pasión", desc: "Creemos en el poder transformador de la educación tecnológica." },
  { icon: Users, title: "Colaboración", desc: "Construimos puentes entre academia, industria y gobierno." },
  { icon: Award, title: "Excelencia", desc: "91% de certificación no es un número: es una promesa cumplida." },
  { icon: Globe, title: "Impacto Social", desc: "Becas, inclusión de género y acceso a comunidades marginadas." },
];

const allianceLogos = [
  { name: "Google", src: "/logos/alianzas/google.png" },
  { name: "Pearson VUE", src: "/logos/alianzas/pearson.png" },
  { name: "Certiprof", src: "/logos/alianzas/certiprof.png" },
  { name: "Certiport", src: "/logos/alianzas/certiport.png" },
  { name: "Android ATC", src: "/logos/alianzas/androidatc.jpg" },
  { name: "SYE Software", src: "/logos/alianzas/syesoftware.png" },
  { name: "Quary", src: "/logos/alianzas/quary.png" },
  { name: "Qualtop", src: "/logos/alianzas/qualtop.png" },
  { name: "Momani", src: "/logos/alianzas/momani.png" },
];

export default function Nosotros() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Nosotros
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Un puente con{" "}
              <span className="gradient-text">19 años de historia</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              No nos conformamos con llenar vacantes. Construimos el ecosistema que une la educación
              con la industria, para que el talento mexicano compita y lidere a nivel global.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───── ALIANZAS — CARRUSEL DE LOGOS ───── */}
      <section className="border-y border-black/[0.04] bg-surface py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.p
            {...fadeUp}
            className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-text-muted"
          >
            Respaldados por líderes globales
          </motion.p>
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent sm:w-40" />

          <div className="flex animate-scroll-logos">
            {/* We duplicate the set twice for seamless looping */}
            {[...allianceLogos, ...allianceLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex flex-shrink-0 items-center justify-center px-8 sm:px-12"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- logos de aliados decorativos, pequeños, en carrusel animado */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className="h-9 w-auto max-w-[120px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HUMANIDAD + TECNOLOGÍA ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <SectionTitle
                kicker="Nuestra Esencia"
                title="La tecnología que nos apasiona, las personas que nos mueven"
                text="Somos la empresa que más certifica en tecnologías de desarrollo en México, pero nuestro mayor logro son las más de 35,000 historias de éxito detrás de cada certificado."
                align="left"
              />
              <motion.p
                {...fadeUp}
                className="mt-6 text-base leading-7 text-text-secondary"
              >
                Nuestra metodología <strong className="text-text-primary">Blended E-Learning</strong> y
                nuestro sistema de calidad <strong className="text-text-primary">DQS</strong> se monitorean
                en tiempo real por una razón: cada alumno merece una oportunidad real.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard value="91%" label="Certificación" description="Porque no se trata de pasar un curso, sino de garantizar un futuro." />
              <StatCard value="500+" label="Instituciones" description="Educación de clase mundial en todos los rincones del país." />
            </div>
          </div>
        </div>
      </section>

      {/* ───── TIMELINE ───── */}
      <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
        <MoonoPeek className="bottom-3 right-3 sm:right-8" size={72} chance={0.55} />
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTitle
            kicker="Historia"
            title="Desde 2007, construyendo el futuro"
            text="Cada hito refleja nuestra evolución constante para adelantarnos a las necesidades de la industria."
          />

          <div className="relative mt-14">
            {/* Vertical Line */}
            <div className="absolute left-[22px] top-0 h-full w-[2px] bg-[linear-gradient(180deg,transparent,#640354_10%,#29008e_90%,transparent)] sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={`${item.year}-${i}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[14px] top-2 z-10 h-[18px] w-[18px] rounded-full border-[3px] border-develop-plum bg-white shadow-[0_0_12px_rgba(100,3,84,0.3)] sm:left-1/2 sm:-translate-x-1/2" />

                  {/* Content */}
                  <div className={`ml-12 w-full sm:ml-0 sm:w-[calc(50%-32px)] ${i % 2 === 0 ? "sm:pr-4 sm:text-right" : "sm:pl-4"}`}>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-develop-plum">
                      {item.year}
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── VALORES ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Valores"
            title="Lo que nos define como equipo"
            text="Detrás de cada programa, alianza y certificación, hay un conjunto de principios inamovibles."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <GlassCard className="h-full p-7">
                  <IconBox variant="light">
                    <v.icon size={22} className="text-develop-blue" />
                  </IconBox>
                  <h3 className="mt-5 text-lg font-semibold text-text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{v.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
