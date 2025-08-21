import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Testimonals from "@/components/Testimonals";
import Integrations from "@/components/Integrations";
import GetStarted from "@/components/GetStarted";
import FeaturesGrid from "@/components/FeaturesGrid";
import UseCaseSection from "@/components/UseCaseSection";
import StatsSection from "@/components/StatsSection";
import HeroSection from "@/components/HeroSection";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16 overflow-hidden">

      <HeroSection />

      <StatsSection />

      <UseCaseSection />

      <FeaturesGrid />

      <GetStarted />

      <Integrations />

      <Testimonals />

      <Faq />

      <Footer />
      
    </div>
  );
}
