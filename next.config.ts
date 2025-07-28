import { NextConfig } from 'next';

const repo = 'creator-card';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['techcrunch.com', 'image.cnbcfm.com', 'cdn.prod.website-files.com'],
  },
};

export default nextConfig;
