import type { Metadata } from "next";
import Contacto from "@/src/views/Contacto";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos sobre tu próximo paso. Certifica a tu equipo, encuentra talento o explora nuestros programas. Te respondemos en menos de 24 horas.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto · Develop",
    description: "Hablemos sobre tu próximo paso. Te respondemos en menos de 24 horas.",
    url: "/contacto",
  },
};

export default function Page() {
  return <Contacto />;
}
