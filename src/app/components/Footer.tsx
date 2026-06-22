import { motion } from "motion/react";
import { Facebook, Linkedin, Instagram, Twitter, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import logo from "../../assets/yasa-logo.png";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

const services = [
  { label: "Mainland Company Formation", href: "/mainland-business-setup-dubai" },
  { label: "Free Zone Setup", href: "/freezone-business-setup-dubai" },
  { label: "Offshore Company", href: "/offshore-company-formation-dubai" },
  { label: "Business Licensing", href: "/services/license" },
  { label: "Visa Services", href: "/services/visa" },
  { label: "Bank Account Opening", href: "/bank-account-opening" },
  { label: "Accounting & VAT", href: "/vat-registration-bookkeeping" },
  { label: "PRO Services", href: "/services/other" },
];
const freeZones = [
  { label: "IFZA", href: "/ifza-company-setup" },
  { label: "RAKEZ", href: "/rakez-business-setup" },
  { label: "Meydan Free Zone", href: "/meydan-company-formation" },
  { label: "SAIF Zone", href: "/company-setup/freezone" },
  { label: "DMCC", href: "/dmcc-company-formation" },
  { label: "DIFC", href: "/free-zones-dubai" },
  { label: "JAFZA", href: "/jafza-company-formation" },
  { label: "ADGM", href: "/adgm-company-setup" },
];
const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer style={{ background: "#0D1E28", padding: "64px 28px 32px", position: "relative", overflow: "hidden" }}>
      {/* Floating accent circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: -100, right: -100,
          width: 350, height: 350, borderRadius: "50%",
          border: `1px solid rgba(31,138,154,0.05)`,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", bottom: -80, left: -80,
          width: 280, height: 280, borderRadius: "50%",
          border: `1px solid rgba(26,107,124,0.04)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>

        {/* CTA banner — animated gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
          whileHover={{ scale: 1.01, boxShadow: "0 20px 60px rgba(26,107,124,0.45)" }}
          style={{
            borderRadius: 16, padding: "38px 42px",
            marginBottom: 56,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 24,
            position: "relative", overflow: "hidden",
            boxShadow: "0 16px 48px rgba(26,107,124,0.35)",
            cursor: "default",
          }}
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(110deg, ${TEAL} 0%, ${BRIGHT_TEAL} 40%, ${TEAL} 80%, ${BRIGHT_TEAL} 100%)`,
              backgroundSize: "200% 100%",
              zIndex: 0,
            }}
          />

          {/* Floating bubbles */}
          {[
            { size: 180, top: -50, right: -30, delay: 0 },
            { size: 120, bottom: -40, left: 100, delay: 1 },
            { size: 80, top: 20, right: 200, delay: 2 },
          ].map((b, i) => (
            <motion.div key={i}
              animate={{ y: [0, -12, 0], x: [0, 8, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
              style={{
                position: "absolute", top: b.top, right: b.right, bottom: b.bottom, left: b.left,
                width: b.size, height: b.size, borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                pointerEvents: "none", zIndex: 0,
              }}
            />
          ))}

          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, marginBottom: 6, letterSpacing: "-0.3px" }}>
              Ready to Start Your UAE Business?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14 }}>Talk to our experts today — free, no-obligation consultation.</p>
          </div>
          <motion.a href="/contact-us"
            whileHover={{ scale: 1.06, boxShadow: "0 10px 32px rgba(26,107,124,0.55)", y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: AMBER, color: "#fff",
              padding: "13px 26px", borderRadius: 8,
              textDecoration: "none", fontWeight: 700, fontSize: 15,
              fontFamily: "var(--font-display)", flexShrink: 0, position: "relative", zIndex: 1,
              boxShadow: "0 4px 18px rgba(26,107,124,0.4)",
            }}
          >Get Started <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight size={15} /></motion.span></motion.a>
        </motion.div>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="yasa-footer-grid">

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }}>
            <motion.a href="/" style={{ display: "inline-block", width: 100, marginBottom: 20 }} whileHover={{ scale: 1.06, rotate: 2 }}>
              <img src={logo} alt="YASA Corporate Service Provider" style={{ display: "block", width: "100%", height: "auto", filter: "brightness(0) invert(1)", opacity: 0.92 }} />
            </motion.a>
            <p style={{ color: "#7BAAB5", fontSize: 14, lineHeight: 1.78, marginBottom: 22, maxWidth: 280 }}>
              Dubai-based corporate services provider helping entrepreneurs worldwide launch and grow businesses in the UAE — fast, reliably, and affordably.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {[
                { icon: Phone, value: "+971 50 7778009", href: "tel:+971507778009" },
                { icon: Mail, value: "contact@yasacsp.com", href: "mailto:contact@yasacsp.com" },
                { icon: MapPin, value: "Iris Bay Tower, Business Bay, Dubai" },
              ].map(({ icon: Icon, value, href }: any, i: number) => (
                <motion.div key={value} style={{ display: "flex", alignItems: "center", gap: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    style={{
                      width: 28, height: 28, borderRadius: 6,
                      background: "rgba(31,138,154,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Icon size={12} color={BRIGHT_TEAL} />
                  </motion.div>
                  {href ? (
                    <motion.a href={href} style={{ color: "#7BAAB5", fontSize: 13, textDecoration: "none" }} whileHover={{ color: AMBER, x: 3 }}>{value}</motion.a>
                  ) : <span style={{ color: "#7BAAB5", fontSize: 13 }}>{value}</span>}
                </motion.div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 9 }}>
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a key={label} href={href} aria-label={label}
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 180, damping: 10 }}
                  whileHover={{ y: -5, scale: 1.15, borderColor: AMBER, color: AMBER, boxShadow: `0 4px 16px rgba(26,107,124,0.25)` }}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    border: "1px solid rgba(31,138,154,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#7BAAB5", textDecoration: "none",
                  }}
                ><Icon size={14} /></motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 style={{ color: "#E4F2F5", fontSize: 12, fontWeight: 700, marginBottom: 18, letterSpacing: "0.1em", textTransform: "uppercase" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((service, i) => (
                <motion.li key={service.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.4, type: "spring", stiffness: 120 }}
                >
                  <motion.a href={service.href} style={{ color: "#7BAAB5", fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
                    whileHover={{ color: AMBER, x: 6, transition: { duration: 0.2 } }}>
                    <motion.span
                      whileHover={{ scale: 1.8, background: AMBER }}
                      style={{ width: 4, height: 4, borderRadius: "50%", background: BRIGHT_TEAL, flexShrink: 0, display: "inline-block", transition: "background 0.2s" }}
                    />
                    {service.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Free Zones */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 style={{ color: "#E4F2F5", fontSize: 12, fontWeight: 700, marginBottom: 18, letterSpacing: "0.1em", textTransform: "uppercase" }}>Free Zones</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {freeZones.map((zone, i) => (
                <motion.li key={zone.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.05, duration: 0.4, type: "spring", stiffness: 120 }}
                >
                  <motion.a href={zone.href} style={{ color: "#7BAAB5", fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
                    whileHover={{ color: AMBER, x: 6, transition: { duration: 0.2 } }}>
                    <motion.span
                      whileHover={{ scale: 1.8, background: AMBER }}
                      style={{ width: 4, height: 4, borderRadius: "50%", background: BRIGHT_TEAL, flexShrink: 0, display: "inline-block", transition: "background 0.2s" }}
                    />
                    {zone.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h4 style={{ color: "#E4F2F5", fontSize: 12, fontWeight: 700, marginBottom: 18, letterSpacing: "0.1em", textTransform: "uppercase" }}>Contact Info</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { label: "Phone / WhatsApp", value: "+971 50 7778009" },
                { label: "Email", value: "contact@yasacsp.com" },
                { label: "Office", value: "Office No. 901-B68\nIris Bay Tower\nBusiness Bay, Dubai, UAE" },
                { label: "Hours", value: "Mon – Sat\n9:00 AM – 6:00 PM" },
              ].map(({ label, value }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 + i * 0.1, duration: 0.5, type: "spring", stiffness: 120 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                >
                  <div style={{ color: AMBER, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4, fontWeight: 700 }}>{label}</div>
                  <div style={{ color: "#7BAAB5", fontSize: 13, whiteSpace: "pre-line", lineHeight: 1.65 }}>{value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ borderTop: "1px solid rgba(31,138,154,0.15)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "#7BAAB5", fontSize: 13 }}>© 2026 YASA CSP. All rights reserved. Registered in Dubai, UAE.</p>
          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-and-conditions" },
              { label: "Sitemap", href: "/sitemap" },
            ].map((link) => (
              <motion.a key={link.label} href={link.href} style={{ color: "#7BAAB5", fontSize: 13, textDecoration: "none" }}
                whileHover={{ color: AMBER, y: -2, scale: 1.05 }}>{link.label}</motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .yasa-footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .yasa-footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
