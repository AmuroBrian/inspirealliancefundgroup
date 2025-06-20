"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import BankingPartners from "./BankingPartners";
import SECPhilippines from "./SECPhilippines";
import RealEstate from "./RealEstate";
import TravelSecurity from "./TravelSecurity";
import JapaneseProducts from "./JapaneseProducts";
import InspireWallet from "./InspireWallet";

export default function ServicePageContent({ slug }) {
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations for service pages
  const translations = {
    en: {
      servicePages: {
        wallet: {
          title: "Inspire Wallet - Fintech Mobile Application",
          description:
            "Experience the future of digital finance with Inspire Wallet, our comprehensive fintech mobile application. Designed to revolutionize how you manage investments, track performance, and execute transactions, Inspire Wallet provides a seamless, secure, and intelligent platform for modern investors.\n\nOur state-of-the-art mobile application combines cutting-edge technology with intuitive design, offering real-time portfolio management, advanced analytics, secure transactions, and personalized investment insights. Whether you're a seasoned investor or just starting your financial journey, Inspire Wallet adapts to your needs with customizable dashboards, AI-powered recommendations, and enterprise-grade security.\n\nKey features include multi-asset portfolio tracking, real-time market data, social trading capabilities, automated investment strategies, comprehensive reporting tools, and seamless integration with major financial institutions. Download Inspire Wallet today and transform your investment experience.",
        },
        banking: {
          title: "International Banking Solutions",
          description:
            "Navigate the complex world of international banking with confidence through our comprehensive banking solutions. We partner with leading financial institutions across the Philippines to provide seamless access to diverse banking services, foreign exchange solutions, and cross-border payment systems.\n\nOur international banking expertise spans multiple currencies, regulatory frameworks, and financial products. We facilitate business banking relationships, personal banking services, trade finance solutions, and investment banking products tailored to your specific needs. Our partnerships with major banks including BDO, BPI, CTBC Bank Philippines, UnionBank, and Security Bank Corporation ensure you have access to the most competitive rates and comprehensive services.\n\nWhether you're expanding your business internationally, managing multi-currency portfolios, or seeking specialized banking products, our international banking solutions provide the expertise, connections, and support you need to succeed in the global financial marketplace.",
        },
        business: {
          title: "Strategic Business Advisory",
          description:
            "Accelerate your business growth and navigate complex strategic decisions with our comprehensive business advisory services. Our team of seasoned professionals provides expert guidance on business strategy, financial planning, regulatory compliance, and operational optimization.\n\nWe specialize in helping businesses achieve sustainable growth through strategic planning, market analysis, financial restructuring, and regulatory guidance. Our advisory services cover business development, merger and acquisition support, corporate governance, risk management, and compliance with Philippine business regulations including SEC registration and ongoing regulatory requirements.\n\nOur strategic business advisory services are designed to help you make informed decisions, minimize risks, and capitalize on opportunities in the dynamic Philippine business environment. From startup guidance to enterprise-level strategic planning, we provide the insights and expertise needed to drive your business forward.",
        },
        travel: {
          title: "Comprehensive Travel Security",
          description:
            "Travel with confidence knowing you're protected by our comprehensive travel security solutions. Our innovative Inspire Protection service provides 24/7 security coverage across Metro Manila and key Philippine destinations, ensuring your safety and peace of mind during business and leisure travel.\n\nOur travel security services include real-time emergency response, personal safety monitoring, secure transportation arrangements, and comprehensive travel insurance coverage. We provide immediate assistance in case of emergencies, medical situations, security threats, or unexpected travel disruptions.\n\nWith coverage across 17 major cities and 50+ trained security personnel, our travel protection service offers rapid response times, multilingual support, and seamless coordination with local authorities. Whether you're traveling for business or leisure, our travel security solutions provide the protection and support you need to focus on what matters most.",
        },
        realestate: {
          title: "Premium Real Estate Solutions",
          description:
            "Discover exceptional real estate investment opportunities through our curated portfolio of premium properties and strategic partnerships with leading developers. We provide comprehensive real estate solutions including investment advisory, property management, and exclusive access to high-value developments across the Philippines.\n\nOur real estate expertise spans residential, commercial, and mixed-use developments, with strategic partnerships with premier developers including Ayala Land, Century Properties, Federal Land, Filinvest, Megaworld, Robinson Land Corporation, and SMDC. We provide detailed market analysis, investment projections, and ongoing property management services.\n\nWhether you're seeking luxury residential properties, commercial real estate investments, or diversified real estate portfolios, our premium real estate solutions provide access to exclusive opportunities, expert guidance, and comprehensive support throughout your real estate investment journey.",
        },
        japanese: {
          title: "Japanese Product Innovation",
          description:
            "Bridge the gap between Japanese innovation and Philippine markets through our specialized Japanese product solutions. We facilitate the introduction and distribution of cutting-edge Japanese products across various sectors including technology, healthcare, beauty, and business solutions.\n\nOur Japanese product innovation services include market analysis, regulatory compliance, distribution strategy, and ongoing support for Japanese companies seeking to establish presence in the Philippine market. We provide comprehensive market entry strategies, local partnership facilitation, and cultural adaptation services.\n\nFeaturing innovative products from leading Japanese companies in energy technology, beauty and wellness, security technology, and business solutions, our Japanese product innovation platform connects Philippine consumers and businesses with world-class Japanese innovations. Experience the future of technology and innovation through our carefully curated selection of Japanese products and solutions.",
        },
        notFound: {
          title: "Service Not Found",
          description:
            "The service you're looking for doesn't exist or may have been moved.",
        },
        cta: {
          title: "Ready to Get Started?",
          description:
            "Contact our team to learn more about how we can help you achieve your goals with our comprehensive solutions.",
        },
        backHome: "Back to Home",
      },
      common: {
        contact_us: "Contact Us",
      },
    },
    ja: {
      servicePages: {
        wallet: {
          title:
            "インスパイア・ウォレット - フィンテック・モバイル・アプリケーション",
          description:
            "包括的なフィンテック・モバイル・アプリケーション「インスパイア・ウォレット」でデジタル金融の未来を体験してください。投資管理、パフォーマンス追跡、取引実行の方法を革命化するよう設計されたインスパイア・ウォレットは、現代の投資家に向けたシームレスで安全、かつインテリジェントなプラットフォームを提供します。\n\n最先端のモバイル・アプリケーションは、最新技術と直感的なデザインを組み合わせ、リアルタイム・ポートフォリオ管理、高度な分析、安全な取引、パーソナライズされた投資洞察を提供します。経験豊富な投資家でも投資を始めたばかりでも、インスパイア・ウォレットはカスタマイズ可能なダッシュボード、AI搭載の推奨機能、エンタープライズ・グレードのセキュリティであなたのニーズに適応します。\n\n主要機能には、マルチアセット・ポートフォリオ追跡、リアルタイム市場データ、ソーシャル・トレーディング機能、自動投資戦略、包括的なレポート・ツール、主要金融機関とのシームレス統合が含まれます。今すぐインスパイア・ウォレットをダウンロードして、投資体験を変革してください。",
        },
        banking: {
          title: "国際銀行ソリューション",
          description:
            "包括的な銀行ソリューションを通じて、複雑な国際銀行業務の世界を自信を持ってナビゲートしてください。フィリピンの主要金融機関とパートナーシップを結び、多様な銀行サービス、外国為替ソリューション、国境を越えた決済システムへのシームレスなアクセスを提供します。\n\n当社の国際銀行業務の専門知識は、複数通貨、規制フレームワーク、金融商品にまたがります。ビジネス銀行関係、個人銀行サービス、貿易金融ソリューション、お客様の特定のニーズに合わせた投資銀行商品を促進します。BDO、BPI、CTBC銀行フィリピン、ユニオンバンク、セキュリティ銀行コーポレーションを含む主要銀行とのパートナーシップにより、最も競争力のある金利と包括的なサービスへのアクセスを確保します。\n\n国際的にビジネスを拡大している場合でも、マルチ通貨ポートフォリオを管理している場合でも、専門的な銀行商品を求めている場合でも、当社の国際銀行ソリューションは、グローバル金融市場で成功するために必要な専門知識、コネクション、サポートを提供します。",
        },
        business: {
          title: "戦略的ビジネス・アドバイザリー",
          description:
            "包括的なビジネス・アドバイザリー・サービスを通じて、ビジネス成長を加速し、複雑な戦略的決定をナビゲートしてください。経験豊富な専門家チームが、ビジネス戦略、財務計画、規制遵守、運営最適化について専門的なガイダンスを提供します。\n\n戦略的計画、市場分析、財務再構築、規制ガイダンスを通じて、企業の持続可能な成長を支援することを専門としています。当社のアドバイザリー・サービスは、ビジネス開発、M&Aサポート、企業ガバナンス、リスク管理、SEC登録と継続的な規制要件を含むフィリピンのビジネス規制への遵守をカバーします。\n\n当社の戦略的ビジネス・アドバイザリー・サービスは、情報に基づいた決定を行い、リスクを最小化し、ダイナミックなフィリピンのビジネス環境における機会を活用するためのサポートを提供するよう設計されています。スタートアップのガイダンスからエンタープライズ・レベルの戦略的計画まで、ビジネスを前進させるために必要な洞察と専門知識を提供します。",
        },
        travel: {
          title: "包括的な旅行セキュリティ",
          description:
            "包括的な旅行セキュリティ・ソリューションによる保護を受けて、安心して旅行してください。革新的なインスパイア・プロテクション・サービスは、メトロマニラと主要なフィリピンの目的地全体で24時間7日のセキュリティ・カバレッジを提供し、ビジネスおよびレジャー旅行中の安全と安心を確保します。\n\n当社の旅行セキュリティ・サービスには、リアルタイム緊急対応、個人安全監視、安全な交通手配、包括的な旅行保険カバレッジが含まれます。緊急事態、医療状況、セキュリティ脅威、または予期しない旅行障害の場合に即座に支援を提供します。\n\n17の主要都市と50人以上の訓練されたセキュリティ・スタッフによるカバレッジにより、当社の旅行保護サービスは迅速な対応時間、多言語サポート、地方自治体とのシームレスな連携を提供します。ビジネスまたはレジャーのための旅行であっても、当社の旅行セキュリティ・ソリューションは、最も重要なことに集中するために必要な保護とサポートを提供します。",
        },
        realestate: {
          title: "プレミアム不動産ソリューション",
          description:
            "主要デベロッパーとの戦略的パートナーシップとプレミアム物件の厳選されたポートフォリオを通じて、例外的な不動産投資機会を発見してください。投資アドバイザリー、物件管理、フィリピン全土の高価値開発への独占的アクセスを含む包括的な不動産ソリューションを提供します。\n\n当社の不動産専門知識は、住宅、商業、複合用途開発にまたがり、Ayala Land、Century Properties、Federal Land、Filinvest、Megaworld、Robinson Land Corporation、SMDCを含むプレミア・デベロッパーとの戦略的パートナーシップを有しています。詳細な市場分析、投資予測、継続的な物件管理サービスを提供します。\n\n高級住宅物件、商業不動産投資、または多様化された不動産ポートフォリオを求めている場合でも、当社のプレミアム不動産ソリューションは、独占的な機会へのアクセス、専門的なガイダンス、不動産投資の旅を通じた包括的なサポートを提供します。",
        },
        japanese: {
          title: "日本製品イノベーション",
          description:
            "専門的な日本製品ソリューションを通じて、日本のイノベーションとフィリピン市場の間のギャップを橋渡しします。技術、ヘルスケア、美容、ビジネス・ソリューションを含む様々なセクターにわたる最先端の日本製品の導入と流通を促進します。\n\n当社の日本製品イノベーション・サービスには、市場分析、規制遵守、流通戦略、フィリピン市場でのプレゼンス確立を求める日本企業への継続的なサポートが含まれます。包括的な市場参入戦略、地域パートナーシップ促進、文化適応サービスを提供します。\n\nエネルギー技術、美容・ウェルネス、セキュリティ技術、ビジネス・ソリューションの主要日本企業からの革新的な製品を特徴とする当社の日本製品イノベーション・プラットフォームは、フィリピンの消費者と企業を世界クラスの日本のイノベーションと結びつけます。厳選された日本製品とソリューションを通じて、技術とイノベーションの未来を体験してください。",
        },
        notFound: {
          title: "サービスが見つかりません",
          description:
            "お探しのサービスは存在しないか、移動された可能性があります。",
        },
        cta: {
          title: "始める準備はできていますか？",
          description:
            "包括的なソリューションでお客様の目標達成をどのようにサポートできるかについて、詳しくはチームにお問い合わせください。",
        },
        backHome: "ホームに戻る",
      },
      common: {
        contact_us: "お問い合わせ",
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

  const getServiceData = (slug) => {
    const serviceKeys = {
      "inspire-wallet-fintech-mobile-application": "wallet",
      "international-banking-solutions": "banking",
      "strategic-business-advisory": "business",
      "comprehensive-travel-security": "travel",
      "premium-real-estate-solutions": "realestate",
      "japanese-product-innovation": "japanese",
    };

    const serviceKey = serviceKeys[slug];
    if (!serviceKey) return null;

    return {
      title: t(`servicePages.${serviceKey}.title`),
      description: t(`servicePages.${serviceKey}.description`),
    };
  };

  const service = getServiceData(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {t("servicePages.notFound.title")}
          </h1>
          <p className="text-gray-600 mb-8">
            {t("servicePages.notFound.description")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
            }}
          >
            {t("servicePages.backHome")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Geometric Background */}
      <div className="relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(135deg, rgba(128, 195, 42, 0.9) 0%, rgba(75, 136, 139, 0.9) 50%, rgba(56, 115, 175, 0.9) 100%)",
          }}
        >
          {/* Geometric Shapes */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Large Circle */}
            <div
              className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-20"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            ></div>

            {/* Hexagon */}
            <div className="absolute top-20 left-10 w-24 h-24 opacity-15 transform rotate-45">
              <div
                className="w-full h-full"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>

            {/* Triangle */}
            <div
              className="absolute bottom-20 right-20 w-32 h-32 opacity-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            ></div>

            {/* Diamond */}
            <div
              className="absolute top-1/3 left-1/4 w-16 h-16 opacity-20 transform rotate-45"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            ></div>

            {/* Lines */}
            <div className="absolute inset-0">
              <div
                className="absolute top-1/4 left-0 w-full h-0.5 opacity-10 transform -rotate-12"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-0 w-full h-0.5 opacity-10 transform rotate-6"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <div className="w-32 h-1 bg-white/30 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              <div className="text-lg leading-8 whitespace-pre-line">
                {service.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialized Components based on service type */}
      {slug === "inspire-wallet-fintech-mobile-application" && (
        <InspireWallet />
      )}
      {slug === "international-banking-solutions" && <BankingPartners />}
      {slug === "strategic-business-advisory" && <SECPhilippines />}
      {slug === "premium-real-estate-solutions" && <RealEstate />}
      {slug === "comprehensive-travel-security" && <TravelSecurity />}
      {slug === "japanese-product-innovation" && <JapaneseProducts />}

      {/* Call to Action Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mt-16 mb-16 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("servicePages.cta.title")}
              </h3>
              <p className="text-gray-600 mb-8">
                {t("servicePages.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                  }}
                >
                  {t("common.contact_us")}
                  <svg
                    className="ml-2 w-5 h-5"
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
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
                >
                  {t("servicePages.backHome")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
