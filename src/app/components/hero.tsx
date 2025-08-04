export default function Hero() {
    return (
        <section className="bg-neutral-900 text-neutral-100 py-24 px-4" id="hero">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    O básico bem feito <br className="hidden md:block" /> para empresas que pensam grande.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                    Criamos e otimizamos soluções digitais essenciais — automações, processos e ferramentas — para negócios que precisam de agilidade, escala e resultado.
                </p>
                <a
                    href="#contato"
                    className="mt-10 inline-block bg-neutral-100 text-neutral-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-100 transition"
                >
                    Quero saber como a Basix pode ajudar minha empresa
                </a>
            </div>
        </section>
    );
}
