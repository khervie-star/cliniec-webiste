import { Poppins, Montserrat, Urbanist } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
    display: "swap",
});

export const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-urbanist",
    display: "swap",
});

export const satoshi = localFont({
    src: [
        {
            path: "../public/fonts/satoshi/Satoshi-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/satoshi/Satoshi-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/satoshi/Satoshi-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/satoshi/Satoshi-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/satoshi/Satoshi-Black.otf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-satoshi",
    display: "swap",
    fallback: ["system-ui", "sans-serif"],
});
