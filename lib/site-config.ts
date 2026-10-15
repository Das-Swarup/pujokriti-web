import config from "@/site-config.json";

export const siteConfig = {
  ...config,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "",
} as const;
