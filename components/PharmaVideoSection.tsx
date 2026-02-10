"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PharmaVideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative w-full">
            {/* Frame29 - Video Section Container */}
            <div className="relative h-[370px] w-full overflow-hidden">
                {/* Background Image with aria-hidden wrapper */}
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 overflow-hidden">
                        <Image
                            src="/images/pharma-video-bg.png"
                            alt="Pharmacy Interior"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Overlay - rgba(0,0,0,0.51) */}
                    <div className="absolute bg-[rgba(0,0,0,0.51)] inset-0" />
                </div>

                {/* Group - Play Button centered */}
                <motion.div
                    className="absolute h-[40.312px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[41.244px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute inset-[-99.23%_-150.32%_-198.45%_-140.63%]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 161.244 160.312"
                        >
                            <defs>
                                <filter
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                    height="160.312"
                                    id="filter0_d_1_1000"
                                    width="161.244"
                                    x="0"
                                    y="0"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dx="2" dy="20" />
                                    <feGaussianBlur stdDeviation="30" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0" />
                                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1000" />
                                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1000" mode="normal" result="shape" />
                                </filter>
                            </defs>
                            <g>
                                <g filter="url(#filter0_d_1_1000)">
                                    <ellipse cx="78.6221" cy="60.1562" fill="white" rx="20.6221" ry="20.1562" />
                                </g>
                                <path
                                    d="M85 60L74 54V66L85 60Z"
                                    fill="#295247"
                                />
                            </g>
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
