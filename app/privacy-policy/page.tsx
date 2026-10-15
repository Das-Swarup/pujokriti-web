import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { isApkAvailable } from "@/lib/apk";
import { privacyPolicySections } from "@/lib/privacy-policy-content";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/pujokriti-logo.png";

const policyConfig = siteConfig.privacy;
const canonicalUrl = new URL("/privacy-policy", siteConfig.canonicalUrl).toString();

export const metadata: Metadata = {
  title: "Privacy Policy | Pujokriti",
  description:
    "Read how Pujokriti's reviewed pandal-discovery and navigation flow processes location, route, and service request information.",
  alternates: { canonical: canonicalUrl },
  robots: policyConfig.contactEmail
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

function displayDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return "";
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== value) return "";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default function PrivacyPolicyPage() {
  const apkAvailable = isApkAvailable();
  const effectiveDate = displayDate(policyConfig.effectiveDate);
  const lastUpdated = displayDate(policyConfig.lastUpdated);

  return (
    <>
      <a className="skip-link" href="#policy-content">
        Skip to privacy policy
      </a>
      <Navigation available={apkAvailable} logo={logo} />
      <main className="policy-page" id="top">
        <div className="policy-shell">
          <nav aria-label="Breadcrumb" className="policy-breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>

          <header className="policy-header">
            <p className="eyebrow"><span className="eyebrow-mark" /> PUJOKRITI · PRIVACY</p>
            <h1>Your privacy<br /><em>matters.</em></h1>
            <div className="policy-intro">
              <p>
                Pujokriti helps you discover Durga Puja pandals and explore the celebrations
                around you. This Privacy Policy explains how information may be handled when you
                use the Pujokriti application and its associated website.
              </p>
              <p>
                We believe privacy information should be clear, accessible, and honest. This
                policy describes the reviewed public browsing and navigation flow and the
                providers it uses.
              </p>
            </div>
            <div className="policy-dates">
              <div>
                <span>Effective date</span>
                <time>{effectiveDate || "[PUBLICATION DATE REQUIRED]"}</time>
              </div>
              <div>
                <span>Last updated</span>
                <time>{lastUpdated || "[LAST-UPDATED DATE REQUIRED]"}</time>
              </div>
            </div>
          </header>

          <details className="policy-toc-mobile">
            <summary>Contents <span>{privacyPolicySections.length} sections</span></summary>
            <nav aria-label="Policy sections">
              <ol>
                {privacyPolicySections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </details>

          <div className="policy-layout" id="policy-content">
            <aside aria-label="Policy sections" className="policy-toc-desktop">
              <p className="policy-side-label">IN THIS POLICY</p>
              <nav>
                <ol>
                  {privacyPolicySections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="policy-article">
              {privacyPolicySections.map((section, index) => (
                <section
                  aria-labelledby={`${section.id}-heading`}
                  className="policy-section"
                  id={section.id}
                  key={section.id}
                >
                  <p className="policy-section-index">
                    {String(index + 1).padStart(2, "0")} <span> / </span> PRIVACY
                  </p>
                  <h2 id={`${section.id}-heading`}>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                  {section.links && (
                    <ul className="policy-reference-links">
                      {section.links.map(({ href, label }) => (
                        <li key={href}>
                          <a href={href} rel="noreferrer" target="_blank">{label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.id === "contact-us" && (
                    <dl className="policy-contact">
                      <div>
                        <dt>Publisher</dt>
                        <dd>
                          {policyConfig.publisherName}, trading as {policyConfig.tradeName}
                        </dd>
                      </div>
                      <div>
                        <dt>Business address</dt>
                        <dd>{policyConfig.publisherAddress || "[BUSINESS ADDRESS, IF REQUIRED]"}</dd>
                      </div>
                      <div>
                        <dt>Privacy contact</dt>
                        <dd>
                          {policyConfig.contactEmail ? (
                            <a href={`mailto:${policyConfig.contactEmail}`}>
                              {policyConfig.contactEmail}
                            </a>
                          ) : (
                            "[PRIVACY CONTACT EMAIL — REQUIRED BEFORE PUBLICATION]"
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt>Website</dt>
                        <dd>
                          <a href={siteConfig.canonicalUrl}>{siteConfig.canonicalUrl}</a>
                        </dd>
                      </div>
                    </dl>
                  )}
                </section>
              ))}
              <p className="policy-package">
                Android application package: <code>com.siligurisutra.pujokriti</code>
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
