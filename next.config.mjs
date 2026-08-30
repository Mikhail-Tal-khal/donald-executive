/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Vercel runs the image optimizer, so let it serve AVIF/WebP at the
    // size each viewport actually needs. The source art is ~10MB of PNGs.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
