export const metadata = { title: "Privacy Policy | mystore.com" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 space-y-4 text-ink/80 leading-relaxed">
      <h1 className="font-display text-2xl font-semibold text-ink">Privacy Policy</h1>
      <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>
      <p>
        This site does not require you to create an account or submit personal
        information to browse products. We may collect basic, non-identifying
        analytics (such as pages visited and general location by country) to
        understand which videos and products perform well.
      </p>
      <p>
        Clicking a &ldquo;Buy on Amazon&rdquo; link takes you to Amazon.ae or
        Amazon.sa, where Amazon&apos;s own privacy policy applies to any
        information you provide there. We do not have access to your Amazon
        account, payment details, or order history.
      </p>
      <p>
        If you contact us directly (e.g. by email), we use that information only
        to respond to you and do not sell or share it with third parties.
      </p>
    </main>
  );
}
