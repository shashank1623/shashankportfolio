"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { prefersReducedMotion } from "@/lib/motion";

export default function FooterTop() {
  const sectionRef = useRef<HTMLElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const block = blockRef.current;
      if (!block) return;

      if (prefersReducedMotion()) {
        gsap.set(block.children, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(block.children, {
        opacity: 0,
        y: 40,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: block, start: "top 78%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-flow bg-canvas py-20 text-ink sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div ref={blockRef} className="text-center">
          <blockquote className="font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl md:text-4xl">
            Ideas are not built in a day — the journey starts the moment you ship the first slice.
          </blockquote>
          <p className="mt-8 text-muted">Write me an email to get started.</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <a href="mailto:shashankbhardwaj16apr@gmail.com">
              <Button className="rounded-full bg-accent px-8 py-6 text-base font-semibold text-canvas hover:bg-accent-dim">
                Get started
                <span className="ml-2" aria-hidden>
                  ✉️
                </span>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/shashank-bhardwaj-1a92b9213/"
              className="text-accent underline-offset-4 hover:underline"
            >
              or connect on LinkedIn
            </a>
          </div>

          <p className="mt-10 text-sm text-muted">shashankbhardwaj16apr@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
