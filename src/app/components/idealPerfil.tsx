import { Check } from 'lucide-react';

const perfil = [
    'Sua empresa fatura mais de R$ 100 mil por mês',
    'Você tem pelo menos 5 pessoas no time',
    'Você sabe que precisa melhorar processos, mas não quer reinventar a roda',
    'Já tentou automatizar por conta própria e perdeu tempo e energia',
    'Quer acelerar, mas com estrutura e simplicidade'
];

export default function IdealPerfil() {
    return (
        <section id="perfil" className="bg-neutral-100 text-neutral-900 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    É pra sua empresa se...
                </h2>
                <ul className="space-y-6 text-left max-w-2xl mx-auto">
                    {perfil.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <Check className="text-neutral-900 mt-1" size={20} />
                            <span className="text-lg text-neutral-800">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
