import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Basix Digital",
  description:
    "Criamos e otimizamos soluções digitais essenciais — automações, processos e ferramentas — para negócios que precisam de agilidade, escala e resultado.",
  icons: {
    icon: "/assets/img/bx.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="w-[100vw] h-[100vh]">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
