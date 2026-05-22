import {
  Boxes,
  FileText,
  HeartHandshake,
  Package,
  Receipt,
  Search,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  UserCog,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Boxes,
  FileText,
  HeartHandshake,
  Package,
  Receipt,
  Search,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  UserCog,
  Users,
  Zap,
};

type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function Icon({ name, className, size = 24 }: IconProps) {
  const LucideIconComponent = iconMap[name] ?? Package;
  return <LucideIconComponent className={className} size={size} aria-hidden />;
}
