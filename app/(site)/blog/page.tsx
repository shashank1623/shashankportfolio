import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
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

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Deep dives with canonical URLs, Open Graph metadata, and structured data on each article."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <div className="mx-auto w-full max-w-site px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <ul className="divide-y divide-border rounded-2xl border border-border bg-surface">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="flex flex-col gap-2 px-5 py-6 sm:flex-row sm:items-start sm:justify-between sm:px-8 sm:py-8">
                <div className="max-w-3xl">
                  <time
                    dateTime={post.datePublished}
                    className="text-xs uppercase tracking-wider text-muted"
                  >
                    {new Date(post.datePublished).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{post.description}</p>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-2 shrink-0 text-sm font-medium text-accent hover:underline sm:mt-8"
                >
                  Read →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
