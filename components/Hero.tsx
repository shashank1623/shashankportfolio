"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/moving-border";
import { prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const qRef = useRef<HTMLParagraphElement>(null);
  const hRef = useRef<HTMLHeadingElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = prefersReducedMotion();
      const q = qRef.current;
      const h = hRef.current;
      const tag = tagRef.current;
      const cta = ctaRef.current;
      const scroll = scrollRef.current;
      const bg = bgRef.current;
      const orb = orbRef.current;
      const line = lineRef.current;

      if (reduce) {
        gsap.set([q, h, tag, cta, scroll, line, orb, bg].filter(Boolean), {
          clearProps: "all",
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(line, { scaleX: 0, duration: 0.9, transformOrigin: "left center" })
        .from(
          q,
          { opacity: 0, y: 28, duration: 0.7 },
          "-=0.45"
        )
        .from(
          h,
          { opacity: 0, y: 40, duration: 0.85 },
          "-=0.5"
        )
        .from(
          tag,
          { opacity: 0, y: 24, duration: 0.65 },
          "-=0.55"
        )
        .from(
          cta,
          { opacity: 0, y: 20, duration: 0.55 },
          "-=0.45"
        )
        .from(
          scroll,
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.35"
        );

      gsap.to(orb, {
        y: -80,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(bg, {
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(line, {
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to([q, h, tag, cta], {
        y: -48,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-canvas pb-16 pt-28 sm:pb-20 sm:pt-32 md:min-h-[110vh] md:pt-36 lg:pt-40"
    >
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(232,165,75,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        ref={orbRef}
        className="pointer-events-none absolute -right-[20%] top-[18%] h-[min(100vw,420px)] w-[min(100vw,420px)] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,220,160,0.35),transparent_65%)] opacity-80 blur-3xl sm:-right-24 sm:h-[min(70vw,520px)] sm:w-[min(70vw,520px)]"
        aria-hidden
      />
      <div
        ref={lineRef}
        className="pointer-events-none absolute left-8 top-28 hidden h-px w-32 bg-gradient-to-r from-accent/80 to-transparent md:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-site px-4 text-center sm:px-8 lg:px-12">
        <p
          ref={qRef}
          className="font-display text-[0.65rem] uppercase leading-relaxed tracking-[0.22em] text-muted sm:text-xs sm:tracking-[0.28em] md:text-base md:tracking-[0.35em]"
        >
          Shashank Bhardwaj · Full-stack · AI systems
        </p>
        <h1
          ref={hRef}
          className="font-display mt-5 text-[1.65rem] font-semibold leading-[1.08] tracking-tight text-ink sm:mt-6 sm:text-4xl md:text-6xl lg:text-7xl"
        >
          Code that ships.
          <span className="mt-2 block text-accent sm:mt-3">Products that stay simple.</span>
        </h1>
        <p
          ref={tagRef}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:mt-8 sm:text-lg md:text-xl"
        >
          I build scalable web apps, AI-powered workflows, and interfaces people
          actually enjoy using.
        </p>

        <div ref={ctaRef} className="mt-10 flex justify-center sm:mt-12">
          <Button
            borderRadius="1.8rem"
            borderClassName="bg-[radial-gradient(var(--accent)_45%,transparent_60%)]"
            className="border border-white/10 bg-surface/90 px-8 py-3 text-sm font-semibold text-ink shadow-[0_0_40px_var(--glow)] transition hover:bg-surface sm:px-10 sm:text-base"
            onClick={handleScroll}
          >
            View the work
          </Button>
        </div>

        <div ref={scrollRef} className="mt-16 flex flex-col items-center gap-2 text-muted sm:mt-24">
          <span className="text-[0.65rem] uppercase tracking-[0.2em] sm:text-xs">Scroll</span>
          <ChevronDown className="h-8 w-8 text-accent/80 sm:h-10 sm:w-10" aria-hidden />
        </div>
      </div>
    </section>
  );
}
