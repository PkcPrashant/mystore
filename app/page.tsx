import Link from "next/link";
import { getAllVideos } from "@/lib/videos";
import { buildSearchIndex } from "@/lib/search";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const videos = getAllVideos();
  const searchIndex = buildSearchIndex();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <section className="flex flex-col items-center text-center">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Every product from our videos, in one place
        </h1>
        <p className="mt-3 max-w-md text-ink/60">
          Search by product, ASIN, or video ID — or browse the latest drops below.
        </p>
        <div className="mt-6 w-full flex justify-center">
          <SearchBar index={searchIndex} />
        </div>
      </section>

      <section id="latest" className="mt-14">
        <h2 className="font-display text-xl font-semibold text-ink">Latest videos</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/v/${video.id}`}
              className="rounded-2xl border border-line bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs text-ink/50">Video #{video.id}</p>
              <h3 className="mt-1 font-display text-lg text-ink">{video.title}</h3>
              <p className="mt-1 text-sm text-ink/60">{video.products.length} products</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
