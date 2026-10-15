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

## Footer links

The site privacy policy is at `/privacy-policy` and is linked from the navigation and footer. Its publication metadata is centralized in `site-config.json` under `privacy`: supply the publisher's legal name, any required address, a monitored privacy email, and verified effective/last-updated dates. The page is intentionally marked as a draft (`privacy.draft: true`) and sends `noindex` metadata until the policy owner confirms the outstanding app/backend practices and fills those details. Only mark it final after the review checklist has been resolved. The Android source, Supabase schema, database policies, and retention configuration were not included in this repository; see the on-page review checklist before publication.

The optional support address can be set as `NEXT_PUBLIC_SUPPORT_EMAIL` (see [`.env.example`](./.env.example)). Do not treat it as the privacy contact unless the publisher verifies that it is monitored for privacy requests.

For the supplied APK, Android SDK inspection confirmed declarations for coarse/fine location, internet, biometrics, NFC, and basic phone state; it did not declare background location. Its compiled JavaScript bundle contains Supabase, sign-in, OpenStreetMap/Nominatim, report/group, and Razorpay references. These package-level indicators do not prove which services are active or what data is sent. The policy deliberately identifies them as needing owner/source/backend confirmation rather than making unsupported claims.

## Deployment

Import the repository into Vercel with the Next.js framework preset. No APK URL environment variable or external file-hosting service is required. Keep signing keys and private credentials out of the repository; only the signed release APK belongs at the documented public asset path.