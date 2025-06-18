import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: "International Banking Solutions",
        description:
            "Expert consultancy services helping foreigners open bank accounts in the Philippines. We provide comprehensive guidance through the Philippine banking system, payment solutions, and financial growth strategies tailored for international clients.",
        image: "/bankingsolution.jpg",
        slug: "international-banking-solutions",
    },
    {
        id: 2,
        title: "Strategic Business Advisory",
        description:
            "Comprehensive business consulting for foreigners establishing businesses in the Philippines. We handle SEC registration, business banking, corporate setup, and complete regulatory compliance to help you successfully launch your Philippine business.",
        image: "/business.jpg",
        slug: "strategic-business-advisory",
    },
    {
        id: 3,
        title: "Comprehensive Travel Security",
        description:
            "Travel with confidence through our comprehensive protection services. We offer extensive coverage and support for international travelers, ensuring peace of mind throughout your journey.",
        image: "/travelprotection.png",
        slug: "comprehensive-travel-security",
    },
    {
        id: 4,
        title: "Premium Real Estate Solutions",
        description:
            "Discover exceptional real estate opportunities in Japan. Our dedicated team provides end-to-end property services, from investment consultation to property management, tailored to your specific needs.",
        image: "/realestate.jpg",
        slug: "premium-real-estate-solutions",
    },
    {
        id: 5,
        title: "Japanese Product Innovation",
        description:
            "Bridge the gap between Japanese innovation and global markets. We specialize in marketing and promoting authentic Japanese products, helping businesses expand their reach while maintaining cultural authenticity.",
        image: "/marketing.jpeg",
        slug: "japanese-product-innovation",
    },
];

export const metadata = {
    title: 'Our Services & Solutions | Inspire Alliance Fund Group',
    description: 'Discover our comprehensive suite of services designed to help you succeed in the Japanese market. From international banking to real estate solutions.',
    keywords: 'services, solutions, international banking, business advisory, travel security, real estate, Japanese products',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background: 'linear-gradient(135deg, rgba(128, 195, 42, 0.9) 0%, rgba(75, 136, 139, 0.9) 50%, rgba(56, 115, 175, 0.9) 100%)'
                    }}
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div
                            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        ></div>
                        <div
                            className="absolute bottom-10 left-10 w-20 h-20 opacity-15 transform rotate-45"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        ></div>
                    </div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Our Services & Solutions
                        </h1>
                        <div className="w-32 h-1 bg-white/30 mx-auto mb-6"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Discover our comprehensive suite of services designed to help you succeed in the Japanese market
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)'
                                        }}
                                    >
                                        Learn More
                                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 