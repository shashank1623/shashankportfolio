import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Sparkle } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description: "Engineering notes on WebSockets, RAG retrieval, Voice AI, and shipping reliable full-stack products.",
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description: "Long-form posts with structured metadata for SEO and sharing.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [featuredPost, ...articlePosts] = posts;

  return (
    <main className="relative overflow-hidden bg-black pt-28 text-ink sm:pt-32">
      <BlogAtmosphere />

      <section className="relative mx-auto w-full max-w-site px-4 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="relative grid min-h-[15rem] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.32em] text-muted">
              <span className="h-px w-8 bg-accent/60 shadow-[0_0_18px_rgba(232,165,75,0.85)]" />
              Insights
            </div>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl">
              Blog
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
              Deep dives with canonical URLs, Open Graph metadata, and structured data on each article.
            </p>
          </div>

          <div className="pointer-events-none relative hidden min-h-48 overflow-hidden lg:block">
            <HeroEditorialWave />
          </div>
        </div>

        {featuredPost ? (
          <article className="group relative mt-12 overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.035] shadow-[0_0_80px_rgba(255,170,0,0.05),0_38px_140px_rgba(0,0,0,0.58)] backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(232,165,75,0.17),transparent_28%),radial-gradient(circle_at_82%_52%,rgba(232,165,75,0.12),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.012)_48%,rgba(232,165,75,0.045))]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-accent/[0.045] to-transparent" />

            <div className="relative grid min-h-[26rem] lg:grid-cols-[0.96fr_1.04fr]">
              <div className="relative px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
                <div className="absolute left-12 top-12 h-40 w-40 rounded-full bg-accent/10 blur-[90px]" />
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />

                <div className="relative mb-7 inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-accent">
                  <Sparkle className="h-3.5 w-3.5" />
                  Featured
                </div>

                <h2 className="relative max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-[4rem]">
                  <span className="absolute -inset-x-2 bottom-1 h-5 rounded-full bg-accent/10 blur-xl" aria-hidden />
                  <Link href={`/blog/${featuredPost.slug}`} className="transition group-hover:text-accent">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="relative mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                  {featuredPost.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.62rem] uppercase tracking-[0.18em] text-white/45">
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="h-3.5 w-3.5 text-accent/70" />
                    <time dateTime={featuredPost.datePublished}>{formatLongDate(featuredPost.datePublished)}</time>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock3 className="h-3.5 w-3.5 text-accent/70" />
                    {getReadTime(featuredPost.slug)}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {featuredPost.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-accent/15 bg-accent/[0.055] px-3.5 py-1.5 text-[0.62rem] text-accent/80"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="relative mt-10 inline-flex items-center gap-3 text-sm font-medium text-accent transition hover:gap-4"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative min-h-[22rem] overflow-hidden border-t border-white/[0.06] lg:border-l lg:border-t-0">
                <FeaturedEditorialSystem />
              </div>
            </div>
          </article>
        ) : null}

        <div className="mt-16">
          <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-muted">
            All Articles
          </p>

          <ul className="relative">
            <li aria-hidden className="h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
            {articlePosts.map((post) => (
              <li key={post.slug} className="border-b border-white/[0.075]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative grid gap-4 py-6 transition sm:grid-cols-[7.5rem_1fr_auto] sm:items-center"
                >
                  <span className="absolute -inset-x-4 inset-y-2 -z-10 rounded-2xl bg-accent/[0.045] opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
                  <div className="flex items-center gap-5 px-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_16px_rgba(232,165,75,0.95)]" />
                    <time dateTime={post.datePublished} className="leading-none">
                      <span className="block font-display text-lg text-ink">{formatDay(post.datePublished)}</span>
                      <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                        {formatMonthYear(post.datePublished)}
                      </span>
                    </time>
                  </div>

                  <div>
                    <h2 className="font-display text-base font-semibold text-ink transition group-hover:text-accent sm:text-lg">
                      {post.title}
                    </h2>
                    <p className="mt-1 line-clamp-1 text-xs leading-6 text-white/50 sm:text-sm">
                      {post.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-6 text-[0.62rem] uppercase tracking-[0.16em] text-white/45 sm:justify-end">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      {getReadTime(post.slug)}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/15 bg-accent/[0.055] text-accent transition group-hover:translate-x-1 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

const READ_TIMES: Record<string, string> = {
  "shipping-voice-ai-with-quality-gates": "12 min read",
  "rag-retrieval-that-survives-production": "9 min read",
  "websockets-for-realtime-products": "7 min read",
  "designing-idempotent-apis-that-scale": "8 min read",
};

function getReadTime(slug: string) {
  return READ_TIMES[slug] ?? "6 min read";
}

function formatLongDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function formatDay(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(new Date(date));
}

function formatMonthYear(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function BlogAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-white/[0.05]" />
      <div className="absolute left-[8%] top-24 h-32 w-32 rounded-full bg-accent/10 blur-[96px]" />
      <div className="absolute right-[12%] top-36 h-56 w-56 rounded-full bg-accent/[0.09] blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_72%_16%,rgba(232,165,75,0.13),transparent_30%),radial-gradient(circle_at_18%_42%,rgba(232,165,75,0.08),transparent_31%),linear-gradient(180deg,rgba(232,165,75,0.045),rgba(7,6,4,0)_76%)]" />
      <div className="absolute right-0 top-20 h-[34rem] w-[56rem] bg-[linear-gradient(rgba(232,165,75,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(232,165,75,0.075)_1px,transparent_1px)] bg-[size:52px_52px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_74%)]" />
      <div className="absolute inset-x-0 top-[18rem] h-[20rem] bg-gradient-to-b from-transparent via-black/35 to-black" />
    </div>
  );
}

function HeroEditorialWave() {
  return (
    <svg viewBox="0 0 760 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="blogHeroWaveGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF8C1A" />
        </linearGradient>
        <filter id="blogHeroWaveGlow">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d="M44 166 H716" stroke="#E8A54B" strokeOpacity="0.06" />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d="M70 174 C170 90 258 194 360 118 C456 48 546 166 690 72"
          stroke="url(#blogHeroWaveGradient)"
          strokeOpacity={0.08 + i * 0.035}
          strokeWidth={1}
          fill="none"
          transform={`translate(0 ${i * 13})`}
        />
      ))}
      <g filter="url(#blogHeroWaveGlow)" opacity="0.5">
        <path
          id="blogHeroMotionPath"
          d="M70 174 C170 90 258 194 360 118 C456 48 546 166 690 72"
          stroke="url(#blogHeroWaveGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {[0, 0.25, 0.5, 0.75].map((delay) => (
        <circle key={delay} r="3" fill="#FFB347" opacity="0.75">
          <animateMotion dur="9s" begin={`${delay * 9}s`} repeatCount="indefinite" rotate="auto">
            <mpath href="#blogHeroMotionPath" />
          </animateMotion>
          <animate attributeName="opacity" values="0;0.85;0" dur="9s" begin={`${delay * 9}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function FeaturedEditorialSystem() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,165,75,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(232,165,75,0.055)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35 [mask-image:radial-gradient(ellipse_at_center,black,transparent_74%)]" />
      <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-accent/10 blur-[70px]" />

      <div className="absolute left-8 top-8 hidden w-44 space-y-3 rounded-2xl border border-white/[0.08] bg-black/35 p-4 backdrop-blur-md sm:block">
        <div className="h-2 w-16 rounded-full bg-accent/35" />
        <div className="h-1.5 w-full rounded-full bg-white/10" />
        <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
        <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
      </div>

      <svg viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="blogFeaturedWaveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB347" />
            <stop offset="100%" stopColor="#FF8C1A" />
          </linearGradient>
          <filter id="blogFeaturedGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`h-${i}`} x1="58" y1={86 + i * 44} x2="592" y2={86 + i * 44} stroke="#E8A54B" strokeOpacity="0.055" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`v-${i}`} x1={110 + i * 78} y1="48" x2={110 + i * 78} y2="316" stroke="#E8A54B" strokeOpacity="0.045" />
        ))}

        <path
          d="M24 202 C104 134 158 244 238 178 C318 112 382 250 462 162 C520 98 564 120 640 82"
          stroke="url(#blogFeaturedWaveGradient)"
          strokeOpacity="0.13"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#blogFeaturedGlow)"
        />
        <path
          id="blogFeaturedMotionPath"
          d="M24 202 C104 134 158 244 238 178 C318 112 382 250 462 162 C520 98 564 120 640 82"
          stroke="url(#blogFeaturedWaveGradient)"
          strokeOpacity="0.58"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
          filter="url(#blogFeaturedGlow)"
        />
        <path
          d="M72 244 C154 204 214 284 296 224 C380 162 444 264 558 178"
          stroke="url(#blogFeaturedWaveGradient)"
          strokeOpacity="0.14"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {[0, 0.16, 0.32, 0.48, 0.64].map((delay) => (
          <circle key={delay} r="3.2" fill="#FFB347">
            <animateMotion dur="8.5s" begin={`${delay * 8.5}s`} repeatCount="indefinite" rotate="auto">
              <mpath href="#blogFeaturedMotionPath" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0" dur="8.5s" begin={`${delay * 8.5}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      <div className="absolute bottom-8 right-8 hidden w-56 rounded-2xl border border-accent/15 bg-black/35 p-4 backdrop-blur-md sm:block">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(232,165,75,0.9)]" />
          <span className="text-[0.6rem] uppercase tracking-[0.22em] text-accent/70">Knowledge Flow</span>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-5/6 rounded-full bg-white/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-accent/25" />
        </div>
      </div>
    </div>
  );
}
