"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const JapaneseProducts = () => {
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Static comprehensive translations for all Japanese Products content
  const translations = {
    en: {
      japaneseProducts: {
        header: {
          title: "Japanese Product Innovation",
          description:
            "Experience cutting-edge Japanese technology and innovation with our curated selection of premium products. From advanced energy solutions to revolutionary beauty treatments, discover the future of Japanese excellence.",
        },
        introduction: {
          title: "Bringing Japan to the Philippines",
          paragraph1:
            "Our exclusive partnership with leading Japanese manufacturers provides Philippine consumers access to the latest innovations in technology, beauty, and business solutions. Each product is carefully selected for its quality, innovation, and potential to enhance daily life.",
          paragraph2:
            "We bridge cultural and technological gaps, making premium Japanese products accessible to the Philippine market while maintaining their authentic quality and effectiveness.",
        },
        features: {
          authenticQuality: {
            title: "Authentic Quality",
            description:
              "100% genuine products directly from Japanese manufacturers",
          },
          innovationFocus: {
            title: "Innovation Focus",
            description: "Cutting-edge technology and breakthrough innovations",
          },
          localAccessibility: {
            title: "Local Accessibility",
            description:
              "Made available in the Philippine market with local support",
          },
          culturalBridge: {
            title: "Cultural Bridge",
            description:
              "Connecting Japanese excellence with Filipino consumers",
          },
        },
        stats: {
          premiumProducts: "Premium Japanese Products",
          curatedDescription: "Carefully selected for the Philippine market",
          productCategories: "Product Categories",
          authenticJapanese: "Authentic Japanese",
        },
        sections: {
          productCategories: "Product Categories",
          featuredProducts: "Featured Japanese Products",
        },
        categories: {
          energyTechnology: "Energy Technology",
          beautyWellness: "Beauty & Wellness",
          securityTechnology: "Security Technology",
          businessSolutions: "Business Solutions",
        },
        categoryDescriptions: {
          energyTechnology: "Advanced energy-saving and optimization solutions",
          beautyWellness:
            "Premium skincare and wellness products using Japanese innovation",
          securityTechnology:
            "Cutting-edge security and data protection systems",
          businessSolutions:
            "Enterprise software and business management tools",
        },
        categoryCounts: {
          energyTechnology: "1 Product",
          beautyWellness: "6 Products",
          securityTechnology: "1 Product",
          businessSolutions: "1 Product",
        },
        products: {
          alphaHT: {
            description:
              "Revolutionary energy-saving technology for air conditioning systems, reducing energy consumption by up to 30% while maintaining optimal performance.",
            features: {
              energyReduction: "30% Energy Consumption Reduction",
              airConditionerEfficiency: "Enhanced Air Conditioner Efficiency",
              compressorOptimization: "Advanced Compressor Optimization",
            },
          },
          clinience: {
            description:
              "Advanced vitamin C and ceramide skincare treatment designed to brighten skin and improve overall complexion with Japanese precision.",
            features: {
              vitaminC: "High-Concentration Vitamin C",
              ceramide: "Japanese Ceramide Complex",
              cytokineNMN: "Cytokine & NMN Enhancement",
            },
          },
          cysay: {
            description:
              "Experience cutting-edge skincare with Dermashot Serum, featuring hollow microneedle technology for painless and effective beauty treatments.",
            features: {
              microneedle: "Professional Microneedle Technology",
              antiWrinkle: "Advanced Anti-Wrinkle Treatment",
              fullBody: "Full Body Application Compatible",
            },
          },
          sqrc: {
            description:
              "DENSO's secure QR code technology providing enterprise-grade data protection with public-private key encryption for business applications.",
            features: {
              dataProtection: "Enterprise Data Protection",
              publicPrivateKey: "Public-Private Key Encryption",
              enterpriseQR: "Secure QR Code Technology",
            },
          },
          desknetNEO: {
            description:
              "Comprehensive business management platform offering integrated solutions for project management, time tracking, and file management systems.",
            features: {
              management: "Integrated Business Management",
              timeKeeping: "Advanced Time Tracking",
              fileManagement: "Secure File Management System",
            },
          },
          fomJapan: {
            description:
              "Premium Japanese skincare formulation designed for skin brightening and radiance enhancement using high-quality Japanese ingredients.",
            features: {
              skinBrightening: "Advanced Skin Brightening Formula",
              radianceEnhancement: "Natural Radiance Enhancement",
              premiumIngredients: "Premium Japanese Ingredients",
            },
          },
          pureExom: {
            description:
              "Cutting-edge exosome powder treatment packaged in specialized vials for cellular regeneration and advanced skincare therapy.",
            features: {
              exosomePowder: "Pure Exosome Powder Formula",
              vialPackaging: "Specialized Vial Packaging",
              cellularRegeneration: "Advanced Cellular Regeneration",
            },
          },
          stemsAI: {
            description:
              "AI-enhanced stem cell skincare technology for anti-aging treatment and comprehensive skin improvement with Japanese innovation.",
            features: {
              stemCell: "AI-Enhanced Stem Cell Technology",
              antiAging: "Advanced Anti-Aging Treatment",
              skinImprovement: "Comprehensive Skin Improvement",
            },
          },
          youBeYou: {
            description:
              "Revolutionary day and night skincare system designed to provide glowing skin and deep moisturization with Japanese formulation expertise.",
            features: {
              nightDay: "Day & Night Treatment System",
              glowingSkin: "Natural Glowing Skin Formula",
              deepMoisturization: "Deep Moisturization Technology",
            },
          },
        },
        cta: {
          title: "Explore Japanese Innovation",
          description:
            "Visit our Japanese products platform to discover our complete collection of premium Japanese innovations and place orders for the Philippine market.",
          button: "Visit Japanese Products Platform",
          buttonText: "Visit Japanese Products Platform",
          opensNewWindow: "Opens in new window",
          newWindowNote: "Opens in new window",
        },
        infoCards: {
          authenticProducts: {
            title: "Authentic Products",
            description: "Direct from Japanese manufacturers",
          },
          localSupport: {
            title: "Local Support",
            description: "Philippine-based customer service and support",
          },
          innovation: {
            title: "Latest Innovation",
            description: "Cutting-edge Japanese technology and research",
          },
          productCatalog: {
            title: "Complete Product Catalog",
            description: "Browse our full range of Japanese products",
          },
          inquirySupport: {
            title: "Inquiry Support",
            description: "Professional assistance for product inquiries",
          },
          localDelivery: {
            title: "Local Delivery",
            description: "Fast and reliable delivery across the Philippines",
          },
        },
        contact: {
          title: "Need Product Information?",
          description:
            "Contact our specialists for detailed product information and ordering assistance.",
          phoneInquiries: "Phone Inquiries: +63 (2) 8XXX-XXXX",
          emailSupport: "Email Support: products@inspirealliancefund.com",
        },
      },
    },
    ja: {
      japaneseProducts: {
        header: {
          title: "日本製品イノベーション",
          description:
            "プレミアム製品の厳選されたセレクションで、最先端の日本の技術とイノベーションを体験してください。先進的なエネルギーソリューションから革命的な美容トリートメントまで、日本の卓越性の未来を発見してください。",
        },
        introduction: {
          title: "日本をフィリピンに",
          paragraph1:
            "主要な日本メーカーとの独占パートナーシップにより、フィリピンの消費者は技術、美容、ビジネスソリューションの最新イノベーションにアクセスできます。各製品は品質、イノベーション、日常生活を向上させる可能性のために慎重に選択されています。",
          paragraph2:
            "文化的・技術的ギャップを橋渡しし、本来の品質と効果を維持しながら、プレミアム日本製品をフィリピン市場でアクセス可能にしています。",
        },
        features: {
          authenticQuality: {
            title: "本物の品質",
            description: "日本メーカーから直接の100%正規品",
          },
          innovationFocus: {
            title: "イノベーション重視",
            description: "最先端技術と画期的なイノベーション",
          },
          localAccessibility: {
            title: "ローカルアクセシビリティ",
            description: "地元サポート付きでフィリピン市場で利用可能",
          },
          culturalBridge: {
            title: "文化の架け橋",
            description: "日本の卓越性をフィリピンの消費者と結ぶ",
          },
        },
        stats: {
          premiumProducts: "プレミアム日本製品",
          curatedDescription: "フィリピン市場向けに慎重に選択",
          productCategories: "製品カテゴリー",
          authenticJapanese: "本物の日本製",
        },
        sections: {
          productCategories: "製品カテゴリー",
          featuredProducts: "注目の日本製品",
        },
        categories: {
          energyTechnology: "エネルギー技術",
          beautyWellness: "美容・ウェルネス",
          securityTechnology: "セキュリティ技術",
          businessSolutions: "ビジネスソリューション",
        },
        categoryDescriptions: {
          energyTechnology: "先進的な省エネルギー・最適化ソリューション",
          beautyWellness:
            "日本のイノベーションを使用したプレミアムスキンケア・ウェルネス製品",
          securityTechnology: "最先端のセキュリティ・データ保護システム",
          businessSolutions: "エンタープライズソフトウェア・ビジネス管理ツール",
        },
        categoryCounts: {
          energyTechnology: "1製品",
          beautyWellness: "6製品",
          securityTechnology: "1製品",
          businessSolutions: "1製品",
        },
        products: {
          alphaHT: {
            description:
              "エアコンシステム向けの革命的な省エネ技術で、最適なパフォーマンスを維持しながらエネルギー消費を最大30%削減します。",
            features: {
              energyReduction: "30%エネルギー消費削減",
              airConditionerEfficiency: "エアコン効率向上",
              compressorOptimization: "高度なコンプレッサー最適化",
            },
          },
          clinience: {
            description:
              "日本の精密さで肌を明るくし、全体的な肌色を改善するために設計された高度なビタミンCとセラミドスキンケアトリートメント。",
            features: {
              vitaminC: "高濃度ビタミンC",
              ceramide: "日本のセラミド複合体",
              cytokineNMN: "サイトカイン・NMN強化",
            },
          },
          cysay: {
            description:
              "アンチエイジングと肌再生のためのプロフェッショナルグレードのマイクロニードルスキンケアトリートメント、全身適用に適しています。",
            features: {
              microneedle: "プロフェッショナルマイクロニードル技術",
              antiWrinkle: "高度なアンチリンクルトリートメント",
              fullBody: "全身適用対応",
            },
          },
          sqrc: {
            description:
              "ビジネスアプリケーション向けの公開秘密鍵暗号化によるエンタープライズグレードのデータ保護を提供するDENSOの安全なQRコード技術。",
            features: {
              dataProtection: "エンタープライズデータ保護",
              publicPrivateKey: "公開秘密鍵暗号化",
              enterpriseQR: "安全なQRコード技術",
            },
          },
          desknetNEO: {
            description:
              "プロジェクト管理、時間追跡、ファイル管理システムの統合ソリューションを提供する包括的なビジネス管理プラットフォーム。",
            features: {
              management: "統合ビジネス管理",
              timeKeeping: "高度な時間追跡",
              fileManagement: "安全なファイル管理システム",
            },
          },
          fomJapan: {
            description:
              "高品質な日本の成分を使用した肌の明るさと輝き向上のために設計されたプレミアム日本のスキンケア処方。",
            features: {
              skinBrightening: "高度な肌明るさ処方",
              radianceEnhancement: "自然な輝き向上",
              premiumIngredients: "プレミアム日本成分",
            },
          },
          pureExom: {
            description:
              "細胞再生と高度なスキンケア治療のための専用バイアルにパッケージされた最先端のエクソソームパウダートリートメント。",
            features: {
              exosomePowder: "純粋なエクソソームパウダー処方",
              vialPackaging: "専用バイアルパッケージング",
              cellularRegeneration: "高度な細胞再生",
            },
          },
          stemsAI: {
            description:
              "日本のイノベーションによるアンチエイジングトリートメントと包括的な肌改善のためのAI強化幹細胞スキンケア技術。",
            features: {
              stemCell: "AI強化幹細胞技術",
              antiAging: "高度なアンチエイジングトリートメント",
              skinImprovement: "包括的な肌改善",
            },
          },
          youBeYou: {
            description:
              "日本の処方専門知識で輝く肌と深い保湿を提供するために設計された革命的な昼夜スキンケアシステム。",
            features: {
              nightDay: "昼夜トリートメントシステム",
              glowingSkin: "自然な輝く肌処方",
              deepMoisturization: "深い保湿技術",
            },
          },
        },
        cta: {
          title: "日本のイノベーションを探索",
          description:
            "日本製品プラットフォームを訪問して、プレミアム日本イノベーションの完全なコレクションを発見し、フィリピン市場向けの注文を行ってください。",
          button: "日本製品プラットフォームを訪問",
          buttonText: "日本製品プラットフォームを訪問",
          opensNewWindow: "新しいウィンドウで開きます",
          newWindowNote: "新しいウィンドウで開きます",
        },
        infoCards: {
          authenticProducts: {
            title: "本物の製品",
            description: "日本メーカーから直接",
          },
          localSupport: {
            title: "ローカルサポート",
            description: "フィリピンベースのカスタマーサービス・サポート",
          },
          innovation: {
            title: "最新イノベーション",
            description: "最先端の日本技術・研究",
          },
          productCatalog: {
            title: "完全な製品カタログ",
            description: "日本製品の全ラインナップをブラウズ",
          },
          inquirySupport: {
            title: "お問い合わせサポート",
            description:
              "製品のお問い合わせに対するプロフェッショナルアシスタンス",
          },
          localDelivery: {
            title: "ローカル配送",
            description: "フィリピン全土への迅速で信頼できる配送",
          },
        },
        contact: {
          title: "製品情報が必要ですか？",
          description:
            "詳細な製品情報と注文サポートについては、当社スペシャリストにお問い合わせください。",
          phoneInquiries: "電話お問い合わせ: +63 (2) 8XXX-XXXX",
          emailSupport: "メールサポート: products@inspirealliancefund.com",
        },
        contact: {
          title: "Need Product Information?",
          description:
            "Contact our specialists for detailed product information and ordering assistance.",
          phoneInquiries: "Phone Inquiries: +63 (2) 8XXX-XXXX",
          emailSupport: "Email Support: products@inspirealliancefund.com",
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
    setMounted(true);

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

  if (!mounted) {
    return null;
  }

  const japaneseProducts = [
    {
      name: "Alpha HT",
      image: "/products/alphaht.png",
      category: t("japaneseProducts.categories.energyTechnology"),
      description: t("japaneseProducts.products.alphaHT.description"),
      features: [
        t("japaneseProducts.products.alphaHT.features.energyReduction"),
        t(
          "japaneseProducts.products.alphaHT.features.airConditionerEfficiency"
        ),
        t("japaneseProducts.products.alphaHT.features.compressorOptimization"),
      ],
    },
    {
      name: "Clinience",
      image: "/products/clinience.png",
      category: t("japaneseProducts.categories.beautyWellness"),
      description: t("japaneseProducts.products.clinience.description"),
      features: [
        t("japaneseProducts.products.clinience.features.vitaminC"),
        t("japaneseProducts.products.clinience.features.ceramide"),
        t("japaneseProducts.products.clinience.features.cytokineNMN"),
      ],
    },
    {
      name: "Cysay",
      image: "/products/cysay.png",
      category: t("japaneseProducts.categories.beautyWellness"),
      description: t("japaneseProducts.products.cysay.description"),
      features: [
        t("japaneseProducts.products.cysay.features.microneedle"),
        t("japaneseProducts.products.cysay.features.antiWrinkle"),
        t("japaneseProducts.products.cysay.features.fullBody"),
      ],
    },
    {
      name: "SQRC (Denso)",
      image: "/products/denso.png",
      category: t("japaneseProducts.categories.securityTechnology"),
      description: t("japaneseProducts.products.sqrc.description"),
      features: [
        t("japaneseProducts.products.sqrc.features.dataProtection"),
        t("japaneseProducts.products.sqrc.features.publicPrivateKey"),
        t("japaneseProducts.products.sqrc.features.enterpriseQR"),
      ],
    },
    {
      name: "DeskNet NEO",
      image: "/products/desknetNEO.png",
      category: t("japaneseProducts.categories.businessSolutions"),
      description: t("japaneseProducts.products.desknetNEO.description"),
      features: [
        t("japaneseProducts.products.desknetNEO.features.management"),
        t("japaneseProducts.products.desknetNEO.features.timeKeeping"),
        t("japaneseProducts.products.desknetNEO.features.fileManagement"),
      ],
    },
    {
      name: "FOM Japan",
      image: "/products/fomjapan.png",
      category: t("japaneseProducts.categories.beautyWellness"),
      description: t("japaneseProducts.products.fomJapan.description"),
      features: [
        t("japaneseProducts.products.fomJapan.features.skinBrightening"),
        t("japaneseProducts.products.fomJapan.features.radianceEnhancement"),
        t("japaneseProducts.products.fomJapan.features.premiumIngredients"),
      ],
    },
    {
      name: "Pure Exom",
      image: "/products/pureexom.png",
      category: t("japaneseProducts.categories.beautyWellness"),
      description: t("japaneseProducts.products.pureExom.description"),
      features: [
        t("japaneseProducts.products.pureExom.features.exosomePowder"),
        t("japaneseProducts.products.pureExom.features.vialPackaging"),
        t("japaneseProducts.products.pureExom.features.cellularRegeneration"),
      ],
    },
    {
      name: "Stems AI",
      image: "/products/stemsai.png",
      category: t("japaneseProducts.categories.beautyWellness"),
      description: t("japaneseProducts.products.stemsAI.description"),
      features: [
        t("japaneseProducts.products.stemsAI.features.stemCell"),
        t("japaneseProducts.products.stemsAI.features.antiAging"),
        t("japaneseProducts.products.stemsAI.features.skinImprovement"),
      ],
    },
    {
      name: "You Be You",
      image: "/products/youbeyou.png",
      category: t("japaneseProducts.categories.beautyWellness"),
      description: t("japaneseProducts.products.youBeYou.description"),
      features: [
        t("japaneseProducts.products.youBeYou.features.nightDay"),
        t("japaneseProducts.products.youBeYou.features.glowingSkin"),
        t("japaneseProducts.products.youBeYou.features.deepMoisturization"),
      ],
    },
  ];

  const productCategories = [
    {
      icon: "⚡",
      title: t("japaneseProducts.categories.energyTechnology"),
      description: t("japaneseProducts.categoryDescriptions.energyTechnology"),
      count: t("japaneseProducts.categoryCounts.energyTechnology"),
    },
    {
      icon: "💄",
      title: t("japaneseProducts.categories.beautyWellness"),
      description: t("japaneseProducts.categoryDescriptions.beautyWellness"),
      count: t("japaneseProducts.categoryCounts.beautyWellness"),
    },
    {
      icon: "🔒",
      title: t("japaneseProducts.categories.securityTechnology"),
      description: t(
        "japaneseProducts.categoryDescriptions.securityTechnology"
      ),
      count: t("japaneseProducts.categoryCounts.securityTechnology"),
    },
    {
      icon: "💼",
      title: t("japaneseProducts.categories.businessSolutions"),
      description: t("japaneseProducts.categoryDescriptions.businessSolutions"),
      count: t("japaneseProducts.categoryCounts.businessSolutions"),
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
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
            {t("japaneseProducts.header.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t("japaneseProducts.header.description")}
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  {t("japaneseProducts.introduction.title")}
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    {t("japaneseProducts.introduction.paragraph1")}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t("japaneseProducts.introduction.paragraph2")}
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
                        {t("japaneseProducts.features.authenticQuality.title")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t(
                          "japaneseProducts.features.authenticQuality.description"
                        )}
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
                        {t("japaneseProducts.features.innovationFocus.title")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t(
                          "japaneseProducts.features.innovationFocus.description"
                        )}
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
                        {t(
                          "japaneseProducts.features.localAccessibility.title"
                        )}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t(
                          "japaneseProducts.features.localAccessibility.description"
                        )}
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
                        {t("japaneseProducts.features.culturalBridge.title")}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t(
                          "japaneseProducts.features.culturalBridge.description"
                        )}
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
                    <div className="text-4xl mb-4">🇯🇵</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {t("japaneseProducts.stats.premiumProducts")}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {t("japaneseProducts.stats.curatedDescription")}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">4</div>
                        <div className="text-gray-600">
                          {t("japaneseProducts.stats.productCategories")}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">100%</div>
                        <div className="text-gray-600">
                          {t("japaneseProducts.stats.authenticJapanese")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
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
            {t("japaneseProducts.sections.productCategories")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {category.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  {category.description}
                </p>
                <div className="text-center">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                    }}
                  >
                    {category.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
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
            {t("japaneseProducts.sections.featuredProducts")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {japaneseProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-4">
                  <Image
                    src={product.image}
                    alt={`${product.name} - Japanese Product`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span
                      className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    >
                      {product.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-1">
                    {product.features.map((feature, idx) => (
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
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {t("japaneseProducts.cta.title")}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                {t("japaneseProducts.cta.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://inspirenextglobal.com"
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
                {t("japaneseProducts.cta.buttonText")}
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
                {t("japaneseProducts.cta.newWindowNote")}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  📦 {t("japaneseProducts.infoCards.productCatalog.title")}
                </div>
                <div className="text-gray-600">
                  {t("japaneseProducts.infoCards.productCatalog.description")}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  💬 {t("japaneseProducts.infoCards.inquirySupport.title")}
                </div>
                <div className="text-gray-600">
                  {t("japaneseProducts.infoCards.inquirySupport.description")}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  🚚 {t("japaneseProducts.infoCards.localDelivery.title")}
                </div>
                <div className="text-gray-600">
                  {t("japaneseProducts.infoCards.localDelivery.description")}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {t("japaneseProducts.contact.title")}
              </h4>
              <p className="text-gray-600 mb-4">
                {t("japaneseProducts.contact.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-1 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {t("japaneseProducts.contact.phoneInquiries")}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-1 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    {t("japaneseProducts.contact.emailSupport")}
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

export default JapaneseProducts;
