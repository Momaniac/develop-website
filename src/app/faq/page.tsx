import type { Metadata } from "next";
import FAQ from "@/src/views/FAQ";
import { faqSchemaItems } from "@/src/views/faqData";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos tus dudas sobre los programas, certificaciones internacionales y servicios de talento de Develop. Lead Orchestrator, //TODO Academy, Quary y más.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Preguntas frecuentes · Develop",
    description:
      "Todo lo que necesitas saber sobre los programas, certificaciones y servicios de talento de Develop.",
    url: "/faq",
  },
};

// JSON-LD FAQPage para rich results en buscadores.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ />
    </>
  );
}
