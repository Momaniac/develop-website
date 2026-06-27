import type { Metadata } from "next";
import UneteColaborador from "@/src/views/UneteColaborador";

export const metadata: Metadata = {
  title: "Únete como Colaborador",
  description:
    "Vacantes internas de Develop y bolsa de talento externo. Sube tu CV, fórmate y deja que las mejores empresas te encuentren.",
  alternates: { canonical: "/talento/unete-como-colaborador" },
  openGraph: {
    title: "Únete como Colaborador · Develop",
    description: "Vacantes internas y bolsa de talento externo en el ecosistema Develop.",
    url: "/talento/unete-como-colaborador",
  },
};

export default function Page() {
  return <UneteColaborador />;
}
