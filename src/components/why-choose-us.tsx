import { Brain, Target, Zap } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="py-20 px-4 bg-white/5">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-white text-center mb-16">
                    Por que escolher a <span className="text-[#F244C4]">Basix Digital?</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#F244C4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Zap className="h-8 w-8 text-[#F244C4]" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Ganhe tempo e produtividade</h3>
                        <p className="text-gray-300">
                            Automatize tarefas repetitivas e foque no que realmente importa para seu negócio.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#F244C4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Target className="h-8 w-8 text-[#F244C4]" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Aumente vendas e organize processos</h3>
                        <p className="text-gray-300">
                            Otimize seus processos comerciais e organizacionais com soluções inteligentes.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#F244C4]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Brain className="h-8 w-8 text-[#F244C4]" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4">Use IA sem ser técnico</h3>
                        <p className="text-gray-300">
                            Implementações práticas e acessíveis, sem necessidade de conhecimento técnico avançado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}