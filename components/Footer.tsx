"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { company, legalLinks, services, socialLinks } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 7 7.5 5.5L19.5 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FooterBanner() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());
  const bannerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bannerRef, { once: true, margin: "-8% 0px" });
  const consultationHref = `${company.emailHref}?subject=${encodeURIComponent("Free Consultation Request")}`;

  return (
    <motion.div
      ref={bannerRef}
      className="relative overflow-hidden border border-primary/10 bg-brand-ink text-section shadow-[0_28px_80px_rgba(13,30,40,0.18)]"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(79,163,184,0.22),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(26,107,124,0.18),transparent_36%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative grid gap-6 px-6 py-8 md:grid-cols-[1.2fr_auto] md:items-center md:gap-8 md:px-8 md:py-10">
        <div>
          <p className="label-text mb-3 text-section/55">{t.footer.bannerEyebrow}</p>
          <h2 className="heading-section heading-section-on-dark max-w-xl">{t.footer.bannerTitle}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-section/72 md:text-[0.95rem]">{t.footer.bannerBody}</p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <a href={consultationHref} className="footer-action-chip w-full justify-center sm:w-auto">
            {t.footer.bannerCta}
            <ArrowIcon />
          </a>
          <div className="flex w-full flex-wrap gap-2 sm:justify-end">
            <a href={company.phoneHref} className="footer-action-chip flex-1 justify-center sm:flex-none">
              <PhoneIcon />
              {t.footer.callNow}
            </a>
            <a href={company.emailHref} className="footer-action-chip flex-1 justify-center sm:flex-none">
              <MailIcon />
              {t.footer.emailUs}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const reduceMotion = Boolean(useReducedMotion());
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-5% 0px" });

  const localizedLegal = [
    { label: t.footer.legal.privacy, href: legalLinks[0].href },
    { label: t.footer.legal.terms, href: legalLinks[1].href },
    { label: t.footer.legal.sitemap, href: legalLinks[2].href },
  ];

  return (
    <footer id="footer" ref={footerRef} className="bg-section px-6 pb-8 pt-12 text-primary md:pb-10 md:pt-16">
      <div className="container">
        <FooterBanner />

        <motion.div
          className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[1.35fr_1fr_1fr]"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          <div>
            <a href="/" className="inline-flex rounded-sm focus-ring" aria-label={`${company.legalName} home`}>
              <Image src={company.logo} alt={company.legalName} width={134} height={73} className="h-14 w-auto" />
            </a>
            <h2 className="heading-card-lg mt-6">{company.legalName}</h2>
            <p className="mt-2 font-display text-base font-medium tracking-[-0.02em] text-primary/80">{company.name}</p>
            <p className="text-body mt-4 max-w-sm">{t.footer.about}</p>
          </div>

          <div>
            <p className="label-text mb-5">{t.footer.services}</p>
            <nav className="grid gap-2" aria-label="Footer services">
              {services.slice(0, 8).map((service) => (
                <a key={service.href} href={service.href} className="footer-link-rich text-sm">
                  {service.title}
                  <ArrowIcon />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="label-text mb-5">{t.footer.contact}</p>
            <address className="text-muted grid gap-2.5 text-sm not-italic leading-7">
              <a href={company.phoneHref} className="footer-link-rich">
                {company.phone}
                <ArrowIcon />
              </a>
              <a href={company.emailHref} className="footer-link-rich">
                {company.email}
                <ArrowIcon />
              </a>
              <span>{company.location}</span>
              <span>{company.hours}</span>
            </address>
            <nav className="mt-6 flex flex-wrap gap-3" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/12 transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-section focus-ring"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <InstagramIcon />
                </a>
              ))}
            </nav>
          </div>
        </motion.div>

        <div className="text-muted mt-10 flex flex-col gap-4 border-t border-primary/10 pt-5 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {company.shortName}. {t.footer.rights}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Legal links">
            {localizedLegal.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
