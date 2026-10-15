import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const siteConfig = JSON.parse(readFileSync("site-config.json", "utf8"));
const apkPath = resolve(siteConfig.download.expectedFile);
const maxHobbyUploadBytes = 100_000_000;

if (!existsSync(apkPath) || !statSync(apkPath).isFile()) {
  console.error(
    `Pujokriti APK is missing. Add the signed release APK at ${siteConfig.download.expectedFile} before running the site or building for deployment.`,
  );
  process.exit(1);
}

const size = statSync(apkPath).size;

if (size === 0) {
  console.error(`Pujokriti APK at ${apkPath} is empty.`);
  process.exit(1);
}

if (size > maxHobbyUploadBytes) {
  console.error(
    `Pujokriti APK is ${(size / 1024 / 1024).toFixed(2)} MiB, over Vercel Hobby's 100 MB static-file upload limit.`,
  );
  process.exit(1);
}

console.log(
  `APK ready: ${(size / 1024 / 1024).toFixed(2)} MiB (Vercel Hobby static-file limit: 100 MB).`,
);
