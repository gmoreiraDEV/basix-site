"use client";

import BasixLogoFull from "./basix-logo-full";
import { Button } from "./ui/button";


export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#020540]/90 backdrop-blur-sm border-b border-[#F244C4]/20">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
        <div className="text-2xl font-bold text-white animate-fade-in">
          <BasixLogoFull className="w-auto h-10 md:h-20" />
        </div>
        <a href="#go-to-ai">
          <Button className="bg-[#F244C4] hover:bg-[#EF1BF2] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-fade-in">
            Quero aplicar IA no meu negócio
          </Button>
        </a>
      </div>
    </header>
  );
}
