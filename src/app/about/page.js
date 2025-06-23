"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../components/Avatar';

// Temporary static translations to avoid hooks order issues
const translations = {
    en: {
        title: "About Inspire Alliance Fund Group",
        subtitle: "Empowering dreams, igniting change, and building a better future through innovative financial solutions",
        companyOverview: {
            title: "Company Overview",
            description1: "At Inspire Alliance Fund Group Inc., we are driven by a powerful purpose: to empower dreams and ignite meaningful change. Founded on the belief that lasting progress begins with opportunity, we exist to support individuals who are ready to make a difference—not just in their own lives, but in the communities around them.",
            description2: "We go beyond traditional funding. We are a dynamic movement that bridges passionate visionaries with the support, trust, and resources they need to transform ideas into lasting impact. Whether it's launching a small business, starting a social initiative, or developing innovative solutions, we're here to back bold ambitions.",
            description3: "By investing in people, we help spark growth, nurture resilience, and create a ripple effect that uplifts entire economies. Our commitment is unwavering: to fund possibilities, champion potential, and walk alongside changemakers on a shared journey toward a more empowered, hopeful, and innovative world."
        },
        leadership: {
            title: "Our Leadership",
            subtitle: "Meet the experienced leaders who guide Inspire Alliance Fund Group toward excellence and innovation",
            boardOfDirectors: {
                title: "Board of Directors",
                description: "Our Board of Directors brings together diverse expertise in finance, technology, real estate, and international business to provide strategic guidance and oversight."
            },
            corporateOfficers: {
                title: "Corporate Officers",
                description: "Our Corporate Officers ensure proper governance, operational excellence, and administrative support across all organizational functions."
            }
        },
        howWeWork: {
            title: "How We Do Business",
            subtitle: "Our commitment to excellence is built on unwavering principles that guide every decision and action",
            principles: {
                integrity: {
                    title: "Integrity & Trust",
                    description: "We conduct business with the highest ethical standards, building lasting relationships based on transparency, honesty, and mutual respect with all our stakeholders."
                },
                innovation: {
                    title: "Innovation & Excellence",
                    description: "We continuously innovate and adapt to changing market conditions, delivering exceptional value through cutting-edge financial solutions and superior service quality."
                },
                clientCentric: {
                    title: "Client-Centric Approach",
                    description: "Our clients are at the heart of everything we do. We tailor our services to meet unique needs, providing personalized solutions that drive success and growth."
                },
                globalPerspective: {
                    title: "Global Perspective",
                    description: "We leverage international expertise and cross-border partnerships to provide comprehensive solutions that bridge markets and create opportunities globally."
                },
                sustainableGrowth: {
                    title: "Sustainable Growth",
                    description: "We focus on building long-term value through sustainable business practices that benefit our clients, communities, and the environment for generations to come."
                },
                security: {
                    title: "Security & Compliance",
                    description: "We maintain the highest standards of security and regulatory compliance, ensuring our clients' interests are protected through robust risk management and governance frameworks."
                }
            },
            commitment: {
                title: "Our Commitment to Excellence",
                description: "For over a decade, we've served our clients, partners, and communities with integrity and respect. We work diligently to uphold our core values in everything we do, from the smallest transaction to the largest strategic initiative. Our success is measured not just by financial returns, but by the positive impact we create in the lives of those we serve."
            }
        },
        positions: {
            president: "President",
            vicePresident: "Vice President",
            nonExecutiveDirector: "Non-Executive Director",
            chiefCareerOfficer: "Chief of Career Track Officer",
            chiefTechnologyOfficer: "Chief of Technology Officer",
            hrOfficer: "HR/Administrative Officer",
            assistantHrOfficer: "Assistant HR/Administrative Officer",
            security: "Security",
            softwareDeveloper: "Software Developer/Secretary",
            secretary: "Secretary"
        },
        profile: {
            directorSince: "Director since",
            withCompanySince: "With the company since",
            backToLeadership: "Back to Leadership",
            readMore: "Read More",
            biography: "Biography",
            expertise: "Expertise",
            education: "Education",
            achievements: "Key Achievements"
        },
        boardDescriptions: {
            brianPerez: "Technology leader with extensive experience in digital innovation and systems architecture, driving the company's vision for technological advancement and growth.",
            rhiaAlberto: "Experienced executive with deep expertise in business operations and strategic planning, supporting organizational development and expansion.",
            renatoPineda: "Legal expert with extensive experience in corporate law and regulatory compliance, providing strategic legal guidance and oversight.",
            freddieReyes: "Seasoned business professional with expertise in financial management and investment strategies, contributing valuable industry insights.",
            ronaldoCastillo: "Accomplished executive with background in international business and market development, bringing global perspective to the board."
        },
        officerDescriptions: {
            carlosPerez: "Strategic oversight of career development programs, professional growth initiatives, and talent advancement pathways for organizational excellence.",
            jaimeFlores: "Technology leadership, digital innovation strategies, and systems architecture to drive technological advancement and operational efficiency.",
            gerlieDeAsis: "Human resources management, administrative operations, and organizational development initiatives.",
            anneColinares: "HR support services, administrative coordination, and employee relations management.",
            neilBrion: "Comprehensive security management, risk mitigation strategies, and protection of company assets and personnel.",
            shelahReynaldo: "Executive support, documentation management, and coordination of board and management communications.",
            joanneHermosura: "Administrative support, record keeping, and facilitation of corporate governance processes."
        }
    },
    ja: {
        title: "インスパイア・アライアンス・ファンド・グループについて",
        subtitle: "革新的な金融ソリューションを通じて夢を力づけ、変化を起こし、より良い未来を築く",
        companyOverview: {
            title: "会社概要",
            description1: "インスパイア・アライアンス・ファンド・グループ株式会社では、夢を力づけ、意義のある変化を起こすという強力な目的に突き動かされています。永続的な進歩は機会から始まるという信念に基づいて設立され、自分自身の人生だけでなく、周囲のコミュニティにも違いをもたらす準備ができている個人をサポートすることを存在意義としています。",
            description2: "私たちは従来の資金調達を超えた存在です。情熱的なビジョナリーと、アイデアを永続的なインパクトに変えるために必要なサポート、信頼、リソースを結びつける動的なムーブメントです。小さなビジネスの立ち上げ、社会的イニシアチブの開始、革新的なソリューションの開発など、私たちは大胆な野心を支援します。",
            description3: "人々に投資することで、成長を促し、回復力を育み、経済全体を押し上げる波及効果を生み出します。私たちのコミットメントは揺るぎません：可能性に資金を提供し、潜在能力を支援し、より力強く、希望に満ち、革新的な世界への共通の旅路で変革者と歩みを共にすることです。"
        },
        leadership: {
            title: "リーダーシップ",
            subtitle: "インスパイア・アライアンス・ファンド・グループを卓越性とイノベーションに導く経験豊富なリーダーたちをご紹介します",
            boardOfDirectors: {
                title: "取締役会",
                description: "当社の取締役会は、金融、技術、不動産、国際ビジネスにおける多様な専門知識を結集し、戦略的指導と監督を提供しています。"
            },
            corporateOfficers: {
                title: "企業役員",
                description: "当社の企業役員は、すべての組織機能にわたって適切なガバナンス、運営の卓越性、管理サポートを確保しています。"
            }
        },
        howWeWork: {
            title: "私たちのビジネス手法",
            subtitle: "卓越性への私たちのコミットメントは、すべての決定と行動を導く揺るぎない原則に基づいています",
            principles: {
                integrity: {
                    title: "誠実性と信頼",
                    description: "私たちは最高の倫理基準でビジネスを行い、すべてのステークホルダーとの透明性、誠実性、相互尊重に基づいた永続的な関係を築きます。"
                },
                innovation: {
                    title: "イノベーションと卓越性",
                    description: "私たちは絶えず革新し、変化する市場状況に適応し、最先端の金融ソリューションと優れたサービス品質を通じて卓越した価値を提供します。"
                },
                clientCentric: {
                    title: "顧客中心のアプローチ",
                    description: "お客様は私たちが行うすべての中心にいます。私たちは独自のニーズに合わせてサービスを調整し、成功と成長を推進する個人的なソリューションを提供します。"
                },
                globalPerspective: {
                    title: "グローバルな視点",
                    description: "私たちは国際的な専門知識と国境を越えたパートナーシップを活用し、市場を橋渡しし、グローバルに機会を創出する包括的なソリューションを提供します。"
                },
                sustainableGrowth: {
                    title: "持続可能な成長",
                    description: "私たちは、お客様、コミュニティ、環境が世代を超えて恩恵を受ける持続可能なビジネス慣行を通じて、長期的な価値の構築に焦点を当てています。"
                },
                security: {
                    title: "セキュリティとコンプライアンス",
                    description: "私たちは最高水準のセキュリティと規制遵守を維持し、堅牢なリスク管理とガバナンスフレームワークを通じてお客様の利益が保護されることを確保します。"
                }
            },
            commitment: {
                title: "卓越性への私たちのコミットメント",
                description: "10年以上にわたって、私たちは誠実性と尊敬をもってお客様、パートナー、コミュニティにサービスを提供してきました。最小の取引から最大の戦略的イニシアチブまで、私たちが行うすべてにおいて核となる価値観を堅持するために努力しています。私たちの成功は、財務的リターンだけでなく、サービスを提供する人々の生活に創造する前向きなインパクトによって測られます。"
            }
        },
        positions: {
            president: "代表取締役",
            vicePresident: "副社長",
            nonExecutiveDirector: "社外取締役",
            chiefCareerOfficer: "チーフキャリアトラック・オフィサー",
            chiefTechnologyOfficer: "最高技術責任者",
            hrOfficer: "人事・管理担当者",
            assistantHrOfficer: "人事・管理アシスタント",
            security: "セキュリティ",
            softwareDeveloper: "ソフトウェア開発者・秘書",
            secretary: "秘書"
        },
        profile: {
            directorSince: "取締役就任",
            withCompanySince: "入社年",
            backToLeadership: "リーダーシップに戻る",
            readMore: "続きを読む",
            biography: "経歴",
            expertise: "専門分野",
            education: "学歴",
            achievements: "主な実績"
        },
        boardDescriptions: {
            brianPerez: "デジタルイノベーションとシステムアーキテクチャにおける豊富な経験を持つテクノロジーリーダーとして、同社の技術的進歩と成長のビジョンを推進しています。",
            rhiaAlberto: "事業運営と戦略立案における深い専門知識を持つ経験豊富な役員として、組織開発と拡大を支援しています。",
            renatoPineda: "企業法と規制遵守における豊富な経験を持つ法務専門家として、戦略的法的指導と監督を提供しています。",
            freddieReyes: "財務管理と投資戦略における専門知識を持つ経験豊富なビジネスプロフェッショナルとして、貴重な業界の洞察を提供しています。",
            ronaldoCastillo: "国際ビジネスと市場開発の背景を持つ熟練した役員として、取締役会にグローバルな視点をもたらしています。"
        },
        officerDescriptions: {
            carlosPerez: "キャリア開発プログラム、専門的成長イニシアチブ、組織の卓越性のための人材育成経路の戦略的監督を行っています。",
            jaimeFlores: "技術リーダーシップ、デジタルイノベーション戦略、システムアーキテクチャを通じて技術的進歩と運営効率を推進しています。",
            gerlieDeAsis: "人事管理、管理業務、組織開発イニシアチブを担当しています。",
            anneColinares: "人事サポートサービス、管理調整、従業員関係管理を行っています。",
            neilBrion: "包括的なセキュリティ管理、リスク軽減戦略、会社資産と人員の保護を担当しています。",
            shelahReynaldo: "役員サポート、文書管理、取締役会と経営陣のコミュニケーション調整を行っています。",
            joanneHermosura: "管理サポート、記録保持、企業ガバナンスプロセスの促進を行っています。"
        }
    }
};



const boardOfDirectors = [
    {
        name: "Brian Perez",
        position: "president",
        since: "2021",
        descriptionKey: "brianPerez",
        slug: "brian-perez"
    },
    {
        name: "Rhia Alberto",
        position: "vicePresident",
        since: "2020",
        descriptionKey: "rhiaAlberto",
        slug: "rhia-alberto"
    },
    {
        name: "Atty. Renato Pineda",
        position: "nonExecutiveDirector",
        since: "2020",
        descriptionKey: "renatoPineda",
        slug: "atty-renato-pineda"
    },
    {
        name: "Freddie Reyes",
        position: "nonExecutiveDirector",
        since: "2021",
        descriptionKey: "freddieReyes",
        slug: "freddie-reyes"
    },
    {
        name: "Ronaldo Castillo",
        position: "nonExecutiveDirector",
        since: "2022",
        descriptionKey: "ronaldoCastillo",
        slug: "ronaldo-castillo"
    }
];

const corporateOfficers = [
    {
        name: "Carlos Perez",
        position: "chiefCareerOfficer",
        descriptionKey: "carlosPerez",
        slug: "carlos-perez"
    },
    {
        name: "Jaime Flores",
        position: "chiefTechnologyOfficer",
        descriptionKey: "jaimeFlores",
        slug: "jaime-flores"
    },
    {
        name: "Gerlie De Asis",
        position: "hrOfficer",
        descriptionKey: "gerlieDeAsis",
        slug: "gerlie-de-asis"
    },
    {
        name: "Anne Colinares",
        position: "assistantHrOfficer",
        descriptionKey: "anneColinares",
        slug: "anne-colinares"
    },
    {
        name: "Neil Brion",
        position: "security",
        descriptionKey: "neilBrion",
        slug: "neil-brion"
    },
    {
        name: "Shelah Reynaldo",
        position: "softwareDeveloper",
        descriptionKey: "shelahReynaldo",
        slug: "shelah-reynaldo"
    },
    {
        name: "Joanne Hermosura",
        position: "secretary",
        descriptionKey: "joanneHermosura",
        slug: "joanne-hermosura"
    }
];

export default function AboutPage() {
    // HOOKS IN STRICT ORDER - NO CONDITIONAL CALLS ANYWHERE
    const [mounted, setMounted] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => {
        setMounted(true);

        // Check for saved language preference
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("selectedLanguage");
            if (savedLang && (savedLang === "en" || savedLang === "ja")) {
                setCurrentLang(savedLang);
            }
        }
    }, []);

    useEffect(() => {
        const handleLanguageChange = (event) => {
            if (event.detail && event.detail.language) {
                setCurrentLang(event.detail.language);
            }
        };

        if (mounted) {
            window.addEventListener("languageChanged", handleLanguageChange);
            return () => {
                window.removeEventListener("languageChanged", handleLanguageChange);
            };
        }
    }, [mounted]);

    // Translation function
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value || key;
    };

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return null;
    }

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
                            {t('title')}
                        </h1>
                        <div className="w-32 h-1 bg-white/30 mx-auto mb-6"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            {t('subtitle')}
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
                                {t('companyOverview.title')}
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>{t('companyOverview.description1')}</p>
                                <p>{t('companyOverview.description2')}</p>
                                <p>{t('companyOverview.description3')}</p>
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
                            {t('leadership.title')}
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('leadership.subtitle')}
                        </p>
                    </div>

                    {/* Board of Directors */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            {t('leadership.boardOfDirectors.title')}
                        </h3>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            {t('leadership.boardOfDirectors.description')}
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
                                    <p className="text-blue-600 font-semibold mb-2">{t(`positions.${director.position}`)}</p>
                                    <p className="text-sm text-gray-500 mb-3">{t('profile.directorSince')} {director.since}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{t(`boardDescriptions.${director.descriptionKey}`)}</p>

                                    <Link
                                        href={`/about/${director.slug}`}
                                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                                    >
                                        {t('profile.readMore')}
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
                            {t('leadership.corporateOfficers.title')}
                        </h3>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            {t('leadership.corporateOfficers.description')}
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
                                    <p className="text-orange-600 font-semibold mb-3 text-sm">{t(`positions.${officer.position}`)}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{t(`officerDescriptions.${officer.descriptionKey}`)}</p>

                                    <Link
                                        href={`/about/${officer.slug}`}
                                        className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors duration-300"
                                    >
                                        {t('profile.readMore')}
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
                            {t('howWeWork.title')}
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('howWeWork.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('howWeWork.principles.integrity.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('howWeWork.principles.integrity.description')}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('howWeWork.principles.innovation.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('howWeWork.principles.innovation.description')}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('howWeWork.principles.clientCentric.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('howWeWork.principles.clientCentric.description')}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('howWeWork.principles.globalPerspective.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('howWeWork.principles.globalPerspective.description')}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('howWeWork.principles.sustainableGrowth.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('howWeWork.principles.sustainableGrowth.description')}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('howWeWork.principles.security.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {t('howWeWork.principles.security.description')}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {t('howWeWork.commitment.title')}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                {t('howWeWork.commitment.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 