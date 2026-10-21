import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Served through Next's optimiser (sharp), so each device gets a right-sized AVIF/WebP
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1280, 1600, 2048],
  },
};

export default nextConfig;
