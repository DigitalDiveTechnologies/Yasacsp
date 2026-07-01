export type PartnershipVideo = {
  id: string;
  src: string;
};

export const partnershipVideos: PartnershipVideo[] = [
  {
    id: "smart-group",
    src: "/videos/partnership-smart-group.mp4",
  },
  {
    id: "softech",
    src: "/videos/partnership-softech.mp4",
  },
  {
    id: "atepa",
    src: "/videos/partnership-atepa.mp4",
  },
];

export const partnershipSlides = [
  { src: "/images/partnership/slide-1.jpg", objectPosition: "center" },
  { src: "/images/partnership/slide-2.jpg", objectPosition: "center" },
  { src: "/images/partnership/slide-3.jpg", objectPosition: "center" },
  { src: "/images/partnership/slide-4.jpg", objectPosition: "center top" },
  { src: "/images/partnership/slide-5.jpg", objectPosition: "center" },
  { src: "/images/partnership/slide-6.jpg", objectPosition: "center 18%" },
] as const;

export const PARTNERSHIP_VIDEO_INTERVAL_MS = 10_000;
