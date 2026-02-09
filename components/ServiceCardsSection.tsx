"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        title: "Primary Care",
        description: "Get access to world class nurses specialist with needs no long searches",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop&q=80",
        link: "/primary-care"
    },
    {
        title: "Schedule Appointment",
        description: "Book & schedule your appointment speedily and easy anytime, anywhere",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&h=600&fit=crop&q=80",
        link: "/appointments"
    },
    {
        title: "Nearby Healthcare",
        description: "Utilize the various local health care services in your location",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=80",
        link: "/nearby"
    },
    {
        title: "Virtual Care",
        description: "We offer 24/7 video and audio access to care & support anywhere",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop&q=80",
        link: "/virtual-care"
    }
];

export default function ServiceCardsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="w-[90%] mx-auto">
                {/* Header Section */}
                <motion.div
                    className="grid md:grid-cols-[1.2fr_1fr] gap-8 mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >

                    <div>
                        <h2 className="font-poppins font-bold text-3xl md:text-5xl text-dark leading-[1.4] md:leading-[1.45] tracking-wide">
                            A modern healthcare platform that gives patient easy access to healthcare instant needs
                        </h2>
                    </div>
                    <div className="flex items-center justify-end">
                        <p className="font-poppins text-lg lg:text-xl max-w-lg items-end  text-gray-600 leading-[1.8] md:leading-[1.85]">
                            Whether it's booking a same-day appointment, seeing a specialist, or accessing your health records, Easy Clinic puts everything at your fingertips.
                        </p>
                    </div>
                </motion.div>

                {/* Service Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 mt-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                        >
                            <Link
                                href={service.link}
                                className="group relative block h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 bg-black/30 left-0 right-0 p-6 md:p-8">
                                    <h3 className="font-poppins font-bold text-xl md:text-2xl text-white mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="font-poppins text-sm md:text-base text-gray-200">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
