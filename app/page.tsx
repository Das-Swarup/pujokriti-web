import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPinned, Navigation2, Sparkles } from "lucide-react";
import { DownloadButton } from "@/components/download-button";
import { FAQ } from "@/components/faq";
import { Navigation } from "@/components/navigation";
import { isApkAvailable } from "@/lib/apk";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/pujokriti-logo.png";

const images = {
  splash: "/images/IMG_2507.png",
  map: "/images/IMG_2509.png",
  route: "/images/IMG_2511.png",
  routeMap: "/images/IMG_2515.png",
  pandal: "/images/IMG_2516.png",
  routeOptions: "/images/IMG_2517.png",
};

function MissingApkNotice() {
  return (
    <p className="apk-error" role="status">
      The Android download is temporarily unavailable. Add the release APK at{" "}
      <code>{siteConfig.download.expectedFile}</code>.
    </p>
  );
}

export default function Home() {
  const apkAvailable = isApkAvailable();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation available={apkAvailable} logo={logo} />
      <main id="main">
        <section aria-labelledby="hero-heading" className="hero section" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> A FIELD GUIDE TO DURGA PUJA</p>
            <h1 id="hero-heading">
              Find the pandals.
              <br />
              <em>Follow the feeling.</em>
            </h1>
            <p className="hero-intro">
              Discover remarkable Durga Puja pandals, explore locations on an interactive map, and
              plan your way through the celebrations with Pujokriti.
            </p>
            <div className="hero-actions">
              <DownloadButton available={apkAvailable} className="button button-primary" showIcon>
                Get Pujokriti for Android
              </DownloadButton>
              <a className="text-link" href="#experience">
                Explore the experience <ArrowDown aria-hidden="true" size={16} />
              </a>
            </div>
            {!apkAvailable && <MissingApkNotice />}
            <p className="availability">ANDROID APP <span /> DIRECT APK DOWNLOAD</p>
          </div>

          <div className="hero-art">
            <div className="hero-art-note">
              <span>01 / THE CITY</span>
            </div>
            <div className="hero-screen">
              <Image
                alt="Pujokriti map showing nearby pandals and the route-planning action"
                className="screen-image"
                height={2556}
                priority
                sizes="(max-width: 700px) 72vw, (max-width: 1100px) 38vw, 330px"
                src={images.map}
                width={1179}
              />
            </div>
            <div className="hero-sticker" aria-hidden="true">
              <MapPinned size={19} strokeWidth={1.6} />
              <span>Find your<br />next stop</span>
            </div>
            <p className="image-caption"><span /> Every pandal has a story.</p>
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="intro-section" id="experience">
          <div className="intro-topline">
            <p className="eyebrow">THE CITY, REIMAGINED</p>
            <span>01 — 04</span>
          </div>
          <div className="intro-grid">
            <h2 id="experience-heading">Less searching.<br /><em>More discovering.</em></h2>
            <div className="intro-copy">
              <p>
                From celebrated pandals to places waiting to be discovered, Pujokriti helps you
                experience Pujo with a little more intention.
              </p>
              <a className="text-link" href="#features">
                See what you can do <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
          <div className="map-feature">
            <Image
              alt="Pujokriti's map interface with pandal markers and nearby discovery"
              className="wide-screenshot"
              height={2556}
              sizes="(max-width: 700px) 100vw, 78vw"
              src={images.map}
              width={1179}
            />
            <div className="map-feature-caption">
              <span>THE CITY, AT YOUR FINGERTIPS</span>
              <span>Explore pandals by location</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="features-heading" className="section features-section" id="features">
          <div className="section-heading">
            <p className="eyebrow">MADE FOR YOUR PUJO</p>
            <h2 id="features-heading">Everything worth finding,<br /><em>in one place.</em></h2>
          </div>

          <article className="feature-row feature-discover">
            <div className="feature-copy">
              <p className="feature-index">01 <span>DISCOVER</span></p>
              <h3>Find the places<br />worth finding.</h3>
              <p>
                Explore Durga Puja pandals on a location-based map and see what is around you.
              </p>
              <span className="feature-tag"><MapPinned aria-hidden="true" size={15} /> Pandal discovery</span>
            </div>
            <div className="feature-image feature-image-map">
              <Image
                alt="Pujokriti map with several pandal markers across the city"
                className="feature-screenshot"
                height={2556}
                sizes="(max-width: 700px) 90vw, 52vw"
                src={images.map}
                width={1179}
              />
            </div>
          </article>

          <article className="feature-row feature-route">
            <div className="feature-image feature-image-route">
              <Image
                alt="Pujokriti route planning screen with a route drawn between pandals"
                className="feature-screenshot"
                height={2556}
                sizes="(max-width: 700px) 90vw, 46vw"
                src={images.route}
                width={1179}
              />
            </div>
            <div className="feature-copy">
              <p className="feature-index">02 <span>MAKE A PLAN</span></p>
              <h3>A route that<br />feels like yours.</h3>
              <p>
                Choose how you want to travel and plan a visit around the time you have. Routes
                help you organise your stops.
              </p>
              <span className="feature-tag"><Navigation2 aria-hidden="true" size={15} /> Route planning</span>
            </div>
          </article>

          <article className="feature-row feature-community">
            <div className="feature-copy">
              <p className="feature-index">03 <span>SHARO DIYA</span></p>
              <h3>A little light,<br /><em>shared.</em></h3>
              <p>
                Sharo Diya is part of Pujokriti’s cultural and community offering—a way to keep
                the spirit of Pujo close.
              </p>
              <span className="feature-tag"><Sparkles aria-hidden="true" size={15} /> The community side of Pujo</span>
            </div>
            <div className="community-art">
              <Image
                alt="Pujokriti app splash screen"
                className="community-splash"
                height={2556}
                src={images.splash}
                width={1179}
              />
              <div className="community-note">
                <span>THE CELEBRATION IS</span>
                <strong>better<br />together.</strong>
              </div>
            </div>
          </article>
        </section>

        <section aria-labelledby="gallery-heading" className="gallery-section">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">A CLOSER LOOK AT PUJO</p>
              <h2 id="gallery-heading">A closer look<br /><em>at the details.</em></h2>
            </div>
            <p>Real moments from the Pujokriti app. A map, a plan, and the places in between.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-item gallery-one">
              <Image
                alt="Pujokriti map focused on pandal discovery"
                className="gallery-image"
                height={2556}
                sizes="(max-width: 700px) 78vw, 30vw"
                src={images.pandal}
                width={1179}
              />
              <figcaption><span>01</span> Find a pandal nearby</figcaption>
            </figure>
            <figure className="gallery-item gallery-two">
              <Image
                alt="Pujokriti route screen with numbered pandal stops"
                className="gallery-image"
                height={2556}
                sizes="(max-width: 700px) 78vw, 30vw"
                src={images.routeMap}
                width={1179}
              />
              <figcaption><span>02</span> See the way ahead</figcaption>
            </figure>
            <figure className="gallery-item gallery-three">
              <Image
                alt="Pujokriti route settings for choosing a visit plan"
                className="gallery-image"
                height={2556}
                sizes="(max-width: 700px) 78vw, 30vw"
                src={images.routeOptions}
                width={1179}
              />
              <figcaption><span>03</span> Make the day your own</figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="download-heading" className="download-section" id="download">
          <div className="download-decoration" aria-hidden="true">পুজো</div>
          <div className="download-content">
            <p className="eyebrow">TAKE THE CITY WITH YOU</p>
            <h2 id="download-heading">Your next pandal is<br /><em>closer than you think.</em></h2>
            <p className="download-copy">
              Take Pujokriti with you and make every stop part of the celebration.
            </p>
            <DownloadButton available={apkAvailable} className="button button-light" showIcon>
              Download for Android
            </DownloadButton>
            {!apkAvailable && <MissingApkNotice />}
            <p className="install-note">
              <span>ANDROID APP · APK DOWNLOAD</span>
              Android may ask you to approve installation from your browser or file source.
              Choose to allow it only if you trust this APK.
            </p>
          </div>
          <div aria-hidden="true" className="download-orbit"><ArrowDown size={22} /></div>
        </section>

        <FAQ />
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Image alt="Pujokriti" className="footer-logo" height={52} src={logo} width={52} />
            <p>A field guide to finding your way through Pujo.</p>
          </div>
          <div className="footer-links">
            <div>
              <p className="footer-label">EXPLORE</p>
              <a href="#download">Download app <ArrowUpRight aria-hidden="true" size={13} /></a>
              <a href="#experience">The experience <ArrowUpRight aria-hidden="true" size={13} /></a>
            </div>
            <div>
              <p className="footer-label">GET IN TOUCH</p>
              {siteConfig.privacyPolicyUrl && (
                <a href={siteConfig.privacyPolicyUrl} rel="noreferrer" target="_blank">
                  Privacy policy <ArrowUpRight aria-hidden="true" size={13} />
                </a>
              )}
              {siteConfig.supportEmail && (
                <a href={`mailto:${siteConfig.supportEmail}`}>
                  Contact / support <ArrowUpRight aria-hidden="true" size={13} />
                </a>
              )}
              {!siteConfig.privacyPolicyUrl && !siteConfig.supportEmail && (
                <span className="footer-unconfigured">Links to be added before launch</span>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pujokriti</span>
          <span>Made for the days that become stories.</span>
        </div>
      </footer>
    </>
  );
}
