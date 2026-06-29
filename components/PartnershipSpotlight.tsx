"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { company } from "@/lib/site";
import {
  PARTNERSHIP_VIDEO_INTERVAL_MS,
  partnershipSlides,
  partnershipVideos,
} from "@/lib/partnership";

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      {muted ? (
        <>
          <path
            d="M11 5 6 9H3v6h3l5 4V5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="m16 9 5 6M21 9l-5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path
            d="M11 5 6 9H3v6h3l5 4V5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M15.5 8.5a4.5 4.5 0 0 1 0 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M18 6a7.5 7.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

type LightboxState =
  | { type: "closed" }
  | { type: "video"; index: number }
  | { type: "image"; src: string };

export function PartnershipSpotlight() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement>(null);
  const videoViewportRef = useRef<HTMLDivElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoViewportRef, { amount: 0, margin: "120px 0px" });
  const sliderItems = [...partnershipSlides, ...partnershipSlides];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [lightbox, setLightbox] = useState<LightboxState>({ type: "closed" });
  const [mounted, setMounted] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const rotateTimerRef = useRef<number | null>(null);
  const isMutedRef = useRef(isMuted);

  const activeVideo = partnershipVideos[activeIndex];
  const videoCount = partnershipVideos.length;

  isMutedRef.current = isMuted;

  const clearRotateTimer = useCallback(() => {
    if (rotateTimerRef.current !== null) {
      window.clearTimeout(rotateTimerRef.current);
      rotateTimerRef.current = null;
    }
  }, []);

  const scheduleNextVideo = useCallback(() => {
    clearRotateTimer();
    rotateTimerRef.current = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % videoCount);
    }, PARTNERSHIP_VIDEO_INTERVAL_MS);
  }, [clearRotateTimer, videoCount]);

  useEffect(() => {
    setMounted(true);
    return () => clearRotateTimer();
  }, [clearRotateTimer]);

  useEffect(() => {
    setVideoFailed(false);
    setIsPlaying(false);
  }, [activeVideo.src]);

  useEffect(() => {
    const video = previewVideoRef.current;
    if (!video || reduceMotion || videoFailed) return;

    video.muted = isMutedRef.current;

    if (!isVideoInView || lightbox.type !== "closed") {
      clearRotateTimer();
      video.pause();
      return;
    }

    clearRotateTimer();

    const tryPlay = () => {
      video.muted = isMutedRef.current;
      video.play()
        .then(() => {
          scheduleNextVideo();
        })
        .catch(() => {
          scheduleNextVideo();
        });
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      tryPlay();
      return;
    }

    video.addEventListener("canplay", tryPlay, { once: true });
    return () => video.removeEventListener("canplay", tryPlay);
  }, [
    activeVideo.src,
    clearRotateTimer,
    isVideoInView,
    lightbox.type,
    reduceMotion,
    scheduleNextVideo,
    videoFailed,
  ]);

  useEffect(() => {
    if (lightbox.type !== "video") return;

    const video = modalVideoRef.current;
    if (!video) return;

    video.muted = false;
    video.currentTime = 0;
    video.play().catch(() => undefined);
  }, [lightbox]);

  useEffect(() => {
    if (lightbox.type === "closed") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox({ type: "closed" });
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox.type]);

  const toggleSound = async (event: React.MouseEvent) => {
    event.stopPropagation();
    const video = previewVideoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      video.volume = 1;
      try {
        await video.play();
      } catch {
        video.muted = true;
        setIsMuted(true);
      }
    }
  };

  const openVideoLightbox = () => {
    setLightbox({ type: "video", index: activeIndex });
  };

  const closeLightbox = () => {
    modalVideoRef.current?.pause();
    setLightbox({ type: "closed" });
  };

  const lightboxNode =
    mounted && lightbox.type !== "closed"
      ? createPortal(
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-brand-ink/92 p-4 backdrop-blur-sm md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.type === "video" ? t.partnership.viewFullVideo : t.partnership.enlargeImage}
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 border border-section/20 bg-brand-ink/80 px-4 py-2 text-xs uppercase tracking-[0.14em] text-section transition hover:border-accent focus-ring md:right-8 md:top-8"
            >
              {t.partnership.closeLightbox}
            </button>

            {lightbox.type === "video" ? (
              <div
                className="relative w-full max-w-5xl"
                onClick={(event) => event.stopPropagation()}
              >
                <video
                  ref={modalVideoRef}
                  key={partnershipVideos[lightbox.index].src}
                  className="max-h-[82vh] w-full rounded-sm bg-black object-contain shadow-[0_32px_90px_rgba(0,0,0,0.45)]"
                  src={partnershipVideos[lightbox.index].src}
                  poster={partnershipVideos[lightbox.index].poster}
                  controls
                  playsInline
                  autoPlay
                />
              </div>
            ) : (
              <div
                className="relative h-[min(82vh,900px)] w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={lightbox.src}
                  alt={t.partnership.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            )}
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <section
        ref={sectionRef}
        id="partnership"
        className="section-block relative overflow-hidden border-t border-section/10 bg-brand-ink text-section"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(79,163,184,0.14),transparent_38%),radial-gradient(circle_at_88%_24%,rgba(26,107,124,0.12),transparent_32%)]"
          aria-hidden="true"
        />

        <div className="container relative">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <motion.div
              className="lg:col-span-5 lg:pr-6 xl:pr-10"
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="label-text mb-2 text-section">{t.partnership.eyebrow}</p>
              <div className="section-rule section-rule-spaced" />
              <h2 className="heading-section max-w-xl text-section">
                {t.partnership.titleLine1}
                <span className="mt-2 block text-section">{t.partnership.titleLine2}</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-section/78">{t.partnership.body}</p>

              <a
                href={company.emailHref}
                className="mt-7 inline-flex items-center gap-3 rounded-full border border-section/18 px-6 py-3 text-xs uppercase tracking-[0.16em] text-section transition hover:border-accent hover:bg-accent hover:text-brand-ink focus-ring"
              >
                {t.partnership.cta}
                <span className="h-px w-8 bg-current" />
              </a>
            </motion.div>

            <motion.div
              className="w-full lg:col-span-7"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative mx-auto w-full max-w-4xl lg:max-w-none">
                <div className="absolute -left-2 -top-2 z-10 h-12 w-12 border-l-2 border-t-2 border-accent sm:h-14 sm:w-14" aria-hidden="true" />
                <div className="absolute -bottom-2 -right-2 z-10 h-12 w-12 border-b-2 border-r-2 border-accent sm:h-14 sm:w-14" aria-hidden="true" />

                <div
                  ref={videoViewportRef}
                  className="relative aspect-video w-full overflow-hidden border border-section/12 bg-brand-ink/50 shadow-[0_32px_90px_rgba(0,0,0,0.42),0_0_48px_rgba(26,107,124,0.14)]"
                >
                  {reduceMotion || videoFailed ? (
                    <Image
                      src={activeVideo.poster}
                      alt={t.partnership.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                      unoptimized
                      priority
                    />
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={openVideoLightbox}
                        className="group absolute inset-0 z-10 cursor-pointer focus-ring"
                        aria-label={t.partnership.viewFullVideo}
                      >
                        <span className="sr-only">{t.partnership.viewFullVideo}</span>
                        <span className="pointer-events-none absolute inset-0 bg-brand-ink/0 transition group-hover:bg-brand-ink/18" />
                        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-section/20 bg-brand-ink/75 px-4 py-2 text-[0.62rem] uppercase tracking-[0.14em] text-section opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                          {t.partnership.viewFullVideo}
                        </span>
                      </button>

                      <Image
                        src={activeVideo.poster}
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 55vw, 100vw"
                        className={`object-cover transition-opacity duration-500 ${isPlaying ? "opacity-0" : "opacity-100"}`}
                        unoptimized
                        priority
                        aria-hidden={isPlaying}
                      />

                      <video
                        ref={previewVideoRef}
                        key={activeVideo.src}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}
                        src={activeVideo.src}
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        aria-label={t.partnership.imageAlt}
                        onPlaying={() => setIsPlaying(true)}
                        onError={() => setVideoFailed(true)}
                      />

                      <button
                        type="button"
                        onClick={toggleSound}
                        className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 border border-section/20 bg-brand-ink/80 px-3 py-2 text-[0.58rem] uppercase tracking-[0.12em] text-section backdrop-blur-sm transition hover:border-accent focus-ring"
                        aria-pressed={!isMuted}
                        aria-label={isMuted ? t.partnership.unmute : t.partnership.mute}
                      >
                        <SoundIcon muted={isMuted} />
                        {isMuted ? t.partnership.unmute : t.partnership.mute}
                      </button>

                      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-ink/35 to-transparent" />
                      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-ink/35 to-transparent" />
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="section-stack border-t border-section/12 pt-8 md:pt-10">
            <p className="label-text mb-6 text-center text-section md:mb-7">{t.partnership.sliderEyebrow}</p>
            <div className="partnership-slider-mask relative overflow-hidden py-1">
              <div
                className={`flex w-max items-stretch gap-4 md:gap-5 ${reduceMotion ? "flex-wrap justify-center" : "partnership-slider-track"}`}
              >
                {sliderItems.map((slide, index) => (
                  <button
                    key={`${slide.src}-${index}`}
                    type="button"
                    onClick={() => setLightbox({ type: "image", src: slide.src })}
                    className="group relative aspect-[16/10] w-80 shrink-0 overflow-hidden bg-brand-ink sm:w-[22rem] md:w-[26rem] lg:w-[30rem] ring-1 ring-inset ring-section/10 transition hover:ring-accent/60 focus-ring"
                    aria-label={t.partnership.enlargeImage}
                  >
                    {/* Native img avoids Next/Image src issues in the marquee track */}
                    <img
                      src={slide.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      style={{ objectPosition: slide.objectPosition }}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-brand-ink/0 transition group-hover:bg-brand-ink/20" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxNode}
    </>
  );
}
