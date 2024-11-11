/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["letsmake.site"],
  },
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  trailingSlash: true,
};

module.exports = nextConfig;
