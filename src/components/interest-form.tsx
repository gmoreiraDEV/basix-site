"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RocketIcon, SendIcon } from "lucide-react";

export function InterestForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        challenge: '',
        whatsapp: '',
        email: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envio
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Formulário enviado:', formData);
        setIsSubmitting(false);

        // Reset form
        setFormData({
            name: '',
            company: '',
            challenge: '',
            whatsapp: '',
            email: ''
        });
    };

    return (
        <section className="py-24 bg-gradient-to-br from-white to-neutral-100">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="mx-auto mb-6 p-4 rounded-full bg-gradient-to-r from-accent to-green-800 w-fit">
                            <RocketIcon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                            Pronto para acelerar seu negócio?
                        </h2>
                        <p className="text-xl text-neutral-600">
                            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h
                        </p>
                    </div>

                    <Card className="shadow-2xl border-0">
                        <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl font-bold text-neutral-900">
                                Formulário de Interesse
                            </CardTitle>
                            <CardDescription className="text-neutral-600">
                                Conte-nos mais sobre seu negócio para oferecermos a melhor solução
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-neutral-700 font-medium">
                                            Nome Completo *
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Digite seu nome"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-neutral-700 font-medium">
                                            Empresa *
                                        </Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            type="text"
                                            placeholder="Nome da sua empresa"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            required
                                            className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="challenge" className="text-neutral-700 font-medium">
                                        Maior Desafio Hoje *
                                    </Label>
                                    <Textarea
                                        id="challenge"
                                        name="challenge"
                                        placeholder="Descreva qual é o principal desafio do seu negócio atualmente..."
                                        value={formData.challenge}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="transition-all duration-200 focus:ring-2 focus:ring-accent resize-none"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="whatsapp" className="text-neutral-700 font-medium">
                                            WhatsApp *
                                        </Label>
                                        <Input
                                            id="whatsapp"
                                            name="whatsapp"
                                            type="tel"
                                            placeholder="(11) 99999-9999"
                                            value={formData.whatsapp}
                                            onChange={handleInputChange}
                                            required
                                            className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-neutral-700 font-medium">
                                            E-mail *
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="transition-all duration-200 focus:ring-2 focus:ring-accent"
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-accent to-green-800 hover:from-accent/80 hover:to-green-900 transition-all duration-200 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Enviando...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <SendIcon className="w-5 h-5" />
                                            Quero começar com a Basix
                                        </div>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}