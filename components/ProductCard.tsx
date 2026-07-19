import { marketplaces, type MarketplaceKey } from "@/lib/marketplaces";
import type { Product } from "@/lib/types";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-white p-4 shadow-sm">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full rounded-xl object-cover bg-sand"
        />
        <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-sm font-semibold text-sand">
          {index + 1}
        </span>
      </div>
      <h3 className="mt-3 font-display text-lg leading-snug text-ink">{product.name}</h3>
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
  );
}
