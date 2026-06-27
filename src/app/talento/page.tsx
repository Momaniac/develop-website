import type { Metadata } from "next";
import EncuentraTalento from "@/src/views/EncuentraTalento";

export const metadata: Metadata = {
  title: "Talento — El puente entre empresas y profesionales TI",
  description:
    "Conectamos a empresas con profesionales certificados, evaluados y listos para producir desde el primer día.",
  alternates: { canonical: "/talento" },
  openGraph: {
    title: "Talento · Develop",
    description: "El puente entre empresas y profesionales TI certificados.",
    url: "/talento",
  },
};

export default function Page() {
  return <EncuentraTalento />;
}
