"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiExternalLink } from "react-icons/fi";

export default function News() {
  // All useState hooks first
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations
  const translations = {
    en: {
      title: "World News",
      info_text:
        "Stay informed with the latest headlines from BBC World News. Click any headline to read the full article.",
      read_full_article: "Read full article",
      loading: "Loading news...",
      no_news: "No news available at the moment.",
      source: "BBC World News",
    },
    ja: {
      title: "世界ニュース",
      info_text:
        "BBC World Newsから最新のヘッドラインをお伝えします。記事全文を読むには見出しをクリックしてください。",
      read_full_article: "記事全文を読む",
      loading: "ニュースを読み込み中...",
      no_news: "現在ニュースがありません。",
      source: "BBC World News",
    },
  };

  const t = (key) => {
    const cleanKey = key.replace("news.", "");
    return translations[currentLang][cleanKey] || cleanKey;
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

  useEffect(() => {
    if (mounted) {
      fetch("/api/bbcnews")
        .then((res) => res.json())
        .then((data) => {
          setNews(data.items || []);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, [mounted]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const locale = currentLang === "ja" ? "ja-JP" : "en-US";
    return date.toLocaleDateString(locale, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const locale = currentLang === "ja" ? "ja-JP" : "en-US";
    return date.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Handle mounting state
  if (!mounted) {
    return (
      <motion.section
        className="bg-white min-h-screen py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              World News
            </h1>
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="bg-white min-h-screen py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {t("news.title")}
          </h1>
          <motion.div
            className="h-1 w-24"
            style={{
              background:
                "linear-gradient(90deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
            }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="mb-8 bg-gray-50 rounded-lg p-4"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(128, 195, 42, 0.2), 0 2px 4px -1px rgba(75, 136, 139, 0.2), 0 0 0 1px rgba(56, 115, 175, 0.1)",
            border: "1px solid rgba(75, 136, 139, 0.2)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center text-gray-600">
            <span className="mr-3 text-xl">ℹ️</span>
            <p className="text-sm">{t("news.info_text")}</p>
          </div>
        </motion.div>

        {/* News Container */}
        <motion.div
          className="bg-white rounded-lg overflow-hidden"
          style={{
            boxShadow:
              "0 10px 15px -3px rgba(128, 195, 42, 0.15), 0 4px 6px -2px rgba(75, 136, 139, 0.15), 0 0 0 1px rgba(56, 115, 175, 0.1)",
            border: "1px solid rgba(75, 136, 139, 0.2)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <motion.div
                className="animate-spin rounded-full h-12 w-12 border-b-2"
                style={{ borderColor: "rgba(128, 195, 42, 1)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          ) : news.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="text-gray-400 text-6xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {t("news.no_news")}
                </h3>
                <p className="text-gray-500">{t("news.source")}</p>
              </div>
            </div>
          ) : (
            <motion.div
              className="divide-y divide-gray-100"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {news.slice(0, 10).map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 transition-all duration-200"
                    style={{
                      boxShadow:
                        "0 1px 2px 0 rgba(75, 136, 139, 0.1), 0 0 0 1px rgba(128, 195, 42, 0.05)",
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 8px 12px -1px rgba(128, 195, 42, 0.2), 0 4px 6px -1px rgba(75, 136, 139, 0.2), 0 0 0 1px rgba(56, 115, 175, 0.1)",
                      backgroundColor: "rgba(75, 136, 139, 0.03)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    <div className="flex items-start">
                      <div className="flex-1 min-w-0">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <motion.h2
                            className="text-xl font-semibold text-gray-900 group-hover:text-[#4B888B] transition-colors duration-200 mb-2"
                            whileHover={{ x: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            {item.title}
                          </motion.h2>
                          <motion.div
                            className="flex items-center text-sm text-gray-500 space-x-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="flex items-center">
                              <FiClock className="mr-1" />
                              {formatDate(item.pubDate)} •{" "}
                              {formatTime(item.pubDate)}
                            </span>
                            <motion.span
                              className="flex items-center text-[#4B888B]"
                              whileHover={{ scale: 1.05 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <FiExternalLink className="mr-1" />
                              {t("news.read_full_article")}
                            </motion.span>
                          </motion.div>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
