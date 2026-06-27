import type { Metadata } from "next";
import SolucionesInstituciones from "@/src/views/SolucionesInstituciones";

export const metadata: Metadata = {
  title: "Soluciones para Instituciones",
  description:
    "Convenios universitarios, currícula DQS y certificación docente. Lleva formación de clase mundial a tus aulas con metodología probada.",
  alternates: { canonical: "/soluciones/instituciones" },
  openGraph: {
    title: "Soluciones para Instituciones · Develop",
    description: "Convenios universitarios, currícula DQS y certificación docente.",
    url: "/soluciones/instituciones",
  },
};

export default function Page() {
  return <SolucionesInstituciones />;
}
