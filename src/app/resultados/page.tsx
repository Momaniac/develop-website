import type { Metadata } from "next";
import Resultados from "@/src/views/Resultados";

export const metadata: Metadata = {
  title: "Resultados — 96% de inserción laboral",
  description:
    "Indicadores de éxito, métricas y casos de éxito con instituciones y empresas líderes como CONALEP y Accenture. 35,000+ talentos certificados.",
  alternates: { canonical: "/resultados" },
  openGraph: {
    title: "Resultados · Develop",
    description: "96% de inserción laboral y 35,000+ talentos certificados.",
    url: "/resultados",
  },
};

export default function Page() {
  return <Resultados />;
}
