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
      "Pujokriti is a Durga Puja discovery application intended to help people explore pandals, view locations on a map, and access related cultural features. The Android package supplied for this review identifies the application as com.siligurisutra.pujokriti.",
      "The publisher's legal name and any required business address have not been provided. The responsible publisher must be identified before this policy is published as final.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "The information involved depends on the app feature used and the permissions granted. The available website repository does not contain the Android app source, Supabase schema, row-level security rules, or server configuration. The APK can show declared permissions and bundled references, but cannot establish every active data flow.",
      "The supplied APK declares internet access and foreground coarse and fine location permissions. A permission declaration means the app may request that access; it does not by itself show when the prompt appears or whether location is sent to a server.",
      "The APK also declares biometric, NFC, and basic phone-state permissions. The manifest alone does not establish whether the app reads related information or which features use these permissions; the publisher must verify their purpose and data flows.",
      "The app bundle contains Supabase and sign-in references, along with terms related to reports and groups. The available materials do not establish which account fields, user-submitted details, or group data are actually collected or stored. These details need publisher verification before publication.",
      "No analytics or crash-reporting practice could be confirmed from the available website source and packaged APK inspection. The website's declared dependencies do not include a dedicated analytics SDK. This is not confirmation that no service-side logging or app telemetry occurs.",
    ],
  },
  {
    id: "location-information",
    title: "Location Information",
    paragraphs: [
      "The supplied APK declares Android's ACCESS_COARSE_LOCATION and ACCESS_FINE_LOCATION permissions. It does not declare ACCESS_BACKGROUND_LOCATION. This establishes the permissions present in this APK, not how the app requests or uses them in each screen.",
      "The app is presented as a pandal discovery and map experience, so location may be relevant to nearby discovery. The available materials do not verify whether coordinates remain on the device, are transmitted to a service, are retained, or are shared with other users. Do not rely on this draft for those details until the publisher has confirmed the app's live behavior and backend.",
      "You can review or revoke an app's location permission in Android Settings. If permission is denied, location-dependent features may be limited; the exact behavior in this release needs confirmation.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    paragraphs: [
      "Pujokriti is designed for pandal discovery, maps, and route planning. Information needed to operate a feature should be used for that feature and related service operation. The available materials do not establish the exact information processed for each feature or whether information is used for diagnostics, abuse prevention, or support.",
      "No advertising, profiling, or marketing use is documented in the website source provided for this review. The Android app's complete data practices still require confirmation from its source and backend configuration.",
    ],
  },
  {
    id: "maps-and-location-services",
    title: "Maps and Location Services",
    paragraphs: [
      "The packaged app bundle contains references to OpenStreetMap map tiles and the Nominatim geocoding service. This alone does not establish which requests are active in the released app or whether other map, routing, or geocoding providers are used.",
      "If the app contacts an external map service, that service may receive technical information such as an IP address and the geographic area requested. Each provider's own terms and privacy practices also apply. Confirm the active tile, geocoding, and routing providers before publication.",
    ],
    links: [
      { href: "https://www.openstreetmap.org/", label: "OpenStreetMap" },
      {
        href: "https://osmfoundation.org/wiki/Privacy_Policy",
        label: "OpenStreetMap Foundation privacy policy",
      },
      {
        href: "https://operations.osmfoundation.org/policies/nominatim/",
        label: "Nominatim usage policy",
      },
      {
        href: "https://operations.osmfoundation.org/policies/tiles/",
        label: "OpenStreetMap tile usage policy",
      },
    ],
  },
  {
    id: "authentication-and-account-information",
    title: "Authentication and Account Information",
    paragraphs: [
      "The APK bundle includes Supabase and sign-in references. The Android app source, backend schema, and authentication configuration were not available for review, so the sign-in methods, account fields, features that require an account, and associated database records could not be verified.",
      "If the app sends account information to Supabase, Supabase processes that information as a service provider under its applicable terms. The publisher must confirm the actual data fields and account flows before treating this description as complete.",
    ],
    links: [{ href: "https://supabase.com/privacy", label: "Supabase privacy policy" }],
  },
  {
    id: "sharo-diya-and-public-features",
    title: "Sharo Diya and Public Features",
    paragraphs: [
      "The supplied product materials show a public pandal map and a Pujokriti app splash screen. They do not establish which public features can be used without an account or the detailed operation of the Sharo Diya experience.",
      "The APK includes Razorpay libraries, but their presence alone does not show that payments or transactions are enabled. No payment capability is described here as an active feature until the publisher verifies it.",
    ],
  },
  {
    id: "data-storage-and-third-party-services",
    title: "Data Storage and Third-Party Services",
    paragraphs: [
      "The marketing website is hosted on Vercel. Its hosting infrastructure processes requests needed to deliver the site; the materials reviewed do not establish the exact request-log fields or retention period.",
      "The APK contains references to Supabase, OpenStreetMap-related services, and Razorpay libraries. These are package-level indicators, not proof that each provider receives personal information in the current release. The publisher must confirm the active integrations and data sent to each provider.",
      "The country or region where app data is stored, the applicable database access policies, and any backup or log retention periods could not be verified from the materials supplied.",
    ],
    links: [
      { href: "https://vercel.com/legal/privacy-policy", label: "Vercel privacy policy" },
      { href: "https://supabase.com/privacy", label: "Supabase privacy policy" },
      { href: "https://razorpay.com/privacy/", label: "Razorpay privacy policy" },
    ],
  },
  {
    id: "data-retention-and-deletion",
    title: "Data Retention and Deletion",
    paragraphs: [
      "The account, report, group, server-log, and backup retention rules have not been supplied for review. No specific retention period or deletion outcome is promised in this draft.",
      "Before publication, the publisher must confirm what records are retained, how retention is decided, whether account deletion is available, what related records it removes, and whether logs or backups persist separately. A contact-based deletion request process also needs to be established and linked to the verified privacy contact.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We take reasonable technical and organizational measures to help protect information processed through Pujokriti. However, no method of transmitting or storing information can be guaranteed to be completely secure.",
      "No additional security controls or independent audits were verified in the materials available for this review.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    paragraphs: [
      "Pujokriti is presented as a cultural discovery application. The materials available do not establish a specific minimum age or a child-directed audience.",
      "A parent or guardian who believes a child has provided personal information inappropriately should contact the publisher using the privacy contact below. The publisher must configure that contact and confirm the process for handling such requests before publication.",
    ],
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    paragraphs: [
      "Depending on applicable law and your circumstances, you may be able to ask about, access, correct, or request deletion of personal information, or raise a privacy concern. You may also revoke Android permissions through device settings; doing so may limit related features.",
      "To make a privacy request, contact the publisher at the privacy address listed below. That address and the process for handling requests must be confirmed before this policy is published. No response deadline or specific legal outcome is promised here.",
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    paragraphs: [
      "This policy may be updated if the application, its data practices, or applicable requirements change. The publisher should update the date shown above and communicate material changes where reasonably appropriate.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    paragraphs: [
      "For questions or privacy requests, contact the publisher using the details below. The missing publisher and contact details are intentionally shown as unresolved fields until supplied by the application owner.",
    ],
  },
];

export const privacyPolicyReviewItems = [
  "Publisher's legal name and any required business address.",
  "A monitored privacy email and a confirmed process for access, deletion, and children's privacy requests.",
  "Effective date and last-updated date for the published policy.",
  "Which app features require sign-in, exact account fields, and the Supabase records and access policies involved.",
  "Whether precise location is transmitted or stored, and the behavior when location permission is denied.",
  "Whether groups or location sharing are present in the released app; if so, who can see shared data, how sharing stops, and how expiry and residual logs/backups work.",
  "Which map tiles, geocoding, and routing providers are active, and whether Razorpay, analytics, or crash-reporting services receive app data.",
  "Retention and deletion behavior for accounts, reports, groups, operational logs, and backups.",
  "Why READ_BASIC_PHONE_STATE and other non-obvious Android permissions are included and whether related information is read or transmitted.",
];
