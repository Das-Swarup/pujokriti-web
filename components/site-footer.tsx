import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/pujokriti-logo.png";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Image alt="Pujokriti" className="footer-logo" height={52} src={logo} width={52} />
          <p>A field guide to finding your way through Pujo.</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">EXPLORE</p>
            <a href="/#download">
              Download app <ArrowUpRight aria-hidden="true" size={13} />
            </a>
            <a href="/#experience">
              The experience <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
          <div>
            <p className="footer-label">GET IN TOUCH</p>
            <a href="/privacy-policy">
              Privacy policy <ArrowUpRight aria-hidden="true" size={13} />
            </a>
            {siteConfig.supportEmail ? (
              <a href={`mailto:${siteConfig.supportEmail}`}>
                Contact / support <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            ) : (
              <span className="footer-unconfigured">Support contact to be configured</span>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Pujokriti</span>
        <span>Made for the days that become stories.</span>
      </div>
    </footer>
  );
}
