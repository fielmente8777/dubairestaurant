/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  swcMinify: true,
  // reactStrictMode: true,
};

export default nextConfig;
