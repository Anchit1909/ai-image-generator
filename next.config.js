/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "sonnytestapp38d554.blob.core.windows.net",
      "links.papareact.com",
    ],
  },
}

module.exports = nextConfig
