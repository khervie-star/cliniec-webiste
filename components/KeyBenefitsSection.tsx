"use client";

import { motion } from "framer-motion";
import { Home, Pill, MonitorDot, Sparkles, Leaf, ShoppingBag, Radio, Ambulance } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface BenefitItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}

interface BenefitCardProps {
    benefit: BenefitItem;
    index: number;
    itemVariants: any;
}

function BenefitCard({ benefit, index, itemVariants }: BenefitCardProps) {
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const [underlineWidth, setUnderlineWidth] = useState<number>(0);

    useEffect(() => {
        const updateWidth = () => {
            if (!descriptionRef.current) return;

            const element = descriptionRef.current;
            const text = element.textContent || '';
            const computedStyle = window.getComputedStyle(element);

            // Create canvas for accurate text measurement
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) return;

            // Apply exact font properties from computed style
            context.font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;

            // Apply letter spacing if present
            const letterSpacing = parseFloat(computedStyle.letterSpacing) || 0;
            const wordSpacing = parseFloat(computedStyle.wordSpacing) || 0;

            // Split text into words
            const words = text.split(/\s+/);
            const spaceWidth = context.measureText(' ').width + wordSpacing;
            const containerWidth = element.offsetWidth;

            let maxWidth = 0;
            let currentLineWidth = 0;
            let currentLineWords: string[] = [];

            words.forEach((word, i) => {
                const baseWordWidth = context.measureText(word).width;
                const wordWidth = baseWordWidth + (letterSpacing * word.length);
                const testWidth = currentLineWidth + (currentLineWords.length > 0 ? spaceWidth : 0) + wordWidth;

                if (testWidth > containerWidth && currentLineWords.length > 0) {
                    // Line is complete, measure it accurately
                    const lineText = currentLineWords.join(' ');
                    const baseLineWidth = context.measureText(lineText).width;
                    const totalLetters = lineText.replace(/\s/g, '').length;
                    const lineWidth = baseLineWidth + (letterSpacing * totalLetters) + (wordSpacing * (currentLineWords.length - 1));
                    maxWidth = Math.max(maxWidth, lineWidth);

                    // Start new line
                    currentLineWords = [word];
                    currentLineWidth = wordWidth;
                } else {
                    currentLineWords.push(word);
                    currentLineWidth = testWidth;
                }
            });

            // Measure the last line
            if (currentLineWords.length > 0) {
                const lineText = currentLineWords.join(' ');
                const baseLineWidth = context.measureText(lineText).width;
                const totalLetters = lineText.replace(/\s/g, '').length;
                const lineWidth = baseLineWidth + (letterSpacing * totalLetters) + (wordSpacing * (currentLineWords.length - 1));
                maxWidth = Math.max(maxWidth, lineWidth);
            }

            // Dynamic adjustment - longer lines need slightly more reduction
            const adjustment = maxWidth > 300 ? 4 : 2;
            setUnderlineWidth(Math.max(0, Math.ceil(maxWidth) - adjustment));
        };

        // Small delay to ensure DOM is ready and fonts are loaded
        const timer = setTimeout(updateWidth, 150);
        window.addEventListener('resize', updateWidth);

        // Update when fonts are loaded
        if (document.fonts) {
            document.fonts.ready.then(updateWidth);
        }

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateWidth);
        };
    }, [benefit.description]);

    return (
        <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4"
        >
            <div className={`${benefit.color} rounded-full p-4 flex-shrink-0 shadow-lg`}>
                {benefit.icon}
            </div>
            <div>
                <h3 className="font-poppins font-semibold text-lg lg:text-xl text-dark mb-2">
                    {benefit.title}
                </h3>
                <div
                    className={`h-0.5 ${benefit.color} mb-3`}
                    style={{ width: underlineWidth > 0 ? `${underlineWidth}px` : '100%' }}
                ></div>
                <p
                    ref={descriptionRef}
                    className="font-poppins font-normal text-sm lg:text-base text-gray-light leading-relaxed"
                >
                    {benefit.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function KeyBenefitsSection() {
    const leftBenefits: BenefitItem[] = [
        {
            icon: <Home className="w-6 h-6 text-white" />,
            title: "Easy clinic",
            description: "Experiences seamless and Fast healthcare appointments scheduling and consultation.",
            color: "bg-[#4EAAC7]",
        },
        {
            icon: <Pill className="w-6 h-6 text-white" />,
            title: "Pill Reminder",
            description: "Never miss taking your prescribed medication again.",
            color: "bg-[#E57373]",
        },
        {
            icon: <MonitorDot className="w-6 h-6 text-white" />,
            title: "Lab Diagnostics",
            description: "Schedule your Lab diagnostics on our platform. Save time, view results and medical records at anytime.",
            color: "bg-[#4CAF50]",
        },
        {
            icon: <Sparkles className="w-6 h-6 text-white" />,
            title: "AI for Healthcare",
            description: "Get predictions on your next checkup, our AI Agent helps with your healthcare needs on our platform.",
            color: "bg-[#4EAAC7]",
        },
    ];

    const rightBenefits: BenefitItem[] = [
        {
            icon: <Leaf className="w-6 h-6 text-white" />,
            title: "Primary Care",
            description: "Assemble your best primary care team on our platform and have them on a speed dial.",
            color: "bg-[#4CAF50]",
        },
        {
            icon: <ShoppingBag className="w-6 h-6 text-white" />,
            title: "PharmaCare",
            description: "Delivering fast, safe, and reliable pharmacy support, consultation, and automated inventory management.",
            color: "bg-[#4EAAC7]",
        },
        {
            icon: <Radio className="w-6 h-6 text-white" />,
            title: "Radiography",
            description: "Schedule your radiography and receive detail result.",
            color: "bg-[#4CAF50]",
        },
        {
            icon: <Ambulance className="w-6 h-6 text-white" />,
            title: "Ambulance Service",
            description: "24/7 Ambulance emergency need in the cities we serve.",
            color: "bg-[#E57373]",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#E8F0F0]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E8F0F0]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className=" mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl text-center text-dark mb-16 lg:mb-24"
                >
                    Some Key Benefits of our Solution
                </motion.h2>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-8 lg:gap-12 items-center max-w-[90%] mx-auto">
                    {/* Left Benefits */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8 lg:space-y-10"
                    >
                        {leftBenefits.map((benefit, index) => (
                            <BenefitCard
                                key={index}
                                benefit={benefit}
                                index={index}
                                itemVariants={itemVariants}
                            />
                        ))}
                    </motion.div>

                    {/* Center Infographic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex items-center justify-center py-8 lg:py-0"
                    >
                        <div className="relative w-full max-w-full aspect-square">
                            <Image
                                src="/images/benefits-infographic.png"
                                alt="Healthcare services infographic"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 70vw"
                            />
                        </div>
                    </motion.div>

                    {/* Right Benefits */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8 lg:space-y-10"
                    >
                        {rightBenefits.map((benefit, index) => (
                            <BenefitCard
                                key={index}
                                benefit={benefit}
                                index={index}
                                itemVariants={itemVariants}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
