import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.dc.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.marvel.com',
      },
    ],
  },
};

export default nextConfig;
