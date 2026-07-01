"use client";

import { company, partnerLogos } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function PartnerLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="logo-slider-item group flex h-20 w-44 shrink-0 items-center justify-center border border-primary/10 bg-white px-6 transition hover:border-accent/40 sm:h-24 sm:w-52">
      <img
        src={src}
        alt={name}
        loading="lazy"
        decoding="async"
        className="logo-slider-image max-h-9 w-auto max-w-[7.5rem] object-contain opacity-90 transition duration-300 group-hover:opacity-100 sm:max-h-11 sm:max-w-[8.5rem]"
      />
    </div>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M6.6 3.5h2.2c.6 0 1.1.4 1.2 1l.5 2.4a1.2 1.2 0 0 1-.3 1.1l-1.3 1.3a12.5 12.5 0 0 0 5.5 5.5l1.3-1.3c.3-.3.7-.4 1.1-.3l2.4.5c.6.1 1 .6 1 1.2v2.2c0 .7-.5 1.2-1.2 1.3C10.8 18.8 5.2 13.2 4.3 6.7c-.1-.7.4-1.2 1.1-1.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 9.4c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .5.3l.8 1.9c.1.2.1.4 0 .6l-.5.6c-.1.2-.1.3 0 .5.3.6 1.2 1.5 1.9 1.9.2.1.3.1.5 0l.6-.5c.2-.1.4-.1.6 0l1.9.8c.3.1.3.3.3.5v.6c0 .3 0 .5-.5.7-1 .5-2.2.2-3.7-.9-1.6-1.2-2.8-2.8-3.2-3.9-.3-.8-.1-1.4.4-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LogoSlider() {
  const { t } = useLanguage();
  const slides = [...partnerLogos, ...partnerLogos];

  return (
    <section aria-label={t.logoSlider.ariaLabel} className="logo-slider-section section-block-compact border-y border-primary/10 bg-surface text-primary">
      <div className="container mb-6 px-6 text-center">
        <h2 className="heading-section text-balance text-primary">{t.logoSlider.title}</h2>
      </div>

      <div className="logo-slider-mask relative overflow-hidden">
        <div className="logo-slider-track flex w-max items-center gap-5 md:gap-6">
          {slides.map((partner, index) => (
            <PartnerLogo key={`${partner.id}-${index}`} name={partner.name} src={partner.src} />
          ))}
        </div>
      </div>

      <div className="container mt-7 px-6 text-center">
        <p className="text-lead mx-auto max-w-2xl text-primary/82">{t.logoSlider.advisory}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn-pill focus-ring"
          >
            <WhatsAppIcon />
            {t.logoSlider.whatsappCta}
          </a>
          <a href={company.phoneHref} className="btn-pill btn-pill-secondary focus-ring">
            <PhoneIcon />
            {t.logoSlider.callCta}
          </a>
        </div>
      </div>
    </section>
  );
}
