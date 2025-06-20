import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesAndSolution = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [services, setServices] = useState([]);
  const sectionRef = useRef(null);

  // Static translations
  const translations = {
    en: {
      title: "Our Services & Solutions",
      subtitle:
        "Discover our comprehensive suite of services designed to help you succeed in the Japanese market",
      banking_title: "International Banking Solutions",
      banking_description:
        "Expert consultancy services helping foreigners open bank accounts in the Philippines. We provide comprehensive guidance through the Philippine banking system, payment solutions, and financial growth strategies tailored for international clients.",
      business_title: "Strategic Business Advisory",
      business_description:
        "Comprehensive business consulting for foreigners establishing businesses in the Philippines. We handle SEC registration, business banking, corporate setup, and complete regulatory compliance to help you successfully launch your Philippine business.",
      travel_title: "Comprehensive Travel Security",
      travel_description:
        "Travel with confidence through our comprehensive protection services. We offer extensive coverage and support for international travelers, ensuring peace of mind throughout your journey.",
      realestate_title: "Premium Real Estate Solutions",
      realestate_description:
        "Discover exceptional real estate opportunities in Japan. Our dedicated team provides end-to-end property services, from investment consultation to property management, tailored to your specific needs.",
      japanese_title: "Japanese Product Innovation",
      japanese_description:
        "Bridge the gap between Japanese innovation and global markets. We specialize in marketing and promoting authentic Japanese products, helping businesses expand their reach while maintaining cultural authenticity.",
      wallet_title: "Inspire Wallet - FinTech Mobile Application",
      wallet_description:
        "Your all-in-one financial companion for investment tracking, stock management, and portfolio monitoring. Features real-time analytics, forex converter, transaction history, and bank-level security. Perfect for both experienced investors and beginners looking to manage their financial portfolio efficiently.",
      learn_more: "Learn More",
    },
    ja: {
      title: "サービス・ソリューション",
      subtitle:
        "日本市場での成功を支援する包括的なサービススイートをご紹介します",
      banking_title: "国際銀行ソリューション",
      banking_description:
        "フィリピンでの銀行口座開設を支援する専門コンサルタントサービス。フィリピンの銀行システム、決済ソリューション、国際的なクライアントに特化した金融成長戦略について包括的なガイダンスを提供します。",
      business_title: "戦略的ビジネスアドバイザリー",
      business_description:
        "フィリピンでビジネスを設立する外国人向けの包括的なビジネスコンサルティング。SEC登録、事業銀行、企業設立、完全な規制遵守を扱い、フィリピンでのビジネス立ち上げを成功に導きます。",
      travel_title: "包括的な旅行セキュリティ",
      travel_description:
        "包括的な保護サービスを通じて、安心して旅行をお楽しみください。国際旅行者向けの広範囲なカバレッジとサポートを提供し、旅行中の安心をお約束します。",
      realestate_title: "プレミアム不動産ソリューション",
      realestate_description:
        "日本での卓越した不動産投資機会をご発見ください。専門チームが投資コンサルタントから物件管理まで、お客様のニーズに合わせたエンドツーエンドの不動産サービスを提供します。",
      japanese_title: "日本製品イノベーション",
      japanese_description:
        "日本のイノベーションとグローバル市場の架け橋として。本格的な日本製品のマーケティングと販売促進を専門とし、文化の真正性を保ちながらビジネスの拡大を支援します。",
      wallet_title:
        "インスパイア・ウォレット - フィンテックモバイルアプリケーション",
      wallet_description:
        "投資追跡、株式管理、ポートフォリオ監視のためのオールインワン金融コンパニオン。リアルタイム分析、外国為替コンバーター、取引履歴、銀行レベルのセキュリティを備えています。経験豊富な投資家から、効率的に金融ポートフォリオを管理したい初心者まで、すべての方に最適です。",
      learn_more: "詳細を見る",
    },
  };

  const t = (key) => {
    const cleanKey = key
      .replace(/^(services|common)\./, "")
      .replace(/\./g, "_");
    return translations[currentLang][cleanKey] || cleanKey;
  };

  // Update services when language changes
  useEffect(() => {
    const newServices = [
      {
        id: 1,
        title: t("services.banking.title"),
        description: t("services.banking.description"),
        image: "/bankingsolution.jpg",
        slug: "international-banking-solutions",
      },
      {
        id: 2,
        title: t("services.business.title"),
        description: t("services.business.description"),
        image: "/business.jpg",
        slug: "strategic-business-advisory",
      },
      {
        id: 3,
        title: t("services.travel.title"),
        description: t("services.travel.description"),
        image: "/travelprotection.png",
        slug: "comprehensive-travel-security",
      },
      {
        id: 4,
        title: t("services.realestate.title"),
        description: t("services.realestate.description"),
        image: "/realestate.jpg",
        slug: "premium-real-estate-solutions",
      },
      {
        id: 5,
        title: t("services.japanese.title"),
        description: t("services.japanese.description"),
        image: "/marketing.jpeg",
        slug: "japanese-product-innovation",
      },
      {
        id: 6,
        title: t("services.wallet.title"),
        description: t("services.wallet.description"),
        image: "/inspirewallet/login.png",
        slug: "inspire-wallet-fintech-mobile-application",
      },
    ];
    setServices(newServices);
  }, [currentLang]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            entry.target.style.width = "30%";
            setIsAnimating(true);
          } else if (!entry.isIntersecting) {
            entry.target.style.width = "0%";
            setIsAnimating(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Decorative background element */}
      <div
        ref={sectionRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[80vh]"
        style={{
          background:
            "linear-gradient(90deg, rgba(128, 195, 42, 0.8) 0%, rgba(75, 136, 139, 0.8) 50%, rgba(56, 115, 175, 0.8) 100%)",
          width: "0%",
          transition: "width 1.5s ease-out",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  {t("common.learn_more")}
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndSolution;
