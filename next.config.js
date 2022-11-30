/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeImages: true,
  optimizeImagesInDev: false,
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  images: {
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
