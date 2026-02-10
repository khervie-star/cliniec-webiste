"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface DynamicHeaderProps {
    transparent?: boolean;
}

export default function DynamicHeader({ transparent = false }: DynamicHeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Track scroll position
    useEffect(() => {
        if (!transparent) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [transparent]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProductDropdownOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsProductDropdownOpen(false);
            }
        };

        const handleScroll = () => {
            setIsProductDropdownOpen(false);
        };

        if (isProductDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            window.removeEventListener('scroll', handleScroll);

            // Cleanup timeout on unmount
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, [isProductDropdownOpen]);

    const isTransparent = transparent && !isScrolled;
    const bgClass = isTransparent ? "bg-transparent" : "bg-white shadow-md";
    const textClass = isTransparent ? "text-white" : "text-dark";
    const logoClass = isTransparent ? "invert brightness-0" : "";
    const buttonClass = isTransparent
        ? "bg-white text-primary-dark hover:bg-gray-100"
        : "bg-primary-dark text-white hover:bg-primary";

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${bgClass}`}>
            <div className="w-[90%] mx-auto">
                <div className="flex items-center justify-between py-4 md:py-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Cliniec"
                            width={120}
                            height={40}
                            className={`h-8 md:h-10 w-auto transition-all duration-300 ${logoClass}`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="/" className={`font-satoshi font-medium transition-colors ${textClass} hover:text-primary`}>
                            Home
                        </Link>
                        <Link href="/about" className={`font-satoshi font-medium transition-colors ${textClass} hover:text-primary`}>
                            About Us
                        </Link>

                        {/* Product Dropdown */}
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={() => {
                                // Cancel any pending close timeout
                                if (closeTimeoutRef.current) {
                                    clearTimeout(closeTimeoutRef.current);
                                    closeTimeoutRef.current = null;
                                }
                            }}
                            onMouseLeave={() => {
                                // Set a timeout to close the dropdown after 500ms
                                closeTimeoutRef.current = setTimeout(() => {
                                    setIsProductDropdownOpen(false);
                                }, 500);
                            }}
                        >
                            <button
                                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                                className={`font-satoshi font-medium flex items-center gap-1 transition-colors ${textClass} hover:text-primary`}
                            >
                                Product Suit
                                <ChevronDown className={`w-4 h-4 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isProductDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <Link
                                        href="/easy-clinic"
                                        className="block px-4 py-2 font-satoshi text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors"
                                        onClick={() => setIsProductDropdownOpen(false)}
                                    >
                                        Easy Clinic
                                    </Link>
                                    <Link
                                        href="/pharma-care"
                                        className="block px-4 py-2 font-satoshi text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors"
                                        onClick={() => setIsProductDropdownOpen(false)}
                                    >
                                        Pharma Care
                                    </Link>
                                    <Link
                                        href="/primary-care"
                                        className="block px-4 py-2 font-satoshi text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors"
                                        onClick={() => setIsProductDropdownOpen(false)}
                                    >
                                        Primary Care
                                    </Link>
                                    <Link
                                        href="/laboratory"
                                        className="block px-4 py-2 font-satoshi text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors"
                                        onClick={() => setIsProductDropdownOpen(false)}
                                    >
                                        Laboratory
                                    </Link>
                                    <Link
                                        href="/pills-reminder"
                                        className="block px-4 py-2 font-satoshi text-sm text-dark hover:bg-gray-50 hover:text-primary transition-colors"
                                        onClick={() => setIsProductDropdownOpen(false)}
                                    >
                                        Pills Reminder
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/blog" className={`font-satoshi font-medium transition-colors ${textClass} hover:text-primary`}>
                            Blog
                        </Link>
                    </nav>

                    {/* Contact Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className={`px-6 py-3 rounded-full font-satoshi font-medium transition-all ${buttonClass}`}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 ${textClass}`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 bg-white rounded-b-xl shadow-lg">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="font-satoshi font-medium text-dark hover:text-primary px-4 py-2">
                                Home
                            </Link>
                            <Link href="/about" className="font-satoshi font-medium text-dark hover:text-primary px-4 py-2">
                                About Us
                            </Link>

                            <div>
                                <button
                                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                                    className="w-full text-left font-satoshi font-medium text-dark hover:text-primary px-4 py-2 flex items-center justify-between"
                                >
                                    Product Suit
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isProductDropdownOpen && (
                                    <div className="pl-8 mt-2 space-y-2">
                                        <Link href="/easy-clinic" className="block text-dark hover:text-primary py-2">
                                            Easy Clinic
                                        </Link>
                                        <Link href="/pharma-care" className="block text-dark hover:text-primary py-2">
                                            Pharma Care
                                        </Link>
                                        <Link href="/primary-care" className="block text-dark hover:text-primary py-2">
                                            Primary Care
                                        </Link>
                                        <Link href="/laboratory" className="block text-dark hover:text-primary py-2">
                                            Laboratory
                                        </Link>
                                        <Link href="/pills-reminder" className="block text-dark hover:text-primary py-2">
                                            Pills Reminder
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/blog" className="font-satoshi font-medium text-dark hover:text-primary px-4 py-2">
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="mx-4 mt-2 px-6 py-3 bg-primary-dark text-white rounded-full font-satoshi font-medium text-center hover:bg-primary transition-all"
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
