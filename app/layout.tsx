import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://mystore-tiktok.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "mystore — Products from our TikTok videos",
  description:
    "Find every product featured in our TikTok videos, with direct links to Amazon UAE and Saudi Arabia.",
  openGraph: {
    title: "mystore — Products from our TikTok videos",
    description:
      "Find every product featured in our TikTok videos, with direct links to Amazon UAE and Saudi Arabia.",
    url: siteUrl,
    siteName: "mystore",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "mystore — Products from our TikTok videos",
    description:
      "Find every product featured in our TikTok videos, with direct links to Amazon UAE and Saudi Arabia.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sand font-body text-ink antialiased flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
