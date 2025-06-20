import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CollaborationsSection() {
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations
  const translations = {
    en: {
      title: "Collaborations",
      subtitle: "About Inspire Alliance Fund Group Inc.",
      description:
        "At Inspire Alliance Fund Group Inc., we are driven by a powerful purpose: to empower dreams and ignite meaningful change. Founded on the belief that lasting progress begins with opportunity, we exist to support individuals who are ready to make a difference—not just in their own lives, but in the communities around them.\n\nWe go beyond traditional funding. We are a dynamic movement that bridges passionate visionaries with the support, trust, and resources they need to transform ideas into lasting impact. Whether it's launching a small business, starting a social initiative, or developing innovative solutions, we're here to back bold ambitions.\n\nBy investing in people, we help spark growth, nurture resilience, and create a ripple effect that uplifts entire economies. Our commitment is unwavering: to fund possibilities, champion potential, and walk alongside changemakers on a shared journey toward a more empowered, hopeful, and innovative world.",
    },
    ja: {
      title: "コラボレーション",
      subtitle:
        "インスパイア・アライアンス・ファンド・グループ株式会社について",
      description:
        "インスパイア・アライアンス・ファンド・グループ株式会社では、夢を力づけ、意義のある変化を起こすという強力な目的に突き動かされています。永続的な進歩は機会から始まるという信念に基づいて設立され、自分自身の人生だけでなく、周囲のコミュニティにも違いをもたらす準備ができている個人をサポートすることを存在意義としています。\n\n私たちは従来の資金調達を超えた存在です。情熱的なビジョナリーと、アイデアを永続的なインパクトに変えるために必要なサポート、信頼、リソースを結びつける動的なムーブメントです。小さなビジネスの立ち上げ、社会的イニシアチブの開始、革新的なソリューションの開発など、私たちは大胆な野心を支援します。\n\n人々に投資することで、成長を促し、回復力を育み、経済全体を押し上げる波及効果を生み出します。私たちのコミットメントは揺るぎません：可能性に資金を提供し、潜在能力を支援し、より力強く、希望に満ち、革新的な世界への共通の旅路で変革者と歩みを共にすることです。",
    },
  };

  const t = (key) => {
    const cleanKey = key.replace("about.", "");
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

  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] py-6 md:py-12">
      <motion.div
        className="pl-4 md:pl-16 pt-4 md:pt-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <span className="inline-block px-4 md:px-6 py-2 text-xl md:text-3xl font-bold text-white rounded-md shadow bg-gradient-to-r from-green-600 to-blue-600">
          {t("about.title")}
        </span>
      </motion.div>

      <motion.div
        className="flex justify-center items-center mt-4 md:mt-8 px-4 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bg-white rounded shadow-lg flex flex-col md:flex-row w-full md:w-[80vw] max-w-5xl overflow-hidden">
          <motion.div
            className="flex-1 p-4 md:p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">
              {t("about.subtitle")}
            </h3>
            <p className="text-gray-700 text-xs md:text-sm mb-4 md:mb-6 whitespace-pre-line">
              {t("about.description")}
            </p>
          </motion.div>

          <motion.div
            className="flex-1 min-w-full md:min-w-[300px] max-w-full md:max-w-[600px] h-[250px] md:h-auto"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="/tower.jpg"
              alt="Alliance Global Tower"
              className="object-cover h-full w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
