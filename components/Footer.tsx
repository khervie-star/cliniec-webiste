"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Github, Dribbble } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="w-[90%] mx-auto py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-3">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/images/logo.png"
                                alt="Cliniec Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="font-poppins text-sm text-gray-light leading-relaxed">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h3 className="font-poppins font-semibold text-base text-dark mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/service" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/benefits" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Benefits
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div className="lg:col-span-2">
                        <h3 className="font-poppins font-semibold text-base text-dark mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/easy-clinic" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Easy Clinic
                                </Link>
                            </li>
                            <li>
                                <Link href="/pharma-care" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Pharma Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/primary-care" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Primary Care
                                </Link>
                            </li>
                            <li>
                                <Link href="/laboratory" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Laboratory
                                </Link>
                            </li>
                            <li>
                                <Link href="/pills-reminder" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Pills Reminder
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help Center Links */}
                    <div className="lg:col-span-2">
                        <h3 className="font-poppins font-semibold text-base text-dark mb-4">
                            Help Center
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/community" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link href="/knowledge-base" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Knowledge Base
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="font-poppins text-sm text-gray-light hover:text-primary-dark transition-colors">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="font-poppins font-semibold text-base text-dark mb-4">
                            Contact Info
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                    <path d="M8.00001 1C6.54184 1.00172 5.1439 1.58174 4.11282 2.61281C3.08174 3.64389 2.50173 5.04184 2.50001 6.5C2.49826 7.69161 2.8875 8.85089 3.60801 9.8C3.60801 9.8 3.75801 9.9975 3.78251 10.026L8.00001 15L12.2195 10.0235C12.2415 9.997 12.392 9.8 12.392 9.8L12.3925 9.7985C13.1127 8.84981 13.5017 7.69107 13.5 6.5C13.4983 5.04184 12.9183 3.64389 11.8872 2.61281C10.8561 1.58174 9.45817 1.00172 8.00001 1ZM8.00001 8.5C7.60444 8.5 7.21776 8.3827 6.88887 8.16294C6.55997 7.94318 6.30362 7.63082 6.15225 7.26537C6.00087 6.89991 5.96126 6.49778 6.03844 6.10982C6.11561 5.72186 6.30609 5.36549 6.58579 5.08579C6.8655 4.80608 7.22186 4.6156 7.60983 4.53843C7.99779 4.46126 8.39992 4.50087 8.76537 4.65224C9.13082 4.80362 9.44318 5.05996 9.66294 5.38886C9.88271 5.71776 10 6.10444 10 6.5C9.99934 7.03023 9.78842 7.53855 9.41349 7.91348C9.03856 8.28841 8.53024 8.49934 8.00001 8.5Z" fill="#295247" />
                                </svg>
                                <span className="font-poppins text-sm text-gray-light">
                                    Lagos Nigeria
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                    <path d="M8.67166 9.24002L9.79166 8.12002C9.94251 7.97104 10.1334 7.86906 10.3411 7.82646C10.5487 7.78385 10.7643 7.80246 10.9617 7.88002L12.3267 8.42502C12.5261 8.50596 12.697 8.64411 12.8181 8.82207C12.9391 9.00003 13.0047 9.20982 13.0067 9.42502V11.925C13.0055 12.0714 12.9747 12.216 12.9162 12.3502C12.8577 12.4844 12.7726 12.6054 12.6661 12.7058C12.5596 12.8062 12.4338 12.8841 12.2964 12.9346C12.1591 12.9852 12.0129 13.0074 11.8667 13C2.30166 12.405 0.371659 4.30502 0.00665873 1.20502C-0.0102848 1.05279 0.00519605 0.898694 0.0520828 0.752875C0.0989696 0.607056 0.1762 0.472817 0.278692 0.358988C0.381185 0.24516 0.506617 0.154323 0.646737 0.0924523C0.786858 0.0305818 0.93849 -0.00091958 1.09166 2.04345e-05H3.50666C3.72216 0.000658328 3.93255 0.0657541 4.11076 0.186935C4.28896 0.308116 4.42684 0.47984 4.50666 0.68002L5.05166 2.04502C5.13178 2.24155 5.15223 2.45734 5.11043 2.66543C5.06864 2.87351 4.96646 3.06467 4.81666 3.21502L3.69666 4.33502C3.69666 4.33502 4.34166 8.70002 8.67166 9.24002Z" fill="#295247" />
                                </svg>
                                <span className="font-poppins text-sm text-gray-light">
                                    Phone: +21 234 567 89
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                    <path d="M11.3333 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585787C0.210714 0.960859 0 1.46957 0 2V8.66667C0 9.1971 0.210714 9.70581 0.585786 10.0809C0.960859 10.456 1.46957 10.6667 2 10.6667H11.3333C11.8638 10.6667 12.3725 10.456 12.7475 10.0809C13.1226 9.70581 13.3333 9.1971 13.3333 8.66667V2C13.3333 1.46957 13.1226 0.960859 12.7475 0.585787C12.3725 0.210714 11.8638 0 11.3333 0ZM11.3333 1.33333L7 4.31333C6.89865 4.37185 6.78369 4.40265 6.66667 4.40265C6.54964 4.40265 6.43468 4.37185 6.33333 4.31333L2 1.33333H11.3333Z" fill="#295247" />
                                </svg>
                                <span className="font-poppins text-sm text-gray-light">
                                    Email: info@clinieChealthcare.dat
                                </span>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <h4 className="font-poppins font-medium text-sm text-gray-light mb-3">Suscribe to our Newsletter</h4>
                            <form className="relative flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Enter your mail"
                                    className="flex-1 px-5 py-3 text-sm font-poppins text-gray-600 placeholder:text-gray-400 focus:outline-none bg-transparent"
                                />
                                <button
                                    type="submit"
                                    className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center hover:bg-primary transition-colors flex-shrink-0 m-1"
                                    aria-label="Subscribe"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-poppins text-sm text-gray-light">
                        © {new Date().getFullYear()} | 9jahealthcare. All rights reserved
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            aria-label="Facebook"
                        >
                            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.127 10.0508C18.127 5.53537 14.4891 1.87506 10.002 1.87506C5.51297 1.87608 1.875 5.53537 1.875 10.0519C1.875 14.1316 4.84672 17.5137 8.73047 18.1271V12.4142H6.66875V10.0519H8.7325V8.24912C8.7325 6.20061 9.94617 5.0692 11.8017 5.0692C12.6914 5.0692 13.6207 5.22866 13.6207 5.22866V7.23959H12.5959C11.5874 7.23959 11.2726 7.8703 11.2726 8.51725V10.0508H13.5252L13.1657 12.4132H11.2716V18.1261C15.1553 17.5126 18.127 14.1306 18.127 10.0508Z" fill="#525252" />
                            </svg>
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            aria-label="Twitter"
                        >
                            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3267 5.38595C19.2795 5.27174 19.1994 5.17411 19.0966 5.10541C18.9938 5.03672 18.873 5.00004 18.7494 5.00001H16.372C16.0397 4.43453 15.5666 3.96466 14.9989 3.63611C14.4312 3.30755 13.7881 3.13148 13.1322 3.12501C12.6435 3.1186 12.1585 3.20999 11.7057 3.3938C11.2529 3.57761 10.8414 3.85013 10.4955 4.19532C10.1394 4.54472 9.85685 4.96177 9.66433 5.42195C9.4718 5.88214 9.37322 6.37617 9.37439 6.87501V7.35079C6.22908 6.5211 3.65642 3.96251 3.62908 3.93517C3.54523 3.85057 3.43895 3.7917 3.32276 3.76548C3.20657 3.73927 3.08531 3.7468 2.97326 3.78718C2.86121 3.82757 2.76303 3.89914 2.69029 3.99345C2.61755 4.08777 2.57327 4.20091 2.56267 4.31954C2.22595 8.05314 3.31033 10.5516 4.28142 11.9899C4.75492 12.7009 5.33094 13.338 5.9908 13.8805C4.80095 15.25 2.92751 15.9695 2.9072 15.9774C2.81901 16.0104 2.73942 16.0629 2.67439 16.131C2.60935 16.1991 2.56055 16.2811 2.53162 16.3707C2.5027 16.4603 2.49441 16.5553 2.50736 16.6486C2.52031 16.7419 2.55417 16.831 2.60642 16.9094C2.66501 16.9969 2.89939 17.3039 3.47205 17.5906C4.17986 17.9453 5.11501 18.125 6.24939 18.125C11.7705 18.125 16.3838 13.8734 16.8549 8.40313L19.1916 6.0672C19.279 5.97974 19.3384 5.86834 19.3625 5.74707C19.3866 5.62581 19.3741 5.50014 19.3267 5.38595ZM15.8111 7.6836C15.704 7.79102 15.6395 7.93375 15.6299 8.08517C15.3119 13.0141 11.1931 16.875 6.24939 16.875C5.42439 16.875 4.84314 16.7656 4.43533 16.6344C5.33455 16.1461 6.58845 15.3063 7.3947 14.0969C7.44202 14.0258 7.47426 13.9457 7.48944 13.8617C7.50461 13.7776 7.50239 13.6913 7.48291 13.6081C7.46344 13.525 7.42712 13.4467 7.37621 13.3781C7.32529 13.3095 7.26086 13.2521 7.18689 13.2094C7.15017 13.1883 3.75642 11.1516 3.74939 5.70939C4.99939 6.72501 7.28455 8.30079 9.89548 8.73985C9.98497 8.75494 10.0767 8.75036 10.1642 8.72643C10.2517 8.7025 10.333 8.6598 10.4024 8.60129C10.4717 8.54278 10.5275 8.46987 10.5659 8.38762C10.6042 8.30537 10.6242 8.21576 10.6244 8.12501V6.87501C10.6237 6.54161 10.6897 6.21144 10.8185 5.90392C10.9473 5.59641 11.1363 5.31776 11.3744 5.08439C11.6026 4.85571 11.8744 4.67512 12.1736 4.55327C12.4729 4.43143 12.7935 4.37082 13.1166 4.37501C14.1056 4.38751 15.0299 4.99064 15.4166 5.87579C15.4653 5.98708 15.5455 6.08174 15.6472 6.1482C15.7489 6.21467 15.8677 6.25004 15.9892 6.25001H17.2392L15.8111 7.6836Z" fill="#525252" />
                            </svg>
                        </Link>
                        <Link
                            href="https://dribbble.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            aria-label="Dribbble"
                        >
                            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.41489 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM16.8477 9.38906C16.6487 9.37969 16.4495 9.375 16.25 9.375C15.0906 9.37533 13.9364 9.52874 12.8172 9.83125C12.5443 9.02154 12.1924 8.24069 11.7664 7.5C12.8773 6.83009 13.883 5.99948 14.7508 5.03516C15.9549 6.18396 16.7001 7.73141 16.8477 9.38906ZM13.7719 4.25469C12.9912 5.11249 12.0889 5.85108 11.0938 6.44687C10.2603 5.27376 9.2409 4.2446 8.07579 3.4C9.03159 3.12098 10.0366 3.0529 11.0213 3.20047C12.006 3.34804 12.9469 3.70774 13.7789 4.25469H13.7719ZM6.69141 3.975C7.96844 4.77922 9.08177 5.81779 9.97266 7.03594C8.41346 7.75457 6.71684 8.12615 5 8.125C4.47013 8.12473 3.94086 8.0895 3.41563 8.01953C3.93825 6.29571 5.11376 4.84433 6.69141 3.975ZM3.125 10C3.12497 9.74839 3.13879 9.49697 3.16641 9.24688C3.77389 9.33216 4.38657 9.37498 5 9.375C6.96058 9.37685 8.89662 8.93902 10.6656 8.09375C11.0554 8.76679 11.3775 9.47676 11.6273 10.2133C10.9634 10.4627 10.3209 10.7658 9.70625 11.1195C7.99146 12.1102 6.52114 13.4734 5.40391 15.1086C4.68646 14.465 4.1127 13.6774 3.72004 12.7972C3.32738 11.9169 3.12463 10.9638 3.125 10ZM6.40625 15.8594C7.4206 14.3591 8.76276 13.1091 10.3313 12.2039C10.8557 11.9013 11.4029 11.6401 11.968 11.4227C12.1614 12.2808 12.2591 13.1578 12.2594 14.0375C12.2598 14.8927 12.1684 15.7455 11.9867 16.5813C11.0583 16.8617 10.081 16.9424 9.11918 16.818C8.15733 16.6936 7.23274 16.3669 6.40625 15.8594ZM13.3641 15.9945C13.4605 15.348 13.5091 14.6951 13.5094 14.0414C13.5093 13.0296 13.3926 12.0211 13.1617 11.0359C14.1687 10.7642 15.207 10.626 16.25 10.625C16.4479 10.625 16.6461 10.6299 16.8445 10.6398C16.7399 11.747 16.3686 12.8123 15.7625 13.7447C15.1564 14.6771 14.3335 15.4488 13.3641 15.9938V15.9945Z" fill="#525252" />
                            </svg>
                        </Link>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            aria-label="GitHub"
                        >
                            <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2742 5.91251C16.4653 5.29626 16.5265 4.64711 16.4542 4.00599C16.3819 3.36487 16.1775 2.7457 15.8539 2.18751C15.799 2.09248 15.7201 2.01357 15.6251 1.95871C15.53 1.90385 15.4222 1.87499 15.3125 1.87501C14.5845 1.87349 13.8663 2.04225 13.2151 2.36781C12.564 2.69337 11.9981 3.16671 11.5625 3.75001H9.6875C9.25193 3.16671 8.68598 2.69337 8.03485 2.36781C7.38372 2.04225 6.66548 1.87349 5.9375 1.87501C5.82777 1.87499 5.71996 1.90385 5.62492 1.95871C5.52988 2.01357 5.45096 2.09248 5.39609 2.18751C5.07254 2.7457 4.86815 3.36487 4.7958 4.00599C4.72346 4.64711 4.78474 5.29626 4.97578 5.91251C4.58963 6.58651 4.38278 7.34827 4.375 8.12501V8.75001C4.37632 9.80751 4.76021 10.8288 5.4558 11.6254C6.15139 12.4219 7.11169 12.9399 8.15938 13.0836C7.73173 13.6308 7.4996 14.3055 7.5 15V15.625H5.625C5.12772 15.625 4.65081 15.4275 4.29917 15.0758C3.94754 14.7242 3.75 14.2473 3.75 13.75C3.75 13.3396 3.66917 12.9333 3.51212 12.5541C3.35508 12.175 3.12489 11.8305 2.83471 11.5403C2.54453 11.2501 2.20003 11.0199 1.82089 10.8629C1.44174 10.7058 1.03538 10.625 0.625 10.625C0.45924 10.625 0.300269 10.6909 0.183058 10.8081C0.065848 10.9253 0 11.0842 0 11.25C0 11.4158 0.065848 11.5747 0.183058 11.692C0.300269 11.8092 0.45924 11.875 0.625 11.875C1.12228 11.875 1.59919 12.0726 1.95083 12.4242C2.30246 12.7758 2.5 13.2527 2.5 13.75C2.5 14.5788 2.82924 15.3737 3.41529 15.9597C4.00134 16.5458 4.7962 16.875 5.625 16.875H7.5V18.125C7.5 18.2908 7.56585 18.4497 7.68306 18.567C7.80027 18.6842 7.95924 18.75 8.125 18.75C8.29076 18.75 8.44973 18.6842 8.56694 18.567C8.68415 18.4497 8.75 18.2908 8.75 18.125V15C8.75 14.5027 8.94754 14.0258 9.29917 13.6742C9.65081 13.3226 10.1277 13.125 10.625 13.125C11.1223 13.125 11.5992 13.3226 11.9508 13.6742C12.3025 14.0258 12.5 14.5027 12.5 15V18.125C12.5 18.2908 12.5658 18.4497 12.6831 18.567C12.8003 18.6842 12.9592 18.75 13.125 18.75C13.2908 18.75 13.4497 18.6842 13.5669 18.567C13.6842 18.4497 13.75 18.2908 13.75 18.125V15C13.7504 14.3055 13.5183 13.6308 13.0906 13.0836C14.1383 12.9399 15.0986 12.4219 15.7942 11.6254C16.4898 10.8288 16.8737 9.80751 16.875 8.75001V8.12501C16.8672 7.34827 16.6604 6.58651 16.2742 5.91251ZM15.625 8.75001C15.625 9.57881 15.2958 10.3737 14.7097 10.9597C14.1237 11.5458 13.3288 11.875 12.5 11.875H8.75C7.9212 11.875 7.12634 11.5458 6.54029 10.9597C5.95424 10.3737 5.625 9.57881 5.625 8.75001V8.12501C5.63266 7.50003 5.81978 6.89042 6.16406 6.36876C6.22824 6.28417 6.26981 6.18462 6.28485 6.0795C6.29988 5.97439 6.28789 5.86717 6.25 5.76798C6.0872 5.34813 6.00886 4.90029 6.01945 4.45011C6.03004 3.99993 6.12936 3.55627 6.31172 3.14454C6.82322 3.19957 7.31577 3.36901 7.75287 3.6403C8.18997 3.91159 8.56041 4.27779 8.83672 4.71173C8.89303 4.79978 8.97051 4.8723 9.06209 4.92267C9.15368 4.97303 9.25642 4.99962 9.36094 5.00001H11.8883C11.9932 5.00001 12.0964 4.97361 12.1884 4.92323C12.2805 4.87285 12.3583 4.80011 12.4148 4.71173C12.6911 4.27775 13.0615 3.91153 13.4986 3.64023C13.9358 3.36893 14.4283 3.19951 14.9398 3.14454C15.122 3.55637 15.221 4.00009 15.2313 4.45027C15.2417 4.90044 15.163 5.34824 15 5.76798C14.9622 5.86623 14.9496 5.97235 14.9632 6.07672C14.9769 6.18109 15.0164 6.2804 15.0781 6.36564C15.4258 6.8873 15.6157 7.49816 15.625 8.12501V8.75001Z" fill="#525252" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
