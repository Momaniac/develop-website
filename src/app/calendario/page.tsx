import type { Metadata } from "next";
import Calendario from "@/src/views/Calendario";

export const metadata: Metadata = {
  title: "Calendario de aperturas",
  description:
    "Consulta qué programas y cursos están por abrir y cuáles tienen el cupo lleno. Próxima generación de //TODO Academy en agosto de 2026.",
  alternates: { canonical: "/calendario" },
  openGraph: {
    title: "Calendario de aperturas · Develop",
    description: "Lo que viene y lo que está agotado en el ecosistema Develop.",
    url: "/calendario",
  },
};

export default function Page() {
  return <Calendario />;
}
