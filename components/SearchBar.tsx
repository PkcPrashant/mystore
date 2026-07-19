"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SearchRow } from "@/lib/types";

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export default function SearchBar({ index }: { index: SearchRow[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    return index
      .filter(
        (row) =>
          normalize(row.productName).includes(q) ||
          normalize(row.videoId).includes(q) ||
          row.asins.some((asin) => normalize(asin).includes(q))
      )
      .slice(0, 20);
  }, [query, index]);

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by product name, ASIN, or video ID…"
        className="w-full rounded-full border border-line bg-white px-5 py-3 text-ink placeholder:text-ink/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-clay"
        aria-label="Search products"
      />

      {query && (
        <div className="absolute z-10 mt-2 w-full rounded-2xl border border-line bg-white shadow-lg max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-ink/60">
              No matches for “{query}”. Try a different product name, ASIN, or video ID.
            </p>
          ) : (
            <ul className="divide-y divide-line">
              {results.map((row, i) => (
                <li key={`${row.videoId}-${row.productId}-${i}`}>
                  <Link
                    href={`/v/${row.videoId}`}
                    className="flex items-center gap-3 p-3 hover:bg-sand transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={row.image}
                      alt={row.productName}
                      className="h-12 w-12 rounded-lg object-cover bg-sand"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-ink">{row.productName}</p>
                      <p className="text-xs text-ink/50">
                        From video #{row.videoId}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
