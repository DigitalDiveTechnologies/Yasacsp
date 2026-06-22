import { motion, AnimatePresence } from "motion/react";
import { X, Clock } from "lucide-react";
import { useState } from "react";

const AMBER = "#1A6B7C";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const closeAnnouncement = () => {
    setVisible(false);
    window.dispatchEvent(new CustomEvent("yasa-announcement", { detail: false }));
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            background: AMBER,
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "9px 48px 9px 24px",
            gap: 32, flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <motion.div
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                background: "rgba(255,255,255,0.28)", borderRadius: 5,
                padding: "2px 10px", fontSize: 11, fontWeight: 800,
                color: "#fff", fontFamily: "var(--font-display)", letterSpacing: "0.06em",
              }}
            >Now!</motion.div>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 500 }}>
              Get a Free Consultation for Your Business.
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.9)" }}>
            <Clock size={13} />
            <span style={{ fontSize: 12, fontWeight: 500 }}>Opening Hours: Mon – Sat &nbsp;09:00 AM – 06:00 PM</span>
          </div>
          <button aria-label="Close announcement" onClick={closeAnnouncement} style={{
            position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.22)", border: "none", borderRadius: "50%",
            width: 22, height: 22, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.38)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
          ><X size={12} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
