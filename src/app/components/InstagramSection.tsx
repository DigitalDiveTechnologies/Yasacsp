import { useRef } from "react";
import { motion, useInView } from "motion/react";
import heroVideo from "../../assets/yasa-hero.mp4";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

export function HeroVideo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        height: "clamp(320px, 52vw, 560px)",
        background: "#06151A",
        lineHeight: 0,
      }}
    >
      {/* top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL}, ${AMBER})`,
          transformOrigin: "left",
          zIndex: 10,
        }}
      />

      {/* full-width cover video */}
      <motion.video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0, scale: 1.04 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />

      {/* dark overlay */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(180deg, rgba(13,30,40,0.55) 0%, rgba(13,30,40,0.7) 50%, rgba(13,30,40,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* overlay content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: "absolute", inset: 0, zIndex: 3,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "0 28px", textAlign: "center",
        }}
      >
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: `1px solid rgba(26,107,124,0.4)`,
          borderRadius: 24, padding: "6px 16px", marginBottom: 20,
          background: "rgba(26,107,124,0.1)",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: AMBER }} />
          <span style={{ color: AMBER, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
            YASA Corporate Services
          </span>
        </div>
        <h2 style={{
          fontFamily: "var(--font-display)", color: "#fff",
          fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800,
          lineHeight: 1.15, marginBottom: 14, letterSpacing: "-0.5px",
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}>
          Your Trusted Partner<br />for UAE Business Setup
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
          lineHeight: 1.7, maxWidth: 520,
        }}>
          From company formation to visas, banking, and compliance — we handle every step so you can focus on growth.
        </p>
      </motion.div>

      {/* bottom fade into next section */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 100, zIndex: 4,
          background: "linear-gradient(to bottom, transparent, #F4F8FA)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
