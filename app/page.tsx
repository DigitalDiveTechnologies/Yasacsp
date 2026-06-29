import { Footer } from "@/components/Footer";
import { LogoSlider } from "@/components/LogoSlider";
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
        <LogoSlider />
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
