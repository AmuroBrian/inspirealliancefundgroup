"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const BankingPartners = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const [currentLang, setCurrentLang] = useState("en");
  const headerRef = useRef(null);
  const bankRefs = useRef([]);
  const ctaRef = useRef(null);

  // Static translations for Banking Partners
  const translations = {
    en: {
      bankingPartners: {
        title: "Our Trusted Banking Partners",
        description:
          "Partner with the Philippines' leading financial institutions through our comprehensive banking network. Access competitive rates, innovative products, and world-class services.",
        keyFeatures: "Key Features",
        cta: {
          downloadTitle: "Download Inspire Wallet",
          subtitle: "Seamless Banking Integration",
          description:
            "Connect with all your preferred banks through one secure platform. Manage multiple accounts, track transactions, and access exclusive banking services.",
          whyChoose: {
            title: "Why Choose Our Banking Network?",
            description:
              "Get access to exclusive rates and premium services through our partnerships with",
            highlight: "the Philippines' most trusted banks.",
          },
          targetAudience:
            "Perfect for individuals and businesses seeking comprehensive banking solutions.",
          finalCta: "Start banking smarter today with Inspire Wallet!",
        },
        features: {
          multipleBanks: {
            title: "Multiple Banks",
            description: "Access 5+ major banks",
          },
          expertGuidance: {
            title: "Expert Guidance",
            description: "Professional support",
          },
        },
        trustIndicators: {
          secure: "Secure Platform",
          protected: "Data Protected",
          quick: "Quick Setup",
        },
        download: {
          title: "Start Your Banking Journey",
          description:
            "Download Inspire Wallet and connect to the Philippines' leading banks instantly.",
          googlePlay: "Download from Google Play",
          appStore: "Download from App Store",
        },
        steps: {
          step1: {
            title: "Download & Install",
            description:
              "Get Inspire Wallet from your app store and complete the quick setup process.",
          },
          step2: {
            title: "Link Your Banks",
            description:
              "Securely connect your existing bank accounts with our advanced encryption.",
          },
          step3: {
            title: "Start Banking",
            description:
              "Enjoy seamless banking with all your accounts in one convenient platform.",
          },
        },
        banks: {
          bdo: {
            fullName: "Banco de Oro (BDO)",
            tagline: "We find ways",
            description:
              "The Philippines' largest bank by assets, providing comprehensive financial services across the archipelago. BDO offers innovative banking solutions for personal, business, and corporate clients with unmatched branch network coverage.",
            features: [
              "Largest ATM Network",
              "International Banking Services",
              "Corporate Banking Solutions",
              "Digital Banking Innovation",
            ],
          },
          bpi: {
            fullName: "Bank of the Philippine Islands",
            tagline: "The way it should be",
            description:
              "One of the Philippines' oldest and most trusted banks, BPI combines rich heritage with modern banking innovation. Renowned for excellent customer service and comprehensive financial solutions for all market segments.",
            features: [
              "Investment Banking",
              "Premium Banking Services",
              "Corporate Solutions",
              "International Trade Finance",
            ],
          },
          ctbc: {
            fullName: "CTBC Bank Philippines",
            tagline: "Banking excellence redefined",
            description:
              "A leading foreign bank in the Philippines, CTBC brings Taiwanese banking expertise and international standards to the local market. Specializing in corporate banking, trade finance, and cross-border transactions.",
            features: [
              "Cross-Border Banking",
              "Trade Finance Solutions",
              "Foreign Exchange Services",
              "Corporate Treasury Management",
            ],
          },
          unionbank: {
            fullName: "Union Bank of the Philippines",
            tagline: "The innovator bank",
            description:
              "The Philippines' technology leader in banking, UnionBank pioneered digital transformation in the industry. Known for innovative fintech solutions, cryptocurrency services, and comprehensive digital banking platforms.",
            features: [
              "Digital Banking Pioneer",
              "Cryptocurrency Services",
              "API Banking Solutions",
              "Fintech Innovation",
            ],
          },
          security: {
            fullName: "Security Bank Corporation",
            tagline: "Your security, our priority",
            description:
              "A progressive universal bank committed to providing superior customer experience through innovative products and services. Security Bank focuses on personal and business banking with emphasis on technology and customer service.",
            features: [
              "Personal Banking Excellence",
              "Business Banking Solutions",
              "Auto Financing",
              "Investment Products",
            ],
          },
        },
      },
    },
    ja: {
      bankingPartners: {
        title: "信頼できる銀行パートナー",
        description:
          "包括的な銀行ネットワークを通じて、フィリピンの主要金融機関とパートナーシップを結んでください。競争力のある金利、革新的な商品、世界クラスのサービスにアクセスしてください。",
        keyFeatures: "主な特徴",
        cta: {
          downloadTitle: "インスパイア・ウォレットをダウンロード",
          subtitle: "シームレスな銀行統合",
          description:
            "1つの安全なプラットフォームを通じて、お好みのすべての銀行と接続してください。複数のアカウントを管理し、取引を追跡し、独占的な銀行サービスにアクセスできます。",
          whyChoose: {
            title: "当社の銀行ネットワークを選ぶ理由は？",
            description:
              "パートナーシップを通じて独占的な金利とプレミアムサービスにアクセスできます",
            highlight: "フィリピンで最も信頼される銀行と。",
          },
          targetAudience:
            "包括的な銀行ソリューションを求める個人と企業に最適です。",
          finalCta:
            "今すぐインスパイア・ウォレットでよりスマートな銀行業を始めましょう！",
        },
        features: {
          multipleBanks: {
            title: "複数の銀行",
            description: "5つ以上の主要銀行にアクセス",
          },
          expertGuidance: {
            title: "専門家指導",
            description: "プロフェッショナルサポート",
          },
        },
        trustIndicators: {
          secure: "安全なプラットフォーム",
          protected: "データ保護",
          quick: "クイックセットアップ",
        },
        download: {
          title: "銀行業の旅を始めましょう",
          description:
            "インスパイア・ウォレットをダウンロードして、フィリピンの主要銀行に即座に接続してください。",
          googlePlay: "Google Playからダウンロード",
          appStore: "App Storeからダウンロード",
        },
        steps: {
          step1: {
            title: "ダウンロード＆インストール",
            description:
              "アプリストアからインスパイア・ウォレットを入手し、クイックセットアッププロセスを完了してください。",
          },
          step2: {
            title: "銀行をリンク",
            description:
              "高度な暗号化により、既存の銀行口座を安全に接続してください。",
          },
          step3: {
            title: "バンキング開始",
            description:
              "1つの便利なプラットフォームですべてのアカウントでシームレスなバンキングをお楽しみください。",
          },
        },
        banks: {
          bdo: {
            fullName: "バンコ・デ・オロ（BDO）",
            tagline: "解決策を見つけます",
            description:
              "資産規模でフィリピン最大の銀行で、群島全体で包括的な金融サービスを提供しています。BDOは、比類のない支店ネットワーク・カバレッジで個人、ビジネス、法人顧客向けの革新的な銀行ソリューションを提供します。",
            features: [
              "最大のATMネットワーク",
              "国際銀行サービス",
              "法人銀行ソリューション",
              "デジタル銀行イノベーション",
            ],
          },
          bpi: {
            fullName: "フィリピン諸島銀行",
            tagline: "あるべき姿",
            description:
              "フィリピンで最も古く信頼されている銀行の一つで、BPIは豊かな遺産と現代の銀行イノベーションを組み合わせています。優れた顧客サービスとすべての市場セグメント向けの包括的な金融ソリューションで有名です。",
            features: [
              "投資銀行",
              "プレミアム銀行サービス",
              "法人ソリューション",
              "国際貿易金融",
            ],
          },
          ctbc: {
            fullName: "CTBC銀行フィリピン",
            tagline: "銀行業の卓越性を再定義",
            description:
              "フィリピンの主要外国銀行で、CTBCは台湾の銀行専門知識と国際基準を地元市場にもたらします。法人銀行、貿易金融、国境を越えた取引を専門としています。",
            features: [
              "国境を越えた銀行業",
              "貿易金融ソリューション",
              "外国為替サービス",
              "法人財務管理",
            ],
          },
          unionbank: {
            fullName: "フィリピン連合銀行",
            tagline: "イノベーター銀行",
            description:
              "フィリピンの銀行業界の技術リーダーで、ユニオンバンクは業界のデジタル変革を先駆けました。革新的なフィンテック・ソリューション、暗号通貨サービス、包括的なデジタル銀行プラットフォームで知られています。",
            features: [
              "デジタル銀行パイオニア",
              "暗号通貨サービス",
              "API銀行ソリューション",
              "フィンテック・イノベーション",
            ],
          },
          security: {
            fullName: "セキュリティ銀行コーポレーション",
            tagline: "お客様のセキュリティ、私たちの優先事項",
            description:
              "革新的な商品とサービスを通じて優れた顧客体験を提供することにコミットしている進歩的なユニバーサル銀行。セキュリティ銀行は技術と顧客サービスに重点を置いた個人・ビジネス銀行に焦点を当てています。",
            features: [
              "個人銀行業の卓越性",
              "ビジネス銀行ソリューション",
              "自動車金融",
              "投資商品",
            ],
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

  const bankingPartners = [
    {
      id: 1,
      name: "BDO",
      fullName: t("bankingPartners.banks.bdo.fullName"),
      logo: "/banklogo/bdo.jpg",
      tagline: t("bankingPartners.banks.bdo.tagline"),
      description: t("bankingPartners.banks.bdo.description"),
      features: [
        t("bankingPartners.banks.bdo.features.0"),
        t("bankingPartners.banks.bdo.features.1"),
        t("bankingPartners.banks.bdo.features.2"),
        t("bankingPartners.banks.bdo.features.3"),
      ],
      gradient: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      name: "BPI",
      fullName: t("bankingPartners.banks.bpi.fullName"),
      logo: "/banklogo/bpi.png",
      tagline: t("bankingPartners.banks.bpi.tagline"),
      description: t("bankingPartners.banks.bpi.description"),
      features: [
        t("bankingPartners.banks.bpi.features.0"),
        t("bankingPartners.banks.bpi.features.1"),
        t("bankingPartners.banks.bpi.features.2"),
        t("bankingPartners.banks.bpi.features.3"),
      ],
      gradient: "from-red-600 to-red-800",
    },
    {
      id: 3,
      name: "CTBC Bank",
      fullName: t("bankingPartners.banks.ctbc.fullName"),
      logo: "/banklogo/ctbclogo.png",
      tagline: t("bankingPartners.banks.ctbc.tagline"),
      description: t("bankingPartners.banks.ctbc.description"),
      features: [
        t("bankingPartners.banks.ctbc.features.0"),
        t("bankingPartners.banks.ctbc.features.1"),
        t("bankingPartners.banks.ctbc.features.2"),
        t("bankingPartners.banks.ctbc.features.3"),
      ],
      gradient: "from-purple-600 to-indigo-800",
    },
    {
      id: 4,
      name: "UnionBank",
      fullName: t("bankingPartners.banks.unionbank.fullName"),
      logo: "/banklogo/ub.png",
      tagline: t("bankingPartners.banks.unionbank.tagline"),
      description: t("bankingPartners.banks.unionbank.description"),
      features: [
        t("bankingPartners.banks.unionbank.features.0"),
        t("bankingPartners.banks.unionbank.features.1"),
        t("bankingPartners.banks.unionbank.features.2"),
        t("bankingPartners.banks.unionbank.features.3"),
      ],
      gradient: "from-green-600 to-emerald-800",
    },
    {
      id: 5,
      name: "Security Bank",
      fullName: t("bankingPartners.banks.security.fullName"),
      logo: "/banklogo/securitybank.jpg",
      tagline: t("bankingPartners.banks.security.tagline"),
      description: t("bankingPartners.banks.security.description"),
      features: [
        t("bankingPartners.banks.security.features.0"),
        t("bankingPartners.banks.security.features.1"),
        t("bankingPartners.banks.security.features.2"),
        t("bankingPartners.banks.security.features.3"),
      ],
      gradient: "from-orange-600 to-red-700",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.animateId;
            console.log("Element intersecting:", elementId); // Debug log
            if (elementId && !animatedElements.has(elementId)) {
              console.log("Starting animation for:", elementId); // Debug log
              setAnimatedElements((prev) => new Set([...prev, elementId]));

              // Add animation classes
              if (elementId === "header") {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
              } else if (elementId.startsWith("bank-")) {
                const bankIndex = parseInt(elementId.split("-")[1]);
                const isEven = bankIndex % 2 === 0;

                // Animate logo container
                const logoContainer =
                  entry.target.querySelector(".logo-container");
                const descContainer =
                  entry.target.querySelector(".desc-container");
                const bankImage = entry.target.querySelector(".bank-image");

                if (logoContainer) {
                  logoContainer.style.opacity = "1";
                  logoContainer.style.transform = `translateX(0)`;
                }

                // Animate decorative background
                const decorativeBg =
                  entry.target.querySelector(".decorative-bg");
                if (decorativeBg) {
                  setTimeout(() => {
                    decorativeBg.style.opacity = "0.2";
                    decorativeBg.style.transform = "scale(1)";
                  }, 100);
                }

                // Animate bank image with fade and slide
                if (bankImage) {
                  console.log("Animating bank image:", bankIndex); // Debug log
                  setTimeout(() => {
                    bankImage.style.opacity = "1";
                    bankImage.style.transform = "translateX(0) scale(1)";
                  }, 200);
                }

                if (descContainer) {
                  setTimeout(() => {
                    descContainer.style.opacity = "1";
                    descContainer.style.transform = "translateY(0)";
                  }, 400);
                }

                // Animate features with stagger
                const features = entry.target.querySelectorAll(".feature-item");
                features.forEach((feature, idx) => {
                  setTimeout(() => {
                    feature.style.opacity = "1";
                    feature.style.transform = "translateX(0)";
                  }, 600 + idx * 100);
                });
              } else if (elementId === "cta") {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0) scale(1)";
              }
            }
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe bank sections
    bankRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Observe CTA
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      bankRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, [animatedElements]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Immense Geometric Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(128, 195, 42, 0.05) 0%, rgba(75, 136, 139, 0.05) 50%, rgba(56, 115, 175, 0.05) 100%)",
        }}
      >
        {/* Large Geometric Shapes */}
        <div className="absolute -top-40 -left-40 w-80 h-80 opacity-10">
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(128, 195, 42, 0.3) 0%, rgba(75, 136, 139, 0.3) 100%)",
            }}
          ></div>
        </div>
        <div className="absolute top-1/4 -right-32 w-64 h-64 opacity-8 transform rotate-45">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(75, 136, 139, 0.2) 0%, rgba(56, 115, 175, 0.2) 100%)",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 opacity-6">
          <div
            className="w-full h-full transform rotate-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(56, 115, 175, 0.2) 0%, rgba(128, 195, 42, 0.2) 100%)",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 opacity-10 transform rotate-45">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(128, 195, 42, 0.3) 0%, rgba(75, 136, 139, 0.3) 100%)",
            }}
          ></div>
        </div>
        {/* Abstract Lines */}
        <div
          className="absolute top-1/3 left-0 w-full h-0.5 opacity-8 transform -rotate-12"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(128, 195, 42, 0.2) 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 left-0 w-full h-0.5 opacity-6 transform rotate-6"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(56, 115, 175, 0.2) 50%, transparent 100%)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          data-animate-id="header"
          className="text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
        >
          <div
            className="inline-flex items-center justify-center p-2 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(128, 195, 42, 0.1) 0%, rgba(75, 136, 139, 0.1) 50%, rgba(56, 115, 175, 0.1) 100%)",
            }}
          >
            <div
              className="p-3 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
              }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("bankingPartners.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("bankingPartners.description")}
          </p>
        </div>

        {/* Banks Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-20">
          {bankingPartners.map((bank, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={bank.id}
                ref={(el) => (bankRefs.current[index] = el)}
                data-animate-id={`bank-${index}`}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Bank Logo Section */}
                <div
                  className={`w-full lg:w-1/2 flex justify-center logo-container opacity-0 transform transition-all duration-800 ease-out ${
                    isEven ? "translate-x-[-100px]" : "translate-x-[100px]"
                  }`}
                >
                  <div className="relative">
                    {/* Decorative Background */}
                    <div
                      className="decorative-bg absolute -inset-4 rounded-3xl opacity-0 transform scale-90 transition-all duration-800 ease-out"
                      style={{
                        background: `linear-gradient(135deg, rgba(128, 195, 42, 0.3) 0%, rgba(75, 136, 139, 0.3) 50%, rgba(56, 115, 175, 0.3) 100%)`,
                      }}
                    ></div>

                    {/* Main Logo Container */}
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                      <div
                        className="flex items-center justify-center"
                        style={{ width: "280px", height: "140px" }}
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={bank.logo}
                            alt={`${bank.name} Logo`}
                            fill
                            className="object-contain bank-image opacity-0 transition-all duration-1000 ease-out hover:scale-105"
                            style={{
                              padding:
                                bank.name === "BPI"
                                  ? "16px"
                                  : bank.name === "CTBC Bank"
                                  ? "12px"
                                  : bank.name === "UnionBank"
                                  ? "20px"
                                  : bank.name === "Security Bank"
                                  ? "16px"
                                  : "12px",
                              transform: isEven
                                ? "translateX(-80px) scale(0.9)"
                                : "translateX(80px) scale(0.9)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Gradient Border Effect */}
                      <div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, rgba(128, 195, 42, 0.1) 0%, rgba(75, 136, 139, 0.1) 50%, rgba(56, 115, 175, 0.1) 100%)`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Bank Description Section */}
                <div className="w-full lg:w-1/2 space-y-6 desc-container opacity-0 transform translate-y-8 transition-all duration-800 ease-out">
                  <div>
                    <h3
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {bank.fullName}
                    </h3>
                    <p className="text-lg font-medium text-gray-500 italic mb-4">
                      "{bank.tagline}"
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {bank.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {t("bankingPartners.keyFeatures")}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {bank.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 feature-item opacity-0 transform translate-x-[-20px] transition-all duration-500 ease-out"
                        >
                          <div className="flex-shrink-0">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                              }}
                            ></div>
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section - Download Inspire Wallet */}
        <div
          ref={ctaRef}
          data-animate-id="cta"
          className="text-center mt-20 opacity-0 transform translate-y-12 scale-95 transition-all duration-1000 ease-out"
        >
          {/* Main CTA Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 p-8 md:p-12 text-white relative overflow-hidden">
                  {/* Background Decorative Elements */}
                  <div className="absolute top-0 right-0 opacity-10">
                    <svg
                      className="w-48 h-48 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 opacity-5">
                    <div className="w-32 h-32 border-4 border-dashed border-white rounded-full"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {t("bankingPartners.cta.downloadTitle")}
                      </h3>
                    </div>

                    {/* Main Description */}
                    <div className="mb-8">
                      <h4 className="text-2xl md:text-3xl font-bold mb-4">
                        {t("bankingPartners.cta.subtitle")}
                      </h4>
                      <p className="text-lg leading-relaxed mb-6">
                        {t("bankingPartners.cta.description")}
                      </p>

                      {/* Special Offer Highlight */}
                      <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-orange-300">
                            {t("bankingPartners.cta.whyChoose.title")}
                          </h4>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                          {t("bankingPartners.cta.whyChoose.description")}{" "}
                          <span className="font-bold text-orange-300">
                            {t("bankingPartners.cta.whyChoose.highlight")}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Call to Action Text */}
                    <div className="border-t border-white/20 pt-6">
                      <p className="text-white/90">
                        {t("bankingPartners.cta.targetAudience")}
                      </p>
                      <p className="text-lg font-semibold mt-4 text-orange-300">
                        {t("bankingPartners.cta.finalCta")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - App Screenshots & Download */}
                <div className="p-8 md:p-12 bg-gray-50">
                  {/* Banking Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <div className="text-center">
                        <div className="text-xl font-bold mb-2">
                          {t("bankingPartners.features.multipleBanks.title")}
                        </div>
                        <div className="text-green-100 text-sm">
                          {t(
                            "bankingPartners.features.multipleBanks.description"
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-4 text-white shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <div className="text-center">
                        <div className="text-xl font-bold mb-2">
                          {t("bankingPartners.features.expertGuidance.title")}
                        </div>
                        <div className="text-green-100 text-sm">
                          {t(
                            "bankingPartners.features.expertGuidance.description"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Screenshots */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                    <div className="relative w-full aspect-[9/19.5] sm:w-48 sm:h-[26rem] sm:aspect-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                      <Image
                        src="/inspirewallet/login.png"
                        alt="Inspire Wallet Banking Login"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 192px"
                        priority={false}
                      />
                    </div>
                    <div className="relative w-full aspect-[9/19.5] sm:w-48 sm:h-[26rem] sm:aspect-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                      <Image
                        src="/inspirewallet/dashboard.png"
                        alt="Inspire Wallet Banking Dashboard"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 192px"
                        priority={false}
                      />
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        {t("bankingPartners.trustIndicators.secure")}
                      </span>
                    </div>
                    <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                      <svg
                        className="w-4 h-4 text-blue-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        {t("bankingPartners.trustIndicators.protected")}
                      </span>
                    </div>
                    <div className="flex items-center bg-white rounded-full px-3 py-2 shadow-md">
                      <svg
                        className="w-4 h-4 text-purple-500 mr-2"
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
                      <span className="text-sm font-medium text-gray-700">
                        {t("bankingPartners.trustIndicators.quick")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 rounded-3xl shadow-2xl p-8 md:p-14 relative overflow-visible">
            {/* Logo/Icon */}
            <div className="flex flex-col items-center -mt-20 mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-xl border-4 border-green-200 mb-2">
                <Image
                  src="/inspirewallet-logo.png"
                  alt="Inspire Wallet Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-green-900 font-bold text-lg tracking-wide">
                Inspire Wallet
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-4 text-green-900">
              {t("bankingPartners.download.title")}
            </h3>
            <p className="text-center text-lg text-gray-700 mb-6">
              {t("bankingPartners.download.description")}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
              {/* Google Play */}
              <div className="flex flex-col items-center">
                <span className="mb-2 text-sm font-semibold text-green-700">
                  {t("bankingPartners.download.googlePlay")}
                </span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.inspire.inspirewallet&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Inspire Wallet on Google Play"
                  className="rounded-2xl bg-gradient-to-br from-green-100 to-green-200 shadow-lg p-2 transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-green-200"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
              {/* App Store */}
              <div className="flex flex-col items-center">
                <span className="mb-2 text-sm font-semibold text-blue-700">
                  {t("bankingPartners.download.appStore")}
                </span>
                <a
                  href="https://apps.apple.com/ph/app/inspire-wallet/id6642689775"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Inspire Wallet on the App Store"
                  className="rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg p-2 transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-blue-200"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-7">
              {/* Step 1 */}
              <div className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-green-200">
                  1
                </div>
                <div>
                  <span className="block font-semibold text-green-800">
                    {t("bankingPartners.steps.step1.title")}
                  </span>
                  <span className="block text-gray-700">
                    {t("bankingPartners.steps.step1.description")}
                  </span>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-emerald-200">
                  2
                </div>
                <div>
                  <span className="block font-semibold text-emerald-800">
                    {t("bankingPartners.steps.step2.title")}
                  </span>
                  <span className="block text-gray-700">
                    {t("bankingPartners.steps.step2.description")}
                  </span>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-start gap-4 bg-white/80 rounded-xl p-4 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-teal-200">
                  3
                </div>
                <div>
                  <span className="block font-semibold text-teal-800">
                    {t("bankingPartners.steps.step3.title")}
                  </span>
                  <span className="block text-gray-700">
                    {t("bankingPartners.steps.step3.description")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingPartners;
