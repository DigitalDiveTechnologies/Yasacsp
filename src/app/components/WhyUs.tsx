import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Zap, Award, HeadphonesIcon, MapPin, Clock, Star } from "lucide-react";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";

const reasons = [
  { icon: Zap, title: "Fast Turnaround", description: "Most formations completed in 3–5 working days. Some free zones in under 24 hours." },
  { icon: Award, title: "10+ Years Experience", description: "A decade of UAE corporate services expertise, trusted by clients from 60+ countries." },
  { icon: HeadphonesIcon, title: "Dedicated Case Manager", description: "One expert handles your entire journey — no handoffs, no confusion, no delays." },
  { icon: MapPin, title: "Business Bay Office", description: "Based at Iris Bay Tower, Business Bay — meet us in person or connect virtually." },
  { icon: Clock, title: "End-to-End Service", description: "From name reservation to bank account activation, every step handled for you." },
  { icon: Star, title: "5-Star Rated", description: "Hundreds of verified reviews from business owners who built their UAE companies with YASA CSP." },
];

interface TiltImageProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

function TiltImage({ children, style, ...props }: TiltImageProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 25 });

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

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  
  // Smooth the scroll progress for a softer parallax
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const imgY = useTransform(smoothScrollProgress, [0, 1], [40, -40]);
  const imgScale = useTransform(smoothScrollProgress, [0, 0.5, 1], [1.06, 1, 1.03]);

  return (
    <section id="about" style={{ padding: "100px 28px", background: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Floating accent circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: -120, right: -120,
          width: 350, height: 350, borderRadius: "50%",
          border: `1px solid rgba(26,107,124,0.05)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 72, alignItems: "center" }}>

          {/* Left image — parallax scroll + 3D tilt */}
          <div style={{ position: "relative", perspective: 1000 }}>
            <TiltImage
              initial={{ opacity: 0, x: -60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, type: "spring", stiffness: 60, damping: 14 }}
              style={{ width: "100%", position: "relative" }}
            >
              <motion.div style={{ y: imgY, scale: imgScale, transformStyle: "preserve-3d" }}>
                <div
                  style={{
                    borderRadius: 16, overflow: "hidden",
                    border: `1px solid rgba(26,107,124,0.18)`,
                    aspectRatio: "4/5", background: "#EEF5F8",
                    boxShadow: `0 32px 80px rgba(26,107,124,0.18)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1465414951857-102134ffaa57?w=700&h=880&fit=crop&auto=format"
                    alt="Dubai Burj Al Arab"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, transparent 50%, rgba(13,30,40,0.5) 100%)",
                  }} />
                </div>
              </motion.div>

              {/* Floating stat — bounces in with spring, elevated in 3D space */}
              <motion.div
                initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, type: "spring", stiffness: 150, damping: 10 }}
                whileHover={{ y: -8, scale: 1.08, boxShadow: `0 24px 50px rgba(26,107,124,0.45)` }}
                style={{
                  position: "absolute", bottom: -20, right: -18,
                  background: `linear-gradient(135deg, ${AMBER}, #D49520)`, borderRadius: 14,
                  padding: "20px 26px", minWidth: 156,
                  boxShadow: `0 16px 40px rgba(26,107,124,0.35)`,
                  cursor: "default",
                  transform: "translateZ(40px)",
                  zIndex: 10,
                  transition: "box-shadow 0.3s",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: 40, fontWeight: 800, lineHeight: 1 }}
                >60+</motion.div>
                <div style={{ color: "rgba(255,255,255,0.88)", fontSize: 12, fontWeight: 600, marginTop: 6 }}>Countries Served</div>
              </motion.div>

              {/* Corner accent — spring in */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, type: "spring", stiffness: 180 }}
                style={{
                  position: "absolute", top: -14, left: -14,
                  width: 50, height: 50, borderRadius: 10,
                  border: `2px solid ${TEAL}`,
                  background: "rgba(26,107,124,0.07)",
                  transform: "translateZ(-20px)",
                }}
              />
            </TiltImage>
          </div>

          {/* Right */}
          <div ref={ref}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={inView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                <span style={{ color: AMBER, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>Why Choose YASA CSP</span>
              </motion.div>
              <h2 style={{
                fontFamily: "var(--font-display)", color: "#0D1E28",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800,
                marginBottom: 18, lineHeight: 1.2, letterSpacing: "-0.3px",
              }}>
                Your UAE Business Setup<br />Partner from Day One
              </h2>
              <p style={{ color: "#5A7A87", lineHeight: 1.78, marginBottom: 36, fontSize: 15 }}>
                YASA CSP goes beyond paperwork. We understand the UAE regulatory landscape inside out and craft solutions tailored to your goals, nationality, and timeline.
              </p>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {reasons.map(({ icon: Icon, title, description }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    x: 6,
                    scale: 1.02,
                    background: "rgba(26,107,124,0.03)",
                    boxShadow: "0 10px 25px rgba(26,107,124,0.06)",
                  }}
                  style={{ 
                    display: "flex", 
                    gap: 12, 
                    alignItems: "flex-start", 
                    padding: "16px", 
                    borderRadius: 14, 
                    cursor: "default",
                    border: "1px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10, backgroundColor: "rgba(26,107,124,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    style={{
                      width: 38, height: 38, borderRadius: 9, flexShrink: 0,
                      background: "rgba(26,107,124,0.06)",
                      border: `1px solid rgba(26,107,124,0.12)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background-color 0.25s",
                    }}
                  >
                    <Icon size={17} color={TEAL} />
                  </motion.div>
                  <div>
                    <div style={{ color: "#0D1E28", fontWeight: 700, fontSize: 13.5, marginBottom: 4 }}>{title}</div>
                    <div style={{ color: "#5A7A87", fontSize: 13, lineHeight: 1.6 }}>{description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
