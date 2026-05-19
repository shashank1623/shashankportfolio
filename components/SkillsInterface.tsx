"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Layers, Sparkles, Target, Zap } from "lucide-react";
import BookACall from "./BookACall";
import { prefersReducedMotion } from "@/lib/motion";

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
      const panels = visual.querySelectorAll<HTMLElement>("[data-live-panel]");
      const signals = visual.querySelectorAll<HTMLElement>("[data-live-signal]");
      const dots = visual.querySelectorAll<HTMLElement>("[data-live-dot]");
      const chartPath = visual.querySelector<SVGPathElement>("[data-live-chart]");
      const orbit = visual.querySelector<HTMLElement>("[data-live-orbit]");

      if (prefersReducedMotion()) {
        gsap.set([title, visual, copy.children, panels, signals, dots, chartPath, orbit].flat().filter(Boolean), {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
        });
        if (chartPath) {
          gsap.set(chartPath, { strokeDashoffset: 0 });
        }
        return;
      }

      if (chartPath) {
        const length = chartPath.getTotalLength();
        gsap.set(chartPath, { strokeDasharray: length, strokeDashoffset: length });
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

      gsap.from(panels, {
        opacity: 0,
        x: -42,
        rotateY: -18,
        scale: 0.94,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: visual, start: "top 78%" },
      });

      if (chartPath) {
        gsap.to(chartPath, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.inOut",
          scrollTrigger: { trigger: visual, start: "top 76%" },
        });
      }

      gsap.set([panels, signals, dots, orbit].flat().filter(Boolean), {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
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
    <section
      ref={sectionRef}
      className="section-flow bg-black py-20 text-ink sm:py-28 md:py-32"
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
            <LiveInterfaceMockup />
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

function LiveInterfaceMockup() {
  return (
    <div
      className="relative grid min-h-[430px] w-full max-w-2xl place-items-center overflow-visible sm:min-h-[560px]"
      aria-label="Live layered web interface mockup"
    >
      <svg
        className="h-auto w-full max-w-[720px] overflow-visible drop-shadow-[0_34px_80px_rgba(0,0,0,0.55)]"
        viewBox="0 0 620 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="liveGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(336 236) rotate(90) scale(188 238)">
            <stop stopColor="#e8a54b" stopOpacity="0.2" />
            <stop offset="1" stopColor="#e8a54b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="panelFill" x1="150" y1="88" x2="454" y2="322" gradientUnits="userSpaceOnUse">
            <stop stopColor="#191919" stopOpacity="0.82" />
            <stop offset="0.52" stopColor="#080807" stopOpacity="0.62" />
            <stop offset="1" stopColor="#17110a" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="frontFill" x1="276" y1="160" x2="584" y2="326" gradientUnits="userSpaceOnUse">
            <stop stopColor="#19130a" stopOpacity="0.78" />
            <stop offset="0.45" stopColor="#070604" stopOpacity="0.72" />
            <stop offset="1" stopColor="#1b1207" stopOpacity="0.58" />
          </linearGradient>
          <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#e8a54b" stopOpacity="0" />
            <stop offset="0.7" stopColor="#e8a54b" stopOpacity="0.46" />
            <stop offset="1" stopColor="#e8a54b" stopOpacity="0.92" />
          </linearGradient>
          <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="dotField" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.15" fill="#e8a54b" fillOpacity="0.55" />
          </pattern>
          <mask id="dotRing">
            <rect width="620" height="420" fill="black" />
            <circle cx="398" cy="212" r="176" fill="white" />
            <circle cx="398" cy="212" r="86" fill="black" />
          </mask>
        </defs>

        <rect width="620" height="420" fill="transparent" />
        <ellipse cx="345" cy="242" rx="245" ry="168" fill="url(#liveGlow)" />
        <g data-live-orbit mask="url(#dotRing)" opacity="0.78">
          <rect x="190" y="0" width="410" height="420" fill="url(#dotField)" />
        </g>

        <g filter="url(#softGlow)" opacity="0.9">
          {[128, 158, 190, 222, 255, 288].map((y, index) => (
            <g key={y}>
              <line
                data-live-signal
                x1={index % 2 ? 4 : 28}
                y1={y}
                x2={index % 2 ? 155 : 174}
                y2={y + index * 2}
                stroke="url(#beam)"
                strokeWidth="1.4"
              />
              <rect
                data-live-dot
                x={index % 2 ? 153 : 172}
                y={y + index * 2 - 4}
                width="8"
                height="8"
                rx="1.5"
                fill="#e8a54b"
              />
            </g>
          ))}
        </g>

        <g data-live-panel transform="rotate(4 314 208)">
          <rect x="54" y="-6" width="520" height="428" rx="20" fill="url(#panelFill)" stroke="#8b8b8b" strokeOpacity="0.38" strokeWidth="1.1" />
          <rect x="54" y="-6" width="520" height="70" rx="20" fill="white" fillOpacity="0.03" />
          <circle cx="84" cy="34" r="4" fill="#e8a54b" fillOpacity="0.8" />
          <circle cx="104" cy="34" r="4" fill="#e8a54b" fillOpacity="0.65" />
          <circle cx="124" cy="34" r="4" fill="white" fillOpacity="0.22" />
        </g>

        <g data-live-panel transform="rotate(4 334 228)">
          <rect x="190" y="128" width="288" height="198" rx="15" fill="url(#panelFill)" stroke="#8b8b8b" strokeOpacity="0.36" strokeWidth="1.05" />
          <rect x="214" y="162" width="220" height="112" rx="10" stroke="#e8a54b" strokeOpacity="0.1" />
        </g>

        <g data-live-panel transform="rotate(4 426 254)">
          <rect x="252" y="140" width="348" height="224" rx="16" fill="url(#frontFill)" stroke="#e8a54b" strokeOpacity="0.78" strokeWidth="1.35" />
          <rect x="252" y="140" width="348" height="224" rx="16" stroke="white" strokeOpacity="0.14" />
          <g opacity="0.3">
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={`h-${i}`} x1="300" y1={188 + i * 32} x2="568" y2={188 + i * 32} stroke="#e8a54b" strokeOpacity="0.22" />
            ))}
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={`v-${i}`} x1={300 + i * 54} y1="180" x2={300 + i * 54} y2="300" stroke="#e8a54b" strokeOpacity="0.2" />
            ))}
          </g>
          <path d="M300 170 C338 162 354 198 388 186 C424 172 440 222 474 210 C508 198 532 248 566 276 C582 288 592 294 600 298" stroke="#e8a54b" strokeOpacity="0.22" strokeWidth="13" strokeLinecap="round" />
          <path data-live-chart d="M300 170 C338 162 354 198 388 186 C424 172 440 222 474 210 C508 198 532 248 566 276 C582 288 592 294 600 298" stroke="#e8a54b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="300" cy="170" r="7" fill="#e8a54b" filter="url(#softGlow)" />
          <line x1="300" y1="170" x2="300" y2="326" stroke="#e8a54b" strokeOpacity="0.35" />
          <line x1="300" y1="326" x2="568" y2="326" stroke="#e8a54b" strokeOpacity="0.3" />
          <line x1="300" y1="342" x2="420" y2="342" stroke="#e8a54b" strokeOpacity="0.34" strokeWidth="3" strokeLinecap="round" />
          <line x1="300" y1="356" x2="396" y2="356" stroke="#d7c2a0" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />
          <line x1="300" y1="370" x2="374" y2="370" stroke="#e8a54b" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />
          <rect x="530" y="342" width="56" height="22" rx="11" stroke="#e8a54b" strokeOpacity="0.75" />
        </g>
      </svg>
    </div>
  );
}
