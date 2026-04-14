"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { prefersReducedMotion } from "@/lib/motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Scaling, Zap, Shield, Code } from "lucide-react";
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
    title: "Scalablity",
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

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollXValue = useMotionValue(0);
  const controls = useAnimation();

  useGSAP(
    () => {
      const heading = headingRef.current;
      if (!heading) return;
      if (prefersReducedMotion()) {
        gsap.set(heading, { opacity: 1, y: 0 });
        return;
      }
      gsap.from(heading, {
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: heading, start: "top 82%" },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    let cancelled = false;

    const run = async () => {
      const el = containerRef.current;
      if (!el || !mq.matches || cancelled) {
        controls.stop();
        return;
      }
      if (isHovered) {
        controls.stop();
        return;
      }
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      await controls.start({
        x: [0, -maxScroll],
        transition: {
          duration: Math.max(16, maxScroll / 45),
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    void run();
    mq.addEventListener("change", run);
    const el = containerRef.current;
    const ro = el ? new ResizeObserver(() => void run()) : null;
    if (el) ro?.observe(el);

    return () => {
      cancelled = true;
      mq.removeEventListener("change", run);
      ro?.disconnect();
      controls.stop();
    };
  }, [controls, isHovered]);

  return (
    <section ref={sectionRef} id="skills" className="bg-canvas pb-20 pt-16 sm:pb-28 sm:pt-20 md:pb-32 md:pt-24">
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div ref={headingRef} className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs sm:tracking-[0.3em]">
            Capabilities
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:mt-4 sm:text-4xl md:text-5xl">
            The stack behind the <span className="text-accent">shipping</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          {SKILL_ITEMS.map((item, index) => (
            <TechCard key={`stack-${index}`} layout="stack" {...item} />
          ))}
        </div>

        <div
          ref={containerRef}
          className="hidden overflow-x-hidden md:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div className="flex gap-5 lg:gap-6" style={{ x: scrollXValue }} animate={controls}>
            {SKILL_ITEMS.map((item, index) => (
              <TechCard key={`rail-${index}`} layout="rail" {...item} />
            ))}
          </motion.div>
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
  layout,
}: SkillItem & { layout: "stack" | "rail" }) {
  const rail = layout === "rail";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className={cn(
            "flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/95 shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-accent/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_0_1px_rgba(232,165,75,0.12)]",
            rail
              ? "h-[400px] w-[300px] flex-shrink-0 sm:h-[420px] sm:w-[320px] lg:w-[350px]"
              : "min-h-0 w-full max-w-lg justify-self-center"
          )}
        >
          <CardContent className="flex flex-grow flex-col justify-between p-5 sm:p-6">
            <div>
              <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4">
                <h3
                  className={cn(
                    "font-bold text-ink",
                    rail ? "text-lg sm:text-xl lg:text-2xl" : "text-xl sm:text-2xl"
                  )}
                >
                  {title}
                </h3>
                {icon}
              </div>
              <p className="text-sm leading-relaxed text-muted sm:text-base">{description}</p>
            </div>
          </CardContent>
          <CardFooter className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
            <p className="cursor-pointer text-sm text-accent hover:underline">Tap to learn more</p>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-h-[min(90dvh,880px)] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto border border-border bg-elevated p-6 text-ink sm:p-8">
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
