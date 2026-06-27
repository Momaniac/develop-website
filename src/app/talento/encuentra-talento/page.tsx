import type { Metadata } from "next";
import EncuentraTalento from "@/src/views/EncuentraTalento";

export const metadata: Metadata = {
  title: "Encuentra Talento — Perfiles TI certificados",
  description:
    "Busca perfiles certificados, solicita talento a medida y conoce el método Quary de selección Top Grading. Talento listo para producir desde el primer día.",
  alternates: { canonical: "/talento/encuentra-talento" },
  openGraph: {
    title: "Encuentra Talento · Develop",
    description: "Perfiles TI certificados, evaluados con Top Grading.",
    url: "/talento/encuentra-talento",
  },
};

export default function Page() {
  return <EncuentraTalento />;
}
