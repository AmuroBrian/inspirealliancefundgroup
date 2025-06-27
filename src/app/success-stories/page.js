"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { successStoriesData } from "./successStoriesData";

const categories = ["Technology", "Healthcare", "Environment", "Education", "Agriculture"];

export default function SuccessStoriesPage() {
    // All useState hooks first
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [mounted, setMounted] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");

    // Static translations for success stories page
    const translations = {
        en: {
            page_title: "Success Stories",
            page_subtitle: "Discover how we've helped transform businesses and communities through strategic investments and innovative solutions across various sectors.",
            search_placeholder: "Search success stories...",
            all_stories: "All Stories",
            investment_suffix: "Investment",
            read_case_study: "Read Case Study",
            no_results_title: "No Success Stories Found",
            no_results_subtitle: "Try adjusting your search or filter criteria to find relevant success stories.",
            cta_title: "Ready to Create Your Success Story?",
            cta_subtitle: "Join our portfolio of successful companies and benefit from our strategic investment approach and comprehensive business support.",
            contact_team: "Contact Our Team",
            explore_services: "Explore Our Services",
            categories: {
                Technology: "Technology",
                Healthcare: "Healthcare",
                Environment: "Environment",
                Education: "Education",
                Agriculture: "Agriculture"
            }
        },
        ja: {
            page_title: "成功事例",
            page_subtitle: "様々なセクターにおける戦略的投資と革新的ソリューションを通じて、私たちがどのように企業や地域社会の変革を支援してきたかをご覧ください。",
            search_placeholder: "成功事例を検索...",
            all_stories: "すべての事例",
            investment_suffix: "投資",
            read_case_study: "ケーススタディを読む",
            no_results_title: "成功事例が見つかりませんでした",
            no_results_subtitle: "関連する成功事例を見つけるために、検索やフィルター条件を調整してみてください。",
            cta_title: "あなたの成功事例を作る準備はできていますか？",
            cta_subtitle: "私たちの成功企業ポートフォリオに参加し、戦略的投資アプローチと包括的なビジネスサポートをご活用ください。",
            contact_team: "チームにお問い合わせ",
            explore_services: "サービスを探索",
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

    // Handle mounting state
    if (!mounted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-[#f7f7f7] to-white pt-20">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">Success Stories</h1>
                    </div>
                </div>
            </div>
        );
    }

    const stories = Object.values(successStoriesData);

    const filteredStories = stories.filter(story => {
        const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
        const title = story.title || "";
        const summary = story.summary || "";
        const matchesSearch =
            title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f7f7f7] to-white pt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">{t("success_stories.page_title")}</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        {t("success_stories.page_subtitle")}
                    </p>
                </motion.div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder={t("success_stories.search_placeholder")}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        <button
                            className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-colors ${selectedCategory === "All"
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            onClick={() => setSelectedCategory("All")}
                        >
                            {t("success_stories.all_stories")}
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-colors ${selectedCategory === category
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {t(`success_stories.categories.${category}`)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Success Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredStories.map((story, index) => (
                        <motion.div
                            key={story.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            <Link href={`/success-stories/${story.slug}`}>
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                                        {t(`success_stories.categories.${story.category}`)}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {story.summary}
                                    </p>

                                    <div className="flex items-center justify-between border-t pt-4">
                                        <div>
                                            <span className="text-2xl font-bold text-green-600">
                                                {story.impact}
                                            </span>
                                            <p className="text-sm text-gray-500">
                                                {story.impactText}
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            <p>{story.location}</p>
                                            <p>{story.year}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{story.funding} {t("success_stories.investment_suffix")}</span>
                                        <span className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                                            {t("success_stories.read_case_study")}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredStories.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">{t("success_stories.no_results_title")}</h3>
                        <p className="text-gray-500">{t("success_stories.no_results_subtitle")}</p>
                    </div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">{t("success_stories.cta_title")}</h2>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                        {t("success_stories.cta_subtitle")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold">
                            {t("success_stories.contact_team")}
                        </Link>
                        <Link href="/services" className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300 font-semibold">
                            {t("success_stories.explore_services")}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 