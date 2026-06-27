import type { Metadata } from "next";
import TodoAcademy from "@/src/views/TodoAcademy";

export const metadata: Metadata = {
  title: "//TODO Academy — Inmersión total de 6 meses",
  description:
    "Más de 6 meses de formación intensiva, 4 certificaciones internacionales y prácticas reales con empresas líderes. El horno donde se forjan los devs.",
  alternates: { canonical: "/programas/todo-academy" },
  openGraph: {
    title: "//TODO Academy · Develop",
    description: "6 meses de inmersión total, 4 certificaciones y prácticas reales.",
    url: "/programas/todo-academy",
  },
};

export default function Page() {
  return <TodoAcademy />;
}
