'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.string().email({ message: "E-mail inválido" }),
    company: z.string().min(1, { message: "Empresa é obrigatório" }),
    revenue: z.string().min(1, { message: "Faturamento é obrigatório" }),
    message: z.string().min(1, { message: "Mensagem é obrigatório" })
})

export default function Contato() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            revenue: "default",
            message: ""
        }
    })

    const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.promise(response.json(), {
                    loading: "Enviando...",
                    success: "Formulário enviado com sucesso!",
                    description: "Obrigado pelo contato. Em breve retornaremos.",
                    error: "Erro ao enviar"
                });
                form.reset();
            } else {
                throw new Error(data.message || 'Erro desconhecido');
            }
        } catch (error: unknown) {
            toast.error("Erro ao enviar", error instanceof Error ? {
                description: error.message
            } : {
                description: <p className="text-sm text-neutral-500">Tente novamente mais tarde.</p>
            });
        }
    };

    return (
        <section id="contato" className="bg-neutral-200 text-neutral-900 py-20 px-4">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Vamos conversar?
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nome" {...field}
                                            className="border border-neutral-500 px-4 py-2 rounded-md" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input placeholder="E-mail" {...field}
                                            className="border border-neutral-500 px-4 py-2 rounded-md" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Empresa</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Empresa" {...field}
                                            className="border border-neutral-500 px-4 py-2 rounded-md" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="revenue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Faturamento mensal</FormLabel>
                                    <FormControl>
                                        <Select
                                            {...field}
                                            onValueChange={field.onChange}
                                            defaultValue="default"
                                        >
                                            <SelectTrigger className="w-full border border-neutral-500 px-4 py-2 rounded-md">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="default">Selecione</SelectItem>
                                                <SelectItem value="100k-200k">R$100k - R$200k</SelectItem>
                                                <SelectItem value="200k-500k">R$200k - R$500k</SelectItem>
                                                <SelectItem value="500k+">Acima de R$500k</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensagem</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Mensagem" {...field}
                                            className="border border-neutral-500 px-4 py-2 rounded-md"
                                            rows={4}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full mt-4">
                            Enviar mensagem
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}
