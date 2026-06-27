import type { Metadata } from "next";
import { BlogPage } from "@/src/views/SecondaryPages";

export const metadata: Metadata = {
  title: "Blog — IA, nearshoring y educación tecnológica",
  description:
    "Tendencias en inteligencia artificial, nearshoring TI, educación y talento. El eje de contenido del ecosistema Develop.",
  alternates: { canonical: "/recursos/blog" },
  openGraph: {
    title: "Blog · Develop",
    description: "Tendencias en IA, nearshoring y educación tecnológica.",
    url: "/recursos/blog",
  },
};

export default function Page() {
  return <BlogPage />;
}
