import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.prepressure.com",
        // port: "",
        // pathname: "/**",
      },
  /* config options here */
    ]
  },
}

export default nextConfig;
