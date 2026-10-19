import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html lang="es" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
