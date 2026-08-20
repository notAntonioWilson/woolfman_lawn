/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first: roughly 30% smaller than WebP for these photos.
    formats: ["image/avif", "image/webp"],
    // Next 16 requires every quality value used in the app to be declared.
    qualities: [50, 58, 65, 72, 75],
  },
};
export default nextConfig;
