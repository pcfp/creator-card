import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['techcrunch.com', 'image.cnbcfm.com', 'cdn.prod.website-files.com', 'cdn-icons-png.flaticon.com'],
  },
};

export default nextConfig;
