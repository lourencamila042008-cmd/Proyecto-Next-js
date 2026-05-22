import { ArrowRight, CheckCircle2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="gradient-mesh relative overflow-hidden border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
              <BarChart3 size={16} aria-hidden />
              Facturación e inventario en la nube
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Digitaliza tu empresa con{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                InvoicePro
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted">
              Automatiza inventario y deja atrás las facturas en papel. Dos paneles — administrador
              y empleado — para que tu equipo registre ventas, consulte stock y atienda mejor a tus
              clientes.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Ideal para empresas pequeñas, medianas y grandes",
                "Búsqueda instantánea de ventas, clientes e inventario",
                "Experiencia fluida para admin, empleados y clientes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-600" size={20} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contacto" size="lg">
                Solicitar demostración
                <ArrowRight size={18} aria-hidden />
              </Button>
              <Button href="/admin" variant="outline" size="lg">
                Explorar panel admin
              </Button>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-200 relative">
            <div className="card-glow rounded-2xl border border-border bg-surface-elevated p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Vista previa del sistema</p>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                  En línea
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-surface-muted p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-brand-600">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2 rounded-xl bg-surface-muted p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Última factura</span>
                  <span className="font-medium text-foreground">#FAC-2847</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-3/4 rounded-full bg-brand-600" />
                </div>
                <p className="text-xs text-muted">Inventario actualizado hace 2 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
