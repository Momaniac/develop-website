import type { Metadata } from "next";
import SolucionesEmpresas from "@/src/views/SolucionesEmpresas";

export const metadata: Metadata = {
  title: "Soluciones para Empresas",
  description:
    "Reclutamiento con Top Grading, nearshoring y capacitación corporativa. Accede a talento TI listo para el mercado y reduce el costo de contratación.",
  alternates: { canonical: "/soluciones/empresas" },
  openGraph: {
    title: "Soluciones para Empresas · Develop",
    description:
      "Reclutamiento con Top Grading, nearshoring y capacitación corporativa para tu empresa.",
    url: "/soluciones/empresas",
  },
};

export default function Page() {
  return <SolucionesEmpresas />;
}
