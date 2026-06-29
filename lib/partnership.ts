export type PartnershipVideo = {
  id: string;
  src: string;
  poster: string;
};

export const partnershipVideos: PartnershipVideo[] = [
  {
    id: "smart-group",
    src: "/videos/partnership-smart-group.mp4",
    poster: "/images/partnership/slide-1.jpg",
  },
  {
    id: "softech",
    src: "/videos/partnership-softech.mp4",
    poster: "/images/partnership/slide-2.jpg",
  },
  {
    id: "atepa",
    src: "/videos/partnership-atepa.mp4",
    poster: "/images/partnership/slide-3.jpg",
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

/** @deprecated Use partnershipVideos[0].poster */
export const partnershipPoster = partnershipVideos[0].poster;

/** @deprecated Use partnershipVideos */
export const partnershipVideo = partnershipVideos[0].src;

export const PARTNERSHIP_VIDEO_INTERVAL_MS = 10_000;
