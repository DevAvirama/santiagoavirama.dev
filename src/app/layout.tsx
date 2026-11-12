import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santiagoavirama.dev"),
  title: {
    default:
      "Santiago Avirama — Desarrollador Full Stack End-to-End | Arquitecturas Web, IA y Seguridad",
    template: "%s | Santiago Avirama",
  },
  description:
    "Portafolio de ingeniería de software y casos de estudio técnicos de Santiago Avirama. Arquitecturas web, sistemas distribuidos, visión artificial y seguridad desde el diseño.",
  keywords: [
    "Santiago Avirama",
    "DevAvirama",
    "Desarrollador Full Stack",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Django",
    "Visión Artificial",
    "YOLOv8",
    "ISO 27001",
    "Ciberseguridad",
    "Popayán",
    "Colombia",
  ],
  authors: [{ name: "Santiago Avirama", url: "https://santiagoavirama.dev" }],
  creator: "Santiago Avirama",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://santiagoavirama.dev",
    siteName: "santiagoavirama.dev",
    title:
      "Santiago Avirama — Desarrollador Full Stack End-to-End | Arquitecturas Web, IA y Seguridad",
    description:
      "Casos de estudio de ingeniería de software: Ecosistema PorciTech, doc-scan-monorepo, arquitecturas hexagonales, visión artificial y seguridad desde el diseño.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Avirama — Desarrollador Full Stack End-to-End",
    description:
      "Arquitecturas Web, Sistemas Distribuidos, Visión Artificial y Seguridad desde el Diseño.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="relative flex min-h-screen flex-col bg-slate-950 font-sans text-slate-100 antialiased">
        <AmbientBackground />
        <Navbar />
        <main id="contenido-principal" className="relative z-10 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
