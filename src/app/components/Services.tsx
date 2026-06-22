import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Globe, FileText, CreditCard, Users, BarChart3, Landmark, ShieldCheck, UserCheck, Briefcase, ArrowRight } from "lucide-react";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

const services = [
  { icon: Building2, title: "Mainland Company Formation", description: "DED-licensed mainland companies with full access to the UAE local market. 100% foreign ownership now available.", tag: "Popular", href: "/mainland-business-setup-dubai" },
  { icon: Globe, title: "Free Zone Setup", description: "IFZA, RAKEZ, Maydan Free Zone, SAIF Zone, DMCC, DIFC and 50+ more zones — zero tax, fast incorporation.", tag: "Fast Track", href: "/freezone-business-setup-dubai" },
  { icon: Landmark, title: "Offshore Company", description: "RAK ICC or JAFZA offshore structures for international trading, asset protection, and confidential ownership.", tag: null, href: "/offshore-company-formation-dubai" },
  { icon: FileText, title: "Business Licensing", description: "Commercial, professional, industrial, and e-commerce licences — renewals, modifications, cancellations, and freezing.", tag: null, href: "/services/license" },
  { icon: Users, title: "Visa Services", description: "Residence visa, dependent visa, remote work visa, golden visa, freelance visa — complete immigration management.", tag: "All Types", href: "/services/visa" },
  { icon: UserCheck, title: "Emirates ID & Medical", description: "VIP medical tests, Emirates ID processing, and PRO government liaison — quick and hassle-free completion.", tag: null, href: "/vip-medical-and-eid" },
  { icon: CreditCard, title: "Bank Account Opening", description: "Personal and corporate accounts across UAE's top banks — we match your profile and manage the process.", tag: null, href: "/bank-account-opening" },
  { icon: BarChart3, title: "Accounting & VAT", description: "VAT registration, corporate tax filing, bookkeeping, and financial compliance reporting for UAE businesses.", tag: null, href: "/vat-registration-bookkeeping" },
  { icon: ShieldCheck, title: "PRO Services", description: "Document attestation, Ministry approvals, and all government liaison handled by our experienced PRO team.", tag: null, href: "/services/other" },
  { icon: Briefcase, title: "Other Services", description: "Trademark registration, financial consulting, business advisory, and post-setup support tailored to your needs.", tag: null, href: "/services" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  return (
    <motion.a
      href={service.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: (index % 4) * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(26,107,124,0.08)",
        borderColor: "rgba(26,107,124,0.25)"
      }}
      style={{
        padding: "32px 26px",
        background: hovered ? "#fff" : "rgba(250,252,253,0.7)",
        border: "1px solid rgba(26,107,124,0.08)",
        borderRadius: 16,
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        cursor: "pointer", position: "relative", overflow: "hidden",
        display: "block", textDecoration: "none",
      }}
    >
      {/* Top accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL})`,
          transformOrigin: "left",
        }}
      />

      {service.tag && (
        <motion.div 
          animate={{ scale: hovered ? 1.05 : 1 }}
          style={{
            position: "absolute", top: 14, right: 14,
            background: "rgba(26,107,124,0.08)", color: AMBER,
            fontSize: 10, fontWeight: 700, padding: "3px 8px",
            borderRadius: 4, letterSpacing: "0.08em", textTransform: "uppercase",
            border: `1px solid rgba(26,107,124,0.2)`,
          }}>{service.tag}</motion.div>
      )}

      <motion.div 
        animate={hovered ? { scale: 1.1, rotate: 5, backgroundColor: "rgba(26,107,124,0.1)" } : { scale: 1, rotate: 0, backgroundColor: "rgba(26,107,124,0.06)" }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          width: 48, height: 48, borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Icon size={22} color={hovered ? AMBER : TEAL} style={{ transition: "color 0.25s" }} />
      </motion.div>
      <h3 style={{ fontFamily: "var(--font-display)", color: "#0D1E28", fontSize: "1.05rem", fontWeight: 700, marginBottom: 10 }}>{service.title}</h3>
      <p style={{ color: "#5A7A87", fontSize: 13.5, lineHeight: 1.7, marginBottom: 16 }}>{service.description}</p>
      
      {/* Learn more link that slides in */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: hovered ? AMBER : TEAL, fontSize: 13, fontWeight: 600, transition: "color 0.25s" }}>Learn more</span>
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <ArrowRight size={14} color={hovered ? AMBER : TEAL} style={{ transition: "color 0.25s" }} />
        </motion.span>
      </div>
    </motion.a>
  );
}

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="services" style={{ padding: "100px 28px", background: "#F4F8FA" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(26,107,124,0.08)", border: `1px solid rgba(26,107,124,0.22)`,
            borderRadius: 20, padding: "5px 16px", marginBottom: 16,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: AMBER }} />
            <span style={{ color: AMBER, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>Our Services</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", color: "#0D1E28",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.3px",
          }}>
            Everything You Need to<br />Launch &amp; Grow in the UAE
          </h2>
          <p style={{ color: "#5A7A87", maxWidth: 520, margin: "0 auto", lineHeight: 1.75, fontSize: 15 }}>
            YASA CSP is your single point of contact for every business requirement in the UAE — from initial registration to long-term growth.
          </p>
        </motion.div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {services.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
