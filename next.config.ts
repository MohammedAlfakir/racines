import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["aceternity.com", "images.unsplash.com"],
  },
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Ensuring that Tailwind is enabled on both the client and server
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

export default withNextVideo(nextConfig);