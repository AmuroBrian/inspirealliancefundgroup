"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  // HOOKS IN STRICT ORDER - NO CONDITIONAL CALLS ANYWHERE
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const pathname = usePathname();

  // Static translations
  const translations = {
    en: {
      about: "About",
      services: "Services & Solutions",
      investment_insights: "Investment Insights",
      contact: "Contact",
      home: "Home",
    },
    ja: {
      about: "会社情報",
      services: "サービス・ソリューション",
      investment_insights: "投資インサイト",
      contact: "お問い合わせ",
      home: "ホーム",
    },
  };

  const t = (key) => {
    const cleanKey = key.replace("header.", "");
    return translations[currentLang][cleanKey] || cleanKey;
  };

  // Language data
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
  ];

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLang) || languages[0];
  };

  // Load saved language preference on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("selectedLanguage");
      if (savedLang && (savedLang === "en" || savedLang === "ja")) {
        setCurrentLang(savedLang);
      }
    }
  }, []);

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangDropdownOpen && !event.target.closest(".language-dropdown")) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangDropdownOpen]);

  // ALL REGULAR FUNCTIONS - NO HOOKS ALLOWED BELOW THIS POINT
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of the fixed header (h-20 = 80px)
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const changeLanguage = (langCode) => {
    setCurrentLang(langCode);
    setIsLangDropdownOpen(false);

    // Store language preference
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", langCode);

      // Trigger a custom event to notify other components
      window.dispatchEvent(
        new CustomEvent("languageChanged", {
          detail: { language: langCode },
        })
      );
    }
  };

  const toggleLanguageDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const isHomePage = pathname === "/";

  // 6. Render - No early returns to avoid hooks order issues
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-3 px-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/inspirealliancelogo.png"
                alt="Inspire Alliance Fund Group"
                width={300}
                height={90}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Only for home page */}
          {isHomePage && (
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/about"
                className="text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
              >
                {t("header.about")}
              </Link>
              <button
                onClick={() => handleScrollToSection("services")}
                className="text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {t("header.services")}
              </button>
              <button
                onClick={() => handleScrollToSection("investment-insights")}
                className="text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {t("header.investment_insights")}
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {t("header.contact")}
              </button>
            </nav>
          )}

          {/* Right Section with Navigation and Language Selector */}
          <div className="flex items-center space-x-6">
            {/* Home and About Navigation for non-home pages - positioned on the right */}
            {!isHomePage && (
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                >
                  {t("header.home")}
                </Link>
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                >
                  {t("header.about")}
                </Link>
              </nav>
            )}
            {/* Language Selector */}
            <div className="hidden md:block relative language-dropdown">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-2 bg-[#b8860b] text-white px-6 py-1.5 rounded text-sm hover:bg-[#96700a] transition-colors duration-300 min-w-[120px] justify-center"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                }}
              >
                <Image
                  src="/icon%20logo.png"
                  alt="Language"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>{getCurrentLanguage().name}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors duration-200 ${
                        currentLang === language.code
                          ? "bg-gray-100 text-blue-600 font-medium"
                          : "text-gray-700"
                      } ${language === languages[0] ? "rounded-t-md" : ""} ${
                        language === languages[languages.length - 1]
                          ? "rounded-b-md"
                          : ""
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.name}</span>
                      {currentLang === language.code && (
                        <svg
                          className="w-4 h-4 ml-auto"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-1.5 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 top-2" : "top-1"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "top-2"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 top-2" : "top-3"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {isHomePage ? (
              // Main page mobile navigation
              <>
                <Link
                  href="/about"
                  className="block px-3 py-1.5 text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.about")}
                </Link>
                <button
                  onClick={() => handleScrollToSection("services")}
                  className="block w-full text-left px-3 py-1.5 text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                >
                  {t("header.services")}
                </button>
                <button
                  onClick={() => handleScrollToSection("investment-insights")}
                  className="block w-full text-left px-3 py-1.5 text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                >
                  {t("header.investment_insights")}
                </button>
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="block w-full text-left px-3 py-1.5 text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                >
                  {t("header.contact")}
                </button>
              </>
            ) : (
              // Other pages mobile navigation
              <>
                <Link
                  href="/"
                  className="block px-3 py-1.5 text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.home")}
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-1.5 text-gray-800 hover:text-[#80c32a] transition-colors duration-300 tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("header.about")}
                </Link>
              </>
            )}

            {/* Mobile Language Selector */}
            <div className="mt-2 space-y-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    changeLanguage(language.code);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded text-sm transition-colors duration-300 ${
                    currentLang === language.code
                      ? "text-white font-medium"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{
                    background:
                      currentLang === language.code
                        ? "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)"
                        : "linear-gradient(0deg, rgba(128, 195, 42, 0.7) 0%, rgba(75, 136, 139, 0.7) 50%, rgba(56, 115, 175, 0.7) 100%)",
                  }}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                  {currentLang === language.code && (
                    <svg
                      className="w-4 h-4 ml-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
