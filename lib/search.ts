import { getAllVideos } from "./videos";
import type { SearchRow, CatalogItem } from "./types";

// Full flat list for the homepage: one entry per (video, product) pair,
// carrying the whole product so buy buttons render directly on the homepage
// with no click-through to a video page needed.
export function buildCatalog(): CatalogItem[] {
  const items: CatalogItem[] = [];
  for (const video of getAllVideos()) {
    for (const product of video.products) {
      items.push({ videoId: video.id, videoTitle: video.title, product });
    }
  }
  // Newest videos first (getAllVideos is already sorted by publishedAt desc)
  return items;
}

// Builds one row per (video, product) pair. Because the same product can
// appear in multiple videos, searching "banana slicer" or its ASIN can
// legitimately return several rows pointing at different /v/{videoId} pages.
export function buildSearchIndex(): SearchRow[] {
  const rows: SearchRow[] = [];
  for (const video of getAllVideos()) {
    for (const product of video.products) {
      rows.push({
        videoId: video.id,
        videoTitle: video.title,
        productId: product.id,
        productName: product.name,
        image: product.image,
        asins: Object.values(product.links)
          .map((l) => l?.asin)
          .filter((a): a is string => !!a),
      });
    }
  }
  return rows;
}
