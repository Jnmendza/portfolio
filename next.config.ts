import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "qtmkwwvomuvavuoaqjcn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
