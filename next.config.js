/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

module.exports = nextConfig;
