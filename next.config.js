/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "section-blog-theme",
  themeConfig: "./theme.config.jsx",
  readingTime: true,
});
 
module.exports = withNextra({
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
      
        hostname: 'vercel.app',
      },
    ],
  },
}); 
