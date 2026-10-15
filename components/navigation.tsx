"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type NavigationProps = {
  available: boolean;
  logo: StaticImageData;
};

const links = [
  { href: "/#experience", label: "The experience" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/privacy-policy", label: "Privacy" },
];

export function Navigation({ available, logo }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a aria-label="Pujokriti home" className="brand" href="/" onClick={closeMenu}>
          <Image alt="" className="brand-mark" height={48} priority src={logo} width={48} />
          <span className="brand-word">Pujokriti</span>
        </a>

        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-download" href={available ? siteConfig.download.path : undefined}
            download={available ? siteConfig.download.filename : undefined}
            aria-disabled={!available}
            title={!available ? `Add the APK at ${siteConfig.download.expectedFile}.` : undefined}
          >
            <ArrowDownToLine aria-hidden="true" size={15} />
            Download app
          </a>
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>

        {menuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-nav">
            {links.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a
              className="mobile-nav-download"
              href={available ? siteConfig.download.path : undefined}
              download={available ? siteConfig.download.filename : undefined}
              aria-disabled={!available}
              onClick={closeMenu}
            >
              <ArrowDownToLine aria-hidden="true" size={17} />
              {available ? "Download app" : "APK unavailable"}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
