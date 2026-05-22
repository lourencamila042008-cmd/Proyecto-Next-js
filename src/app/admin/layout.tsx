import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Admin | InvoicePro",
  description: "Vista previa del panel de administración de InvoicePro",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
