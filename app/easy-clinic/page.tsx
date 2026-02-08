import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EasyClinicHero from "@/components/EasyClinicHero";
import ServiceCardsSection from "@/components/ServiceCardsSection";
import HealthcareJourneyCTA from "@/components/HealthcareJourneyCTA";

export default function EasyClinicPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <EasyClinicHero />
            <ServiceCardsSection />
            <HealthcareJourneyCTA />
            <Footer />
        </main>
    );
}
