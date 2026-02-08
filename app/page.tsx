import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import FindSpecialistSection from "@/components/FindSpecialistSection";
import KeyBenefitsSection from "@/components/KeyBenefitsSection";
import VideoSection from "@/components/VideoSection";
import PartnerHealthSection from "@/components/PartnerHealthSection";
import MobileAppSection from "@/components/MobileAppSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <StatsSection />
            <AboutSection />
            <FindSpecialistSection />
            <KeyBenefitsSection />
            <VideoSection />
            <PartnerHealthSection />
            <MobileAppSection />
            <Footer />
        </main>
    );
}
