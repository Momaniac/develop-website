import type { Metadata } from "next";
import SolucionesGobierno from "@/src/views/SolucionesGobierno";

export const metadata: Metadata = {
  title: "Soluciones para Gobierno",
  description:
    "Programas de formación masiva con impacto social y transparencia total. Certificación internacional para programas federales y estatales.",
  alternates: { canonical: "/soluciones/gobierno" },
  openGraph: {
    title: "Soluciones para Gobierno · Develop",
    description: "Formación masiva con impacto social y transparencia total.",
    url: "/soluciones/gobierno",
  },
};

export default function Page() {
  return <SolucionesGobierno />;
}
