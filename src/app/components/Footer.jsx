"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // ALL HOOKS MUST BE CALLED IN THE SAME ORDER EVERY TIME
  // 1. All useState hooks first
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // 2. All useEffect hooks
  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Static translations with both languages
  const t = (key) => {
    const translations = {
      en: {
        "footer.about_text":
          "At Inspire Alliance Fund Group Inc., our mission is to ignite change by empowering dreams. We are more than a funding platform; we are a movement that connects purpose-driven people with the support they need to turn ideas into impact. By investing in human potential, we cultivate a ripple effect—supporting lives, strengthening economies, and shaping a future where hope and innovation thrive together.",
        "footer.quick_links": "Quick Links",
        "footer.about_us": "About Us",
        "footer.services": "Services",
        "footer.investment_insights": "Investment Insights",
        "footer.success_stories": "Success Stories",
        "footer.contact_us": "Contact Us",
        "footer.our_services": "Our Services",
        "footer.banking_solutions": "International Banking Solutions",
        "footer.business_advisory": "Strategic Business Advisory",
        "footer.travel_security": "Comprehensive Travel Security",
        "footer.real_estate": "Premium Real Estate Solutions",
        "footer.japanese_products": "Japanese Product Innovation",
        "footer.contact_info": "Contact Info",
        "footer.email": "info@inspirealliancefund.com",
        "footer.phone": "+63 (2) 8XXX-XXXX",
        "footer.address":
          "MAIN OFFICE: 6F Alliance Global Tower, 11th Avenue, corner 36th St, Taguig, Metro Manila",
        "footer.privacy_policy": "Privacy Policy",
        "footer.terms_of_service": "Terms of Service",
      },
      ja: {
        "footer.about_text":
          "インスパイア・アライアンス・ファンド・グループ株式会社のミッションは、夢を力づけることで変化を起こすことです。私たちは単なる資金調達プラットフォームではありません。目的意識を持った人々とアイデアをインパクトに転換するために必要なサポートを結びつけるムーブメントです。人的潜在能力に投資することで、波及効果を育み、生活を支援し、経済を強化し、希望とイノベーションが共に繁栄する未来を形作ります。",
        "footer.quick_links": "クイックリンク",
        "footer.about_us": "会社情報",
        "footer.services": "サービス",
        "footer.investment_insights": "投資インサイト",
        "footer.success_stories": "成功事例",
        "footer.contact_us": "お問い合わせ",
        "footer.our_services": "サービス一覧",
        "footer.banking_solutions": "国際銀行ソリューション",
        "footer.business_advisory": "戦略的ビジネスアドバイザリー",
        "footer.travel_security": "包括的な旅行セキュリティ",
        "footer.real_estate": "プレミアム不動産ソリューション",
        "footer.japanese_products": "日本製品イノベーション",
        "footer.contact_info": "お問い合わせ情報",
        "footer.email": "info@inspirealliancefund.com",
        "footer.phone": "+63 (2) 8XXX-XXXX",
        "footer.address":
          "メインオフィス：6F Alliance Global Tower, 11th Avenue, corner 36th St, Taguig, Metro Manila",
        "footer.privacy_policy": "プライバシーポリシー",
        "footer.terms_of_service": "利用規約",
      },
    };

    if (key === "footer.copyright") {
      if (currentLang === "ja") {
        return `© ${new Date().getFullYear()} インスパイア・アライアンス・ファンド・グループ。すべての権利を保有。`;
      }
      return `© ${new Date().getFullYear()} Inspire Alliance Fund Group. All rights reserved.`;
    }

    return translations[currentLang][key] || key;
  };
  return (
    <footer
      className="text-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/logo.jpg"
                alt="Inspire Alliance Fund Group"
                width={500}
                height={150}
                className="h-32 w-auto"
                priority
              />
            </Link>
            <p className="text-white/90 mb-6">
              {mounted
                ? t("footer.about_text")
                : "At Inspire Alliance Fund Group Inc., our mission is to ignite change by empowering dreams. We are more than a funding platform; we are a movement that connects purpose-driven people with the support they need to turn ideas into impact."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {mounted ? t("footer.quick_links") : "Quick Links"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted ? t("footer.about_us") : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted ? t("footer.services") : "Services"}
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted
                    ? t("footer.investment_insights")
                    : "Investment Insights"}
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted ? t("footer.success_stories") : "Success Stories"}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted ? t("footer.contact_us") : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {mounted ? t("footer.our_services") : "Our Services"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/international-banking-solutions"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted
                    ? t("footer.banking_solutions")
                    : "International Banking Solutions"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strategic-business-advisory"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted
                    ? t("footer.business_advisory")
                    : "Strategic Business Advisory"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/comprehensive-travel-security"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted
                    ? t("footer.travel_security")
                    : "Comprehensive Travel Security"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/premium-real-estate-solutions"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted
                    ? t("footer.real_estate")
                    : "Premium Real Estate Solutions"}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/japanese-product-innovation"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  {mounted
                    ? t("footer.japanese_products")
                    : "Japanese Product Innovation"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {mounted ? t("footer.contact_info") : "Contact Info"}
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {mounted ? t("footer.email") : "info@inspirealliancefund.com"}
              </li>
              <li className="text-white/80 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {mounted ? t("footer.phone") : "+63 (2) 8XXX-XXXX"}
              </li>
              <li className="text-white/80 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {mounted
                  ? t("footer.address")
                  : "MAIN OFFICE: 6F Alliance Global Tower, 11th Avenue, corner 36th St, Taguig, Metro Manila"}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              {mounted
                ? t("footer.copyright", { year: new Date().getFullYear() })
                : `© ${new Date().getFullYear()} Inspire Alliance Fund Group. All rights reserved.`}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {mounted ? t("footer.privacy_policy") : "Privacy Policy"}
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {mounted ? t("footer.terms_of_service") : "Terms of Service"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
