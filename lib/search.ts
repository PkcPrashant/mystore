import { getAllVideos } from "./videos";
import type { SearchRow } from "./types";

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
