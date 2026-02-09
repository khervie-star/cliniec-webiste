import DynamicHeader from "@/components/DynamicHeader";
import Footer from "@/components/Footer";
import EasyClinicHero from "@/components/EasyClinicHero";
import PharmaCareAbout from "@/components/PharmaCareAbout";
import ServiceCardsSection from "@/components/ServiceCardsSection";
import HealthcareJourneyCTA from "@/components/HealthcareJourneyCTA";
import PageLoader from "@/components/PageLoader";

export default function EasyClinicPage() {
    return (
        <>
            <PageLoader />
            <DynamicHeader transparent />
            <main className="min-h-screen bg-white">
                <EasyClinicHero />
                <PharmaCareAbout />
                <ServiceCardsSection />
                <HealthcareJourneyCTA />
                <Footer />
            </main>
        </>
    );
}
