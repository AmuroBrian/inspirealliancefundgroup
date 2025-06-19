"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { successStoriesData } from "./successStoriesData";

const categories = ["Technology", "Healthcare", "Environment", "Education", "Agriculture"];

export default function SuccessStoriesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const stories = Object.values(successStoriesData);

    const filteredStories = stories.filter(story => {
        const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
        const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.summary.toLowerCase().includes(searchQuery.toLowerCase());
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
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Success Stories</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Discover how our strategic investments and expert guidance have transformed innovative ideas into
                        thriving enterprises that create lasting value for stakeholders and communities.
                    </p>
                </motion.div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search success stories..."
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
                            All Stories
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
                                {category}
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
                                        {story.category}
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
                                        <span className="text-sm text-gray-500">{story.funding} investment</span>
                                        <span className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                                            Read Case Study →
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
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No Stories Found</h3>
                        <p className="text-gray-500">Try adjusting your search criteria or browse all categories.</p>
                    </div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                        Join the ranks of innovative companies that have transformed their vision into reality with our strategic investment and comprehensive support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold">
                            Contact Our Investment Team
                        </Link>
                        <Link href="/services" className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300 font-semibold">
                            Explore Our Services
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 