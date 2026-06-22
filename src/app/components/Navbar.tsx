import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Building2,
  ChevronDown,
  Globe2,
  Landmark,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import logo from "../../assets/yasa-logo.png";

const TEAL = "#1A6B7C";
const AMBER = "#1A6B7C";
const DARK = "#0D1E28";

const companyColumns = [
  {
    title: "Mainland",
    icon: Building2,
    href: "/mainland-business-setup-dubai",
    links: [
      ["Mainland Company Formation", "/mainland-business-setup-dubai"],
      ["Start a Company in UAE", "/start-company-in-uae"],
      ["Dubai Business Setup", "/setup-dubai"],
      ["Saudi Arabia Setup", "/business-setup-in-saudi-arabia"],
    ],
  },
  {
    title: "Free Zones",
    icon: Globe2,
    href: "/freezone-business-setup-dubai",
    links: [
      ["IFZA Company Setup", "/ifza-company-setup"],
      ["RAKEZ Business Setup", "/rakez-business-setup"],
      ["Meydan Company Formation", "/meydan-company-formation"],
      ["DMCC Company Formation", "/dmcc-company-formation"],
      ["View All Free Zones", "/free-zones-dubai"],
    ],
  },
  {
    title: "Offshore",
    icon: Landmark,
    href: "/offshore-company-formation-dubai",
    links: [
      ["Offshore Company Formation", "/offshore-company-formation-dubai"],
      ["JAFZA Company Formation", "/jafza-company-formation"],
      ["ADGM Company Setup", "/adgm-company-setup"],
      ["KIZAD Business Setup", "/kizad-business-setup"],
    ],
  },
];


const navItems = [
  { label: "Service", href: "/company-setup", menu: "company" },
  { label: "About Us", href: "/about-us" },
  { label: "Resources", href: "/blog", menu: "resources" },
  { label: "Contact", href: "/contact-us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    const onOutsideClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onAnnouncement = (event: Event) => {
      setAnnouncementVisible((event as CustomEvent<boolean>).detail);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("yasa-announcement", onAnnouncement);
    document.addEventListener("mousedown", onOutsideClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("yasa-announcement", onAnnouncement);
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const mobileMenuLinks = (menu: string) =>
    menu === "company"
      ? companyColumns.flatMap((column) => column.links)
      : [
            ["Blog & Insights", "/blog"],
            ["News & Updates", "/news-updates"],
            ["Offers", "/offers"],
            ["Cost Calculator", "/cost-calculator"],
          ];

  return (
    <motion.header
      ref={headerRef}
      className={`yasa-site-header ${announcementVisible ? "announcement-open" : ""}`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: scrolled ? "rgba(255,255,255,.98)" : "rgba(255,255,255,.94)",
        boxShadow: scrolled ? "0 5px 30px rgba(26,107,124,.12)" : "0 1px 0 rgba(26,107,124,.1)",
      }}
    >
      {/* Scroll progress bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "rgba(26,107,124,0.06)" }}>
        <motion.div style={{ height: "100%", background: `linear-gradient(90deg, ${AMBER}, ${TEAL})`, borderRadius: 1, width: `${scrollProgress}%` }} />
      </div>

      <div className="yasa-nav-shell">
        <a href="/" className="yasa-logo-link" onClick={closeAll}>
          <img src={logo} alt="YASA Corporate Service Provider" />
        </a>

        <nav className="yasa-desktop-navigation">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="yasa-nav-item"
              onMouseEnter={() => item.menu && setOpenMenu(item.menu)}
            >
              <a
                href={item.href}
                onFocus={() => item.menu && setOpenMenu(item.menu)}
                onClick={(event) => {
                  if (item.menu) {
                    event.preventDefault();
                    setOpenMenu(openMenu === item.menu ? null : item.menu);
                  } else {
                    closeAll();
                  }
                }}
              >
                {item.label}
                {item.menu && (
                  <ChevronDown
                    size={14}
                    style={{ transform: openMenu === item.menu ? "rotate(180deg)" : "none" }}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        <motion.a href="tel:+971507778009" className="yasa-nav-cta"
          whileHover={{ scale: 1.04, boxShadow: "0 6px 24px rgba(26,107,124,0.4)" }}
          whileTap={{ scale: 0.96 }}
        >
          <Phone size={15} /> Free Consultation
        </motion.a>

        <button
          aria-label="Toggle navigation menu"
          className="yasa-mobile-trigger"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <AnimatePresence>
        {openMenu === "company" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="yasa-mega-menu company-menu"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="yasa-company-grid">
              {companyColumns.map((column) => {
                const Icon = column.icon;
                return (
                  <div key={column.title}>
                    <a href={column.href} className="yasa-menu-heading" onClick={closeAll}>
                      <span><Icon size={18} /></span>
                      {column.title}
                    </a>
                    <div className="yasa-menu-links">
                      {column.links.map(([label, href]) => (
                        <a key={href} href={href} onClick={closeAll}>{label}</a>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="yasa-menu-promo">
                <Sparkles size={28} />
                <h3>Which jurisdiction fits?</h3>
                <p>Compare ownership, visa, banking, and activity requirements with a YASA expert.</p>
                <a href="/cost-calculator" onClick={closeAll}>Calculate Setup Cost</a>
              </div>
            </div>
          </motion.div>
        )}

        {openMenu === "resources" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="yasa-resource-menu"
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href="/blog" onClick={closeAll}>Blog & Insights</a>
            <a href="/news-updates" onClick={closeAll}>News & Updates</a>
            <a href="/offers" onClick={closeAll}>Offers & Promotions</a>
            <a href="/cost-calculator" onClick={closeAll}>Cost Calculator</a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="yasa-mobile-menu"
          >
            {navItems.map((item) => (
              <div key={item.label} className="yasa-mobile-row">
                <div>
                  <a href={item.href} onClick={closeAll}>{item.label}</a>
                  {item.menu && (
                    <button onClick={() => setOpenMenu(openMenu === item.menu ? null : item.menu)}>
                      <ChevronDown size={17} style={{ transform: openMenu === item.menu ? "rotate(180deg)" : "none" }} />
                    </button>
                  )}
                </div>
                {item.menu && openMenu === item.menu && (
                  <div className="yasa-mobile-submenu">
                    {mobileMenuLinks(item.menu).map(([label, href]) => (
                      <a key={href} href={href} onClick={closeAll}>{label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="yasa-mobile-contact">
              <a href="tel:+971507778009"><Phone size={15} /> +971 50 7778009</a>
              <a href="mailto:contact@yasacsp.com"><Mail size={15} /> contact@yasacsp.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .yasa-site-header{position:fixed;top:0;left:0;right:0;z-index:55;border-bottom:1px solid rgba(26,107,124,.1);backdrop-filter:blur(18px);transition:.25s;}
        .yasa-site-header.announcement-open{top:36px;}
        .yasa-nav-shell{height:72px;max-width:1320px;margin:0 auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:22px;}
        .yasa-logo-link{display:flex;align-items:center;flex-shrink:0;width:90px;}
        .yasa-logo-link img{display:block;width:100%;height:auto;}
        .yasa-desktop-navigation{height:100%;display:flex;align-items:center;margin-left:auto;}
        .yasa-nav-item{height:100%;display:flex;align-items:center;}
        .yasa-nav-item>a{height:100%;display:flex;align-items:center;gap:4px;padding:0 12px;color:#3d6570;text-decoration:none;font-size:13px;font-weight:650;transition:.2s;position:relative;}
        .yasa-nav-item>a::after{content:'';position:absolute;bottom:0;left:12px;right:12px;height:2px;background:${AMBER};border-radius:1px;transform:scaleX(0);transition:transform .25s cubic-bezier(.25,.1,.25,1);}
        .yasa-nav-item>a:hover{color:${TEAL};}
        .yasa-nav-item>a:hover::after{transform:scaleX(1);}
        .yasa-nav-item svg{transition:.2s;}
        .yasa-nav-cta{display:flex;align-items:center;gap:8px;background:${AMBER};color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:750;box-shadow:0 4px 18px rgba(26,107,124,.28);white-space:nowrap;}
        .yasa-mobile-trigger{display:none;background:none;border:0;color:${TEAL};padding:7px;cursor:pointer;}
        .yasa-mega-menu{position:absolute;top:100%;background:#fff;border-top:2px solid ${AMBER};box-shadow:0 25px 65px rgba(13,30,40,.19);}
        .company-menu{left:0;right:0;}
        .yasa-company-grid{max-width:1320px;margin:0 auto;padding:30px 28px;display:grid;grid-template-columns:1fr 1fr 1fr .9fr;gap:30px;}
        .yasa-menu-heading{display:flex;align-items:center;gap:11px;color:${DARK};text-decoration:none;font:750 15px var(--font-display);margin-bottom:15px;}
        .yasa-menu-heading span{width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;background:rgba(26,107,124,.08);color:${TEAL};}
        .yasa-menu-links{display:grid;gap:9px;}
        .yasa-menu-links a{color:#5a7a87;text-decoration:none;font-size:13px;line-height:1.45;transition:.2s;}
        .yasa-menu-links a:hover{color:${AMBER};transform:translateX(3px);}
        .yasa-menu-promo{background:${DARK};color:#fff;border-radius:15px;padding:24px;}
        .yasa-menu-promo>svg{color:#f4bd62;margin-bottom:16px;}
        .yasa-menu-promo h3{font:750 19px var(--font-display);margin-bottom:9px;}
        .yasa-menu-promo p{color:#9cbfc7;font-size:12px;line-height:1.65;margin-bottom:18px;}
        .yasa-menu-promo a{display:inline-flex;background:${AMBER};color:#fff;padding:9px 12px;border-radius:6px;text-decoration:none;font-size:11px;font-weight:750;}
        .yasa-resource-menu{position:absolute;top:100%;left:58%;width:245px;background:#fff;border-top:2px solid ${AMBER};padding:10px;box-shadow:0 22px 55px rgba(13,30,40,.18);}
        .yasa-resource-menu a{display:block;padding:11px 13px;border-radius:7px;color:#4a6873;text-decoration:none;font-size:13px;}
        .yasa-resource-menu a:hover{background:#f4f8fa;color:${AMBER};}
        .yasa-mobile-menu{display:none;overflow:hidden;background:#fff;border-top:1px solid rgba(26,107,124,.1);max-height:76vh;overflow-y:auto;}
        .yasa-mobile-row{border-bottom:1px solid rgba(26,107,124,.08);}
        .yasa-mobile-row>div:first-child{display:flex;align-items:center;padding:0 20px;}
        .yasa-mobile-row>div:first-child>a{flex:1;padding:14px 0;color:${DARK};text-decoration:none;font-size:14px;font-weight:700;}
        .yasa-mobile-row button{background:none;border:0;color:${TEAL};padding:12px;}
        .yasa-mobile-submenu{display:grid;gap:10px;background:#f4f8fa;margin:0 15px 13px;padding:14px;border-radius:10px;}
        .yasa-mobile-submenu a{color:#526f79;text-decoration:none;font-size:13px;}
        .yasa-mobile-contact{display:grid;gap:10px;margin:16px;background:${TEAL};padding:16px;border-radius:10px;}
        .yasa-mobile-contact a{display:flex;align-items:center;gap:8px;color:#fff;text-decoration:none;font-size:13px;}
        @media(max-width:1080px){.yasa-desktop-navigation,.yasa-nav-cta{display:none}.yasa-mobile-trigger{display:block}.yasa-mobile-menu{display:block}.yasa-logo-link{width:80px}}
        @media(max-width:650px){.yasa-site-header.announcement-open{top:88px}.yasa-nav-shell{height:66px;padding:0 18px}.yasa-logo-link{width:70px}}
      `}</style>
    </motion.header>
  );
}
