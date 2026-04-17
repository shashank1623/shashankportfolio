"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Flame } from "lucide-react";
import BookACall from "@/components/BookACall";
import { prefersReducedMotion } from "@/lib/motion";

export default function Service() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const chatMessages = [
    { role: "bot" as const, content: `Hi! Welcome to Shashank's page, how can I help you today?` },
    { role: "user" as const, content: "Hi! Can you add an AI chatbot to my website?" },
    { role: "bot" as const, content: "Yes, I can help with that. What features do you need?" },
    { role: "user" as const, content: "I need it to answer customer questions and help with bookings. Is that possible?" },
    { role: "bot" as const, content: "Absolutely. Could you please provide your email to get started?" },
    { role: "user" as const, content: "Sure, here is my email: john_03@gmail.com" },
    { role: "bot" as const, content: `Perfect. I'll be in touch soon to discuss the next steps. Have a great day!` },
  ];

  useGSAP(
    () => {
      const left = leftRef.current;
      const right = rightRef.current;
      if (!left || !right) return;

      const header = headerRef.current;
      if (prefersReducedMotion()) {
        gsap.set([header?.children, left.children, right.children].flat().filter(Boolean), {
          opacity: 1,
          x: 0,
          y: 0,
        });
        return;
      }

      if (header) {
        gsap.from(header.children, {
          opacity: 0,
          y: 40,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: header, start: "top 82%" },
        });
      }

      gsap.from(left.children, {
        opacity: 0,
        x: -48,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: left, start: "top 75%" },
      });

      gsap.from(right.children, {
        opacity: 0,
        x: 48,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: right, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-canvas py-20 text-ink sm:py-28 md:py-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs sm:tracking-[0.3em]">
            What I do
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
            AI in the product, <span className="text-accent">without the noise</span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-14 pt-6 lg:flex-row lg:justify-between">
          <div ref={leftRef} className="w-full space-y-8 lg:w-1/2 lg:pr-10">
            <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-accent">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                <Flame className="h-5 w-5 text-accent" />
              </span>
              Bring AI to your product
            </h3>
            <h4 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Make workflows feel{" "}
              <span className="text-ink">lighter</span> for your users.
            </h4>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              AI should shorten the path from intent to outcome — support, onboarding, and ops
              included. I help teams ship assistants, automations, and interfaces that stay fast.
            </p>
            <BookACall title="Let's talk AI — book a call" />
          </div>

          <div ref={rightRef} className="hidden w-full lg:block lg:w-1/2">
            <div className="ml-auto max-w-md rounded-2xl border border-border bg-surface p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="mb-6 flex items-center gap-2">
                <Bot className="h-6 w-6 text-accent" />
                <span className="font-display text-lg font-semibold">Support</span>
              </div>
              <div className="mb-4 space-y-2">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                      message.role === "bot"
                        ? "bg-accent/15 text-ink"
                        : "ml-auto bg-elevated text-muted ring-1 ring-border"
                    }`}
                  >
                    {message.content}
                  </div>
                ))}
              </div>
              <div className="flex items-center overflow-hidden rounded-full border border-border bg-elevated">
                <Input
                  type="text"
                  placeholder="Ask a question"
                  className="border-none bg-transparent pl-4 text-ink placeholder:text-muted"
                  disabled
                />
                <Button variant="ghost" className="text-accent">
                  <Bot className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
