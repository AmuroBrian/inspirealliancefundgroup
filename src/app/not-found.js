"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 py-12">
            <div className="max-w-4xl w-full text-center">
                {/* Logo */}
                <div className="flex justify-center mb-6 sm:mb-8 lg:mb-12">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/inspirealliancelogo.png"
                            alt="Inspire Alliance Fund Group"
                            width={300}
                            height={90}
                            className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* 404 Number with Gradient */}
                <div
                    className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold mb-4 sm:mb-6 lg:mb-8 bg-clip-text text-transparent leading-none"
                    style={{
                        background: 'linear-gradient(90deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    404
                </div>

                {/* Error Message */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 px-4">
                    Page Not Found
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
                    We're sorry, but the page you're looking for doesn't exist.
                    It may have been moved, deleted, or you entered the wrong URL.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center mb-8 sm:mb-12 lg:mb-16 px-4">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105 text-sm sm:text-base lg:text-lg min-w-[140px] sm:min-w-[160px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)'
                        }}
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 hover:bg-gray-50 text-sm sm:text-base lg:text-lg min-w-[140px] sm:min-w-[160px]"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Go Back
                    </button>
                </div>

                {/* Quick Links */}
                <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 lg:pt-10 border-t border-gray-200 max-w-3xl mx-auto">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-500 mb-3 sm:mb-4 lg:mb-6">You might be looking for:</p>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 px-4">
                        <Link
                            href="/about"
                            className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#4b8b8b] transition-colors duration-300 underline py-2 sm:py-1"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/#services"
                            className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#4b8b8b] transition-colors duration-300 underline py-2 sm:py-1"
                        >
                            Services
                        </Link>
                        <Link
                            href="/#investment-insights"
                            className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#4b8b8b] transition-colors duration-300 underline py-2 sm:py-1 col-span-2 sm:col-span-1"
                        >
                            Investment Insights
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-[#4b8b8b] transition-colors duration-300 underline py-2 sm:py-1 col-span-2 sm:col-span-1"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-6 sm:mt-8 lg:mt-12">
                    <div
                        className="h-1 w-16 sm:w-24 lg:w-32 mx-auto rounded-full"
                        style={{
                            background: 'linear-gradient(90deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)'
                        }}
                    />
                </div>
            </div>
        </div>
    );
} 