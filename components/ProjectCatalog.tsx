"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Package,
  Sparkles,
  Star,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import {
  FEATURED_PROJECT,
  MORE_PROJECTS,
  SECONDARY_PROJECTS,
  type FeaturedProject,
  type MoreProject,
  type SecondaryProject,
} from "@/lib/projects-data";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const moreProjectIcons = [Package, Sparkles, BarChart3, MessageCircle] as const;

function TechTags({
  tags,
  className,
  variant = "default",
}: {
  tags: string[];
  className?: string;
  variant?: "default" | "featured";
}) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs sm:text-sm",
            variant === "featured"
              ? "border-white/25 bg-white/[0.03] text-ink"
              : "border-border bg-elevated/80 text-muted"
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function PosterSlot({
  poster,
  alt,
  className,
  perspective,
  sizes,
}: {
  poster: StaticImageData | string | null;
  alt: string;
  className?: string;
  perspective?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-[200px] overflow-hidden rounded-xl border border-border/70 bg-elevated/40 sm:min-h-[220px]",
        perspective && "md:min-h-[280px] lg:min-h-[320px]",
        className
      )}
      aria-label={poster ? undefined : `${alt} poster`}
    >
      {poster ? (
        <div
          className={cn(
            "relative h-full w-full min-h-[inherit]",
            perspective &&
              "md:[transform:perspective(1200px)_rotateY(-10deg)_rotateX(4deg)] md:origin-center md:scale-[1.02]"
          )}
        >
          <Image
            src={poster}
            alt={alt}
            fill
            className="object-cover object-left-top"
            sizes={sizes ?? "(max-width: 768px) 100vw, 480px"}
          />
        </div>
      ) : (
        <div className="flex h-full min-h-[inherit] flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface via-elevated to-canvas p-6">
          <div className="h-px w-12 bg-border" aria-hidden />
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted/80">Poster</span>
        </div>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: FeaturedProject }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-accent/[0.12] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-accent/[0.1] to-transparent"
        aria-hidden
      />
      <div className="relative grid gap-10 p-7 sm:p-9 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-6 lg:p-8 xl:gap-10 xl:p-10">
        <div className="flex min-w-0 flex-col justify-between gap-10 lg:py-2">
          <div className="space-y-6">
            <div>
              <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent sm:text-xs">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                {project.eyebrow}
              </p>
              <div
                className="mt-3 h-px w-full max-w-[7.5rem] bg-gradient-to-r from-accent via-accent/60 to-transparent"
                aria-hidden
              />
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-base text-muted sm:text-lg">{project.subtitle}</p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted/95 sm:text-base sm:leading-relaxed">
              {project.description}
            </p>
            <TechTags tags={project.techStack} variant="featured" />
          </div>
          <Link
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/55 bg-transparent px-6 py-3 text-sm font-medium text-ink shadow-[0_0_28px_rgba(232,165,75,0.12)] transition hover:border-accent hover:shadow-[0_0_36px_rgba(232,165,75,0.22)]"
          >
            View case study
            <ArrowUpRight
              className="h-4 w-4 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>

        <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[340px] lg:min-h-[440px] xl:min-h-[500px]">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,165,75,0.22),transparent_68%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-6 left-0 w-1/2 bg-gradient-to-r from-accent/20 via-accent/5 to-transparent blur-3xl"
            aria-hidden
          />
          {project.poster ? (
            <div className="relative z-10 w-full max-w-[720px] lg:max-w-none lg:w-[118%] lg:origin-center lg:[transform:perspective(1600px)_rotateY(-9deg)_rotateX(4deg)_scale(1.06)] xl:w-[125%] xl:[transform:perspective(1600px)_rotateY(-9deg)_rotateX(4deg)_scale(1.1)]">
              <Image
                src={project.poster}
                alt={`${project.title} dashboard`}
                width={1536}
                height={1024}
                className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)]"
                sizes="(max-width: 1024px) 95vw, 780px"
                priority
              />
            </div>
          ) : (
            <PosterSlot poster={null} alt={project.title} className="w-full min-h-[280px] lg:min-h-[400px]" />
          )}
        </div>
      </div>
    </article>
  );
}

function SecondaryCard({ project }: { project: SecondaryProject }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-[0_16px_48px_rgba(0,0,0,0.28)]">
      <div className="grid gap-6 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] sm:gap-5 sm:p-6">
        <div className="flex min-w-0 flex-col justify-center gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            <span className="text-accent">{project.index}</span> {project.title}
          </h3>
          <p className="text-sm font-medium text-muted">{project.subtitle}</p>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          <TechTags tags={project.techStack} className="gap-1.5" />
        </div>
        <PosterSlot
          poster={project.poster}
          alt={project.title}
          className="min-h-[160px] sm:min-h-[180px]"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>
    </article>
  );
}

function MoreProjectItem({
  project,
  icon: Icon,
}: {
  project: MoreProject;
  icon: (typeof moreProjectIcons)[number];
}) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-more-project
      className="group flex min-w-[240px] flex-1 flex-col gap-4 rounded-xl border border-transparent p-4 transition hover:border-border/60 hover:bg-surface/40 sm:min-w-0"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/50 bg-elevated/60 shadow-[0_0_24px_rgba(232,165,75,0.12)] transition group-hover:border-accent group-hover:shadow-[0_0_32px_rgba(232,165,75,0.2)]"
        aria-hidden
      >
        <Icon className="h-6 w-6 text-accent" strokeWidth={1.35} />
      </div>
      <div className="space-y-2">
        <h4 className="font-display text-lg font-semibold text-ink">{project.title}</h4>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
      <TechTags tags={project.techStack} className="mt-auto gap-1.5" />
    </Link>
  );
}

type ProjectCatalogProps = {
  showViewAll?: boolean;
};

export default function ProjectCatalog({ showViewAll = true }: ProjectCatalogProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const moreTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const header = headerRef.current;
      const featured = featuredRef.current;
      const moreTrack = moreTrackRef.current;
      if (!section || !header) return;

      if (prefersReducedMotion()) {
        gsap.set([header, featured, "[data-more-project]"].filter(Boolean), {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.from(header, {
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: header, start: "top 82%" },
      });

      if (featured) {
        gsap.from(featured, {
          opacity: 0,
          y: 48,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: featured, start: "top 80%" },
        });
      }

      if (moreTrack) {
        gsap.from("[data-more-project]", {
          opacity: 0,
          y: 32,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: moreTrack, start: "top 85%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-flow relative overflow-hidden bg-canvas py-20 text-ink sm:py-28 md:py-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.03] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div
          ref={headerRef}
          className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-accent sm:text-xs sm:tracking-[0.35em]">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Selected Work<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              AI systems, real-time interfaces, and production-grade frontend engineering.
            </p>
          </div>
          {showViewAll ? (
            <Link
              href="/projects"
              className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-accent/50 bg-transparent px-6 text-sm font-medium text-ink transition hover:border-accent hover:bg-accent/10"
            >
              View all projects
              <ArrowUpRight
                className="h-4 w-4 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          ) : null}
        </div>

        <div ref={featuredRef} className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <FeaturedCard project={FEATURED_PROJECT} />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-4">
            {SECONDARY_PROJECTS.map((project) => (
              <SecondaryCard key={project.index} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-accent sm:text-xs sm:tracking-[0.32em]">
              More projects
            </p>
            <div className="flex gap-2" aria-hidden>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/40 hover:text-accent"
                tabIndex={-1}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent/40 hover:text-accent"
                tabIndex={-1}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            ref={moreTrackRef}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
          >
            {MORE_PROJECTS.map((project, i) => (
              <MoreProjectItem
                key={project.title}
                project={project}
                icon={moreProjectIcons[i] ?? Package}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
