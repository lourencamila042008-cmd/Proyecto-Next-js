import { Icon } from "@/components/ui/Icon";
import type { ModuleItem } from "@/lib/types";

type ModuleCardProps = {
  module: ModuleItem;
};

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-surface-elevated p-5 transition-all duration-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/10">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950/50">
        <Icon name={module.icon} size={22} />
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{module.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{module.description}</p>
    </article>
  );
}
