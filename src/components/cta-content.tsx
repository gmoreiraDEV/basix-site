import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function CTAContent() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-[#F244C4]/20 to-[#EF1BF2]/20">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Está pronto para transformar seu negócio com IA?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Comece hoje mesmo a aplicar IA no seu negócio. Primeiro passo grátis: diagnóstico inicial sem compromisso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="https://wa.me/5511991359596">
                        <Button
                            size="lg"
                            className="bg-[#F244C4] hover:bg-[#EF1BF2] text-white font-semibold px-8 py-4 rounded-full text-lg"
                        >
                            Fale com a Basix Digital
                            <MessageCircle className="ml-2 h-5 w-5" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}