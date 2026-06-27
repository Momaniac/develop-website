import type { Metadata } from "next";
import AvisoPrivacidad from "@/src/views/AvisoPrivacidad";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de Plurione S.A. de C.V. (Develop Talent & Technology). Tratamiento y protección de datos personales conforme a la LFPDPPP.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AvisoPrivacidad />;
}
