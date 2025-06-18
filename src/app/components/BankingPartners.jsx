"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const bankingPartners = [
  {
    id: 1,
    name: "BDO",
    fullName: "Banco de Oro",
    logo: "/banklogo/bdo.jpg",
    tagline: "Find Ways",
    description:
      "As the Philippines' largest bank, BDO offers comprehensive financial solutions with the widest network of branches and ATMs nationwide. Perfect for foreigners seeking accessibility and reliability.",
    features: [
      "Largest ATM Network",
      "International Services",
      "Multi-Currency Accounts",
      "Online Banking",
    ],
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: 2,
    name: "BPI",
    fullName: "Bank of the Philippine Islands",
    logo: "/banklogo/bpi.png",
    tagline: "A Bank for Every Juan",
    description:
      "The Philippines' oldest bank combines tradition with innovation, offering premium banking services with a focus on digital transformation and customer excellence.",
    features: [
      "Premium Banking",
      "Digital Innovation",
      "Investment Products",
      "International Remittance",
    ],
    gradient: "from-red-600 to-red-800",
  },
  {
    id: 3,
    name: "CTBC Bank",
    fullName: "CTBC Bank Philippines",
    logo: "/banklogo/ctbclogo.png",
    tagline: "Banking with Heart",
    description:
      "A Taiwanese-owned bank bringing international expertise to the Philippines, specializing in cross-border transactions and serving the global Filipino community.",
    features: [
      "Cross-Border Expertise",
      "International Transfers",
      "Foreign Currency",
      "Global Network",
    ],
    gradient: "from-purple-600 to-indigo-800",
  },
  {
    id: 4,
    name: "UnionBank",
    fullName: "Union Bank of the Philippines",
    logo: "/banklogo/ub.png",
    tagline: "Tech Up Philippines",
    description:
      "The Philippines' most innovative digital bank, leading in fintech solutions and digital banking experiences designed for the modern, tech-savvy customer.",
    features: [
      "Digital Banking Leader",
      "Fintech Innovation",
      "Mobile Banking",
      "Cryptocurrency Ready",
    ],
    gradient: "from-green-600 to-emerald-800",
  },
  {
    id: 5,
    name: "Security Bank",
    fullName: "Security Bank Corporation",
    logo: "/banklogo/securitybank.jpg",
    tagline: "Your Security is Our Priority",
    description:
      "Known for personalized service and robust security measures, Security Bank provides tailored banking solutions with a focus on customer protection and financial security.",
    features: [
      "Personalized Service",
      "High Security",
      "Wealth Management",
      "Corporate Banking",
    ],
    gradient: "from-orange-600 to-red-700",
  },
];

const BankingPartners = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const headerRef = useRef(null);
  const bankRefs = useRef([]);
  const ctaRef = useRef(null);

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
            Our Banking Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with the Philippines' most trusted banks to provide
            you with diverse banking options, each offering unique advantages to
            meet your specific financial needs.
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
                      Key Features:
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

        {/* Bottom CTA Section */}
        <div
          ref={ctaRef}
          data-animate-id="cta"
          className="text-center mt-20 opacity-0 transform translate-y-12 scale-95 transition-all duration-1000 ease-out"
        >
          <div className="relative">
            {/* Decorative Background */}
            <div
              className="absolute -inset-8 rounded-3xl opacity-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(128, 195, 42, 0.3) 0%, rgba(75, 136, 139, 0.3) 50%, rgba(56, 115, 175, 0.3) 100%)",
              }}
            ></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-white/20">
              <div className="mb-8">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              <h3
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ready to Open Your Philippine Bank Account?
              </h3>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Our expert consultants will help you choose the perfect bank for
                your needs and guide you through the entire account opening
                process with personalized support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-10 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl transform"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                  }}
                >
                  Start Your Application
                </button>
                <button
                  className="px-10 py-4 rounded-xl border-2 text-gray-700 font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "rgba(128, 195, 42, 0.3)",
                  }}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingPartners;
