import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  EyeOff,
  Github,
  GraduationCap,
  HelpCircle,
  Hospital,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Server,
  Shield,
  ShoppingCart,
  Terminal,
  Trophy,
  // Additional icons available in the admin dropdown
  Boxes,
  Briefcase,
  Camera,
  Cpu,
  FileCode,
  Flame,
  Globe,
  Heart,
  Key,
  Layers,
  Lock,
  Monitor,
  Palette,
  Rocket,
  Search,
  Settings,
  Smartphone,
  Star,
  Users,
  Wifi,
  Zap
} from "lucide-react";

/**
 * Map of Lucide icon name strings to their React components.
 * Used by portfolio.ts to resolve icon names from JSON,
 * and by the admin UI for the icon-picker dropdown.
 */
const iconMap: Record<string, LucideIcon> = {
  // Icons used by current portfolio data
  Activity,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  EyeOff,
  Github,
  GraduationCap,
  Hospital,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Server,
  Shield,
  ShoppingCart,
  Terminal,
  Trophy,
  // Additional common icons for the admin icon picker
  Boxes,
  Briefcase,
  Camera,
  Cpu,
  FileCode,
  Flame,
  Globe,
  Heart,
  HelpCircle,
  Key,
  Layers,
  Lock,
  Monitor,
  Palette,
  Rocket,
  Search,
  Settings,
  Smartphone,
  Star,
  Users,
  Wifi,
  Zap
};

/** Fallback icon for unknown/missing icon names. */
const FALLBACK_ICON: LucideIcon = HelpCircle;

/**
 * Resolve a Lucide icon name string to its React component.
 * Returns HelpCircle as a graceful fallback for unknown names.
 */
export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] || FALLBACK_ICON;
}

/**
 * List of all available icon name strings for the admin icon-picker dropdown.
 * Sorted alphabetically for easy searching.
 */
export const availableIcons: string[] = Object.keys(iconMap).sort();

/**
 * React component that renders a Lucide icon from its string name.
 * @example <IconResolver iconName="Shield" size={20} />
 */
export function IconResolver({
  iconName,
  size = 18,
  className
}: {
  iconName: string;
  size?: number;
  className?: string;
}) {
  const Icon = resolveIcon(iconName);
  return <Icon size={size} className={className} />;
}
