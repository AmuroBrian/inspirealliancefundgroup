"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SECPhilippines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Static translations for SEC Philippines
  const translations = {
    en: {
      secPhilippines: {
        title: "SEC Philippines Registration",
        description:
          "Navigate Philippine business regulations with expert guidance on SEC registration, corporate compliance, and regulatory requirements for establishing your business presence in the Philippines.",
        content: {
          whatIs: {
            title: "What is SEC Philippines?",
            paragraph1:
              "The Securities and Exchange Commission (SEC) Philippines is the government agency responsible for regulating the country's capital markets and corporations. It ensures the protection of investors and the development of fair, efficient, and transparent capital markets.",
            paragraph2:
              "SEC registration is mandatory for all corporations, partnerships, and other business entities operating in the Philippines. This regulatory framework provides legal protection, credibility, and access to various business opportunities.",
          },
          whyEssential: {
            title: "Why SEC Registration is Essential",
            points: {
              legalRecognition:
                "Legal recognition and legitimacy for business operations",
              businessOperations:
                "Ability to enter contracts, open bank accounts, and conduct business",
              investorProtection:
                "Investor protection and access to capital markets",
              complianceFramework:
                "Structured compliance framework for corporate governance",
            },
          },
        },
        servicesTitle: "SEC Philippines Services",
        services: {
          corporateRegistration: {
            title: "Corporate Registration",
            description:
              "Complete assistance with company incorporation and registration processes",
          },
          businessLicensing: {
            title: "Business Licensing",
            description:
              "Guidance through licensing requirements and regulatory compliance",
          },
          regulatoryCompliance: {
            title: "Regulatory Compliance",
            description:
              "Ongoing compliance monitoring and regulatory reporting assistance",
          },
          financialOversight: {
            title: "Financial Oversight",
            description:
              "Financial reporting standards and corporate governance compliance",
          },
          investorProtection: {
            title: "Investor Protection",
            description:
              "Safeguarding investor interests and ensuring market transparency",
          },
          marketDevelopment: {
            title: "Market Development",
            description:
              "Supporting capital market growth and development initiatives",
          },
        },
        cta: {
          title: "Ready to Register Your Business?",
          description:
            "Get expert assistance with SEC Philippines registration and ensure your business meets all regulatory requirements.",
          button: "Start Registration Process",
        },
        modal: {
          title: "SEC Registration Inquiry",
          configurationError:
            "Email service configuration error. Please contact us directly.",
          errorMessage:
            "Failed to submit inquiry. Please try again or contact us directly.",
          form: {
            fullName: "Full Name",
            fullNamePlaceholder: "Enter your full name",
            businessName: "Business Name",
            businessNamePlaceholder: "Enter your business name",
            email: "Email Address",
            emailPlaceholder: "Enter your email address",
            submitting: "Submitting...",
            submit: "Submit Inquiry",
          },
          success: {
            title: "Inquiry Submitted Successfully!",
            message:
              "Thank you for your inquiry. Our SEC specialists will contact you within 24 hours to discuss your registration requirements.",
          },
        },
      },
    },
    ja: {
      secPhilippines: {
        title: "SEC フィリピン登録",
        description:
          "SEC登録、法人コンプライアンス、フィリピンでのビジネス展開に向けた規制要件の専門ガイダンスで、フィリピンのビジネス規制をナビゲートしてください。",
        content: {
          whatIs: {
            title: "SEC フィリピンとは？",
            paragraph1:
              "フィリピン証券取引委員会（SEC）は、国の資本市場と企業を規制する政府機関です。投資家の保護と公正で効率的、透明な資本市場の発展を確保しています。",
            paragraph2:
              "SEC登録は、フィリピンで事業を行うすべての企業、パートナーシップ、その他の事業体に義務付けられています。この規制フレームワークは法的保護、信頼性、様々なビジネス機会へのアクセスを提供します。",
          },
          whyEssential: {
            title: "SEC登録が不可欠な理由",
            points: {
              legalRecognition: "事業運営の法的認識と正当性",
              businessOperations: "契約締結、銀行口座開設、事業実施の能力",
              investorProtection: "投資家保護と資本市場へのアクセス",
              complianceFramework:
                "企業ガバナンスの構造化されたコンプライアンス・フレームワーク",
            },
          },
        },
        servicesTitle: "SEC フィリピン・サービス",
        services: {
          corporateRegistration: {
            title: "法人登録",
            description: "会社設立と登録プロセスの完全なサポート",
          },
          businessLicensing: {
            title: "事業ライセンス",
            description: "ライセンス要件と規制コンプライアンスのガイダンス",
          },
          regulatoryCompliance: {
            title: "規制コンプライアンス",
            description: "継続的なコンプライアンス監視と規制報告サポート",
          },
          financialOversight: {
            title: "財務監視",
            description: "財務報告基準と企業ガバナンス・コンプライアンス",
          },
          investorProtection: {
            title: "投資家保護",
            description: "投資家利益の保護と市場透明性の確保",
          },
          marketDevelopment: {
            title: "市場開発",
            description: "資本市場の成長と開発イニシアチブの支援",
          },
        },
        cta: {
          title: "ビジネス登録の準備はできていますか？",
          description:
            "SEC フィリピン登録の専門サポートを受けて、お客様のビジネスがすべての規制要件を満たすことを確保してください。",
          button: "登録プロセスを開始",
        },
        modal: {
          title: "SEC 登録お問い合わせ",
          configurationError:
            "メールサービス設定エラー。直接お問い合わせください。",
          errorMessage:
            "お問い合わせの送信に失敗しました。再度お試しいただくか、直接お問い合わせください。",
          form: {
            fullName: "氏名",
            fullNamePlaceholder: "お名前をご入力ください",
            businessName: "事業名",
            businessNamePlaceholder: "事業名をご入力ください",
            email: "メールアドレス",
            emailPlaceholder: "メールアドレスをご入力ください",
            submitting: "送信中...",
            submit: "お問い合わせを送信",
          },
          success: {
            title: "お問い合わせが正常に送信されました！",
            message:
              "お問い合わせありがとうございます。当社のSECスペシャリストが24時間以内にお客様の登録要件について連絡いたします。",
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Check if EmailJS environment variables are configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_COMPANY_REGISTER_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setError(t("secPhilippines.modal.configurationError"));
        setLoading(false);
        return;
      }

      // Dynamically import EmailJS to prevent SSR issues
      const emailjs = (await import("@emailjs/browser")).default;

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          full_name: form.fullName,
          business_name: form.businessName,
          email_address: form.email,
          sent_at: new Date().toLocaleString(),
          to_email: "info@inspirealliancefund.com",
        },
        publicKey
      );

      if (result.text === "OK") {
        setSubmitted(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitted(false);
          setForm({
            fullName: "",
            businessName: "",
            email: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setError(t("secPhilippines.modal.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setError("");
    setSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm({
      fullName: "",
      businessName: "",
      email: "",
    });
    setError("");
    setSubmitted(false);
  };

  const secServices = [
    {
      icon: "📋",
      title: t("secPhilippines.services.corporateRegistration.title"),
      description: t(
        "secPhilippines.services.corporateRegistration.description"
      ),
    },
    {
      icon: "🏢",
      title: t("secPhilippines.services.businessLicensing.title"),
      description: t("secPhilippines.services.businessLicensing.description"),
    },
    {
      icon: "⚖️",
      title: t("secPhilippines.services.regulatoryCompliance.title"),
      description: t(
        "secPhilippines.services.regulatoryCompliance.description"
      ),
    },
    {
      icon: "📊",
      title: t("secPhilippines.services.financialOversight.title"),
      description: t("secPhilippines.services.financialOversight.description"),
    },
    {
      icon: "🛡️",
      title: t("secPhilippines.services.investorProtection.title"),
      description: t("secPhilippines.services.investorProtection.description"),
    },
    {
      icon: "📈",
      title: t("secPhilippines.services.marketDevelopment.title"),
      description: t("secPhilippines.services.marketDevelopment.description"),
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
            {t("secPhilippines.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t("secPhilippines.description")}
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* SEC Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-8">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Background */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 0.3) 0%, rgba(75, 136, 139, 0.3) 50%, rgba(56, 115, 175, 0.3) 100%)",
                }}
              ></div>

              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 w-full mx-auto">
                <div>
                  <div className="relative aspect-[4/3] w-full justify-center items-center">
                    <Image
                      src="/secph.jpg"
                      alt="Securities and Exchange Commission Philippines"
                      fill
                      className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover"
                      style={{
                        objectPosition: "center",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {t("secPhilippines.content.whatIs.title")}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t("secPhilippines.content.whatIs.paragraph1")}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t("secPhilippines.content.whatIs.paragraph2")}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {t("secPhilippines.content.whyEssential.title")}
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-3 mr-3"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <span>
                      {t(
                        "secPhilippines.content.whyEssential.points.legalRecognition"
                      )}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-3 mr-3"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <span>
                      {t(
                        "secPhilippines.content.whyEssential.points.businessOperations"
                      )}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-3 mr-3"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <span>
                      {t(
                        "secPhilippines.content.whyEssential.points.investorProtection"
                      )}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div
                      className="w-2 h-2 rounded-full mt-3 mr-3"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 100%)",
                      }}
                    ></div>
                    <span>
                      {t(
                        "secPhilippines.content.whyEssential.points.complianceFramework"
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SEC Services Grid */}
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
            {t("secPhilippines.servicesTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t("secPhilippines.cta.title")}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {t("secPhilippines.cta.description")}
            </p>
            <div className="flex justify-center">
              <button
                onClick={openModal}
                className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                }}
              >
                {t("secPhilippines.cta.button")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div
              className="px-6 py-4 border-b border-gray-200 relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
              }}
            >
              <h3 className="text-xl font-bold text-white text-center">
                {t("secPhilippines.modal.title")}
              </h3>
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("secPhilippines.modal.form.fullName")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 transition-all duration-300"
                      placeholder={t(
                        "secPhilippines.modal.form.fullNamePlaceholder"
                      )}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("secPhilippines.modal.form.businessName")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 transition-all duration-300"
                      placeholder={t(
                        "secPhilippines.modal.form.businessNamePlaceholder"
                      )}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("secPhilippines.modal.form.email")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 transition-all duration-300"
                      placeholder={t(
                        "secPhilippines.modal.form.emailPlaceholder"
                      )}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                      }}
                    >
                      {loading
                        ? t("secPhilippines.modal.form.submitting")
                        : t("secPhilippines.modal.form.submit")}
                    </button>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm text-center font-medium">
                        ✗ {error}
                      </p>
                    </div>
                  )}
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {t("secPhilippines.modal.success.title")}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t("secPhilippines.modal.success.message")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t("secPhilippines.modal.success.autoClose")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SECPhilippines;
