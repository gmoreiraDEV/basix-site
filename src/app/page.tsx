"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BasixLogoFull from "@/components/basix-logo-full";
import { FixedLogoDesktop } from "@/components/fixed-logo-desktop";

const SECTIONS = [
  {
    id: "s1",
    leftText: "BASIX é simples",
    title: "Digital 1",
    body: "Conteúdo da seção 1",
  },
  {
    id: "s2",
    leftText: "Automação que vende",
    title: "Digital 2",
    body: "Conteúdo da seção 2",
  },
  {
    id: "s3",
    leftText: "IA sem fricção",
    title: "Digital 3",
    body: "Conteúdo da seção 3",
  },
  {
    id: "s4",
    leftText: "Implementação guiada",
    title: "Digital 4",
    body: "Conteúdo da seção 4",
  },
];

const STICKY_UNTIL = 4;

export default function Page() {
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
    <main className="min-h-[100svh] w-full">
      <FixedLogoDesktop />
      {/* MOBILE: header sticky com logo + texto dinâmico */}
      <div className="sticky top-0 z-20 block md:hidden border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-12xl px-4 py-3 flex items-center gap-3">
          {/* Logo à esquerda */}
          <BasixLogoFull
            aria-label="Basix Digital"
            className="h-12 w-auto text-black"
          />
          {/* Texto dinâmico à direita */}
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

      {/* SPLIT em md+ */}
      <section className="relative">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {/* LEFT sticky (logo acima do texto em md+) */}
          <div
            className="hidden md:block md:relative"
            style={{ minHeight: `calc(${STICKY_UNTIL} * 100svh)` }}
          >
            <div className="md:sticky md:top-0 h-[100svh] flex items-center justify-end md:pr-8">
              <div className="flex flex-col items-end gap-6">
                {/* Texto dinâmico */}
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

          {/* RIGHT: seções */}
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
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo comum depois */}
      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Site comum</h3>
          <p className="opacity-80">Resto do conteúdo…</p>
        </div>
      </section>
    </main>
  );
}
