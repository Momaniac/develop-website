import type { Metadata } from "next";
import Nosotros from "@/src/views/Nosotros";

export const metadata: Metadata = {
  title: "Nosotros — 19 años cerrando la brecha de talento TI",
  description:
    "Historia desde 2007, valores, el Modelo Develop y el Sistema DQS. Tecnología de vanguardia que nunca olvida a las personas.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros · Develop",
    description: "Desde 2007 cerrando la brecha de talento TI en México.",
    url: "/nosotros",
  },
};

export default function Page() {
  return <Nosotros />;
}
