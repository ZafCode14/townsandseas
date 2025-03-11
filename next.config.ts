import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-8710ac850d3e473198c5d3476539cc82.r2.dev",
        pathname: "/**", // Add the new hostname here
      },
    ],
  }
};

export default nextConfig;
