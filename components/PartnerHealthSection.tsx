"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerHealthSection() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Image with Play Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src="/images/blog.png"
                            alt="Healthcare team meeting"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 90vw, 45vw"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-center justify-center">
                            <button
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                aria-label="Play video"
                            >
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-dark ml-1" fill="currentColor" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <p className="font-poppins text-sm md:text-base text-gray-light uppercase tracking-wide">
                            Our Blog
                        </p>

                        <h2 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
                            Your Partner in Better Health
                        </h2>

                        <p className="font-poppins font-normal text-base md:text-lg text-gray-light leading-relaxed">
                            We believe healthcare should be easy. That's why we built a platform that lets you book appointments, access services, and take control of your health — all with just a few clicks.
                        </p>

                        <a
                            href="/blog"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white rounded-full font-satoshi font-medium text-base hover:bg-primary transition-all hover:scale-105 shadow-lg"
                        >
                            Read More
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
