"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { company, heroVideos, services } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SiteControls } from "@/components/SiteControls";

const STAMP_INTERVAL_MS = 2600;
const SERVICE_INTERVAL_MS = 3200;

const introBandMeta = [
  { image: "/images/yasa-band-1.jpg", position: "object-center" },
  { image: "/images/yasa-band-2.jpg", position: "object-center" },
  { image: "/images/yasa-band-3.jpg", position: "object-center" },
  { image: "/images/yasa-band-4.jpg", position: "object-center" },
] as const;

const insightCardImages = [
  { variant: "large" as const, image: "/images/news-office-setup.jpg" },
  { variant: "small" as const, image: "/images/news-business-growth.jpg" },
  { variant: "wide" as const, image: "/images/news-residency-conference.jpg" },
  { variant: "small" as const, image: "/images/news-compliance.jpg" },
];

const capabilityCardImages = [
  "/images/capability-incorporation.jpg",
  "/images/capability-partnership.jpg",
  "/images/news-compliance.jpg",
];

function useNarrowScreen() {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsNarrow(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isNarrow;
}

function useCountUp(target: number, shouldStart: boolean, disabled: boolean, duration = 1200) {
  const [value, setValue] = useState(disabled && shouldStart ? target : 0);

  useEffect(() => {
    if (!shouldStart) return;
    if (disabled || target === 0) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [disabled, duration, shouldStart, target]);

  return value;
}

function AuroraField({ reduceMotion = false, dark = false }: { reduceMotion?: boolean; dark?: boolean }) {
  const orbs = [
    { className: "left-[8%] top-[12%] h-72 w-72 bg-accent/30", x: 22, y: -18, duration: 9 },
    { className: "right-[10%] top-[18%] h-96 w-96 bg-brand-teal/24", x: -26, y: 22, duration: 11 },
    { className: "bottom-[8%] left-[34%] h-80 w-80 bg-section/18", x: 18, y: 26, duration: 13 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {orbs.map((orb) => (
        <motion.span
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className} ${dark ? "mix-blend-screen" : "mix-blend-multiply"}`}
          animate={reduceMotion ? undefined : { x: [0, orb.x, 0], y: [0, orb.y, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function StampSeal({
  letter,
  active = false,
  compact = false,
  reduceMotion = false,
}: {
  letter: string;
  active?: boolean;
  compact?: boolean;
  reduceMotion?: boolean;
}) {
  return (
    <motion.div
      className={`relative grid place-items-center rounded-full border-[3px] border-primary text-primary ${
        compact ? "h-16 w-16 md:h-20 md:w-20" : "h-[32vh] w-[32vh] max-h-80 max-w-80 md:h-[40vh] md:w-[40vh]"
      }`}
      initial={active && !reduceMotion ? { opacity: 0.45, scale: 1.14, rotate: -1.5 } : false}
      animate={
        active && !reduceMotion
          ? { opacity: [0.45, 1, 0.94, 1], scale: [1.14, 0.99, 1], rotate: [-1.5, 1, 0] }
          : { opacity: 1, scale: 1, rotate: 0 }
      }
      transition={{ duration: active ? 0.18 : 0.28, ease: "easeOut" }}
    >
      <span className="absolute inset-3 rounded-full border border-primary/45" />
      <span className="absolute inset-6 rounded-full border border-dashed border-primary/25" />
      {active && !reduceMotion ? (
        <motion.span
          className="absolute -inset-5 rounded-full border border-accent/60"
          initial={{ opacity: 0.5, scale: 0.92 }}
          animate={{ opacity: 0, scale: 1.18 }}
          transition={{ duration: 0.52, ease: "easeOut" }}
        />
      ) : null}
      <span className={`font-display font-semibold leading-none tracking-[-0.09em] ${compact ? "text-4xl md:text-5xl" : "text-[19vh] md:text-[24vh]"}`}>
        {letter}
      </span>
    </motion.div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
      <circle cx="120" cy="120" r="94" {...common} opacity="0.14" />
      {type === "building" && (
        <>
          <path d="M70 178V72h68v106M138 105h36v73M60 178h122" {...common} />
          <path d="M88 94h12M112 94h12M88 120h12M112 120h12M88 146h12M112 146h12" {...common} />
        </>
      )}
      {type === "globe" && (
        <>
          <circle cx="120" cy="118" r="58" {...common} />
          <path d="M62 118h116M120 60c21 22 21 94 0 116M120 60c-21 22-21 94 0 116" {...common} />
          <path d="M78 82c21 12 63 12 84 0M78 154c21-12 63-12 84 0" {...common} />
        </>
      )}
      {type === "offshore" && (
        <>
          <path d="M70 158c18-12 36-12 54 0s36 12 54 0M72 180c18-10 36-10 54 0s36 10 54 0" {...common} />
          <path d="M94 138V76h58v62M108 96h30M108 116h30" {...common} />
        </>
      )}
      {type === "license" && (
        <>
          <path d="M78 60h68l28 30v90H78zM146 60v30h28M98 112h56M98 136h56M98 160h34" {...common} />
          <path d="M154 156l12 12 24-32" {...common} />
        </>
      )}
      {type === "visa" && (
        <>
          <path d="M72 62h84l20 22v94H72zM156 62v22h20M94 110h60M94 134h40" {...common} />
          <path d="M134 154c18-12 36-12 54 0M144 174h34" {...common} />
        </>
      )}
      {type === "id" && (
        <>
          <rect x="62" y="78" width="116" height="84" rx="8" {...common} />
          <circle cx="98" cy="118" r="14" {...common} />
          <path d="M76 148c8-16 36-16 44 0M132 106h28M132 128h28M132 148h18" {...common} />
        </>
      )}
      {type === "bank" && (
        <path d="M62 100l58-36 58 36zM76 112v52M106 112v52M136 112v52M166 112v52M62 176h116M92 92h56" {...common} />
      )}
      {type === "chart" && (
        <>
          <path d="M70 170V72M70 170h108M92 144l26-28 22 18 34-46" {...common} />
          <path d="M94 170v-26M122 170v-54M150 170v-36M178 170V88" {...common} opacity="0.7" />
        </>
      )}
      {type === "stamp" && (
        <>
          <path d="M92 74h56v46l22 28H70l22-28zM70 164h100M84 184h72M104 96h32" {...common} />
          <path d="M86 148h68" {...common} opacity="0.65" />
        </>
      )}
      {type === "briefcase" && (
        <path d="M62 92h116v78H62zM96 92V74h48v18M62 122h116M110 122v16h20v-16" {...common} />
      )}
    </svg>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reduceMotion = Boolean(useReducedMotion());
  const [activeVideo, setActiveVideo] = useState(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  const navItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.globalPresence, href: "#global-presence" },
    { label: t.nav.company, href: "#company" },
    { label: t.nav.contact, href: "#footer" },
  ];

  const heroStrip = [
    [t.hero.stripOffice, t.hero.stripOfficeValue],
    [t.hero.stripCore, t.hero.stripCoreValue],
    [t.hero.stripRecord, t.hero.stripRecordValue],
    [t.hero.stripStatus, t.hero.stripStatusValue],
  ] as const;

  useEffect(() => {
    const currentVideo = videoRefs.current[activeVideo];
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeVideo) video.pause();
    });
    if (!currentVideo) return;
    currentVideo.currentTime = 0;
    currentVideo.play().catch(() => undefined);
  }, [activeVideo]);

  return (
    <section ref={heroRef} className="relative h-[118vh] bg-brand-ink">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { scale: videoScale }}>
          {heroVideos.map((src, index) => (
            <video
              key={src}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              className={`hero-video ${index === activeVideo ? "is-active" : ""}`}
              src={src}
              autoPlay={index === 0}
              muted
              playsInline
              preload="auto"
              loop={heroVideos.length === 1}
              onEnded={() => setActiveVideo((current) => (current + 1) % heroVideos.length)}
            />
          ))}
        </motion.div>
        <AuroraField reduceMotion={reduceMotion} dark />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,13,0.22)_0%,rgba(6,18,13,0.62)_52%,rgba(6,18,13,0.94)_100%)]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(185,130,37,0.18),transparent_32%)]"
          animate={reduceMotion ? undefined : { opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div className="absolute inset-x-0 top-0 z-10 px-6 py-6" style={reduceMotion ? undefined : { opacity: contentOpacity }}>
          <div className="container glass-panel flex flex-wrap items-center justify-between gap-4 px-5 py-3">
            <Image src={company.logo} alt={company.name} width={134} height={73} className="h-12 w-auto brightness-0 invert" priority />
            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              <SiteControls variant="hero" />
              <nav className="hidden items-center gap-7 text-sm font-semibold text-section/80 md:flex" aria-label="Primary navigation">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-accent focus-ring">
                    {item.label}
                  </a>
                ))}
                <motion.a
                  href={company.phoneHref}
                  className="border border-accent px-4 py-2 text-section transition hover:bg-accent hover:text-brand-ink focus-ring"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {t.nav.freeConsultation}
                </motion.a>
              </nav>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute inset-x-0 bottom-44 z-10 px-6 text-section lg:bottom-48" style={reduceMotion ? undefined : { opacity: contentOpacity }}>
          <div className="container grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div>
              <p className="label-text mb-5 text-accent">{t.hero.eyebrow}</p>
              <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl">
                {t.hero.title}
              </h1>
            </div>
            <motion.div
              className="glass-panel border-l border-accent p-6 text-section/78"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p className="font-display text-2xl text-section">{company.shortName}</p>
              <p className="mt-3 leading-7">{t.hero.cardBody}</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-section/12 bg-brand-ink/70 px-6 py-4 text-section backdrop-blur-xl lg:block">
          <div className="container grid grid-cols-4 gap-8">
            {heroStrip.map(([label, value]) => (
              <motion.div
                key={label}
                className="border-l border-accent/55 pl-4"
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-section/48">{label}</p>
                <p className="mt-1 font-display text-lg text-section">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CompanyIntro() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion() || useNarrowScreen());
  const isInView = useInView(sectionRef, { once: true, margin: "-25% 0px -25% 0px" });
  const [activeBand, setActiveBand] = useState(0);
  const introStamps = t.companyIntro.stamps;
  const activeStamp = introStamps[activeBand];

  return (
    <section ref={sectionRef} id="company" className="bg-section text-primary">
      <div className="bg-brand-ink px-6 py-7 text-center text-section">
        <p className="label-text mb-2 text-section/55">{t.companyIntro.bannerEyebrow}</p>
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
          {t.companyIntro.bannerTitle}
        </h2>
      </div>

      <div className="container py-14 md:py-20">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="label-text text-accent">{t.companyIntro.clickLabel}</p>
          <p className="max-w-2xl text-sm leading-7 text-charcoal/70">{t.companyIntro.clickBody}</p>
        </div>

        <motion.div
          className="flex h-[38rem] overflow-hidden border border-primary/10 shadow-soft lg:h-[50rem]"
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {introStamps.map((stamp, index) => {
            const { image, position } = introBandMeta[index];
            const label = t.companyIntro.bands[index];
            const isActive = activeBand === index;

            return (
            <motion.button
              key={`${stamp.letter}-${label}`}
              type="button"
              onClick={() => setActiveBand(index)}
              className="relative flex items-stretch overflow-hidden bg-primary focus-ring"
              animate={{ flex: isActive ? 3.4 : 0.72 }}
              whileHover={reduceMotion ? undefined : { scale: 1.025 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              aria-pressed={isActive}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: isActive ? 1.06 : 1 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 34vw, 25vw"
                  className={`object-cover ${position}`}
                  priority={index === 0}
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.28)_44%,rgba(0,0,0,0.72)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.2),transparent_34%)]" />
              <div className="absolute inset-y-0 left-0 w-px bg-white/24" />
              <motion.span
                className="absolute left-1/2 top-10 -translate-x-1/2 font-display text-8xl font-semibold text-white/42 md:text-9xl"
                animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1.18 : 1 }}
              >
                {stamp.letter}
              </motion.span>
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white">
                {label}
              </span>

              <AnimatePresence>
                {isActive ? (
                  <motion.div
                    className="relative z-10 mt-auto w-full p-8 text-left text-white"
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">{company.shortName}</p>
                    <h3 className="mt-3 font-display text-6xl font-semibold leading-none tracking-[-0.08em] md:text-8xl">
                      {stamp.letter}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-7 text-white/82">{stamp.line}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TrustStat({
  stat,
  start,
  reduceMotion,
}: {
  stat: { value: number | string; suffix: string; label: string };
  start: boolean;
  reduceMotion: boolean;
}) {
  const isNumeric = typeof stat.value === "number";
  const numericValue: number = typeof stat.value === "number" ? stat.value : 0;
  const value = useCountUp(numericValue, start, reduceMotion);

  return (
    <div className="border-b border-primary/12 pb-6">
      <div className="font-display text-5xl font-semibold leading-none tracking-[-0.05em] text-primary md:text-6xl">
        {isNumeric ? value.toLocaleString() : stat.value}
        {stat.suffix ? <span className="text-accent">{stat.suffix}</span> : null}
      </div>
      <p className="label-text mt-3 text-charcoal/62">{stat.label}</p>
    </div>
  );
}

function WorldMap({ start, reduceMotion }: { start: boolean; reduceMotion: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden border border-primary/12 bg-section shadow-soft">
      <motion.div
        className="relative aspect-[1.45/1] min-h-[24rem]"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={start ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <Image
          src="/images/global-presence-map.png"
          alt="Map of the United Arab Emirates with Dubai pinned"
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(17,17,17,0.26)),linear-gradient(90deg,rgba(255,255,255,0.3),transparent_42%)]" />
        <motion.div
          className="absolute left-6 top-6 border border-white/40 bg-white/86 px-5 py-4 shadow-soft backdrop-blur-sm md:left-8 md:top-8"
          initial={reduceMotion ? false : { opacity: 0, x: -12 }}
          animate={start ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">{t.globalPresence.physicalOffice}</p>
          <p className="mt-1 font-display text-3xl font-semibold tracking-[-0.045em] text-primary">{t.globalPresence.hq}</p>
          <p className="mt-2 max-w-48 text-xs leading-5 text-charcoal/66">{t.globalPresence.hqBody}</p>
        </motion.div>
        <div className="absolute bottom-5 right-5 border border-white/36 bg-primary/82 px-4 py-3 text-section backdrop-blur-sm">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-section/54">{t.globalPresence.clientRegions}</p>
          <p className="mt-1 text-sm text-section/82">{t.globalPresence.clientRegionsBody}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function GlobalPresence() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <section ref={sectionRef} id="global-presence" className="bg-section px-6 py-24 text-primary md:py-32">
      <div className="container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="label-text mb-3 text-accent">{t.globalPresence.eyebrow}</p>
            <div className="section-rule mb-8" />
          </div>
          <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-8xl">
            {t.globalPresence.title}
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="grid gap-6">
            {t.globalPresence.stats.map((stat) => (
              <TrustStat key={stat.label} stat={stat} start={isInView} reduceMotion={reduceMotion} />
            ))}
          </div>
          <div>
            <p className="mb-5 max-w-2xl text-lg leading-8 text-charcoal/72">{t.globalPresence.body}</p>
            <WorldMap start={isInView} reduceMotion={reduceMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion() || useNarrowScreen());
  const serviceList = services.slice(0, 8).map((service, index) => ({
    ...service,
    title: t.services.items[index]?.title ?? service.title,
    description: t.services.items[index]?.description ?? service.description,
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = serviceList[activeIndex] ?? serviceList[0];
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });
  const progress = serviceList.length > 1 ? (activeIndex / (serviceList.length - 1)) * 100 : 0;

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % serviceList.length);
    }, SERVICE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isInView, reduceMotion, serviceList.length]);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-section px-6 py-28 text-primary md:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-20 h-96 bg-[radial-gradient(circle_at_50%_40%,rgba(26,107,124,0.12),transparent_62%)]" />
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="label-text mb-3 text-accent">{t.services.eyebrow}</p>
          <h2 className="font-display text-6xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-charcoal/72">{t.services.body}</p>
        </div>

        <div className="relative mt-20 overflow-hidden border border-primary/12 bg-surface px-4 py-10 shadow-[0_30px_90px_rgba(17,17,17,0.09)] md:px-10 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(17,17,17,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="relative mx-auto hidden max-w-7xl py-28 md:block">
            <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-primary/14" />
            <motion.div
              className="absolute left-8 top-1/2 h-[2px] -translate-y-1/2 bg-accent"
              animate={{ width: `calc((100% - 4rem) * ${progress / 100})` }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
            />
            <div className="relative grid" style={{ gridTemplateColumns: `repeat(${serviceList.length}, minmax(0, 1fr))` }}>
              {serviceList.map((service, index) => {
                const isActive = index === activeIndex;
                const isPast = index < activeIndex;

                return (
                  <button
                    key={service.href}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="relative h-12 focus-ring"
                    aria-label={`Show ${service.title}`}
                  >
                    <span
                      className={`absolute left-1/2 top-1/2 z-10 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border transition ${
                        isActive
                          ? "border-accent bg-accent text-section shadow-[0_0_0_12px_rgba(26,107,124,0.14)]"
                          : isPast
                            ? "border-accent bg-section text-accent"
                            : "border-primary/18 bg-section text-primary/35"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </span>
                    <span
                      className={`absolute left-1/2 w-44 -translate-x-1/2 text-center transition ${
                        index % 2 === 0 ? "bottom-[calc(50%+2.25rem)]" : "top-[calc(50%+2.25rem)]"
                      } ${isActive ? "text-primary" : "text-charcoal/52 hover:text-primary"}`}
                    >
                      <span className="mt-1 block font-display text-xl font-semibold leading-tight tracking-[-0.025em]">
                        {service.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-3">
              {serviceList.map((service, index) => (
                <button
                  key={service.href}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 border px-4 py-3 text-left transition focus-ring ${
                    index === activeIndex
                      ? "border-accent bg-accent text-section"
                      : "border-primary/12 bg-section text-charcoal/68"
                  }`}
                >
                  <span className="block max-w-36 font-display text-lg font-semibold leading-tight">{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-10 max-w-6xl md:mt-6">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeService.href}
                className="relative overflow-hidden border border-primary/12 bg-section shadow-[0_28px_80px_rgba(17,17,17,0.12)]"
                initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -18, scale: 0.985 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
              >
                <div className="grid min-h-[36rem] lg:grid-cols-[0.88fr_1.12fr]">
                  <div className="relative overflow-hidden bg-brand-ink p-8 text-section md:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_28%,rgba(26,107,124,0.34),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
                    <motion.div
                      className="absolute -bottom-20 -right-20 h-80 w-80 text-section/8 md:h-[30rem] md:w-[30rem]"
                      animate={reduceMotion ? undefined : { rotate: [0, 5, 0], scale: [1, 1.04, 1] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ServiceVisual type={activeService.visual} />
                    </motion.div>
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <p className="label-text text-accent">{t.services.activeService}</p>
                        <div className="mt-8 aspect-square w-44 text-section md:w-64">
                          <ServiceVisual type={activeService.visual} />
                        </div>
                      </div>
                      <div className="mt-10 grid grid-cols-2 gap-3">
                        <div className="border border-section/14 p-4">
                          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-section/46">{t.services.mode}</p>
                          <p className="mt-2 font-display text-2xl font-semibold">{t.services.modeValue}</p>
                        </div>
                        <div className="border border-section/14 p-4">
                          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-section/46">{t.services.office}</p>
                          <p className="mt-2 font-display text-2xl font-semibold">{t.services.officeValue}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-8 md:p-12 lg:p-16">
                    <div className="absolute right-8 top-8 hidden h-24 w-24 border-r border-t border-accent/40 md:block" />
                    <p className="label-text mb-5 text-accent">{t.services.activeService}</p>
                    <h3 className="max-w-4xl font-display text-6xl font-semibold leading-none tracking-[-0.06em] md:text-8xl">
                      {activeService.title}
                    </h3>
                    <div className="my-9 h-px w-36 bg-accent" />
                    <p className="max-w-3xl text-xl leading-9 text-charcoal/74">{activeService.description}</p>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                      {[
                        [t.services.scope, t.services.scopeValue],
                        [t.services.process, t.services.processValue],
                        [t.services.outcome, t.services.outcomeValue],
                      ].map(([label, value]) => (
                        <div key={label} className="border border-primary/10 bg-surface p-5">
                          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">{label}</p>
                          <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] text-primary">{value}</p>
                        </div>
                      ))}
                    </div>

                    <a
                      href={activeService.href}
                      className="mt-10 inline-flex items-center gap-3 rounded-full border border-primary/14 px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-primary transition hover:border-accent hover:bg-accent hover:text-section focus-ring"
                    >
                      {t.services.viewService} <span className="h-px w-8 bg-current" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());
  const cards = t.insights.cards.map((card, index) => ({
    ...card,
    ...insightCardImages[index],
  }));

  return (
    <section className="bg-section px-6 py-24 text-primary md:py-32">
      <div className="container">
        <div className="mb-10">
          <p className="label-text mb-2 text-accent">{t.insights.eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
            {t.insights.title}
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.95fr]">
          <motion.article
            className="group relative min-h-[26rem] overflow-hidden border border-primary/12 bg-brand-ink text-section shadow-soft"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Image
              src={cards[0].image}
              alt=""
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,17,0.72),rgba(17,17,17,0.94)),linear-gradient(45deg,transparent_0%,rgba(255,255,255,0.16)_45%,transparent_75%)]" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="label-text mb-3 text-accent">{cards[0].category}</p>
              <h3 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em]">
                {cards[0].title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-section/78">
                {t.insights.readMore} <span className="h-px w-8 bg-accent transition group-hover:w-12" />
              </span>
            </div>
          </motion.article>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.slice(1).map((card, index) => (
              <motion.article
                key={card.title}
                className="group border border-primary/12 bg-section shadow-soft"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="label-text mb-3 text-accent">{card.category}</p>
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.035em]">{card.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-charcoal/70">
                    {t.insights.readMore} <span className="h-px w-7 bg-accent transition group-hover:w-10" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SuccessBanner() {
  const processSteps = [
    {
      step: "Consultation Stage",
      title: "Consultation",
      points: [
        "Discuss your goals, preferred jurisdiction, and business activity.",
        "Get expert guidance on the best mainland, free zone, or offshore route.",
      ],
    },
    {
      step: "Documentation Stage",
      title: "Documentation",
      points: [
        "Prepare passport copies, business plan, application forms, and approvals.",
        "Complete the required licensing and registration paperwork.",
      ],
    },
    {
      step: "Registration Stage",
      title: "Company Registration",
      points: [
        "Submit documents to the relevant authority or free zone.",
        "Receive trade license support, visa guidance, banking, and compliance assistance.",
      ],
    },
  ];

  const benefits = [
    {
      title: "One-stop setup execution",
      body: "One partner for company registration, licensing, visas, banking, and compliance.",
      image: "/images/capability-incorporation.jpg",
      accent: "from-brand-ink/92 to-accent/86",
    },
    {
      title: "Transparent guidance",
      body: "Clear steps, requirements, timelines, and options based on your activity.",
      image: "/images/capability-partnership.jpg",
      accent: "from-brand-ink/92 to-brand-teal/84",
    },
    {
      title: "Compliance-first handling",
      body: "Correct documentation, sequencing, and structured submissions from day one.",
      image: "/images/news-compliance.jpg",
      accent: "from-brand-ink/92 to-amber-700/82",
    },
    {
      title: "Post-setup support",
      body: "Ongoing assistance for renewals, amendments, visas, banking, and compliance needs.",
      image: "/images/news-business-growth.jpg",
      accent: "from-brand-ink/92 to-indigo-900/82",
    },
  ];

  return (
    <section className="bg-section px-6 py-24 text-primary md:py-32">
      <div className="container">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="label-text mb-3 text-accent">Company Formation</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Our Company Formation Process
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-charcoal/70 lg:justify-self-end">
            From initial consultation to license issuance, YASA keeps every step clear, documented, and coordinated for your UAE business setup.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="border border-primary/12 bg-surface p-7 shadow-soft">
              <span className="inline-flex rounded-full border border-primary/18 px-4 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-primary/72">
                {item.step}
              </span>
              <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.035em]">{item.title}</h3>
              <div className="mt-6 grid gap-4">
                {item.points.map((point) => (
                  <p key={point} className="flex gap-3 text-sm leading-7 text-charcoal/72">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-accent" />
                    <span>{point}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.title} className="grid min-h-44 overflow-hidden border border-primary/10 bg-primary text-section shadow-soft sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-44">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 22vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={`bg-gradient-to-br ${item.accent} p-7 text-left`}>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-section/82">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilityCards() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());
  const cards = t.capability.cards.map((card, index) => ({
    ...card,
    image: capabilityCardImages[index],
  }));

  return (
    <section className="bg-section px-6 py-24 text-primary md:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="label-text mb-3 text-accent">{t.capability.eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
            {t.capability.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-charcoal/68">{t.capability.body}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group border border-primary/12 bg-section shadow-soft"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -8 }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.035em]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-charcoal/70">{card.description}</p>
                <span className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-section transition group-hover:bg-brand-ink">
                  {t.capability.learnMore} <span className="h-px w-6 bg-section" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
