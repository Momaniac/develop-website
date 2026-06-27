import type { Metadata } from "next";
import LeadOrchestrator from "@/src/views/LeadOrchestrator";

export const metadata: Metadata = {
  title: "Lead Orchestrator — Gobierna equipos de agentes de IA",
  description:
    "Programa estrella para desarrollo de software con IA. Aprende a gobernar equipos de agentes inteligentes con certificación internacional. El rol del futuro.",
  alternates: { canonical: "/programas/lead-orchestrator" },
  openGraph: {
    title: "Lead Orchestrator · Develop",
    description: "No enseñamos a usar la IA. Enseñamos a gobernarla. Certificación internacional.",
    url: "/programas/lead-orchestrator",
  },
};

export default function Page() {
  return <LeadOrchestrator />;
}
