import type { Metadata } from "next";
import SolucionesEstudiantes from "@/src/views/SolucionesEstudiantes";

export const metadata: Metadata = {
  title: "Soluciones para Estudiantes y Profesionales",
  description:
    "Ruta de empleabilidad, bolsa de trabajo y certificaciones internacionales. Certifícate con el respaldo de los líderes de la industria.",
  alternates: { canonical: "/soluciones/estudiantes" },
  openGraph: {
    title: "Soluciones para Estudiantes · Develop",
    description: "Empleabilidad, bolsa de trabajo y certificaciones internacionales.",
    url: "/soluciones/estudiantes",
  },
};

export default function Page() {
  return <SolucionesEstudiantes />;
}
