import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import BasixLogoFull from "@/components/basix-logo-full";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Obrigado - Basix Digital",
  description:
    "Obrigado pelo envio do formulário. Em breve nossa equipe entrará em contato para ajudar você a aplicar IA no seu negócio.",
};

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020540] via-[#060126] to-[#150259] text-white flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-[#020540]/90 backdrop-blur-sm border-b border-[#F244C4]/20">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
          <Link href="/" className="text-white" aria-label="Voltar para a página inicial">
            <BasixLogoFull className="w-auto h-10 md:h-16" />
          </Link>
          <Link href="/#go-to-ai">
            <Button className="bg-[#F244C4] hover:bg-[#EF1BF2] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Quero aplicar IA no meu negócio
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#F244C4]/30 bg-white/10 backdrop-blur-md p-10 text-center shadow-xl">
          <div className="absolute -top-10 -left-10 h-40 w-40 bg-[#F244C4]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -right-8 h-44 w-44 bg-[#EF1BF2]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F244C4]/20 text-[#F244C4]">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#F244C4]">Mensagem enviada</p>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Obrigado por confiar na Basix Digital
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                Recebemos o seu formulário e nossa equipe já está analisando sua mensagem. Em breve entraremos em contato com orientações personalizadas para aplicar IA no seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">O que acontece agora?</h3>
                <p className="text-gray-200 text-base">
                  Responderemos em até 1 dia útil com um plano inicial e próximos passos para a sua demanda.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Precisa de agilidade?</h3>
                <p className="text-gray-200 text-base">
                  Prefere falar agora? Nosso time está disponível para tirar dúvidas rápidas no WhatsApp.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Continue explorando</h3>
                <p className="text-gray-200 text-base">
                  Volte para a página inicial e descubra outras formas de destravar resultados com IA.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-[#F244C4] hover:bg-[#EF1BF2] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  Voltar para a página inicial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/5511991359596"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto border-[#F244C4]/60 text-white bg-white/5 hover:bg-white/10">
                  Falar pelo WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
