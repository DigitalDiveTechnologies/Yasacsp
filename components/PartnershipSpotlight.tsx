"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { company } from "@/lib/site";

const PARTNERSHIP_IMAGE = "/images/meydan-partnership.jpg";
const PARTNERSHIP_WIDTH = 1024;
const PARTNERSHIP_HEIGHT = 621;

export function PartnershipSpotlight() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="partnership" className="relative overflow-hidden bg-brand-ink text-section">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(79,163,184,0.14),transparent_38%),radial-gradient(circle_at_88%_24%,rgba(26,107,124,0.12),transparent_32%)]"
        aria-hidden="true"
      />

      <div className="container px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="label-text mb-4 text-accent">{t.partnership.eyebrow}</p>
            <h2 className="max-w-xl font-display font-semibold leading-[0.92] tracking-[-0.055em]">
              {t.partnership.titleLine1}
              <span className="mt-2 block text-accent">{t.partnership.titleLine2}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-section/72 md:text-lg">{t.partnership.body}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {t.partnership.highlights.map((item, index) => (
                <motion.span
                  key={item}
                  className="border border-section/14 bg-section/6 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-section/82"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <a
              href={company.emailHref}
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-section/18 px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-section transition hover:border-accent hover:bg-accent hover:text-brand-ink focus-ring"
            >
              {t.partnership.cta}
              <span className="h-px w-8 bg-current" />
            </a>
          </motion.div>

          <motion.div
            className="w-full"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -left-2 -top-2 h-10 w-10 border-l-2 border-t-2 border-accent sm:h-14 sm:w-14" aria-hidden="true" />
              <div className="absolute -bottom-2 -right-2 h-10 w-10 border-b-2 border-r-2 border-accent sm:h-14 sm:w-14" aria-hidden="true" />

              <div className="overflow-hidden border border-section/12 bg-brand-ink/50 shadow-[0_28px_80px_rgba(0,0,0,0.38)]">
                <Image
                  src={PARTNERSHIP_IMAGE}
                  alt={t.partnership.imageAlt}
                  width={PARTNERSHIP_WIDTH}
                  height={PARTNERSHIP_HEIGHT}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="block h-auto w-full"
                  quality={100}
                  unoptimized
                  priority
                />
              </div>
            </div>

            <div className="mt-5 border border-section/14 bg-section/6 px-5 py-4 backdrop-blur-sm sm:inline-block">
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-accent">{t.partnership.badgeEyebrow}</p>
              <p className="mt-1.5 font-display text-lg font-semibold leading-tight sm:text-xl">{t.partnership.badgeTitle}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
