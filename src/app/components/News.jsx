"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiExternalLink } from "react-icons/fi";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bbcnews")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">World News</h1>
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
            <p className="text-sm">
              Stay informed with the latest headlines from BBC World News. Click
              any headline to read the full article.
            </p>
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
                              {new Date(item.pubDate).toLocaleTimeString(
                                "en-US",
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
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
                              Read full article
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
