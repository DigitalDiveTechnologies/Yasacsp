import "../styles/fonts.css";
import { useState, useEffect, type ReactNode } from "react";
import { motion } from "motion/react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { ContactCTA } from "./components/ContactCTA";
import { HeroVideo } from "./components/InstagramSection";
import { Footer } from "./components/Footer";
import { SitePage } from "./components/SitePage";
import { LoadingScreen } from "./components/LoadingScreen";
import { sitePageByRoute } from "./content/site-pages";

function AnimatedSection({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default function App() {
  const [ready, setReady] = useState(false);
  const route =
    window.location.pathname.length > 1
      ? window.location.pathname.replace(/\/+$/, "")
      : "/";
  const page = sitePageByRoute.get(route);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: "#F4F8FA", minHeight: "100vh", overflowX: "hidden" }}>
      <LoadingScreen />
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnnouncementBar />
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Navbar />
          </motion.div>
          {page ? (
            <SitePage page={page} />
          ) : (
            <>
              <AnimatedSection>
                <Hero />
              </AnimatedSection>
              <AnimatedSection>
                <HeroVideo />
              </AnimatedSection>
              <AnimatedSection>
                <Stats />
              </AnimatedSection>
              <AnimatedSection>
                <Services />
              </AnimatedSection>
              <AnimatedSection>
                <WhyUs />
              </AnimatedSection>
              <AnimatedSection>
                <Process />
              </AnimatedSection>
              <AnimatedSection>
                <Testimonials />
              </AnimatedSection>
              <AnimatedSection>
                <ContactCTA />
              </AnimatedSection>
            </>
          )}
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </motion.div>
      )}
    </div>
  );
}
