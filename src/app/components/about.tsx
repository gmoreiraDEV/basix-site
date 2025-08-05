export default function About() {
    return (
        <section id="sobre" className="bg-neutral-100 text-neutral-900 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    A mesma estrutura que usamos na Basix. Agora na sua empresa.

                </h2>
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                    Organizamos, automatizamos e escalamos nossos processos internos com soluções próprias — que agora fazem parte da nossa entrega como produto. Você não precisa de freelancers, nem de devs. Só precisa de algo que já funciona.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-neutral-200 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Basix Lead</h3>
                        <p className="text-neutral-700">Gere, organize e qualifique leads com CRM pronto para uso</p>
                    </div>
                    <div className="bg-neutral-200 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Basix Flow</h3>
                        <p className="text-neutral-700">Automatize propostas, follow-ups e agendamentos</p>
                    </div>
                    <div className="bg-neutral-200 p-4 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Basix Scale</h3>
                        <p className="text-neutral-700">Dashboards, IA no WhatsApp e reativação inteligente</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
