"use client";

import { partnerLogos } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function PartnerMark({ name, suffix }: { name: string; suffix: string }) {
  return (
    <div className="logo-slider-item group flex h-20 w-44 shrink-0 flex-col items-center justify-center border border-primary/10 bg-section px-5 transition hover:border-accent/40 hover:bg-surface sm:h-24 sm:w-52">
      <span className="font-display text-lg font-semibold tracking-[-0.04em] text-primary/72 transition group-hover:text-primary sm:text-xl">
        {name}
      </span>
      <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-charcoal/48 transition group-hover:text-accent">
        {suffix}
      </span>
    </div>
  );
}

export function LogoSlider() {
  const { t } = useLanguage();
  const slides = [...partnerLogos, ...partnerLogos];

  return (
    <section aria-label={t.logoSlider.ariaLabel} className="border-y border-primary/10 bg-surface py-10 md:py-12">
      <div className="container mb-7 px-6 text-center">
        <p className="label-text text-accent">{t.logoSlider.eyebrow}</p>
      </div>

      <div className="logo-slider-mask relative overflow-hidden">
        <div className="logo-slider-track flex w-max items-center gap-5 md:gap-6">
          {slides.map((partner, index) => (
            <PartnerMark key={`${partner.id}-${index}`} name={partner.name} suffix={partner.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}
