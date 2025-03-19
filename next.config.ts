import type { NextConfig } from "next";
import * as path from "path";
import { WebpackConfigContext } from "next/dist/server/config-shared";

module.exports = {
  webpack(config: WebpackConfigContext["webpack"]) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
