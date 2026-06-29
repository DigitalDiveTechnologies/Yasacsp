"use client";

import { partnerLogos } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function PartnerLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="logo-slider-item group flex h-20 w-44 shrink-0 items-center justify-center border border-primary/10 bg-section px-6 transition hover:border-accent/40 hover:bg-surface sm:h-24 sm:w-52">
      <img
        src={src}
        alt={name}
        loading="lazy"
        decoding="async"
        className="logo-slider-image max-h-9 w-auto max-w-[7.5rem] object-contain opacity-75 transition duration-300 group-hover:opacity-100 sm:max-h-11 sm:max-w-[8.5rem]"
      />
    </div>
  );
}

export function LogoSlider() {
  const { t } = useLanguage();
  const slides = [...partnerLogos, ...partnerLogos];

  return (
    <section aria-label={t.logoSlider.ariaLabel} className="section-block-compact border-y border-primary/10 bg-surface">
      <div className="container mb-5 px-6 text-center">
        <p className="label-text text-center">{t.logoSlider.eyebrow}</p>
      </div>

      <div className="logo-slider-mask relative overflow-hidden">
        <div className="logo-slider-track flex w-max items-center gap-5 md:gap-6">
          {slides.map((partner, index) => (
            <PartnerLogo key={`${partner.id}-${index}`} name={partner.name} src={partner.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
