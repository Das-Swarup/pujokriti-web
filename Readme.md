# Pujokriti

A mobile-first, editorial landing page for the Pujokriti Durga Puja companion app, built with Next.js, TypeScript, Tailwind CSS, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

The development and production build commands check that the signed APK exists and is within Vercel's current static-file upload limit. The expected location is `public/downloads/pujokriti.apk`. If the file is missing, copy the release APK there; the check exits with an explicit error instead of producing a site with a broken download.

## APK download

The APK is served directly as the static public asset `/downloads/pujokriti.apk`; it is not imported into JavaScript or sent to an external file host. All download actions use the single `download` entry in [`site-config.json`](./site-config.json), with `Pujokriti.apk` as the suggested filename. The response also sets the Android package MIME type and an attachment filename.

Run `npm run check:apk` to check the file before deployment. As of October 2026, Vercel documents a 100 MB Hobby / 1 GB Pro limit for static file uploads. The supplied APK is 38,670,277 bytes (36.9 MiB), below the Hobby limit. The check script enforces the 100 MB ceiling.

After deploying, verify that the URL returns the exact local APK, not an HTML fallback or an outdated file:

```bash
npm run verify:deployment -- https://your-deployment.example
```

The check downloads the deployed asset, compares its size and SHA-256 digest with the local APK, and checks the response MIME type and download filename. It requires an HTTPS deployment URL; HTTP is allowed only for local loopback testing.

## Supplied assets

All supplied images are kept in `assets/` and used directly by the landing page:

- `pujokriti-logo.png` — brand mark in the navigation and footer.
- `IMG_2507.PNG` — app splash screen in the Sharo Diya / community section; served from an unchanged copy in `public/images/`.
- `IMG_2509.PNG` — map and nearby-pandal discovery in the hero and product sections; served from an unchanged copy in `public/images/`.
- `IMG_2511.PNG` — route planning feature; served from an unchanged copy in `public/images/`.
- `IMG_2515.PNG`, `IMG_2516.PNG`, and `IMG_2517.PNG` — route, pandal detail, and route-options screens in the product gallery; served from unchanged copies in `public/images/`.
- `public/favicon.png` — copy of the supplied logo used as the browser icon.
- `IMG_2518.PNG` — app-icon artwork; omitted from the page because the supplied logo and splash screen already represent the brand.

No pandal photography, ratings, visitor counts, or app capabilities beyond the supplied screenshots and brief are invented.

## Privacy policy

The final-content policy is available at `/privacy-policy` and linked from the navigation and footer. Publisher details and dates are maintained in `site-config.json` under `privacy`. The policy uses the supplied publisher information and 15 October 2026 effective/last-updated dates; update those dates if the policy is first published later.

**The only remaining publication requirement is a monitored privacy contact email.** No verified address is configured in the repository or `.env.example`. Set `NEXT_PUBLIC_PRIVACY_CONTACT_EMAIL` in the deployment environment (or in a local `.env.local`) to an address the publisher monitors for access, correction, deletion, and children's privacy requests. Do not substitute `NEXT_PUBLIC_SUPPORT_EMAIL` unless the publisher confirms it is monitored for privacy requests. Until the privacy email is set, the page shows an explicit placeholder and its metadata remains `noindex`; setting the email enables indexing without changing the page layout.

The policy reflects the supplied reviewed-flow findings: public browsing and navigation do not require an account; location permission is optional; nearby-pandal coordinates are processed by Supabase functions without being persisted as a user location history; route progress is stored in AsyncStorage without an expiry/removal method; and nearby-place cache entries expire after six hours. It identifies OpenStreetMap, Leaflet/unpkg, Overpass, Valhalla, TomTom (through Supabase Edge Functions when configured), Supabase, and Vercel in their respective roles. It also avoids claiming analytics, crash reporting, or Razorpay checkout in the reviewed public flow.

The website repository does not contain the Android app source, Supabase function/schema source, or database policies; the supplied implementation findings were therefore used as the authority for the flow-level disclosures. Inspection of the signed APK confirms the merged manifest enables Android backup and that its backup XML rules include shared preferences and exclude the SecureStore shared-preference path. The repository does not establish how AsyncStorage route data maps to those rules, so the policy makes no promise that route progress is included in or excluded from backups. Provider log and backup retention periods are also not established by this project.

## Deployment

Import the repository into Vercel with the Next.js framework preset. No APK URL environment variable or external file-hosting service is required. Keep signing keys and private credentials out of the repository; only the signed release APK belongs at the documented public asset path.