"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { PortfolioProject } from "@/lib/projects-data";
import { PROJECTS } from "@/lib/projects-data";
import { StaticImageData } from "next/image";
import { prefersReducedMotion } from "@/lib/motion";

function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  detailedDescription,
  techStack,
  websiteUrl,
  period,
}: PortfolioProject) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          data-project-card
          className="group mx-auto w-full max-w-md cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 md:mx-0 md:w-[420px] md:max-w-none md:flex-shrink-0"
        >
          <div className="relative h-52 overflow-hidden">
            <Image
              src={imageUrl as StaticImageData | string}
              alt={title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 88vw, 420px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent" />
          </div>
          <div className="space-y-3 p-6">
            {period ? (
              <p className="text-xs uppercase tracking-wider text-muted">{period}</p>
            ) : null}
            <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-border bg-elevated px-2.5 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[min(90dvh,900px)] w-[calc(100vw-1.5rem)] max-w-[600px] overflow-y-auto rounded-2xl border border-border bg-elevated p-6 text-ink sm:p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-semibold">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Description
            </h4>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              {detailedDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Button variant="outline" className="rounded-full border-accent/40 text-accent" asChild>
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              See in action
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectCatalog() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const title = titleRef.current;
      if (!section || !track || !title) return;

      if (prefersReducedMotion()) {
        gsap.set(title, { opacity: 1, y: 0 });
        gsap.set("[data-project-card]", { opacity: 1, x: 0 });
        return;
      }

      gsap.from(title, {
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: title, start: "top 82%" },
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const getScroll = () => Math.max(track.scrollWidth - window.innerWidth + 120, 0);

        gsap.to(track, {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScroll() + window.innerHeight * 0.35}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.from("[data-project-card]", {
          opacity: 0,
          y: 56,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <div className="bg-canvas">
      <section
        ref={sectionRef}
        className="relative py-16 sm:py-24 md:flex md:min-h-screen md:flex-col md:justify-center md:py-16"
      >
        <div ref={titleRef} className="mx-auto w-full max-w-site px-4 pb-8 sm:px-8 sm:pb-10 md:pb-14 lg:px-12">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs sm:tracking-[0.3em]">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Selected builds spanning AI SaaS, realtime collaboration, and production frontends.
          </p>
        </div>

        <div className="md:pl-4 lg:pl-10">
          <div
            ref={trackRef}
            className="flex flex-col gap-8 px-4 pb-8 sm:gap-10 sm:px-6 md:flex-row md:flex-nowrap md:gap-8 md:pb-0 md:pr-24 lg:pr-32"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-site px-4 pb-16 pt-2 sm:px-8 sm:pb-20 lg:px-12">
        <Button
          variant="outline"
          className="rounded-full border-border bg-surface text-ink hover:border-accent/40 hover:text-accent"
          asChild
        >
          <a href="https://github.com/shashank1623?tab=repositories" target="_blank" rel="noopener noreferrer">
            More on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
