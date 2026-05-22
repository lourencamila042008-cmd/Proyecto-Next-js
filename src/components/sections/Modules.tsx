import { ModuleCard } from "@/components/ui/ModuleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ADMIN_MODULES, EMPLOYEE_MODULES } from "@/lib/constants";

export function Modules() {
  return (
    <section id="modulos" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="Módulos diseñados para tu operación"
          description="Explora cada módulo disponible según el rol. Todos integrados en una sola plataforma."
        />

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold text-foreground">Administrador</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADMIN_MODULES.map((mod) => (
              <ModuleCard key={mod.id} module={mod} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-xl font-bold text-foreground">Empleado</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EMPLOYEE_MODULES.map((mod) => (
              <ModuleCard key={mod.id} module={mod} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
