import type { Metadata } from "next";
import FabricaTalento from "@/src/views/FabricaTalento";

export const metadata: Metadata = {
  title: "Fábrica de Talento",
  description:
    "Co-creación de perfiles a medida para empresas. Formamos talento TI personalizado según las necesidades específicas de tu organización.",
  alternates: { canonical: "/soluciones/fabrica-de-talento" },
  openGraph: {
    title: "Fábrica de Talento · Develop",
    description: "Co-creación de perfiles TI a medida para tu empresa.",
    url: "/soluciones/fabrica-de-talento",
  },
};

export default function Page() {
  return <FabricaTalento />;
}
