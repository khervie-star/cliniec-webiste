"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
        // You can add actual video play logic here
    };

    return (
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/blog.png"
                    alt="Healthcare professionals in hospital"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Play Button */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <motion.button
                    onClick={handlePlayClick}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                    aria-label="Play video"
                >
                    {/* White circle background */}
                    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white flex items-center justify-center shadow-2xl transition-all group-hover:shadow-3xl">
                        <Play className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary-dark ml-1" fill="currentColor" />
                    </div>

                    {/* Pulse animation ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white/30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.button>
            </div>

            {/* Video Player (shown when playing) */}
            {isPlaying && (
                <div className="absolute inset-0 z-20 bg-black">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                        title="Healthcare Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}
        </section>
    );
}
