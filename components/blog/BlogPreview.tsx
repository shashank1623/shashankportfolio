import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="section-flow bg-canvas py-20 sm:py-28 md:py-32" aria-labelledby="blog-preview-heading">
      <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted sm:text-xs sm:tracking-[0.3em]">
              Blog
            </p>
            <h2
              id="blog-preview-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Notes on <span className="text-accent">shipping</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Long-form posts with structured metadata for search and sharing.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 self-start rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40 hover:text-accent sm:self-auto"
          >
            View all posts
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_16px_48px_rgba(0,0,0,0.25)] transition hover:border-accent/30">
                <time
                  dateTime={post.datePublished}
                  className="text-xs uppercase tracking-wider text-muted"
                >
                  {new Date(post.datePublished).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">{post.description}</p>
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
