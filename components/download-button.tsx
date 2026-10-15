import { ArrowDownToLine } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type DownloadButtonProps = {
  available: boolean;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function DownloadButton({
  available,
  children,
  className = "",
  showIcon = false,
}: DownloadButtonProps) {
  const content = (
    <>
      {showIcon && <ArrowDownToLine aria-hidden="true" size={17} strokeWidth={1.8} />}
      <span>{available ? children : "APK unavailable"}</span>
    </>
  );

  if (!available) {
    return (
      <span
        aria-disabled="true"
        className={`${className} download-disabled`.trim()}
        role="status"
        title={`Add the release APK at ${siteConfig.download.expectedFile}.`}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      className={className}
      download={siteConfig.download.filename}
      href={siteConfig.download.path}
    >
      {content}
    </a>
  );
}
