"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HealthcareJourneyCTA() {
    return (
        <section className="py-20 md:py-28 bg-gray-50">
            <div className="w-[90%] mx-auto">
                <div className="bg-primary-dark rounded-3xl px-8 md:px-16 pb-20 pt-16 lg:pb-24 md:pt-32 text-center">
                    <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                        Start Your Healthcare Journey<br />Without Stress
                    </h2>
                    <p className="font-poppins text-base md:text-lg text-gray-100 mb-8 max-w-3xl mx-auto">
                        Navigate your health with clarity, comfort, and confidence. From finding the right care to managing your appointments, everything is designed to make the experience quick, simple and stress-free.
                    </p>
                    <Link
                        href="/get-started"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-poppins font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                    >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
