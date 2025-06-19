"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { insightsData } from "./insightsData";

export default function InsightsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Convert insights data to array
    const insights = Object.values(insightsData);

    // Get unique categories
    const categories = ["All", ...new Set(insights.map(insight => insight.category))];

    // Filter insights by category
    const filteredInsights = selectedCategory === "All"
        ? insights
        : insights.filter(insight => insight.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <motion.section
                className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                        Investment Market Insights
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Professional investment analysis and market research from our Philippine investment team.
                        Stay informed with expert insights on market trends, economic outlook, and investment opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                            <span className="text-blue-200 text-sm">Latest Research</span>
                            <div className="text-white font-semibold">{insights.length} Professional Articles</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                            <span className="text-blue-200 text-sm">SEC Registered</span>
                            <div className="text-white font-semibold">2025050202717-12</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-blue-600 hover:text-blue-700">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">Investment Insights</span>
                    </nav>
                </div>
            </div>

            {/* Filters */}
            <motion.section
                className="py-8 bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Market Research</h2>
                            <p className="text-gray-600">
                                {filteredInsights.length} {filteredInsights.length === 1 ? 'article' : 'articles'}
                                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                            </p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Insights Grid */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredInsights.map((insight, index) => (
                            <motion.div
                                key={insight.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <Link href={`/insights/${insight.slug}`}>
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-200">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={insight.image}
                                                alt={insight.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                            <div className="absolute top-4 left-4">
                                                <span className="text-xs bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full font-medium">
                                                    {insight.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                                                <span>{insight.date}</span>
                                                <span>•</span>
                                                <span>{insight.readTime}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                                                {insight.title}
                                            </h3>

                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {insight.summary}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                                                        {insight.author.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{insight.author}</p>
                                                    </div>
                                                </div>

                                                <div className="text-blue-600 group-hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all">
                                                    Read More →
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredInsights.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 text-6xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No insights found</h3>
                            <p className="text-gray-600">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Signup */}
            <motion.section
                className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Stay Updated with Market Insights
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Subscribe to receive our latest investment research, market analysis, and
                        economic outlook reports directly in your inbox.
                    </p>

                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                                Subscribe to Insights
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            Free subscription. Unsubscribe anytime.
                            <br />Investment insights for accredited investors.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white p-8">
                        <h2 className="text-3xl font-bold mb-4">Ready to Discuss Investment Opportunities?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Schedule a consultation with our investment team to explore partnership opportunities
                            and discuss how our research insights can benefit your investment strategy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                                Schedule Consultation
                            </button>
                            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                                Download Research Reports
                            </button>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/20">
                            <p className="text-xs text-blue-200">
                                <strong>SEC Registration No: 2025050202717-12</strong> | Investment Capital: ₱1.6B | 2024 Annual Revenue: ₱3.6M
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 