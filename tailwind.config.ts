import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.5rem',
                    lg: '2rem',
                    xl: '2.5rem',
                    '2xl': '3rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1536px',
                },
            },
            colors: {
                primary: {
                    DEFAULT: '#2d5f4f',
                    dark: '#234a3d',
                    light: '#3a7560',
                },
                dark: {
                    DEFAULT: '#1f2937',
                    light: '#374151',
                },
                gray: {
                    light: '#6b7280',
                    lighter: '#9ca3af',
                }
            },
            fontFamily: {
                sans: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
                satoshi: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
                poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
                montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
                urbanist: ['var(--font-urbanist)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;
