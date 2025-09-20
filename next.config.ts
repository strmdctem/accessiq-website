import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: isProd ? '/accessiq-website' : '',
  assetPrefix: isProd ? '/accessiq-website' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
