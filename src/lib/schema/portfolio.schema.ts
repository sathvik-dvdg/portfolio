import { z } from "zod";

export const navItemSchema = z.object({
  label: z.string().min(1, "Label is required"),
  href: z.string().min(1, "Href is required")
});

export const statSchema = z.object({
  value: z.string().min(1, "Value is required"),
  label: z.string().min(1, "Label is required")
});

export const skillGroupSchema = z.object({
  title: z.string().min(1, "Title is required"),
  icon: z.string().min(1, "Icon is required"),
  note: z.string().min(1, "Note is required"),
  skills: z.array(z.string().min(1)).min(1, "At least one skill is required")
});

export const projectSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  meta: z.string().min(1, "Meta is required"),
  icon: z.string().min(1, "Icon is required"),
  description: z.string().min(1, "Description is required"),
  metrics: z.array(z.string().min(1)).min(1, "At least one metric is required"),
  stack: z.array(z.string().min(1)).min(1, "At least one stack technology is required"),
  href: z.string().url("Must be a valid URL"),
  visual: z.enum(["graph", "health", "social", "shield", "cart"])
});

export const achievementSchema = z.object({
  title: z.string().min(1, "Title is required"),
  organization: z.string().min(1, "Organization is required"),
  date: z.string().min(1, "Date is required"),
  badge: z.string().min(1, "Badge is required"),
  description: z.string().min(1, "Description is required")
});

export const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  year: z.string().min(1, "Year is required"),
  score: z.string().min(1, "Score is required"),
  icon: z.string().min(1, "Icon is required")
});

export const contactLinkSchema = z.object({
  label: z.string().min(1, "Label is required"),
  text: z.string().min(1, "Text is required"),
  href: z.string().min(1, "Href is required"),
  icon: z.string().min(1, "Icon is required")
});

export const openSourceHighlightSchema = z.object({
  value: z.string().min(1, "Value is required"),
  label: z.string().min(1, "Label is required")
});

export const footerLinkSchema = z.object({
  label: z.string().min(1, "Label is required"),
  href: z.string().min(1, "Href is required")
});

export const postalAddressSchema = z.object({
  "@type": z.literal("PostalAddress"),
  addressLocality: z.string(),
  addressCountry: z.string()
});

export const profileJsonLdSchema = z.object({
  "@context": z.literal("https://schema.org"),
  "@type": z.literal("Person"),
  name: z.string(),
  url: z.string().url(),
  email: z.string(),
  jobTitle: z.string(),
  address: postalAddressSchema,
  sameAs: z.array(z.string().url()),
  knowsAbout: z.array(z.string())
});

export const tailoredResumeSchema = z.object({
  role: z.string().min(1, "Role is required").regex(/^[a-z0-9-]+$/, "Role must be lowercase alphanumeric and hyphens only"),
  href: z.string().min(1, "Resume file path is required").refine(val => val.startsWith("/") && !val.startsWith("//"), {
    message: "Path must be a relative same-origin path starting with /"
  })
});

export const portfolioSchema = z.object({
  navItems: z.array(navItemSchema).min(1),
  heroChips: z.array(z.string().min(1)).min(1),
  heroStats: z.array(z.string().min(1)).min(1),
  aboutParagraphs: z.array(z.string().min(1)).min(1),
  stats: z.array(statSchema).min(1),
  skillGroups: z.array(skillGroupSchema).min(1),
  projects: z.array(projectSchema),
  achievements: z.array(achievementSchema),
  education: z.array(educationSchema),
  contactLinks: z.array(contactLinkSchema).min(1),
  openSourceHighlights: z.array(openSourceHighlightSchema),
  footerLinks: z.array(footerLinkSchema),
  resumeHref: z.string().min(1),
  tailoredResumes: z.array(tailoredResumeSchema).default([]).superRefine((items, ctx) => {
    const roles = items.map(item => item.role);
    const duplicates = roles.filter((role, index) => roles.indexOf(role) !== index);
    if (duplicates.length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Duplicate role slugs are not allowed: ${[...new Set(duplicates)].join(", ")}`
      });
    }
  }),
  profileJsonLd: profileJsonLdSchema
});

export type PortfolioData = z.infer<typeof portfolioSchema>;
export type ProjectData = z.infer<typeof projectSchema>;
export type ProjectVisual = ProjectData["visual"];
export type AchievementData = z.infer<typeof achievementSchema>;
export type EducationData = z.infer<typeof educationSchema>;
export type TailoredResumeData = z.infer<typeof tailoredResumeSchema>;
