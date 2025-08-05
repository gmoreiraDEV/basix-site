import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
    return (
        <section id="cta" className="bg-neutral-100 text-neutral-900 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Vamos escalar juntos?
                </h2>
                <p>Peça uma demonstração da Basix funcionando na prática — com os mesmos fluxos, painéis e automações que usamos todos os dias.</p>
                <div className="mt-6 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/insider">Quero ver como funciona</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="#contato">Agendar conversa</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
