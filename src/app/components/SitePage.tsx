import { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowRight, BadgeCheck, Banknote, BriefcaseBusiness,
  Building2, CheckCircle2, ChevronRight, CircleHelp, FileCheck2,
  Globe2, Landmark, MapPin, Phone, Rocket, Scale, ShieldCheck,
  Sparkles, Star, Target, TrendingUp, UserCheck, Users, Zap,
  ArrowUpRight, Award, Blocks, Coins, Compass, Cpu, Fingerprint,
  Gem, Handshake, HeartHandshake, Layers, Lightbulb, NotebookPen,
  Palette, Pickaxe, PiggyBank, Puzzle, ScrollText, Settings2, Timer,
} from "lucide-react";
import { motion } from "motion/react";
import type { SitePage as SitePageData } from "../content/site-pages";
import { sitePages } from "../content/site-pages";
import { ContactCTA } from "./ContactCTA";
import logo from "../../assets/yasa-logo.png";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";
const DARK = "#0D1E28";
const MUTED = "#5A7A87";
const SURFACE = "#F4F8FA";

const iconSet = [
  Building2, Globe2, Landmark, FileCheck2, ShieldCheck,
  BadgeCheck, Banknote, Scale, BriefcaseBusiness, Sparkles,
  MapPin, Rocket, UserCheck, Target, TrendingUp, Zap, Users, Star,
  ArrowUpRight, Award, Blocks, Coins, Compass, Cpu, Fingerprint,
  Gem, Handshake, HeartHandshake, Layers, Lightbulb, NotebookPen,
  Palette, Pickaxe, PiggyBank, Puzzle, ScrollText, Settings2, Timer,
];

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className={`site-section-label ${light ? "is-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

function ImageFrame({ image, title, shape }: {
  image: string; title: string; shape: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: shape % 4 === 2 ? -2 : 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.65, delay: 0.2 }}
      className={`site-image-frame fshape-${shape % 6}`}
    >
      <div className="site-image-dots" />
      <img src={image} alt={title} />
      <div className="site-image-stamp">
        <img src={logo} alt="YASA Corporate Service Provider" />
      </div>
      <div className="site-image-note">
        <BadgeCheck size={18} />
        <span>Expert-led UAE support</span>
      </div>
    </motion.div>
  );
}

/* ──────────── HERO (10 variants) ──────────── */
function Hero({ page, image, variant, index }: {
  page: SitePageData; image: string; variant: number; index: number;
}) {
  const heroClass = `site-page-hero hero-${variant % 10}`;
  const content = (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="site-hero-copy">
      <a href="/" className="site-back-link"><ArrowLeft size={15} /> Back to Home</a>
      <div className="site-eyebrow"><span />{page.category === "service" ? "YASA CSP Business Services" : page.category}</div>
      <h1>{page.title}</h1>
      <p>{page.subtitle}</p>
      <div className="site-hero-actions">
        <a href="#contact" className="site-primary-button">Get Free Quote <ArrowRight size={16} /></a>
        <a href="tel:+971507778009" className="site-secondary-button"><Phone size={16} /> +971 50 7778009</a>
      </div>
    </motion.div>
  );

  if (variant % 10 === 1) return (
    <section className={heroClass} style={{ backgroundImage: `url("${image}")` }}>
      <div className="site-hero-overlay" />
      <div className="site-hero-inner">{content}</div>
    </section>
  );
  if (variant % 10 === 2) {
    const whyItems = page.features.slice(0, 4);
    return (
      <section className={heroClass} style={{ background: `linear-gradient(145deg,${SURFACE} 0%,#eaf3f6 60%,#fff 100%)` }}>
        <div className="site-hero-inner" style={{ gridTemplateColumns: "1.1fr 1fr", gap: 50 }}>
          {content}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ background: "#fff", borderRadius: 16, border: `1px solid ${TEAL}15`, boxShadow: `0 12px 40px ${TEAL}10`, overflow: "hidden" }}>
            <div style={{ background: `linear-gradient(135deg,${TEAL},${BRIGHT_TEAL})`, padding: "18px 24px" }}>
              <h3 style={{ color: "#fff", fontFamily: "var(--font-display)", fontSize: 16, letterSpacing: "-0.3px", margin: 0 }}>Why Choose YASA</h3>
            </div>
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
              {whyItems.length > 0 ? whyItems.map((item, i) => {
                const Icon = iconSet[(i + 7) % iconSet.length];
                return (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${AMBER}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} style={{ color: AMBER }} />
                    </div>
                    <div>
                      <strong style={{ fontSize: 14, color: DARK }}>{item.title}</strong>
                      <p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0", lineHeight: 1.5 }}>{item.description}</p>
                    </div>
                  </div>
                );
              }) : (
                <>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${AMBER}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><ShieldCheck size={16} style={{ color: AMBER }} /></div>
                    <div><strong style={{ fontSize: 14, color: DARK }}>100% Ownership</strong><p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0", lineHeight: 1.5 }}>Full foreign ownership across all UAE jurisdictions.</p></div>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${AMBER}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Timer size={16} style={{ color: AMBER }} /></div>
                    <div><strong style={{ fontSize: 14, color: DARK }}>Fast Setup</strong><p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0", lineHeight: 1.5 }}>Business license in as little as 3-5 working days.</p></div>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${AMBER}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Handshake size={16} style={{ color: AMBER }} /></div>
                    <div><strong style={{ fontSize: 14, color: DARK }}>Dedicated PRO</strong><p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0", lineHeight: 1.5 }}>Personal PRO officer assigned to your case.</p></div>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: `${AMBER}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Banknote size={16} style={{ color: AMBER }} /></div>
                    <div><strong style={{ fontSize: 14, color: DARK }}>Cost-Effective</strong><p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0", lineHeight: 1.5 }}>Competitive packages with no hidden fees.</p></div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
  if (variant % 10 === 3) return (
    <section className={heroClass} style={{ background: `linear-gradient(180deg,#fff 0%,${SURFACE} 100%)`, textAlign: "center", paddingBottom: 0 }}>
      <div style={{ position: "relative", zIndex: 2, width: "min(1320px, calc(100% - 56px))", margin: "0 auto", display: "flex", flexDirection: "column", gap: 54 }}>
        <div className="site-hero-copy" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>{content}</div>
        <div className="site-hero-arch" style={{ border: "10px solid #fff", boxShadow: `0 -5px 50px ${TEAL}25` }}>
          <img src={image} alt={page.title} />
          <span className="site-arch-number">{String(index + 1).padStart(3, "0")}</span>
        </div>
      </div>
    </section>
  );
  if (variant % 10 === 4) return (
    <section className={heroClass} style={{ background: `linear-gradient(135deg,${SURFACE} 0%,#fff 100%)` }}>
      <div className="site-hero-inner" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <ImageFrame image={image} title={page.title} shape={variant} />
        <div className="site-hero-copy" style={{ order: 2 }}>{content}</div>
      </div>
    </section>
  );
  if (variant % 10 === 5) return (
    <section className={heroClass} style={{ background: `linear-gradient(160deg,${SURFACE} 0%,#fff 50%,${SURFACE} 100%)` }}>
      <div className="site-hero-inner" style={{ gridTemplateColumns: "1fr 1fr", gap: 60 }}>
        <div className="site-hero-copy" style={{ maxWidth: 600 }}>{content}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="site-hero-stats-card" style={{ background: TEAL }}>
            {[{ label: "Key Features", num: page.features.length || 6 }, { label: "Benefits", num: page.benefits.length || 6 }, { label: "Steps", num: page.process.length || 4 }].map((stat, i) => (
              <div key={i} className="site-hero-stat-item"><span className="site-hero-stat-num">{stat.num}+</span><span className="site-hero-stat-label">{stat.label}</span></div>
            ))}
          </div>
          <ImageFrame image={image} title={page.title} shape={variant} />
        </div>
      </div>
    </section>
  );
  if (variant % 10 === 6) return (
    <section className={heroClass} style={{ background: `linear-gradient(160deg,${SURFACE} 0%,#eef5f8 50%,${SURFACE} 100%)`, textAlign: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40, maxWidth: 800, margin: "0 auto" }}>
        <div style={{ maxWidth: 700 }}>{content}</div>
        <div className="site-hero-floating-cards">
          {page.features.slice(0, 4).map((f, i) => {
            const Icon = iconSet[(index + i) % iconSet.length];
            return <motion.div key={i} className="site-hero-float-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.12 }}><Icon size={18} /><span>{f.title}</span></motion.div>;
          })}
        </div>
      </div>
    </section>
  );
  if (variant % 10 === 7) return (
    <section className={heroClass} style={{ minHeight: 700 }}>
      <div className="site-hero-bg-image" style={{ backgroundImage: `url("${image}")` }} />
      <div className="site-hero-overlay" style={{ background: `linear-gradient(135deg,${DARK}E0 0%,${TEAL}B0 100%)` }} />
      <div className="site-hero-inner" style={{ color: "#fff" }}>{content}</div>
    </section>
  );
  if (variant % 10 === 8) return (
    <section className={heroClass} style={{ background: SURFACE, minHeight: 520 }}>
      <div className="site-hero-inner" style={{ gridTemplateColumns: "1.2fr 1fr" }}>
        <div className="site-hero-copy">{content}</div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {page.features.slice(0, 6).map((f, i) => {
            const Icon = iconSet[(i + 3) % iconSet.length];
            return <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", background: "#fff", borderRadius: 10, border: `1px solid ${TEAL}20`, boxShadow: `0 4px 14px ${TEAL}10`, fontSize: 13, fontWeight: 600 }}><Icon size={16} style={{ color: TEAL }} />{f.title}</div>;
          })}
        </motion.div>
      </div>
    </section>
  );
  if (variant % 10 === 9) return (
    <section className={heroClass} style={{ background: DARK, color: "#fff", minHeight: 520 }}>
      <div className="site-hero-inner" style={{ display: "block" }}>
        <div className="site-hero-copy" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ color: "#fff" }}>{page.title}</h1>
          <p style={{ color: "#9cbfc7" }}>{page.subtitle}</p>
          <div className="site-hero-actions" style={{ justifyContent: "center" }}><a href="#contact" className="site-primary-button">Get Free Quote <ArrowRight size={16} /></a></div>
        </div>
      </div>
    </section>
  );
  return (
    <section className={heroClass} style={{ background: `linear-gradient(115deg,${SURFACE} 0%,#edf5f7 100%)` }}>
      <div className="site-hero-grid-pattern" />
      <div className="site-hero-inner">{content}<ImageFrame image={image} title={page.title} shape={variant} /></div>
    </section>
  );
}

/* ──────────── OVERVIEW (8 variants) ──────────── */
function Overview({ page, image, variant }: {
  page: SitePageData; image: string; variant: number;
}) {
  const paragraphs = page.content.filter((item) => item.type === "paragraph");
  const heading = page.content.find((item) => item.type === "heading")?.text || `About ${page.title}`;
  const listItems = page.content.filter((item) => item.type === "list");
  if (!paragraphs.length && !listItems.length) return null;

  if (variant % 8 === 3) return (
    <motion.section className="site-overview" style={{ background: SURFACE }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><SectionLabel>Overview</SectionLabel><motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>{heading}</motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 36 }}>
          {paragraphs.slice(0, 3).map((item, i) => <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6, boxShadow: `0 16px 40px ${TEAL}20`, transition: { duration: 0.25 } }} style={{ padding: 24, background: "#fff", borderRadius: 16, border: `1px solid ${TEAL}15`, cursor: "default" }}>
            <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 180, damping: 14 }} style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: `${AMBER}15`, color: AMBER, fontWeight: 800, fontSize: 14, marginBottom: 14 }}>{String(i + 1).padStart(2, "0")}</motion.div>
            <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{item.text}</p>
          </motion.div>)}
          {listItems.length > 0 && <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.45 }} style={{ gridColumn: "1/-1", display: "flex", flexWrap: "wrap", gap: 10 }}>{listItems.slice(0, 8).map((item, i) => <motion.div key={i} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.06, duration: 0.35 }} whileHover={{ scale: 1.05, borderColor: AMBER, transition: { duration: 0.2 } }} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "#fff", borderRadius: 8, border: `1px solid ${TEAL}10`, fontSize: 13, fontWeight: 600, color: MUTED, cursor: "default" }}><CheckCircle2 size={16} style={{ color: AMBER, flexShrink: 0 }} />{item.text}</motion.div>)}</motion.div>}
        </div>
      </div>
    </motion.section>
  );
  if (variant % 8 === 5) return (
    <motion.section className="site-overview" style={{ background: DARK, color: "#fff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><SectionLabel light>Overview</SectionLabel><motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} style={{ color: "#fff" }}>{heading}</motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 36 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, staggerChildren: 0.12 }}>{paragraphs.slice(0, 3).map((item, i) => <motion.p key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.45 }} style={{ color: "#9cbfc7", lineHeight: 1.85, marginBottom: 16 }}>{item.text}</motion.p>)}</motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }} style={{ background: `${AMBER}15`, padding: 32, borderRadius: 20, border: `1px solid ${AMBER}20` }}>
            {listItems.length > 0 ? listItems.slice(0, 8).map((item, i) => <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }} whileHover={{ x: 6, transition: { duration: 0.2 } }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${AMBER}15`, cursor: "default" }}>
              <CheckCircle2 size={18} style={{ color: AMBER, flexShrink: 0 }} /><span style={{ color: "#c7e0e5", fontSize: 14 }}>{item.text}</span>
            </motion.div>) : paragraphs.slice(3, 6).map((item, i) => <motion.p key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }} style={{ color: "#9cbfc7", lineHeight: 1.85, marginBottom: 16 }}>{item.text}</motion.p>)}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
  if (variant % 8 === 7) return (
    <motion.section className="site-overview" style={{ background: SURFACE }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><SectionLabel>Overview</SectionLabel><motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>{heading}</motion.h2>
        <div style={{ display: "flex", gap: 30, marginTop: 36 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, staggerChildren: 0.1 }} style={{ flex: 1.2 }}>{paragraphs.slice(0, 4).map((item, i) => <motion.p key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} whileHover={{ x: 4, transition: { duration: 0.2 } }} style={{ color: MUTED, lineHeight: 1.85, marginBottom: 14, cursor: "default" }}>{item.text}</motion.p>)}</motion.div>
          <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.2, type: "spring", stiffness: 100 }} whileHover={{ y: -6, boxShadow: `0 20px 50px ${TEAL}20`, transition: { duration: 0.25 } }} style={{ flex: 0.8, background: "#fff", borderRadius: 20, padding: 24, boxShadow: `0 8px 30px ${TEAL}10`, cursor: "default" }}>
            <motion.img src={page.images[1] || image} alt="" initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, marginBottom: 16 }} />
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.4 }} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring", stiffness: 200 }} style={{ width: 50, height: 50, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: `${AMBER}15`, color: AMBER, fontWeight: 800, fontSize: 22 }}>{page.features.length || 10}+</motion.div>
              <div><strong style={{ display: "block", fontSize: 14 }}>Expert Insights</strong><span style={{ color: MUTED, fontSize: 12 }}>Years of UAE experience</span></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
  return (
    <motion.section className="site-overview" style={{ background: variant % 8 === 1 ? SURFACE : "#fff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container site-overview-grid" style={variant % 8 === 1 ? { gridTemplateColumns: ".78fr 1.1fr" } : {}}>
        <motion.div className="site-overview-copy" style={variant % 8 === 1 ? { order: 2 } : {}} initial={{ opacity: 0, x: variant % 8 === 1 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
          <SectionLabel>Overview</SectionLabel><h2>{heading}</h2>
          {paragraphs.slice(0, 6).map((item, i) => <motion.p key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }} style={{ cursor: "default" }}>{item.text}</motion.p>)}
          {listItems.length > 0 && <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.4 }} className="site-inline-checks">{listItems.slice(0, 10).map((item, i) => <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.55 + i * 0.05, duration: 0.3 }} whileHover={{ x: 4, color: AMBER, transition: { duration: 0.2 } }}><CheckCircle2 size={17} />{item.text}</motion.div>)}</motion.div>}
        </motion.div>
        <motion.div className="site-overview-visual" initial={{ opacity: 0, x: variant % 8 === 1 ? -30 : 30, scale: 0.96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <motion.img src={page.images[1] || image} alt="" initial={{ scale: 1.08 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.3 }} style={variant % 8 === 1 ? { borderRadius: "0 100px 0 100px" } : {}} />
          <motion.div className="site-overview-metric" style={{ background: TEAL }} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 120 }}>
            <motion.strong initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, type: "spring", stiffness: 200 }}>{page.features.length || page.benefits.length || 10}+</motion.strong>
            <span>specialist insights</span>
          </motion.div>
          <motion.div className="site-overview-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} style={{ transformOrigin: "left" }} />
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ──────────── FEATURES (10 variants) ──────────── */
function Features({ page, variant, index }: {
  page: SitePageData; variant: number; index: number;
}) {
  if (!page.features.length) return null;
  const v = variant % 10;

  if (v === 0) return (
    <section className="site-features" style={{ background: SURFACE }}>
      <div className="site-page-container">
        <div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Everything You Need to Know</h2><p>Practical details for your specific service.</p></div>
        <div className="site-feature-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + index) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ y: -6, boxShadow: `0 16px 40px ${TEAL}15` }} className="site-feature-card" style={{ borderRadius: 15, border: `1px solid ${TEAL}20`, position: "relative", overflow: "hidden" }}>
              <motion.div className="feature-border-glow" style={{ position: "absolute", inset: -1, borderRadius: 15, background: `conic-gradient(from 0deg, ${AMBER}, ${TEAL}, ${AMBER})`, opacity: 0, zIndex: 0, transition: "opacity 0.3s" }} />
              <div style={{ position: "relative", zIndex: 1, background: "#fff", borderRadius: 14, margin: 1, height: "calc(100% - 2px)" }}>
                <div className="site-feature-index" style={{ color: `${TEAL}15` }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="site-feature-icon" style={{ background: `${AMBER}15`, color: AMBER }}><Icon size={21} /></div>
                <div className="site-feature-content"><h3>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3><p>{feature.description}</p>{feature.links?.length > 0 && <div className="site-feature-links">{feature.links.map((link) => <a key={link.href} href={link.href} style={{ color: TEAL, background: `${TEAL}10` }}>{link.label} <ChevronRight size={12} /></a>)}</div>}</div>
              </div>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 1) return (
    <section className="site-features" style={{ background: "#fff" }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Everything You Need to Know</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + 5) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ x: 6 }} className="site-feature-card" style={{ display: "grid", gridTemplateColumns: "58px 1fr", gap: 18, alignItems: "start", borderRadius: "4px 22px 4px 22px" }}>
              <div className="site-feature-icon" style={{ background: `${AMBER}15`, color: AMBER, margin: 0 }}><Icon size={21} /></div>
              <div><h3>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3><p>{feature.description}</p></div>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 2) return (
    <section className="site-features" style={{ background: SURFACE }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Service Framework</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 16 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + 7) % iconSet.length];
            const isFeatured = i === 0 || i === 4;
            return <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ y: -4 }} style={{ gridColumn: isFeatured ? "span 8" : "span 4", minHeight: isFeatured ? 180 : 240, padding: 28, borderRadius: 15, background: isFeatured ? TEAL : "#fff", border: `1px solid ${TEAL}15`, color: isFeatured ? "#fff" : DARK }}>
              <div className="site-feature-icon" style={{ background: isFeatured ? `${AMBER}20` : `${AMBER}15`, color: isFeatured ? "#f4bd62" : AMBER, marginBottom: 20 }}><Icon size={21} /></div>
              <h3>{feature.href ? <a href={feature.href} style={{ color: isFeatured ? "#fff" : "inherit" }}>{feature.title}</a> : feature.title}</h3>
              <p style={{ color: isFeatured ? "#c7e0e5" : MUTED, fontSize: 14, lineHeight: 1.72, maxWidth: isFeatured ? 600 : "none" }}>{feature.description}</p>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 3) return (
    <section className="site-features" style={{ background: "#fff" }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Service Details</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, border: `1px solid ${TEAL}20`, borderRadius: 18, overflow: "hidden" }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + index + 2) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ y: -2 }} style={{ padding: 28, minHeight: 220, borderRight: `1px solid ${TEAL}15`, borderBottom: `1px solid ${TEAL}15`, background: "#fff" }}>
              <div className="site-feature-icon" style={{ background: `${AMBER}10`, color: AMBER }}><Icon size={21} /></div>
              <h3>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.72 }}>{feature.description}</p>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 4) return (
    <section className="site-features" style={{ background: SURFACE }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Essential Details</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + 4) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ x: 4 }} style={{ padding: 28, borderRadius: 20, background: "#fff", borderLeft: `4px solid ${AMBER}` }}>
              <div className="site-feature-icon" style={{ background: `${AMBER}15`, color: AMBER }}><Icon size={21} /></div>
              <h3>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3><p>{feature.description}</p>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 5) return (
    <section className="site-features" style={{ background: "#fff" }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>What's Included</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + 6) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ y: -4 }} style={{ padding: 28, borderRadius: 20, background: `linear-gradient(135deg,#fff 0%,${SURFACE} 100%)`, border: `1px solid ${TEAL}15` }}>
              <div className="site-feature-icon" style={{ background: TEAL, color: "#fff", borderRadius: "50%" }}><Icon size={21} /></div>
              <h3>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3><p>{feature.description}</p>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 6) return (
    <section className="site-features" style={{ background: SURFACE }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Full Breakdown</h2></div>
        <div style={{ display: "grid", gap: 0, border: `1px solid ${TEAL}20`, borderRadius: 18, overflow: "hidden" }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + 8) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ x: 8 }} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 20, alignItems: "center", padding: "24px 28px", borderBottom: `1px solid ${TEAL}10`, background: "#fff" }}>
              <div className="site-feature-index" style={{ position: "static", color: AMBER, fontSize: 24 }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "center" }}>
                <div className="site-feature-icon" style={{ background: `${AMBER}10`, color: AMBER, margin: 0 }}><Icon size={21} /></div>
                <div><h3 style={{ marginBottom: 4 }}>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3><p style={{ margin: 0, color: MUTED, fontSize: 14 }}>{feature.description}</p></div>
              </div>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 7) return (
    <section className="site-features" style={{ background: DARK }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel light>Key Features</SectionLabel><h2 style={{ color: "#fff" }}>Service Highlights</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + 2) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ y: -6 }} style={{ padding: 28, borderRadius: 15, background: DARK, border: `1px solid ${TEAL}30`, color: "#fff" }}>
              <div className="site-feature-icon" style={{ background: `${AMBER}20`, color: "#f4bd62" }}><Icon size={21} /></div>
              <h3 style={{ color: "#fff" }}>{feature.href ? <a href={feature.href} style={{ color: "#fff" }}>{feature.title}</a> : feature.title}</h3>
              <p style={{ color: "#9cbfc7", fontSize: 14, lineHeight: 1.72 }}>{feature.description}</p>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  if (v === 8) return (
    <section className="site-features" style={{ background: "#fff" }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Service Capabilities</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i + index) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ y: -4 }} style={{ textAlign: "center", padding: 36, borderRadius: 16, background: SURFACE, border: `1px solid ${TEAL}10` }}>
              <div style={{ width: 56, height: 56, margin: "0 auto 18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: `${TEAL}10` }}><Icon size={26} style={{ color: TEAL }} /></div>
              <h3>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.72, margin: 0 }}>{feature.description}</p>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
  return (
    <section className="site-features" style={{ background: SURFACE }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Key Features</SectionLabel><h2>Everything Included</h2></div>
        <div className="site-feature-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {page.features.map((feature, i) => {
            const Icon = iconSet[(i * 3 + index) % iconSet.length];
            return <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.45 }} whileHover={{ y: -6 }} className="site-feature-card" style={{ borderRadius: 15, border: `1px solid ${TEAL}20` }}>
              <div className="site-feature-index" style={{ color: `${TEAL}15` }}>{String(i + 1).padStart(2, "0")}</div>
              <div className="site-feature-icon" style={{ background: `${AMBER}15`, color: AMBER }}><Icon size={21} /></div>
              <div className="site-feature-content"><h3>{feature.href ? <a href={feature.href}>{feature.title}</a> : feature.title}</h3><p>{feature.description}</p></div>
            </motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────── BENEFITS (8 variants) ──────────── */
function Benefits({ page, image, variant }: {
  page: SitePageData; image: string; variant: number;
}) {
  if (!page.benefits.length) return null;
  const v = variant % 8;

  if (v === 3) return (
    <motion.section style={{ background: "#fff", padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><SectionLabel>Business Value</SectionLabel><h2>Why This Route Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36 }}>
          {page.benefits.map((benefit, i) => <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }} whileHover={{ x: 4, borderColor: AMBER, transition: { duration: 0.2 } }} style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: SURFACE, borderRadius: 12, border: `1px solid ${TEAL}10`, cursor: "default" }}>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 200 }} style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: `${AMBER}15`, color: AMBER, fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{i + 1}</motion.div>
            <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.5 }}>{benefit}</span>
          </motion.div>)}
        </div>
      </div>
    </motion.section>
  );
  if (v === 5) return (
    <motion.section style={{ background: DARK, color: "#fff", padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><SectionLabel light>Business Value</SectionLabel><h2 style={{ color: "#fff" }}>Why This Route Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 36 }}>
          {page.benefits.map((benefit, i) => <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.45 }} whileHover={{ y: -4, borderColor: AMBER, transition: { duration: 0.2 } }} style={{ padding: 24, background: `${AMBER}10`, borderRadius: 14, border: `1px solid ${AMBER}15`, cursor: "default" }}>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 200 }} style={{ width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: AMBER, color: "#fff", fontWeight: 800, fontSize: 11, marginBottom: 12 }}>{i + 1}</motion.div>
            <p style={{ color: "#9cbfc7", margin: 0, fontSize: 14, lineHeight: 1.7 }}>{benefit}</p>
          </motion.div>)}
        </div>
      </div>
    </motion.section>
  );
  if (v === 7) return (
    <motion.section style={{ background: SURFACE, padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><SectionLabel>Business Value</SectionLabel><h2>Why This Route Works</h2>
        <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
          {page.benefits.map((benefit, i) => {
            const Icon = iconSet[(i + 5) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }} whileHover={{ y: -4, boxShadow: `0 12px 30px ${TEAL}12`, transition: { duration: 0.2 } }} style={{ flex: "1 1 280px", display: "flex", alignItems: "flex-start", gap: 14, padding: 20, background: "#fff", borderRadius: 12, border: `1px solid ${TEAL}15`, cursor: "default" }}>
              <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 180 }}><Icon size={20} style={{ color: AMBER, flexShrink: 0, marginTop: 2 }} /></motion.div>
              <span style={{ color: MUTED, fontSize: 14, lineHeight: 1.6 }}>{benefit}</span>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
  return (
    <motion.section className="site-benefits" style={{ background: v === 2 ? SURFACE : "#fff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container site-benefits-grid" style={v === 1 ? { gridTemplateColumns: "1.05fr .9fr" } : {}}>
        <motion.div className="site-benefit-image" style={v === 1 ? { order: 2 } : {}} initial={{ opacity: 0, x: v === 1 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: v === 1 ? "20px 160px 20px 20px" : v === 2 ? "50%" : 16 }}>
            <motion.img src={page.images[2] || image} alt="" initial={{ scale: 1.12 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} style={{ width: "100%", height: v === 2 ? 500 : 560, objectFit: "cover", display: "block" }} />
            {/* Animated overlay gradient */}
            <motion.div whileHover={{ opacity: 0.15 }} style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${TEAL}, transparent)`, opacity: 0.08, transition: "opacity 0.3s" }} />
          </div>
          <motion.div className="site-benefit-image-card" initial={{ opacity: 0, x: -20, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <ShieldCheck size={25} />
            <strong>Built around your goals</strong>
            <span>Clear advice, documentation, and execution.</span>
          </motion.div>
        </motion.div>
        <motion.div className="site-benefit-content" style={v === 1 ? { order: 1 } : {}} initial={{ opacity: 0, x: v === 1 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}>
          <SectionLabel>Business Value</SectionLabel>
          <h2>Why This Route Works</h2>
          <div className="site-benefit-list">
            {page.benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: v === 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }} whileHover={{ x: 6, transition: { duration: 0.2 } }}>
                <motion.span
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08, type: "spring", stiffness: 200, damping: 12 }}
                >{i + 1}</motion.span>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ──────────── LIFECYCLE (10 variants) ──────────── */
function Lifecycle({ page, variant }: {
  page: SitePageData; variant: number;
}) {
  const steps = page.process.length ? page.process : page.features.slice(0, 4).map((f, i) => ({ step: i + 1, title: f.title, description: f.description }));
  if (!steps.length) return null;
  const v = variant % 10;

  if (v === 1) return (
    <motion.section className="site-lifecycle" style={{ background: "#fff", color: DARK }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Service Lifecycle</SectionLabel><h2 style={{ color: DARK }}>From First Conversation to Completion</h2></div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900, margin: "0 auto", gap: 0 }}>
          {steps.map((step, i) => {
            const Icon = iconSet[(i + 3) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5, type: "spring", stiffness: 100 }} whileHover={{ x: 6, transition: { duration: 0.2 } }} style={{ padding: "0 0 34px 85px", minHeight: 120, position: "relative", cursor: "default" }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 180 }} style={{ position: "absolute", left: 0, top: 10, width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: AMBER, color: "#fff", border: "5px solid #fff", zIndex: 2 }}><Icon size={18} /></motion.div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.12, duration: 0.3 }} style={{ color: AMBER, fontWeight: 800, fontSize: 22 }}>{String(step.step).padStart(2, "0")}</motion.span>
              <h3>{step.title}</h3><p style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.7 }}>{step.description}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
  if (v === 3) return (
    <motion.section style={{ background: SURFACE, color: DARK, padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Service Lifecycle</SectionLabel><h2>Your Journey</h2></div>
        <div className="site-timeline" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          <motion.div className="site-timeline-track" style={{ background: `linear-gradient(90deg,${AMBER},${BRIGHT_TEAL})` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          {steps.map((step, i) => {
            const Icon = iconSet[(i + 4) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} style={{ paddingTop: 60, position: "relative", cursor: "default" }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.15, type: "spring", stiffness: 200 }} style={{ position: "absolute", top: 0, left: 0, width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: TEAL, color: "#fff", border: `5px solid ${SURFACE}`, zIndex: 2 }}><Icon size={18} /></motion.div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.3 }} style={{ color: AMBER, fontWeight: 800, fontSize: 30 }}>{String(step.step).padStart(2, "0")}</motion.span>
              <h3>{step.title}</h3><p style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.7 }}>{step.description}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
  if (v === 5) return (
    <motion.section style={{ background: DARK, color: "#fff", padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel light>Service Lifecycle</SectionLabel><h2 style={{ color: "#fff" }}>Service Delivery Timeline</h2></div>
        <div className="site-timeline" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 26 }}>
          <motion.div className="site-timeline-track" style={{ background: `linear-gradient(90deg,${AMBER},${BRIGHT_TEAL},${AMBER})` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          {steps.map((step, i) => {
            const Icon = iconSet[(i * 2 + 5) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} style={{ paddingTop: 60, position: "relative", cursor: "default" }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.15, type: "spring", stiffness: 200 }} style={{ position: "absolute", top: 0, left: 0, width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: AMBER, color: "#fff", border: `5px solid ${DARK}`, zIndex: 2 }}><Icon size={18} /></motion.div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.3 }} style={{ color: "#f4bd62", fontWeight: 800, fontSize: 30 }}>{String(step.step).padStart(2, "0")}</motion.span>
              <h3>{step.title}</h3><p style={{ color: "#9cbfc7", fontSize: 13.5, lineHeight: 1.7 }}>{step.description}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
  if (v === 6) return (
    <motion.section style={{ background: "#fff", color: DARK, padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Service Lifecycle</SectionLabel><h2>How It Works</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 30 }}>
          {steps.map((step, i) => {
            const Icon = iconSet[(i + 6) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6, boxShadow: `0 16px 40px ${TEAL}18`, transition: { duration: 0.25 } }} style={{ padding: 28, border: `1px solid ${TEAL}15`, borderRadius: 16, cursor: "default" }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 200 }} style={{ width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: `${AMBER}15`, color: AMBER }}><Icon size={18} /></motion.div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }} style={{ color: AMBER, fontWeight: 800, fontSize: 22, marginTop: 12, display: "block" }}>{String(step.step).padStart(2, "0")}</motion.span>
              <h3>{step.title}</h3><p style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.7 }}>{step.description}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
  if (v === 7) return (
    <motion.section style={{ background: TEAL, color: "#fff", padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel light>Service Lifecycle</SectionLabel><h2 style={{ color: "#fff" }}>Step by Step</h2></div>
        <div className="site-timeline" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 26 }}>
          {steps.map((step, i) => {
            const Icon = iconSet[(i + 7) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} style={{ paddingTop: 60, position: "relative", cursor: "default" }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.15, type: "spring", stiffness: 200 }} style={{ position: "absolute", top: 0, left: 0, width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: AMBER, color: "#fff", border: `5px solid ${TEAL}`, zIndex: 2 }}><Icon size={18} /></motion.div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.3 }} style={{ color: "#f4bd62", fontWeight: 800, fontSize: 30 }}>{String(step.step).padStart(2, "0")}</motion.span>
              <h3>{step.title}</h3><p style={{ color: "#c7e0e5", fontSize: 13.5, lineHeight: 1.7 }}>{step.description}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
  if (v === 8) return (
    <motion.section style={{ background: DARK, color: "#fff", padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel light>Service Lifecycle</SectionLabel><h2 style={{ color: "#fff" }}>Delivery Process</h2></div>
        <div className="site-timeline" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 26 }}>
          <motion.div className="site-timeline-track" style={{ background: `linear-gradient(90deg,${AMBER},${BRIGHT_TEAL})` }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          {steps.map((step, i) => {
            const Icon = iconSet[(i * 3 + 4) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -4, transition: { duration: 0.2 } }} style={{ paddingTop: 60, position: "relative", cursor: "default" }}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.15, type: "spring", stiffness: 200 }} style={{ position: "absolute", top: 0, left: 0, width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: TEAL, color: "#fff", border: `5px solid ${DARK}`, zIndex: 2 }}><Icon size={18} /></motion.div>
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, duration: 0.3 }} style={{ color: "#f4bd62", fontWeight: 800, fontSize: 30 }}>{String(step.step).padStart(2, "0")}</motion.span>
              <h3 style={{ color: "#fff" }}>{step.title}</h3><p style={{ color: "#9cbfc7", fontSize: 13.5, lineHeight: 1.7 }}>{step.description}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
  return (
    <motion.section className="site-lifecycle" style={{ background: v === 2 ? "#fff" : v === 4 ? SURFACE : DARK, color: v === 2 || v === 4 ? DARK : "#fff", position: "relative", overflow: "hidden" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      {/* Floating decorative dots */}
      <motion.div animate={{ y: [0, -20, 0], opacity: [0.03, 0.08, 0.03] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: 40, right: 80, width: 200, height: 200, borderRadius: "50%", border: `1px solid ${v === 2 || v === 4 ? TEAL : "rgba(255,255,255,0.06)"}`, pointerEvents: "none" }} />
      <div className="site-page-container">
        <div className="site-section-heading"><SectionLabel light={!(v === 2 || v === 4)}>Service Lifecycle</SectionLabel><h2 style={{ color: (v === 2 || v === 4) ? DARK : "#fff" }}>From First Conversation to Completion</h2></div>
        <div className="site-timeline" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 26, position: "relative" }}>
          <motion.div className="site-timeline-track" style={{ background: `linear-gradient(90deg,${AMBER},${BRIGHT_TEAL})`, opacity: v === 4 ? 0.6 : 0.5 }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} />
          {steps.map((step, i) => {
            const Icon = iconSet[(i + 3) % iconSet.length];
            return <motion.div key={i} initial={{ opacity: 0, y: 50, scale: 0.85 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7, type: "spring", stiffness: 80, damping: 14 }} whileHover={{ y: -10, scale: 1.03, boxShadow: `0 20px 50px rgba(26,107,124,0.2)`, transition: { duration: 0.35, type: "spring", stiffness: 200 } }} style={{ paddingTop: 60, position: "relative", cursor: "default" }}>
              <motion.div className="site-timeline-marker" style={{ background: v === 2 ? AMBER : TEAL, borderColor: v === 2 ? "#fff" : v === 4 ? SURFACE : DARK }} initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 180, damping: 10 }} whileHover={{ scale: 1.2, boxShadow: `0 0 0 8px rgba(26,107,124,0.15)` }}><Icon size={18} /></motion.div>
              <motion.span className="site-timeline-number" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 150 }}>{String(step.step).padStart(2, "0")}</motion.span>
              <h3>{step.title}</h3><p style={{ color: v === 2 || v === 4 ? MUTED : "#9cbfc7", fontSize: 13.5, lineHeight: 1.7 }}>{step.description}</p>
            </motion.div>;
          })}
        </div>
      </div>
    </motion.section>
  );
}

/* ──────────── FAQ (6 variants) ──────────── */
function FaqItem({ faq, index, variant }: { faq: { question: string; answer: string }; index: number; variant: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
      onClick={() => setOpen(!open)}
      style={{
        cursor: "pointer",
        background: variant === 3 || variant === 5 ? "#fff" : variant === 0 ? "#fff" : SURFACE,
        border: `1px solid ${open ? `${AMBER}40` : `${TEAL}13`}`,
        borderRadius: 13,
        padding: "22px 24px",
        transition: "border-color 0.25s, box-shadow 0.25s",
        boxShadow: open ? `0 8px 24px ${TEAL}10` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + index * 0.07, type: "spring", stiffness: 200 }}
          style={{ color: AMBER, fontWeight: 800, fontSize: 20, minWidth: 32 }}
        >{String(index + 1).padStart(2, "0")}</motion.span>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: "var(--font-display)", color: "#0D1E28", fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>{faq.question}</h3>
        </div>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.72, margin: "14px 0 0 47px", paddingTop: 14, borderTop: `1px solid ${TEAL}10` }}>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function FAQs({ page, variant }: { page: SitePageData; variant: number }) {
  if (!page.faqs.length) return null;
  const v = variant % 6;
  if (v === 3) return (
    <motion.section style={{ background: "#fff", padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container"><div className="site-section-heading"><SectionLabel>Knowledge Desk</SectionLabel><h2>Questions Before You Begin</h2></div>
        <div className="site-faq-list" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {page.faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} variant={v} />)}
        </div>
      </div>
    </motion.section>
  );
  if (v === 4) return (
    <motion.section style={{ background: SURFACE, padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container" style={{ display: "grid", gridTemplateColumns: "1fr .55fr", gap: 75, alignItems: "start" }}>
        <div className="site-faq-list">{page.faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} variant={v} />)}</div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }} style={{ position: "sticky", top: 135 }}>
          <SectionLabel>Knowledge Desk</SectionLabel><h2>Questions Before You Begin</h2>
          <p style={{ color: MUTED, lineHeight: 1.7 }}>Answers prepared for this service.</p>
          <motion.div initial={{ scale: 0, rotate: -90 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring", stiffness: 120 }} style={{ width: 90, height: 90, marginTop: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: TEAL, color: "#fff", boxShadow: `18px 18px 0 ${AMBER}25` }}><CircleHelp size={38} /></motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
  if (v === 5) return (
    <motion.section style={{ background: SURFACE, padding: "96px 0" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container" style={{ textAlign: "center" }}><div style={{ maxWidth: 650, margin: "0 auto 40px" }}><SectionLabel>Knowledge Desk</SectionLabel><h2>Questions Before You Begin</h2></div>
        <div className="site-faq-list" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 16, textAlign: "left" }}>
          {page.faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} variant={v} />)}
        </div>
      </div>
    </motion.section>
  );
  return (
    <motion.section className="site-faqs" style={{ background: v === 1 ? "#fff" : SURFACE }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
      <div className="site-page-container site-faq-layout" style={v === 1 ? { gridTemplateColumns: "1fr" } : {}}>
        <motion.div className="site-faq-intro" style={v === 1 ? { textAlign: "center", maxWidth: 650, margin: "0 auto" } : {}} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
          <SectionLabel>Knowledge Desk</SectionLabel><h2>Questions Before You Begin</h2>
          <p>Answers prepared from the source material for this exact service.</p>
          <motion.div className="site-faq-orb" style={{ margin: v === 1 ? "28px auto" : "30px 0 0" }} initial={{ scale: 0, rotate: -90 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring", stiffness: 120 }}><CircleHelp size={38} /></motion.div>
        </motion.div>
        <div className="site-faq-list" style={v === 1 ? { gridTemplateColumns: "1fr 1fr" } : {}}>
          {page.faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} variant={v} />)}
        </div>
      </div>
    </motion.section>
  );
}

/* ──────────── STATS BAR ──────────── */
function StatsBar({ page }: { page: SitePageData }) {
  const stats = [
    { label: "Features", value: page.features.length || 6, icon: Target },
    { label: "Benefits", value: page.benefits.length || 6, icon: TrendingUp },
    { label: "Steps", value: page.process.length || 4, icon: Zap },
    { label: "FAQs", value: page.faqs.length || 3, icon: Users },
  ];
  return <section style={{ background: TEAL, padding: "48px 0" }}>
    <div className="site-page-container"><div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
      {stats.map((stat, i) => { const Icon = stat.icon; return <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center", color: "#fff" }}>
        <Icon size={22} style={{ color: "#f4bd62", marginBottom: 8 }} />
        <strong style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "#f4bd62", marginBottom: 4 }}>{stat.value}+</strong>
        <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", opacity: 0.8 }}>{stat.label}</span>
      </motion.div>;})}
    </div></div>
  </section>;
}

/* ──────────── PROCESS CARDS ──────────── */
function ProcessCards({ page, variant }: {
  page: SitePageData; variant: number;
}) {
  const steps = page.process.length ? page.process : page.features.slice(0, 4).map((f, i) => ({ step: i + 1, title: f.title, description: f.description }));
  if (!steps.length) return null;
  const v = variant % 4;
  return <section style={{ background: v === 2 ? DARK : "#fff", padding: "96px 0" }}>
    <div className="site-page-container">
      <div className="site-section-heading"><SectionLabel light={v === 2}>Our Process</SectionLabel><h2 style={{ color: v === 2 ? "#fff" : DARK }}>How We Deliver</h2></div>
      <div className="site-process-grid" style={{ display: "grid", gridTemplateColumns: v === 1 ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: v === 3 ? 0 : 20, border: v === 3 ? `1px solid ${TEAL}20` : "none", borderRadius: v === 3 ? 18 : 0, overflow: v === 3 ? "hidden" : "visible" }}>
        {steps.map((step, i) => {
          const Icon = iconSet[(i + 5) % iconSet.length];
          return <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ textAlign: v === 1 ? "left" : "center", padding: "32px 24px", border: v === 3 ? "none" : `1px solid ${TEAL}15`, borderRadius: v === 3 ? 0 : 16, background: v === 2 ? DARK : "#fff", color: v === 2 ? "#fff" : DARK }}>
            <div className="site-process-card-icon" style={{ margin: v === 1 ? "0 0 16px" : "0 auto 16px", background: v === 2 ? `${AMBER}25` : `${AMBER}15`, color: v === 2 ? "#f4bd62" : AMBER }}><Icon size={24} /></div>
            <div className="site-process-card-num">{String(step.step).padStart(2, "0")}</div>
            <h3>{step.title}</h3><p style={{ color: v === 2 ? "#9cbfc7" : MUTED, fontSize: 13, lineHeight: 1.7 }}>{step.description}</p>
          </motion.div>;
        })}
      </div>
    </div>
  </section>;
}

/* ──────────── MAIN SITE PAGE ──────────── */
export function SitePage({ page }: { page: SitePageData }) {
  const pageIndex = Math.max(0, sitePages.findIndex((item) => item.route === page.route));
  const hash = (n: number) => ((pageIndex * 31 + n * 17) % 9973) / 9973;

  const heroVariant = Math.floor(hash(0) * 10);
  const overviewVariant = Math.floor(hash(1) * 8);
  const featureVariant = Math.floor(hash(2) * 10);
  const benefitVariant = Math.floor(hash(3) * 8);
  const lifecycleVariant = Math.floor(hash(4) * 10);
  const faqVariant = Math.floor(hash(5) * 6);
  const sectionOrder = Math.floor(hash(6) * 6);
  const processVariant = Math.floor(hash(7) * 4);
  const showStats = hash(8) > 0.5;
  const showProcessCards = hash(9) > 0.5;

  const fallbackImages = [
    "photo-1486406146926-c627a92ad1ab", "photo-1522071820081-009f0129c71c", "photo-1497366216548-37526070297c",
    "photo-1556761175-b413da4baf72", "photo-1504384308090-c894fdcc538d", "photo-1521737711867-e1b9a5abb9e4",
    "photo-1573164713714-d95e436ab8d6", "photo-1560472355-536de5c205b5", "photo-1454165804606-c3d57bc86b40",
    "photo-1517245386807-bb43f82c33c4", "photo-1552664730-d307ca884978", "photo-1520607162513-77705c0f0d4a",
    "photo-1434030216411-0b793f4b4173", "photo-1531482615713-2afd69097998", "photo-1521791136066-4c09eef7ff0b",
    "photo-1519389950473-47ba0277781c", "photo-1517248135467-4c7edcad34c4", "photo-1556761175-5973dc0f32e7",
    "photo-1542744173-05336f2847b4", "photo-1507003211169-0a1dd7228f2d", "photo-1507537297725-24a1c029d3ca",
    "photo-1523240795612-9a054b0db644", "photo-1553877522-43269d4ea984", "photo-1460925895917-afdab827c52f",
  ];
  const fallbackId = fallbackImages[Math.floor(hash(10) * fallbackImages.length)];
  const heroImage = page.heroImage || page.images[0] || `https://images.unsplash.com/${fallbackId}?w=1600&h=900&fit=crop&auto=format`;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${page.title} | YASA CSP`;
  }, [page.route, page.title]);

  const overview = <Overview page={page} image={heroImage} variant={overviewVariant} />;
  const features = <Features page={page} variant={featureVariant} index={pageIndex} />;
  const benefits = <Benefits page={page} image={heroImage} variant={benefitVariant} />;
  const lifecycle = <Lifecycle page={page} variant={lifecycleVariant} />;

  const contentOrders = [
    [overview, features, lifecycle, benefits],
    [features, overview, benefits, lifecycle],
    [overview, lifecycle, features, benefits],
    [lifecycle, overview, features, benefits],
    [features, lifecycle, overview, benefits],
    [lifecycle, features, benefits, overview],
  ];

  return (
    <div className="site-page" data-layout-id={pageIndex}>
      <Hero page={page} image={heroImage} variant={heroVariant} index={pageIndex} />
      {showStats && <StatsBar page={page} />}
      {contentOrders[sectionOrder].map((section, i) => <div key={i}>{section}</div>)}
      {showProcessCards && page.process.length > 0 && <ProcessCards page={page} variant={processVariant} />}
      <FAQs page={page} variant={faqVariant} />

      <motion.section className="site-page-cta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55 }} style={{ position: "relative", overflow: "hidden" }}>
        {/* Animated gradient background */}
        <motion.div animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, ${TEAL} 0%, ${BRIGHT_TEAL} 40%, ${TEAL} 80%, ${BRIGHT_TEAL} 100%)`, backgroundSize: "200% 100%", zIndex: 0 }} />
        {/* Floating bubbles */}
        <motion.div animate={{ y: [0, -15, 0], x: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: -30, right: 60, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.06)", zIndex: 0 }} />
        <motion.div animate={{ y: [0, 10, 0], x: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} style={{ position: "absolute", bottom: -20, left: 100, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.04)", zIndex: 0 }} />
        <div className="site-page-container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, x: -40, rotateY: -8 }} whileInView={{ opacity: 1, x: 0, rotateY: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, type: "spring", stiffness: 80 }}>
            <motion.img src={logo} alt="YASA Corporate Service Provider" initial={{ opacity: 0, scale: 0.5, rotate: -10 }} whileInView={{ opacity: 0.75, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, type: "spring", stiffness: 150, damping: 12 }} whileHover={{ scale: 1.08, rotate: 3 }} style={{ width: 75, height: "auto", filter: "brightness(0) invert(1)", opacity: 0.75, marginBottom: 17 }} />
            <h2>Ready to discuss {page.title}?</h2>
            <p>Speak with a YASA consultant for a free, no-obligation assessment.</p>
          </motion.div>
          <motion.a href="#contact" className="site-primary-button" initial={{ opacity: 0, x: 40, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 80 }} whileHover={{ scale: 1.06, boxShadow: "0 14px 40px rgba(26,107,124,0.5)", y: -2 }} whileTap={{ scale: 0.95 }}>Start Your Request <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ChevronRight size={17} /></motion.span></motion.a>
        </div>
      </motion.section>
      <ContactCTA />

      <style>{`
        .site-page { min-height:100vh; overflow:hidden; color:${DARK}; }
        .site-page-container { width:min(1320px, calc(100% - 56px)); margin:0 auto; }
        .site-section-label { display:inline-flex; align-items:center; gap:8px; color:${AMBER}; font-size:12px; letter-spacing:.16em; text-transform:uppercase; font-weight:800; margin-bottom:16px; }
        .site-section-label span { width:7px; height:7px; border-radius:50%; background:${AMBER}; box-shadow:0 0 0 5px rgba(26,107,124,.1); }
        .site-section-label.is-light { color:#f4bd62; }
        .site-page h2 { font-family:var(--font-display); font-size:clamp(1.85rem,3vw,2.7rem); line-height:1.18; font-weight:800; letter-spacing:-.5px; }
        .site-page-hero { position:relative; min-height:600px; padding:155px 0 80px; display:flex; align-items:center; }
        .site-hero-inner { position:relative; z-index:2; width:min(1320px, calc(100% - 56px)); margin:0 auto; display:grid; grid-template-columns:minmax(0,1fr) minmax(320px,.78fr); gap:60px; align-items:center; }
        .site-hero-copy { max-width:700px; }
        .site-back-link { display:inline-flex; align-items:center; gap:7px; color:${TEAL}; font-size:13px; font-weight:700; text-decoration:none; margin-bottom:16px; }
        .site-eyebrow { display:inline-flex; align-items:center; gap:8px; padding:6px 16px; border-radius:24px; border:1px solid rgba(26,107,124,.3); background:rgba(255,255,255,.76); color:${AMBER}; font-size:11px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; margin-bottom:16px; }
        .site-eyebrow span { width:6px; height:6px; border-radius:50%; background:${AMBER}; }
        .site-hero-copy h1 { font-family:var(--font-display); font-size:clamp(2rem,4vw,3.5rem); line-height:1.1; font-weight:800; letter-spacing:-1.5px; margin-bottom:20px; }
        .site-hero-copy > p { color:#3D6570; font-size:clamp(1rem,1.55vw,1.15rem); line-height:1.8; max-width:690px; }
        .site-hero-actions { display:flex; flex-wrap:wrap; gap:14px; margin-top:34px; }
        .site-primary-button,.site-secondary-button { display:inline-flex; align-items:center; gap:9px; padding:13px 22px; border-radius:8px; text-decoration:none; font-weight:700; }
        .site-primary-button { background:${AMBER}; color:#fff; box-shadow:0 6px 22px rgba(26,107,124,.28); }
        .site-secondary-button { color:${TEAL}; border:1.5px solid rgba(26,107,124,.32); background:rgba(255,255,255,.8); }
        .site-hero-grid-pattern { position:absolute; inset:0; opacity:.35; background-image:radial-gradient(rgba(26,107,124,.22) 1px,transparent 1px); background-size:28px 28px; mask-image:linear-gradient(to right,#000,transparent 75%); }
        .site-image-frame { position:relative; height:470px; padding:14px; background:#fff; border:1px solid rgba(26,107,124,.14); box-shadow:0 24px 70px rgba(26,107,124,.17); }
        .site-image-frame > img { width:100%;height:100%;object-fit:cover; }
        .fshape-0 { border-radius:28px 6px 28px 6px; }
        .fshape-2 { border-radius:50% 50% 18px 18px; height:510px; }
        .fshape-3 { border-radius:80px 12px 80px 12px; }
        .fshape-4 { border-radius:12px 50% 12px 50%; }
        .fshape-5 { border-radius:0 50px 0 50px; }
        .site-image-dots { position:absolute; width:110px;height:110px;right:-28px;top:-28px;background-image:radial-gradient(${AMBER} 2px,transparent 2px);background-size:13px 13px;opacity:.55;z-index:-1; }
        .site-image-stamp { position:absolute; top:28px; left:-28px; width:70px; padding:6px; background:#fff; box-shadow:0 10px 35px rgba(13,30,40,.16); }
        .site-image-stamp img { width:100%;height:auto; display:block; }
        .site-image-note { position:absolute; right:-22px; bottom:34px; display:flex;align-items:center;gap:8px;padding:13px 16px;background:${DARK};color:#fff;border-radius:10px;font-size:12px;font-weight:700; }
        .site-hero-arch { position:relative; width:min(920px,90%); height:320px; overflow:hidden; border-radius:180px 180px 0 0; }
        .site-hero-arch img { width:100%;height:100%;object-fit:cover; }
        .site-arch-number { position:absolute; right:30px; bottom:24px; color:#fff; font:800 42px var(--font-display); text-shadow:0 3px 15px rgba(0,0,0,.3); }
        .site-hero-bg-image { position:absolute; inset:0; background-size:cover; background-position:center; }
        .site-hero-overlay { position:absolute; inset:0; background:linear-gradient(100deg,rgba(13,30,40,.96) 15%,rgba(26,107,124,.84) 65%,rgba(13,30,40,.5)); }
        .site-hero-stats-card { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; padding:20px; border-radius:14px; }
        .site-hero-stat-item { text-align:center; color:#fff; }
        .site-hero-stat-num { display:block; font:800 28px var(--font-display); color:#f4bd62; }
        .site-hero-stat-label { font-size:11px; text-transform:uppercase; letter-spacing:.08em; opacity:.8; }
        .site-hero-floating-cards { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; }
        .site-hero-float-card { display:inline-flex; align-items:center; gap:8px; padding:10px 16px; background:#fff; border:1px solid rgba(26,107,124,.12); border-radius:10px; box-shadow:0 6px 20px rgba(26,107,124,.08); font-size:12px; font-weight:700; color:${DARK}; }
        .site-hero-float-card svg { color:${TEAL}; }
        .site-overview,.site-features,.site-benefits,.site-lifecycle,.site-faqs,.site-process-cards { padding:96px 0; }
        .site-overview { background:#fff; }
        .site-overview-grid { display:grid;grid-template-columns:1.05fr .8fr;gap:85px;align-items:center; }
        .site-overview h2 { font-size:clamp(1.35rem,2vw,1.75rem); letter-spacing:-.3px; margin-bottom:18px; }
        .site-overview-copy > p { color:${MUTED}; line-height:1.85; margin-bottom:16px; }
        .site-inline-checks { display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:28px; }
        .site-inline-checks div { display:flex;gap:9px;color:#3d6570;font-size:14px;line-height:1.55; }
        .site-inline-checks svg { color:${AMBER};flex-shrink:0;margin-top:2px; }
        .site-overview-visual { position:relative; min-height:300px; }
        .site-overview-visual > img { width:100%;height:300px;object-fit:cover;border-radius:16px; }
        .site-overview-metric { position:absolute;left:-25px;bottom:22px;color:#fff;padding:14px 18px;border-radius:10px;box-shadow:0 10px 25px rgba(26,107,124,.25); }
        .site-overview-metric strong { display:block;font:800 22px var(--font-display);color:#f4bd62; }
        .site-overview-metric span { font-size:10px;text-transform:uppercase;letter-spacing:.08em; }
        .site-overview-line { position:absolute;right:-20px;top:28px;width:60px;height:4px;background:${AMBER}; }
        .site-feature-card { padding:28px;overflow:hidden;position:relative;background:#fff;box-shadow:0 8px 30px rgba(26,107,124,.06); }
        .site-feature-icon { width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:20px; }
        .site-feature-index { position:absolute;right:18px;top:13px;font:800 34px var(--font-display); }
        .site-feature-card h3 { font:700 17px var(--font-display);margin-bottom:10px; }
        .site-feature-card h3 a { color:inherit;text-decoration:none; }
        .site-feature-card p { color:${MUTED};font-size:14px;line-height:1.72; }
        .site-feature-links { display:flex;flex-wrap:wrap;gap:7px;margin-top:17px; }
        .site-feature-links a { display:inline-flex;align-items:center;padding:5px 8px;border-radius:5px;text-decoration:none;font-size:11px;font-weight:700; }
        .site-section-heading { max-width:720px;margin:0 auto 52px;text-align:center; }
        .site-section-heading h2 { margin-bottom:14px; }
        .site-section-heading > p { color:${MUTED};line-height:1.7; }
        .site-benefits { background:#fff; }
        .site-benefits-grid { display:grid;grid-template-columns:.9fr 1.05fr;gap:80px;align-items:center; }
        .site-benefit-image { position:relative; }
        .site-benefit-image > img { width:100%;height:560px;object-fit:cover;border-radius:160px 20px 20px 20px; }
        .site-benefit-image-card { position:absolute;right:-35px;bottom:35px;width:240px;padding:22px;background:#fff;border-left:4px solid ${AMBER};box-shadow:0 16px 45px rgba(13,30,40,.18); }
        .site-benefit-image-card svg { color:${TEAL};margin-bottom:12px; }
        .site-benefit-image-card strong,.site-benefit-image-card span { display:block; }
        .site-benefit-image-card strong { font:700 16px var(--font-display);margin-bottom:7px; }
        .site-benefit-image-card span { color:${MUTED};font-size:12px;line-height:1.6; }
        .site-benefit-content h2 { margin-bottom:30px; }
        .site-benefit-list { display:grid;gap:12px; }
        .site-benefit-list > div { display:grid;grid-template-columns:40px 1fr;gap:12px;align-items:center;padding:14px 0;border-bottom:1px solid rgba(26,107,124,.11); }
        .site-benefit-list span { width:35px;height:35px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(26,107,124,.1);color:${AMBER};font-weight:800;font-size:12px; }
        .site-benefit-list p { color:#3d6570;line-height:1.6; }
        .site-timeline { position:relative;display:grid;gap:26px; }
        .site-timeline-track { position:absolute;left:5%;right:5%;top:25px;height:2px; }
        .site-timeline-step { position:relative;padding-top:60px; }
        .site-timeline-marker { position:absolute;top:0;left:0;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:${TEAL};color:#fff;border:5px solid ${DARK};z-index:2; }
        .site-timeline-number { color:#f4bd62;font:800 30px var(--font-display); }
        .site-timeline-step h3 { font:700 17px var(--font-display);margin:10px 0; }
        .site-timeline-step p { color:#9cbfc7;font-size:13.5px;line-height:1.7; }
        .site-lifecycle { background:${DARK};color:#fff; }
        .site-lifecycle .site-section-heading h2 { color:#fff; }
        .site-faqs { background:${SURFACE}; }
        .site-faq-layout { display:grid;grid-template-columns:.55fr 1fr;gap:75px;align-items:start; }
        .site-faq-intro { position:sticky;top:135px; }
        .site-faq-intro h2 { margin-bottom:15px; }
        .site-faq-intro > p { color:${MUTED};line-height:1.7; }
        .site-faq-orb { width:90px;height:90px;margin-top:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:${TEAL};color:#fff;box-shadow:18px 18px 0 rgba(26,107,124,.14); }
        .site-faq-list { display:grid;gap:14px; }
        .site-faq-list article { display:grid;grid-template-columns:45px 1fr;gap:15px;background:#fff;border:1px solid rgba(26,107,124,.13);border-radius:13px;padding:24px; }
        .site-faq-list article > span { color:${AMBER};font:800 20px var(--font-display); }
        .site-faq-list h3 { font:700 16px var(--font-display);margin-bottom:9px; }
        .site-faq-list p { color:${MUTED};font-size:14px;line-height:1.72; }
        .site-process-card { text-align:center;padding:32px 24px;box-shadow:0 8px 24px rgba(26,107,124,.06); }
        .site-process-card-icon { width:56px;height:56px;margin:0 auto 16px;border-radius:14px;display:flex;align-items:center;justify-content:center; }
        .site-process-card-num { font:800 22px var(--font-display);color:${AMBER};margin-bottom:8px; }
        .site-process-card h3 { font:700 16px var(--font-display);margin-bottom:10px; }
        .site-process-card p { font-size:13px;line-height:1.7; }
        .site-page-cta { background:${TEAL};padding:62px 0; }
        .site-page-cta .site-page-container { display:flex;align-items:center;justify-content:space-between;gap:30px; }
        .site-page-cta h2 { color:#fff;font-size:clamp(1.5rem,3vw,2.2rem);margin-bottom:8px; }
        .site-page-cta p { color:#c7e0e5; }
        .site-page-cta a { display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:8px;text-decoration:none;font-weight:700;flex-shrink:0; }
        @media(max-width:1000px){
          .site-hero-inner,.site-overview-grid,.site-benefits-grid,.site-faq-layout { grid-template-columns:1fr; }
          .site-image-frame { height:400px; }
          .site-overview-visual > img,.site-benefit-image > img { height:360px; }
          .site-timeline { grid-template-columns:1fr 1fr; }
          .site-timeline-track { display:none; }
          .site-faq-intro { position:relative;top:0; }
          .site-hero-stats-card { grid-template-columns:repeat(3,1fr);gap:8px;padding:14px; }
          .site-hero-stat-num { font-size:20px; }
          .site-hero-stat-label { font-size:9px; }
        }
        @media(max-width:650px){
          .site-page-container,.site-hero-inner { width:min(100% - 36px,1320px); }
          .site-page-hero { padding:140px 0 60px;min-height:auto; }
          .site-hero-copy h1 { font-size:clamp(1.8rem,8vw,2.5rem);letter-spacing:-0.5px; }
          .site-image-frame { height:330px;margin-top:10px; }
          .site-image-stamp { left:10px;width:55px; }
          .site-image-note { right:10px;bottom:20px; }
          .site-overview,.site-features,.site-benefits,.site-lifecycle,.site-faqs,.site-process-cards { padding:72px 0; }
          .site-overview-visual > img,.site-benefit-image > img { height:300px;border-radius:18px; }
          .site-overview-metric,.site-benefit-image-card { left:14px;right:14px;bottom:14px;width:auto; }
          .site-timeline { grid-template-columns:1fr; }
          .site-inline-checks { grid-template-columns:1fr; }
          .site-page-cta .site-page-container { align-items:flex-start;flex-direction:column; }
          .site-hero-arch { height:230px;width:100%; }
          .site-hero-float-card { padding:8px 12px;font-size:11px; }
        }
      `}</style>
    </div>
  );
}
