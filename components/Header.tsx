"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="w-[90%]  mx-auto">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="Cliniec Logo"
                            width={120}
                            height={40}
                            priority
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="font-satoshi font-medium text-dark hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="font-satoshi font-medium text-dark hover:text-primary transition-colors"
                        >
                            About Us
                        </Link>
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
                                className="font-satoshi font-medium flex items-center gap-1 text-dark hover:text-primary transition-colors"
                                aria-expanded={isProductDropdownOpen}
                                aria-haspopup="true"
                            >
                                Product Suit
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isProductDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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
                        <Link
                            href="/blog"
                            className="font-satoshi font-medium text-dark hover:text-primary transition-colors"
                        >
                            Blog
                        </Link>
                    </div>

                    {/* Contact Us Button - Desktop */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="font-satoshi font-bold inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-dark hover:text-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="font-satoshi font-medium text-dark hover:text-primary transition-colors py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="font-satoshi font-medium text-dark hover:text-primary transition-colors py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <div>
                                <button
                                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                                    className="w-full font-satoshi font-medium flex items-center gap-1 text-dark hover:text-primary transition-colors py-2 text-left"
                                    aria-expanded={isProductDropdownOpen}
                                    aria-haspopup="true"
                                >
                                    Product Suit
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${isProductDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 mt-2 space-y-2">
                                        <Link
                                            href="/easy-clinic"
                                            className="block py-2 font-satoshi text-sm text-gray-600 hover:text-primary transition-colors"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsProductDropdownOpen(false); }}
                                        >
                                            Easy Clinic
                                        </Link>
                                        <Link
                                            href="/pharma-care"
                                            className="block py-2 font-satoshi text-sm text-gray-600 hover:text-primary transition-colors"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsProductDropdownOpen(false); }}
                                        >
                                            Pharma Care
                                        </Link>
                                        <Link
                                            href="/primary-care"
                                            className="block py-2 font-satoshi text-sm text-gray-600 hover:text-primary transition-colors"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsProductDropdownOpen(false); }}
                                        >
                                            Primary Care
                                        </Link>
                                        <Link
                                            href="/laboratory"
                                            className="block py-2 font-satoshi text-sm text-gray-600 hover:text-primary transition-colors"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsProductDropdownOpen(false); }}
                                        >
                                            Laboratory
                                        </Link>
                                        <Link
                                            href="/pills-reminder"
                                            className="block py-2 font-satoshi text-sm text-gray-600 hover:text-primary transition-colors"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsProductDropdownOpen(false); }}
                                        >
                                            Pills Reminder
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href="/blog"
                                className="font-satoshi font-medium text-dark hover:text-primary transition-colors py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="font-satoshi font-bold inline-block px-6 py-3 bg-primary text-white rounded-full text-center hover:bg-primary-dark transition-all mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
