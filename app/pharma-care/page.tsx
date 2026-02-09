import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PharmaCareHero from "@/components/PharmaCareHero";
import PharmaCareAbout from "@/components/PharmaCareAbout";
import PharmaServicesSection from "@/components/PharmaServicesSection";
import PharmaVideoSection from "@/components/PharmaVideoSection";
import PharmaMobileAppCTA from "@/components/PharmaMobileAppCTA";
import PageLoader from "@/components/PageLoader";

export default function PharmaCarePage() {
    return (
        <>
            <PageLoader />
            <main className="min-h-screen bg-white">
                <Header />
                <PharmaCareHero />
                <PharmaCareAbout />
                <PharmaServicesSection />
                <PharmaVideoSection />
                <PharmaMobileAppCTA />
                <Footer />
            </main>
        </>
    );
}
