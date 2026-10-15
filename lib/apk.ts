import { existsSync, statSync } from "node:fs";
import { siteConfig } from "@/lib/site-config";

export function isApkAvailable() {
  return (
    existsSync(siteConfig.download.expectedFile) &&
    statSync(siteConfig.download.expectedFile).isFile()
  );
}
