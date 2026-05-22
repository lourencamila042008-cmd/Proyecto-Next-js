import { Receipt, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/#inicio" className="flex items-center gap-2 font-bold text-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Receipt size={20} aria-hidden />
              </span>
              Invoice<span className="text-brand-600">Pro</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Software de facturación e inventario para empresas que quieren dejar el papel atrás
              y operar de forma digital.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Navegación</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/admin"
                  className="text-sm text-muted transition-colors hover:text-brand-600"
                >
                  Demo administrador
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Módulos</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>Inventario y facturación</li>
              <li>Garantías y clientes</li>
              <li>Proveedores y compras</li>
              <li>Panel empleado</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-brand-600" aria-hidden />
                contacto@invoicepro.app
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-brand-600" aria-hidden />
                +52 55 1234 5678
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
                Ciudad de México, México
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">© {year} InvoicePro. Todos los derechos reservados.</p>
          <p className="text-sm text-muted">Facturación e inventario para tu empresa</p>
        </div>
      </div>
    </footer>
  );
}
