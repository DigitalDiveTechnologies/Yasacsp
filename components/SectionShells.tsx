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
import { company, heroVideos } from "@/lib/site";
import { siteImages } from "@/lib/siteImages";
import { ServicesSection } from "@/components/ServicesSection";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { SiteControls } from "@/components/SiteControls";

const STAMP_INTERVAL_MS = 2600;

const introBandMeta = siteImages.companyIntroBands;

const insightCardImages = siteImages.insightCards;

const capabilityCardImages = siteImages.capabilityCards;

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
    { label: t.nav.company, href: "#company" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.partnerships, href: "#partnership" },
    { label: t.nav.globalPresence, href: "#global-presence" },
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
    currentVideo.muted = true;
    currentVideo.currentTime = 0;
    currentVideo.play().catch(() => undefined);
  }, [activeVideo]);

  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (!firstVideo || reduceMotion) return;
    firstVideo.muted = true;
    firstVideo.play().catch(() => undefined);
  }, [reduceMotion]);

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
              autoPlay
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
                  href={company.consultationHref}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <p className="label-text mb-3">{t.hero.eyebrow}</p>
              <h1 className="heading-hero text-balance">
                {t.hero.title}
              </h1>
            </div>
            <motion.div
              className="glass-panel border-l border-accent p-6 text-section/78"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p className="font-display text-xl text-section">{company.shortName}</p>
              <p className="text-body mt-3 text-section/82">{t.hero.cardBody}</p>
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
    <section ref={sectionRef} id="company" className="bg-section-bg text-primary">
      <div className="bg-brand-ink px-6 py-5 text-center text-section">
        <p className="label-text mb-2 text-section/55">{t.companyIntro.bannerEyebrow}</p>
        <h2 className="heading-section text-section">
          {t.companyIntro.bannerTitle}
        </h2>
      </div>

      <div className="container py-10 md:py-14">
        <div className="mb-6 grid gap-4 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="label-text">{t.companyIntro.clickLabel}</p>
          <p className="text-body max-w-2xl">{t.companyIntro.clickBody}</p>
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
              className="relative flex items-stretch overflow-hidden bg-brand-ink focus-ring"
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
                className="absolute left-1/2 top-10 -translate-x-1/2 font-display text-6xl font-semibold text-white/42 md:text-7xl"
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
                    <h3 className="heading-section mt-3 text-white">
                      {stamp.letter}
                    </h3>
                    <p className="text-body mt-4 max-w-md text-white/82">{stamp.line}</p>
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
      <div className="stat-value">
        {isNumeric ? value.toLocaleString() : stat.value}
        {stat.suffix ? <span className="text-accent">{stat.suffix}</span> : null}
      </div>
      <p className="label-text mt-3 text-muted">{stat.label}</p>
    </div>
  );
}

function WorldMap({ start, reduceMotion }: { start: boolean; reduceMotion: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden border border-primary/12 bg-section-bg shadow-soft">
      <motion.div
        className="relative aspect-[1.45/1] min-h-[24rem]"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={start ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <Image
          src={siteImages.globalPresenceMap}
          alt="Map of the United Arab Emirates with Dubai pinned"
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(17,17,17,0.26)),linear-gradient(90deg,rgba(255,255,255,0.3),transparent_42%)]" />
        <motion.div
          className="absolute left-6 top-6 border border-white/40 bg-section-bg/86 px-5 py-4 shadow-soft backdrop-blur-sm md:left-8 md:top-8"
          initial={reduceMotion ? false : { opacity: 0, x: -12 }}
          animate={start ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <p className="label-text">{t.globalPresence.physicalOffice}</p>
          <p className="mt-1 font-display text-xl font-semibold tracking-[-0.03em] text-primary">{t.globalPresence.hq}</p>
          <p className="text-body mt-2 max-w-48">{t.globalPresence.hqBody}</p>
        </motion.div>
        <div className="absolute bottom-5 right-5 border border-white/36 bg-brand-ink/82 px-4 py-3 text-section backdrop-blur-sm">
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
    <section ref={sectionRef} id="global-presence" className="section-block bg-section-bg text-primary">
      <div className="container">
        <div className="section-header grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-eyebrow mb-3">{t.globalPresence.eyebrow}</p>
            <div className="section-rule section-rule-spaced" />
            <h2 className="heading-section text-balance">{t.globalPresence.title}</h2>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="grid gap-6">
            {t.globalPresence.stats.map((stat) => (
              <TrustStat key={stat.label} stat={stat} start={isInView} reduceMotion={reduceMotion} />
            ))}
          </div>
          <div>
            <p className="text-lead mb-5">{t.globalPresence.body}</p>
            <WorldMap start={isInView} reduceMotion={reduceMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return <ServicesSection />;
}

export function Insights() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());
  const cards = t.insights.cards.map((card, index) => ({
    ...card,
    ...insightCardImages[index],
  }));

  return (
    <section className="section-block bg-section-bg text-primary">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow mb-3">{t.insights.eyebrow}</p>
          <h2 className="heading-section">{t.insights.title}</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group flex h-full flex-col border border-primary/12 bg-section-bg shadow-soft"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="label-text mb-3">{card.category}</p>
                <h3 className="heading-card">
                  {card.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-3 pt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {t.insights.readMore} <span className="h-px w-7 bg-accent transition group-hover:w-10" />
                </span>
              </div>
            </motion.article>
          ))}
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
      image: siteImages.formationBenefits[0],
      accent: "from-brand-ink/92 to-accent/86",
    },
    {
      title: "Transparent guidance",
      body: "Clear steps, requirements, timelines, and options based on your activity.",
      image: siteImages.formationBenefits[1],
      accent: "from-brand-ink/92 to-brand-teal/84",
    },
    {
      title: "Compliance-first handling",
      body: "Correct documentation, sequencing, and structured submissions from day one.",
      image: siteImages.formationBenefits[2],
      accent: "from-brand-ink/92 to-amber-700/82",
    },
    {
      title: "Post-setup support",
      body: "Ongoing assistance for renewals, amendments, visas, banking, and compliance needs.",
      image: siteImages.formationBenefits[3],
      accent: "from-brand-ink/92 to-indigo-900/82",
    },
  ];

  return (
    <section id="process" className="section-block bg-section-bg text-primary">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow section-header-intro">Company Formation</p>
          <div className="section-rule section-rule-spaced" />
          <div className="section-header-split">
            <h2 className="heading-section text-balance">Our Company Formation Process</h2>
            <p className="text-lead max-w-none">
              From initial consultation to license issuance, YASA keeps every step clear, documented, and coordinated for your UAE business setup.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="border border-primary/12 bg-surface p-7 shadow-soft">
              <span className="inline-flex rounded-full border border-primary/18 px-4 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-primary/72">
                {item.step}
              </span>
              <h3 className="heading-card-lg mt-4">{item.title}</h3>
              <div className="mt-4 grid gap-2.5">
                {item.points.map((point) => (
                  <p key={point} className="text-body flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-accent" />
                    <span>{point}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="section-stack grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.title} className="grid min-h-44 overflow-hidden border border-primary/10 bg-brand-ink text-section shadow-soft sm:grid-cols-[0.9fr_1.1fr]">
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
                <h3 className="heading-card">{item.title}</h3>
                <p className="text-body mt-3 text-section/82">{item.body}</p>
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
    <section className="section-block bg-section-bg text-primary">
      <div className="container">
        <div className="section-header mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-3">{t.capability.eyebrow}</p>
          <h2 className="heading-section">{t.capability.title}</h2>
          <p className="text-lead mx-auto mt-4">{t.capability.body}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group border border-primary/12 bg-section-bg shadow-soft"
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
                <h3 className="heading-card-lg">{card.title}</h3>
                <p className="text-body mt-3">{card.description}</p>
                <span className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-section transition group-hover:bg-brand-ink">
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
