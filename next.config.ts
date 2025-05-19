import type { NextConfig } from "next";
const path = require('path')
const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['s3.amazonaws.com', 'dummyimage.com']
  },
};

export default nextConfig;
