import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "motion/react";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";

const stats = [
  { value: 1000, suffix: "+", label: "Businesses Formed", icon: "🏢" },
  { value: 10, suffix: "+", label: "Years of Expertise", icon: "📅" },
  { value: 50, suffix: "+", label: "Free Zones Covered", icon: "🌐" },
  { value: 97, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (inView) {
      const node = ref.current;
      if (!node) return;

      const controls = animate(0, target, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        onUpdate(value) {
          node.textContent = Math.floor(value).toLocaleString() + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [inView, target, suffix]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "var(--font-display)",
        color: AMBER,
        fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: "-1px",
        display: "inline-block",
      }}
    >
      0{suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{
      background: "linear-gradient(135deg, #fff 0%, #F4F8FA 50%, #fff 100%)",
      borderTop: `1px solid rgba(26,107,124,0.12)`,
      borderBottom: `1px solid rgba(26,107,124,0.12)`,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Animated background shimmer */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        style={{
          position: "absolute", top: 0, left: 0, width: "50%", height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(26,107,124,0.03), transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 28px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                background: "rgba(26,107,124,0.03)",
                boxShadow: "0 15px 35px rgba(26,107,124,0.06)",
                borderColor: "rgba(26,107,124,0.25)",
              }}
              style={{
                textAlign: "center", padding: "28px 16px",
                border: "1px solid rgba(26,107,124,0.08)",
                borderRadius: 14, cursor: "default",
                position: "relative",
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(4px)",
                transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
            >
              {/* Top accent line that draws in */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute", top: 0, left: "15%", right: "15%", height: 2.5,
                  background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)`,
                  transformOrigin: "center",
                }}
              />

              {/* Floating icon — continuous gentle bounce */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  fontSize: 28, marginBottom: 14,
                  display: "inline-block",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.08))",
                }}
              >{s.icon}</motion.div>

              <div>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ color: "#5A7A87", fontSize: 12.5, marginTop: 12, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
