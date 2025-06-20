"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { successStoriesData } from "../successStoriesData";

export default function SuccessStoryPage({ params }) {
    const resolvedParams = use(params);

    // All useState hooks first
    const [story, setStory] = useState(null);
    const [relatedStories, setRelatedStories] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");

    // Static translations for success story detail page
    const translations = {
        en: {
            detail: {
                loading: "Loading success story...",
                home: "Home",
                breadcrumb: "Success Stories",
                investment_analyst: "Investment Analyst",
                executive_summary: "Executive Summary",
                key_metrics: "Key Metrics",
                impact_analysis: "Impact Analysis",
                key_achievements: "Key Achievements",
                challenges_overcome: "Challenges Overcome",
                investment_outcomes: "Investment Outcomes",
                investment_conclusion: "Investment Conclusion",
                disclaimer: "Disclaimer:",
                disclaimer_text: "This case study is for informational purposes only and should not be considered as investment advice. Past performance does not guarantee future results. Please consult with qualified financial advisors before making investment decisions.",
                sec_registration: "Inspire Alliance Fund Group is registered with the Securities and Exchange Commission of the Philippines under Registration No. AS092-4578.",
                investment_details: "Investment Details",
                category: "Category:",
                location: "Location:",
                investment: "Investment:",
                team_size: "Team Size:",
                year: "Year:",
                impact_metrics: "Impact Metrics",
                investment_opportunities: "Investment Opportunities",
                investment_opportunities_desc: "Discover similar high-impact investment opportunities through our strategic partnership program.",
                learn_more: "Learn More",
                related_stories: "Related Success Stories"
            },
            categories: {
                Technology: "Technology",
                Healthcare: "Healthcare",
                Environment: "Environment",
                Education: "Education",
                Agriculture: "Agriculture"
            }
        },
        ja: {
            detail: {
                loading: "成功事例を読み込み中...",
                home: "ホーム",
                breadcrumb: "成功事例",
                investment_analyst: "投資アナリスト",
                executive_summary: "エグゼクティブサマリー",
                key_metrics: "主要指標",
                impact_analysis: "インパクト分析",
                key_achievements: "主要な成果",
                challenges_overcome: "克服された課題",
                investment_outcomes: "投資成果",
                investment_conclusion: "投資結論",
                disclaimer: "免責事項：",
                disclaimer_text: "このケーススタディは情報提供のみを目的としており、投資アドバイスとして考慮されるべきではありません。過去の実績は将来の結果を保証するものではありません。投資判断を行う前に、資格のある金融アドバイザーにご相談ください。",
                sec_registration: "インスパイア・アライアンス・ファンド・グループは、登録番号AS092-4578でフィリピン証券取引委員会に登録されています。",
                investment_details: "投資詳細",
                category: "カテゴリー：",
                location: "所在地：",
                investment: "投資額：",
                team_size: "チーム規模：",
                year: "年：",
                impact_metrics: "インパクト指標",
                investment_opportunities: "投資機会",
                investment_opportunities_desc: "戦略的パートナーシッププログラムを通じて、類似の高インパクト投資機会を発見してください。",
                learn_more: "詳細を見る",
                related_stories: "関連する成功事例"
            },
            categories: {
                Technology: "テクノロジー",
                Healthcare: "ヘルスケア",
                Environment: "環境",
                Education: "教育",
                Agriculture: "農業"
            }
        }
    };

    const t = (key) => {
        const keys = key.replace('success_stories.', '').split('.');
        let result = translations[currentLang];
        for (const k of keys) {
            result = result[k];
            if (!result) break;
        }
        return result || key;
    };

    // Listen for language changes
    useEffect(() => {
        setMounted(true);

        // Check for saved language on load
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("selectedLanguage");
            if (savedLang && (savedLang === "en" || savedLang === "ja")) {
                setCurrentLang(savedLang);
            }
        }

        // Listen for language change events
        const handleLanguageChange = (event) => {
            setCurrentLang(event.detail.language);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("languageChanged", handleLanguageChange);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("languageChanged", handleLanguageChange);
            }
        };
    }, []);

    useEffect(() => {
        const currentStory = successStoriesData[resolvedParams.slug];
        if (currentStory) {
            setStory(currentStory);
            const related = Object.values(successStoriesData)
                .filter(item => item.slug !== resolvedParams.slug)
                .slice(0, 2);
            setRelatedStories(related);
        }
    }, [resolvedParams.slug]);

    if (!mounted || !story) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">{mounted ? t("success_stories.detail.loading") : "Loading success story..."}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-green-600 hover:text-green-700">{t("success_stories.detail.home")}</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/#success-stories" className="text-green-600 hover:text-green-700">{t("success_stories.detail.breadcrumb")}</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">{story.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <motion.div className="relative bg-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">{t(`success_stories.categories.${story.category}`)}</span>
                                <span className="text-sm text-gray-500">{story.date}</span>
                                <span className="text-sm text-gray-500">{story.readTime}</span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{story.title}</h1>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{story.summary}</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    {story.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{story.author}</p>
                                    <p className="text-sm text-gray-500">{t("success_stories.detail.investment_analyst")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                            <Image src={story.image} alt={story.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <motion.article className="bg-white rounded-xl shadow-lg p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("success_stories.detail.executive_summary")}</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">{story.content.introduction}</p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("success_stories.detail.key_metrics")}</h2>
                                <div className="space-y-6">
                                    {story.content.keyPoints.map((point, index) => (
                                        <motion.div key={index} className="border-l-4 border-green-500 pl-6 py-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}>
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                                                <span className="text-lg font-bold text-green-600 ml-4">{point.data}</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{point.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("success_stories.detail.impact_analysis")}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>{t("success_stories.detail.key_achievements")}
                                        </h3>
                                        <ul className="space-y-2">
                                            {story.content.analysis.achievements.map((achievement, index) => (
                                                <li key={index} className="text-green-700 flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>{achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-orange-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>{t("success_stories.detail.challenges_overcome")}
                                        </h3>
                                        <ul className="space-y-2">
                                            {story.content.analysis.challenges.map((challenge, index) => (
                                                <li key={index} className="text-orange-700 flex items-start">
                                                    <span className="text-orange-500 mr-2 mt-1">⚡</span>{challenge}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("success_stories.detail.investment_outcomes")}</h2>
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <ul className="space-y-3">
                                        {story.content.outcomes.map((outcome, index) => (
                                            <li key={index} className="text-blue-800 flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1 text-lg">→</span>
                                                <span className="font-medium">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("success_stories.detail.investment_conclusion")}</h2>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <p className="text-gray-700 leading-relaxed text-lg italic">{story.content.conclusion}</p>
                                </div>
                            </section>

                            <div className="border-t pt-6 mt-8">
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    <strong>{t("success_stories.detail.disclaimer")}</strong> {t("success_stories.detail.disclaimer_text")}
                                    <strong> {t("success_stories.detail.sec_registration")}</strong>
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            <motion.div className="bg-white rounded-xl shadow-lg p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("success_stories.detail.investment_details")}</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between"><span className="text-gray-600">{t("success_stories.detail.category")}</span><span className="font-medium text-gray-900">{t(`success_stories.categories.${story.category}`)}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">{t("success_stories.detail.location")}</span><span className="font-medium text-gray-900">{story.location}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">{t("success_stories.detail.investment")}</span><span className="font-medium text-gray-900">{story.funding}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">{t("success_stories.detail.team_size")}</span><span className="font-medium text-gray-900">{story.teamSize}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">{t("success_stories.detail.year")}</span><span className="font-medium text-gray-900">{story.year}</span></div>
                                </div>
                            </motion.div>

                            <motion.div className="bg-white rounded-xl shadow-lg p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("success_stories.detail.impact_metrics")}</h3>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">{story.impact}</div>
                                    <div className="text-sm text-gray-600">{story.impactText}</div>
                                </div>
                            </motion.div>

                            <motion.div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl shadow-lg p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                                <h3 className="text-lg font-semibold mb-3">{t("success_stories.detail.investment_opportunities")}</h3>
                                <p className="text-green-100 text-sm mb-4">{t("success_stories.detail.investment_opportunities_desc")}</p>
                                <button className="w-full bg-white text-green-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">{t("success_stories.detail.learn_more")}</button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Related Stories */}
                {relatedStories.length > 0 && (
                    <motion.section className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t("success_stories.detail.related_stories")}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedStories.map((relatedStory, index) => (
                                <Link href={`/success-stories/${relatedStory.slug}`} key={index}>
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                                        <div className="relative h-48">
                                            <Image src={relatedStory.image} alt={relatedStory.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                            <div className="absolute top-4 left-4">
                                                <span className="text-xs bg-white/90 text-gray-800 px-2 py-1 rounded-full font-medium">{t(`success_stories.categories.${relatedStory.category}`)}</span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{relatedStory.title}</h3>
                                            <p className="text-gray-600 text-sm mb-3">{relatedStory.summary}</p>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{relatedStory.impact} {relatedStory.impactText}</span>
                                                <span>{relatedStory.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.section>
                )}
            </div>
        </div>
    );
} 