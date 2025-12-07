import HeroSection from "@/components/sections/hero";
import Header from "../components/layout/header";
import Container from "@/components/layout/container";
import SupportSection from "@/components/sections/support";
import FeatureSection from "@/components/sections/features";
import BenefitSection from "@/components/sections/benefits";
import PlanSection from "@/components/sections/plan";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Container>
        <HeroSection />
        <SupportSection />
        <FeatureSection />
        <BenefitSection />
        <PlanSection />
      </Container>
      <Footer />
    </div>
  );
}
