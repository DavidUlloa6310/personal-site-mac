/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export plain static files so the site can be hosted on GitHub Pages.
  output: "export",
  images: {
    // GitHub Pages has no server to run Next's image optimizer.
    unoptimized: true,
  },
};

module.exports = nextConfig;
