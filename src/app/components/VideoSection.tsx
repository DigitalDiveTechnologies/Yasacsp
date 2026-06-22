import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Play, Upload, Video } from "lucide-react";

const TEAL = "#1A6B7C";
const AMBER = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

// ─────────────────────────────────────────────
// Paste your YouTube video ID here once ready:
// e.g. const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";
const YOUTUBE_VIDEO_ID = "";
// ─────────────────────────────────────────────

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const hasVideo = YOUTUBE_VIDEO_ID.length > 0;

  return (
    <section style={{ padding: "100px 28px", background: "#EEF5F8", overflow: "hidden" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(26,107,124,0.1)", border: `1px solid rgba(26,107,124,0.25)`,
            borderRadius: 20, padding: "5px 16px", marginBottom: 16,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: AMBER }} />
            <span style={{ color: AMBER, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>Watch & Learn</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", color: "#0D1E28",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800,
            marginBottom: 16, letterSpacing: "-0.3px",
          }}>
            See How Easy It Is to{" "}
            <span style={{ color: TEAL }}>Start Your Business</span> in Dubai
          </h2>
          <p style={{ color: "#5A7A87", maxWidth: 520, margin: "0 auto", lineHeight: 1.75, fontSize: 15 }}>
            Watch our overview to see how YASA CSP guides entrepreneurs through every step of UAE company formation — from consultation to licence in hand.
          </p>
        </motion.div>

        {/* Player area */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            position: "relative",
            maxWidth: 900, margin: "0 auto",
            borderRadius: 20, overflow: "hidden",
            boxShadow: "0 32px 80px rgba(26,107,124,0.18), 0 8px 24px rgba(0,0,0,0.08)",
            aspectRatio: "16/9",
            background: "#0D1E28",
          }}
        >
          {hasVideo && playing ? (
            /* ── Live YouTube embed ── */
            <>
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="YASA CSP Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              />
              <button onClick={() => setPlaying(false)} style={{
                position: "absolute", top: 14, right: 14,
                background: "rgba(0,0,0,0.55)", border: "none", borderRadius: "50%",
                width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff", transition: "background 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.background = `rgba(26,107,124,0.85)`)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.55)")}
              >✕</button>
            </>
          ) : (
            /* ── Placeholder / Thumbnail ── */
            <>
              {/* Background gradient */}
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(135deg, #0D1E28 0%, #1A3D4A 50%, ${TEAL} 100%)`,
              }} />

              {/* Animated teal glow */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 320, height: 320, borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(31,138,154,0.4) 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Decorative grid lines */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`v${i}`} x1={`${i * 11.1}%`} y1="0" x2={`${i * 11.1}%`} y2="100%" stroke="#1F8A9A" strokeWidth="1" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={`${i * 20}%`} x2="100%" y2={`${i * 20}%`} stroke="#1F8A9A" strokeWidth="1" />
                ))}
              </svg>

              {/* Brand label top-left */}
              <div style={{
                position: "absolute", top: 20, left: 24,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                borderRadius: 8, padding: "6px 14px",
                display: "flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: AMBER }} />
                <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}>
                  YASA CSP — UAE Business Setup
                </span>
              </div>

              {/* Centre content */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 20,
              }}>
                {/* Video icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: "rgba(26,107,124,0.15)",
                    border: `2px solid rgba(26,107,124,0.5)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Video size={32} color={AMBER} />
                </motion.div>

                <div style={{ textAlign: "center" }}>
                  <div style={{
                    color: "#fff", fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 800,
                    marginBottom: 8,
                  }}>
                    Our Company Overview Video
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                    Coming soon — uploading shortly
                  </div>
                </div>

                {/* Upload prompt badge */}
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: AMBER, borderRadius: 24,
                    padding: "8px 20px",
                    boxShadow: "0 4px 20px rgba(26,107,124,0.5)",
                  }}
                >
                  <Upload size={14} color="#fff" />
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: "var(--font-display)" }}>
                    Video uploading soon
                  </span>
                </motion.div>
              </div>

              {/* Pulsing outer ring */}
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 88, height: 88, borderRadius: "50%",
                  border: `2px solid ${AMBER}`,
                  pointerEvents: "none",
                  marginTop: -36,
                }}
              />

              {/* Bottom note */}
              <div style={{
                position: "absolute", bottom: 18, left: 0, right: 0, textAlign: "center",
              }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)",
                  borderRadius: 20, padding: "5px 14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <Play size={11} color="rgba(255,255,255,0.6)" fill="rgba(255,255,255,0.6)" />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                    To add your video — paste your YouTube ID into <code style={{ color: AMBER, fontFamily: "monospace" }}>VideoSection.tsx</code>
                  </span>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Below — 3 quick points */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20, maxWidth: 900, margin: "36px auto 0",
        }}>
          {[
            { num: "01", text: "Free 30-minute consultation — no commitment required" },
            { num: "02", text: "Company licence issued in as little as 3 working days" },
            { num: "03", text: "Full support from visas to banking and beyond" },
          ].map(({ num, text }) => (
            <motion.div key={num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + parseInt(num) * 0.1, duration: 0.45 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,107,124,0.14)" }}
              style={{
                background: "#fff",
                border: `1px solid rgba(26,107,124,0.12)`,
                borderRadius: 12, padding: "18px 20px",
                display: "flex", alignItems: "flex-start", gap: 12,
                boxShadow: "0 2px 12px rgba(26,107,124,0.06)",
                transition: "box-shadow 0.25s",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", color: AMBER, fontWeight: 800, fontSize: 20, lineHeight: 1, flexShrink: 0 }}>{num}</span>
              <span style={{ color: "#3D6570", fontSize: 14, lineHeight: 1.6 }}>{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
