"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Galeria de Sorrisos", href: "/galeria" },
  { name: "Depoimentos", href: "/depoimentos" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-surface bg-header pl-4">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:cursor-default"
            aria-label="Ir para a página inicial"
          >
            <Image
              src="/logo1.png"
              alt="Logo Clínica Marcelo Daltro"
              width={400}
              height={600}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-text-muted">
              Marcelo Daltro
            </span>
          </Link>
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 text-text-muted">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <a href="">
            <Button
              size="sm"
              className="ml-4 border-1 border-primary bg-primary hover:border-primary hover:text-on-primary hover:cursor-pointer"
            >
              Agendar Consulta
            </Button>
          </a>
        </nav>

        {/* Botão menu mobile */}
        <div className="flex md:hidden text-text-muted px-4">
          <Button
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="ml-4 border-1 border-primary bg-primary hover:border-primary hover:text-on-primary hover:cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-10 w-10 " />
            ) : (
              <Menu className="h-10 w-10" />
            )}
          </Button>
        </div>
      </div>

      {/* Navegação mobile */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto border-t-2 border-text-muted bg-header p-6 pb-32 shadow-md animate-in md:hidden",
          mobileMenuOpen ? "slide-in-from-top-2" : "hidden"
        )}
      >
        <div className="grid gap-2 py-6 text-text-muted">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a href="">
            <Button className="mt-4 w-full border-1 border-primary hover:border-branco hover:text-primary hover:cursor-pointer">
              Agendar Consulta
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
