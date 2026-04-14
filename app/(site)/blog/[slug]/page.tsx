import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { getAllSlugs, getCanonicalPostUrl, getPostBySlug } from "@/lib/blog";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Not found" };
  }
  const url = getCanonicalPostUrl(post.slug);
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    authors: [{ name: post.author, url: getSiteUrl() }],
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    robots: { index: true, follow: true },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <ArticleJsonLd post={post} />
      <article className="border-b border-white/[0.06] bg-canvas pb-24 pt-28 sm:pb-28 sm:pt-32 md:pb-32">
        <div className="mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
          <nav className="text-sm text-muted" aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li className="text-white/15">/</li>
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
              <li className="text-white/15">/</li>
              <li className="text-ink">{post.title}</li>
            </ol>
          </nav>

          <header className="mt-8">
            <time
              dateTime={post.datePublished}
              className="text-xs uppercase tracking-[0.2em] text-muted"
            >
              {new Date(post.datePublished).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.5rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{post.description}</p>
            <p className="mt-6 text-sm text-muted">
              By <span className="text-ink">{post.author}</span>
            </p>
          </header>

          <div className="mt-12 space-y-10">
            {post.sections.map((section, i) => (
              <section key={i} className="mb-10">
                {section.heading ? (
                  <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {section.heading}
                  </h2>
                ) : null}
                <div className={section.heading ? "mt-4" : ""}>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="mb-4 text-base leading-relaxed text-muted last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="mt-16 border-t border-white/[0.06] pt-8">
            <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
              ← All posts
            </Link>
          </footer>
          </div>
        </div>
      </article>
    </>
  );
}
