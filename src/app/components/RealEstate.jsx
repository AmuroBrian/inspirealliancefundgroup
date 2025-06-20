"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const RealEstate = () => {
  const [currentLang, setCurrentLang] = useState("en");

  // Complete translations for all Real Estate content
  const translations = {
    en: {
      realEstate: {
        title: "Premium Real Estate Solutions",
        description:
          "Discover exceptional real estate investment opportunities through our curated portfolio of premium properties and strategic partnerships with leading developers.",
        content: {
          partnerTitle: "Trusted Real Estate Partnership",
          paragraph1:
            "Our strategic partnerships with premier real estate developers provide exclusive access to high-value properties across the Philippines. From luxury residential developments to commercial real estate investments, we offer comprehensive solutions for discerning investors.",
          paragraph2:
            "With detailed market analysis, investment projections, and ongoing property management services, we ensure your real estate investments deliver exceptional returns while minimizing risks.",
        },
        features: {
          expertGuidance: {
            title: "Expert Guidance",
            description:
              "Professional real estate advisory and investment guidance",
          },
          diversePortfolio: {
            title: "Diverse Portfolio",
            description:
              "Access to residential, commercial, and mixed-use developments",
          },
          affordableOptions: {
            title: "Flexible Options",
            description: "Investment opportunities for various budget ranges",
          },
          primeLocations: {
            title: "Prime Locations",
            description:
              "Properties in strategic locations across Metro Manila",
          },
        },
        stats: {
          developersTitle: "14+ Premier Developers",
          developersDescription: "Exclusive partnerships with top developers",
          availableUnits: "Available Units",
          primeLocations: "Prime Locations",
        },
        developersTitle: "Our Affiliated Real Estate Developers",
        developers: {
          ayalaland: {
            description:
              "Philippines' premier property developer known for sustainable communities and world-class developments.",
            specialties: [
              "Sustainable Communities",
              "Mixed-Use Developments",
              "Commercial Centers",
            ],
          },
          century: {
            description:
              "Luxury property developer specializing in high-end residential and commercial projects.",
            specialties: [
              "Luxury Residences",
              "Premier Locations",
              "Innovative Design",
            ],
          },
          federalland: {
            description:
              "Established developer focusing on affordable housing and community development.",
            specialties: [
              "Affordable Housing",
              "Community Development",
              "Residential Projects",
            ],
          },
          filinvest: {
            description:
              "Diversified developer with expertise in residential, commercial, and township developments.",
            specialties: [
              "Township Development",
              "Commercial Centers",
              "Residential Communities",
            ],
          },
          goldentopper: {
            description:
              "Emerging developer focused on innovative residential solutions and modern living spaces.",
            specialties: [
              "Modern Design",
              "Residential Solutions",
              "Urban Development",
            ],
          },
          iprosperity: {
            description:
              "Technology-driven real estate platform connecting investors with premium property opportunities.",
            specialties: [
              "Investment Platform",
              "Property Technology",
              "Market Analytics",
            ],
          },
          megaworld: {
            description:
              "Leading township developer creating integrated lifestyle communities and commercial hubs.",
            specialties: [
              "Township Communities",
              "Lifestyle Centers",
              "Commercial Hubs",
            ],
          },
          ortigasland: {
            description:
              "Premier developer of office buildings, residential towers, and commercial developments in Ortigas.",
            specialties: [
              "Office Buildings",
              "Residential Towers",
              "Ortigas District",
            ],
          },
          phirst: {
            description:
              "Innovative developer specializing in affordable housing solutions and community-centered developments.",
            specialties: [
              "Affordable Housing",
              "Community Centers",
              "Social Development",
            ],
          },
          robinsonland: {
            description:
              "Established developer known for residential communities, commercial centers, and office buildings.",
            specialties: [
              "Residential Communities",
              "Commercial Centers",
              "Office Buildings",
            ],
          },
          rockwell: {
            description:
              "Luxury developer renowned for premium residential towers and upscale commercial developments.",
            specialties: [
              "Luxury Towers",
              "Premium Locations",
              "Upscale Commercial",
            ],
          },
          shangri: {
            description:
              "Hospitality-focused developer creating luxury residential and commercial properties.",
            specialties: [
              "Luxury Properties",
              "Hospitality-Inspired",
              "Premium Services",
            ],
          },
          smdc: {
            description:
              "Leading developer of affordable luxury condominiums and residential communities.",
            specialties: [
              "Affordable Luxury",
              "Condominiums",
              "Residential Communities",
            ],
          },
          vistaland: {
            description:
              "Major developer specializing in horizontal and vertical residential developments.",
            specialties: [
              "Horizontal Development",
              "Vertical Communities",
              "Diverse Portfolio",
            ],
          },
        },
        cta: {
          title: "Explore Premium Properties",
          description:
            "Visit our dedicated real estate platform to discover exclusive property listings, virtual tours, and investment opportunities from our partner developers.",
          button: "Visit Real Estate Platform",
          opensNewWindow: "Opens in new window",
        },
        infoCards: {
          detailedListings: {
            title: "Detailed Listings",
            description: "Comprehensive property information and pricing",
          },
          virtualTours: {
            title: "Virtual Tours",
            description: "Immersive 360° property viewing experience",
          },
          pricingInfo: {
            title: "Investment Calculator",
            description: "ROI analysis and financing options",
          },
        },
      },
    },
    ja: {
      realEstate: {
        title: "プレミアム不動産ソリューション",
        description:
          "プレミアム物件の厳選されたポートフォリオと主要デベロッパーとの戦略的パートナーシップを通じて、例外的な不動産投資機会を発見してください。",
        content: {
          partnerTitle: "信頼できる不動産パートナーシップ",
          paragraph1:
            "プレミア不動産デベロッパーとの戦略的パートナーシップにより、フィリピン全土の高価値物件への独占的アクセスを提供します。高級住宅開発から商業不動産投資まで、目の肥えた投資家向けの包括的なソリューションを提供します。",
          paragraph2:
            "詳細な市場分析、投資予測、継続的な物件管理サービスにより、お客様の不動産投資がリスクを最小限に抑えながら例外的なリターンを提供することを確保します。",
        },
        features: {
          expertGuidance: {
            title: "専門的ガイダンス",
            description:
              "プロフェッショナルな不動産アドバイザリーと投資ガイダンス",
          },
          diversePortfolio: {
            title: "多様なポートフォリオ",
            description: "住宅、商業、複合用途開発へのアクセス",
          },
          affordableOptions: {
            title: "柔軟なオプション",
            description: "様々な予算範囲での投資機会",
          },
          primeLocations: {
            title: "一等地",
            description: "メトロマニラ全域の戦略的立地の物件",
          },
        },
        stats: {
          developersTitle: "14以上のプレミアデベロッパー",
          developersDescription: "トップデベロッパーとの独占パートナーシップ",
          availableUnits: "利用可能ユニット",
          primeLocations: "一等地",
        },
        developersTitle: "提携不動産デベロッパー",
        developers: {
          ayalaland: {
            description:
              "持続可能なコミュニティと世界クラスの開発で知られるフィリピンのプレミア不動産デベロッパー。",
            specialties: [
              "持続可能なコミュニティ",
              "複合用途開発",
              "商業センター",
            ],
          },
          century: {
            description:
              "高級住宅・商業プロジェクトを専門とする豪華不動産デベロッパー。",
            specialties: ["豪華住宅", "プレミア立地", "革新的デザイン"],
          },
          federalland: {
            description:
              "手頃な住宅とコミュニティ開発に焦点を当てた確立されたデベロッパー。",
            specialties: ["手頃な住宅", "コミュニティ開発", "住宅プロジェクト"],
          },
          filinvest: {
            description:
              "住宅、商業、タウンシップ開発の専門知識を持つ多様化されたデベロッパー。",
            specialties: [
              "タウンシップ開発",
              "商業センター",
              "住宅コミュニティ",
            ],
          },
          goldentopper: {
            description:
              "革新的な住宅ソリューションと現代的な居住空間に焦点を当てた新興デベロッパー。",
            specialties: ["モダンデザイン", "住宅ソリューション", "都市開発"],
          },
          iprosperity: {
            description:
              "投資家をプレミアム不動産機会と結びつけるテクノロジー主導の不動産プラットフォーム。",
            specialties: [
              "投資プラットフォーム",
              "不動産テクノロジー",
              "市場分析",
            ],
          },
          megaworld: {
            description:
              "統合されたライフスタイルコミュニティと商業ハブを創造する主要なタウンシップデベロッパー。",
            specialties: [
              "タウンシップコミュニティ",
              "ライフスタイルセンター",
              "商業ハブ",
            ],
          },
          ortigasland: {
            description:
              "オルティガスのオフィスビル、住宅タワー、商業開発のプレミアデベロッパー。",
            specialties: ["オフィスビル", "住宅タワー", "オルティガス地区"],
          },
          phirst: {
            description:
              "手頃な住宅ソリューションとコミュニティ中心の開発を専門とする革新的なデベロッパー。",
            specialties: ["手頃な住宅", "コミュニティセンター", "社会開発"],
          },
          robinsonland: {
            description:
              "住宅コミュニティ、商業センター、オフィスビルで知られる確立されたデベロッパー。",
            specialties: ["住宅コミュニティ", "商業センター", "オフィスビル"],
          },
          rockwell: {
            description:
              "プレミアム住宅タワーと高級商業開発で有名な豪華デベロッパー。",
            specialties: ["豪華タワー", "プレミアム立地", "高級商業"],
          },
          shangri: {
            description:
              "豪華住宅・商業物件を創造するホスピタリティ重視のデベロッパー。",
            specialties: [
              "豪華物件",
              "ホスピタリティ・インスパイア",
              "プレミアムサービス",
            ],
          },
          smdc: {
            description:
              "手頃な豪華コンドミニアムと住宅コミュニティの主要デベロッパー。",
            specialties: ["手頃な豪華", "コンドミニアム", "住宅コミュニティ"],
          },
          vistaland: {
            description: "水平・垂直住宅開発を専門とする主要デベロッパー。",
            specialties: [
              "水平開発",
              "垂直コミュニティ",
              "多様なポートフォリオ",
            ],
          },
        },
        cta: {
          title: "プレミアム物件を探索",
          description:
            "専用不動産プラットフォームを訪問して、パートナーデベロッパーからの独占的な物件リスト、バーチャルツアー、投資機会を発見してください。",
          button: "不動産プラットフォームを訪問",
          opensNewWindow: "新しいウィンドウで開きます",
        },
        infoCards: {
          detailedListings: {
            title: "詳細リスト",
            description: "包括的な物件情報と価格設定",
          },
          virtualTours: {
            title: "バーチャルツアー",
            description: "没入型360°物件閲覧体験",
          },
          pricingInfo: {
            title: "投資計算機",
            description: "ROI分析と融資オプション",
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

  const realEstateDevelopers = [
    {
      name: "Ayala Land",
      logo: "/realestatelogos/ayalaland.png",
      description: t("realEstate.developers.ayalaland.description"),
      specialties: [
        t("realEstate.developers.ayalaland.specialties.0"),
        t("realEstate.developers.ayalaland.specialties.1"),
        t("realEstate.developers.ayalaland.specialties.2"),
      ],
    },
    {
      name: "Century Properties",
      logo: "/realestatelogos/century.png",
      description: t("realEstate.developers.century.description"),
      specialties: [
        t("realEstate.developers.century.specialties.0"),
        t("realEstate.developers.century.specialties.1"),
        t("realEstate.developers.century.specialties.2"),
      ],
    },
    {
      name: "Federal Land",
      logo: "/realestatelogos/federalland.png",
      description: t("realEstate.developers.federalland.description"),
      specialties: [
        t("realEstate.developers.federalland.specialties.0"),
        t("realEstate.developers.federalland.specialties.1"),
        t("realEstate.developers.federalland.specialties.2"),
      ],
    },
    {
      name: "Filinvest",
      logo: "/realestatelogos/filinvest.png",
      description: t("realEstate.developers.filinvest.description"),
      specialties: [
        t("realEstate.developers.filinvest.specialties.0"),
        t("realEstate.developers.filinvest.specialties.1"),
        t("realEstate.developers.filinvest.specialties.2"),
      ],
    },
    {
      name: "Golden Topper",
      logo: "/realestatelogos/goldentopper.png",
      description: t("realEstate.developers.goldentopper.description"),
      specialties: [
        t("realEstate.developers.goldentopper.specialties.0"),
        t("realEstate.developers.goldentopper.specialties.1"),
        t("realEstate.developers.goldentopper.specialties.2"),
      ],
    },
    {
      name: "iProsperity",
      logo: "/realestatelogos/iprosperity.png",
      description: t("realEstate.developers.iprosperity.description"),
      specialties: [
        t("realEstate.developers.iprosperity.specialties.0"),
        t("realEstate.developers.iprosperity.specialties.1"),
        t("realEstate.developers.iprosperity.specialties.2"),
      ],
    },
    {
      name: "Megaworld",
      logo: "/realestatelogos/megaworld.png",
      description: t("realEstate.developers.megaworld.description"),
      specialties: [
        t("realEstate.developers.megaworld.specialties.0"),
        t("realEstate.developers.megaworld.specialties.1"),
        t("realEstate.developers.megaworld.specialties.2"),
      ],
    },
    {
      name: "Ortigas Land",
      logo: "/realestatelogos/ortigasland.png",
      description: t("realEstate.developers.ortigasland.description"),
      specialties: [
        t("realEstate.developers.ortigasland.specialties.0"),
        t("realEstate.developers.ortigasland.specialties.1"),
        t("realEstate.developers.ortigasland.specialties.2"),
      ],
    },
    {
      name: "Phirst Park Homes",
      logo: "/realestatelogos/phirst.png",
      description: t("realEstate.developers.phirst.description"),
      specialties: [
        t("realEstate.developers.phirst.specialties.0"),
        t("realEstate.developers.phirst.specialties.1"),
        t("realEstate.developers.phirst.specialties.2"),
      ],
    },
    {
      name: "Robinson Land",
      logo: "/realestatelogos/robinsonlandcorp.png",
      description: t("realEstate.developers.robinsonland.description"),
      specialties: [
        t("realEstate.developers.robinsonland.specialties.0"),
        t("realEstate.developers.robinsonland.specialties.1"),
        t("realEstate.developers.robinsonland.specialties.2"),
      ],
    },
    {
      name: "Rockwell",
      logo: "/realestatelogos/rockwell.png",
      description: t("realEstate.developers.rockwell.description"),
      specialties: [
        t("realEstate.developers.rockwell.specialties.0"),
        t("realEstate.developers.rockwell.specialties.1"),
        t("realEstate.developers.rockwell.specialties.2"),
      ],
    },
    {
      name: "Shangri-La Properties",
      logo: "/realestatelogos/shang.png",
      description: t("realEstate.developers.shangri.description"),
      specialties: [
        t("realEstate.developers.shangri.specialties.0"),
        t("realEstate.developers.shangri.specialties.1"),
        t("realEstate.developers.shangri.specialties.2"),
      ],
    },
    {
      name: "SMDC",
      logo: "/realestatelogos/smdc.png",
      description: t("realEstate.developers.smdc.description"),
      specialties: [
        t("realEstate.developers.smdc.specialties.0"),
        t("realEstate.developers.smdc.specialties.1"),
        t("realEstate.developers.smdc.specialties.2"),
      ],
    },
    {
      name: "Vista Land",
      logo: "/realestatelogos/vistaland.png",
      description: t("realEstate.developers.vistaland.description"),
      specialties: [
        t("realEstate.developers.vistaland.specialties.0"),
        t("realEstate.developers.vistaland.specialties.1"),
        t("realEstate.developers.vistaland.specialties.2"),
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-72 h-72 opacity-8">
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(128, 195, 42, 0.2) 0%, rgba(75, 136, 139, 0.2) 100%)",
            }}
          ></div>
        </div>
        <div className="absolute bottom-32 -right-24 w-56 h-56 opacity-6 transform rotate-45">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(56, 115, 175, 0.2) 0%, rgba(128, 195, 42, 0.2) 100%)",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        </div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 opacity-5 transform rotate-12">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(75, 136, 139, 0.3) 0%, rgba(56, 115, 175, 0.3) 100%)",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center p-3 rounded-full mb-6"
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
            {t("realEstate.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t("realEstate.description")}
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {t("realEstate.content.partnerTitle")}
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    {t("realEstate.content.paragraph1")}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t("realEstate.content.paragraph2")}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className="w-3 h-3 rounded-full mt-2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("realEstate.features.expertGuidance.title")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t("realEstate.features.expertGuidance.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div
                      className="w-3 h-3 rounded-full mt-2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("realEstate.features.diversePortfolio.title")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t("realEstate.features.diversePortfolio.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div
                      className="w-3 h-3 rounded-full mt-2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("realEstate.features.affordableOptions.title")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t("realEstate.features.affordableOptions.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div
                      className="w-3 h-3 rounded-full mt-2"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {t("realEstate.features.primeLocations.title")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t("realEstate.features.primeLocations.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-2xl opacity-20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(128, 195, 42, 0.3) 0%, rgba(75, 136, 139, 0.3) 50%, rgba(56, 115, 175, 0.3) 100%)",
                  }}
                ></div>
                <div className="relative bg-white rounded-xl shadow-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🏢</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {t("realEstate.stats.developersTitle")}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {t("realEstate.stats.developersDescription")}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">500+</div>
                        <div className="text-gray-600">
                          {t("realEstate.stats.availableUnits")}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">50+</div>
                        <div className="text-gray-600">
                          {t("realEstate.stats.primeLocations")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliated Developers Section */}
        <div className="mb-16">
          <h3
            className="text-3xl font-bold text-center mb-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t("realEstate.developersTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {realEstateDevelopers.map((developer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-20 w-full mb-4 flex items-center justify-center">
                  <Image
                    src={developer.logo}
                    alt={`${developer.name} logo`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {developer.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  {developer.description}
                </p>
                <div className="space-y-1">
                  {developer.specialties.map((specialty, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-xs text-gray-500"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mr-2"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                        }}
                      ></div>
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {t("realEstate.cta.title")}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                {t("realEstate.cta.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://inspire-real-estate.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                }}
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("realEstate.cta.button")}
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
              </a>
              <div className="text-sm text-gray-500 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t("realEstate.cta.opensNewWindow")}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  {t("realEstate.infoCards.detailedListings.title")}
                </div>
                <div className="text-gray-600">
                  {t("realEstate.infoCards.detailedListings.description")}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  {t("realEstate.infoCards.virtualTours.title")}
                </div>
                <div className="text-gray-600">
                  {t("realEstate.infoCards.virtualTours.description")}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  {t("realEstate.infoCards.pricingInfo.title")}
                </div>
                <div className="text-gray-600">
                  {t("realEstate.infoCards.pricingInfo.description")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
