import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Building2, Globe, FileText } from "lucide-react";

interface TiltCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
}

function TiltCard({ children, style, ...props }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 250, damping: 20 });
  
  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  }
  
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const TEAL = "#1A6B7C";
const AMBER = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

const highlights = [
  "Company Formation in 5 Days",
  "100% Foreign Ownership",
  "0% Corporate & Personal Tax",
  "1,000+ Clients Served",
];

const floatingCards = [
  { icon: Building2, label: "Mainland Setup", sub: "DED Licensed" },
  { icon: Globe, label: "Free Zone", sub: "50+ Zones" },
  { icon: FileText, label: "Visa Processing", sub: "All Types" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Smooth the scroll input for a more fluid parallax effect
  const smoothScrollY = useSpring(scrollY, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const bgY = useTransform(smoothScrollY, [0, 800], [0, 150]);
  const bgScale = useTransform(smoothScrollY, [0, 800], [1, 1.08]);
  const overlayOpacity = useTransform(smoothScrollY, [0, 500], [0.96, 0.85]);

  return (
    <section ref={heroRef} id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", perspective: 1000 }}>
      {/* BG image with parallax */}
      <motion.div style={{
        position: "absolute", inset: -40, y: bgY, scale: bgScale,
        backgroundImage: `url(https://images.unsplash.com/photo-1531586024505-b040066c2d5b?w=1600&h=900&fit=crop&auto=format)`,
        backgroundSize: "cover", backgroundPosition: "center",
        filter: "brightness(0.25) saturate(1.05)",
      }} />

      {/* Clean gradient overlay — left heavy for readability */}
      <motion.div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(110deg, rgba(244,248,250,0.97) 36%, rgba(26,107,124,0.15) 100%)",
        opacity: overlayOpacity,
      }} />

      {/* Animated glowing decorative blur in background */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "25%",
          right: "15%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,107,124,0.12) 0%, rgba(26,107,124,0.02) 60%, transparent 100%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${AMBER} 0%, ${TEAL} 50%, transparent 100%)`,
          transformOrigin: "left",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "160px 28px 100px", width: "100%", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div style={{ maxWidth: 680 }}>
            {/* Badge */}
            <div style={{ overflow: "hidden", marginBottom: 28 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: `1px solid rgba(26,107,124,0.3)`,
                  borderRadius: 24, padding: "6px 16px",
                  background: "rgba(26,107,124,0.06)",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: AMBER }} />
                <span style={{ color: AMBER, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>
                  Trusted Business Setup Specialists — Dubai, UAE
                </span>
              </motion.div>
            </div>

            {/* h1 — premium clip-path mask reveal */}
            <h1 style={{
              fontFamily: "var(--font-display)", color: "#0D1E28",
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 800,
              lineHeight: 1.15, marginBottom: 22, letterSpacing: "-0.5px",
            }}>
              <span style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "block" }}
                >
                  Launch Your Business
                </motion.span>
              </span>
              <span style={{ display: "block", overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "block" }}
                >
                  in the UAE with{" "}
                  <span style={{ color: AMBER }}>YASA</span>{" "}
                  <span style={{ color: TEAL }}>CSP</span>
                </motion.span>
              </span>
            </h1>

            {/* Paragraph — clean fade-up */}
            <div style={{ overflow: "hidden", marginBottom: 32 }}>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ color: "#3D6570", fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)", lineHeight: 1.78, margin: 0, maxWidth: 520 }}
              >
                From company registration to visas, banking, and ongoing compliance — YASA Corporate Services handles every step so you can focus on growing your business in the UAE.
              </motion.p>
            </div>

            {/* Highlights — staggered fade-up with a small spring */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px", marginBottom: 38 }}>
              {highlights.map((h, i) => (
                <div key={h} style={{ overflow: "hidden" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <CheckCircle size={14} color={TEAL} />
                    <span style={{ color: "#3D6570", fontSize: 14 }}>{h}</span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <motion.a href="#contact"
                whileHover={{ y: -3, scale: 1.02, boxShadow: "0 12px 30px rgba(26,107,124,0.45)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: AMBER, color: "#fff",
                  padding: "14px 28px", borderRadius: 8,
                  textDecoration: "none", fontWeight: 700, fontSize: 15,
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 4px 18px rgba(26,107,124,0.28)",
                  transition: "box-shadow 0.25s, border-color 0.25s",
                }}
              >
                Start Your Business
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>

              <motion.a href="#services"
                whileHover={{ y: -3, scale: 1.02, borderColor: TEAL, background: "rgba(26,107,124,0.04)", boxShadow: "0 12px 30px rgba(26,107,124,0.08)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: `1.5px solid rgba(26,107,124,0.3)`, color: "#1A6B7C",
                  padding: "14px 28px", borderRadius: 8,
                  textDecoration: "none", fontWeight: 600, fontSize: 15,
                  transition: "all 0.25s",
                }}
              >Explore Services</motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 36, flexWrap: "wrap" }}
            >
              {/* Google Rating */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.03, boxShadow: "0 8px 20px rgba(26,107,124,0.12)" }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(26,107,124,0.12)",
                  borderRadius: 10, padding: "10px 16px",
                  boxShadow: "0 2px 10px rgba(26,107,124,0.06)",
                  cursor: "default",
                  transition: "box-shadow 0.3s",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div>
                  <div style={{ color: "#0D1E28", fontWeight: 700, fontSize: 13, fontFamily: "var(--font-display)" }}>Google Rating</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
                    <span style={{ color: "#0D1E28", fontWeight: 800, fontSize: 14, fontFamily: "var(--font-display)" }}>4.7</span>
                    <div style={{ display: "flex", gap: 1 }}>
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                            fill={s <= 4 ? "#FBBC05" : "#D1D5DB"}
                            stroke={s <= 4 ? "#FBBC05" : "#D1D5DB"} strokeWidth="1"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div style={{ width: 1, height: 36, background: "rgba(26,107,124,0.15)" }} />

              {/* ISO Badge */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.03, boxShadow: "0 8px 20px rgba(26,107,124,0.12)" }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(26,107,124,0.12)",
                  borderRadius: 10, padding: "10px 16px",
                  boxShadow: "0 2px 10px rgba(26,107,124,0.06)",
                  cursor: "default",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  border: `2px solid ${TEAL}`,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  background: "#fff", flexShrink: 0,
                }}>
                  <span style={{ color: TEAL, fontWeight: 900, fontSize: 9, fontFamily: "var(--font-display)" }}>ISO</span>
                  <span style={{ color: TEAL, fontWeight: 700, fontSize: 7, fontFamily: "var(--font-display)" }}>9001:2015</span>
                </div>
                <div>
                  <div style={{ color: "#0D1E28", fontWeight: 700, fontSize: 13, fontFamily: "var(--font-display)" }}>ISO Certified</div>
                  <div style={{ color: "#5A7A87", fontSize: 11, marginTop: 1 }}>Quality Management</div>
                </div>
              </motion.div>

              <div style={{ width: 1, height: 36, background: "rgba(26,107,124,0.15)" }} />

              {/* Clients count */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.03, boxShadow: "0 8px 20px rgba(26,107,124,0.12)" }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(26,107,124,0.12)",
                  borderRadius: 10, padding: "10px 16px",
                  boxShadow: "0 2px 10px rgba(26,107,124,0.06)",
                  cursor: "default",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(26,107,124,0.08)",
                  border: `2px solid rgba(26,107,124,0.25)`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <span style={{ color: AMBER, fontWeight: 900, fontSize: 11, fontFamily: "var(--font-display)" }}>1K+</span>
                </div>
                <div>
                  <div style={{ color: "#0D1E28", fontWeight: 700, fontSize: 13, fontFamily: "var(--font-display)" }}>Happy Clients</div>
                  <div style={{ color: "#5A7A87", fontSize: 11, marginTop: 1 }}>Across 60+ countries</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right floating service cards with 3D tilt */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 12, perspective: 1000 }}
            className="yasa-hero-cards"
          >
            {floatingCards.map(({ icon: Icon, label, sub }, i) => (
              <TiltCard key={label}
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  delay: 0.6 + i * 0.12, 
                  duration: 0.9, 
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                whileHover={{
                  z: 20, // pop-out on 3D plane
                  boxShadow: "0 20px 40px rgba(26,107,124,0.16)",
                }}
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: `1px solid rgba(26,107,124,0.15)`,
                  borderRadius: 12, padding: "16px 22px",
                  display: "flex", alignItems: "center", gap: 14,
                  backdropFilter: "blur(12px)",
                  cursor: "default",
                  boxShadow: "0 4px 16px rgba(26,107,124,0.08)",
                  minWidth: 196,
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `rgba(26,107,124,0.08)`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  transform: "translateZ(10px)" // 3D layer effect
                }}>
                  <Icon size={18} color={AMBER} />
                </div>
                <div style={{ transform: "translateZ(15px)" }}>
                  <div style={{ color: "#0D1E28", fontWeight: 700, fontSize: 14, fontFamily: "var(--font-display)" }}>{label}</div>
                  <div style={{ color: "#5A7A87", fontSize: 12 }}>{sub}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .yasa-hero-cards { display: none !important; } }`}</style>
    </section>
  );
}
