import packageJson from "../package.json";

export function getAppBuildInfo() {
  const version = packageJson.version;
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME?.trim() || null;
  const nodeEnv = process.env.NODE_ENV;
  const environmentLabel =
    nodeEnv === "development"
      ? "Development"
      : nodeEnv === "production"
        ? "Production"
        : nodeEnv;

  return { version, buildTime, environmentLabel };
}
