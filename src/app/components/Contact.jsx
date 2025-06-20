"use client";
import React, { useState, useEffect } from "react";

// Enhanced fade-in animation with better timing
const FadeIn = ({ children, delay = 0 }) => (
  <div
    style={{
      opacity: 0,
      animation: `fadeIn 0.8s ease forwards`,
      animationDelay: `${delay}ms`,
    }}
  >
    {children}
    <style>
      {`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: none;}
        }
      `}
    </style>
  </div>
);

const ContactForm = () => {
  // ALL HOOKS MUST BE CALLED IN THE SAME ORDER EVERY TIME
  // 1. All useState hooks first
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations for contact form
  const translations = {
    en: {
      contact: {
        form: {
          title: "Get In Touch",
          subtitle:
            "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
          name_label: "Your Name",
          required: "*",
          name_placeholder: "Enter your full name",
          company_label: "Company Name",
          company_placeholder: "Your company (optional)",
          email_label: "Email Address",
          email_placeholder: "your@email.com",
          message_label: "Your Message",
          message_placeholder: "Tell us about your inquiry...",
          sending: "Sending...",
          send_button: "Send Message",
          error_config:
            "Email service configuration error. Please contact us directly.",
          error_send:
            "Failed to send message. Please try again or contact us directly.",
          success_message:
            "Thank you! We've received your message and will get back to you soon.",
        },
      },
    },
    ja: {
      contact: {
        form: {
          title: "お問い合わせ",
          subtitle:
            "お気軽にお問い合わせください。メッセージをお送りいただければ、できるだけ早くご回答いたします。",
          name_label: "お名前",
          required: "※",
          name_placeholder: "お名前をご入力ください",
          company_label: "会社名",
          company_placeholder: "会社名（任意）",
          email_label: "メールアドレス",
          email_placeholder: "your@email.com",
          message_label: "メッセージ",
          message_placeholder: "お問い合わせ内容をお聞かせください...",
          sending: "送信中...",
          send_button: "メッセージを送信",
          error_config:
            "メールサービスの設定エラーです。直接お問い合わせください。",
          error_send:
            "メッセージの送信に失敗しました。再度お試しいただくか、直接お問い合わせください。",
          success_message:
            "ありがとうございます！メッセージを受信いたしました。早急にご回答いたします。",
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

  // 3. All useEffect hooks
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
      const templateId = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setError(t("contact.form.error_config"));
        setLoading(false);
        return;
      }

      // Dynamically import EmailJS to prevent SSR issues
      const emailjs = (await import("@emailjs/browser")).default;

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company || "Not specified",
          message: form.message,
          sent_at: new Date().toLocaleString(),
          to_email: "info@inspirealliancefund.com",
        },
        publicKey
      );

      if (result.text === "OK") {
        setSubmitted(true);
        setForm({
          name: "",
          company: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setError(t("contact.form.error_send"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn delay={300}>
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header Section with Gradient */}
        <div
          className="px-8 py-6"
          style={{
            background:
              "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
          }}
        >
          <h2 className="text-3xl font-bold text-white text-center">
            {mounted ? t("contact.form.title") : "Get In Touch"}
          </h2>
          <p className="text-white/90 text-center mt-2">
            {mounted
              ? t("contact.form.subtitle")
              : "We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {mounted ? t("contact.form.name_label") : "Your Name"}{" "}
                  <span className="text-red-500">
                    {mounted ? t("contact.form.required") : "*"}
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={
                    mounted
                      ? t("contact.form.name_placeholder")
                      : "Enter your full name"
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {mounted ? t("contact.form.company_label") : "Company Name"}
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300"
                  value={form.company}
                  onChange={handleChange}
                  placeholder={
                    mounted
                      ? t("contact.form.company_placeholder")
                      : "Your company (optional)"
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {mounted ? t("contact.form.email_label") : "Email Address"}{" "}
                <span className="text-red-500">
                  {mounted ? t("contact.form.required") : "*"}
                </span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={
                  mounted
                    ? t("contact.form.email_placeholder")
                    : "your@email.com"
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {mounted ? t("contact.form.message_label") : "Your Message"}{" "}
                <span className="text-red-500">
                  {mounted ? t("contact.form.required") : "*"}
                </span>
              </label>
              <textarea
                name="message"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 h-32 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300 resize-none"
                required
                value={form.message}
                onChange={handleChange}
                placeholder={
                  mounted
                    ? t("contact.form.message_placeholder")
                    : "Tell us about your inquiry..."
                }
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background:
                  "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
              }}
            >
              {loading
                ? mounted
                  ? t("contact.form.sending")
                  : "Sending..."
                : mounted
                ? t("contact.form.send_button")
                : "Send Message"}
            </button>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-700 text-center font-medium">
                  ✗ {error}
                </p>
              </div>
            )}

            {submitted && !error && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-700 text-center font-medium">
                  ✓{" "}
                  {mounted
                    ? t("contact.form.success_message")
                    : "Thank you! We've received your message and will get back to you soon."}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </FadeIn>
  );
};

const CompanyAddress = () => {
  // ALL HOOKS MUST BE CALLED IN THE SAME ORDER EVERY TIME
  // 1. All useState hooks first
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations for company address
  const translations = {
    en: {
      contact: {
        offices: {
          title: "Our Offices",
          subtitle: "Visit us at any of our global locations",
          main_office: "MAIN OFFICE",
          main_address:
            "6F Alliance Global Tower,\n11th Ave, corner 36th St,\nTaguig, Metro Manila, Philippines",
          us_office: "SATELLITE OFFICE (US)",
          us_address:
            "1209 Mountain Road PL NE STE N\nAlbuquerque, NM, 87110\nUnited States",
          japan_office: "SATELLITE OFFICE (JP)",
          japan_address:
            "20F, Trust Tower Main Building,\n1-8-3 Marunouchi, Chiyoda-ku,\nTokyo 100-8283, Japan",
          email: "info@inspirealliancefund.com",
          phone: "+63 (2) 8XXX-XXXX",
        },
      },
    },
    ja: {
      contact: {
        offices: {
          title: "当社オフィス",
          subtitle: "世界各地のオフィスをご訪問ください",
          main_office: "メインオフィス",
          main_address:
            "6F Alliance Global Tower,\n11th Ave, corner 36th St,\nTaguig, Metro Manila, Philippines",
          us_office: "サテライトオフィス（米国）",
          us_address:
            "1209 Mountain Road PL NE STE N\nAlbuquerque, NM, 87110\nUnited States",
          japan_office: "サテライトオフィス（日本）",
          japan_address:
            "20F, Trust Tower Main Building,\n1-8-3 Marunouchi, Chiyoda-ku,\nTokyo 100-8283, Japan",
          email: "info@inspirealliancefund.com",
          phone: "+63 (2) 8XXX-XXXX",
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

  // 3. All useEffect hooks
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

  return (
    <FadeIn delay={100}>
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header Section with Gradient */}
        <div
          className="px-8 py-6"
          style={{
            background:
              "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
          }}
        >
          <h2 className="text-3xl font-bold text-white text-center">
            {mounted ? t("contact.offices.title") : "Our Offices"}
          </h2>
          <p className="text-white/90 text-center mt-2">
            {mounted
              ? t("contact.offices.subtitle")
              : "Visit us at any of our global locations"}
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Main Office */}
            <div className="border-l-4 border-[#80c32a] pl-6 py-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#80c32a] rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-gray-800">
                  {mounted ? t("contact.offices.main_office") : "MAIN OFFICE"}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {mounted
                  ? t("contact.offices.main_address")
                  : "6F Alliance Global Tower,\n11th Ave, corner 36th St,\nTaguig, Metro Manila, Philippines"}
              </p>
            </div>

            {/* US Office */}
            <div className="border-l-4 border-[#4b888b] pl-6 py-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#4b888b] rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-gray-800">
                  {mounted
                    ? t("contact.offices.us_office")
                    : "SATELLITE OFFICE (US)"}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {mounted
                  ? t("contact.offices.us_address")
                  : "1209 Mountain Road PL NE STE N\nAlbuquerque, NM, 87110\nUnited States"}
              </p>
            </div>

            {/* Japan Office */}
            <div className="border-l-4 border-[#3873af] pl-6 py-4 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#3873af] rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-gray-800">
                  {mounted
                    ? t("contact.offices.japan_office")
                    : "SATELLITE OFFICE (JP)"}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {mounted
                  ? t("contact.offices.japan_address")
                  : "20F, Trust Tower Main Building,\n1-8-3 Marunouchi, Chiyoda-ku,\nTokyo 100-8283, Japan"}
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-3 text-[#4b888b]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>
                    {mounted
                      ? t("contact.offices.email")
                      : "info@inspirealliancefund.com"}
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-3 text-[#4b888b]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>
                    {mounted ? t("contact.offices.phone") : "+63 (2) 8XXX-XXXX"}
                  </span>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
              <img
                src="/inspirealliancelogo.png"
                alt="Inspire Alliance Logo"
                className="h-16 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const ContactPage = () => {
  // ALL HOOKS MUST BE CALLED IN THE SAME ORDER EVERY TIME
  // 1. All useState hooks first
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations for contact page
  const translations = {
    en: {
      contact: {
        page_title: "Contact Us",
        page_subtitle:
          "Ready to start your journey with Inspire Alliance Fund Group? We're here to help you every step of the way.",
      },
    },
    ja: {
      contact: {
        page_title: "お問い合わせ",
        page_subtitle:
          "インスパイア・アライアンス・ファンド・グループとの旅を始める準備はできていますか？私たちはあらゆる段階でお手伝いいたします。",
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

  // 3. All useEffect hooks
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

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7] py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn>
          <div className="text-center">
            <span
              className="inline-block px-6 py-3 text-2xl font-bold text-white rounded-xl shadow-lg"
              style={{
                background:
                  "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
              }}
            >
              {mounted ? t("contact.page_title") : "Contact Us"}
            </span>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {mounted
                ? t("contact.page_subtitle")
                : "Ready to start your journey with Inspire Alliance Fund Group? We're here to help you every step of the way."}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <ContactForm />
          <CompanyAddress />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
