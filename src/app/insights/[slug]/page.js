"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { insightsData } from "../insightsData";

export default function InsightPage({ params }) {
    // Unwrap the params Promise
    const resolvedParams = use(params);
    const [insight, setInsight] = useState(null);
    const [relatedInsights, setRelatedInsights] = useState([]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const currentInsight = insightsData[resolvedParams.slug];
        if (currentInsight) {
            setInsight(currentInsight);

            // Get related insights (different category or random)
            const related = Object.values(insightsData)
                .filter(item => item.slug !== resolvedParams.slug)
                .slice(0, 2);
            setRelatedInsights(related);
        }
    }, [resolvedParams.slug]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (!insight) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading insight...</p>
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
                        <Link href="/" className="text-blue-600 hover:text-blue-700">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/#investment-insights" className="text-blue-600 hover:text-blue-700">
                            Investment Insights
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">{insight.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <motion.div
                className="relative bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                                    {insight.category}
                                </span>
                                <span className="text-sm text-gray-500">{insight.date}</span>
                                <span className="text-sm text-gray-500">{insight.readTime}</span>
                            </div>

                            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {insight.title}
                            </h1>

                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                {insight.summary}
                            </p>

                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    {insight.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{insight.author}</p>
                                    <p className="text-sm text-gray-500">Research Analyst</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                            <Image
                                src={insight.image}
                                alt={insight.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Article Content */}
                    <div className="lg:col-span-2">
                        <motion.article
                            className="bg-white rounded-xl shadow-lg p-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Introduction */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {insight.content.introduction}
                                </p>
                            </section>

                            {/* Key Points */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Investment Highlights</h2>
                                <div className="space-y-6">
                                    {insight.content.keyPoints.map((point, index) => (
                                        <motion.div
                                            key={index}
                                            className="border-l-4 border-blue-500 pl-6 py-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-semibold text-gray-900">
                                                    {point.title}
                                                </h3>
                                                <span className="text-lg font-bold text-blue-600 ml-4">
                                                    {point.data}
                                                </span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                {point.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Analysis */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Analysis</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* Opportunities */}
                                    <div className="bg-green-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            Opportunities
                                        </h3>
                                        <ul className="space-y-2">
                                            {insight.content.analysis.opportunities.map((opportunity, index) => (
                                                <li key={index} className="text-green-700 flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    {opportunity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Risks */}
                                    <div className="bg-red-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                            Risk Factors
                                        </h3>
                                        <ul className="space-y-2">
                                            {insight.content.analysis.risks.map((risk, index) => (
                                                <li key={index} className="text-red-700 flex items-start">
                                                    <span className="text-red-500 mr-2 mt-1">⚠</span>
                                                    {risk}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Recommendations */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Recommendations</h2>
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <ul className="space-y-3">
                                        {insight.content.recommendations.map((recommendation, index) => (
                                            <li key={index} className="text-blue-800 flex items-start">
                                                <span className="text-blue-600 mr-3 mt-1 text-lg">→</span>
                                                <span className="font-medium">{recommendation}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Conclusion */}
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Conclusion</h2>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <p className="text-gray-700 leading-relaxed text-lg italic">
                                        {insight.content.conclusion}
                                    </p>
                                </div>
                            </section>

                            {/* Disclaimer */}
                            <div className="border-t pt-6 mt-8">
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    <strong>Disclaimer:</strong> This analysis is for informational purposes only and should not be considered as investment advice.
                                    Past performance does not guarantee future results. Please consult with qualified financial advisors before making investment decisions.
                                    Data sources include BSP, PSE, and third-party research providers.
                                    <strong>SEC Registration No: 2025050202717-12</strong>
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">

                            {/* Quick Stats */}
                            <motion.div
                                className="bg-white rounded-xl shadow-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Information</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Category:</span>
                                        <span className="font-medium text-gray-900">{insight.category}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Published:</span>
                                        <span className="font-medium text-gray-900">{insight.date}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Read Time:</span>
                                        <span className="font-medium text-gray-900">{insight.readTime}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Author:</span>
                                        <span className="font-medium text-gray-900 text-sm">{insight.author}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Share */}
                            <motion.div
                                className="bg-white rounded-xl shadow-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share This Analysis</h3>
                                <div className="space-y-3">
                                    <motion.button
                                        onClick={copyToClipboard}
                                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${copied
                                            ? 'bg-green-500 text-white'
                                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {copied ? (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy Link
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedInsights.length > 0 && (
                    <motion.section
                        className="mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Insights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedInsights.map((relatedInsight, index) => (
                                <Link href={`/insights/${relatedInsight.slug}`} key={index}>
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                                        <div className="relative h-48">
                                            <Image
                                                src={relatedInsight.image}
                                                alt={relatedInsight.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="text-xs bg-white/90 text-gray-800 px-2 py-1 rounded-full font-medium">
                                                    {relatedInsight.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {relatedInsight.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-3">{relatedInsight.summary}</p>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{relatedInsight.date}</span>
                                                <span>{relatedInsight.readTime}</span>
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