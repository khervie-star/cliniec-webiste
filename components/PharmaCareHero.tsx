"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PharmaCareHero() {
    return (
        <section className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/pharma-hero.png"
                    alt="Pharmacy Care"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Darker overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40" />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="font-poppins font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight md:leading-[1.2] mb-5 md:mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Fast, Convenient, and Reliable, Your Pharmacy Care Experience, Simplified
                </motion.h1>
                <motion.p
                    className="font-poppins font-medium text-white/95 text-base md:text-lg lg:text-xl leading-relaxed max-w-[900px] mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    With Easy Clinic, staying on top of your medications is easier than ever. View active prescriptions, request refills with a single tap, and chat with licensed pharmacists about your medications, side effects, or dosage instructions—without leaving your home
                </motion.p>
            </motion.div>
        </section>
    );
}
