import type { NavLink, ModuleItem, StatItem, Benefit } from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#solucion", label: "Solución" },
  { href: "#paneles", label: "Paneles" },
  { href: "#modulos", label: "Módulos" },
  { href: "#contacto", label: "Contacto" },
];

export const ADMIN_MODULES: ModuleItem[] = [
  {
    id: "inventario",
    title: "Inventario",
    description: "Control en tiempo real de stock, alertas de bajo inventario y movimientos.",
    icon: "Package",
  },
  {
    id: "garantias",
    title: "Garantías",
    description: "Seguimiento de productos con garantía activa, vencimientos y reclamos.",
    icon: "ShieldCheck",
  },
  {
    id: "facturacion",
    title: "Facturación",
    description: "Emisión de facturas digitales, historial y reportes de ventas.",
    icon: "FileText",
  },
  {
    id: "ingresos",
    title: "Ingresos",
    description: "Resumen financiero, flujo de caja y métricas de rentabilidad.",
    icon: "TrendingUp",
  },
  {
    id: "proveedores",
    title: "Proveedores",
    description: "Directorio de proveedores, pedidos y condiciones comerciales.",
    icon: "Truck",
  },
  {
    id: "clientes",
    title: "Clientes",
    description: "Base de datos de clientes, historial de compras y segmentación.",
    icon: "Users",
  },
  {
    id: "compras",
    title: "Compras",
    description: "Órdenes de compra, recepción de mercancía y conciliación.",
    icon: "ShoppingCart",
  },
  {
    id: "usuarios",
    title: "Usuarios",
    description: "Gestión de roles, permisos y accesos al sistema.",
    icon: "UserCog",
  },
];

export const EMPLOYEE_MODULES: ModuleItem[] = [
  {
    id: "facturas",
    title: "Facturas",
    description: "Crear y consultar facturas de venta de forma rápida.",
    icon: "Receipt",
  },
  {
    id: "inventario",
    title: "Inventario",
    description: "Consultar disponibilidad y registrar salidas de producto.",
    icon: "Package",
  },
  {
    id: "garantias",
    title: "Garantías",
    description: "Registrar y dar seguimiento a garantías de clientes.",
    icon: "ShieldCheck",
  },
  {
    id: "clientes",
    title: "Clientes",
    description: "Buscar clientes y actualizar su información de contacto.",
    icon: "Users",
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Automatiza tu inventario",
    description:
      "Deja atrás las hojas de cálculo. Controla entradas, salidas y stock mínimo desde un solo lugar.",
    icon: "Boxes",
  },
  {
    title: "Facturación 100% digital",
    description:
      "Sustituye las facturas en papel por documentos digitales fáciles de buscar, enviar y archivar.",
    icon: "Zap",
  },
  {
    title: "Información al instante",
    description:
      "Cuando las ventas aumentan, encuentra datos en segundos: ventas, clientes, productos y más.",
    icon: "Search",
  },
  {
    title: "Experiencia para todos",
    description:
      "Interfaces pensadas para empleados, administradores y una mejor atención al cliente.",
    icon: "HeartHandshake",
  },
];

export const STATS: StatItem[] = [
  { value: "8", label: "Módulos admin" },
  { value: "4", label: "Módulos empleado" },
  { value: "100%", label: "Digital" },
  { value: "24/7", label: "Acceso cloud" },
];

export const DASHBOARD_METRICS = [
  { label: "Ventas del mes", value: "$48,320", change: "+12.4%", positive: true },
  { label: "Facturas emitidas", value: "1,247", change: "+8.1%", positive: true },
  { label: "Productos en stock", value: "3,892", change: "-2.3%", positive: false },
  { label: "Clientes activos", value: "586", change: "+5.7%", positive: true },
];
