import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

import { PageViewTracker } from "./analytics/pageview";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Basix Digital - IA sem complicação para profissionais e empresas",
  description:
    "Consultoria e Mentoria em Inteligência Artificial para PMEs e profissionais. Automatize processos, aumente vendas e ganhe produtividade com IA sem complicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true} data-lt-installed="true">
      <head>
        <link rel="icon" type="image/png" href="/assets/img/bx.png" />
      </head>
      <body className={`${geist.className} ${geistMono.className}`}>
        <PageViewTracker />
        {children}
        <GoogleAnalytics gaId="G-N5LQ4YPZ13" />
        <Toaster />
      </body>
    </html>
  );
}
