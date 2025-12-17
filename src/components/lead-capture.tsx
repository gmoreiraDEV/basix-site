"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function LeadCapture() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<{
    name: string;
    email: string;
    whatsapp: string;
    challenge: string;
  }>();

  const onSubmit = async ({
    name,
    email,
    whatsapp,
    challenge,
  }: {
    name: string;
    email: string;
    whatsapp: string;
    challenge: string;
  }) => {
    const dataToSend = {
      name,
      email,
      message: challenge,
      whatsapp,
      source: "lead-capture",
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.status === "success") {
        toast.success("Obrigado por se inscrever! Em breve entraremos em contato.");
        router.push("/obrigado");
      } else if (data.status === "duplicate") {
        toast.info(
          data.message ?? "Este e-mail já foi registrado. Responderemos em breve."
        );
      } else {
        toast.error(
          "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."
        );
      }
    } catch (err) {
      console.error(err);
      toast.error("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
    } finally {
      reset();
    }
  };

  return (
    <section className="py-20 px-4" id="go-to-ai">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-white/10 border-[#F244C4]/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white mb-4">
              Descubra como a IA pode transformar seu negócio
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Deixe seus dados e entraremos em contato com orientações práticas
              e oportunidades exclusivas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="name" className="text-white/80 font-medium">
                  Nome *
                </Label>
                <Input
                  {...register("name")}
                  id="name"
                  placeholder="Seu nome"
                  className="bg-white/10 border-[#F244C4]/30 text-white placeholder:text-white/80"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80 font-medium">
                  E-mail *
                </Label>
                <Input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 border-[#F244C4]/30 text-white placeholder:text-white/80"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-white/80 font-medium">
                  WhatsApp *
                </Label>
                <Input
                  {...register("whatsapp")}
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="bg-white/10 border-[#F244C4]/30 text-white placeholder:text-white/80"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label
                  htmlFor="challenge"
                  className="text-white/80 font-medium"
                >
                  Maior Desafio Hoje *
                </Label>
                <Textarea
                  {...register("challenge")}
                  id="challenge"
                  placeholder="Descreva qual é o principal desafio do seu negócio atualmente..."
                  required
                  rows={4}
                  className="bg-white/10 border-[#F244C4]/30 text-white placeholder:text-white/80 transition-all duration-200 focus:ring-2 focus:ring-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#F244C4] hover:bg-[#EF1BF2] text-white font-semibold py-3 rounded-full md:col-span-2"
              >
                Quero aplicar IA no meu negócio
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
