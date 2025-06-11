"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gmanews")
      .then(res => res.json())
      .then(data => {
        setNews(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#f7f7f7] min-h-screen py-10">
      <div className="ml-8 mb-10">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-5xl w-[170px] py-3 px-4 rounded-sm">
          News
        </div>
      </div>
      <div className="mx-auto w-1/2">
        {/* Info Section */}
        <div className="mb-3 px-4 py-2 bg-blue-100 text-blue-700 rounded shadow flex items-center">
          <span className="mr-2 text-2xl">ℹ️</span>
          <span>
            Latest headlines from GMA News. Click a headline to read the full article.
          </span>
        </div>
        <div className="relative bg-gradient-to-r from-black/95 via-black/85 to-black/70 px-4 py-2 backdrop-blur-md min-h-[300px] rounded-sm shadow-md overflow-y-auto max-h-[300px] flex items-center p-5">
          {loading ? (
            <span className="text-white">Loading...</span>
          ) : (
            <ul className="list-none p-0 w-full">
              <AnimatePresence>
                {news.slice(0, 10).map((item, i) => {
                  const date = new Date(item.pubDate);
                  const formatted = `${date.getFullYear()}.${date.getMonth() + 1}`;
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-center mb-6"
                    >
                      <span className="w-20 text-2xl text-[#ad8b3b] font-medium">
                        {formatted}
                      </span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-9 text-white text-2xl no-underline flex-1 whitespace-nowrap overflow-hidden text-ellipsis hover:underline"
                      >
                        {item.title}
                      </a>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}