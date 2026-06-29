export const company = {
  legalName: "YASA Project Management Services LLC",
  name: "YASA Corporate Service Provider",
  shortName: "YASA CSP",
  logo: "/yasa-logo.png",
  phone: "+971 50 7778009",
  phoneHref: "tel:+971507778009",
  email: "contact@yasacsp.com",
  emailHref: "mailto:contact@yasacsp.com",
  location: "Office 901-B68, Iris Bay Tower, Business Bay, Dubai, UAE",
  hours: "Mon - Sat, 9:00 AM - 6:00 PM",
};

export const discoveredBrandColors = {
  logoTeal: "#1A6B7C",
  legacyAmber: "#1A6B7C",
  legacyInk: "#0D1E28",
};

export const heroVideos = [
  "/images/5382987_Coll_wavebreak_Business_3840x2160.mp4",
  "/images/6025588_Person_People_3840x2160.mp4",
  "/images/6025605_Person_People_3840x2160.mp4",
];

export const services = [
  {
    title: "Mainland Company Formation",
    href: "/mainland-business-setup-dubai",
    description:
      "DED-licensed mainland setup for businesses that need full access to the UAE local market, including ownership and activity guidance.",
    visual: "building",
  },
  {
    title: "Free Zone Setup",
    href: "/freezone-business-setup-dubai",
    description:
      "Company formation across IFZA, RAKEZ, Meydan, SAIF Zone, DMCC, DIFC, and other UAE free zones with fast incorporation support.",
    visual: "globe",
  },
  {
    title: "Offshore Company",
    href: "/offshore-company-formation-dubai",
    description:
      "Offshore structures through jurisdictions such as RAK ICC and JAFZA for international trading, asset protection, and confidential ownership.",
    visual: "offshore",
  },
  {
    title: "Business Licensing",
    href: "/services/license",
    description:
      "Commercial, professional, industrial, and e-commerce licence support, including renewals, modifications, cancellations, and freezing.",
    visual: "license",
  },
  {
    title: "Visa Services",
    href: "/services/visa",
    description:
      "Residence, dependent, remote work, golden, and freelance visa support with complete immigration management.",
    visual: "visa",
  },
  {
    title: "Emirates ID & Medical",
    href: "/vip-medical-and-eid",
    description:
      "Medical test, Emirates ID, and PRO coordination to move residency documentation through the required government checkpoints.",
    visual: "id",
  },
  {
    title: "Bank Account Opening",
    href: "/bank-account-opening",
    description:
      "Personal and corporate bank account assistance across UAE banks, matching requirements to the applicant profile and documents.",
    visual: "bank",
  },
  {
    title: "Accounting & VAT",
    href: "/vat-registration-bookkeeping",
    description:
      "VAT registration, corporate tax filing, bookkeeping, and compliance reporting for businesses operating in the UAE.",
    visual: "chart",
  },
  {
    title: "PRO Services",
    href: "/services/other",
    description:
      "Document attestation, Ministry approvals, government liaison, and administrative processing handled by an experienced PRO team.",
    visual: "stamp",
  },
  {
    title: "Other Services",
    href: "/services",
    description:
      "Trademark registration, financial consulting, business advisory, and post-setup support for companies after launch.",
    visual: "briefcase",
  },
];

export const navigation = [
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Partnerships", href: "#partnership" },
  { label: "Global Presence", href: "#global-presence" },
  { label: "Contact", href: "#footer" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/yasa_corporate_service_provide?igsh=ZGphcGZlczl4bWdq",
  },
];

export const partnerLogos = [
  { id: "ifza", name: "IFZA", src: "/images/logos/ifza.svg" },
  { id: "meydan", name: "Meydan Free Zone", src: "/images/logos/meydan.svg" },
  { id: "dubai-south", name: "Dubai South", src: "/images/logos/dubai-south.svg" },
  { id: "dubai-chamber", name: "Dubai Chamber", src: "/images/logos/dubai-chamber.svg" },
  { id: "dwtc", name: "DWTC", src: "/images/logos/dwtc.svg" },
  { id: "kezad", name: "KEZAD", src: "/images/logos/kezad.svg" },
  { id: "ajman", name: "Ajman Free Zone", src: "/images/logos/ajman.svg" },
  { id: "shams", name: "Shams Free Zone", src: "/images/logos/shams.svg" },
  { id: "srtip", name: "SRTIP", src: "/images/logos/srtip.svg" },
  { id: "d3", name: "D3", src: "/images/logos/d3.svg" },
  { id: "dubai-commercity", name: "Dubai CommerCity", src: "/images/logos/Dubai%20CommerCity.svg" },
] as const;
