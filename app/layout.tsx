import type { Metadata } from "next";
import { poppins, montserrat, urbanist, satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cliniec | Centralized Healthcare Technology Solutions",
    template: "%s | Cliniec",
  },
  description:
    "Experience seamless healthcare with Cliniec. Book online doctor consultations, schedule lab tests, manage pharmacy prescriptions, and access 24/7 ambulance services from the comfort of your home. Trusted by over 10,000 patients.",
  applicationName: "Cliniec",
  authors: [{ name: "Cliniec Healthcare Team" }],
  keywords: [
    "Cliniec",
    "Healthcare Technology",
    "Telemedicine Nigeria",
    "Online Doctor Appointment",
    "Lab Diagnostics",
    "Pharmacy Delivery",
    "Medical App",
    "Ambulance Service",
    "Pill Reminder",
    "Radiography",
    "Primary Care",
    "Digital Health Platform",
    "Nigeria",
    "9ja",
    "9ja Health",
    "9ja Telemedicine",
    "9ja Online Doctor",
    "9ja Lab Diagnostics",
    "9ja Pharmacy Delivery",
    "9ja Medical App",
    "9ja Ambulance Service",
    "9ja Pill Reminder",
    "9ja Radiography",
    "9ja Primary Care",
    "9ja Digital Health Platform",
  ],
  creator: "Cliniec",
  publisher: "Cliniec",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cliniec | Find a Healthcare Specialist Without Hassle",
    description:
      "Join 10,000+ patients using Cliniec for centralized healthcare. Book appointments, get lab results, and access 150+ specialists instantly via our web and mobile platform.",
    url: "https://www.cliniec.com",
    siteName: "Cliniec",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://www.cliniec.com/og.png",
        width: 1200,
        height: 630,
        alt: "Cliniec Healthcare Platform Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliniec | Your Partner in Better Health",
    description:
      "Meeting patient needs via technology. Access doctors, pharmacy, and diagnostic services with just a few clicks.",
    images: ["https://www.cliniec.com/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health & Medical",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${poppins.variable} ${montserrat.variable} ${urbanist.variable}`}>
      <body className={`${satoshi.className} antialiased font-satoshi`}>
        {children}
      </body>
    </html>
  );
}
