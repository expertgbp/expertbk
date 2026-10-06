/**
 * Shared numbers and helpers for the paginated blog index, so the two
 * listing routes (src/pages/blog/index.astro for page 1,
 * src/pages/blog/page/[page].astro for the rest), the listing component
 * and the blog sitemap all agree on the page size, the sort order and the
 * URL of each page.
 */
import { getCollection, type CollectionEntry } from "astro:content";

export const BLOG_PAGE_SIZE = 6;

/** Newest first. Posts published on the same day fall back to their slug,
 * so the order (and therefore which page a post lands on) is identical on
 * every build. */
export async function getSortedPosts(): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf() || a.id.localeCompare(b.id)
  );
}

export function blogPageCount(postCount: number): number {
  return Math.max(1, Math.ceil(postCount / BLOG_PAGE_SIZE));
}

/** Page 1 lives at /blog itself; there is deliberately no /blog/page/1. */
export function blogPagePath(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

/** The anchor id a topic chip jumps to (same slug the index has always used). */
export function clusterAnchor(cluster: string): string {
  return cluster.toLowerCase().replace(/\s+/g, "-");
}
