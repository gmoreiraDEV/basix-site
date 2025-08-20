import { Target, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


export function Solutions() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-white text-center mb-16">
                    Nossos <span className="text-[#F244C4]">Serviços</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white/5 border-[#F244C4]/30 backdrop-blur-sm">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F244C4]/20 rounded-lg flex items-center justify-center mb-4">
                                <Target className="h-6 w-6 text-[#F244C4]" />
                            </div>
                            <CardTitle className="text-2xl text-white">Consultoria de IA</CardTitle>
                            <CardDescription className="text-gray-300 text-lg">
                                Diagnóstico estratégico + plano de ação + protótipo prático
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-gray-300">
                            <p>
                                Analisamos seu negócio, identificamos oportunidades de IA e criamos um plano personalizado com
                                implementação prática.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-[#F244C4]/30 backdrop-blur-sm">
                        <CardHeader>
                            <div className="w-12 h-12 bg-[#F244C4]/20 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-[#F244C4]" />
                            </div>
                            <CardTitle className="text-2xl text-white">Mentoria em IA</CardTitle>
                            <CardDescription className="text-gray-300 text-lg">
                                Programa de 6 semanas com encontros ao vivo, templates e projeto prático
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-gray-300">
                            <p>
                                Acompanhamento personalizado para implementar IA no seu dia a dia com suporte contínuo e resultados práticos já nas primeiras semanas.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
