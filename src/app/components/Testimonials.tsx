import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

const testimonials = [
  { name: "Arjun Mehta", role: "CEO, TechBridge Solutions", country: "🇮🇳 India", rating: 5, text: "YASA CSP made our IFZA free zone setup incredibly smooth. From the first consultation to receiving our licence, everything was handled professionally. We were operational within a week." },
  { name: "Sarah Mitchell", role: "Founder, Mitchell & Partners", country: "🇬🇧 United Kingdom", rating: 5, text: "Setting up in a new country felt daunting, but YASA CSP guided me through every step with clarity and speed. The golden visa processing was particularly seamless." },
  { name: "Khalid Al-Rashid", role: "Managing Director, Al-Rashid Trading", country: "🇸🇦 Saudi Arabia", rating: 5, text: "We used YASA CSP for our mainland and RAKEZ setups. Their knowledge of UAE regulations is unmatched — they saved us significant time and cost compared to other providers." },
  { name: "Elena Kozlov", role: "Partner, Kozlov Consulting", country: "🇷🇺 Russia", rating: 5, text: "The bank account opening support was exceptional. YASA CSP connected us with the right bank and our account was activated within three weeks — far faster than expected." },
  { name: "James Okafor", role: "CEO, Okafor Logistics", country: "🇳🇬 Nigeria", rating: 5, text: "Completely transparent about costs from day one. No hidden fees, no surprises. My Maydan Free Zone setup was completed ahead of schedule. I have already referred three colleagues." },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const go = (next: number) => { setDir(next > active ? 1 : -1); setActive(next); };
  const prev = () => go((active - 1 + testimonials.length) % testimonials.length);
  const next = () => go((active + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section id="testimonials" style={{ padding: "100px 28px", background: "#F4F8FA", position: "relative", overflow: "hidden" }}>
      {/* Floating accent circles */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: -60, left: -60,
          width: 280, height: 280, borderRadius: "50%",
          border: `1px solid rgba(26,107,124,0.05)`,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", bottom: -40, right: -40,
          width: 200, height: 200, borderRadius: "50%",
          border: `1px solid rgba(26,107,124,0.05)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 12 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(26,107,124,0.08)", border: `1px solid rgba(26,107,124,0.22)`,
              borderRadius: 20, padding: "5px 16px", marginBottom: 16,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: AMBER }} />
            <span style={{ color: AMBER, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>Client Stories</span>
          </motion.div>
          <h2 style={{ fontFamily: "var(--font-display)", color: "#0D1E28", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.3px" }}>
            Trusted by Entrepreneurs Worldwide
          </h2>
        </motion.div>

        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative", minHeight: 380 }} className="yasa-testimonials-slider">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              variants={{
                enter: (dir: number) => ({
                  x: dir * 100,
                  rotateY: dir * 15,
                  opacity: 0,
                  scale: 0.94,
                }),
                center: {
                  x: 0,
                  rotateY: 0,
                  opacity: 1,
                  scale: 1,
                },
                exit: (dir: number) => ({
                  x: -dir * 100,
                  rotateY: -dir * 15,
                  opacity: 0,
                  scale: 0.94,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 180, damping: 22 },
                opacity: { duration: 0.35 },
                rotateY: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 24px 60px rgba(26,107,124,0.14)",
                borderColor: "rgba(26,107,124,0.22)"
              }}
              style={{
                background: "#fff",
                border: `1px solid rgba(26,107,124,0.12)`,
                borderRadius: 18, 
                padding: "44px 40px",
                textAlign: "center",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                boxShadow: "0 12px 48px rgba(26,107,124,0.06)",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                transition: "border-color 0.3s, box-shadow 0.3s",
                boxSizing: "border-box"
              }}
            >
              {/* Animated top gradient line */}
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL}, ${AMBER})`,
                  backgroundSize: "200% 100%",
                }}
              />

              {/* Quote watermark */}
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: 18, left: 24, opacity: 0.05 }}
              >
                <Quote size={56} color={TEAL} />
              </motion.div>

              {/* Glow blob */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: -30, right: -30,
                  width: 160, height: 160, borderRadius: "50%",
                  background: `radial-gradient(circle, ${AMBER} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <motion.div key={i}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 250, damping: 10 }}
                  >
                    <Star size={17} color={AMBER} fill={AMBER} />
                  </motion.div>
                ))}
              </div>

              <p style={{ color: "#3D5A65", fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)", lineHeight: 1.8, marginBottom: 30, fontStyle: "italic" }}>
                "{t.text}"
              </p>

              <div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 54, height: 54, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${TEAL} 0%, ${BRIGHT_TEAL} 100%)`,
                    margin: "0 auto 12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 6px 24px rgba(26,107,124,0.25)`,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", color: "#fff", fontWeight: 800, fontSize: 19 }}>{t.name[0]}</span>
                </motion.div>
                <div style={{ color: "#0D1E28", fontWeight: 700, fontSize: 15, fontFamily: "var(--font-display)" }}>{t.name}</div>
                <div style={{ color: "#5A7A87", fontSize: 13, marginTop: 3 }}>{t.role}</div>
                <div style={{ color: AMBER, fontSize: 13, marginTop: 3 }}>{t.country}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls — with glow */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 18, marginTop: 28, position: "relative", zIndex: 10 }}>
          <motion.button onClick={prev}
            whileHover={{ scale: 1.15, boxShadow: `0 0 0 4px rgba(26,107,124,0.1), 0 8px 24px rgba(26,107,124,0.2)` }}
            whileTap={{ scale: 0.9 }}
            style={{ width: 42, height: 42, borderRadius: "50%", border: `1.5px solid rgba(26,107,124,0.3)`, background: "#fff", color: TEAL, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(26,107,124,0.1)" }}
          ><ChevronLeft size={17} /></motion.button>

          <div style={{ display: "flex", gap: 7 }}>
            {testimonials.map((_, i) => (
              <motion.button key={i} onClick={() => go(i)}
                animate={{
                  width: i === active ? 24 : 7,
                  background: i === active ? `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL})` : "rgba(26,107,124,0.22)",
                  boxShadow: i === active ? `0 2px 8px rgba(26,107,124,0.3)` : "none",
                }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
                style={{ height: 7, borderRadius: 4, border: "none", cursor: "pointer", padding: 0 }}
              />
            ))}
          </div>

          <motion.button onClick={next}
            whileHover={{ scale: 1.15, boxShadow: `0 0 0 4px rgba(26,107,124,0.1), 0 8px 24px rgba(26,107,124,0.2)` }}
            whileTap={{ scale: 0.9 }}
            style={{ width: 42, height: 42, borderRadius: "50%", border: `1.5px solid rgba(26,107,124,0.3)`, background: "#fff", color: TEAL, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(26,107,124,0.1)" }}
          ><ChevronRight size={17} /></motion.button>
        </div>
      </div>

      <style>{`
        .yasa-testimonials-slider {
          min-height: 380px;
        }
        @media (max-width: 768px) {
          .yasa-testimonials-slider {
            min-height: 440px !important;
          }
        }
        @media (max-width: 480px) {
          .yasa-testimonials-slider {
            min-height: 520px !important;
          }
        }
      `}</style>
    </section>
  );
}
