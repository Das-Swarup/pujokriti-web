import type { NextConfig } from "next";
import siteConfig from "./site-config.json";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: siteConfig.download.path,
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Pujokriti.apk"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
