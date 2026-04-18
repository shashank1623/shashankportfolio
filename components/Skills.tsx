"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Rocket, Scaling, Zap, Shield, Code } from "lucide-react";
import { GiGrowth } from "react-icons/gi";
import { cn } from "@/lib/utils";

type Project = { name: string; description: string };

type SkillItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  approach: string;
  projects: Project[];
};

const SKILL_ITEMS: SkillItem[] = [
  {
    title: "UI Implementation",
    description:
      "I use Next.js with React and its ecosystem to build interfaces people love. I focus on apps that feel great on every device.",
    icon: <Rocket className="h-6 w-6 shrink-0 text-accent" />,
    technologies: ["React", "Next.js", "Client/Server Components", "TypeScript", "Zustand"],
    approach:
      "I focus on creating seamless, user-centric designs that adapt to various devices and screen sizes. By leveraging the latest frontend technologies, I ensure that the UI not only looks great but also performs optimally.",
    projects: [
      {
        name: "Misha Multispecialit Hospital Website",
        description:
          "I implemented the UI for the whole application, making sure it is usable by everyone.",
      },
      {
        name: "DocSync",
        description:
          "Created an intuitive interface for collaborative document editing in real time.",
      },
    ],
  },
  {
    title: "Scalability",
    description:
      "I design systems with future growth in mind so your application stays responsive and reliable as load increases.",
    icon: <Scaling className="h-6 w-6 shrink-0 text-accent" />,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Scalable patterns",
      "Redis",
      "Kafka",
      "Pub/Sub",
      "Auto scaling",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    approach:
      "During conception I consider what users and engineers will need next. I keep structure modular, tests in place with Jest and Cypress, and integrations safe as the codebase grows.",
    projects: [
      {
        name: "Wizard.ai",
        description:
          "Queue-based summarization with real-time transcription and report generation for multiple users.",
      },
      {
        name: "DocSync",
        description: "Scalable backend supporting many users editing the same document in real time.",
      },
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Performance is part of design from day one. I profile, stream, and lazy-load so experiences stay snappy.",
    icon: <Zap className="h-6 w-6 shrink-0 text-accent" />,
    technologies: ["Chrome DevTools", "Server Components", "Streaming", "Lazy loading"],
    approach:
      "I prioritize performance from the conception phase. When issues appear, I trace root causes and fix them at the source.",
    projects: [
      {
        name: "Misha Multispecialit Hospital Website",
        description:
          "Ensured data-heavy internal apps load quickly and stay responsive.",
      },
      {
        name: "Wizard.ai Dashboard",
        description:
          "Tuned summarization queue performance on frontend and backend to avoid GPU bottlenecks.",
      },
    ],
  },
  {
    title: "Security",
    description:
      "Modern frameworks plus disciplined practices to resist attacks and keep user data protected.",
    icon: <Shield className="h-6 w-6 shrink-0 text-accent" />,
    technologies: [
      "Up-to-date stack",
      "OWASP",
      "SSL/TLS",
      "Env management",
      "Validation & sanitization",
      "Auth best practices",
      "Encryption",
    ],
    approach:
      "Security is built in: data protection, solid auth, dependency hygiene, and encryption where it matters.",
    projects: [
      {
        name: "DocSync",
        description:
          "E2E encryption for sensitive data and hardened access patterns against injection.",
      },
      {
        name: "Wizard.ai",
        description:
          "SHA256-based access controls to protect GPU utilization from unauthorized use.",
      },
    ],
  },
  {
    title: "Full Stack Integration",
    description:
      "From React and serverless to PostgreSQL, AWS, Docker, WebSockets, and WebRTC — end-to-end delivery.",
    icon: <Code className="h-6 w-6 shrink-0 text-accent" />,
    technologies: ["Server Components", "Server Actions", "AWS", "Docker"],
    approach:
      "I connect UI, APIs, data, and infra so the product works as one coherent system.",
    projects: [
      {
        name: "DocSync",
        description:
          "Full-stack delivery: database design, server components, and server actions.",
      },
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Technical SEO: structure, speed, metadata, and crawl clarity so content can rank.",
    icon: <GiGrowth className="h-6 w-6 shrink-0 text-accent" />,
    technologies: [
      "Google SEO tools",
      "Next.js SEO",
      "Structured data",
      "Meta tags",
      "Sitemaps",
      "robots.txt",
    ],
    approach:
      "I structure apps so search engines understand them, with performance and accessibility as ranking signals.",
    projects: [
      {
        name: "Misha Multispecialit Hospital Website",
        description:
          "Public pages tuned for performance, mobile, and metadata.",
      },
    ],
  },
];

const BENTO_VARIANT: readonly ("hero" | "default")[] = [
  "hero",
  "default",
  "default",
  "default",
  "default",
  "default",
];

/** Cool neutral light + seamless SVG waves behind the bento (no warm tint). */
function SkillsWaveBackdrop() {
  const wavePath =
    "M0,120 C200,80 400,160 600,120 C800,80 1000,160 1200,120 L1200,200 L0,200 Z";
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute -left-[25%] -top-[35%] h-[95%] w-[85%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.085)_0%,rgba(210,225,255,0.04)_38%,transparent_65%)] opacity-80 motion-reduce:animate-none motion-reduce:opacity-40 motion-safe:animate-skills-light-drift"
      />
      <div
        className="absolute -bottom-[45%] -right-[20%] h-[110%] w-[90%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(230,240,255,0.06)_0%,rgba(232,165,75,0.04)_35%,rgba(255,255,255,0.02)_48%,transparent_62%)] opacity-70 motion-reduce:animate-none motion-reduce:opacity-35 motion-safe:animate-skills-light-drift-reverse"
      />
      <div className="absolute inset-x-0 bottom-0 h-[min(38vw,280px)] min-h-[160px] overflow-hidden opacity-[0.85] motion-reduce:opacity-30">
        <div className="flex h-full w-[200%] will-change-transform motion-reduce:animate-none motion-safe:animate-skills-wave-scroll">
          {[0, 1].map((key) => (
            <svg
              key={key}
              className="h-full w-1/2 shrink-0 text-white/[0.14]"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`skillsWaveFill-${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={wavePath} fill={`url(#skillsWaveFill-${key})`} />
              <path
                d="M0,108 C300,72 500,148 800,108 C950,88 1100,128 1200,108"
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.2}
                strokeWidth={1.25}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const heading = headingRef.current;
      const section = sectionRef.current;
      if (!section) return;

      const cells = section.querySelectorAll<HTMLElement>(".skill-bento-item");

      if (prefersReducedMotion()) {
        if (heading) gsap.set(heading, { opacity: 1, y: 0 });
        gsap.set(Array.from(cells), { opacity: 1, y: 0 });
        return;
      }

      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 82%" },
        });
      }

      if (cells.length) {
        gsap.from(cells, {
          opacity: 0,
          y: 40,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 72%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative isolate overflow-hidden bg-canvas pb-20 pt-16 sm:pb-28 sm:pt-20 md:pb-32 md:pt-24"
    >
      <SkillsWaveBackdrop />
      <div className="relative z-[1] mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div ref={headingRef} className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="font-display text-[0.65rem] uppercase leading-relaxed tracking-[0.22em] text-muted sm:text-xs sm:tracking-[0.28em]">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:mt-5 sm:text-4xl md:text-5xl">
            The stack behind the <span className="text-accent">shipping</span>
          </h2>
        </div>

        <div className="skills-bento">
          {SKILL_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="skill-bento-item min-h-[200px] sm:min-h-[220px]"
              data-bento={index}
            >
              <TechCard {...item} variant={BENTO_VARIANT[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({
  title,
  description,
  icon,
  technologies,
  approach,
  projects,
  variant,
}: SkillItem & { variant: "hero" | "default" }) {
  const hero = variant === "hero";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Learn more: ${title}`}
          className={cn(
            "group relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-3xl text-left transition duration-300",
            "border border-white/[0.14] ring-1 ring-inset ring-white/[0.05]",
            "bg-[linear-gradient(158deg,rgba(255,247,235,0.1)_0%,rgba(255,255,255,0.04)_22%,rgba(22,19,15,0.55)_48%,rgba(7,6,4,0.72)_100%)]",
            "backdrop-blur-[56px] backdrop-saturate-[1.12]",
            "shadow-[0_10px_40px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.22)]",
            "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(100%_85%_at_0%_-10%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_32%,transparent_58%)]",
            "hover:border-white/[0.2] hover:shadow-[0_14px_48px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.18)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          )}
        >
          <div
            className={cn(
              "flex flex-1 flex-col p-5 sm:p-6",
              hero ? "lg:p-8 lg:pt-8" : "lg:p-6"
            )}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div
                  className="mb-3 h-px w-10 bg-gradient-to-r from-white/50 via-accent/25 to-transparent sm:mb-4 sm:w-12"
                  aria-hidden
                />
                <h3
                  className={cn(
                    "font-display font-semibold tracking-tight text-ink",
                    hero && "text-xl sm:text-2xl lg:text-3xl",
                    !hero && "text-lg sm:text-xl lg:text-2xl"
                  )}
                >
                  {title}
                </h3>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-2xl border border-white/[0.12] bg-[linear-gradient(145deg,rgba(255,255,255,0.08)_0%,rgba(7,6,4,0.55)_100%)] p-2.5 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl backdrop-saturate-[1.1]",
                  hero && "lg:p-3"
                )}
                aria-hidden
              >
                {icon}
              </span>
            </div>

            <p
              className={cn(
                "flex-1 text-sm leading-relaxed text-muted sm:text-base",
                hero && "lg:text-lg lg:leading-relaxed"
              )}
            >
              {description}
            </p>

            <div className="mt-6 flex items-center justify-between gap-3 pt-1 sm:mt-8">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-white/[0.14] bg-[linear-gradient(165deg,rgba(255,247,235,0.12)_0%,rgba(15,13,9,0.65)_100%)] px-4 py-2.5 text-sm font-semibold text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl backdrop-saturate-[1.1] transition",
                  "group-hover:border-white/[0.22] sm:px-5 sm:py-3 sm:text-base"
                )}
              >
                Learn more
                <ChevronRight className="h-4 w-4 text-accent transition group-hover:translate-x-0.5" aria-hidden />
              </span>
              <span className="hidden text-[0.65rem] uppercase tracking-[0.18em] text-muted sm:inline sm:tracking-[0.22em]">
                Details
              </span>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[min(90dvh,880px)] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto rounded-3xl border border-white/[0.14] bg-[linear-gradient(165deg,rgba(255,247,235,0.08)_0%,rgba(22,19,15,0.75)_38%,rgba(7,6,4,0.88)_100%)] p-6 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.05] backdrop-blur-[48px] backdrop-saturate-[1.12] sm:p-8">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-left text-xl font-bold text-ink sm:text-2xl">
            {icon}
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-ink">Technologies and practices</h4>
            <div className="mb-2 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-ink">Approach</h4>
            <p className="text-sm leading-relaxed text-muted sm:text-base">{approach}</p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-ink">Projects</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted sm:text-base">
              {projects.map((project, index) => (
                <li key={index}>
                  <span className="font-semibold text-ink">{project.name}:</span> {project.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
