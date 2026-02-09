"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PharmaCareAbout() {
    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="w-full max-w-[90%] mx-auto px-4">
                {/* Frame37 - Outer white container with padding */}
                <motion.div
                    className="bg-white rounded-[20px] shadow-[0px_8px_48px_0px_rgba(41,82,71,0.06)] border-2 border-[rgba(41,82,71,0.07)] px-[32px] py-[19px]"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Frame42 - Inner container */}
                    <div className="flex flex-col md:flex-row items-center justify-between overflow-hidden">
                        {/* Frame38 - Image Side */}
                        <motion.div
                            className="relative h-[400px] md:h-[500px] w-full md:w-[50%] shrink-0"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Image
                                src="/images/pharma-care-about.png"
                                alt="Pharmacy Care Professional"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Frame39 - Content Side with gray background */}
                        <motion.div
                            className="bg-[#f4f4f4] h-[400px] md:h-[500px] w-full md:w-[50%] relative shrink-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Frame41 - Absolutely positioned content */}
                            <div className="px-8 py-8 md:px-0 md:py-0 md:absolute md:left-[76px] md:top-[18%] md:w-[50%]">
                                {/* Frame40 - Text Content */}
                                <div className="flex flex-col gap-[9px] mb-[28px]">
                                    <h2 className="font-poppins font-semibold text-[32px] text-[#232323] leading-[1.4] w-[292px]">
                                        Short Story About<br />
                                        Pharma Care.
                                    </h2>
                                    <p className="font-poppins font-medium text-[16px] text-[#636363] leading-normal">
                                        Making medicine management easy for everyone, Pharma Care brings the future of pharmacy to your door—where technology meets trusted care, From confusion to confidence—how Pharma Care supports everyday health
                                    </p>
                                </div>

                                {/* ContactUs - Button */}
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-[9px] bg-[#295247] text-white px-[35px] py-[14px] rounded-[30px] font-satoshi font-medium text-[16px] hover:bg-primary-dark/90 transition-all"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
