import { createReadStream, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { readFile } from "node:fs/promises";

const siteConfig = JSON.parse(
  await readFile(new URL("../site-config.json", import.meta.url), "utf8"),
);

const deploymentUrl = process.argv[2];

if (!deploymentUrl) {
  console.error("Usage: npm run verify:deployment -- https://your-deployment.example");
  process.exit(1);
}

const target = new URL(siteConfig.download.path, deploymentUrl);
const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);

if (target.protocol !== "https:" && !(target.protocol === "http:" && localHosts.has(target.hostname))) {
  console.error("Use an HTTPS deployment URL (HTTP is allowed only for localhost testing).");
  process.exit(1);
}

const localPath = resolve(siteConfig.download.expectedFile);
const localSize = statSync(localPath).size;
const localHash = createHash("sha256");

for await (const chunk of createReadStream(localPath)) {
  localHash.update(chunk);
}

const response = await fetch(target);

if (!response.ok || !response.body) {
  console.error(`APK request failed: HTTP ${response.status} ${response.statusText}`);
  process.exit(1);
}

const contentLength = Number(response.headers.get("content-length"));
const contentType = response.headers.get("content-type") ?? "";
const contentDisposition = response.headers.get("content-disposition") ?? "";

if (contentLength && contentLength !== localSize) {
  console.error(`APK size mismatch: deployment returned ${contentLength} bytes; expected ${localSize}.`);
  process.exit(1);
}

if (!contentType.includes("application/vnd.android.package-archive")) {
  console.error(`Unexpected APK content type: ${contentType || "(missing)"}`);
  process.exit(1);
}

if (!contentDisposition.includes(siteConfig.download.filename)) {
  console.error(`Download filename header does not include ${siteConfig.download.filename}.`);
  process.exit(1);
}

const remoteHash = createHash("sha256");
let remoteSize = 0;
let firstBytes;

for await (const chunk of response.body) {
  if (!firstBytes) firstBytes = Buffer.from(chunk).subarray(0, 4);
  remoteHash.update(chunk);
  remoteSize += chunk.byteLength;
}

const zipSignature = firstBytes?.[0] === 0x50 && firstBytes?.[1] === 0x4b;

if (remoteSize !== localSize || !zipSignature || remoteHash.digest("hex") !== localHash.digest("hex")) {
  console.error("The deployed URL did not return the exact local APK.");
  process.exit(1);
}

console.log(
  `Verified ${target.href}: HTTP ${response.status}, ${remoteSize} bytes, matching APK SHA-256, attachment filename ${siteConfig.download.filename}.`,
);
