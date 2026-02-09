"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        number: "01",
        title: "Pharmacist Consultation",
        description: "Whether you're unsure about dosage, experiencing unexpected side effects, or just want to understand your prescription better, our licensed pharmacists are here to help.",
        link: "/services/pharmacist-consultation"
    },
    {
        number: "02",
        title: "Smart Pharmacy",
        description: "Say goodbye to long lines, missed doses, and confusing refill processes. With Smart Pharmacy, you get real-time access to your medications—whether you're managing a chronic condition or filling a one-time prescription",
        link: "/services/smart-pharmacy"
    },
    {
        number: "03",
        title: "Prescription Management",
        description: "With Easy Clinic's Prescription Management feature, you can view, track, and manage all your medications in one secure place",
        link: "/services/prescription-management"
    },
    {
        number: "04",
        title: "Beauty & Cosmetic",
        description: "Our Beauty & Cosmetic services combine expert care with personalized treatments to help you look and feel your best—safely and confidently.",
        link: "/services/beauty-cosmetic"
    }
];

export default function PharmaServicesSection() {
    return (
        <section className="py-16 md:py-20 bg-[#d4dcda] relative overflow-hidden">
            {/* Left Background Pattern */}
            <div
                className="absolute top-0 bottom-0 -left-[10%] w-1/2 pointer-events-none opacity-40 mix-blend-multiply"
                style={{
                    backgroundImage: 'url(/pharmaservicesbg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            {/* Right Background Pattern */}
            <div
                className="absolute top-0 bottom-0 -right-[10%] w-1/2 pointer-events-none opacity-40 mix-blend-multiply"
                style={{
                    backgroundImage: 'url(/pharmaservicesbg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left center',
                    backgroundRepeat: 'no-repeat',
                    transform: 'scaleX(-1)'
                }}
            />

            <div className="relative z-10 w-full p-10 mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-satoshi font-bold text-primary-dark text-base mb-2">
                        Our Services
                    </p>
                    <h2 className="font-poppins font-semibold text-3xl md:text-[32px] text-[#151515] leading-tight max-w-[500px] mx-auto">
                        Easy Access to Trusted Pharmacy Services
                    </h2>
                </motion.div>

                {/* Service Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-[90%] mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#fcfcfc] rounded-[15px] p-8 md:p-10"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            {/* Number */}
                            <p className="font-['Times_New_Roman'] font-bold text-5xl text-[rgba(41,82,71,0.38)] tracking-[4.8px] mb-5">
                                {service.number}
                            </p>

                            {/* Title */}
                            <h3 className="font-poppins font-semibold text-[15px] text-[#151515] leading-[1.5] mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="font-poppins font-normal text-[15px] text-[#636363] leading-[1.4] mb-4 line-clamp-3">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <Link
                                href={service.link}
                                className="font-satoshi font-bold text-[15px] text-primary-dark hover:text-primary transition-colors inline-block"
                            >
                                Learn More....
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
