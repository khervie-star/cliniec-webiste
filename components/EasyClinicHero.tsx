"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EasyClinicHero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[80vh] md:min-h-[700px] flex items-center bg-gradient-to-r from-gray-900/90 to-gray-900/70 overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <Image
                    src="/images/easyclinichero.png"
                    alt="Healthcare professionals"
                    fill
                    className="object-cover scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 w-[90%] mx-auto py-28 md:py-40"
                style={{ opacity }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-6xl">
                    <motion.h1
                        className="font-poppins font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[60px] md:leading-[60px] lg:leading-[80px] xl:leading-[80px] mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Consolidated Healthcare Services for Patient Best and Easy Experience
                    </motion.h1>
                    <motion.p
                        className="font-poppins text-lg md:text-xl text-gray-200 mb-10 leading-[1.8] md:leading-[1.9] max-w-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Whether you're here for care or to give it, Easy Clinic connects patients and healthcare providers through fast, organized, and secure technology
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="flex -space-x-3">
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
                        <p className="font-poppins font-normal text-sm text-white">
                            230+ online visitor
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
