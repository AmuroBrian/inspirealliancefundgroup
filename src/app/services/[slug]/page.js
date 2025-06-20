import React from 'react';
import { notFound } from 'next/navigation';
import ServicePageContent from '../../components/ServicePageContent';

const servicesMetadata = {
    'inspire-wallet-fintech-mobile-application': {
        title: 'Inspire Wallet - FinTech Mobile Application | Investment Tracking & Portfolio Management',
        description: 'Your all-in-one financial companion for investment tracking, stock management, and portfolio monitoring. Real-time analytics, crypto & forex trading platform, transaction history, and bank-level security for investors.',
        keywords: 'Inspire Wallet, fintech app, investment tracking, portfolio management, stock management, crypto trading, forex trading, trading platform, mobile banking, financial app Philippines, investor wallet, real-time trading, withdrawal management, transaction history'
    },
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
        title: 'Japanese Product Innovation - Authentic Japanese Products in Philippines | Inspire Alliance Fund Group',
        description: 'Discover authentic Japanese products now available in the Philippines. From health technology to lifestyle products, experience Japanese excellence with local accessibility and support.',
        keywords: 'Japanese products Philippines, authentic Japanese products, Japanese innovation Philippines, Alpha HT, Denso, Pure Exom, Stems AI, Japanese technology Philippines, Japanese lifestyle products, inspirenextglobal'
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

export async function generateStaticParams() {
    const validSlugs = [
        'inspire-wallet-fintech-mobile-application',
        'international-banking-solutions',
        'strategic-business-advisory',
        'comprehensive-travel-security',
        'premium-real-estate-solutions',
        'japanese-product-innovation'
    ];

    return validSlugs.map((slug) => ({
        slug: slug,
    }));
}

export default function ServicePage({ params }) {
    const { slug } = params;

    // Check if the slug exists in our services
    const validSlugs = [
        'inspire-wallet-fintech-mobile-application',
        'international-banking-solutions',
        'strategic-business-advisory',
        'comprehensive-travel-security',
        'premium-real-estate-solutions',
        'japanese-product-innovation'
    ];

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    return <ServicePageContent slug={slug} />;
} 