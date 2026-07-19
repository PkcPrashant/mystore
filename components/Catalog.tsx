"use client";

import { useMemo, useState } from "react";
import { marketplaces, type MarketplaceKey } from "@/lib/marketplaces";
import type { CatalogItem } from "@/lib/types";

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export default function Catalog({ items }: { items: CatalogItem[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return items;
    return items.filter(({ videoId, product }) => {
      const asins = Object.values(product.links)
        .map((l) => l?.asin)
        .filter((a): a is string => !!a);
      return (
        normalize(product.name).includes(q) ||
        normalize(videoId).includes(q) ||
        asins.some((asin) => normalize(asin).includes(q))
      );
    });
  }, [query, items]);

  return (
    <div id="catalog">
      <div className="flex justify-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product name, ASIN, or video ID…"
          className="w-full max-w-xl rounded-full border border-line bg-white px-5 py-3 text-ink placeholder:text-ink/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-clay"
          aria-label="Search products"
        />
      </div>

      <p className="mt-3 text-center text-sm text-ink/50">
        {filtered.length} product{filtered.length === 1 ? "" : "s"}
        {query && ` matching "${query}"`}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-ink/60">
          No matches. Try a different product name, ASIN, or video ID.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ videoId, product }, i) => (
            <div
              key={`${videoId}-${product.id}-${i}`}
              className="flex flex-col rounded-2xl border border-line bg-white p-4 shadow-sm"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full rounded-xl object-cover bg-sand"
                />
                <span className="absolute left-2 top-2 rounded-full bg-ink/80 px-2 py-0.5 text-xs font-medium text-sand">
                  video #{videoId}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg leading-snug text-ink">
                {product.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(Object.keys(product.links) as MarketplaceKey[]).map((key) => {
                  const link = product.links[key];
                  const m = marketplaces[key];
                  if (!link) return null;
                  return (
                    <a
                      key={key}
                      href={`https://www.${m.domain}/dp/${link.asin}?tag=${link.tag}`}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="flex-1 rounded-full bg-moss px-4 py-2 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                      {m.flag} {m.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
