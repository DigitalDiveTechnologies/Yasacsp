"use client";

import Image from "next/image";
import { instagramImages, instagramProfile } from "@/lib/instagram";
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

export function MediaGallery() {
  const { t } = useLanguage();
  const slides = [...instagramImages, ...instagramImages];

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
              <p className="mt-1 font-display text-lg font-semibold">
                {instagramProfile.followers} {t.mediaGallery.followers}
              </p>
              <p className="text-sm text-charcoal/62">
                {instagramProfile.posts} {t.mediaGallery.posts}
              </p>
            </div>
            <InstagramIcon className="h-5 w-5 text-accent" />
          </a>
        </div>
      </div>

      <div className="instagram-carousel-mask relative overflow-hidden">
        <div className="instagram-carousel-track flex w-max gap-5">
          {slides.map((image, index) => (
            <a
              key={`${image}-${index}`}
              href={instagramProfile.url}
              target="_blank"
              rel="noreferrer"
              className="relative block h-80 w-80 shrink-0 overflow-hidden border border-primary/12 bg-surface shadow-soft sm:h-96 sm:w-96 lg:h-[26rem] lg:w-[26rem]"
              aria-label={t.mediaGallery.followCta}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 416px, (min-width: 640px) 384px, 320px"
                className="object-cover"
              />
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
