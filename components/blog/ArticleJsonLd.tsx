import type { BlogPost } from "@/lib/blog";
import { getCanonicalPostUrl } from "@/lib/blog";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

type Props = { post: BlogPost };

export function ArticleJsonLd({ post }: Props) {
  const url = getCanonicalPostUrl(post.slug);
  const site = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      "@type": "Person",
      name: post.author,
      url: site,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: site,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    keywords: post.keywords.join(", "),
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
