import type { Metadata } from "next";
import { poppins, montserrat, urbanist, satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cliniec - Centralized Healthcare Technology Solutions",
    description: "Easily book doctor visits, lab tests, pharmacy pickups, or hospital appointments anytime, anywhere. Get reminders, avoid long queues, and manage all your healthcare needs from the comfort of your home.",
    keywords: ["healthcare", "telemedicine", "doctor appointments", "lab tests", "pharmacy"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${satoshi.variable} ${poppins.variable} ${montserrat.variable} ${urbanist.variable}`}>
            <body className={`${satoshi.className} antialiased font-satoshi`}>
                {children}
            </body>
        </html>
    );
}
