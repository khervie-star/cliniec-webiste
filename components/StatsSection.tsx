"use client";

import { motion } from "framer-motion";

interface StatCardProps {
    number: string;
    label: string;
    delay?: number;
}

function StatCard({ number, label, delay = 0 }: StatCardProps) {
    // Extract numeric value for screen readers
    const numericValue = number.replace(/[^0-9]/g, '');
    const ariaLabel = `${numericValue} ${label}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex items-center gap-4 lg:gap-6"
            role="group"
            aria-label={ariaLabel}
        >
            <h3
                className="font-montserrat font-semibold text-4xl md:text-5xl text-dark shrink-0"
                aria-hidden="true"
            >
                {number}
            </h3>
            <p
                className="font-urbanist font-normal text-sm lg:text-base xl:text-lg text-gray-light leading-snug"
                aria-hidden="true"
            >
                {label}
            </p>
        </motion.div>
    );
}

export default function StatsSection() {
    const stats = [
        {
            number: "10,000+",
            label: "Patient visit every months",
        },
        {
            number: "150+",
            label: "Specialist Available for your Healthcare Consultation Need",
        },
        {
            number: "120+",
            label: "Registered Healthcare Service Provider",
        },
    ];

    return (
        <section
            aria-labelledby="stats-heading"
            className="relative -mt-20 pb-16 md:pb-24"
        >
            {/* Visually hidden heading for accessibility */}
            <h2 id="stats-heading" className="sr-only">
                Our Key Performance Statistics
            </h2>

            <div className="w-[95%] md:w-[90%] mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 px-6">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={`stat-${index}`}
                                number={stat.number}
                                label={stat.label}
                                delay={index * 0.2}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
