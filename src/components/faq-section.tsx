"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircleIcon } from "lucide-react";

const faqs = [
    {
        id: "item-1",
        question: "É técnico?",
        answer: "Não, absolutamente não! A Basix foi criada especificamente para empreendedores que não têm conhecimento técnico. Nossa plataforma é 100% visual e intuitiva, com interface drag-and-drop e processos automatizados. Você não precisa escrever uma única linha de código ou entender conceitos complexos de programação."
    },
    {
        id: "item-2",
        question: "Preciso saber programar?",
        answer: "De forma alguma! Este é um dos nossos principais diferenciais. Desenvolvemos a Basix pensando em empreendedores focados no negócio, não na tecnologia. Tudo é configurado através de interfaces visuais simples, formulários intuitivos e assistentes que te guiam passo a passo. Nossa equipe cuida de toda a parte técnica para você."
    },
    {
        id: "item-3",
        question: "Em quanto tempo vejo resultado?",
        answer: "Os primeiros resultados começam a aparecer em 7-15 dias após a implementação completa. No primeiro mês, você já terá dados concretos sobre leads gerados e oportunidades criadas. O retorno do investimento geralmente acontece entre 30-60 dias, dependendo do seu segmento e implementação das estratégias recomendadas."
    }
];

export function FAQSection() {
    return (
        <section className="py-24 bg-neutral-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="mx-auto mb-6 p-4 rounded-full bg-gradient-to-r from-accent to-green-800 w-fit">
                            <HelpCircleIcon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                            Dúvidas Frequentes
                        </h2>
                        <p className="text-xl text-neutral-600">
                            Esclarecemos as principais questões sobre a Basix
                        </p>
                    </div>

                    <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-50 to-green-50">
                        <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl font-bold text-gray-900">
                                Perguntas & Respostas
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} value={faq.id} className="border-neutral-200">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-neutral-900 hover:text-accent transition-colors duration-200">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-700 text-base leading-relaxed pt-2">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>

                    <div className="text-center mt-12">
                        <p className="text-neutral-600 mb-4">
                            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/80 text-white font-semibold rounded-lg transition-colors duration-200"
                            >
                                Falar no WhatsApp
                            </a>
                            <a
                                href="mailto:contato@basix.com.br"
                                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-lg transition-colors duration-200"
                            >
                                Enviar E-mail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}