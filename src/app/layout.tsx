import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamil Libigocki — Web Developer & AI Engineer",
  description:
    "Portfolio Kamila Libigockiego — projektowanie i tworzenie stron internetowych oraz wyspecjalizowanych modeli AI dla przedsiębiorstw.",
  keywords: [
    "web developer",
    "AI engineer",
    "portfolio",
    "Kamil Libigocki",
    "strony internetowe",
    "modele AI",
    "web development",
    "sztuczna inteligencja",
  ],
  authors: [{ name: "Kamil Libigocki" }],
  openGraph: {
    title: "Kamil Libigocki — Web Developer & AI Engineer",
    description:
      "Projektowanie stron internetowych i tworzenie wyspecjalizowanych modeli AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body className="grain-overlay">
        {children}
      </body>
    </html>
  );
}
