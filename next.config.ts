import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/california",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tennessee",
        destination: "/",
        permanent: true,
      },
      {
        source: "/new-york",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
