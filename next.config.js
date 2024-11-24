/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    basePath: "/Vamshi00111.github.io", // Remove trailing slash here
    assetPrefix: "/Vamshi00111.github.io",
    images: {
        unoptimized: true, // Disable image optimization for static export
    },
  };
  
module.exports = nextConfig;
