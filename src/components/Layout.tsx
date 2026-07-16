"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui";
import { useFormSubmit } from "../lib/useFormSubmit";
import { Honeypot, SubmitSuccessModal } from "./FormFeedback";

const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "Soluciones",
    href: "/soluciones",
    children: [
      { label: "Para Empresas", href: "/soluciones/empresas" },
      { label: "Para Instituciones", href: "/soluciones/instituciones" },
      { label: "Para Gobierno", href: "/soluciones/gobierno" },
      { label: "Para Estudiantes", href: "/soluciones/estudiantes" },
      { label: "Fábrica de Talento", href: "/soluciones/fabrica-de-talento" },
    ],
  },
  {
    label: "Programas",
    href: "/programas",
    children: [
      { label: "Lead Orchestrator", href: "/programas/lead-orchestrator" },
      { label: "//TODO Academy", href: "/programas/todo-academy" },
      { label: "Cursos de Certificación", href: "/programas/cursos-certificacion" },
      { label: "Calendario de aperturas", href: "/calendario" },
    ],
  },
  { label: "Talento", href: "/talento/encuentra-talento" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Resultados", href: "/resultados" },
  { label: "Blog", href: "/recursos/blog" },
];

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm text-text-secondary transition hover:text-develop-blue">
        {label}
        <svg className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-2 w-56 rounded-2xl border border-black/[0.06] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            {items.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-xl px-4 py-2.5 text-sm text-text-secondary transition hover:bg-surface hover:text-develop-blue"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logos/logo-develop.png"
            alt="Develop Talent & Technology"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <NavDropdown key={link.label} label={link.label} items={link.children} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition hover:text-develop-blue ${
                  pathname === link.href
                    ? "font-semibold text-develop-blue"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="secondary" size="sm" href="/contacto">
            Contacto
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="rounded-xl border border-black/10 bg-white p-2 lg:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/[0.04] bg-white lg:hidden"
          >
            <nav id="mobile-nav" className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <React.Fragment key={link.label}>
                  {link.children ? (
                    <>
                      <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-xl px-3 py-2 text-sm text-text-secondary transition hover:bg-surface"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface"
                    >
                      {link.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <div className="mt-3 flex gap-2">
                <Button variant="secondary" size="md" href="/contacto" className="flex-1" onClick={() => setMobileOpen(false)}>
                  Contacto
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const footerSections = [
  {
    title: "Soluciones",
    links: [
      { label: "Para Empresas", href: "/soluciones/empresas" },
      { label: "Para Instituciones", href: "/soluciones/instituciones" },
      { label: "Para Gobierno", href: "/soluciones/gobierno" },
      { label: "Para Estudiantes", href: "/soluciones/estudiantes" },
      { label: "Fábrica de Talento", href: "/soluciones/fabrica-de-talento" },
    ],
  },
  {
    title: "Programas",
    links: [
      { label: "Lead Orchestrator", href: "/programas/lead-orchestrator" },
      { label: "//TODO Academy", href: "/programas/todo-academy" },
      { label: "Cursos de Certificación", href: "/programas/cursos-certificacion" },
      { label: "Calendario de aperturas", href: "/calendario" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Resultados", href: "/resultados" },
      { label: "Blog", href: "/recursos/blog" },
      { label: "Preguntas frecuentes", href: "/faq" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

export function Footer() {
  const { status, handleSubmit, reset } = useFormSubmit("Nueva suscripción · Newsletter");
  return (
    <>
    <footer className="premium-dark-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block">
              <img
                src="/logos/logo-develop-bco.png"
                alt="Develop Talent & Technology"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              Tecnología de vanguardia que nunca olvida a las personas. 19 años cerrando la brecha de talento TI en México.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:contacto@develop.com.mx" className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
                <Mail size={14} /> contacto@develop.com.mx
              </a>
              <a href="tel:+525610248938" className="flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
                <Phone size={14} /> +52 56 1024 8938
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin size={14} /> Ciudad de México, México
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Clock size={14} /> Lunes a viernes, 9:00 a.m. – 6:00 p.m.
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {section.title}
              </div>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:flex sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="text-base font-semibold text-white">
              El pulso del futuro TI en tu correo
            </div>
            <div className="mt-1 text-sm text-white/50">
              Sin spam. Solo inspiración y oportunidades.
            </div>
            <div className="mt-1 text-xs text-white/35">
              Al suscribirte aceptas nuestra{" "}
              <Link href="/privacidad" className="underline transition hover:text-white/60">
                política de privacidad
              </Link>
              .
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-4 flex gap-2 sm:mt-0">
            <Honeypot />
            <input
              type="email"
              name="Email"
              required
              placeholder="tu@correo.com"
              className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/25 focus:ring-2 focus:ring-white/10 sm:w-64"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-develop-blue shadow-sm transition hover:bg-white/90 disabled:opacity-60"
            >
              {status === "submitting" ? "Enviando..." : <>Suscríbete <ArrowUpRight size={14} /></>}
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Develop Talent & Technology. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-xs text-white/40 transition hover:text-white">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>

    <SubmitSuccessModal
      open={status === "success"}
      onClose={reset}
      title="¡Suscripción confirmada!"
      message="Gracias por suscribirte. Recibirás el pulso del futuro TI directo en tu correo."
    />
    </>
  );
}
