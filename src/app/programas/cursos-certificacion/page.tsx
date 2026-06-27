import type { Metadata } from "next";
import CursosCertificacion from "@/src/views/CursosCertificacion";

export const metadata: Metadata = {
  title: "Cursos de Certificación — 21 áreas, +100 cursos",
  description:
    "Más de 100 cursos con certificación internacional incluida en 21 áreas tecnológicas. Domina tecnologías específicas a tu ritmo.",
  alternates: { canonical: "/programas/cursos-certificacion" },
  openGraph: {
    title: "Cursos de Certificación · Develop",
    description: "+100 cursos con certificación internacional incluida.",
    url: "/programas/cursos-certificacion",
  },
};

export default function Page() {
  return <CursosCertificacion />;
}
