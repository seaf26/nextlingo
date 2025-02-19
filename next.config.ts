

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'aceternity.com',
      },
      {
        protocol: 'https' as const,
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https' as const,
        hostname: 'images.unsplash.com',
      },
    ],
  },
  output: 'export' as const,
// FIX
};

export default nextConfig;