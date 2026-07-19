import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-line bg-sand/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-xl font-semibold text-ink">
          my<span className="text-clay">store</span>
        </Link>
        <nav className="text-sm text-ink/60">
          <Link href="/#catalog" className="hover:text-ink">
            All products
          </Link>
        </nav>
      </div>
    </header>
  );
}
