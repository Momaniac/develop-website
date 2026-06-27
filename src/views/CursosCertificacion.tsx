"use client";

import React from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Globe,
  GraduationCap,
  Monitor,
  Smartphone,
  Sparkles,
  Brain,
  Database,
  Users,
  Zap,
  CalendarDays,
  Video,
} from "lucide-react";
import { motion } from "framer-motion";
import { GradientBlob, SectionTitle, Button, IconBox, GlassCard, StatCard } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categories = [
  {
    id: "agile",
    icon: Users,
    title: "Metodologías Ágiles",
    partner: "Certiprof",
    courses: [
      { name: "Scrum Master Professional Certificate (SMPC)", hours: "24 horas de inmersión total" },
      { name: "Scrum Product Owner (SPOPC)", hours: "Domina la visión de producto" },
      { name: "User Stories Foundations", hours: "El arte de traducir requerimientos en valor" },
      { name: "Kanban Essentials", hours: "Optimización de flujo y entrega continua" },
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Bases de Datos e Infraestructura",
    partner: "Oracle",
    courses: [
      { name: "Oracle Database: Introduction to SQL", hours: "Fundamentos y administración de datos" },
      { name: "SQL Associate (OCA)", hours: "El estándar de oro para administradores de bases de datos" },
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "Inteligencia Artificial y Futuro",
    partner: "Certiprof · Develop",
    courses: [
      { name: "Generative AI Professional Certificate", hours: "Fundamentos y aplicaciones prácticas de LLMs" },
      { name: "Lead Orchestrator — Módulo Individual", hours: "Entrenamiento intensivo en orquestación de agentes" },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Desarrollo Móvil y Multimedia",
    partner: "Android ATC · Unity · Adobe",
    courses: [
      { name: "Android Application Development", hours: "Certificación oficial de Android ATC" },
      { name: "Unity Certified User", hours: "Desarrollo de videojuegos y experiencias VR/AR" },
      { name: "Adobe Certified Professional", hours: "Diseño y herramientas creativas" },
    ],
  },
];

const benefits = [
  { icon: Award, title: "Vouchers Incluidos", desc: "La mayoría de nuestros cursos ya incluyen el costo del examen de certificación internacional." },
  { icon: Globe, title: "Partners Globales", desc: "Somos centro autorizado Pearson VUE y Prometric, los estándares mundiales en evaluación." },
  { icon: GraduationCap, title: "Instructores Certificados", desc: "Compartimos experiencia real de proyectos en la industria, no solo teoría de manual." },
  { icon: Zap, title: "Reporte DQS", desc: "Monitoreo constante de tu progreso para asegurar el 91% de éxito en tu examen." },
];

export default function CursosCertificacion() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Programas · Cursos de Certificación
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Domina tecnologías específicas,{" "}
              <span className="gradient-text">certifícate a nivel global</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              El aprendizaje continuo es la clave del éxito en la industria TI. Nuestros cursos individuales
              están diseñados para que domines una tecnología concreta y obtengas certificaciones con
              validez internacional — sin invertir meses enteros.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="/calendario">
                Ver calendario de aperturas <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="/contacto">
                Habla con un asesor
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── MODALIDAD ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Modalidad"
            title="Calidad en vivo, flexibilidad total"
            text="Cursos diseñados para adaptarse a tu ritmo sin sacrificar la interacción humana."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Video, title: "100% Online y en Vivo", desc: "Clases síncronas con expertos de la industria en tiempo real." },
              { icon: BookOpen, title: "Metodología Blended", desc: "Sesiones face-to-face virtuales combinadas con material digital de apoyo." },
              { icon: Monitor, title: "Autoestudio (Próximamente)", desc: "Rutas de aprendizaje 100% asíncronas para máxima flexibilidad." },
              { icon: CalendarDays, title: "Inscripción por Calendario", desc: "Aperturas en fechas específicas para garantizar grupos dinámicos y atención personalizada." },
            ].map((m, i) => (
              <motion.div key={m.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <GlassCard className="h-full p-6 text-center">
                  <IconBox variant="gradient" className="mx-auto"><m.icon size={22} /></IconBox>
                  <h3 className="mt-5 text-base font-bold text-text-primary">{m.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{m.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CATÁLOGO ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Catálogo 2026"
            title="Especialidades disponibles"
            text="Cursos individuales con certificación internacional incluida. Elige tu siguiente paso profesional."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Tarjeta destacada — Generación Agosto //TODO Academy (info por actualizar) */}
            <motion.div {...fadeUp} className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-[28px] premium-dark-surface p-8 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-10">
                <GradientBlob
                  className="right-[-80px] top-[-60px] h-[260px] w-[260px] opacity-30"
                  style={{ background: "linear-gradient(135deg, rgba(100,3,84,0.5), rgba(41,0,142,0.4))" }}
                />
                <div className="relative z-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
                      <Sparkles size={12} /> Inscripciones abiertas · Agosto 2026
                    </span>
                    <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                      Generación Agosto · <span className="gradient-text">//TODO Academy</span>
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-white/65">
                      Estamos afinando los detalles de esta nueva generación. La información completa
                      (plan de estudios, fechas y becas) estará disponible muy pronto — pero ya puedes
                      apartar tu lugar y ser de los primeros en recibirla.
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                      <Clock size={12} /> Información por actualizar
                    </p>
                  </div>
                  <div className="flex lg:justify-end">
                    <Button variant="primary" size="lg" href="/contacto">
                      Solicitar información <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {categories.map((cat, ci) => (
              <motion.div key={cat.id} {...fadeUp} transition={{ duration: 0.5, delay: ci * 0.1 }}>
                <GlassCard className="h-full p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <IconBox variant="gradient"><cat.icon size={22} /></IconBox>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">{cat.title}</h3>
                        <span className="text-xs font-medium text-text-muted">Partner: {cat.partner}</span>
                      </div>
                    </div>
                    <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-red-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Agotado
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {cat.courses.map((course) => (
                      <li key={course.name} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-develop-plum" />
                        <div>
                          <span className="font-medium text-text-primary">{course.name}</span>
                          <span className="ml-1 text-text-muted">— {course.hours}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ÁREAS DE FORMACIÓN ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="Áreas de Formación 2026"
            title="21 áreas estratégicas, más de 100 cursos"
            text="Nuestro catálogo abarca las disciplinas más demandadas por la industria. Cada área incluye certificaciones respaldadas por partners globales. La disponibilidad de cursos se rige por nuestro calendario de aperturas."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { area: "Agile", certs: "Scrum Master, Product Owner, Kanban Essentials", partner: "Certiprof" },
              { area: "Bases de Datos", certs: "Oracle Database 12c, SQL Administrator", partner: "Oracle · Pearson" },
              { area: "Calidad Servicios TI", certs: "ISO/IEC 20000 Foundation y Lead Auditor", partner: "Certiprof" },
              { area: "Inteligencia Artificial", certs: "AI Expert, Generative AI, AI Risk Manager", partner: "Certiprof" },
              { area: "DevOps", certs: "DevOps Essentials y Advanced Professional", partner: "Certiprof" },
              { area: "Diseño / Desarrollo Web", certs: "UX Design, HTML/CSS, JavaScript", partner: "Google · Certiport" },
              { area: "Fundamentos", certs: "Digital Literacy, Computación, Aplicaciones Clave", partner: "IC3" },
              { area: "Marketing Digital", certs: "Digital Marketing Associate, DMPC", partner: "Meta · Certiprof" },
              { area: "Innovación", certs: "Design Thinking e Innovation Management", partner: "Certiprof" },
              { area: "Ofimática", certs: "Especialista y Experto en Word, Excel, PowerPoint", partner: "Microsoft" },
              { area: "Profesores", certs: "Microsoft Certified Educator 21CLD, Remote Work", partner: "Microsoft · Certiprof" },
              { area: "Testing", certs: "ISTQB Foundation, AI Testing, Game Testing, Mobile App", partner: "ISTQB" },
              { area: "Programación / App Dev", certs: "Java SE8, Python, Flutter, Swift para iOS", partner: "Oracle · Apple · Microsoft" },
              { area: "Recursos Humanos", certs: "HR Agile Certified, HRCI Associate Professional", partner: "Certiprof · HRCI" },
              { area: "Sistemas Operativos", certs: "Administrador Linux, Windows Server", partner: "LPI · Microsoft" },
              { area: "Videojuegos", certs: "Unity Certified User Artist y Programmer", partner: "Unity" },
              { area: "AR / VR", certs: "Unity Certified User VR Developer", partner: "Unity" },
              { area: "Adm. Proyectos y Negocios", certs: "Lean Six Sigma, OKR Master, Business Model Canvas", partner: "Certiprof" },
              { area: "Análisis y Ciencia de Datos", certs: "Big Data, Data Analytics, Blockchain Professional", partner: "Certiprof · Certiport" },
              { area: "Ciberseguridad y Redes", certs: "Lead Cybersecurity, ISO 27001, Ethical Hacking", partner: "Certiprof · Certiport" },
              { area: "Diseño Digital", certs: "Adobe CC (Photoshop, Premiere), AutoCAD, Revit, Maya", partner: "Adobe · Autodesk" },
            ].map((item, i) => (
              <motion.div
                key={item.area}
                {...fadeUp}
                transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              >
                <a href="/contacto" className="group block h-full">
                  <GlassCard className="relative h-full p-5 transition-all duration-200">
                    <h3 className="text-sm font-bold text-text-primary">{item.area}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-text-secondary">{item.certs}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-develop-blue/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-develop-blue">{item.partner}</span>
                      <span className="flex items-center gap-1 text-[11px] font-medium text-develop-plum opacity-0 transition-opacity group-hover:opacity-100">
                        Explorar <ArrowRight size={10} />
                      </span>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <p className="mb-6 text-sm text-text-muted">
              La disponibilidad de cada curso depende de nuestro calendario de aperturas.
              Consulta el calendario para conocer lo que está por abrir y lo que tiene cupo lleno.
            </p>
            <Button variant="primary" size="lg" href="/calendario">
              Ver calendario de aperturas <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ───── BENEFICIOS ───── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            kicker="¿Por qué Develop?"
            title="Beneficios de certificarte con nosotros"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <GlassCard className="h-full p-6">
                  <IconBox variant="gradient"><b.icon size={22} /></IconBox>
                  <h3 className="mt-5 text-base font-bold text-text-primary">{b.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{b.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:rounded-[32px] sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Quieres conocer el calendario completo de aperturas?</h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/65">Consulta las próximas fechas de inicio o habla con un asesor de carrera para diseñar tu ruta de certificación.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button variant="primary" size="lg" href="/calendario">Ver calendario <ArrowRight size={16} /></Button>
                <Button variant="outline" size="lg" href="/contacto" className="border border-white/20 bg-white/[0.06] text-white backdrop-blur-md hover:bg-white/[0.12] hover:text-white">Habla con un asesor</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
