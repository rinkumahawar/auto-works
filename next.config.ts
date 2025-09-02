import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Danger: disables ESLint errors from failing production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
