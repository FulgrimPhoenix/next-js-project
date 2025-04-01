import type { NextConfig } from "next";
import * as path from "path";
import { WebpackConfigContext } from "next/dist/server/config-shared";

module.exports = {
  webpack(config: WebpackConfigContext["webpack"]) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  distDir: "staticBuild",
  images: {
    remotePatterns: [
      {
        protocol: "http", // Используем http, так как это локальный сервер
        hostname: "localhost",
        port: "3000", // Порт, на котором работает сервер
        pathname: "/images/**", // Путь к изображениям
      },
    ],
  },
};

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
};

export default nextConfig;
