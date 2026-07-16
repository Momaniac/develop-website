"use client";
/* eslint-disable @next/next/no-img-element -- Moono renderiza mascotas decorativas
   (aria-hidden), con src dinámico y ya lazy/async; next/image no aporta aquí. */

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

/** Total de PNGs en /public/moonos (Moonos_1.png … Moonos_86.png). */
export const MOONO_TOTAL = 86;

export function moonoSrc(index: number) {
  return `/moonos/Moonos_${index}.png`;
}

/**
 * Moono estático (imagen fija). Útil para una pose concreta, p. ej. el
 * Moono-robot (índice 27) en la 404. `invert` lo vuelve blanco para fondos
 * oscuros (las imágenes son siluetas negras).
 */
export function Moono({
  index,
  size = 200,
  invert = false,
  className = "",
  alt = "Moono — mascota de Develop",
}: {
  index: number;
  size?: number;
  invert?: boolean;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={moonoSrc(index)}
      alt={alt}
      draggable={false}
      decoding="async"
      className={`select-none ${className}`}
      style={{
        width: size,
        height: "auto",
        filter: invert
          ? "invert(1) drop-shadow(0 12px 26px rgba(0,0,0,0.35))"
          : "drop-shadow(0 12px 22px rgba(0,0,0,0.12))",
      }}
    />
  );
}

/**
 * Moono curioso que se ASOMA detrás de las tarjetas y se ESCONDE — una sola vez,
 * cuando la sección entra en viewport. Elige un Moono al azar en cada carga, con
 * probabilidad `chance` de aparecer (así varía entre visitas).
 *
 * Solo anima `transform` (translateY) + `opacity` → barato para la GPU.
 * Respeta `prefers-reduced-motion` (se muestra quieto). Colócalo dentro de un
 * contenedor `relative overflow-hidden`. Pensado para fondos claros; usa
 * `invert` en oscuros.
 */
export function MoonoPeek({
  className = "",
  size = 78,
  chance = 0.6,
  invert = false,
}: {
  className?: string;
  size?: number;
  chance?: number;
  invert?: boolean;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState<number | null>(null);
  const [flip, setFlip] = useState(false);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (Math.random() > chance) return; // a veces no aparece
    setIndex(1 + Math.floor(Math.random() * MOONO_TOTAL));
    setFlip(Math.random() > 0.5);
    setDelay(0.3 + Math.random() * 1.8);
  }, [chance]);

  if (index === null) return null;

  const img = (
    <img
      src={moonoSrc(index)}
      alt=""
      aria-hidden
      draggable={false}
      loading="lazy"
      decoding="async"
      className="h-auto w-full"
      style={invert ? { filter: "invert(1)" } : undefined}
    />
  );

  // Sin animación si el usuario prefiere movimiento reducido: solo asomado.
  if (reduced) {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute z-0 select-none ${className}`}
        style={{ width: size, transform: flip ? "scaleX(-1)" : undefined, opacity: 0.92 }}
      >
        {img}
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute z-0 select-none ${className}`}
      style={{ width: size, scaleX: flip ? -1 : 1 }}
      initial={{ y: "72%", opacity: 0 }}
      whileInView={{ y: ["72%", "0%", "0%", "78%"], opacity: [0, 1, 1, 0] }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 3.6, delay, times: [0, 0.16, 0.72, 1], ease: "easeInOut" }}
    >
      {img}
    </motion.div>
  );
}

/**
 * Moono travieso que CRUZA corriendo la pantalla de un lado a otro — una sola
 * vez por carga, con rebote y ligera rotación (efecto "corriendo"). Pensado
 * para colocarse a nivel de sitio (layout): `fixed`, banda inferior.
 *
 * Solo `transform` (translateX/Y, rotate, scaleX) + `opacity`, SIN filtros →
 * el caso de movimiento más exigente se mantiene barato. Solo en pantallas
 * ≥768px y respetando `prefers-reduced-motion`.
 */
export function MoonoDash({
  size = 64,
  chance = 0.7,
}: {
  size?: number;
  chance?: number;
}) {
  const reduced = useReducedMotion();
  const [cfg, setCfg] = useState<null | {
    index: number;
    dir: 1 | -1;
    topVh: number;
    from: number;
    to: number;
    delay: number;
  }>(null);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return; // solo desktop/tablet
    if (Math.random() > chance) return;

    const w = window.innerWidth;
    const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
    const off = size + 100;
    setCfg({
      index: 1 + Math.floor(Math.random() * MOONO_TOTAL),
      dir,
      topVh: 58 + Math.random() * 26, // banda inferior (58–84vh)
      from: dir === 1 ? -off : w + off,
      to: dir === 1 ? w + off : -off,
      delay: 1.2 + Math.random() * 3,
    });
  }, [reduced, chance, size]);

  if (!cfg) return null;

  return (
    <motion.img
      src={moonoSrc(cfg.index)}
      alt=""
      aria-hidden
      draggable={false}
      loading="lazy"
      decoding="async"
      className="pointer-events-none fixed left-0 z-[80] select-none"
      style={{ width: size, height: "auto", top: `${cfg.topVh}vh`, scaleX: cfg.dir }}
      initial={{ x: cfg.from, y: 0, opacity: 0 }}
      animate={{
        x: cfg.to,
        y: [0, -10, 0, -8, 0],
        rotate: [0, -4, 4, -3, 0],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 2.6,
        delay: cfg.delay,
        ease: "linear",
        y: { duration: 0.52, repeat: 5, ease: "easeInOut", delay: cfg.delay },
        rotate: { duration: 0.52, repeat: 5, ease: "easeInOut", delay: cfg.delay },
        opacity: { duration: 2.6, delay: cfg.delay, times: [0, 0.06, 0.5, 0.94, 1] },
      }}
    />
  );
}

/**
 * Capa de sitio que lanza un MoonoDash en cada carga y también al cambiar de
 * página (se re-monta con la ruta). Un solo dash a la vez. Va en el layout.
 */
export function MoonoDashLayer() {
  const pathname = usePathname();
  return <MoonoDash key={pathname} />;
}
