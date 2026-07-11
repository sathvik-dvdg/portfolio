import type { LucideIcon } from "lucide-react";
import { Network, Trophy } from "lucide-react";
import { resolveIcon } from "@/components/IconResolver";

// ponytail: import portfolio.json directly to avoid top-level await Webpack warnings and runtime browser compatibility issues.
// If swapping to a dynamic async database repository (Option 2/3), the public site pages must be refactored to fetch data asynchronously.
import portfolioJson from "./portfolio.json";

// --- Re-export types (unchanged API) ---

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  note: string;
  skills: string[];
};

export type Project = {
  id: string;
  name: string;
  meta: string;
  icon: LucideIcon;
  description: string;
  metrics: string[];
  stack: string[];
  href: string;
  visual: "graph" | "health" | "social" | "shield" | "cart";
};

export type Achievement = {
  title: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
  score: string;
  icon: LucideIcon;
};

export type ContactLink = {
  label: string;
  text: string;
  href: string;
  icon: LucideIcon;
};

export const navItems = portfolioJson.navItems;

export const heroChips = portfolioJson.heroChips;

export const heroStats = portfolioJson.heroStats;

export const aboutParagraphs = portfolioJson.aboutParagraphs;

export const stats = portfolioJson.stats;

export const skillGroups: SkillGroup[] = portfolioJson.skillGroups.map((group) => ({
  ...group,
  icon: resolveIcon(group.icon)
}));

export const projects: Project[] = portfolioJson.projects.map((project) => ({
  ...project,
  icon: resolveIcon(project.icon),
  visual: project.visual as Project["visual"]
}));

export const achievements: Achievement[] = portfolioJson.achievements;

export const education: Education[] = portfolioJson.education.map((item) => ({
  ...item,
  icon: resolveIcon(item.icon)
}));

export const contactLinks: ContactLink[] = portfolioJson.contactLinks.map((link) => ({
  ...link,
  icon: resolveIcon(link.icon)
}));

export const openSourceHighlights = portfolioJson.openSourceHighlights;

export const footerLinks = portfolioJson.footerLinks;

export const resumeHref = portfolioJson.resumeHref;

export const profileJsonLd = portfolioJson.profileJsonLd;

export const sectionIcons = {
  trophy: Trophy,
  network: Network
};
