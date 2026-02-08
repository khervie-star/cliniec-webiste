"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FindSpecialistSection() {
    return (
        <section className="relative bg-[#E8F0F0] overflow-hidden">
            {/* Background Wave Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-0 h-full w-auto">
                    <circle cx="100%" cy="50%" r="400" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                    <circle cx="100%" cy="50%" r="450" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                    <circle cx="100%" cy="50%" r="500" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                    <circle cx="100%" cy="50%" r="550" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                    <circle cx="100%" cy="50%" r="600" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                    <circle cx="100%" cy="50%" r="650" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                    <circle cx="100%" cy="50%" r="700" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                    <circle cx="100%" cy="50%" r="750" stroke="#2d5f4f" strokeWidth="1" fill="none" opacity="0.1" />
                </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[600px]">
                {/* Left Image - Full Height */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[400px] lg:h-auto order-1 lg:order-1"
                >
                    <Image
                        src="/images/specialist.png"
                        alt="Healthcare specialist with tablet"
                        fill
                        className="ml-[-35%] object-cover object-[right_90%]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center order-1 lg:order-2 py-16 lg:py-20 px-8 md:px-12 lg:px-16 xl:px-20"
                >
                    <div className="max-w-xl">
                        <h2 className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark mb-6 leading-[1.15]">
                            Find a Healthcare Specialist Without Hassle
                        </h2>
                        <p className="font-poppins font-normal text-base md:text-lg text-gray-light mb-8 leading-relaxed">
                            Book online, get reminders, and consult without leaving your home or waiting in line schedule appointments at your convenience
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <a
                                href="/specialists"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white rounded-full font-satoshi font-medium text-base hover:bg-primary transition-all hover:scale-105 shadow-lg"
                            >
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            {/* Avatar Group with Count */}
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                                            alt="Visitor"
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                                            alt="Visitor"
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                        <Image
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                                            alt="Visitor"
                                            width={40}
                                            height={40}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <span className="font-poppins font-normal text-sm md:text-base text-dark">
                                    230+ online visitor
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
