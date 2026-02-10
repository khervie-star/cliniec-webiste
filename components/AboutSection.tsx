"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="w-[90%] max-w-[90%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-satoshi font-bold text-sm md:text-base text-primary mb-4 tracking-wide">
                            About Us
                        </p>
                        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark mb-6 leading-[1.15]">
                            Meeting Patient Needs via <br className="hidden lg:block" />
                            Technology Solutions
                        </h2>
                        <p className="font-poppins font-normal text-base md:text-lg text-gray-light mb-8 leading-relaxed max-w-lg">
                            We believe healthcare should be easy. That's why we built a platform that lets you book appointments, access services, and take control of your health — all with just a few clicks.
                        </p>
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white rounded-full font-satoshi font-medium text-base hover:bg-primary transition-all hover:scale-105 shadow-lg"
                        >
                            Learn More
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Decorative Background Shape */}
                        <div className="absolute -bottom-6 right-0 w-1/3 h-1/2 bg-primary-dark rounded-[2rem] z-0" />

                        <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl z-10 mr-6">
                            <Image
                                src="/images/about.png"
                                alt="Family with healthcare professional"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
