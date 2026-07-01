"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { company, legalLinks, services, socialLinks } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
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

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FooterAurora({ reduceMotion }: { reduceMotion: boolean }) {
  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="footer-aurora-orb footer-aurora-orb-a" />
      <span className="footer-aurora-orb footer-aurora-orb-b" />
      <span className="footer-aurora-orb footer-aurora-orb-c" />
    </div>
  );
}

function FooterBanner({ reduceMotion }: { reduceMotion: boolean }) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="footer-banner-shell relative text-section"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <span className="footer-banner-ring" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(79,163,184,0.28),transparent_42%),radial-gradient(circle_at_88%_18%,rgba(26,107,124,0.22),transparent_36%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 grid gap-6 px-6 py-8 md:grid-cols-[1.2fr_auto] md:items-center md:gap-8 md:px-8 md:py-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          <p className="label-text mb-3 text-section/55">{t.footer.bannerEyebrow}</p>
          <h2 className="heading-section heading-section-on-dark max-w-xl bg-[linear-gradient(120deg,#fff_0%,#d4eef5_48%,#4fa3b8_100%)] bg-clip-text text-transparent">
            {t.footer.bannerTitle}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-section/72 md:text-[0.95rem]">{t.footer.bannerBody}</p>
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col gap-3 sm:items-end"
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
        >
          <motion.a
            href={company.consultationHref}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-action-chip footer-action-chip-primary focus-ring w-full justify-center sm:w-auto"
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            {t.footer.bannerCta}
            <ArrowIcon />
          </motion.a>
          <div className="flex w-full flex-wrap gap-2 sm:justify-end">
            <motion.a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-action-chip focus-ring flex-1 justify-center sm:flex-none"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <WhatsAppIcon />
              {t.footer.whatsappUs}
            </motion.a>
            <motion.a
              href={company.phoneHref}
              className="footer-action-chip focus-ring flex-1 justify-center sm:flex-none"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <PhoneIcon />
              {t.footer.callNow}
            </motion.a>
            <motion.a
              href={socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-action-chip focus-ring flex-1 justify-center sm:flex-none"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <InstagramIcon />
              {socialLinks[0].label}
            </motion.a>
            <motion.a
              href={company.emailHref}
              className="footer-action-chip focus-ring flex-1 justify-center sm:flex-none"
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <MailIcon />
              {t.footer.emailUs}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const columnVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" as const, delay: index * 0.08 },
  }),
};

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
    <footer id="footer" ref={footerRef} className="footer-shell px-6 pb-8 pt-0 md:pb-10">
      <div className="footer-top-stripe" aria-hidden="true" />
      <FooterAurora reduceMotion={reduceMotion} />

      <div className="container relative pt-12 md:pt-16">
        <FooterBanner reduceMotion={reduceMotion} />

        <div className="relative z-10 mt-10 grid gap-10 md:mt-12 md:grid-cols-[1.35fr_1fr_1fr]">
          <motion.div custom={0} variants={columnVariants} initial={reduceMotion ? false : "hidden"} animate={isInView ? "visible" : undefined}>
            <a href="/" className="inline-flex rounded-sm focus-ring" aria-label={`${company.legalName} home`}>
              <Image src={company.logo} alt={company.legalName} width={134} height={73} className="h-14 w-auto brightness-0 invert" />
            </a>
            <h2 className="heading-card-lg mt-6 text-section">{company.legalName}</h2>
            <p className="mt-2 font-display text-base font-medium tracking-[-0.02em] text-section/78">{company.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-section/68">{t.footer.about}</p>
          </motion.div>

          <motion.div custom={1} variants={columnVariants} initial={reduceMotion ? false : "hidden"} animate={isInView ? "visible" : undefined}>
            <p className="label-text mb-5 text-section/55">{t.footer.services}</p>
            <nav className="grid gap-2" aria-label="Footer services">
              {services.slice(0, 8).map((service, index) => (
                <motion.a
                  key={service.href}
                  href={service.href}
                  className="footer-link-rich text-sm"
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : undefined}
                  transition={{ duration: 0.35, delay: 0.12 + index * 0.03, ease: "easeOut" }}
                >
                  {service.title}
                  <ArrowIcon />
                </motion.a>
              ))}
            </nav>
          </motion.div>

          <motion.div custom={2} variants={columnVariants} initial={reduceMotion ? false : "hidden"} animate={isInView ? "visible" : undefined}>
            <p className="label-text mb-5 text-section/55">{t.footer.contact}</p>
            <address className="grid gap-2.5 text-sm not-italic leading-7 text-section/68">
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
            <nav className="mt-6 flex flex-wrap gap-3" aria-label="Contact channels">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn focus-ring"
                aria-label={t.footer.whatsappUs}
              >
                <WhatsAppIcon />
              </a>
              <a href={company.phoneHref} className="footer-social-btn focus-ring" aria-label={t.footer.callNow}>
                <PhoneIcon />
              </a>{socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-social-btn focus-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <InstagramIcon />
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-section/62 md:flex-row md:items-center md:justify-between"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </footer>
  );
}
