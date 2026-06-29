export const company = {
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
  "/videos/business-presence.mp4",
  "/videos/office-process.mp4",
  "/videos/documents-visa.mp4",
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
  { label: "Services", href: "#services" },
  { label: "Global Presence", href: "#global-presence" },
  { label: "Company", href: "#company" },
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
  { id: "meydan", name: "Meydan", suffix: "Free Zone" },
  { id: "dmcc", name: "DMCC", suffix: "Free Zone" },
  { id: "ifza", name: "IFZA", suffix: "Free Zone" },
  { id: "rakez", name: "RAKEZ", suffix: "Free Zone" },
  { id: "difc", name: "DIFC", suffix: "Financial Centre" },
  { id: "jafza", name: "JAFZA", suffix: "Free Zone" },
  { id: "ded", name: "DED", suffix: "Dubai Mainland" },
  { id: "adgm", name: "ADGM", suffix: "Abu Dhabi" },
  { id: "saif", name: "SAIF Zone", suffix: "Sharjah" },
  { id: "dafza", name: "DAFZA", suffix: "Free Zone" },
  { id: "enbd", name: "Emirates NBD", suffix: "Banking" },
  { id: "adcb", name: "ADCB", suffix: "Banking" },
] as const;
