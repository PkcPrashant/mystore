import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-line bg-sand/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl font-semibold text-ink">
          uael<span className="text-clay">.</span>ink
        </Link>
        <nav className="text-sm text-ink/60">
          <Link href="/#latest" className="hover:text-ink">
            Latest videos
          </Link>
        </nav>
      </div>
    </header>
  );
}
