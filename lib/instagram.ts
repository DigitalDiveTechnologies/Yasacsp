export const instagramProfile = {
  handle: "yasa_corporate_service_provide",
  url: "https://www.instagram.com/yasa_corporate_service_provide?igsh=ZGphcGZlczl4bWdq",
  profileImage: "/images/instagram/profile.png",
};

export type MediaLink = {
  title: string;
  source: string;
  kind: "Press" | "Video" | "Social";
  url: string;
  image: string;
};

export const mediaLinks: MediaLink[] = [
  {
    title: "YASA Dubai partners with Meydan Free Zone",
    source: "Gulf News",
    kind: "Press",
    url: "https://gulfnews.com/amp/story/business%2Fcorporate-news%2Fyasa-dubai-partners-with-meydan-free-zone-to-offer-fast-track-business-set-up-1.1667379906360",
    image: "/images/meydan-partnership.jpg",
  },
  {
    title: "Fast-track business setup partnership coverage",
    source: "Zawya",
    kind: "Press",
    url: "https://www.zawya.com/en/press-release/companies-news/yasa-dubai-partners-with-meydan-free-zone-to-offer-fast-track-business-setup-qtg47zn1",
    image: "/images/capability-partnership.jpg",
  },
  {
    title: "Exclusive packages for football fans from Dubai",
    source: "Gulf News",
    kind: "Press",
    url: "https://gulfnews.com/amp/story/business%2Fcorporate-news%2Fyasa-announces-exclusive-packages-for-the-football-world-cup-in-qatar-from-dubai-1.1655815638059",
    image: "/images/news-business-growth.jpg",
  },
  {
    title: "Fujairah Airport and YASA Dubai announce tie-up",
    source: "Zawya",
    kind: "Press",
    url: "https://www.zawya.com/en/press-release/companies-news/fujairah-airport-and-yasa-dubai-announce-tie-up-for-qatar-football-world-cup-fans-wutqyjim",
    image: "/images/news-office-setup.jpg",
  },
  {
    title: "Travel support coverage for football fans",
    source: "Gulf News",
    kind: "Press",
    url: "https://gulfnews.com/amp/story/business%2Fcorporate-news%2Ffujairah-airport-and-yasa-dubai-announce-tie-up-for-qatar-football-world-cup-fans-1.1663750828550",
    image: "/images/global-presence-map.png",
  },
  {
    title: "YASA video feature",
    source: "YouTube",
    kind: "Video",
    url: "https://youtu.be/dUzy-s1SdcI?feature=shared",
    image: "/images/instagram/post-1.jpg",
  },
  {
    title: "Business setup video update",
    source: "YouTube",
    kind: "Video",
    url: "https://youtu.be/HVRrpnRFzac?feature=shared",
    image: "/images/instagram/post-2.jpg",
  },
  {
    title: "YASA corporate services video",
    source: "YouTube",
    kind: "Video",
    url: "https://youtu.be/NwXiQYoC0mA?feature=shared",
    image: "/images/instagram/post-3.jpg",
  },
  {
    title: "Official social media update",
    source: "Instagram",
    kind: "Social",
    url: "https://www.instagram.com/p/Coh21WEP3gz/?igsh=eTE3ZDZlZWIzdng2",
    image: "/images/instagram/post-4.jpg",
  },
  {
    title: "Instagram company update",
    source: "Instagram",
    kind: "Social",
    url: "https://www.instagram.com/p/CpNEZlmpDFz/?img_index=1&igsh=aWxpeDNjNDJ2ZDRr",
    image: "/images/instagram/post-5.jpg",
  },
  {
    title: "Instagram reel from YASA",
    source: "Instagram",
    kind: "Social",
    url: "https://www.instagram.com/reel/CttpGDdJ_8c/?igsh=MTN1YWJ5aTc3anZobQ==",
    image: "/images/instagram/post-6.jpg",
  },
];

export const instagramImages = [
  "/images/instagram/post-1.jpg",
  "/images/instagram/post-2.jpg",
  "/images/instagram/post-3.jpg",
  "/images/instagram/post-4.jpg",
  "/images/instagram/post-5.jpg",
  "/images/instagram/post-6.jpg",
  "/images/instagram/post-7.jpg",
  "/images/instagram/post-8.jpg",
  "/images/instagram/post-9.jpg",
  "/images/instagram/post-10.jpg",
  "/images/instagram/post-11.jpg",
  "/images/instagram/post-12.jpg",
  "/images/instagram/post-13.jpg",
] as const;
