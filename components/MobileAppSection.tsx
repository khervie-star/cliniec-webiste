"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileAppSection() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="w-[90%] mx-auto">
                {/* Rounded Container with Green Background */}
                <div className="relative bg-primary-dark rounded-3xl overflow-hidden h-[500px] md:h-[550px] lg:h-[600px]">
                    {/* Decorative Background Circles - Right Side */}
                    <div className="absolute top-10 right-10 w-72 h-72 rounded-full border-[50px] border-white/10"></div>
                    <div className="absolute bottom-10 right-40 w-56 h-56 rounded-full border-[40px] border-white/10"></div>
                    <div className="absolute top-1/2 right-16 w-40 h-40 rounded-full bg-white/10"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full px-8 md:px-12 lg:px-16">
                        {/* Left - Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-full order-2 lg:order-1"
                        >
                            <Image
                                src="/images/mobile.png"
                                alt="Cliniec mobile app interface"
                                fill
                                className="object-cover scale-150 object-[700%_50%]"
                                sizes="(max-width: 1024px) 90vw, 50vw"
                                priority
                            />
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 text-center lg:text-left order-1 lg:order-2 relative z-10"
                        >
                            <h2 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                                Get access to our mobile version now!
                            </h2>

                            <a
                                href="/download"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark rounded-full font-satoshi font-medium text-base hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
                            >
                                Download Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
