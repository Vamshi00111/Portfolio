/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    basePath: "/Portfolio", // Remove trailing slash here
    assetPrefix: "/Portfolio",
    images: {
        unoptimized: true, // Disable image optimization for static export
    },
  };
  
module.exports = nextConfig;
