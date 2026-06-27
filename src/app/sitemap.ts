import type { MetadataRoute } from "next";

const SITE_URL = "https://www.develop.com.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/soluciones/empresas", priority: 0.9, changeFrequency: "monthly" },
    { path: "/soluciones/instituciones", priority: 0.9, changeFrequency: "monthly" },
    { path: "/soluciones/gobierno", priority: 0.9, changeFrequency: "monthly" },
    { path: "/soluciones/estudiantes", priority: 0.9, changeFrequency: "monthly" },
    { path: "/soluciones/fabrica-de-talento", priority: 0.8, changeFrequency: "monthly" },
    { path: "/programas/lead-orchestrator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/programas/todo-academy", priority: 0.8, changeFrequency: "monthly" },
    { path: "/programas/cursos-certificacion", priority: 0.8, changeFrequency: "monthly" },
    { path: "/calendario", priority: 0.7, changeFrequency: "weekly" },
    { path: "/talento/encuentra-talento", priority: 0.8, changeFrequency: "monthly" },
    { path: "/talento/unete-como-colaborador", priority: 0.8, changeFrequency: "monthly" },
    { path: "/nosotros", priority: 0.7, changeFrequency: "yearly" },
    { path: "/resultados", priority: 0.7, changeFrequency: "monthly" },
    { path: "/recursos/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contacto", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
