import Image from "next/image";
import { ArrowDown, ArrowDownToLine, MapPinned, MoonStar } from "lucide-react";
import { DownloadButton } from "@/components/download-button";
import { FAQ } from "@/components/faq";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { isApkAvailable } from "@/lib/apk";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/pujokriti-logo.png";

const kaliMap = "/images/IMG_4261-kali.png";
const kaliDetails = "/images/IMG_4262.png";
const kaliRoute = "/images/IMG_4266.png";
const kaliActiveRoute = "/images/IMG_4267.png";
const kaliPlanAlt = kaliMap;
const kaliRouteAlt = "/images/IMG_4265.png";
const kaliPlanStop = "/images/IMG_4263.png";
const kaliPlanFinish = "/images/IMG_2511.png";

type ScreenshotProps = {
  alt: string;
  className: string;
  priority?: boolean;
  sizes?: string;
  src: string;
};

function Screenshot({ alt, className, priority = false, sizes, src }: ScreenshotProps) {
  return (
    <Image
      alt={alt}
      className={className}
      height={2556}
      priority={priority}
      sizes={sizes ?? "(max-width: 700px) 80vw, 360px"}
      src={src}
      width={1179}
    />
  );
}

function MissingApkNotice() {
  return (
    <p className="apk-error" role="status">
      The Android download is temporarily unavailable. Add the release APK at{" "}
      <code>{siteConfig.download.expectedFile}</code>.
    </p>
  );
}

const highlights = [
  {
    label: "Discover pandals",
    detail: "See curated destinations on a city map.",
    image: kaliPlanAlt,
    alt: "Pujokriti map showing pandal destinations in Kali Pujo mode",
    className: "highlight-map",
  },
  {
    label: "Visitor reports",
    detail: "Use available reports as context, not a live sensor reading.",
    image: "/images/IMG_2511.png",
    alt: "Nearby pandals screen with a visitor reports label",
    className: "highlight-reports",
  },
  {
    label: "Plan your route",
    detail: "Shape a journey around your time and travel choices.",
    image: kaliPlanStop,
    alt: "Pujokriti route-planning screen with a selected pandal stop",
    className: "highlight-plan",
  },
  {
    label: "Follow the way",
    detail: "Keep your planned stops together on the map.",
    image: kaliRouteAlt,
    alt: "Pujokriti route screen with numbered stops across the map",
    className: "highlight-route",
  },
  {
    label: "Find essentials",
    detail: "Look for metro stations, public toilets and pharmacies nearby.",
    image: kaliPlanFinish,
    alt: "Pujokriti map and visitor discovery interface",
    className: "highlight-nearby",
  },
];

export default function Home() {
  const apkAvailable = isApkAvailable();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation available={apkAvailable} darkTheme logo={logo} />
      <main className="pujo-home" id="main">
        <section aria-labelledby="hero-heading" className="night-hero" id="kali-pujo">
          <div aria-hidden="true" className="night-hero-art">
            <Screenshot
              alt=""
              className="night-hero-map"
              priority
              sizes="(max-width: 700px) 100vw, 74vw"
              src={kaliMap}
            />
            <div className="night-hero-shade" />
          </div>

          <div className="night-hero-content">
            <p className="night-eyebrow"><span /> PUJOKRITI PRESENTS <i /> KALI PUJO 2026</p>
            <h1 id="hero-heading">The city after dark has a story of its own.</h1>
            <p className="night-hero-intro">
              Discover Kali Pujo pandals, understand the celebrations around you, and find your way
              through the night with Pujokriti.
            </p>
            <div className="night-hero-actions">
              <a className="night-button night-button-gold" href="#features">
                Explore Kali Pujo <ArrowDown aria-hidden="true" size={16} />
              </a>
              <DownloadButton available={apkAvailable} className="night-button night-button-outline">
                Download Pujokriti
              </DownloadButton>
            </div>
            {!apkAvailable && <MissingApkNotice />}
            <div className="night-hero-meta">
              <span><MoonStar aria-hidden="true" size={14} /> A new way into the night</span>
              <span>ANDROID · KALI PUJO 2026</span>
            </div>
          </div>

          <figure className="night-hero-detail">
            <Screenshot
              alt="Pujokriti Kali Pujo pandal detail screen with navigation choices"
              className="night-hero-detail-image"
              sizes="(max-width: 700px) 36vw, 220px"
              src={kaliDetails}
            />
            <figcaption><span>01</span> A closer look at the night</figcaption>
          </figure>

          <a aria-label="Scroll to discover the app highlights" className="hero-scroll" href="#features">
            SCROLL TO EXPLORE <ArrowDown aria-hidden="true" size={14} />
          </a>
        </section>

        <section aria-labelledby="highlights-heading" className="highlights-section" id="features">
          <div className="highlights-heading">
            <p className="section-eyebrow"><span>02</span> A NIGHT, MADE EASIER TO FIND YOUR WAY</p>
            <h2 id="highlights-heading">Small details. <em>A fuller night.</em></h2>
          </div>
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <article className={`highlight ${highlight.className}`} key={highlight.label}>
                <div className="highlight-visual">
                  <Screenshot alt={highlight.alt} className="highlight-image" src={highlight.image} />
                  <span className="highlight-number">0{index + 1}</span>
                </div>
                <div className="highlight-copy">
                  <h3>{highlight.label}</h3>
                  <p>{highlight.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="story-heading" className="durga-story" id="experience">
          <div className="story-glow" aria-hidden="true" />
          <div className="story-inner">
            <div className="story-topline">
              <p className="section-eyebrow"><span>03</span> THE STORY BEFORE THE NIGHT</p>
              <span>PUJOKRITI · SINCE THE BEGINNING</span>
            </div>
            <div className="story-image-wrap">
              <Screenshot
                alt="Pujokriti Durga Pujo map discovery screen with pandal markers"
                className="story-image"
                sizes="(max-width: 700px) 100vw, 86vw"
                src="/images/IMG_2509.png"
              />
              <span className="story-image-label">DURGA PUJO · THE ORIGINAL JOURNEY</span>
            </div>
            <div className="story-copy">
              <p className="story-overline">BEFORE THE NIGHTS OF KALI PUJO</p>
              <h2 id="story-heading">
                Before the nights of Kali Pujo, there were the days of Durga Pujo.
              </h2>
              <p>
                Pujokriti began with the joy of discovering Durga Pujo pandals. A new festival
                experience now brings that same spirit of discovery into the night.
              </p>
              <span className="story-rule" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section aria-labelledby="together-heading" className="together-section" id="two-festivals">
          <div className="together-heading">
            <p className="section-eyebrow"><span>04</span> ONE APPLICATION, TWO FESTIVAL EXPERIENCES</p>
            <h2 id="together-heading">Different atmospheres.<br /><em>One way to discover.</em></h2>
          </div>
          <div className="festival-pair">
            <article className="festival-panel festival-durga">
              <div className="festival-panel-top">
                <span>THE DAYS</span>
                <span>01 / DURGA PUJO</span>
              </div>
              <Screenshot
                alt="Pujokriti Durga Pujo map discovery interface"
                className="festival-screen festival-screen-durga"
                sizes="(max-width: 700px) 82vw, 420px"
                src="/images/IMG_2509.png"
              />
              <div className="festival-panel-copy">
                <h3>Durga Pujo</h3>
                <p>Find pandals and places to explore, with the warmth of the celebration in view.</p>
              </div>
              <span className="festival-panel-mark" aria-hidden="true">D</span>
            </article>
            <article className="festival-panel festival-kali">
              <div className="festival-panel-top">
                <span>THE NIGHTS</span>
                <span>02 / KALI PUJO</span>
              </div>
              <Screenshot
                alt="Pujokriti Kali Pujo map in the dark theme"
                className="festival-screen festival-screen-kali"
                sizes="(max-width: 700px) 82vw, 420px"
                src={kaliMap}
              />
              <div className="festival-panel-copy">
                <h3>Kali Pujo</h3>
                <p>Discover the city after dark and plan your way from one celebration to the next.</p>
              </div>
              <span className="festival-panel-mark" aria-hidden="true">K</span>
            </article>
          </div>
          <div className="together-signoff"><span /> ONE APP · PUJOKRITI <span /></div>
        </section>

        <section aria-labelledby="journey-heading" className="night-journey" id="journey">
          <div className="journey-heading">
            <p className="section-eyebrow"><span>05</span> THE EXPERIENCE, BROUGHT TOGETHER</p>
            <h2 id="journey-heading">A little more clarity<br /><em>at every turn.</em></h2>
            <p>From the first pin to the journey home, the pieces come together in one app.</p>
          </div>

          <div className="journey-steps" aria-label="The Pujokriti visitor journey">
            <article className="journey-step journey-discover">
              <div className="journey-step-copy">
                <p><span>01</span> DISCOVER</p>
                <h3>Start with the map.</h3>
                <span>Explore curated Kali Pujo pandals by location.</span>
              </div>
              <Screenshot
                alt="Kali Pujo pandal locations on the Pujokriti map"
                className="journey-screen journey-screen-map"
                src={kaliMap}
              />
            </article>
            <article className="journey-step journey-understand">
              <div className="journey-step-copy">
                <p><span>02</span> UNDERSTAND</p>
                <h3>Get to know each stop.</h3>
                <span>Open pandal details and see the available ways to continue.</span>
              </div>
              <Screenshot
                alt="Pujokriti Kali Pujo pandal details and navigation actions"
                className="journey-screen journey-screen-details"
                src={kaliDetails}
              />
            </article>
            <article className="journey-step journey-decide">
              <div className="journey-step-copy">
                <p><span>03</span> DECIDE</p>
                <h3>Choose with context.</h3>
                <span>Check available visitor reports; they are not a live crowd reading.</span>
              </div>
              <Screenshot
                alt="Pujokriti nearby pandals interface showing the visitor reports label"
                className="journey-screen journey-screen-reports"
                src="/images/IMG_2511.png"
              />
            </article>
            <article className="journey-step journey-navigate">
              <div className="journey-step-copy">
                <p><span>04</span> NAVIGATE</p>
                <h3>Connect the stops.</h3>
                <span>Plan a route and keep your chosen pandals in view.</span>
              </div>
              <Screenshot
                alt="Pujokriti route screen linking numbered pandal stops"
                className="journey-screen journey-screen-route"
                src={kaliRoute}
              />
            </article>
            <article className="journey-step journey-explore">
              <div className="journey-step-copy">
                <p><span>05</span> EXPLORE</p>
                <h3>Find useful places nearby.</h3>
                <span>Look for metro stations, public toilets and pharmacies along the way.</span>
              </div>
              <Screenshot
                alt="Pujokriti nearby places and pandal map layers"
                className="journey-screen journey-screen-nearby"
                src="/images/IMG_2511.png"
              />
            </article>
          </div>
          <p className="journey-footnote">
            Visitor reports are community context; nearby road-traffic information is not pandal
            crowd density.
          </p>
        </section>

        <FAQ />

        <section aria-labelledby="download-heading" className="final-download" id="download">
          <div aria-hidden="true" className="download-map">
            <Screenshot alt="" className="download-map-image" src={kaliActiveRoute} />
          </div>
          <div className="final-download-content">
            <p className="section-eyebrow"><span>06</span> THE NIGHT IS YOURS TO DISCOVER</p>
            <h2 id="download-heading">Your next celebration starts here.</h2>
            <p>Discover Durga Pujo and Kali Pujo with Pujokriti.</p>
            <DownloadButton
              available={apkAvailable}
              className="night-button night-button-gold final-download-button"
              showIcon
            >
              Download Pujokriti for Android
            </DownloadButton>
            {!apkAvailable && <MissingApkNotice />}
            <span className="download-version"><ArrowDownToLine aria-hidden="true" size={14} /> ANDROID APK · LATEST VERSION</span>
          </div>
          <div className="final-download-seal" aria-hidden="true">
            <MapPinned size={23} strokeWidth={1.4} />
            <span>ONE APP<br />TWO FESTIVALS</span>
          </div>
        </section>
      </main>
      <SiteFooter darkTheme />
    </>
  );
}
