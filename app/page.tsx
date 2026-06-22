import { Footer } from "@/components/Footer";
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
      <Footer />
    </>
  );
}
