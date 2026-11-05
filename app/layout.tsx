import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "Pujokriti — Discover Durga & Kali Pujo Pandals",
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  applicationName: siteConfig.name,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Pujokriti — Discover Durga & Kali Pujo Pandals",
    description: siteConfig.description,
    type: "website",
    url: siteConfig.canonicalUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/favicon.png",
        width: 1024,
        height: 1024,
        alt: "Pujokriti",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Pujokriti — Discover Durga & Kali Pujo Pandals",
    description: siteConfig.description,
    images: ["/favicon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#292B2F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
