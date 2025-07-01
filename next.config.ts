import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/Flipr_Project',  
  assetPrefix: '/Flipr_Project',
};

export default nextConfig;
