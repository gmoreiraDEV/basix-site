import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const solucoes = [
    {
        nome: 'Basix Lead',
        incluido: 'CRM + automações básicas + formulário',
        cta: 'Quero começar'
    },
    {
        nome: 'Basix Flow',
        incluido: 'Tudo do Lead + Proposta + Reativação',
        cta: 'Quero escalar'
    },
    {
        nome: 'Basix Scale',
        incluido: 'Tudo do Flow + IA + Dashboard',
        cta: 'Quero dominar'
    }
]

export default function Solutions() {
    return (
        <section id="solucoes" className="bg-neutral-200 text-neutral-900 py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {solucoes.map((solucao, index) => (
                        <div key={index} className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-neutral-900 mt-1" size={24} />
                                <p className="text-lg text-neutral-800">{solucao.nome}</p>
                            </div>
                            <p className="text-lg text-neutral-800">{solucao.incluido}</p>
                            <Button variant="outline" className="ml-4">{solucao.cta}</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
