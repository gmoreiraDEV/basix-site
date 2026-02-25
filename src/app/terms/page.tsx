import type { Metadata } from "next"
import Link from "next/link"

import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Termos de Uso | Basix Digital",
  description:
    "Termos de Uso da Basix Digital: condições para navegação e utilização do site.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020540] via-[#060126] to-[#150259] text-white flex flex-col">
      <main className="flex-1 px-4 py-16">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-[#F244C4]/30 bg-white/10 p-8 backdrop-blur-md md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#F244C4]">
            Documento legal
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">Termos de Uso</h1>
          <p className="mt-3 text-sm text-gray-200">
            Última atualização: 25 de fevereiro de 2026
          </p>

          <div className="mt-8 space-y-8 text-gray-100">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">1. Aceitação</h2>
              <p>
                Ao acessar e utilizar este site, você concorda com os presentes
                Termos de Uso. Caso não concorde, recomendamos interromper a
                navegação.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                2. Uso do site
              </h2>
              <p>
                O conteúdo disponibilizado tem finalidade informativa e comercial.
                Você se compromete a usar o site de forma lícita, sem violar
                direitos de terceiros ou comprometer o funcionamento da
                plataforma.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                3. Propriedade intelectual
              </h2>
              <p>
                Textos, marcas, logotipos, identidade visual e demais materiais
                deste site pertencem à Basix Digital ou a seus licenciadores, e
                não podem ser reproduzidos sem autorização.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                4. Limitação de responsabilidade
              </h2>
              <p>
                Buscamos manter as informações atualizadas e corretas, mas não
                garantimos ausência de erros, indisponibilidades ou adequação
                integral para finalidades específicas.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                5. Links para terceiros
              </h2>
              <p>
                O site pode conter links para serviços externos. A Basix Digital
                não se responsabiliza por políticas, práticas ou conteúdos desses
                terceiros.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                6. Alterações destes termos
              </h2>
              <p>
                Podemos atualizar estes Termos de Uso periodicamente. A versão
                vigente será sempre publicada nesta página com a data de revisão.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-white">
                7. Contato
              </h2>
              <p>
                Para dúvidas sobre estes termos, utilize nossos canais oficiais de
                atendimento disponíveis no site.
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
