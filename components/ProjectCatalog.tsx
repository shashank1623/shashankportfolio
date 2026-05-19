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
const transcriptionRows = [
  { title: "Product Demo - May 2024", time: "21 min", tone: "Summarized" },
  { title: "Interview with AI Researcher", time: "46 min", tone: "Processed" },
  { title: "Marketing Strategy Call", time: "43 min", tone: "Queued" },
] as const;

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
    <article className="relative overflow-hidden rounded-xl border border-white/10 bg-[#050505] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
      <div
        className="pointer-events-none absolute left-[17%] top-0 h-px w-[46%] bg-gradient-to-r from-transparent via-accent/85 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[16%] top-0 h-16 w-[38%] -translate-y-1/2 rounded-full bg-accent/18 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[8%] h-px w-[42%] bg-gradient-to-r from-transparent via-accent/85 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[9%] h-14 w-[35%] translate-y-1/2 rounded-full bg-accent/14 blur-2xl"
        aria-hidden
      />
      <div className="relative grid min-h-[400px] gap-8 p-7 sm:min-h-[440px] sm:p-8 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,1fr)] lg:gap-2">
        <div className="relative z-10 flex min-w-0 flex-col justify-between gap-10 lg:py-4">
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
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-accent/35 bg-black/20 px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_32px_rgba(232,165,75,0.12)] transition hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_40px_rgba(232,165,75,0.22)]"
          >
            View case study
            <ArrowUpRight
              className="h-4 w-4 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>

        <div className="relative -mr-8 flex min-h-[260px] items-center justify-end overflow-hidden sm:min-h-[320px] lg:-mr-10 lg:min-h-[400px]">
          <div
            className="pointer-events-none absolute right-[12%] top-1/2 h-[118%] w-[86%] -translate-y-1/2 rounded-full border border-white/20 opacity-70"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[5%] top-1/2 h-[82%] w-[78%] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,165,75,0.2),transparent_68%)] blur-2xl"
            aria-hidden
          />
          <WizardAiMockup />
        </div>
      </div>
    </article>
  );
}

function WizardAiMockup() {
  return (
    <div
      className="relative z-10 w-[min(44rem,112%)] origin-center translate-x-8 rotate-[-4deg] rounded-[1.35rem] border border-white/[0.08] bg-[#08090b] p-3 shadow-[0_42px_90px_rgba(0,0,0,0.75)] [transform:perspective(1500px)_rotateY(-12deg)_rotateX(3deg)] sm:translate-x-10 lg:w-[43rem] lg:translate-x-12"
      aria-hidden
    >
      <div className="absolute -inset-px rounded-[1.35rem] bg-[linear-gradient(120deg,rgba(232,165,75,0.28),transparent_35%,rgba(255,255,255,0.08)_70%,transparent)] opacity-80" />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0b0c10]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_0%,rgba(232,165,75,0.14),transparent_34%),linear-gradient(115deg,rgba(255,255,255,0.04),transparent_28%)]" />
        <div className="relative grid min-h-[330px] grid-cols-[92px_minmax(0,1fr)] sm:min-h-[370px] sm:grid-cols-[112px_minmax(0,1fr)]">
          <aside className="border-r border-white/[0.06] bg-black/25 p-4">
            <div className="mb-7 flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-accent/15 text-[0.65rem] font-bold text-accent">
                W
              </span>
              <span className="hidden text-xs font-semibold text-ink sm:block">Wizard.AI</span>
            </div>
            <div className="space-y-3 text-[0.55rem] font-medium text-muted sm:text-[0.62rem]">
              {["Home", "Team", "Transcriptions", "Summaries", "Settings"].map((item, index) => (
                <div
                  key={item}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2 py-2",
                    index === 0 ? "bg-accent/10 text-accent" : "text-muted/75"
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  <span className="hidden sm:inline">{item}</span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-4 hidden w-[80px] rounded-lg border border-white/[0.07] bg-black/30 p-3 sm:block">
              <p className="text-[0.55rem] text-muted">Upgrade Plan</p>
              <div className="mt-2 h-1 rounded-full bg-accent/70" />
            </div>
          </aside>

          <div className="p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[0.56rem] uppercase tracking-[0.18em] text-accent/80">
                  Workspace
                </p>
                <h4 className="mt-1 font-display text-lg font-semibold text-ink sm:text-2xl">
                  Dashboard
                </h4>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent/70" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricCard label="Total minutes processed" value="128,430" delta="+22.5%" />
              <MetricCard label="Transcriptions" value="342" delta="+8.1%" />
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_0.72fr]">
              <div className="rounded-xl border border-white/[0.06] bg-black/24 p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[0.65rem] font-semibold text-ink">Recent Transcriptions</p>
                  <span className="text-[0.55rem] text-muted">Live</span>
                </div>
                <div className="space-y-2">
                  {transcriptionRows.map((row, index) => (
                    <div key={row.title} className="flex items-center gap-3 rounded-lg bg-white/[0.025] p-2">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent/15 text-[0.65rem] font-semibold text-accent">
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[0.64rem] font-medium text-ink">{row.title}</p>
                        <p className="text-[0.54rem] text-muted">{row.tone}</p>
                      </div>
                      <span className="text-[0.55rem] text-muted">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden rounded-xl border border-white/[0.06] bg-black/24 p-4 lg:block">
                <p className="text-[0.65rem] font-semibold text-ink">Upload Audio</p>
                <div className="mt-4 grid h-28 place-items-center rounded-lg border border-dashed border-accent/30 bg-accent/[0.04]">
                  <div className="text-center">
                    <div className="mx-auto h-8 w-8 rounded-full border border-accent/40" />
                    <p className="mt-2 text-[0.55rem] text-muted">Drag & drop file</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/35 p-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent/45 text-accent">
                <span className="ml-0.5 text-xs">▶</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[0.6rem] font-medium text-ink">Product Demo - May 2024</p>
                <div className="mt-2 flex h-8 items-center gap-[3px] overflow-hidden">
                  {Array.from({ length: 52 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-[3px] shrink-0 rounded-full bg-accent/80"
                      style={{ height: `${8 + ((i * 7) % 23)}px`, opacity: 0.35 + ((i % 5) * 0.11) }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] p-3 sm:p-4">
      <p className="truncate text-[0.55rem] text-muted sm:text-[0.62rem]">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="font-display text-lg font-semibold text-ink sm:text-2xl">{value}</p>
        <p className="text-[0.55rem] font-semibold text-emerald-400">{delta}</p>
      </div>
    </div>
  );
}

function SecondaryCard({ project }: { project: SecondaryProject }) {
  const visual = project.title === "DocSync" ? (
    <DocSyncMockup />
  ) : project.title === "IndiGo Flight System" ? (
    <IndigoMockup />
  ) : (
    <PosterSlot
      poster={project.poster}
      alt={project.title}
      className="min-h-[160px] sm:min-h-[180px]"
      sizes="(max-width: 768px) 100vw, 320px"
    />
  );

  const mobileVisual =
    project.title === "DocSync" ? (
      <DocSyncMockup />
    ) : project.title === "IndiGo Flight System" ? (
      <IndigoMockup />
    ) : (
      <PosterSlot
        poster={project.poster}
        alt={project.title}
        className="min-h-[160px] sm:min-h-[180px]"
        sizes="(max-width: 768px) 100vw, 320px"
      />
    );

  return (
    <article className="relative min-h-[236px] overflow-hidden rounded-xl border border-white/10 bg-[#050505] shadow-[0_16px_48px_rgba(0,0,0,0.32)]">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-32 bg-gradient-to-r from-accent/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-10 h-24 w-32 rounded-full bg-accent/12 blur-2xl"
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] items-center justify-end overflow-hidden sm:flex",
          project.title === "DocSync" ? "bg-[radial-gradient(circle_at_70%_25%,rgba(79,70,229,0.18),transparent_48%)]" : "bg-[radial-gradient(circle_at_70%_35%,rgba(37,99,235,0.16),transparent_48%)]"
        )}
        aria-hidden
      >
        {visual}
      </div>
      <div className="relative z-10 flex min-h-[236px] flex-col justify-center gap-4 p-5 sm:w-[48%] sm:p-6">
        <div className="flex min-w-0 flex-col gap-4">
          <div>
            <p className="font-display text-sm font-semibold text-accent">{project.index}</p>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-muted">{project.subtitle}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          <TechTags tags={project.techStack} className="gap-1.5 [&>span]:px-2.5 [&>span]:py-1 [&>span]:text-[0.68rem]" />
        </div>
        <div className="relative -mx-1 mt-2 flex min-h-[150px] items-center justify-center overflow-hidden sm:hidden">
          {mobileVisual}
        </div>
      </div>
    </article>
  );
}

function DocSyncMockup() {
  return (
    <div className="relative h-[178px] w-[260px] shrink-0 translate-x-6 rounded-xl border border-indigo-300/15 bg-[#07080e] shadow-[0_24px_70px_rgba(79,70,229,0.22)] sm:w-[300px] sm:translate-x-14">
      <div className="absolute -left-8 top-3 h-40 w-28 rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute -top-8 left-10 h-24 w-32 rounded-full bg-indigo-500/25 blur-2xl" />
      <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_25%_0%,rgba(129,140,248,0.22),transparent_36%),linear-gradient(90deg,rgba(255,255,255,0.05),transparent_34%)]" />
      <div className="relative flex h-full overflow-hidden rounded-xl">
        <div className="w-[66%] border-r border-white/[0.06] p-4">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-indigo-400" />
            <span className="text-[0.56rem] font-semibold text-indigo-100">DocSync</span>
          </div>
          <p className="text-[0.7rem] font-semibold text-ink">Project Proposal</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-[0.45rem] text-muted">
            <span>Section</span>
            <span>Status</span>
            <span>Proposal</span>
            <span className="w-fit rounded-full bg-emerald-400/15 px-2 py-0.5 text-emerald-300">
              In Progress
            </span>
          </div>
          <div className="mt-4 flex items-center gap-1.5">
            {["A", "Y", "D"].map((item) => (
              <span
                key={item}
                className="grid h-5 w-5 place-items-center rounded-full border border-white/10 bg-white/10 text-[0.48rem] text-ink"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-1.5 w-28 rounded-full bg-white/12" />
            <div className="h-1.5 w-36 rounded-full bg-white/8" />
            <div className="h-1.5 w-24 rounded-full bg-white/8" />
          </div>
        </div>
        <div className="flex-1 bg-black/22 p-3">
          <div className="ml-auto mb-4 flex w-fit gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
          {[
            ["Alice", "Can we add more detail?"],
            ["You", "Sure, updating now."],
            ["David", "Looks good"],
          ].map(([name, note], index) => (
            <div key={name} className="mb-2 flex gap-2 rounded-lg bg-white/[0.045] p-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-indigo-500 text-[0.45rem] text-white">
                {name[0]}
              </span>
              <div className="min-w-0">
                <p className="text-[0.52rem] font-semibold text-ink">{name}</p>
                <p className="truncate text-[0.44rem] text-muted">{note}</p>
              </div>
            </div>
          ))}
          <div className="mt-3 h-6 rounded-md border border-white/8 bg-black/20" />
        </div>
      </div>
    </div>
  );
}

function IndigoMockup() {
  return (
    <div className="relative h-[178px] w-[260px] shrink-0 translate-x-6 rounded-xl border border-blue-300/15 bg-[#07101b] shadow-[0_24px_70px_rgba(37,99,235,0.2)] sm:w-[300px] sm:translate-x-14">
      <div className="absolute -top-8 left-12 h-24 w-40 rounded-full bg-blue-500/22 blur-2xl" />
      <div className="absolute -bottom-8 right-4 h-24 w-32 rounded-full bg-violet-500/18 blur-2xl" />
      <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_35%_0%,rgba(59,130,246,0.2),transparent_38%),linear-gradient(90deg,rgba(255,255,255,0.045),transparent_34%)]" />
      <div className="relative h-full overflow-hidden rounded-xl p-4">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="text-[0.72rem] font-semibold text-blue-100">IndiGo</span>
          <span className="text-[0.66rem] text-blue-300">✈</span>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-black/22 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-display text-xl font-semibold text-ink">DEL</p>
              <p className="text-[0.55rem] text-muted">Delhi</p>
            </div>
            <div className="flex-1">
              <div className="h-px bg-gradient-to-r from-white/20 via-white/70 to-white/20" />
              <p className="mt-1 text-center text-[0.48rem] text-muted">6E 532</p>
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-ink">BOM</p>
              <p className="text-[0.55rem] text-muted">Mumbai</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[0.48rem] font-semibold text-emerald-300">
              On Time
            </span>
          </div>
        </div>
        <div className="relative mt-4 h-16 overflow-hidden rounded-lg border border-white/[0.05] bg-black/18">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:24px_24px]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 72" fill="none">
            <path
              d="M18 58 C70 26 118 62 158 34 C196 8 230 22 284 14"
              stroke="rgb(124 92 255)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          </svg>
          <span className="absolute left-[42%] top-[42%] text-lg text-violet-300">✦</span>
        </div>
      </div>
    </div>
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
      className={cn(
        "section-flow relative overflow-hidden py-20 text-ink sm:py-28 md:py-32",
        showViewAll ? "bg-canvas" : "bg-black"
      )}
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

        <div ref={featuredRef} className="mt-12 grid gap-6 lg:mt-16">
          <div>
            <FeaturedCard project={FEATURED_PROJECT} />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
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
