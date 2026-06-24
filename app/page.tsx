import { Footer } from "@/components/Footer";
import { MediaGallery } from "@/components/MediaGallery";
import { PartnershipSpotlight } from "@/components/PartnershipSpotlight";
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
        <PartnershipSpotlight />
        <GlobalPresence />
      </main>
      <MediaGallery />
      <Footer />
    </>
  );
}
