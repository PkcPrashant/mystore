import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-ink/60">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 text-center">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <Link href="/disclosure" className="hover:text-ink">
            Affiliate disclosure
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/cookies" className="hover:text-ink">
            Cookies
          </Link>
          <Link href="/terms" className="hover:text-ink">
            Terms
          </Link>
        </nav>
        <p>As an Amazon Associate I earn from qualifying purchases.</p>
        <p>© {new Date().getFullYear()} mystore.com</p>
      </div>
    </footer>
  );
}
