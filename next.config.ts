import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.thewhiskyexchange.com" },
      { protocol: "https", hostname: "media.licoresmundiales.com" },
      { protocol: "https", hostname: "azseller.s3.amazonaws.com" },
      { protocol: "https", hostname: "conchaytoro.com" },
      { protocol: "https", hostname: "media.ohlq.com" },
    ],
  },
};

export default nextConfig;
