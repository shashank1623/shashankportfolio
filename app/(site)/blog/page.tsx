import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getAllPosts } from "@/lib/blog";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description:
    "Engineering notes on WebSockets, RAG retrieval, Voice AI, and shipping reliable full-stack products.",
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description: "Long-form posts with structured metadata for SEO and sharing.",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader title="Blog" />
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <span className="text-[color:var(--muted)]">
              {" — "}
              <time dateTime={post.datePublished}>
                {formatDate(post.datePublished)}
              </time>
            </span>
            <p className="text-[color:var(--muted)]">{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
