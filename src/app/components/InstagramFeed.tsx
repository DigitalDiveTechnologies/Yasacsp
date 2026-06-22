import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Instagram, PlayCircle, ShieldCheck, Users, Globe2 } from "lucide-react";

const TEAL = "#1A6B7C";
const AMBER = "#1A6B7C";
const BRIGHT_TEAL = "#1F8A9A";

type Post = {
  img: string;
  caption: string;
  tag: string;
  metric: string;
  isVideo?: boolean;
};

const IG_HANDLE = "yasa_corporate_service_provide";
const IG_URL = "https://www.instagram.com/yasa_corporate_service_provide";
const PROFILE_IMG = "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-19/330477509_859076268655115_147813505478660639_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gFB6yNCj00UrR-NxJu98bnZnwhw3u81EI00nDEFqJ0dWGUN4TQXZyqSNiQQ51q_lhSu5dAnI-C1g6h5BI4E5Vfr&_nc_ohc=Gvf55hxnEgAQ7kNvwHv09pw&_nc_gid=kOc5AYTlRbofUnPEetRuQg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af-a4sYoynu-2_4j9gKB6-yaxEB5O9F1bXgwXytUwvEWhA&oe=6A305759&_nc_sid=8b3546";

const posts: Post[] = [
  {
    img: "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.82787-15/622078674_18087024557332124_4173322160946717005_n.jpg?stp=dst-jpg_e35_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTIzLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gFB6yNCj00UrR-NxJu98bnZnwhw3u81EI00nDEFqJ0dWGUN4TQXZyqSNiQQ51q_lhSu5dAnI-C1g6h5BI4E5Vfr&_nc_ohc=i_RvSzMNOn0Q7kNvwF3fUbx&_nc_gid=kOc5AYTlRbofUnPEetRuQg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af-no8FOlUK2qIRajgn33df-RsWoDN9LJMB7F8zNfloURA&oe=6A304D56&_nc_sid=8b3546",
    caption: "UAE business setup guidance from YASA Corporate Service Provider Dubai.",
    tag: "Business Setup",
    metric: "219 posts",
  },
  {
    img: "https://instagram.fauh1-2.fna.fbcdn.net/v/t51.82787-15/624717158_18155029294426548_6337529135625730845_n.jpg?stp=c34.0.1123.1123a_dst-jpg_e35_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTkyLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=instagram.fauh1-2.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2gFB6yNCj00UrR-NxJu98bnZnwhw3u81EI00nDEFqJ0dWGUN4TQXZyqSNiQQ51q_lhSu5dAnI-C1g6h5BI4E5Vfr&_nc_ohc=6jpy7YwNzu0Q7kNvwHS7Xc6&_nc_gid=kOc5AYTlRbofUnPEetRuQg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af9MIlPbjXFxr5ZbECpCAaPXgUhYm6X_R8zAPIZ6w1hVXg&oe=6A30513A&_nc_sid=8b3546",
    caption: "Practical updates and posts for entrepreneurs planning their Dubai company setup.",
    tag: "Dubai Company",
    metric: "9.7K followers",
  },
  {
    img: "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.82787-15/624896580_18087123908124127_697591890134385287_n.jpg?stp=dst-jpg_e35_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTMzLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2gFB6yNCj00UrR-NxJu98bnZnwhw3u81EI00nDEFqJ0dWGUN4TQXZyqSNiQQ51q_lhSu5dAnI-C1g6h5BI4E5Vfr&_nc_ohc=YrPbezgqCNYQ7kNvwEOZ4uI&_nc_gid=kOc5AYTlRbofUnPEetRuQg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af--93D18bsbn4fDWDGLLCSIzqf8ZrXul-WUo0TPnxuhpw&oe=6A302F71&_nc_sid=8b3546",
    caption: "Client education content covering UAE license, visa, and compliance steps.",
    tag: "UAE License",
    metric: "Dubai, UAE",
  },
  {
    img: "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.82787-15/654022854_18003650033719412_2406090657811768172_n.jpg?stp=dst-jpg_e35_s640x640_sh2.08_tt6&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gFB6yNCj00UrR-NxJu98bnZnwhw3u81EI00nDEFqJ0dWGUN4TQXZyqSNiQQ51q_lhSu5dAnI-C1g6h5BI4E5Vfr&_nc_ohc=cnKODBF9BEoQ7kNvwHnbGQV&_nc_gid=kOc5AYTlRbofUnPEetRuQg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af_Ed6vW3Dex6nSYC-o_7-sTTQhoTqgLcrTjy7KHKKssEw&oe=6A30574B&_nc_sid=8b3546",
    caption: "Golden visa and UAE residence information for founders and professionals.",
    tag: "Golden Visa",
    metric: "Real posts",
  },
  {
    img: "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.82787-15/625351076_18093005794977075_4070024966300781718_n.jpg?stp=dst-jpg_e35_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjgwLnNkci5yZWd1bGFyX3Bob3RvLmMyIn0&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2gFB6yNCj00UrR-NxJu98bnZnwhw3u81EI00nDEFqJ0dWGUN4TQXZyqSNiQQ51q_lhSu5dAnI-C1g6h5BI4E5Vfr&_nc_ohc=1-qh3b57Eb0Q7kNvwHvW-6t&_nc_gid=kOc5AYTlRbofUnPEetRuQg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af_TcgrEqqCTTGSO7Lch_7OdrMbvLq_MQs8IopvBAlxenA&oe=6A303FA0&_nc_sid=8b3546",
    caption: "Regular business setup guidance from YASA for UAE entrepreneurs.",
    tag: "Free Zone",
    metric: "Fast service",
  },
  {
    img: "https://instagram.fauh1-1.fna.fbcdn.net/v/t51.71878-15/499760415_689838813632732_7905455195508998906_n.jpg?stp=c0.124.320.320a_dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4zMjAuc2RyLnZpZGVvX2RlZmF1bHRfY292ZXJfZnJhbWUuYzIifQ&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2gFB6yNCj00UrR-NxJu98bnZnwhw3u81EI00nDEFqJ0dWGUN4TQXZyqSNiQQ51q_lhSu5dAnI-C1g6h5BI4E5Vfr&_nc_ohc=OOKURaATK8UQ7kNvwFLwSvD&_nc_gid=kOc5AYTlRbofUnPEetRuQg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af-phcEceZ3k-7a_HLTG_oAfswOEy7KQOVtPozTnC1_eNg&oe=6A303F7B&_nc_sid=8b3546",
    caption: "Instagram reel cover from the client profile, used as social proof for active content.",
    tag: "Reel",
    metric: "Video content",
    isVideo: true,
  },
];

const stats = [
  { value: "219", label: "Published posts" },
  { value: "9.7K", label: "Instagram followers" },
  { value: "Dubai", label: "Active UAE presence" },
  { value: "Verified", label: "Real client profile" },
];

function StatIcon({ index }: { index: number }) {
  if (index === 0) return <Instagram size={18} color={AMBER} style={{ marginBottom: 8 }} />;
  if (index === 1) return <Users size={18} color={AMBER} style={{ marginBottom: 8 }} />;
  if (index === 2) return <Globe2 size={18} color={AMBER} style={{ marginBottom: 8 }} />;
  return <ShieldCheck size={18} color={AMBER} style={{ marginBottom: 8 }} />;
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "relative",
        aspectRatio: "1/1",
        borderRadius: 16,
        overflow: "hidden",
        display: "block",
        textDecoration: "none",
        background: "#EEF5F8",
        boxShadow: hovered ? "0 22px 54px rgba(26,107,124,0.24)" : "0 4px 20px rgba(26,107,124,0.1)",
        transition: "box-shadow 0.3s",
      }}
    >
      <motion.img
        src={post.img}
        alt={post.caption}
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.4 }}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      <div style={{
        position: "absolute", top: 12, left: 12,
        background: "rgba(255,255,255,0.94)",
        borderRadius: 20, padding: "4px 11px",
        fontSize: 11, fontWeight: 800, color: TEAL,
        fontFamily: "var(--font-display)",
        letterSpacing: "0.04em",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
      }}>
        {post.tag}
      </div>

      {post.isVideo && (
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1 }}
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{
            width: 58, height: 58, borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 12px 32px rgba(13,30,40,0.25)",
          }}>
            <PlayCircle size={34} color={AMBER} fill="rgba(26,107,124,0.12)" />
          </div>
        </motion.div>
      )}

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(13,30,40,0.16) 0%, rgba(13,30,40,0.86) 100%)",
          display: "flex", flexDirection: "column",
          justifyContent: "flex-end",
          padding: "17px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Instagram size={16} color="#fff" />
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 800 }}>{post.metric}</span>
          </div>
          <ExternalLink size={15} color="#fff" />
        </div>
        <p style={{
          color: "rgba(255,255,255,0.9)", fontSize: 12.5, lineHeight: 1.55,
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {post.caption}
        </p>
      </motion.div>
    </motion.a>
  );
}

export function InstagramFeed() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "104px 28px", background: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 0.95fr) minmax(320px, 1.25fr)",
            gap: 34,
            alignItems: "center",
            marginBottom: 44,
          }}
        >
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(26,107,124,0.32)",
              background: "#FFF8ED",
              color: AMBER,
              borderRadius: 999,
              padding: "8px 16px",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              fontFamily: "var(--font-display)",
              marginBottom: 18,
            }}>
              <Instagram size={15} /> Real Instagram Presence
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 54px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              color: "#0D1E28",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}>
              See YASA CSP's work, updates and client trust on Instagram
            </h2>
            <p style={{ color: "#547482", fontSize: 17, lineHeight: 1.75, margin: 0, maxWidth: 600 }}>
              The client profile is active with Dubai business setup posts, UAE visa guidance, service updates and real brand content that helps visitors trust the company before they enquire.
            </p>
          </div>

          <div style={{
            border: "1px solid rgba(26,107,124,0.12)",
            borderRadius: 22,
            padding: 22,
            background: "linear-gradient(135deg, #F8FCFD 0%, #EEF5F8 100%)",
            boxShadow: "0 22px 60px rgba(26,107,124,0.12)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 17, marginBottom: 20 }}>
              <div style={{
                padding: 3,
                borderRadius: "50%",
                background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                flexShrink: 0,
              }}>
                <img
                  src={PROFILE_IMG}
                  alt="YASA Corporate Service Provider Instagram profile"
                  style={{ width: 76, height: 76, borderRadius: "50%", border: "3px solid #fff", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <strong style={{ color: "#0D1E28", fontFamily: "var(--font-display)", fontSize: 18 }}>
                    @{IG_HANDLE}
                  </strong>
                  <span style={{
                    background: TEAL,
                    color: "#fff",
                    borderRadius: 999,
                    padding: "4px 9px",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>Real profile</span>
                </div>
                <p style={{ margin: "6px 0 0", color: "#5A7A87", lineHeight: 1.55, fontSize: 14 }}>
                  YASA Corporate Service Provider · Business Consultant · Fast and Reliable Services · Dubai
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              {stats.map(({ value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.12 + index * 0.07 }}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(26,107,124,0.1)",
                    borderRadius: 14,
                    padding: "16px 10px",
                    textAlign: "center",
                  }}
                >
                  <StatIcon index={index} />
                  <div style={{ color: "#0D1E28", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19 }}>{value}</div>
                  <div style={{ color: "#6C8995", fontSize: 11, lineHeight: 1.35, marginTop: 3 }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.5 }}
          style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}
        >
          <div style={{ flex: 1, height: 1, background: "rgba(26,107,124,0.12)" }} />
          <div style={{
            display: "flex", alignItems: "center", gap: 7,
            color: "#5A7A87", fontSize: 13, fontWeight: 700,
            letterSpacing: "0.06em", textTransform: "uppercase",
          }}>
            <Instagram size={15} color={AMBER} />
            Recent posts from the official profile
          </div>
          <div style={{ flex: 1, height: 1, background: "rgba(26,107,124,0.12)" }} />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}>
          {posts.map((post, i) => (
            <PostCard key={post.img} post={post} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            marginTop: 40,
            background: "linear-gradient(110deg, #EEF5F8 0%, #F4F8FA 100%)",
            border: "1px solid rgba(26,107,124,0.14)",
            borderRadius: 16,
            padding: "24px 32px",
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12,
              background: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Instagram size={23} color="#fff" />
            </div>
            <div>
              <div style={{ color: "#0D1E28", fontWeight: 800, fontSize: 16, fontFamily: "var(--font-display)" }}>
                Follow the real YASA profile for updates, reels and business setup tips
              </div>
              <div style={{ color: "#5A7A87", fontSize: 13, marginTop: 3 }}>
                219 posts · 9,710 followers · Contact: +971 50 377 4160 · yasacsp.com
              </div>
            </div>
          </div>
          <motion.a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              color: "#fff",
              padding: "12px 22px", borderRadius: 9,
              textDecoration: "none", fontWeight: 800, fontSize: 14,
              fontFamily: "var(--font-display)",
              boxShadow: "0 8px 24px rgba(220,39,67,0.26)",
              flexShrink: 0,
            }}
          >
            <ExternalLink size={15} /> View Instagram Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
