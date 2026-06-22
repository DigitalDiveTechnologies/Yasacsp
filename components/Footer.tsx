"use client";

import Image from "next/image";
import { company, legalLinks, services, socialLinks } from "@/lib/site";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  const localizedLegal = [
    { label: t.footer.legal.privacy, href: legalLinks[0].href },
    { label: t.footer.legal.terms, href: legalLinks[1].href },
    { label: t.footer.legal.sitemap, href: legalLinks[2].href },
  ];

  return (
    <footer id="footer" className="bg-section px-6 py-18 text-primary md:py-24">
      <div className="container grid gap-14 border-t border-primary/12 pt-14 md:grid-cols-[1.35fr_1fr_1fr]">
        <div>
          <a href="/" className="inline-flex rounded-sm focus-ring" aria-label={`${company.name} home`}>
            <Image src={company.logo} alt={company.name} width={134} height={73} className="h-14 w-auto" />
          </a>
          <h2 className="mt-6 font-display text-2xl font-semibold tracking-[-0.035em]">{company.name}</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-charcoal/70">{t.footer.about}</p>
        </div>

        <div>
          <p className="label-text mb-5 text-accent">{t.footer.services}</p>
          <nav className="grid gap-2.5" aria-label="Footer services">
            {services.slice(0, 8).map((service, index) => (
              <a key={service.href} href={service.href} className="footer-link">
                {t.services.items[index]?.title ?? service.title}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="label-text mb-5 text-accent">{t.footer.contact}</p>
          <address className="grid gap-2.5 text-sm not-italic leading-7 text-charcoal/70">
            <a href={company.phoneHref} className="footer-link">
              {company.phone}
            </a>
            <a href={company.emailHref} className="footer-link">
              {company.email}
            </a>
            <span>{company.location}</span>
            <span>{company.hours}</span>
          </address>
          <nav className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/12 hover:border-accent focus-ring"
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mt-14 flex flex-col gap-5 border-t border-primary/10 pt-6 text-sm text-charcoal/55 md:flex-row md:items-center md:justify-between">
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
    </footer>
  );
}
