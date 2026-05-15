"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Layers, Sparkles, Target, Zap } from "lucide-react";
import interfaceVisual from "@/components/assets/icon3.png";
import BookACall from "./BookACall";
import { prefersReducedMotion } from "@/lib/motion";

const INTERFACE_VISUAL_WIDTH = 1393;
const INTERFACE_VISUAL_HEIGHT = 1129;

const featureItems = [
  { icon: Zap, label: "Blazing Fast" },
  { icon: Target, label: "Focused UX" },
  { icon: Sparkles, label: "Modern Design" },
  { icon: Layers, label: "Scalable" },
] as const;

export default function SkillsInterface() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const title = titleRef.current;
      const visual = visualRef.current;
      const copy = copyRef.current;
      if (!title || !visual || !copy) return;

      if (prefersReducedMotion()) {
        gsap.set([title, visual, copy.children], { opacity: 1, x: 0, y: 0 });
        return;
      }

      gsap.from(title, {
        opacity: 0,
        y: 44,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: title, start: "top 80%" },
      });

      gsap.from(visual, {
        opacity: 0,
        y: 64,
        rotate: 2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: visual, start: "top 78%" },
      });

      gsap.from(copy.children, {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: copy, start: "top 76%" },
      });

      gsap.to(visual, {
        y: -28,
        rotate: -1.5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-flow bg-canvas py-20 text-ink sm:py-28 md:py-32"
    >
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div ref={titleRef} className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 md:mb-20">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.32em] text-muted sm:text-xs sm:tracking-[0.35em]">
            Interfaces
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-accent sm:mt-4 sm:text-4xl md:text-5xl">
            Fast, modern web surfaces
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 pt-2 sm:gap-16 sm:pt-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div ref={visualRef} className="flex w-full justify-center lg:w-1/2 lg:justify-start">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-transparent blur-3xl" />
              <Image
                src={interfaceVisual}
                alt="Layered glass interface panels with data visualization"
                width={INTERFACE_VISUAL_WIDTH}
                height={INTERFACE_VISUAL_HEIGHT}
                className="relative h-auto w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>
          </div>

          <div
            ref={copyRef}
            className="w-full max-w-xl space-y-10 text-left sm:space-y-12 lg:w-1/2 lg:max-w-none lg:pl-4 xl:pl-10"
          >
            <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              Want a site that feels <span className="text-accent">fast and effortless?</span>
            </h3>
            <p className="max-w-lg text-lg leading-relaxed text-muted">
              Performance, clarity, and motion where it matters — so visitors find what they need
              without friction.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-2 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-0">
              {featureItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center sm:px-1">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent sm:h-16 sm:w-16"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6 text-accent sm:h-7 sm:w-7" strokeWidth={1.35} />
                  </div>
                  <p className="mt-3 text-xs font-medium leading-snug text-muted sm:text-[0.8125rem]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <BookACall title="Book a call" showArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
