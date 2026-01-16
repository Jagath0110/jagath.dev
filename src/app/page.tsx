import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import AboutSection from "@/components/home/about-section";
import CapabilitiesSection from "@/components/home/capabilities-section";
import type { CapabilityItem } from "@/components/home/capability-card";
import ContactSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import type { ProjectItem } from "@/components/home/project-card";
import ProjectsSection from "@/components/home/projects-section";
import SiteFooter from "@/components/home/site-footer";
import SiteHeader from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Jagath | Engineering-led SaaS design",
  description:
    "Multi-tenant SaaS systems, dashboards, and Azure deployment with security-ready architecture.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

const navItems = [
  { label: "#home", href: "#home" },
  { label: "#works", href: "#works" },
  { label: "#about-me", href: "#about" },
  { label: "#contacts", href: "#contact" },
];

const projects: ProjectItem[] = [
  {
    name: "ChertNodes",
    summary: "Minecraft servers hosting",
    stack: "HTML SCSS Python Flask",
    badges: ["Live", "Cached"],
    tint: "from-[#ff8a3d] via-[#ff6a3d] to-[#e15b30]",
  },
  {
    name: "ProtectX",
    summary: "Discord anti-crash bot",
    stack: "React Express Discord.js Node.js",
    badges: ["Live"],
    tint: "from-[#32d583] via-[#1bb36b] to-[#0f8a4d]",
  },
  {
    name: "Kahoot Answers Viewer",
    summary: "Get answers to your kahoot quiz",
    stack: "CSS Express Node.js",
    badges: ["Live"],
    tint: "from-[#a462ff] via-[#8b4cff] to-[#6d36ee]",
  },
];

const capabilities: CapabilityItem[] = [
  {
    title: "SaaS Architecture & Systems",
    items: [
      "Multi-tenant SaaS architecture",
      "Role-based access & permissions (RBAC)",
      "Scalable system design",
      "Security-aware application structure",
    ],
  },
  {
    title: "Cloud & Deployment (Azure)",
    items: [
      "Azure App Services",
      "Environment-based deployments",
      "CI/CD pipelines (GitHub-based)",
      "Cloud-ready frontend delivery",
    ],
  },
  {
    title: "Backend APIs",
    items: [
      "RESTful API design",
      ".NET-based backend architecture",
      "Authentication & authorization flows",
      "API-driven frontend systems",
    ],
  },
  {
    title: "SaaS Dashboard UI",
    items: [
      "Dashboard-first UX patterns",
      "Data-dense UI layouts",
      "Figma-based design systems",
      "Developer-ready UI components",
    ],
  },
];

const coreStack = [
  "TypeScript - JavaScript",
  "React - Next.js",
  "Figma - Storybook",
  "Git - GitHub",
];

const aboutParagraphs = [
  "I work at the intersection of SaaS UI design, system architecture, and cloud deployment, helping founders and teams turn complex ideas into production-ready SaaS systems.",
  "My background in UI/UX design allows me to create clear, scalable dashboards, while my engineering mindset ensures those interfaces align with multi-tenant architecture, .NET backend APIs, Azure deployment, and enterprise-level requirements.",
  "This portfolio showcases live demo environments that represent real SaaS patterns - dashboards, billing flows, user management, and system structure - designed with scalability and long-term growth in mind.",
];

const contactLines = ["jagath011@gmail.com", "@jagath0110"];

const pageStyles = {
  fontFamily: "var(--font-space-grotesk)",
  "--page-bg": "#2a2f38",
  "--panel": "#262b34",
  "--panel-strong-soft": "rgba(34,39,48,0.6)",
  "--panel-strong-soft-70": "rgba(34,39,48,0.7)",
  "--ink": "#e7e9f2",
  "--accent": "#9b73ff",
  "--accent-soft": "#b793ff",
  "--accent-fade": "rgba(155,115,255,0.12)",
  "--accent-border": "rgba(155,115,255,0.4)",
} as CSSProperties;

export default function HomePage() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} min-h-screen bg-[var(--page-bg)] text-[var(--ink)]`}
      style={pageStyles}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-48 top-8 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(148,118,255,0.45),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(94,165,255,0.35),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-[520px] h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)] blur-2xl" />

        <div className="pointer-events-none absolute left-10 top-36 hidden flex-col items-center gap-4 text-white/60 xl:flex">
          <div className="h-32 w-px bg-white/20" />
          <div className="flex flex-col gap-3">
            {["H", "W", "A", "C"].map((label) => (
              <span
                key={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[10px] font-semibold"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="h-32 w-px bg-white/20" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-8 lg:px-10">
          <SiteHeader
            name="Jagath"
            tagline="Engineering-led SaaS"
            navItems={navItems}
            activeHref="#home"
          />

          <HeroSection
            badge="Multi-tenant ready"
            title="Multi-Tenant SaaS Systems, Dashboards & Azure Deployment"
            subtitle="Architecture - .NET APIs - Dashboard UI - Security-Ready"
            ctaText="Discuss Your SaaS Project"
            supportingText="Azure Ready - Multi-Tenant - .NET APIs - Security-Focused"
            statusText="Currently working on Portfolio"
          />

          <ProjectsSection projects={projects} viewAllText="View all ->" />

          <CapabilitiesSection
            coreTitle="Core Tools & Stack"
            coreItems={coreStack}
            capabilities={capabilities}
          />

          <AboutSection
            heading="#Engineering-led SaaS design"
            paragraphs={aboutParagraphs}
            ctaText="View SaaS Demos ->"
          />

          <ContactSection
            heading="#Get in touch"
            description="Have a SaaS idea or system that needs to scale? Reach out to discuss architecture, dashboards, or Azure deployment."
            cardTitle="Start a conversation"
            contactLines={contactLines}
          />

          <SiteFooter
            name="Jagath"
            tagline="Engineering-led SaaS design - Azure - Scalable systems"
            mediaLabel="Media"
            media={["Dribbble", "GitHub", "LinkedIn"]}
            copyright="(c) 2026 Jagath. Built with production-ready SaaS principles."
          />
        </div>
      </div>
    </div>
  );
}
