import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname: "tse3.mm.bing.net"}
    ]
  }
};

export default nextConfig;
