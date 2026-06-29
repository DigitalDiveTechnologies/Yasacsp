"use client";

import Image from "next/image";
import { instagramProfile, mediaLinks } from "@/lib/instagram";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M8 16 16 8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 7h7v7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M18 16v2.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MediaGallery() {
  const { t } = useLanguage();
  const slides = [...mediaLinks, ...mediaLinks];

  return (
    <section id="media-gallery" className="border-t border-primary/12 bg-section py-24 text-primary md:py-28">
      <div className="container mb-12 px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="label-text mb-3 text-accent">{t.mediaGallery.eyebrow}</p>
            <h2 className="font-display font-semibold leading-[0.95] tracking-[-0.055em]">{t.mediaGallery.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/72">{t.mediaGallery.body}</p>
          </div>

          <a
            href={instagramProfile.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 border border-primary/12 bg-surface px-5 py-4 transition hover:border-accent focus-ring"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-primary/12">
              <Image
                src={instagramProfile.profileImage}
                alt={t.mediaGallery.profileAlt}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">@{instagramProfile.handle}</p>
              <p className="mt-1 font-display text-lg font-semibold">{t.mediaGallery.profileTitle}</p>
              <p className="text-sm text-charcoal/62">{t.mediaGallery.profileBody}</p>
            </div>
            <InstagramIcon className="h-5 w-5 text-accent" />
          </a>
        </div>
      </div>

      <div className="instagram-carousel-mask relative overflow-hidden">
        <div className="instagram-carousel-track flex w-max gap-5">
          {slides.map((item, index) => (
            <a
              key={`${item.url}-${index}`}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-80 w-80 shrink-0 overflow-hidden border border-primary/12 bg-surface shadow-soft transition hover:border-accent sm:h-96 sm:w-96 lg:h-[26rem] lg:w-[26rem]"
              aria-label={`${t.mediaGallery.openLink}: ${item.title}`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 416px, (min-width: 640px) 384px, 320px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/92 via-brand-ink/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-section sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
                    {item.kind} / {item.source}
                  </p>
                  <ExternalLinkIcon className="h-4 w-4 shrink-0 text-accent" />
                </div>
                <h3 className="mt-3 max-w-[18rem] font-display text-2xl font-semibold leading-tight sm:max-w-[20rem] sm:text-3xl">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container mt-10 px-6 text-center">
        <a
          href={instagramProfile.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-primary/12 bg-surface px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-primary transition hover:border-accent hover:bg-accent hover:text-section focus-ring"
        >
          <InstagramIcon className="h-4 w-4" />
          {t.mediaGallery.followCta}
        </a>
      </div>
    </section>
  );
}
