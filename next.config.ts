import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
   compiler: {
    styledComponents: true, // ✅ Enables consistent SSR + client class names
  },
};

export default nextConfig;
