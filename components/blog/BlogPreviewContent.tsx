"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { BlogPost } from "@/lib/blog";
import { prefersReducedMotion } from "@/lib/motion";

type Props = { posts: BlogPost[] };

export function BlogPreviewContent({ posts }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      const header = headerRef.current;
      const cta = ctaRef.current;
      const list = listRef.current;
      if (!header || !list) return;

      const cards = gsap.utils.toArray<HTMLElement>(list.querySelectorAll("li"));

      if (prefersReducedMotion()) {
        gsap.set([header.children, cta, cards].flat().filter(Boolean), { opacity: 1, y: 0, x: 0, scale: 1 });
        return;
      }

      const allTargets = [Array.from(header.children), cta, ...cards].flat().filter(Boolean);

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        onComplete: () => {
          gsap.set(allTargets, { clearProps: "opacity,transform" });
        },
      });

      tl.from(header.children, { opacity: 0, y: 36, duration: 0.7, stagger: 0.08 }, 0);
      if (cta) tl.from(cta, { opacity: 0, x: 20, duration: 0.55 }, "-=0.35");
      tl.from(
        cards,
        { opacity: 0, y: 44, scale: 0.98, transformOrigin: "50% 80%", duration: 0.72, stagger: 0.11 },
        "-=0.4"
      );
    },
    { scope: sectionRef, dependencies: [posts] }
  );

  return (
    <section
      ref={sectionRef}
      className="section-flow bg-canvas py-20 text-ink antialiased sm:py-28 md:py-32"
      aria-labelledby="blog-preview-heading"
    >
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div ref={headerRef}>
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs sm:tracking-[0.3em]">
              Blog
            </p>
            <h2
              id="blog-preview-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Notes on <span className="text-accent">shipping</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted sm:text-lg">
              Long-form posts with structured metadata for search and sharing.
            </p>
          </div>
          <Link
            ref={ctaRef}
            href="/blog"
            className="shrink-0 self-start rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40 hover:text-accent sm:self-auto"
          >
            View all posts
          </Link>
        </div>

        <ul ref={listRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-white/[0.1] bg-surface p-6 shadow-[0_16px_48px_rgba(0,0,0,0.25)] transition hover:border-accent/35 hover:shadow-[0_20px_56px_rgba(0,0,0,0.32)]">
                <time
                  dateTime={post.datePublished}
                  className="text-xs font-medium uppercase tracking-wider text-muted"
                >
                  {new Date(post.datePublished).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  <Link href={`/blog/${post.slug}`} className="text-ink transition hover:text-accent">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-ink/80 sm:text-[0.9375rem]">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex text-sm font-medium text-accent hover:underline"
                >
                  Read post →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
