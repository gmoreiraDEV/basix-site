import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-neutral-100 py-24 px-4" id="hero">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          A estrutura que usamos para crescer, pronta para funcionar no seu
          negócio
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
          Na Basix, vendemos apenas o que usamos todos os dias. Soluções
          automatizadas para agências e especialistas que querem escalar com
          inteligência — sem código, sem complicação.{" "}
        </p>
        <div className="mt-10 flex justify-center items-center gap-4 flex-row">
          <Button asChild className="rounded-full">
            <Link href="#contato">Quero ver a solução funcionando</Link>
          </Button>
          <Button asChild variant="outline" className="ml-4 rounded-full">
            <Link href="/insider">Entrar para o Insider</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
