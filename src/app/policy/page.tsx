import type { Metadata } from "next"
import Link from "next/link"

import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidade | Basix Digital",
  description:
    "Política de Privacidade da Basix Digital: saiba como tratamos e protegemos os seus dados.",
}

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020540] via-[#060126] to-[#150259] text-white flex flex-col">
      <main className="flex-1 px-4 py-16">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-[#F244C4]/30 bg-white/10 p-8 backdrop-blur-md md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#F244C4]">
            Documento legal
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-gray-200">
            Última atualização: 25 de fevereiro de 2026
          </p>

          <div className="mt-8 space-y-8 text-gray-100">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">1. Introdução</h2>
              <p>
                Esta Política de Privacidade explica como a Basix Digital coleta,
                usa, armazena e protege os dados pessoais informados por você ao
                utilizar nosso site e nossos formulários de contato.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                2. Dados que podemos coletar
              </h2>
              <p>
                Podemos coletar dados como nome, e-mail, telefone/WhatsApp,
                empresa e mensagens enviadas por você para atendimento comercial
                e suporte.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                3. Como usamos os dados
              </h2>
              <p>Utilizamos os dados para:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>responder solicitações e dúvidas;</li>
                <li>entrar em contato sobre nossos serviços;</li>
                <li>melhorar a experiência no site e nossos atendimentos;</li>
                <li>cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                4. Compartilhamento de dados
              </h2>
              <p>
                Não vendemos seus dados pessoais. O compartilhamento pode ocorrer
                apenas com fornecedores essenciais para operação do site e envio
                de comunicações, sempre com medidas adequadas de segurança.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">5. Segurança</h2>
              <p>
                Adotamos medidas técnicas e administrativas para proteger os
                dados contra acesso não autorizado, perda, alteração ou
                divulgação indevida.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                6. Seus direitos (LGPD)
              </h2>
              <p>
                Você pode solicitar confirmação de tratamento, acesso, correção,
                anonimização, portabilidade ou exclusão dos seus dados pessoais,
                quando aplicável, conforme a Lei Geral de Proteção de Dados
                (LGPD).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                7. Contato
              </h2>
              <p>
                Para solicitações relacionadas a esta política, utilize nossos
                canais oficiais de contato disponíveis no site.
              </p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:dev@basixdigital.com.br"
                  className="text-[#F244C4] hover:text-[#EF1BF2] underline underline-offset-4"
                >
                  dev@basixdigital.com.br
                </a>
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex rounded-full border border-[#F244C4]/50 px-5 py-2 text-sm font-medium text-white transition hover:bg-[#F244C4]/20"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
