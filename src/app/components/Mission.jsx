import React, { useRef, useEffect, useState } from "react";

const Mission = () => {
  const sectionRef = useRef(null);
  const [currentLang, setCurrentLang] = useState("en");

  // Static translations
  const translations = {
    en: {
      title: "Our Mission",
      description1:
        "At Inspire Alliance Fund Group Inc., our mission is to ignite change by empowering dreams. We believe that real progress begins when individuals are given the resources, trust, and opportunities to build a better future—not just for themselves, but for their communities and beyond.",
      description2:
        "We are more than a funding platform; we are a movement that connects purpose-driven people with the support they need to turn ideas into impact. By investing in human potential, we cultivate a ripple effect—supporting lives, strengthening economies, and shaping a future where hope and innovation thrive together.",
      description3:
        "Our commitment is clear: to inspire growth, fund possibilities, and fuel a collective journey toward a more empowered world.",
      vision_title: "Our Vision",
      vision_description1:
        "We envision a world where every individual has the opportunity to transform their dreams into reality. Through strategic partnerships, innovative solutions, and unwavering support, we aim to be the catalyst for sustainable growth and positive change across communities worldwide.",
      vision_description2:
        "Our vision extends beyond financial success—we strive to create a legacy of empowerment, where each investment we make contributes to a more equitable and prosperous future for all.",
    },
    ja: {
      title: "私たちのミッション",
      description1:
        "インスパイア・アライアンス・ファンド・グループ株式会社のミッションは、夢を力づけることで変化を起こすことです。真の進歩は、個人がより良い未来を築くためのリソース、信頼、機会を与えられたときに始まると信じています。それは自分自身のためだけでなく、コミュニティやその先のためでもあります。",
      description2:
        "私たちは単なる資金調達プラットフォームではありません。目的意識を持った人々とアイデアをインパクトに転換するために必要なサポートを結びつけるムーブメントです。人的潜在能力に投資することで、波及効果を育み、生活を支援し、経済を強化し、希望とイノベーションが共に繁栄する未来を形作ります。",
      description3:
        "私たちのコミットメントは明確です：成長を促し、可能性に資金を提供し、より力強い世界への集合的な旅路を推進することです。",
      vision_title: "私たちのビジョン",
      vision_description1:
        "私たちは、すべての個人が夢を現実に変える機会を持つ世界を描いています。戦略的パートナーシップ、革新的なソリューション、揺るぎないサポートを通じて、世界のコミュニティにおける持続可能な成長と前向きな変化の触媒となることを目指しています。",
      vision_description2:
        "私たちのビジョンは金融的成功を超えて拡がります。私たちが行うすべての投資が、より公平で繁栄した未来に貢献する、エンパワーメントの遺産を創造することを目指しています。",
    },
  };

  const t = (key) => {
    const cleanKey = key.replace("mission.", "");
    return translations[currentLang][cleanKey] || cleanKey;
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
          if (entry.isIntersecting) {
            entry.target.style.width = "40%";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Diagonal shape element */}
      <div
        ref={sectionRef}
        className="absolute left-0 top-0 h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(128, 195, 42, 0.9) 0%, rgba(75, 136, 139, 0.9) 50%, rgba(56, 115, 175, 0.9) 100%)",
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
          width: "0%",
          transition: "width 1.5s ease-out",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
            {t("mission.title")}
          </h1>
        </div>

        <div className="mt-8 space-y-8 text-lg text-gray-600 leading-relaxed bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <p className="mb-6">{t("mission.description1")}</p>

          <p className="mb-6">{t("mission.description2")}</p>

          <p className="mb-6">{t("mission.description3")}</p>
        </div>

        {/* Vision Statement Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
              {t("mission.vision_title")}
            </h2>
          </div>

          <div className="mt-8 space-y-8 text-lg text-gray-600 leading-relaxed bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <p className="mb-6">{t("mission.vision_description1")}</p>

            <p className="mb-6">{t("mission.vision_description2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
