import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <section className="bg-[#240029] text-white">
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-end">
                    {/* Left Content */}
                    <div className="text-left pb-20 pt-24 pl-28 w-2/3">
                        <h1 className="text-[40px] font-bold leading-tight mb-4">
                            Get started with <br />
                            <span className="font-bold">Hidile OKR today</span>
                        </h1>
                        <p className="text-xl text-gray-300/70 mb-8 max-w-lg leading-9">
                            Try Hidile OKR free for 30 days—you'll have access to every feature.
                            Cancel any time.
                        </p>
                        <button className="bg-white text-base text-[#2B0A3D] px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition">
                            Start your free trial →
                        </button>
                    </div>

                    {/* Right Content (Image placeholder) */}
                    <div className="flex justify-end items-end w-full h-full">
                        <img
                            src="/img/footer-img.png"
                            alt="OKR-Dashboard Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mobile Layout with Background Image */}
                <div className="lg:hidden relative min-h-[350px] flex items-center">
                    {/* Background Image with Opacity */}
                    <div className="absolute inset-0">
                        <img
                            src="/img/footer-img.png"
                            alt="OKR-Dashboard Preview"
                            className="w-full h-full object-cover opacity-20"
                        />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 text-center px-6 py-16 w-full">
                        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight mb-4">
                            Get started with <br />
                            <span className="font-bold">Hidile OKR today</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-300/90 mb-6 max-w-lg mx-auto leading-6 sm:leading-7">
                            Try Hidile OKR free for 30 days—you'll have access to every feature.
                            Cancel any time.
                        </p>
                        <button className="bg-white text-[#2B0A3D] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition text-sm sm:text-base">
                            Start your free trial →
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-black text-white py-8 lg:py-12 px-4 sm:px-8 lg:px-28">
                <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10">

                    {/* Logo Section */}
                    <div className="col-span-2 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
                        <img src="/img/hidile-logo-footer.png" alt="Hidile Logo" className="h-12 lg:h-16 mb-3 mx-auto sm:mx-0" />
                    </div>

                    {/* Services */}
                    <div className="sm:text-left max-sm:col-span-1">
                        <h3 className="font-semibold mb-3 lg:mb-4 text-base lg:text-lg">Services</h3>
                        <ul className="space-y-1.5 lg:space-y-2 text-gray-300/80 text-sm lg:text-base">
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">All Services</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">Web Development</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">Mobile Apps</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">E-commerce</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">SaaS Applications</li>
                        </ul>
                    </div>

                    {/* Industries */}
                    <div className="max-sm:place-items-end sm:text-left max-sm:col-span-1">
                        <h3 className="font-semibold mb-3 lg:mb-4 text-base lg:text-lg max-sm:mr-2">Industries</h3>
                        <ul className="space-y-1.5 lg:space-y-2 text-gray-300/80 text-sm lg:text-base">
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">CA Firms</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">Healthcare</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">Construction</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">E-commerce</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="text-left sm:text-left max-sm:col-span-2">
                        <h3 className="font-semibold mb-3 lg:mb-4 text-base lg:text-lg">Resources</h3>
                        <ul className="space-y-1.5 lg:space-y-2 text-gray-300/80 text-sm lg:text-base">
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">About Us</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">Blog</li>
                            <li className="w-max hover:text-gray-200 transition-colors duration-300 cursor-pointer">Support</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="text-center sm:text-left max-sm:col-span-2 max-sm:mt-3">
                        <h3 className="font-semibold mb-3 lg:mb-4 text-base lg:text-lg">Contact Us</h3>
                        <ul className="space-y-2 lg:space-y-3 text-gray-300/80 text-sm lg:text-base max-sm:w-max max-sm:mx-auto">
                            <li className="w-max flex items-center gap-2 hover:text-gray-200 transition-colors duration-300 justify-center sm:justify-start">
                                <Mail size={14} className="lg:w-4 lg:h-4 flex-shrink-0" /> 
                                <span>hello@hidile.com</span>
                            </li>
                            <li className="w-max flex items-center gap-2 hover:text-gray-200 transition-colors duration-300 justify-center sm:justify-start">
                                <Phone size={14} className="lg:w-4 lg:h-4 flex-shrink-0" /> 
                                <span>+91 9744101407</span>
                            </li>
                            <li className="w-max flex items-start gap-2 hover:text-gray-200 transition-colors duration-300 justify-center sm:justify-start">
                                <MapPin size={14} className="lg:w-4 lg:h-4 flex-shrink-0 mt-0.5" /> 
                                <span className="text-center sm:text-left">Hidile business park,<br /> Calicut, Kerala</span>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-3 lg:gap-4 mt-8 lg:mt-20 justify-center sm:justify-start items-center">
                            <Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-gray-100 hover:text-gray-100/80 cursor-pointer transition-colors duration-200" />
                            <div className="text-gray-100 hover:text-gray-100/80 transition-colors duration-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 18 18"
                                    fill="currentColor"
                                    className="lg:w-[18px] lg:h-[18px] transition-colors duration-200"
                                >
                                    <path d="M0.33845 0L7.29771 9.81785L0 18H1.55553L7.98704 10.7893L13.0982 18H18L10.7176 7.72697L17.6099 0H16.0553L10.0292 6.75555L5.24024 0H0.33845Z" />
                                </svg>
                            </div>
                            <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-gray-100 hover:text-gray-100/80 cursor-pointer transition-colors duration-200" />
                            <Youtube className="w-5 h-5 lg:w-6 lg:h-6 text-gray-100 hover:text-gray-100/80 cursor-pointer transition-colors duration-200" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t-2 border-gray-500 mt-8 lg:mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs lg:text-sm tracking-tight space-y-2 md:space-y-0">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center">
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                    </div>
                    <p className="text-center">© {new Date().getFullYear()} www.hidile.com. All rights reserved.</p>
                </div>

            </footer>
        </>
    );
}