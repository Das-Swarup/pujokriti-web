import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "Pujokriti — Find the pandals. Follow the feeling.",
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Pujokriti — Find the pandals. Follow the feeling.",
    description: siteConfig.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f3eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
