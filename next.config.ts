import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: '/accessiq-website',
  assetPrefix: '/accessiq-website',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
