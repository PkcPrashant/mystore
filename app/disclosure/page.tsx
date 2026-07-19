export const metadata = { title: "Affiliate Disclosure | mystore.com" };

export default function DisclosurePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 space-y-4 text-ink/80 leading-relaxed">
      <h1 className="font-display text-2xl font-semibold text-ink">Affiliate Disclosure</h1>
      <p>
        mystore.com is a participant in the Amazon Associates Program, an affiliate
        advertising program designed to provide a means for sites to earn
        advertising fees by advertising and linking to Amazon.ae, Amazon.sa, and
        affiliated sites.
      </p>
      <p>
        When you click a &ldquo;Buy on Amazon&rdquo; link on this site and make a
        qualifying purchase, we may earn a commission — at no extra cost to you.
        Prices and availability are set by Amazon and can change at any time;
        always confirm the current price and product details on Amazon before
        purchasing.
      </p>
      <p>
        We only feature products we&apos;ve genuinely used, reviewed, or featured
        in our videos. Our opinions are our own.
      </p>
      <p>As an Amazon Associate, we earn from qualifying purchases.</p>
    </main>
  );
}
