import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Basix Digital - IA sem complicação para profissionais e empresas",
  description:
    "Consultoria e Mentoria em Inteligência Artificial para PMEs e profissionais. Automatize processos, aumente vendas e ganhe produtividade com IA sem complicação.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/assets/img/bx.png" />
      </head>
      <body className={`${geist.className} ${geistMono.className}`}>
        {children}
      </body>
    </html>
  )
}
