import Image from "next/image";
import { ArrowRight, ArrowUp, MapPinned, Navigation2 } from "lucide-react";
import { DownloadButton } from "@/components/download-button";
import { siteConfig } from "@/lib/site-config";

const screens = {
  map: "/images/IMG_2509.png",
  nearby: "/images/IMG_2511.png",
  route: "/images/IMG_2515.png",
  activeRoute: "/images/IMG_2516.png",
  details: "/images/IMG_2517.png",
  routeOptions: "/images/IMG_2518.png",
} as const;

type AppScreenProps = {
  alt: string;
  caption: string;
  className?: string;
  sizes?: string;
  source: string;
};

function AppScreen({
  alt,
  caption,
  className = "",
  sizes = "(max-width: 700px) 82vw, 360px",
  source,
}: AppScreenProps) {
  return (
    <figure className={`kali-screen ${className}`.trim()}>
      <div className="kali-screen-frame">
        <Image
          alt={alt}
          className="kali-screen-image"
          height={2556}
          sizes={sizes}
          src={source}
          width={1179}
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function KaliPujoExperience({ available }: { available: boolean }) {
  return (
    <>
      <section aria-labelledby="transition-heading" className="festival-transition">
        <div className="transition-shell">
          <div className="transition-copy">
            <p className="kali-eyebrow"><span /> AS THE CITY LIGHTS UP</p>
            <h2 id="transition-heading">When the night comes alive, discovery takes a different form.</h2>
            <p>
              As the celebrations continue into Kali Pujo, discover another side of the city with
              Pujokriti — an experience designed to help you explore pandals, understand available
              crowd reports, and find your way through the night.
            </p>
          </div>
          <AppScreen
            alt="Pujokriti map showing a two-wheeler route in progress between pandals"
            caption="A route taking shape on the map"
            className="transition-screen"
            sizes="(max-width: 700px) 64vw, 280px"
            source={screens.activeRoute}
          />
        </div>
      </section>

      <section aria-labelledby="kali-heading" className="kali-section" id="kali-pujo">
        <div className="kali-intro">
          <p className="kali-eyebrow"><span /> PUJOKRITI PRESENTS</p>
          <p className="kali-chapter-title">THE KALI PUJO EXPERIENCE</p>
          <div className="kali-intro-grid">
            <h2 id="kali-heading">The city after dark.<br /><em>A new way to explore.</em></h2>
            <div className="kali-intro-copy">
              <p>
                Discover Kali Pujo pandals, understand what is happening around you, plan your
                route, and find the places that make your journey easier.
              </p>
              <div className="kali-actions">
                <a className="kali-button kali-button-primary" href="#kali-features">
                  Explore Pujokriti <ArrowRight aria-hidden="true" size={17} />
                </a>
                <DownloadButton
                  available={available}
                  className="kali-button kali-button-secondary"
                  showIcon
                >
                  Download the updated app
                </DownloadButton>
              </div>
              {!available && (
                <p className="kali-download-note" role="status">
                  Add the release APK at <code>{siteConfig.download.expectedFile}</code> to enable
                  downloads.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="kali-journey" id="kali-features">
          <article className="kali-feature kali-feature-map" id="kali-discover">
            <div className="kali-feature-copy">
              <p className="kali-feature-index">01 <span>DISCOVER</span></p>
              <h3>Find the pandals that light up the night.</h3>
              <p>
                Explore curated Kali Pujo pandals through a map and discover places worth visiting,
                one neighbourhood at a time.
              </p>
              <span className="kali-feature-tag"><MapPinned aria-hidden="true" size={16} /> Explore by location</span>
            </div>
            <AppScreen
              alt="Pujokriti map with pandal markers and nearby pandal discovery"
              caption="Pandal discovery, placed on the map"
              className="kali-map-screen"
              source={screens.map}
            />
          </article>

          <article className="kali-feature kali-feature-details" id="kali-details">
            <AppScreen
              alt="Pujokriti pandal detail card showing location, distance, travel modes, and route actions"
              caption="The details that help you choose what is next"
              className="kali-detail-screen"
              source={screens.details}
            />
            <div className="kali-feature-copy">
              <p className="kali-feature-index">02 <span>EXPLORE THE DETAILS</span></p>
              <h3>Every pandal has its own story.</h3>
              <p>
                Open individual pandal details and find the information that helps you decide where
                to go next.
              </p>
              <span className="kali-feature-tag"><MapPinned aria-hidden="true" size={16} /> Pandal details</span>
            </div>
          </article>

          <article className="kali-feature kali-crowd-feature" id="kali-crowd">
            <div className="kali-crowd-copy">
              <p className="kali-feature-index">03 <span>VISITOR REPORTS</span></p>
              <h3>Know the atmosphere before you get there.</h3>
              <p>
                Visitor reports can offer useful context while you explore. They reflect available
                reports, not a live sensor reading.
              </p>
              <p className="kali-notice">
                Crowd Smart route recommendations are not available right now.
              </p>
            </div>
            <AppScreen
              alt="Pujokriti route preferences screen with travel choices and a notice about Crowd Smart recommendations"
              caption="Route preferences and the current Crowd Smart notice"
              className="kali-crowd-screen"
              source={screens.routeOptions}
            />
          </article>

          <article className="kali-feature kali-feature-route" id="kali-routes">
            <div className="kali-feature-copy">
              <p className="kali-feature-index">04 <span>PLAN YOUR ROUTE</span></p>
              <h3>Make every stop part of the journey.</h3>
              <p>
                Plan visits between pandals and choose from the available route preferences to
                make navigating the city easier.
              </p>
              <span className="kali-feature-tag"><Navigation2 aria-hidden="true" size={16} /> Route planning</span>
            </div>
            <div className="kali-route-visual">
              <AppScreen
                alt="Pujokriti map showing a planned route between numbered pandal stops"
                caption="A route through the city"
                className="kali-route-map"
                sizes="(max-width: 700px) 82vw, 360px"
                source={screens.route}
              />
              <p className="kali-route-note">Available route options are shown in the app.</p>
            </div>
          </article>

          <article className="kali-feature kali-feature-nearby" id="kali-nearby">
            <div className="kali-nearby-intro">
              <p className="kali-feature-index">05 <span>NEARBY ESSENTIALS</span></p>
              <h3>Everything you need, closer than you think.</h3>
              <p>
                Find practical places around your journey, so you can explore with greater
                confidence and convenience.
              </p>
              <ul aria-label="Nearby place categories" className="kali-place-list">
                <li><span aria-hidden="true" /> Metro stations</li>
                <li><span aria-hidden="true" /> Public toilets</li>
                <li><span aria-hidden="true" /> Pharmacies</li>
              </ul>
            </div>
            <AppScreen
              alt="Pujokriti nearby pandal view with public-toilet and pharmacy filters and a visitor-report label"
              caption="Useful places alongside pandal discovery"
              className="kali-nearby-screen"
              source={screens.nearby}
            />
          </article>

          <div className="kali-endnote">
            <span>PUJOKRITI</span>
            <p>Two festivals. One city to find your way through.</p>
            <a href="#top">Back to the beginning             <ArrowUp aria-hidden="true" size={15} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
