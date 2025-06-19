"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { successStoriesData } from "../successStoriesData";

export default function SuccessStoryPage({ params }) {
    const resolvedParams = use(params);
    const [story, setStory] = useState(null);
    const [relatedStories, setRelatedStories] = useState([]);

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

    if (!story) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading success story...</p>
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
                        <Link href="/" className="text-green-600 hover:text-green-700">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/#success-stories" className="text-green-600 hover:text-green-700">Success Stories</Link>
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
                                <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">{story.category}</span>
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
                                    <p className="text-sm text-gray-500">Investment Analyst</p>
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">{story.content.introduction}</p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Success Metrics</h2>
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact Analysis</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-green-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Key Achievements
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
                                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>Challenges Overcome
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Outcomes</h2>
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Conclusion</h2>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <p className="text-gray-700 leading-relaxed text-lg italic">{story.content.conclusion}</p>
                                </div>
                            </section>

                            <div className="border-t pt-6 mt-8">
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    <strong>Disclaimer:</strong> This case study is for informational purposes only and represents historical performance.
                                    Past investment results do not guarantee future returns. All investments carry risk of loss.
                                    Please consult with qualified investment advisors before making investment decisions.
                                    <strong> SEC Registration No: 2025050202717-12</strong>
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            <motion.div className="bg-white rounded-xl shadow-lg p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Details</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between"><span className="text-gray-600">Category:</span><span className="font-medium text-gray-900">{story.category}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Location:</span><span className="font-medium text-gray-900">{story.location}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Investment:</span><span className="font-medium text-gray-900">{story.funding}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Team Size:</span><span className="font-medium text-gray-900">{story.teamSize}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Year:</span><span className="font-medium text-gray-900">{story.year}</span></div>
                                </div>
                            </motion.div>

                            <motion.div className="bg-white rounded-xl shadow-lg p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Metrics</h3>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">{story.impact}</div>
                                    <div className="text-sm text-gray-600">{story.impactText}</div>
                                </div>
                            </motion.div>

                            <motion.div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl shadow-lg p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                                <h3 className="text-lg font-semibold mb-3">Investment Opportunities</h3>
                                <p className="text-green-100 text-sm mb-4">Discover similar investment opportunities in our portfolio.</p>
                                <button className="w-full bg-white text-green-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">Contact Our Team</button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Related Stories */}
                {relatedStories.length > 0 && (
                    <motion.section className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedStories.map((relatedStory, index) => (
                                <Link href={`/success-stories/${relatedStory.slug}`} key={index}>
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                                        <div className="relative h-48">
                                            <Image src={relatedStory.image} alt={relatedStory.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                            <div className="absolute top-4 left-4">
                                                <span className="text-xs bg-white/90 text-gray-800 px-2 py-1 rounded-full font-medium">{relatedStory.category}</span>
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