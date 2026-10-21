import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for shared (DirectAdmin/Apache) hosting: `npm run build` writes the site to ./out
  output: 'export',
  // No image server on static hosting; photos are already pre-compressed WebP
  images: { unoptimized: true },
};

export default nextConfig;
