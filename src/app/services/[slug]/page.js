import React from 'react';
import { notFound } from 'next/navigation';
import BankingPartners from '../../components/BankingPartners';
import SECPhilippines from '../../components/SECPhilippines';
import TravelSecurity from '../../components/TravelSecurity';
import RealEstate from '../../components/RealEstate';

const servicesMetadata = {
    'international-banking-solutions': {
        title: 'International Banking Solutions - Philippines Bank Account Opening | Inspire Alliance Fund Group',
        description: 'Expert consultancy services for foreigners opening bank accounts in the Philippines. Comprehensive guidance on Philippine banking, payment solutions, and financial growth strategies for international clients.',
        keywords: 'Philippines bank account, foreigner banking Philippines, BDO BPI CTBC UnionBank Security Bank, Philippine banking consultancy, international clients Philippines, expatriate banking, foreign investment Philippines, Philippine payment solutions'
    },
    'strategic-business-advisory': {
        title: 'Strategic Business Advisory - Philippines Business Setup | Inspire Alliance Fund Group',
        description: 'Expert business consulting for foreigners establishing businesses in the Philippines. Complete SEC registration, business banking, corporate setup, and company protection services.',
        keywords: 'Philippines business setup, SEC registration, foreign business Philippines, business consulting Philippines, corporate registration, business banking Philippines, company protection, BIR registration, DTI registration'
    },
    'comprehensive-travel-security': {
        title: 'Comprehensive Travel Security | Inspire Alliance Fund Group',
        description: 'Professional travel protection services with 24/7 support. Comprehensive security coverage, risk assessment, and emergency assistance for international travelers.',
        keywords: 'travel security, travel protection, travel insurance, emergency assistance, international travel, travel safety, risk assessment'
    },
    'premium-real-estate-solutions': {
        title: 'Premium Real Estate Solutions - Philippines Property Investment | Inspire Alliance Fund Group',
        description: 'Discover exceptional real estate opportunities in the Philippines through our network of 14+ trusted developer partners. Expert guidance for suitable and affordable properties from luxury condominiums to affordable housing.',
        keywords: 'Philippines real estate, property investment Philippines, real estate developers Philippines, Ayala Land, SMDC, Megaworld, Century Properties, Filinvest, property consulting Philippines, condominium investment, house and lot Philippines'
    },
    'japanese-product-innovation': {
        title: 'Japanese Product Innovation | Inspire Alliance Fund Group',
        description: 'Bridge Japanese innovation with global markets. Expert marketing and promotion of authentic Japanese products with cultural integrity and international appeal.',
        keywords: 'Japanese products, product innovation, Japanese marketing, product promotion, cultural authenticity, global markets, Japanese craftsmanship'
    }
};

export function generateMetadata({ params }) {
    const { slug } = params;
    const metadata = servicesMetadata[slug];

    if (!metadata) {
        return {
            title: 'Service Not Found | Inspire Alliance Fund Group',
            description: 'The requested service page could not be found.',
        };
    }

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            type: 'website',
            url: `https://inspirealliance.com/services/${slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: metadata.title,
            description: metadata.description,
        },
    };
}

const servicesData = {
    'international-banking-solutions': {
        title: 'International Banking Solutions',
        description: `Navigating the Philippine banking system as a foreigner can be challenging and overwhelming. At Inspire Alliance Fund Group, we specialize in providing comprehensive banking solutions specifically designed to help international clients successfully establish their financial presence in the Philippines. Our expert team understands the unique challenges foreigners face when trying to open bank accounts in the Philippines, and we're here to make the process seamless and stress-free.

    Our specialized consultancy services guide foreign nationals through every step of the bank account opening process in the Philippines. We work closely with our partner banks including BDO (Banco de Oro), BPI (Bank of the Philippine Islands), CTBC Bank, UnionBank, and Security Bank to ensure you have access to the best banking options that suit your specific needs and circumstances. Whether you're an expatriate working in the Philippines, a foreign investor, an overseas Filipino worker (OFW) family member, or an international business owner, we provide tailored solutions to meet your banking requirements.

    The Philippine banking landscape has specific requirements and documentation standards that can be complex for foreigners to navigate independently. Our experienced consultants provide detailed guidance on all necessary documentation, including valid visa requirements, proof of income, employment certificates, tax identification numbers (TIN), and other essential documents required by Philippine banks. We help you understand the various account types available, from basic savings accounts to premium banking packages, ensuring you choose the option that best aligns with your financial goals.

    Beyond account opening, our comprehensive advisory services extend to payment solutions and financial growth strategies specifically tailored for the Philippine market. We provide expert guidance on how to efficiently handle various payment methods, including online banking, mobile banking applications, remittance services, and international wire transfers. Our team helps you understand the local payment ecosystem, including popular digital payment platforms like GCash, PayMaya, and other fintech solutions that are widely used in the Philippines.

    Our financial growth advisory services focus on helping foreign clients maximize their financial opportunities within the Philippine market. We provide insights into local investment opportunities, time deposit products, foreign currency savings accounts, and other wealth-building instruments available through Philippine banks. Our consultants offer personalized advice on currency exchange strategies, helping you minimize costs when converting foreign currencies and timing your transactions for optimal rates.

    We also provide ongoing support for managing your Philippine banking relationships, including assistance with account maintenance, understanding local banking fees and charges, setting up automatic payments for utilities and other services, and navigating any issues that may arise with your banking relationships. Our team stays updated with the latest banking regulations and policy changes that may affect foreign account holders, ensuring you remain compliant with all local requirements.

    For business clients, we offer specialized services including corporate account setup, merchant account facilitation, and business banking optimization strategies. We help foreign entrepreneurs and investors understand the Philippine business banking landscape, including requirements for different business structures, foreign investment guidelines, and regulatory compliance for international businesses operating in the Philippines.

    Our commitment extends beyond just opening accounts – we build long-term relationships with our clients, providing ongoing financial consulting to help you grow and manage your wealth effectively in the Philippines. We understand that successful financial management in a foreign country requires local expertise combined with international perspective, and that's exactly what we provide.

    Trust Inspire Alliance Fund Group to be your reliable partner in establishing and growing your financial presence in the Philippines, where local expertise meets international standards, and your financial success becomes our shared achievement.`
    },
    'strategic-business-advisory': {
        title: 'Strategic Business Advisory',
        description: `Starting a business in the Philippines as a foreigner can be complex and overwhelming, with numerous legal requirements, registration processes, and regulatory compliance measures to navigate. At Inspire Alliance Fund Group, we specialize in providing comprehensive business advisory services specifically designed to help international entrepreneurs successfully establish and operate their businesses in the Philippines.

    Our expert team understands the unique challenges foreign investors face when entering the Philippine business landscape. We provide end-to-end consulting services that guide you through every step of the business establishment process, from initial planning and market research to full operational setup and ongoing compliance management.

    Our comprehensive business registration services begin with helping you choose the most appropriate business structure for your specific needs and circumstances. Whether you're looking to establish a corporation, partnership, sole proprietorship, or foreign branch office, we provide detailed guidance on the advantages and requirements of each business type. We assist with all necessary documentation and ensure compliance with Philippine corporate law and foreign investment regulations.

    One of our core specialties is Securities and Exchange Commission (SEC) registration, a critical requirement for establishing any business entity in the Philippines. Our experienced consultants handle the entire SEC registration process, including preparation of all required documents such as Articles of Incorporation, By-Laws, corporate resolutions, and other essential paperwork. We ensure all submissions meet SEC requirements and standards, minimizing delays and avoiding common pitfalls that often plague foreign investors navigating this process independently.

    Beyond SEC registration, we provide comprehensive support for all other regulatory requirements including Bureau of Internal Revenue (BIR) registration for tax identification numbers and permits, Department of Trade and Industry (DTI) registration for business names, local government unit permits and licenses, and specialized industry permits depending on your business activities. Our team stays current with all regulatory changes and requirements, ensuring your business remains compliant throughout the registration process.

    Our business banking services complement our registration expertise by helping you establish corporate bank accounts with leading Philippine financial institutions. We understand the specific documentation and requirements that foreign-owned businesses must meet to open business accounts, and we work closely with our banking partners to streamline this process. Our team assists with preparation of all necessary banking documents, coordinates with bank representatives, and ensures you have access to the financial services your business needs to operate effectively.

    Company protection services form another crucial component of our advisory offerings. We provide guidance on intellectual property protection, trademark registration, copyright protection, and other measures to safeguard your business interests in the Philippines. Our team helps you understand local laws regarding business protection and implements appropriate safeguards to protect your investments, trade secrets, and competitive advantages.

    Our strategic planning services extend beyond initial setup to include ongoing business development support. We provide market analysis and competitive intelligence to help you understand the Philippine business environment, identify opportunities for growth, and develop effective strategies for market penetration. Our consultants offer insights into local consumer behavior, cultural considerations that impact business operations, and strategies for building relationships with local partners and stakeholders.

    We also provide ongoing compliance monitoring and support to ensure your business continues to meet all regulatory requirements after establishment. This includes assistance with annual compliance requirements, tax filing support, regulatory reporting, and updates on changing laws and regulations that may impact your business operations.

    For businesses requiring specialized permits or operating in regulated industries, we provide expert guidance on sector-specific requirements. Whether you're establishing a business in food service, retail, manufacturing, technology, or professional services, our team has the expertise to navigate industry-specific regulations and ensure proper compliance.

    Our commitment to your success extends beyond the initial setup phase. We build long-term relationships with our clients, providing ongoing strategic advice, business development support, and expansion planning as your business grows and evolves in the Philippine market. We understand that successful business operations require continuous adaptation to local market conditions, and we're here to support you throughout your business journey.

    Trust Inspire Alliance Fund Group to be your comprehensive partner in establishing and growing your business presence in the Philippines, where expert guidance meets practical execution, and your entrepreneurial vision becomes a thriving Philippine business reality.`
    },
    'comprehensive-travel-security': {
        title: 'Comprehensive Travel Security',
        description: `In an interconnected world where business and leisure travel are essential, comprehensive travel security has become paramount. Our travel protection services offer peace of mind through extensive coverage and proactive support, ensuring you can focus on your journey while we handle your security and safety concerns.

    Our comprehensive approach to travel security encompasses multiple layers of protection, from pre-travel risk assessment to 24/7 emergency support during your journey. We understand that each traveler has unique needs and risk profiles, which is why we offer customized protection plans tailored to your specific travel patterns and destinations.

    Our services include detailed destination briefings, real-time security monitoring, emergency medical coverage, evacuation services, and comprehensive travel insurance. We maintain a global network of security professionals and medical facilities, ensuring rapid response capabilities regardless of your location.

    Whether you're traveling for business expansion, investment opportunities, or leisure, our team provides continuous monitoring of global security conditions, weather patterns, and political developments that could impact your travel plans. We offer proactive alerts and alternative routing suggestions to help you avoid potential disruptions.

    Our travel security specialists work closely with corporate clients to develop comprehensive travel policies, conduct security training for frequent travelers, and establish emergency protocols. For individual travelers, we provide personalized security briefings and 24/7 concierge support.

    Experience the confidence that comes with comprehensive travel protection, where your safety is our priority, and your journey is our responsibility.`
    },
    'premium-real-estate-solutions': {
        title: 'Premium Real Estate Solutions',
        description: `The Philippine real estate market offers exceptional opportunities for both local and international investors, with a rapidly growing economy, expanding urban centers, and increasing demand for quality housing and commercial spaces. At Inspire Alliance Fund Group, we connect you with the Philippines' most reputable real estate developers through our extensive network of trusted partners, ensuring you have access to the best properties that match your lifestyle and investment goals.

    Our comprehensive real estate solutions are designed to help you find suitable and affordable properties across the Philippines, whether you're looking for your dream home, a smart investment opportunity, or commercial real estate for your business needs. We work with over 14 affiliated developers, including industry leaders like Ayala Land, SMDC, Megaworld, Century Properties, Filinvest, Federal Land, and many others, giving you access to a diverse portfolio of properties from luxury condominiums to affordable housing solutions.

    Our expert team understands that choosing the right property is one of the most important decisions you'll make, which is why we provide personalized consultation services to help you navigate the Philippine real estate landscape. We take the time to understand your specific requirements, budget constraints, and long-term goals, then match you with properties that align with your needs from our extensive network of developer partners.

    From luxury high-rise condominiums in Metro Manila's central business districts to affordable house and lot packages in master-planned communities, our affiliated developers offer a comprehensive range of property types to suit different lifestyles and budgets. Whether you're interested in modern urban living with world-class amenities, family-friendly suburban communities, or investment-grade properties with strong rental potential, we have options that meet your criteria.

    Our services extend beyond simple property matching to include comprehensive support throughout your property acquisition journey. We provide detailed information about each development, including location advantages, amenities, payment schemes, and investment potential. Our team assists with site visits, developer meetings, and negotiations to ensure you get the best possible terms for your property purchase.

    We understand that financing is often a crucial consideration in property acquisition, which is why we work closely with our developer partners to provide information about available payment schemes, in-house financing options, and bank financing partnerships. Many of our affiliated developers offer flexible payment terms, including low down payment options, extended payment periods, and competitive interest rates to make property ownership more accessible.

    For investors, we provide detailed market analysis and investment projections to help you make informed decisions about property purchases. Our team offers insights into rental yields, capital appreciation potential, and market trends that could impact your investment returns. We also provide guidance on property management services and rental strategies to help you maximize your investment returns.

    Our commitment to your success extends beyond the initial property purchase. We maintain ongoing relationships with our clients, providing updates on new developments, market opportunities, and investment strategies. We also facilitate connections with property management companies, legal services, and other professionals you may need throughout your property ownership journey.

    The Philippine real estate market offers unique advantages including affordable property prices compared to other major Asian markets, strong economic growth driving demand, government infrastructure investments improving connectivity, and a growing middle class increasing housing demand. Our affiliated developers are at the forefront of these market trends, developing properties in strategic locations with excellent growth potential.

    Whether you're a first-time homebuyer, an experienced investor, or someone looking to relocate to the Philippines, our premium real estate solutions provide the expertise, connections, and support you need to make successful property decisions. We believe that everyone deserves access to quality housing and smart investment opportunities, and we're committed to making that vision a reality through our comprehensive real estate services.

    To explore our complete portfolio of available properties and get detailed information about units, floor plans, pricing, and amenities from all our affiliated developers, we invite you to visit our dedicated Inspire Real Estate platform. This comprehensive online resource provides you with direct access to the latest listings, virtual tours, and detailed property information, making it easier than ever to find your perfect property match.

    Trust Inspire Alliance Fund Group to be your reliable partner in Philippine real estate, where expert guidance meets exceptional opportunities, and your property dreams become reality through our network of trusted developer partnerships.`
    },
    'japanese-product-innovation': {
        title: 'Japanese Product Innovation',
        description: `Japan stands at the forefront of global innovation, consistently producing products and technologies that define industry standards and consumer expectations worldwide. Our Japanese product innovation services bridge the gap between exceptional Japanese craftsmanship and global market opportunities, helping businesses access and promote authentic Japanese products.

    Our comprehensive approach to product innovation encompasses market research, product sourcing, brand development, and global marketing strategies. We work directly with Japanese manufacturers and artisans to identify unique products with international appeal, ensuring authenticity while meeting global quality standards.

    Our team of marketing specialists understands the nuances of Japanese business culture and the importance of maintaining product integrity while adapting to international markets. We provide end-to-end support for product launches, including market positioning, pricing strategies, distribution channel development, and promotional campaigns.

    From traditional crafts and artisanal products to cutting-edge technology and consumer goods, we help businesses discover and promote products that represent the best of Japanese innovation. Our services include product evaluation, cultural consulting, brand storytelling, and market entry strategies.

    We believe that successful product marketing requires more than just promotion—it requires deep understanding of the product's heritage, craftsmanship, and unique value proposition. Our team provides this crucial knowledge, ensuring your products resonate with international audiences while maintaining their authentic Japanese character.

    Whether you're looking to import Japanese products, develop co-branded offerings, or create marketing campaigns that celebrate Japanese innovation, our team provides the expertise and cultural insights necessary for success.

    Experience the power of Japanese product innovation, where exceptional quality meets global opportunity, and authentic craftsmanship drives business success.`
    }
};

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export default function ServicePage({ params }) {
    const { slug } = params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Geometric Background */}
            <div className="relative overflow-hidden">
                {/* Geometric Background Elements */}
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background: 'linear-gradient(135deg, rgba(128, 195, 42, 0.9) 0%, rgba(75, 136, 139, 0.9) 50%, rgba(56, 115, 175, 0.9) 100%)'
                    }}
                >
                    {/* Geometric Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        {/* Large Circle */}
                        <div
                            className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-20"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        ></div>

                        {/* Hexagon */}
                        <div className="absolute top-20 left-10 w-24 h-24 opacity-15 transform rotate-45">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                }}
                            ></div>
                        </div>

                        {/* Triangle */}
                        <div
                            className="absolute bottom-20 right-20 w-32 h-32 opacity-10"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                            }}
                        ></div>

                        {/* Diamond */}
                        <div
                            className="absolute top-1/3 left-1/4 w-16 h-16 opacity-20 transform rotate-45"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        ></div>

                        {/* Lines */}
                        <div className="absolute inset-0">
                            <div
                                className="absolute top-1/4 left-0 w-full h-0.5 opacity-10 transform -rotate-12"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                            ></div>
                            <div
                                className="absolute bottom-1/3 left-0 w-full h-0.5 opacity-10 transform rotate-6"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Title Section */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-32">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <div className="w-32 h-1 bg-white/30 mx-auto"></div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none">
                        <div className="text-gray-700 leading-relaxed space-y-6">
                            {service.description.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-lg leading-8">
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Banking Partners Section - Only for International Banking Solutions */}
            {slug === 'international-banking-solutions' && <BankingPartners />}

            {/* SEC Philippines Section - Only for Strategic Business Advisory */}
            {slug === 'strategic-business-advisory' && <SECPhilippines />}

            {/* Real Estate Section - Only for Premium Real Estate Solutions */}
            {slug === 'premium-real-estate-solutions' && <RealEstate />}

            {/* SEC Philippines Section - Only for Strategic Business Advisory */}
            {slug === 'comprehensive-travel-security' && <TravelSecurity />}

            {/* Content Section Continued */}
            <div className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-4xl mx-auto">
                    {/* Call to Action */}
                    <div className="mt-16 mb-16 text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Ready to Get Started?
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Contact our experts today to learn more about how we can help you achieve your goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)'
                                    }}
                                >
                                    Contact Us
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
                                >
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 