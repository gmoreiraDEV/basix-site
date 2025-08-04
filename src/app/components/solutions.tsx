import { CheckCircle } from 'lucide-react';

const solucoes = [
    'Diagnóstico de processos digitais',
    'Automações com IA, WhatsApp e formulários inteligentes',
    'Implantação de CRMs e sistemas integrados',
    'Organização de operações e tarefas recorrentes',
    'Dashboards de controle e performance'
];

export default function Solutions() {
    return (
        <section id="solucoes" className="bg-gray-100 text-black py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    O que entregamos
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {solucoes.map((solucao, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <CheckCircle className="text-black mt-1" size={24} />
                            <p className="text-lg text-gray-800">{solucao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
