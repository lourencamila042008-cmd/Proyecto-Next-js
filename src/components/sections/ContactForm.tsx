"use client";

import { Send, CheckCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContactFormData } from "@/lib/types";

const INITIAL: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    setForm(INITIAL);
  };

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            align="left"
            eyebrow="Contacto"
            title="Solicita una demostración"
            description="Cuéntanos sobre tu empresa y te mostraremos cómo InvoicePro puede automatizar tu inventario y facturación."
          />

          <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="text-emerald-600" size={48} aria-hidden />
                <h3 className="mt-4 text-xl font-semibold text-foreground">¡Mensaje enviado!</h3>
                <p className="mt-2 text-muted">
                  Gracias por contactarnos. Nuestro equipo te responderá en menos de 24 horas.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FormField
                  id="name"
                  label="Nombre completo"
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  required
                  placeholder="Juan Pérez"
                />
                <FormField
                  id="email"
                  label="Correo electrónico"
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  required
                  placeholder="juan@empresa.com"
                />
                <FormField
                  id="company"
                  label="Empresa"
                  value={form.company}
                  onChange={(v) => update("company", v)}
                  required
                  placeholder="Mi Empresa S.A."
                />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Cuéntanos sobre tu negocio y qué módulos te interesan..."
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar solicitud"}
                  <Send size={18} aria-hidden />
                </Button>
              </form>
            )}
          </div>
        </div>
        </div>
    </section>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function FormField({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}
