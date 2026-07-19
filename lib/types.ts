import type { MarketplaceKey } from "./marketplaces";

export type ProductLink = {
  asin: string;
  tag: string;
};

export type Product = {
  id: string; // stable id within the video, e.g. "1" or a slug
  name: string;
  image: string; // path under /public, e.g. "/products/banana-slicer.png"
  links: Partial<Record<MarketplaceKey, ProductLink>>;
};

export type Video = {
  id: string; // the TikTok video id, used in the URL /v/{id}
  title: string;
  publishedAt?: string; // ISO date, optional
  products: Product[];
};

// Flattened row used for search — one per (video, product) pair.
// The same product can legitimately appear under several video ids
// (e.g. reposts, a product featured again in a later video), so search
// results are grouped by product but can list multiple source videos.
export type SearchRow = {
  videoId: string;
  videoTitle: string;
  productId: string;
  productName: string;
  image: string;
  asins: string[]; // all ASINs across marketplaces, for id search
};

// One row per (video, product) pair, carrying the full product so the
// homepage catalog can render buy buttons directly without a click-through.
export type CatalogItem = {
  videoId: string;
  videoTitle: string;
  product: Product;
};
