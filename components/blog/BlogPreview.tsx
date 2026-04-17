import { getAllPosts } from "@/lib/blog";
import { BlogPreviewContent } from "@/components/blog/BlogPreviewContent";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  return <BlogPreviewContent posts={posts} />;
}
