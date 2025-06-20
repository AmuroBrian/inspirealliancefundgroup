"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { successStoriesData } from "../success-stories/successStoriesData";

const successStories = Object.values(successStoriesData)
  .map((story, index) => ({
    id: index + 1,
    title: story.title,
    description: story.summary,
    impact: story.impact,
    impactText: story.impactText,
    category: story.category,
    image: story.image,
    location: story.location,
    year: story.year,
    teamSize: story.teamSize,
    funding: story.funding,
    slug: story.slug,
  }))
  .slice(0, 6); // Show only first 6 for homepage

const categories = [
  "Technology",
  "Healthcare",
  "Environment",
  "Education",
  "Agriculture",
];

export default function SuccessStories() {
  // All useState hooks first
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations
  const translations = {
    en: {
      title: "Success Stories",
      subtitle:
        "Discover how our funding and support have helped transform innovative ideas into impactful realities.",
      search_placeholder: "Search success stories...",
      all: "All",
      categories: {
        Technology: "Technology",
        Healthcare: "Healthcare",
        Environment: "Environment",
        Education: "Education",
        Agriculture: "Agriculture",
      },
      read_case_study: "Read Case Study →",
      view_all: "View All Success Stories",
    },
    ja: {
      title: "成功事例",
      subtitle:
        "当社の資金調達とサポートにより、革新的なアイデアがどのように実用的な現実に変わったかをご覧ください。",
      search_placeholder: "成功事例を検索...",
      all: "すべて",
      categories: {
        Technology: "テクノロジー",
        Healthcare: "ヘルスケア",
        Environment: "環境",
        Education: "教育",
        Agriculture: "農業",
      },
      read_case_study: "ケーススタディを読む →",
      view_all: "すべての成功事例を見る",
    },
  };

  const t = (key) => {
    const keys = key.replace("success_stories.", "").split(".");
    let result = translations[currentLang];
    for (const k of keys) {
      result = result[k];
      if (!result) break;
    }
    return result || key;
  };

  // Listen for language changes
  useEffect(() => {
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

  // useEffect hooks
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle mounting state
  if (!mounted) {
    return (
      <section className="w-full min-h-screen bg-gradient-to-b from-[#f7f7f7] to-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
          </div>
        </div>
      </section>
    );
  }

  const filteredStories = successStories.filter((story) => {
    const matchesCategory =
      selectedCategory === "All" || story.category === selectedCategory;
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#f7f7f7] to-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t("success_stories.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("success_stories.subtitle")}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder={t("success_stories.search_placeholder")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === "All"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              {t("success_stories.all")}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
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
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <Link href={`/success-stories/${story.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                    {t(`success_stories.categories.${story.category}`)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>

                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        {story.impact}
                      </span>
                      <p className="text-sm text-gray-500">
                        {story.impactText}
                      </p>
                    </div>
                    <span className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                      {t("success_stories.read_case_study")}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/success-stories"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            {t("success_stories.view_all")}
          </Link>
        </div>
      </div>
    </section>
  );
}
