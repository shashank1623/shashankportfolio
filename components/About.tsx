"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profilePic from "./assets/IMG_5115.jpeg";
import { prefersReducedMotion } from "@/lib/motion";
import { CONTACT } from "@/lib/resume";

/** Intrinsic pixels of IMG_5115.jpeg — keeps layout ratio without cropping. */
const PROFILE_PIC_WIDTH = 4284;
const PROFILE_PIC_HEIGHT = 5712;

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const title = titleRef.current;
      const copy = copyRef.current;
      const media = mediaRef.current;
      if (!title || !copy || !media) return;

      if (prefersReducedMotion()) {
        gsap.set([title, copy.children, media], { opacity: 1, x: 0, y: 0 });
        return;
      }

      gsap.from(title, {
        opacity: 0,
        y: 48,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: title, start: "top 82%" },
      });

      gsap.from(copy.children, {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: copy, start: "top 78%" },
      });

      gsap.from(media, {
        opacity: 0,
        x: 56,
        rotate: -2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: media, start: "top 78%" },
      });

      gsap.to(media, {
        y: -36,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-black pb-20 pt-16 sm:pb-24 sm:pt-24 md:pb-28 md:pt-28"
    >
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 sm:gap-14 md:flex-row md:items-start md:justify-between md:gap-10 lg:gap-14">
          <div className="min-w-0 max-w-xl flex-1">
            <h2
              ref={titleRef}
              className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              About
            </h2>
            <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.2em] text-muted sm:tracking-[0.25em]">
              {CONTACT.name} · B.Tech AI &amp; Data Science · Remote contracts
            </p>

            <div ref={copyRef} className="mt-10 space-y-5 text-base leading-relaxed text-muted sm:mt-14 sm:space-y-6 sm:text-lg">
              <p>
                I build full-stack and AI-backed products—RAG search, Voice AI, realtime UIs, and data-heavy dashboards.
                Recent contracts include{" "}
                <span className="font-medium text-ink">Allude</span>, <span className="font-medium text-ink">YourSizer</span>
                , and <span className="font-medium text-ink">Agreed Pro</span>. See the full timeline on the{" "}
                <Link href="/experience" className="text-accent underline-offset-4 hover:underline">
                  experience page
                </Link>
                .
              </p>
              <p>
                Projects like{" "}
                <Link href="/projects" className="font-semibold text-accent underline-offset-4 hover:underline">
                  Wizard.ai
                </Link>{" "}
                and DocSync live on the{" "}
                <Link href="/projects" className="text-accent underline-offset-4 hover:underline">
                  projects page
                </Link>
                . For stack detail, open{" "}
                <Link href="/expertise" className="text-accent underline-offset-4 hover:underline">
                  technical skills
                </Link>{" "}
                or{" "}
                <Link href="/education" className="text-accent underline-offset-4 hover:underline">
                  education &amp; achievements
                </Link>
                .
              </p>
              <p className="text-sm sm:text-base">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
                  {CONTACT.phone}
                </a>
                {" · "}
                <a href={`mailto:${CONTACT.email}`} className="text-accent hover:underline">
                  {CONTACT.email}
                </a>
                {" · "}
                <a href={CONTACT.github} className="text-accent hover:underline">
                  GitHub
                </a>
                {" · "}
                <a href={CONTACT.leetcode} className="text-accent hover:underline">
                  LeetCode
                </a>
              </p>
            </div>
          </div>

          <div
            ref={mediaRef}
            className="relative mx-auto w-full max-w-sm shrink-0 self-start md:mx-0 md:max-w-md"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <Image
                src={profilePic}
                alt={CONTACT.name}
                width={PROFILE_PIC_WIDTH}
                height={PROFILE_PIC_HEIGHT}
                className="h-auto w-full"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
