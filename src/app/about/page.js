import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../components/Avatar';

export const metadata = {
    title: 'About Us - Leadership & Company Overview | Inspire Alliance Fund Group',
    description: 'Learn about Inspire Alliance Fund Group leadership, board of directors, operating committee, and our commitment to empowering dreams through innovative financial solutions.',
    keywords: 'about inspire alliance, board of directors, leadership team, company overview, mission, vision, how we do business',
};

const boardOfDirectors = [
    {
        name: "Brian Perez",
        position: "President",
        since: "2019",
        description: "Strategic leader with extensive experience in financial services, technology, and corporate governance, driving the company's vision and growth initiatives through innovation and digital transformation.",
        slug: "brian-perez"
    },
    {
        name: "Rhia Alberto",
        position: "Vice President",
        since: "2020",
        description: "Experienced executive with deep expertise in business operations and strategic planning, supporting organizational development and expansion.",
        slug: "rhia-alberto"
    },
    {
        name: "Atty. Renato Pineda",
        position: "Non-Executive Director",
        since: "2020",
        description: "Legal expert with extensive experience in corporate law and regulatory compliance, providing strategic legal guidance and oversight.",
        slug: "atty-renato-pineda"
    },
    {
        name: "Freddie Reyes",
        position: "Non-Executive Director",
        since: "2021",
        description: "Seasoned business professional with expertise in financial management and investment strategies, contributing valuable industry insights.",
        slug: "freddie-reyes"
    },
    {
        name: "Ronaldo Castillo",
        position: "Non-Executive Director",
        since: "2022",
        description: "Accomplished executive with background in international business and market development, bringing global perspective to the board.",
        slug: "ronaldo-castillo"
    }
];

const corporateOfficers = [
    {
        name: "Carlos Perez",
        position: "Chief of Career Track Officer",
        description: "Strategic oversight of career development programs, professional growth initiatives, and talent advancement pathways for organizational excellence.",
        slug: "carlos-perez"
    },
    {
        name: "Jaime Flores",
        position: "Chief of Technology Officer",
        description: "Technology leadership, digital innovation strategies, and systems architecture to drive technological advancement and operational efficiency.",
        slug: "jaime-flores"
    },
    {
        name: "Gerlie De Asis",
        position: "HR/Administrative Officer",
        description: "Human resources management, administrative operations, and organizational development initiatives.",
        slug: "gerlie-de-asis"
    },
    {
        name: "Anne Colinares",
        position: "Assistant HR/Administrative Officer",
        description: "HR support services, administrative coordination, and employee relations management.",
        slug: "anne-colinares"
    },
    {
        name: "Neil Brion",
        position: "Security",
        description: "Comprehensive security management, risk mitigation strategies, and protection of company assets and personnel.",
        slug: "neil-brion"
    },
    {
        name: "Shelah Reynaldo",
        position: "Secretary",
        description: "Executive support, documentation management, and coordination of board and management communications.",
        slug: "shelah-reynaldo"
    },
    {
        name: "Joanne Hermosura",
        position: "Secretary",
        description: "Administrative support, record keeping, and facilitation of corporate governance processes.",
        slug: "joanne-hermosura"
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Spacer */}
            <div className="h-20"></div>

            {/* Hero Section with Company Overview */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background: 'linear-gradient(135deg, rgba(128, 195, 42, 0.9) 0%, rgba(75, 136, 139, 0.9) 50%, rgba(56, 115, 175, 0.9) 100%)'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            About Inspire Alliance Fund Group
                        </h1>
                        <div className="w-32 h-1 bg-white/30 mx-auto mb-6"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Empowering dreams, igniting change, and building a better future through innovative financial solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Company Overview
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    At Inspire Alliance Fund Group Inc., we are driven by a powerful purpose: to empower dreams and ignite meaningful change. Founded on the belief that lasting progress begins with opportunity, we exist to support individuals who are ready to make a difference—not just in their own lives, but in the communities around them.
                                </p>
                                <p>
                                    We go beyond traditional funding. We are a dynamic movement that bridges passionate visionaries with the support, trust, and resources they need to transform ideas into lasting impact. Whether it's launching a small business, starting a social initiative, or developing innovative solutions, we're here to back bold ambitions.
                                </p>
                                <p>
                                    By investing in people, we help spark growth, nurture resilience, and create a ripple effect that uplifts entire economies. Our commitment is unwavering: to fund possibilities, champion potential, and walk alongside changemakers on a shared journey toward a more empowered, hopeful, and innovative world.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/allianceglobaltower.jpg"
                                    alt="Alliance Global Tower - Inspire Alliance Fund Group Headquarters"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Leadership
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Meet the experienced leaders who guide Inspire Alliance Fund Group toward excellence and innovation
                        </p>
                    </div>

                    {/* Board of Directors */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Board of Directors
                        </h3>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            Our Board of Directors brings together diverse expertise in finance, technology, real estate, and international business to provide strategic guidance and oversight.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {boardOfDirectors.map((director, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                                    <Avatar
                                        name={director.name}
                                        size={64}
                                        bgGradient="from-blue-500 to-teal-500"
                                    />
                                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{director.name}</h4>
                                    <p className="text-blue-600 font-semibold mb-2">{director.position}</p>
                                    <p className="text-sm text-gray-500 mb-3">Director since {director.since}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{director.description}</p>

                                    <Link
                                        href={`/about/${director.slug}`}
                                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                                    >
                                        Read More
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Corporate Officers */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Corporate Officers
                        </h3>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            Our Corporate Officers ensure proper governance, operational excellence, and administrative support across all organizational functions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {corporateOfficers.map((officer, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                                    {officer.name === 'Jaime Flores' ? (
                                        <img src="/officers/jaime.png" alt="Jaime Flores" className="object-cover w-14 h-14 rounded-full mb-2" />
                                    ) : officer.name === 'Carlos Perez' ? (
                                        <img src="/officers/carlos.png" alt="Carlos Perez" className="object-cover w-14 h-14 rounded-full mb-2" />
                                    ) : officer.name === 'Shelah Reynaldo' ? (
                                        <img src="/officers/shelah.png" alt="Shelah Reynaldo" className="object-cover w-14 h-14 rounded-full mb-2" />
                                    ) : (
                                        <Avatar
                                            name={officer.name}
                                            size={56}
                                            bgGradient="from-orange-500 to-red-500"
                                            className="mb-2"
                                        />
                                    )}
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">{officer.name}</h4>
                                    <p className="text-orange-600 font-semibold mb-3 text-sm">{officer.position}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{officer.description}</p>

                                    <Link
                                        href={`/about/${officer.slug}`}
                                        className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors duration-300"
                                    >
                                        Read More
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Do Business */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How We Do Business
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our commitment to excellence is built on unwavering principles that guide every decision and action
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity & Trust</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We conduct business with the highest ethical standards, building lasting relationships based on transparency, honesty, and mutual respect with all our stakeholders.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation & Excellence</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We continuously innovate and adapt to changing market conditions, delivering exceptional value through cutting-edge financial solutions and superior service quality.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric Approach</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our clients are at the heart of everything we do. We tailor our services to meet unique needs, providing personalized solutions that drive success and growth.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Global Perspective</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We leverage international expertise and cross-border partnerships to provide comprehensive solutions that bridge markets and create opportunities globally.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Growth</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We focus on building long-term value through sustainable business practices that benefit our clients, communities, and the environment for generations to come.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We maintain the highest standards of security and regulatory compliance, ensuring our clients' interests are protected through robust risk management and governance frameworks.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Our Commitment to Excellence
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                For over a decade, we've served our clients, partners, and communities with integrity and respect. We work diligently to uphold our core values in everything we do, from the smallest transaction to the largest strategic initiative. Our success is measured not just by financial returns, but by the positive impact we create in the lives of those we serve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 