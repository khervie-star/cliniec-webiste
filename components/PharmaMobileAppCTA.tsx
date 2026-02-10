"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PharmaMobileAppCTA() {
    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="w-[90%] max-w-[90%] mx-auto px-4">
                {/* Frame30 - Mobile CTA Container */}
                <motion.div
                    className="relative bg-[#295247] w-full h-[200px] sm:h-[220px] md:h-[260px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-[16px] flex lg:flex-row"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Decorative Vectors */}
                    <div className="absolute -right-[2%] w-[200px] h-[200px] pointer-events-none opacity-40 -top-[18%] z-0">
                        <Image
                            src="/PharmCTAVector.png"
                            alt="Decorative Vector"
                            fill
                            className="object-contain object-top-right"
                        />
                    </div>
                    <div className="absolute -bottom-[20%] right-0 w-[200px] h-[200px] pointer-events-none opacity-40 z-0">
                        <Image
                            src="/PharmCTAVector.png"
                            alt="Decorative Vector"
                            fill
                            className="object-contain object-bottom-right rotate-180"
                        />
                    </div>

                    {/* Left Column: Image */}
                    <motion.div
                        className="relative md:w w-full lg:w-2/3  mt-8 md:mt-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Image
                            src="/images/doctor-mobile-app.png"
                            alt="Healthcare Professional"
                            fill
                            className="object-cover lg:object-contain object-bottom"
                        />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        className="relative w-full lg:w-1/2 p-8 md:p-12 z-10 flex flex-col justify-center items-start text-left h-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="font-poppins font-semibold text-lg sm:text-xl md:text-3xl lg:text-4xl text-white leading-normal mb-[28px] max-w-[80%]">
                            Get access to our mobile version now!
                        </h2>

                        <Link
                            href="/download"
                            className="inline-flex items-center justify-center gap-2 md:gap-[9px] bg-[#fcfcfc] text-[#295247] px-3 py-2 md:px-[35px] md:py-[14px] rounded-[30px] font-satoshi font-medium text-xs md:text-[16px] hover:bg-white transition-all shadow-lg w-full md:w-auto"
                        >
                            Download Now
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
