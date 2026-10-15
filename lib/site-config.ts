import config from "@/site-config.json";

export const siteConfig = {
  ...config,
  privacyPolicyUrl: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL?.trim() ?? "",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "",
} as const;
