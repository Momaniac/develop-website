"use client";

import React from "react";
import Link from "next/link";
import { Home, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui";
import { Moono } from "../components/Moono";

/* ─── Muñequito "bugeado": el Moono-robot rodeado de animaciones de bug ─── */
function BuggyMoono() {
  return (
    <motion.div
      className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glow detrás */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.32), transparent 70%)" }}
      />

      {/* Chispas de glitch alrededor */}
      {[
        { left: "6%", top: "24%", delay: 0 },
        { left: "88%", top: "32%", delay: 0.5 },
        { left: "80%", top: "74%", delay: 1 },
        { left: "12%", top: "68%", delay: 0.8 },
      ].map((s, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-accent-pink"
          style={{ left: s.left, top: s.top, boxShadow: "0 0 12px rgba(244,114,182,0.9)" }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ duration: 1.6, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Moono-robot estático (invertido a blanco para el fondo oscuro) con leve oscilación */}
      <motion.div
        className="relative z-10"
        animate={{ rotate: [-2.5, 2.5, -2.5], y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Moono index={27} invert size={172} alt="Moono confundido por un error 404" />

        {/* Líneas de glitch que barren al Moono */}
        <motion.span
          aria-hidden
          className="absolute left-0 right-0 h-1.5 rounded-full bg-accent-glow/60 mix-blend-screen"
          animate={{ top: ["16%", "84%", "16%"], opacity: [0, 0.9, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          aria-hidden
          className="absolute left-0 right-0 h-0.5 rounded-full bg-accent-pink/70 mix-blend-screen"
          animate={{ top: ["72%", "28%", "72%"], opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function NotFound() {
  return (
    <section className="hero-dark flex min-h-[calc(100vh-72px)] items-center py-16">
      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-block">
            <img
              src="/logos/logo-develop-bco.png"
              alt="Develop Talent & Technology"
              className="mx-auto h-9 w-auto object-contain"
            />
          </Link>
        </motion.div>

        <div className="mt-10">
          <BuggyMoono />
        </div>

        {/* Código de error con glitch */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 text-6xl font-extrabold tracking-tight text-white sm:text-7xl"
        >
          <span className="gradient-text">4</span>
          <motion.span
            className="inline-block"
            animate={{ x: [0, -3, 3, 0], opacity: [1, 0.7, 1] }}
            transition={{ duration: 0.35, repeat: Infinity, repeatDelay: 2 }}
          >
            0
          </motion.span>
          <span className="gradient-text">4</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-4 text-xl font-bold text-white sm:text-2xl"
        >
          Houston, encontramos un bug en la ruta
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mx-auto mt-3 max-w-md text-base leading-7 text-white/60"
        >
          La página que buscas no existe, cambió de lugar o nuestro Moono la dejó en otra dimensión.
          Probemos de nuevo desde un terreno conocido.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href="/">
            <Home size={18} /> Volver al inicio
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/contacto"
            className="border border-white/20 bg-white/[0.06] text-white backdrop-blur-md hover:bg-white/[0.12] hover:text-white"
          >
            <Mail size={18} /> Reportar el problema
          </Button>
        </motion.div>

        {/* Atajos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/45"
        >
          {[
            { label: "Programas", href: "/programas/lead-orchestrator" },
            { label: "Soluciones", href: "/soluciones/empresas" },
            { label: "Talento", href: "/talento/encuentra-talento" },
            { label: "Nosotros", href: "/nosotros" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 transition hover:text-white">
              {l.label} <ArrowRight size={13} />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
