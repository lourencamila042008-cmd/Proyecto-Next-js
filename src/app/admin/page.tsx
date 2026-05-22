import {
  ArrowLeft,
  BarChart3,
  FileText,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ADMIN_MODULES, DASHBOARD_METRICS } from "@/lib/constants";

const SIDEBAR_ICONS: Record<string, React.ReactNode> = {
  inventario: <Package size={18} />,
  garantias: <Package size={18} />,
  facturacion: <FileText size={18} />,
  ingresos: <TrendingUp size={18} />,
  proveedores: <ShoppingCart size={18} />,
  clientes: <Users size={18} />,
  compras: <ShoppingCart size={18} />,
  usuarios: <Users size={18} />,
};

const RECENT_ACTIVITY = [
  { action: "Factura #FAC-2847 emitida", time: "Hace 5 min", type: "sale" },
  { action: "Stock actualizado: Producto SKU-102", time: "Hace 12 min", type: "inventory" },
  { action: "Nuevo cliente registrado: Tech Solutions", time: "Hace 28 min", type: "client" },
  { action: "Orden de compra #OC-891 aprobada", time: "Hace 1 h", type: "purchase" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-surface-muted">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-border bg-surface lg:block">
          <div className="flex h-16 items-center gap-2 border-b border-border px-6 font-bold">
            <BarChart3 className="text-brand-600" size={22} />
            Invoice<span className="text-brand-600">Pro</span>
          </div>
          <nav className="p-4" aria-label="Módulos admin">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Módulos
            </p>
            <ul className="space-y-1">
              {ADMIN_MODULES.map((mod, i) => (
                <li key={mod.id}>
                  <button
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      i === 0
                        ? "bg-brand-50 text-brand-700 dark:bg-brand-950/50"
                        : "text-muted hover:bg-surface-muted hover:text-foreground"
                    }`}
                  >
                    {SIDEBAR_ICONS[mod.id]}
                    {mod.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-4 sm:px-6">
            <div>
              <h1 className="text-lg font-bold text-foreground">Dashboard</h1>
              <p className="text-xs text-muted">Panel de administración · Vista demo</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-brand-600"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </header>

          <div className="flex-1 overflow-auto p-4 sm:p-6">
            <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
              Esta es una vista previa del panel administrador. Los datos mostrados son de ejemplo.
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {DASHBOARD_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
                >
                  <p className="text-sm text-muted">{metric.label}</p>
                  <p className="mt-2 text-2xl font-bold text-foreground">{metric.value}</p>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      metric.positive ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {metric.change} vs mes anterior
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <section className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6">
                <h2 className="font-semibold text-foreground">Ventas semanales</h2>
                <div className="mt-6 flex h-48 items-end justify-between gap-2">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-lg bg-brand-500/80 transition-all hover:bg-brand-600"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-xs text-muted">
                        {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="font-semibold text-foreground">Actividad reciente</h2>
                <ul className="mt-4 space-y-4">
                  {RECENT_ACTIVITY.map((item) => (
                    <li key={item.action} className="border-b border-border pb-3 last:border-0">
                      <p className="text-sm font-medium text-foreground">{item.action}</p>
                      <p className="text-xs text-muted">{item.time}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mt-6 rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-semibold text-foreground">Acceso rápido a módulos</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                {ADMIN_MODULES.map((mod) => (
                  <button
                    key={mod.id}
                    type="button"
                    className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-brand-950/30"
                  >
                    {mod.title}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
