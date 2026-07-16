import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/src/components/Layout";
import BellaChat from "@/src/components/BellaChat";
import { MoonoDashLayer } from "@/src/components/Moono";
import { jsonLdScript } from "@/src/lib/jsonLd";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const SITE_URL = "https://www.develop.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Develop · Talent & Technology — Formación y certificación en IA",
    template: "%s · Develop",
  },
  description:
    "Develop Talent & Technology — Formamos a los arquitectos de la era de la inteligencia artificial. 35,000+ talentos certificados y 91% de éxito en certificación internacional.",
  applicationName: "Develop Talent & Technology",
  keywords: [
    "certificación TI",
    "inteligencia artificial",
    "Lead Orchestrator",
    "//TODO Academy",
    "nearshoring",
    "talento tecnológico",
    "capacitación empresas México",
  ],
  authors: [{ name: "Develop Talent & Technology" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Develop Talent & Technology",
    title: "Develop · Talent & Technology",
    description:
      "Formamos a los arquitectos de la era de la IA. 35,000+ talentos certificados y 91% de éxito.",
    // La imagen 1200×630 la aporta src/app/opengraph-image.tsx (convención de Next.js).
  },
  twitter: {
    card: "summary_large_image",
    title: "Develop · Talent & Technology",
    description:
      "Formamos a los arquitectos de la era de la IA. 35,000+ talentos certificados y 91% de éxito.",
    // La imagen la aporta src/app/twitter-image.tsx.
  },
  icons: { icon: "/logos/favicon.png" },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Develop Talent & Technology",
  legalName: "Plurione S.A. de C.V.",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-develop.png`,
  description:
    "Consultoría tecnológica, capacitación y certificación internacional en TI e inteligencia artificial.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Puebla 46, 4.º piso, Col. Roma Norte",
    addressLocality: "Cuauhtémoc",
    addressRegion: "Ciudad de México",
    postalCode: "06700",
    addressCountry: "MX",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-56-1024-8938",
    contactType: "customer service",
    email: "contacto@develop.com.mx",
    areaServed: "MX",
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationSchema) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BellaChat />
          <MoonoDashLayer />
        </div>
      </body>
    </html>
  );
}
