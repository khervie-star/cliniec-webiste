"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
// src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"

export default function Hero() {
    return (
        <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Fixed/Parallax Effect */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url("/images/herobg.png")' }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                        Centralized Healthcare Technology Solutions for Your Best Experience
                    </h1>

                    <p className="font-poppins font-medium text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Easily book doctor visits, lab tests, pharmacy pickups, or hospital appointments
                        anytime, anywhere. Get reminders, avoid long queues, and manage all your
                        healthcare needs from the comfort of your home
                    </p>

                    <motion.a
                        href="#contact"
                        className="font-satoshi font-medium inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
