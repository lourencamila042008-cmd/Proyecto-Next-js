import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-500 px-8 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            ¿Listo para modernizar tu empresa?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Únete a las empresas que ya facturan y gestionan inventario de forma digital con
            InvoicePro.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="#contacto"
              variant="secondary"
              size="lg"
              className="!bg-white !text-brand-700 hover:!bg-brand-50"
            >
              Contactar ventas
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button
              href="/admin"
              variant="outline"
              size="lg"
              className="!border-white !text-white hover:!bg-white/10"
            >
              Ver demo del dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
