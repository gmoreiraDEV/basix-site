"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BasixLogoFull from "@/components/basix-logo-full";
import { FixedLogoDesktop } from "@/components/fixed-logo-desktop";

const SECTIONS = [
  {
    id: "s1",
    leftText: "BASIX é simples",
    title: "Soluções descomplicadas com IA",
    body: "Nada de curva de aprendizado infinita. Você foca no negócio, a Basix cuida do resto.",
    cta: "Quero uma solução simples",
  },
  {
    id: "s2",
    leftText: "Automação que vende",
    title: "Gere leads e vendas no piloto automático",
    body: "Mais leads. Mais vendas. No piloto automático. Conecte IA ao seu funil comercial.",
    cta: "Quero automatizar minhas vendas",
  },
  {
    id: "s3",
    leftText: "IA sem fricção",
    title: "IA integrada sem complicação",
    body: "IA conectada aos seus processos, sem precisar programar. Natural, invisível e poderosa como deve ser.",
    cta: "Quero usar IA no meu negócio",
  },
  {
    id: "s4",
    leftText: "Implementação guiada",
    title: "Acompanhamento do diagnóstico à ativação",
    body: "Você não precisa saber como fazer. Só precisa querer o resultado. Nós guiamos o caminho e entregamos junto com você.",
    cta: "Quero ser guiado pela Basix",
  },
];

const STICKY_UNTIL = 4;

export function Hero() {
  const [active, setActive] = useState(0);
  const stickyIds = useMemo(
    () => SECTIONS.slice(0, STICKY_UNTIL).map((s) => s.id),
    []
  );

  useEffect(() => {
    const els = stickyIds
      .map((id) =>
        document.querySelector<HTMLElement>(`[data-section="${id}"]`)
      )
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -30% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [stickyIds]);
  return (
    <>
      <FixedLogoDesktop />
      <div className="sticky top-0 z-20 block md:hidden border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-12xl px-4 py-3 flex items-center gap-3 text-white">
          <BasixLogoFull
            aria-label="Basix Digital"
            className="h-12 w-auto text-neutral-900"
          />
          <div className="ml-auto">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="text-lg font-semibold tracking-tight"
              >
                {SECTIONS[active]?.leftText ?? "BASIX"}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <section className="relative ">
        <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="hidden md:block md:relative bg-neutral-900 text-white"
            style={{ minHeight: `calc(${STICKY_UNTIL} * 100svh)` }}
          >
            <div className="md:sticky md:top-0 h-[100svh] flex items-center justify-end md:pr-8">
              <div className="flex flex-col items-end gap-6">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="font-extrabold text-5xl lg:text-7xl text-right tracking-tight"
                  >
                    {SECTIONS[active]?.leftText ?? "BASIX"}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="snap-y snap-mandatory">
            {SECTIONS.slice(0, STICKY_UNTIL).map((s, i) => (
              <section
                key={s.id}
                data-section={s.id}
                data-index={i}
                className="min-h-[100svh] snap-start flex items-center border-b"
              >
                <div className="py-20 pr-4">
                  <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">
                    {s.title}
                  </h2>
                  {s.body && (
                    <p className="mt-4 max-w-prose text-base md:text-lg opacity-80">
                      {s.body}
                    </p>
                  )}
                  <button className="btn-primary">{s.cta}</button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
