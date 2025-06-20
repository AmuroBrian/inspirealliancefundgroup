"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const InspireWallet = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const sectionRef = useRef(null);

  // Static translations for InspireWallet
  const translations = {
    en: {
      inspireWallet: {
        title: "Inspire Wallet",
        subtitle: "Your Gateway to Smart Financial Management",
        description:
          "Experience the future of digital finance with Inspire Wallet, our comprehensive fintech mobile application. Designed to revolutionize how you manage investments, track performance, and execute transactions with cutting-edge technology and intuitive design.",
        features: {
          tracking: {
            title: "Investment Tracking",
            description:
              "Monitor your portfolio performance in real-time with advanced analytics and detailed reporting tools.",
          },
          stocks: {
            title: "Stock Management",
            description:
              "Manage your stock portfolio with intelligent insights and automated trading recommendations.",
          },
          withdrawal: {
            title: "Withdrawal Management",
            description:
              "Secure and instant withdrawal processes with multi-layer authentication and fraud protection.",
          },
          history: {
            title: "Transaction History",
            description:
              "Complete transaction records with detailed analytics and exportable reports for tax purposes.",
          },
          trading: {
            title: "Trading Platform",
            description:
              "Advanced trading tools with real-time market data and professional-grade charting capabilities.",
          },
          security: {
            title: "Robust Security",
            description:
              "Bank-level security with biometric authentication, encryption, and fraud monitoring systems.",
          },
        },
        download: {
          title: "Download Inspire Wallet Today",
          description:
            "Join thousands of investors who trust Inspire Wallet for their financial management needs. Available on iOS and Android.",
        },
        rating: "5.0 Stars • 6 Reviews",
        info: {
          free: {
            title: "Free to Download",
            description: "No hidden fees or subscription costs",
          },
          security: {
            title: "Bank-Level Security",
            description:
              "Your data is protected with industry-leading encryption",
          },
          realtime: {
            title: "Real-Time Updates",
            description: "Live market data and instant notifications",
          },
        },
      },
    },
    ja: {
      inspireWallet: {
        title: "インスパイア・ウォレット",
        subtitle: "スマート金融管理へのゲートウェイ",
        description:
          "包括的なフィンテック・モバイル・アプリケーション「インスパイア・ウォレット」でデジタル金融の未来を体験してください。最先端技術と直感的なデザインで投資管理、パフォーマンス追跡、取引実行の方法を革命化するよう設計されています。",
        features: {
          tracking: {
            title: "投資追跡",
            description:
              "高度な分析と詳細なレポートツールでポートフォリオのパフォーマンスをリアルタイムで監視します。",
          },
          stocks: {
            title: "株式管理",
            description:
              "インテリジェントな洞察と自動取引推奨で株式ポートフォリオを管理します。",
          },
          withdrawal: {
            title: "出金管理",
            description: "多層認証と詐欺防止による安全で即座の出金プロセス。",
          },
          history: {
            title: "取引履歴",
            description:
              "詳細な分析と税務目的でエクスポート可能なレポートを含む完全な取引記録。",
          },
          trading: {
            title: "取引プラットフォーム",
            description:
              "リアルタイム市場データとプロフェッショナルグレードのチャート機能を備えた高度な取引ツール。",
          },
          security: {
            title: "堅牢なセキュリティ",
            description:
              "生体認証、暗号化、不正監視システムを備えた銀行レベルのセキュリティ。",
          },
        },
        download: {
          title: "今すぐインスパイア・ウォレットをダウンロード",
          description:
            "金融管理ニーズでインスパイア・ウォレットを信頼する何千人もの投資家に参加してください。iOSとAndroidで利用可能。",
        },
        rating: "5.0つ星 • 6件のレビュー",
        info: {
          free: {
            title: "無料ダウンロード",
            description: "隠れた料金や購読料金はありません",
          },
          security: {
            title: "銀行レベルのセキュリティ",
            description:
              "お客様のデータは業界最高レベルの暗号化で保護されています",
          },
          realtime: {
            title: "リアルタイム更新",
            description: "ライブ市場データと即座の通知",
          },
        },
      },
    },
  };

  const t = (key) => {
    const keys = key.split(".");
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            entry.target.style.width = "40%";
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

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: t("inspireWallet.features.tracking.title"),
      description: t("inspireWallet.features.tracking.description"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: t("inspireWallet.features.stocks.title"),
      description: t("inspireWallet.features.stocks.description"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: t("inspireWallet.features.withdrawal.title"),
      description: t("inspireWallet.features.withdrawal.description"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      title: t("inspireWallet.features.history.title"),
      description: t("inspireWallet.features.history.description"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: t("inspireWallet.features.trading.title"),
      description: t("inspireWallet.features.trading.description"),
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: t("inspireWallet.features.security.title"),
      description: t("inspireWallet.features.security.description"),
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative background element */}
      <div
        ref={sectionRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[80vh]"
        style={{
          background:
            "linear-gradient(90deg, rgba(56, 115, 175, 0.8) 0%, rgba(75, 136, 139, 0.8) 50%, rgba(128, 195, 42, 0.8) 100%)",
          width: "0%",
          transition: "width 1.5s ease-out",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-xl border-4 border-green-200">
              <Image
                src="/inspirewallet-logo.png"
                alt="Inspire Wallet Logo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            {t("inspireWallet.title")}
          </h2>
          <p
            className="text-xl font-semibold mb-4"
            style={{ color: "rgba(75, 136, 139, 1)" }}
          >
            {t("inspireWallet.subtitle")}
          </p>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{
              background:
                "linear-gradient(90deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
            }}
          ></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {t("inspireWallet.description")}
          </p>
        </div>

        {/* App Screenshots Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            <div className="relative w-full max-w-xs md:w-64 aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <Image
                src="/inspirewallet/login.png"
                alt="Inspire Wallet Login Screen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                priority={false}
              />
            </div>
            <div className="relative w-full max-w-xs md:w-64 aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <Image
                src="/inspirewallet/dashboard.png"
                alt="Inspire Wallet Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div
          className="rounded-3xl p-12 text-center text-white shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
          }}
        >
          <h3 className="text-3xl font-bold mb-4">
            {t("inspireWallet.download.title")}
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t("inspireWallet.download.description")}
          </p>

          {/* App Rating */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center bg-white/20 rounded-full px-6 py-3">
              <div className="flex space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">
                {t("inspireWallet.rating")}
              </span>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.inspire.inspirewallet&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Inspire Wallet on Google Play"
              className="rounded-2xl bg-white shadow-lg p-3 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </a>

            {/* App Store */}
            <a
              href="https://apps.apple.com/ph/app/inspire-wallet/id6642689775"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Inspire Wallet on the App Store"
              className="rounded-2xl bg-white shadow-lg p-3 transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* App Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">
                {t("inspireWallet.info.free.title")}
              </h4>
              <p className="text-white/80 text-sm">
                {t("inspireWallet.info.free.description")}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">
                {t("inspireWallet.info.security.title")}
              </h4>
              <p className="text-white/80 text-sm">
                {t("inspireWallet.info.security.description")}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">
                {t("inspireWallet.info.realtime.title")}
              </h4>
              <p className="text-white/80 text-sm">
                {t("inspireWallet.info.realtime.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspireWallet;
