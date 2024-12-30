// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Replace with your actual image domain(s)
      },
    ],
  },
}

module.exports = nextConfig