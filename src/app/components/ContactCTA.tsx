import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, useSpring, useMotionValue, useTransform } from "motion/react";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const AMBER = "#1A6B7C";
const TEAL = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

export function ContactCTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const formX = useMotionValue(0);
  const formY = useMotionValue(0);
  const formRotateX = useSpring(useTransform(formY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const formRotateY = useSpring(useTransform(formX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleFormMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    formX.set(mouseX / width);
    formY.set(mouseY / height);
  }

  function handleFormMouseLeave() {
    formX.set(0);
    formY.set(0);
  }

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = {
    width: "100%", padding: "12px 14px",
    background: "#F4F8FA", border: `1.5px solid rgba(26,107,124,0.18)`,
    borderRadius: 8, color: "#0D1E28", fontSize: 14, outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.25s, box-shadow 0.25s",
    fontFamily: "var(--font-body)",
  };

  return (
    <section id="contact" style={{ padding: "100px 28px", background: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "start" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -8 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 70, damping: 14 }}
            style={{ perspective: 1000 }}
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
              <span style={{ color: AMBER, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>Free Consultation</span>
            </motion.div>

            <h2 style={{
              fontFamily: "var(--font-display)", color: "#0D1E28",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800,
              marginBottom: 18, lineHeight: 1.2, letterSpacing: "-0.3px",
            }}>
              Ready to Start Your<br />UAE Business Journey?
            </h2>
            <p style={{ color: "#5A7A87", lineHeight: 1.78, marginBottom: 36, fontSize: 15 }}>
              Get a free, no-obligation consultation with one of our experts. We'll recommend the fastest, most cost-effective path to launch in the UAE.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: Phone, label: "Call / WhatsApp", value: "+971 50 7778009", href: "tel:+971507778009" },
                { icon: Mail, label: "Email", value: "contact@yasacsp.com", href: "mailto:contact@yasacsp.com" },
                { icon: MapPin, label: "Office Address", value: "Office No. 901-B68, Iris Bay Tower,\nBusiness Bay, Dubai, UAE", href: null },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    x: 6,
                    scale: 1.01,
                    background: "rgba(26,107,124,0.03)",
                    boxShadow: "0 10px 25px rgba(26,107,124,0.05)",
                  }}
                  style={{ 
                    display: "flex", 
                    gap: 14, 
                    alignItems: "flex-start", 
                    padding: "14px 16px", 
                    borderRadius: 12, 
                    cursor: "default",
                    transition: "all 0.3s ease",
                    border: "1px solid transparent",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10, backgroundColor: "rgba(26,107,124,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    style={{
                      width: 46, height: 46, borderRadius: 11, flexShrink: 0,
                      background: "rgba(26,107,124,0.06)",
                      border: `1px solid rgba(26,107,124,0.12)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background-color 0.25s",
                    }}
                  >
                    <Icon size={18} color={TEAL} />
                  </motion.div>
                  <div>
                    <div style={{ color: "#5A7A87", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ color: "#0D1E28", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{value}</a>
                    ) : (
                      <div style={{ color: "#0D1E28", fontSize: 14, fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.6 }}>{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(26,107,124,0.12)" }}
              style={{
                marginTop: 28, padding: "16px 20px",
                background: "rgba(26,107,124,0.06)",
                border: `1px solid rgba(26,107,124,0.12)`,
                borderRadius: 12,
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ color: TEAL, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 6 }}>Office Hours</div>
              <div style={{ color: "#3D6570", fontSize: 14 }}>Monday – Saturday: 9:00 AM – 6:00 PM</div>
            </motion.div>
          </motion.div>

          {/* Form — 3D card with animated border */}
          <motion.div
            onMouseMove={handleFormMouseMove}
            onMouseLeave={handleFormMouseLeave}
            initial={{ opacity: 0, x: 60, rotateY: 8 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 70, damping: 14 }}
            style={{
              background: "#F4F8FA",
              border: `1.5px solid rgba(26,107,124,0.14)`,
              borderRadius: 16, padding: "38px 34px",
              position: "relative", overflow: "hidden",
              boxShadow: "0 12px 48px rgba(26,107,124,0.06)",
              perspective: 1000,
              rotateX: formRotateX,
              rotateY: formRotateY,
              transformStyle: "preserve-3d",
              transition: "box-shadow 0.3s",
            }}
            whileHover={{
              boxShadow: "0 24px 72px rgba(26,107,124,0.15)",
            }}
          >
            {/* Animated gradient top bar */}
            <motion.div
              animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL}, ${AMBER})`,
                backgroundSize: "200% 100%",
                transform: "translateZ(5px)",
              }}
            />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success"
                  initial={{ opacity: 0, scale: 0.7, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
                  style={{ textAlign: "center", padding: "48px 0", position: "relative", transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: "rgba(26,107,124,0.08)", border: `2px solid ${AMBER}`,
                      margin: "0 auto 22px", display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 0 0 8px rgba(26,107,124,0.05), 0 8px 24px rgba(26,107,124,0.15)`,
                      transform: "translateZ(20px)"
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="M20 6L9 17L4 12"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                      />
                    </svg>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    style={{ fontFamily: "var(--font-display)", color: "#0D1E28", fontSize: "1.4rem", fontWeight: 700, marginBottom: 12, transform: "translateZ(15px)" }}
                  >Message Received!</motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ color: "#5A7A87", lineHeight: 1.7, transform: "translateZ(10px)" }}
                  >A YASA CSP consultant will reach out within 2 business hours.</motion.p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{ display: "flex", flexDirection: "column", gap: 14, transformStyle: "preserve-3d" }}
                >
                  <div style={{ marginBottom: 4, transform: "translateZ(10px)" }}>
                    <h3 style={{ fontFamily: "var(--font-display)", color: "#0D1E28", fontSize: "1.2rem", fontWeight: 700, marginBottom: 4 }}>Get Your Free Consultation</h3>
                    <p style={{ color: "#5A7A87", fontSize: 13 }}>We respond within 2 hours on business days.</p>
                  </div>

                  {[
                    { id: "name", label: "Full Name", placeholder: "John Smith", type: "text" },
                    { id: "email", label: "Email Address", placeholder: "john@company.com", type: "email" },
                    { id: "phone", label: "Phone / WhatsApp", placeholder: "+971 50 000 0000", type: "tel" },
                  ].map(({ id, label, placeholder, type }, i) => (
                    <motion.div key={id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      style={{ transform: "translateZ(15px)" }}
                    >
                      <label style={{ color: "#3D6570", fontSize: 11, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{label}</label>
                      <div style={{ position: "relative" }}>
                        <input type={type} placeholder={placeholder}
                          value={form[id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                          required style={{
                            ...inputStyle,
                            borderColor: focusedInput === id ? AMBER : "rgba(26,107,124,0.18)",
                            boxShadow: focusedInput === id ? "0 0 0 3px rgba(26,107,124,0.08), 0 4px 12px rgba(26,107,124,0.05)" : "none",
                          }}
                          onFocus={() => setFocusedInput(id)}
                          onBlur={() => setFocusedInput(null)}
                        />
                        <motion.div
                          animate={{ scaleX: focusedInput === id ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 2.5,
                            background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL})`,
                            transformOrigin: "center",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    style={{ transform: "translateZ(15px)" }}
                  >
                    <label style={{ color: "#3D6570", fontSize: 11, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Service Required</label>
                    <div style={{ position: "relative" }}>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        required
                        style={{
                          ...inputStyle,
                          color: form.service ? "#0D1E28" : "#5A7A87",
                          borderColor: focusedInput === "service" ? AMBER : "rgba(26,107,124,0.18)",
                          boxShadow: focusedInput === "service" ? "0 0 0 3px rgba(26,107,124,0.08), 0 4px 12px rgba(26,107,124,0.05)" : "none",
                        }}
                        onFocus={() => setFocusedInput("service")}
                        onBlur={() => setFocusedInput(null)}
                      >
                        <option value="">Select a service…</option>
                        <option>Mainland Company Formation</option>
                        <option>Free Zone Setup (IFZA / RAKEZ / Maydan / SAIF Zone)</option>
                        <option>Offshore Company</option>
                        <option>Business Licensing</option>
                        <option>Residence / Golden Visa</option>
                        <option>Freelance / Remote Work Visa</option>
                        <option>Bank Account Opening</option>
                        <option>Accounting & VAT</option>
                        <option>Emirates ID & Medical</option>
                        <option>Other</option>
                      </select>
                      <motion.div
                        animate={{ scaleX: focusedInput === "service" ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 2.5,
                          background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL})`,
                          transformOrigin: "center",
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42, duration: 0.4 }}
                    style={{ transform: "translateZ(15px)" }}
                  >
                    <label style={{ color: "#3D6570", fontSize: 11, display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>Message (optional)</label>
                    <div style={{ position: "relative" }}>
                      <textarea placeholder="Tell us about your business idea…"
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={3} style={{
                          ...inputStyle,
                          resize: "vertical",
                          borderColor: focusedInput === "message" ? AMBER : "rgba(26,107,124,0.18)",
                          boxShadow: focusedInput === "message" ? "0 0 0 3px rgba(26,107,124,0.08), 0 4px 12px rgba(26,107,124,0.05)" : "none",
                        }}
                        onFocus={() => setFocusedInput("message")}
                        onBlur={() => setFocusedInput(null)}
                      />
                      <motion.div
                        animate={{ scaleX: focusedInput === "message" ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                          position: "absolute",
                          bottom: 5,
                          left: 0,
                          right: 0,
                          height: 2.5,
                          background: `linear-gradient(90deg, ${AMBER}, ${BRIGHT_TEAL})`,
                          transformOrigin: "center",
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.button type="submit"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 12px 36px rgba(26,107,124,0.45)", y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: `linear-gradient(135deg, ${AMBER}, #D49520)`, color: "#fff",
                      padding: "14px", borderRadius: 8, border: "none",
                      fontWeight: 700, fontSize: 15, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      fontFamily: "var(--font-display)",
                      boxShadow: "0 4px 18px rgba(26,107,124,0.28)",
                      marginTop: 4,
                      transform: "translateZ(20px)"
                    }}
                  >
                    <Send size={15} /> Send My Request
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
