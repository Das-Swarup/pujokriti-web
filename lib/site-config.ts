import config from "@/site-config.json";

export const siteConfig = {
  ...config,
  privacy: {
    ...config.privacy,
    contactEmail:
      process.env.NEXT_PUBLIC_PRIVACY_CONTACT_EMAIL?.trim() ?? config.privacy.contactEmail,
  },
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() ?? "",
} as const;
