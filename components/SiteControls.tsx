"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";

type SiteControlsProps = {
  variant?: "hero" | "default";
};

export function SiteControls({ variant = "default" }: SiteControlsProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-10 w-40" aria-hidden="true" />;
  }

  const isDark = (resolvedTheme ?? theme) === "dark";
  const isHero = variant === "hero";

  const shellClass = isHero
    ? "border border-section/20 bg-primary/35 text-section backdrop-blur-md"
    : "border border-primary/12 bg-section text-primary shadow-soft";

  const buttonClass = isHero
    ? "text-section/72 hover:bg-section/10 hover:text-section"
    : "text-primary/80 hover:bg-primary/5 hover:text-primary";

  const activeClass = isHero ? "bg-accent text-section" : "bg-accent text-section";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const setLanguage = (next: Locale) => setLocale(next);

  return (
    <div className={`flex items-center gap-2 rounded-full p-1 ${shellClass}`} role="group" aria-label={t.controls.language}>
      <button
        type="button"
        onClick={toggleTheme}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition focus-ring ${buttonClass}`}
        aria-label={isDark ? t.controls.themeLight : t.controls.themeDark}
        title={isDark ? t.controls.themeLight : t.controls.themeDark}
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" fill="currentColor" />
            <path
              d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      <span className={`h-5 w-px ${isHero ? "bg-section/20" : "bg-primary/12"}`} aria-hidden="true" />

      <div className="flex items-center rounded-full p-0.5">
        {(["en", "fr"] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            className={`rounded-full px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] transition focus-ring ${
              locale === code ? activeClass : buttonClass
            }`}
            aria-pressed={locale === code}
            aria-label={code === "en" ? t.controls.english : t.controls.french}
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}
