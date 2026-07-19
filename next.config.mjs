/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Using plain <img> tags for product photos (you'll host them in /public),
    // so no remote image domains are needed by default. Add any here if you
    // later pull images from a CDN.
    unoptimized: true,
  },
};

export default nextConfig;
