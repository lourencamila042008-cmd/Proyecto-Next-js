import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="solucion" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="El problema que resolvemos"
          title="Deja lo retrogrado atrás y opera en digital"
          description="Las empresas que aún usan papel y hojas de cálculo pierden tiempo al buscar información, registrar ventas y coordinar inventario. InvoicePro centraliza todo."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/40">
                <Icon name={benefit.icon} size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
