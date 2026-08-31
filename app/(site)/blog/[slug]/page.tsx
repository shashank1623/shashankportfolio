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

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <ArticleJsonLd post={post} />
      <article>
        <header className="mb-6">
          <h1 className="text-lg">{post.title}</h1>
          <p className="text-[color:var(--muted)]">
            <time dateTime={post.datePublished}>
              {formatDate(post.datePublished)}
            </time>{" "}
            · {post.author}
          </p>
        </header>

        <div className="space-y-6">
          {post.sections.map((section, i) => (
            <section key={i}>
              {section.heading ? (
                <p className="font-semibold">{section.heading}</p>
              ) : null}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mt-2 first:mt-0">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-10">
          <Link href="/blog">← All posts</Link>
        </p>
      </article>
    </>
  );
}
