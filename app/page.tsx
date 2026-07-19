import { buildCatalog } from "@/lib/search";
import Catalog from "@/components/Catalog";

export default function HomePage() {
  const items = buildCatalog();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <section className="flex flex-col items-center text-center">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Every product from our videos, in one place
        </h1>
        <p className="mt-3 max-w-md text-ink/60">
          Search or scroll — every buy button is right here, no extra click needed.
        </p>
      </section>

      <section className="mt-10">
        <Catalog items={items} />
      </section>
    </main>
  );
}
