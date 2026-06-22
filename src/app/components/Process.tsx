import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "motion/react";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

const steps = [
  { number: "01", title: "Free Consultation", description: "Speak with our expert advisors to identify the best business structure, jurisdiction, and licence type for your goals." },
  { number: "02", title: "Document Preparation", description: "We prepare and review all required documents — MOA, share certificates, passport copies, NOCs, and application forms." },
  { number: "03", title: "Government Submission", description: "Our PRO team submits applications to the relevant authorities — DED, free zone authority, or offshore registry." },
  { number: "04", title: "Licence Issuance", description: "Your trade licence is issued within 3–5 working days. We deliver all original documents directly to you." },
  { number: "05", title: "Visa & Banking", description: "We process investor and employee visas, arrange medicals, Emirates ID, and assist with bank account opening." },
  { number: "06", title: "Ongoing Support", description: "Licence renewals, VAT filing, additional visas, and advisory — YASA CSP remains your long-term UAE business partner." },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Track scroll progress of the timeline container
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Create a spring-smoothed progress value
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="process" style={{ padding: "100px 28px", background: "#EEF5F8", position: "relative", overflow: "hidden" }}>
      {/* Subtle diagonal pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `repeating-linear-gradient(45deg, ${TEAL} 0, ${TEAL} 1px, transparent 1px, transparent 40px)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
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
            <span style={{ color: AMBER, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>How It Works</span>
          </motion.div>
          <h2 style={{
            fontFamily: "var(--font-display)", color: "#0D1E28",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.3px",
          }}>
            Your Business, Live in 6 Steps
          </h2>
          <p style={{ color: "#5A7A87", maxWidth: 460, margin: "0 auto", lineHeight: 1.75, fontSize: 15 }}>
            A transparent, proven process refined over thousands of UAE company formations.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div ref={containerRef} style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          
          {/* Scroll-driven progress line */}
          <motion.div
            style={{
              position: "absolute", left: 23, top: 0, bottom: 0, width: 3,
              background: `linear-gradient(180deg, ${AMBER}, ${TEAL}, ${BRIGHT_TEAL})`,
              borderRadius: 2,
              transformOrigin: "top",
              scaleY: scaleY,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {steps.map((step, i) => (
              <motion.div key={step.number}
                initial={{ opacity: 0, y: 40, rotateX: 6, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  boxShadow: "0 20px 40px rgba(26,107,124,0.12)",
                  borderColor: "rgba(26,107,124,0.25)",
                }}
                style={{
                  background: "#fff",
                  border: `1px solid rgba(26,107,124,0.08)`,
                  borderRadius: 16, padding: "28px 28px 28px 68px",
                  position: "relative", overflow: "hidden",
                  cursor: "default",
                  boxShadow: "0 4px 16px rgba(26,107,124,0.04)",
                  marginLeft: 46,
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 200, damping: 12 }}
                  style={{
                    position: "absolute", left: -46, top: 38,
                    width: 22, height: 22, borderRadius: "50%",
                    background: i === 0 ? AMBER : i === steps.length - 1 ? BRIGHT_TEAL : "#fff",
                    border: `3px solid ${i === 0 ? AMBER : i === steps.length - 1 ? BRIGHT_TEAL : TEAL}`,
                    boxShadow: `0 0 0 6px rgba(26,107,124,0.08), 0 4px 12px rgba(26,107,124,0.15)`,
                    zIndex: 2,
                  }}
                />

                {/* Step number — large watermark with scroll-linked parallax */}
                <motion.div
                  whileInView={{ y: [-15, 15] }}
                  viewport={{ once: false }}
                  style={{
                    position: "absolute", top: -8, right: 16,
                    fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 800,
                    color: "rgba(26,107,124,0.05)", lineHeight: 1, userSelect: "none",
                    letterSpacing: "-3px",
                  }}
                >{step.number}</motion.div>

                {/* Step badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    position: "absolute", left: 22, top: 26,
                    width: 44, height: 44, borderRadius: 10,
                    border: `2px solid ${AMBER}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(26,107,124,0.06)",
                    zIndex: 2,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", color: AMBER, fontSize: 12, fontWeight: 800 }}>{step.number}</span>
                </motion.div>

                <h3 style={{ fontFamily: "var(--font-display)", color: "#0D1E28", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: "#5A7A87", fontSize: 13.5, lineHeight: 1.72 }}>{step.description}</p>

                {/* Bottom accent line that draws in */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                    background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL})`,
                    transformOrigin: "left",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
