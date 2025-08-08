"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, StarIcon, ZapIcon, TrendingUpIcon } from "lucide-react";

const plans = [
    {
        id: "diagnostico",
        name: "Diagnóstico Estratégico",
        description: "Análise completa do seu negócio para identificar oportunidades de crescimento",
        price: "R$ 497",
        originalPrice: "R$ 997",
        badge: "Valor Promocional Beta",
        badgeColor: "bg-accent",
        icon: TrendingUpIcon,
        features: [
            "Análise completa do mercado",
            "Identificação de oportunidades",
            "Plano estratégico personalizado",
            "Relatório detalhado",
            "1 sessão de consultoria"
        ],
        cta: "Fazer Diagnóstico",
        popular: false
    },
    {
        id: "agente",
        name: "Agente de Geração de Leads",
        description: "Sistema automatizado para captar e nutrir leads qualificados",
        price: "R$ 297",
        setupPrice: "R$ 497",
        priceDescription: "/mês + setup único",
        badge: "Mais Popular",
        badgeColor: "bg-accent",
        icon: ZapIcon,
        features: [
            "Automação completa de leads",
            "Integração com WhatsApp",
            "Dashboard de acompanhamento",
            "Suporte técnico incluído",
            "Otimização contínua"
        ],
        cta: "Começar Agora",
        popular: true
    },
    {
        id: "combo",
        name: "Combo Completo",
        description: "Diagnóstico + Agente + Suporte premium com desconto especial",
        price: "R$ 697",
        originalPrice: "R$ 1.291",
        priceDescription: "economia de R$ 594",
        badge: "Melhor Custo-Benefício",
        badgeColor: "bg-accent",
        icon: StarIcon,
        features: [
            "Tudo do Diagnóstico Estratégico",
            "Tudo do Agente de Geração",
            "Suporte premium prioritário",
            "Consultoria mensal incluída",
            "Garantia de 30 dias"
        ],
        cta: "Quero o Combo",
        popular: false
    }
];

export function PricingSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-neutral-100 to-neutral-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                        Planos & Preços
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        Escolha o plano ideal para acelerar o crescimento do seu negócio
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan) => {
                        const IconComponent = plan.icon;
                        return (
                            <Card
                                key={plan.id}
                                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular ? 'ring-2 ring-accent shadow-xl' : 'hover:shadow-xl'
                                    }`}
                            >
                                <CardHeader className="text-center pb-8">
                                    <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-accent to-green-800">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>

                                    <Badge className={`${plan.badgeColor} text-white mb-4 mx-auto w-fit`}>
                                        {plan.badge}
                                    </Badge>

                                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                    <CardDescription className="text-neutral-600 mt-2">
                                        {plan.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="text-center pb-8">
                                    <div className="mb-6">
                                        <div className="flex items-center justify-center gap-2">
                                            {plan.originalPrice && (
                                                <span className="text-lg text-neutral-400 line-through">
                                                    {plan.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-4xl font-bold text-neutral-900 mb-1">
                                            {plan.price}
                                        </div>
                                        {plan.setupPrice && (
                                            <div className="text-sm text-neutral-500 mb-1">
                                                + {plan.setupPrice} setup único
                                            </div>
                                        )}
                                        {plan.priceDescription && (
                                            <div className="text-sm text-neutral-500">
                                                {plan.priceDescription}
                                            </div>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                                                <span className="text-neutral-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        className={`w-full py-3 text-lg font-semibold transition-all duration-200 ${plan.popular
                                            ? 'bg-gradient-to-r from-accent to-green-800 hover:from-accent/80 hover:to-green-900'
                                            : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                                            }`}
                                    >
                                        {plan.cta}
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}