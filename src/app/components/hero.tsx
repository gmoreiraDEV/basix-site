import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="bg-neutral-900 text-neutral-100 py-24 px-4" id="hero">

            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    A estrutura que usamos para crescer, pronta para funcionar no seu negócio
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                    Na Basix, vendemos apenas o que usamos todos os dias. Soluções automatizadas para agências e especialistas que querem escalar com inteligência — sem código, sem complicação.                </p>
                <div className="mt-10 flex justify-center items-center gap-4 flex-row">
                    <a
                        href="#contato"
                        className="inline-block bg-neutral-100 text-neutral-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-neutral-100 transition"
                    >
                        Quero ver a solução funcionando
                    </a>
                    <Button variant="outline" className="ml-4 rounded-full">
                        Ver pacotes
                    </Button>
                </div>
            </div>
        </section>
    );
}
