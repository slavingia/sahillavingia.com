// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sahillavingia.com',
      },
    ],
    unoptimized: false,
  },
  swcMinify: true,
}

module.exports = nextConfig