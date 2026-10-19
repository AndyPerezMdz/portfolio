import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nombre} — Desarrollador de software`,
    template: `%s — ${site.nombre}`,
  },
  description:
    "Ingeniero de software full-stack en Mérida, Yucatán. Software a la medida, de la base de datos a la interfaz, desarrollado con IA como compañera de programación.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: site.nombre,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E121A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Fuentes por <link> (no next/font): next/font/google falla al compilar en Vercel con Next 16.4 + Turbopack */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
