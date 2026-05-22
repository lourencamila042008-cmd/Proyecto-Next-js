import { Shield, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ADMIN_MODULES, EMPLOYEE_MODULES } from "@/lib/constants";

export function Panels() {
  return (
    <section id="paneles" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dos roles, un mismo sistema"
          title="Paneles de administrador y empleado"
          description="Cada perfil ve solo lo que necesita. El administrador controla toda la operación; el empleado se enfoca en ventas y atención al cliente."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <PanelCard
            icon={<Shield className="text-brand-600" size={28} />}
            title="Panel Administrador"
            badge="8 módulos"
            description="Control total: inventario, finanzas, proveedores, compras y gestión de usuarios."
            modules={ADMIN_MODULES.map((m) => m.title)}
            accent="from-brand-600/10 to-brand-400/5"
          />
          <PanelCard
            icon={<User className="text-emerald-600" size={28} />}
            title="Panel Empleado"
            badge="4 módulos"
            description="Herramientas esenciales para el día a día: facturar, consultar stock y atender clientes."
            modules={EMPLOYEE_MODULES.map((m) => m.title)}
            accent="from-emerald-600/10 to-emerald-400/5"
          />
        </div>
      </div>
    </section>
  );
}

type PanelCardProps = {
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  modules: string[];
  accent: string;
};

function PanelCard({ icon, title, badge, description, modules, accent }: PanelCardProps) {
  return (
    <article
      className={`rounded-2xl border border-border bg-gradient-to-br ${accent} p-8`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface shadow-sm">
          {icon}
        </div>
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted shadow-sm">
          {badge}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-muted">{description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {modules.map((mod) => (
          <li
            key={mod}
            className="rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-sm font-medium text-foreground"
          >
            {mod}
          </li>
        ))}
      </ul>
    </article>
  );
}
