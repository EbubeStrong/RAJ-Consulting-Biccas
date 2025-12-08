"use client";
import BenefitSection from "../sections/benefits";
import FeatureSection from "../sections/features";
import HeroSection from "../sections/hero";
import PlanSection from "../sections/plan";
import SupportSection from "../sections/support";

function Main() {
    return (
        <main className="w-full overflow-hidden">
            <HeroSection />
            <SupportSection />
            <FeatureSection />
            <BenefitSection />
            <PlanSection />
        </main>

    );
}

export default Main;