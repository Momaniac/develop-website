"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, RotateCcw } from "lucide-react";

/**
 * Página de error (500) con marca. Reemplaza la pantalla genérica de Next cuando
 * un segmento lanza en render. Es un Client Component (requisito de error boundary).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Traza en el servidor/logs, nunca al usuario.
    console.error("[app/error]", error);
  }, [error]);

  return (
    <section className="hero-dark flex min-h-[calc(100vh-72px)] items-center py-16">
      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Link href="/" className="inline-block">
          <Image
            src="/logos/logo-develop-bco.png"
            alt="Develop Talent & Technology"
            width={121}
            height={36}
            className="mx-auto h-9 w-auto object-contain"
          />
        </Link>

        <h1 className="mt-12 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          <span className="gradient-text">500</span>
        </h1>
        <p className="mt-4 text-xl font-bold text-white sm:text-2xl">
          Algo salió mal de nuestro lado
        </p>
        <p className="mx-auto mt-3 max-w-md text-base leading-7 text-white/60">
          Tuvimos un problema al cargar esta página. Puedes reintentar o volver al inicio; si persiste,
          escríbenos a contacto@develop.com.mx.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-medium text-hero-base shadow-lg transition hover:-translate-y-0.5"
          >
            <RotateCcw size={18} /> Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-8 py-4 text-base font-medium text-white backdrop-blur-md transition hover:bg-white/[0.12]"
          >
            <Home size={18} /> Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
