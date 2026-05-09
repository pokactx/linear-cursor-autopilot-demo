import type { NextConfig } from "next";
import pkg from "./package.json";

/** 本番ビルド時のみ、未設定ならビルド開始時刻を埋める（外部サービス不要） */
const inferredBuildTime =
  process.env.NEXT_PUBLIC_BUILD_TIME ??
  (process.env.npm_lifecycle_event === "build"
    ? new Date().toISOString()
    : "");

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: pkg.version,
    ...(inferredBuildTime
      ? { NEXT_PUBLIC_BUILD_TIME: inferredBuildTime }
      : {}),
  },
};

export default nextConfig;
