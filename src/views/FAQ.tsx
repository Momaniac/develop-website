"use client";

import React, { useState } from "react";
import { ArrowRight, Plus, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle, Button } from "../components/ui";
import HeroStaticIntelligence from "../components/HeroStaticIntelligence";
import { faqCategories } from "./faqData";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function FaqRow({ q, a, id, open, onToggle }: { q: string; a: string; id: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="text-sm font-semibold text-text-primary sm:text-base">{q}</span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-develop-blue/[0.07] text-develop-blue transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus size={18} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-5 pb-5 text-sm leading-7 text-text-secondary sm:px-6 sm:pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("0-0");

  return (
    <>
      {/* ───── HERO ───── */}
      <section className="hero-dark hero-static-intelligence py-20 lg:py-28">
        <HeroStaticIntelligence />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow/70">
                Preguntas frecuentes
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Resolvemos tus{" "}
              <span className="gradient-text">dudas</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/60"
            >
              Todo lo que necesitas saber sobre nuestros programas, certificaciones y servicios de
              talento. ¿No encuentras tu respuesta? Habla con BellA o con un asesor.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ───── LISTA DE FAQ ───── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-14">
            {faqCategories.map((cat, ci) => (
              <div key={cat.category}>
                <motion.h2
                  {...fadeUp}
                  className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-develop-plum"
                >
                  {cat.category}
                </motion.h2>
                <div className="space-y-3">
                  {cat.items.map((item, ii) => {
                    const id = `${ci}-${ii}`;
                    return (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: ii * 0.05 }}
                      >
                        <FaqRow
                          q={item.q}
                          a={item.a}
                          id={id}
                          open={openId === id}
                          onToggle={() => setOpenId((cur) => (cur === id ? null : id))}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[24px] premium-dark-surface p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:rounded-[32px] sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <MessageCircle size={28} className="mt-1 flex-shrink-0 text-accent-glow" />
                <div>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    ¿Sigues con dudas?
                  </h2>
                  <p className="mt-2 max-w-md text-base leading-7 text-white/65">
                    Conversa con BellA en el chat o escríbenos: te respondemos en menos de 24 horas.
                  </p>
                </div>
              </div>
              <Button variant="primary" size="lg" href="/contacto" className="flex-shrink-0">
                Habla con un asesor <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
