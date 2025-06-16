"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SECPhilippines = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.animateId;
            if (elementId && !animatedElements.has(elementId)) {
              setAnimatedElements((prev) => new Set([...prev, elementId]));

              if (elementId === "sec-section") {
                // Animate image
                const image = entry.target.querySelector(".sec-image");
                const content = entry.target.querySelector(".sec-content");

                if (image) {
                  // Reset any existing transforms
                  image.style.transform = "translateX(-60px) scale(0.95)";
                  image.style.opacity = "0";

                  // Trigger animation after a brief reset
                  setTimeout(() => {
                    image.style.opacity = "1";
                    image.style.transform = "translateX(0) scale(1)";
                  }, 100);
                }

                if (content) {
                  setTimeout(() => {
                    content.style.opacity = "1";
                    content.style.transform = "translateY(0)";
                  }, 400);
                }

                // Animate feature items
                const features = entry.target.querySelectorAll(".sec-feature");
                features.forEach((feature, idx) => {
                  setTimeout(() => {
                    feature.style.opacity = "1";
                    feature.style.transform = "translateX(0)";
                  }, 600 + idx * 150);
                });
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animatedElements]);

  const secServices = [
    {
      icon: "📋",
      title: "Corporate Registration",
      description:
        "Complete registration of corporations, partnerships, and other business entities",
    },
    {
      icon: "🏢",
      title: "Business Licensing",
      description:
        "Issuance of licenses for various business activities and commercial operations",
    },
    {
      icon: "⚖️",
      title: "Regulatory Compliance",
      description:
        "Monitoring and enforcement of corporate governance and securities regulations",
    },
    {
      icon: "📊",
      title: "Financial Oversight",
      description:
        "Supervision of public companies and financial market participants",
    },
    {
      icon: "🛡️",
      title: "Investor Protection",
      description:
        "Safeguarding investor interests and ensuring market transparency",
    },
    {
      icon: "📈",
      title: "Market Development",
      description:
        "Promoting capital market growth and development in the Philippines",
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

      <div
        ref={sectionRef}
        data-animate-id="sec-section"
        className="container mx-auto px-4 relative z-10"
      >
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
            Securities and Exchange Commission (SEC) Philippines
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The government agency responsible for regulating the securities
            market and registering corporations and partnerships in the
            Philippines
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* SEC Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-8">
            <div className="relative w-full flex justify-center items-center">
              {/* Decorative Background */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 0.3) 0%, rgba(75, 136, 139, 0.3) 50%, rgba(56, 115, 175, 0.3) 100%)",
                }}
              ></div>

              {/* Main Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 w-full">
                <div className="sec-image opacity-0 transform translate-x-[-60px] scale-95 transition-all duration-1000 ease-out p-6">
                  <div className="relative aspect-[16/9] w-full flex items-center justify-center">
                    <Image
                      src="/secph.jpg"
                      alt="Securities and Exchange Commission Philippines"
                      fill
                      className="rounded-xl hover:scale-105 transition-transform duration-300 object-contain"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
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
            <div className="sec-content opacity-0 transform translate-y-8 transition-all duration-800 ease-out space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  What is SEC Philippines?
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Securities and Exchange Commission (SEC) is the primary
                  government agency responsible for regulating the securities
                  market and overseeing the registration of corporations,
                  partnerships, and other business entities in the Philippines.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Established to protect investors and maintain fair, orderly,
                  and efficient markets, the SEC plays a crucial role in the
                  Philippine business landscape by ensuring corporate compliance
                  and promoting transparency in business operations.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Why SEC Registration is Essential:
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
                      <strong>Legal Recognition:</strong> Provides your business
                      with legal personality and recognition under Philippine
                      law
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
                      <strong>Business Operations:</strong> Required before you
                      can legally operate, open bank accounts, or enter
                      contracts
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
                      <strong>Investor Protection:</strong> Ensures transparency
                      and builds trust with potential investors and partners
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
                      <strong>Compliance Framework:</strong> Establishes proper
                      corporate governance and regulatory compliance structure
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
            Key SEC Functions & Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secServices.map((service, index) => (
              <div
                key={index}
                className="sec-feature opacity-0 transform translate-x-[-30px] transition-all duration-600 ease-out bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
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
              Ready to Register Your Business with SEC Philippines?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our experts handle your SEC registration process from start to
              finish. We ensure all documentation is properly prepared and
              submitted for fast, compliant registration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                }}
              >
                Start SEC Registration
              </button>
              <button className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300">
                Learn More About Our Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SECPhilippines;
