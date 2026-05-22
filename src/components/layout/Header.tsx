"use client";

import { Menu, X, Receipt } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/#inicio" className="flex items-center gap-2.5 font-bold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
            <Receipt size={20} aria-hidden />
          </span>
          <span className="text-lg tracking-tight">
            Invoice<span className="text-brand-600">Pro</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/admin" variant="secondary" size="sm">
            Ver demo
          </Button>
          <Button href="#contacto" variant="primary" size="sm">
            Solicitar demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-surface px-4 py-4 md:hidden"
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
              <Button href="/admin" variant="secondary" size="sm">
                Ver demo admin
              </Button>
              <Button href="#contacto" variant="primary" size="sm">
                Solicitar demo
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
