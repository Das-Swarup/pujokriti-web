export type PolicySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { href: string; label: string }[];
};

export const privacyPolicySections: PolicySection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    paragraphs: [
      "Pujokriti is a Durga Puja discovery application published by Arijit Roy, trading as Siliguri Sutra. The publisher's address is Saradapally, Tilak Sadhu More, Siliguri, West Bengal – 734006.",
      "The Android application package identifier is com.siligurisutra.pujokriti.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "The public pandal-browsing and navigation flow does not require registration or a user profile. This describes that reviewed flow only; it is not a statement that every feature of the application is account-free.",
      "When you choose nearby results or route planning, the app sends location coordinates to Supabase for nearby published-pandal queries and to the relevant place or routing service for the request. When you browse without device location permission, you can still explore areas and select map locations manually.",
      "The app stores active route progress, including the route's starting location, on your device using AsyncStorage. The reviewed route store has no expiry or removal method. Nearby-place cache entries expire after six hours.",
      "The reviewed dependencies contain no app analytics or crash-reporting SDK. The Razorpay library is bundled, but the reviewed public navigation flow does not start a Razorpay checkout. A permission included by that library is described below.",
    ],
  },
  {
    id: "location-information",
    title: "Location Information",
    paragraphs: [
      "Location permission is optional. The signed Android package declares coarse and fine location permissions for location-based features. If you deny permission, you can continue to browse areas and choose locations manually on the map; nearby results and route planning that rely on device location may be limited.",
      "When you use nearby published-pandal results, coordinates are sent to Supabase so the reviewed database functions can calculate or filter results. Those functions do not persist the coordinates as a user location history. This is limited to the reviewed functions: coordinates are transmitted for these requests, and this does not establish that no provider logs, backups, or other records exist.",
      "For place searches and routes, coordinates relevant to your request may also be sent to the configured place or routing provider. You can change or revoke the app's location permission in Android Settings.",
      "The final merged manifest does not declare background location access. The reviewed behavior described here concerns location-based requests initiated while using the app; it is not continuous background tracking.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    paragraphs: [
      "Location and manually selected map points are used to show nearby published pandals, retrieve relevant place information, and calculate a requested route. Route progress is kept on your device so the active route can be represented in the app.",
      "The reviewed public navigation flow does not use account or profile information and does not initiate a payment checkout. These findings do not describe unrelated or future app features.",
    ],
  },
  {
    id: "maps-and-location-services",
    title: "Maps and Location Services",
    paragraphs: [
      "The reviewed implementation uses OpenStreetMap data and its configured map-tile ecosystem, Leaflet for map rendering (loaded from the unpkg CDN), Overpass for nearby-place queries, and Valhalla's OpenStreetMap routing service for walking routes. Vehicle routing and traffic requests use TomTom through Supabase Edge Functions when configured. No user-facing geocoding flow was found in the reviewed implementation.",
      "OpenStreetMap is a map-data project; it does not operate Leaflet, unpkg, Overpass, Valhalla, TomTom, or Supabase. Requests to tile, place, routing, traffic, or CDN providers may expose technical information such as your IP address and the geographic area, route endpoints, or map tiles requested, as applicable to the request.",
      "Each external provider handles requests under its own terms and privacy practices. Their operational and security log retention periods are not set by Pujokriti and are not specified here.",
    ],
    links: [
      { href: "https://www.openstreetmap.org/", label: "OpenStreetMap" },
      {
        href: "https://osmfoundation.org/wiki/Privacy_Policy",
        label: "OpenStreetMap Foundation privacy policy",
      },
      {
        href: "https://operations.osmfoundation.org/policies/tiles/",
        label: "OpenStreetMap tile usage policy",
      },
      { href: "https://wiki.openstreetmap.org/wiki/Overpass_API", label: "Overpass API" },
      { href: "https://valhalla.github.io/valhalla/", label: "Valhalla routing engine" },
      { href: "https://leafletjs.com/", label: "Leaflet" },
      { href: "https://unpkg.com/", label: "unpkg CDN" },
      { href: "https://docs.npmjs.com/policies/privacy/", label: "npm privacy policy" },
      { href: "https://www.tomtom.com/privacy/", label: "TomTom privacy statement" },
      { href: "https://supabase.com/privacy", label: "Supabase privacy policy" },
    ],
  },
  {
    id: "authentication-and-account-information",
    title: "Authentication and Account Information",
    paragraphs: [
      "The reviewed public pandal-browsing and navigation flow does not require sign-in or ask for profile information. This does not establish that no other app feature uses an account. This policy does not make an application-wide claim about account features outside the reviewed flow.",
    ],
  },
  {
    id: "public-discovery-and-app-features",
    title: "Public Discovery and App Features",
    paragraphs: [
      "You can browse pandals, explore areas, manually select a location on the map, and use the reviewed navigation flow without signing in. Nearby results and route planning can use device location if you grant permission.",
      "The reviewed flow does not initiate Razorpay checkout. The Razorpay library is present in the signed package, but its inclusion alone does not mean a payment is made or payment information is collected in this flow. This policy does not make a claim about payment functionality outside the reviewed flow.",
    ],
  },
  {
    id: "data-storage-and-third-party-services",
    title: "Data Storage and Third-Party Services",
    paragraphs: [
      "Active route progress, including its starting location, is stored on your device using AsyncStorage. The route store has no expiry or removal method. Nearby-place cache entries have a six-hour expiry.",
      "Supabase processes coordinates for the reviewed nearby-pandal queries and provides Edge Functions that call TomTom for vehicle routing and traffic when configured. The reviewed database functions use coordinates to calculate or filter results and do not persist them as a user location history.",
      "The marketing website is hosted on Vercel. The app and website also make requests to the mapping, place, routing, traffic, and CDN services described above. Supabase, these service providers, and the CDN may keep operational or security logs under their own policies; the app repository does not establish their retention periods.",
      "The signed APK has Android backup enabled. Its compiled backup rules include shared-preference data and exclude the SecureStore shared-preference path. The available project does not establish how the AsyncStorage route store maps to those backup rules, so this policy does not claim route progress is included in or excluded from Android backups.",
      "The final merged manifest includes READ_BASIC_PHONE_STATE because of the bundled Razorpay library. No first-party phone-state read was found in the reviewed application code. The presence of this permission is not evidence that Pujokriti reads or transmits phone-state information.",
    ],
    links: [
      { href: "https://vercel.com/legal/privacy-notice", label: "Vercel privacy policy" },
      { href: "https://supabase.com/privacy", label: "Supabase privacy policy" },
      { href: "https://www.tomtom.com/privacy/", label: "TomTom privacy statement" },
      { href: "https://docs.npmjs.com/policies/privacy/", label: "npm privacy policy" },
    ],
  },
  {
    id: "data-retention-and-deletion",
    title: "Data Retention and Deletion",
    paragraphs: [
      "The route store has no expiry or removal method, so active route progress is not automatically removed when you close the app or finish a route. Nearby-place cache entries expire after six hours.",
      "The reviewed Supabase database functions do not persist query coordinates as a user location history. This finding does not cover operational logs, backups, other records, or the retention practices of external providers. Their retention periods have not been established here, and Pujokriti cannot promise immediate or complete deletion from their logs or backups.",
      "To ask about, correct, or request deletion of applicable information, contact the publisher using the privacy email in Contact Us. The publisher will assess the request and explain any applicable limits. No retention period, response deadline, or deletion outcome is promised where it has not been verified.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We take reasonable technical and organizational measures to help protect information processed through Pujokriti. However, no method of transmitting or storing information can be guaranteed to be completely secure.",
      "Information sent to external providers is also subject to their security practices. This policy does not promise end-to-end encryption or that information can never be exposed.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    paragraphs: [
      "Pujokriti is a cultural discovery application. This policy does not set an age threshold or make a claim that the app is designed exclusively for adults.",
      "A parent or guardian who has a privacy concern or believes a child has provided personal information can contact the publisher at the privacy email in Contact Us. The publisher will review the concern and explain any appropriate next steps; no specific removal deadline is promised.",
    ],
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    paragraphs: [
      "Depending on applicable law and your circumstances, you may be able to request access to, correction of, or deletion of personal information, or raise a privacy concern.",
      "To make a request, email the privacy contact in Contact Us. Describe the request and the Pujokriti feature involved; avoid including sensitive information that is not needed to identify the issue. The publisher may need sufficient information to understand and assess the request. No response deadline or particular legal outcome is promised here.",
      "You can also change or revoke Android location permission in your device settings. Location-based features may be limited when permission is off.",
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    paragraphs: [
      "This policy may be updated when the application, its information practices, or applicable requirements change. The last-updated date will be revised when the policy changes. Material changes may be communicated through the website or app where reasonably appropriate.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    paragraphs: [
      "For privacy questions, requests to access, correct, or delete applicable information, or concerns about a child's privacy, contact the publisher using the email address below. A monitored privacy email must be configured before this policy is ready for publication.",
    ],
  },
];
