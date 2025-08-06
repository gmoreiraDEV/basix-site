"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BasixLogoFull from "./basix-logo-full";
import { NavItem } from "./nav-item";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#desafio", label: "Nossos desafios" },
  { href: "/insider", label: "Insider" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full sticky top-0 z-50 ${
        isScrolled ? "bg-primary shadow-md" : "bg-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-neutral-900">
          <BasixLogoFull
            className={`w-[130px] h-[60px] transition-colors duration-300 ${
              isScrolled ? "text-neutral-800" : "text-primary"
            }`}
          />
        </Link>
        <nav
          className={`hidden md:flex space-x-6 text-sm font-medium ${
            isScrolled ? "text-neutral-800" : "text-neutral-100"
          }`}
        >
          {nav.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                className={`${
                  isScrolled ? "hover:text-neutral-900" : "hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
