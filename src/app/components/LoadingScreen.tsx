import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "motion/react";

const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";
const AMBER = "#1A6B7C";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setProgress(Math.floor(value));
      },
      onComplete() {
        setTimeout(() => setLoading(false), 350);
      },
    });
    return () => controls.stop();
  }, []);

  const words = ["YASA", "Corporate", "Services"];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="yasa-loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#F4F8FA",
            overflow: "hidden",
          }}
        >
          {/* Subtle dot grid background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(${TEAL}22 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 70% 70% at center, #000 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, #000 30%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Animated glow blobs */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "20%",
              right: "20%",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(26,107,124,0.10) 0%, transparent 70%)`,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute",
              bottom: "20%",
              left: "20%",
              width: 280,
              height: 280,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(26,107,124,0.10) 0%, transparent 70%)`,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          {/* Huge progress watermark — bottom right */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "-4%",
              right: "3%",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(7rem, 18vw, 22rem)",
              fontWeight: 900,
              color: `rgba(26,107,124,0.04)`,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.04em",
            }}
          >
            {String(progress).padStart(2, "0")}
          </motion.div>

          {/* ── Main content ── */}
          <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>

            {/* Accent line above */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: 2,
                width: 48,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL})`,
                margin: "0 auto 28px",
                transformOrigin: "left",
              }}
            />

            {/* Brand name — word-by-word clip reveal */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                marginBottom: 6,
              }}
            >
              {words.map((word, i) => (
                <div key={word} style={{ overflow: "hidden" }}>
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.2 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: i === 0 ? 900 : 700,
                      fontSize: i === 0
                        ? "clamp(2.6rem, 6vw, 4.2rem)"
                        : "clamp(1rem, 2.5vw, 1.6rem)",
                      color: i === 0 ? TEAL : "#4A7A87",
                      letterSpacing: i === 0 ? "-0.03em" : "0.15em",
                      textTransform: i === 0 ? "none" : "uppercase",
                      lineHeight: 1.1,
                    }}
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "#8AABB5",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginTop: 14,
                marginBottom: 48,
              }}
            >
              Business Setup &amp; Corporate Services
            </motion.p>

            {/* Progress track */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 200,
                height: 3,
                background: "rgba(26,107,124,0.10)",
                borderRadius: 2,
                overflow: "hidden",
                margin: "0 auto",
                transformOrigin: "center",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${TEAL}, ${AMBER})`,
                  width: `${progress}%`,
                  boxShadow: `0 0 10px rgba(26,107,124,0.4)`,
                }}
                transition={{ ease: "easeOut" }}
              />
            </motion.div>

            {/* Percentage label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                display: "block",
                marginTop: 12,
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 700,
                color: AMBER,
                letterSpacing: "0.1em",
              }}
            >
              {progress}%
            </motion.span>
          </div>

          {/* Floating corner accents */}
          {[
            { top: "8%", left: "8%", size: 10, delay: 0.3 },
            { top: "12%", right: "10%", size: 7, delay: 0.5 },
            { bottom: "10%", left: "12%", size: 8, delay: 0.4 },
            { bottom: "8%", right: "8%", size: 11, delay: 0.6 },
          ].map((dot, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: dot.delay, type: "spring", stiffness: 200 }}
              style={{
                position: "absolute",
                ...dot,
                width: dot.size,
                height: dot.size,
                borderRadius: "50%",
                background: i % 2 === 0
                  ? `rgba(26,107,124,0.25)`
                  : `rgba(26,107,124,0.25)`,
              }}
            />
          ))}

          {/* Decorative corner L-brackets */}
          {[
            { top: 24, left: 24, rotate: 0 },
            { top: 24, right: 24, rotate: 90 },
            { bottom: 24, right: 24, rotate: 180 },
            { bottom: 24, left: 24, rotate: 270 },
          ].map((corner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                top: corner.top,
                left: corner.left,
                right: corner.right,
                bottom: corner.bottom,
                width: 20,
                height: 20,
                borderTop: i < 2 ? `1.5px solid rgba(26,107,124,0.25)` : "none",
                borderBottom: i >= 2 ? `1.5px solid rgba(26,107,124,0.25)` : "none",
                borderLeft: (i === 0 || i === 3) ? `1.5px solid rgba(26,107,124,0.25)` : "none",
                borderRight: (i === 1 || i === 2) ? `1.5px solid rgba(26,107,124,0.25)` : "none",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
