"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { company } from "@/lib/site";
import { servicesWheelImage } from "@/lib/servicesWheel";

const SERVICE_CYCLE_MS = 2800;

export function ServicesSection() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-15% 0px", amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const services = t.services.wheelServices;
  const activeService = services[activeIndex] ?? services[0];
  const marqueeItems = [...services, ...services];

  useEffect(() => {
    if (!isInView || reduceMotion || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, SERVICE_CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [isInView, isPaused, reduceMotion, services.length]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-block relative overflow-hidden border-t border-primary/12 bg-section text-primary"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(26,107,124,0.08),transparent_42%)]"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="section-header grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="label-text mb-2">{t.services.eyebrow}</p>
            <div className="section-rule section-rule-spaced" />
            <h2 className="heading-section">
              {t.services.title}
            </h2>
          </div>
          <p className="text-lead lg:justify-self-end">{t.services.body}</p>
        </div>

        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="relative flex items-center justify-center py-6 sm:py-10">
            {!reduceMotion ? (
              <>
                <div
                  className="services-wheel-pulse pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] rounded-full bg-[radial-gradient(circle,rgba(26,107,124,0.16),transparent_68%)]"
                  aria-hidden="true"
                />
                <div
                  className="services-wheel-orbit pointer-events-none absolute left-1/2 top-1/2 h-[104%] w-[104%] rounded-full border border-dashed border-accent/25"
                  aria-hidden="true"
                />
                <div
                  className="services-wheel-orbit-reverse pointer-events-none absolute left-1/2 top-1/2 h-[118%] w-[118%] rounded-full border border-accent/10"
                  aria-hidden="true"
                />
              </>
            ) : null}

            <div className="absolute left-0 top-0 z-10 border border-primary/12 bg-white/92 px-4 py-3 shadow-soft backdrop-blur-sm">
              <p className="label-text">{t.services.serviceCount}</p>
            </div>

            <motion.div
              className="relative z-10 w-full max-w-3xl border border-primary/10 bg-white p-4 shadow-soft sm:p-6 md:max-w-4xl md:p-8"
              whileHover={reduceMotion ? undefined : { scale: 1.012 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Image
                src={servicesWheelImage}
                alt={t.services.wheelAlt}
                width={1200}
                height={1200}
                className="mx-auto h-auto w-full"
                priority
              />
            </motion.div>

            <div className="absolute bottom-0 right-0 z-10 hidden border border-primary/12 bg-primary px-4 py-3 text-section shadow-soft sm:block">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-section/55">{t.services.featured}</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeService}
                  className="mt-1 max-w-[12rem] font-display text-sm font-semibold leading-snug"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                >
                  {activeService}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="services-marquee-mask mt-2 overflow-hidden border-y border-primary/10 py-3">
            <div className={`flex w-max gap-6 ${reduceMotion ? "flex-wrap justify-center" : "services-marquee-track"}`}>
              {marqueeItems.map((service, index) => (
                <span
                  key={`${service}-${index}`}
                  className="label-text shrink-0 opacity-70"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.li
                key={service}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`group flex w-full items-start gap-3 border px-4 py-3 text-left transition focus-ring ${
                    isActive
                      ? "border-accent bg-accent/10 shadow-[0_12px_32px_rgba(26,107,124,0.12)]"
                      : "border-primary/10 bg-surface hover:border-accent/35 hover:bg-white"
                  }`}
                >
                  <span className="label-text mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm font-medium leading-6 ${isActive ? "text-primary" : "text-primary/80"}`}>
                    {service}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-8 text-center">
          <a
            href={company.emailHref}
            className="btn-pill focus-ring"
          >
            {t.services.cta}
            <span className="h-px w-8 bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
