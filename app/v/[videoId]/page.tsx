import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllVideoIds, getVideo } from "@/lib/videos";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return getAllVideoIds().map((videoId) => ({ videoId }));
}

export async function generateMetadata({
  params,
}: {
  params: { videoId: string };
}): Promise<Metadata> {
  const video = getVideo(params.videoId);
  if (!video) return {};
  const title = `${video.title} | mystore`;
  const description = `Find all ${video.products.length} products from "${video.title}" on Amazon UAE and Saudi Arabia.`;
  const image = video.products[0]?.image;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default function VideoPage({ params }: { params: { videoId: string } }) {
  const video = getVideo(params.videoId);
  if (!video) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs text-ink/50">Video #{video.id}</p>
      <h1 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
        {video.title}
      </h1>
      <p className="mt-2 text-sm text-ink/60">
        All {video.products.length} products in one simple page.
      </p>

      <p className="mt-4 rounded-xl bg-white border border-line px-4 py-3 text-xs text-ink/60">
        Affiliate links: we may earn a commission from qualifying purchases at no
        extra cost to you.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {video.products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <p className="mt-8 text-xs text-ink/40">
        Prices and availability can change. Check final product details on Amazon
        before buying.
      </p>
    </main>
  );
}
