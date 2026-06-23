import { Footer } from "@/components/Footer";
import { MediaGallery } from "@/components/MediaGallery";
import {
  CapabilityCards,
  CompanyIntro,
  GlobalPresence,
  Hero,
  Insights,
  Services,
  SuccessBanner,
} from "../components/SectionShells";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CompanyIntro />
        <SuccessBanner />
        <Services />
        <Insights />
        <CapabilityCards />
        <GlobalPresence />
      </main>
      <MediaGallery />
      <Footer />
    </>
  );
}
