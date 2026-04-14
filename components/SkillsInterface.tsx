"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Phone from "@/components/assets/phone.webp";
import BookACall from "./BookACall";
import { prefersReducedMotion } from "@/lib/motion";

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
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-flow bg-canvas py-20 text-ink sm:py-28 md:py-32">
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div ref={titleRef} className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs sm:tracking-[0.3em]">
            Interfaces
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-accent sm:mt-4 sm:text-4xl md:text-5xl">
            Fast, modern web surfaces
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 pt-2 sm:gap-14 sm:pt-4 lg:flex-row lg:items-start lg:justify-between">
          <div ref={visualRef} className="hidden w-full justify-center lg:flex lg:w-1/2 lg:justify-start">
            <div className="relative max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-transparent blur-3xl" />
              <Image
                src={Phone}
                alt="Stylized mobile device"
                width={560}
                height={840}
                className="relative h-auto max-w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          <div ref={copyRef} className="w-full max-w-xl space-y-8 lg:w-1/2 lg:pl-8">
            <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Want a site that feels{" "}
              <span className="text-accent">
                fast
                <br />
                and effortless?
              </span>
            </h3>
            <p className="text-lg leading-relaxed text-muted">
              Performance, clarity, and motion where it matters — so visitors find what they need
              without friction.
            </p>
            <BookACall title="Book a call" />
          </div>
        </div>
      </div>
    </section>
  );
}
