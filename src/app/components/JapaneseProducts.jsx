"use client";

import React from "react";
import Image from "next/image";

const JapaneseProducts = () => {
  const japaneseProducts = [
    {
      name: "Alpha HT",
      image: "/products/alphaht.png",
      category: "Energy Technology",
      description:
        "Revolutionary Japanese technology that reduces electricity consumption for split-type air conditioners by filtering residue between evaporator and condenser, decreasing compressor load",
      features: [
        "Energy Consumption Reduction",
        "Air Conditioner Efficiency",
        "Compressor Load Optimization",
      ],
    },
    {
      name: "Clinience",
      image: "/products/clinience.png",
      category: "Beauty & Wellness",
      description:
        "Comprehensive Japanese skincare supplement line featuring individual specialized products for Vitamin C, Ceramide, Cytokine, and NMN, each formulated for targeted skin health benefits and internal rejuvenation",
      features: [
        "Individual Vitamin C Product",
        "Separate Ceramide Formula",
        "Dedicated Cytokine & NMN Lines",
      ],
    },
    {
      name: "Cysay",
      image: "/products/cysay.png",
      category: "Beauty & Wellness",
      description:
        "Advanced Japanese dermashot treatment utilizing precision microneedle technology for anti-wrinkle therapy that can be safely applied to any area of the body for skin rejuvenation",
      features: [
        "Microneedle Technology",
        "Anti-Wrinkle Treatment",
        "Full Body Application",
      ],
    },
    {
      name: "SQRC (Denso)",
      image: "/products/denso.png",
      category: "Security Technology",
      description:
        "Secure QR Code technology that protects personal data through advanced public and private key encryption, providing secure information access for corporate and enterprise applications",
      features: [
        "Data Protection Encryption",
        "Public & Private Key Security",
        "Enterprise QR Solutions",
      ],
    },
    {
      name: "DeskNet NEO",
      image: "/products/desknetNEO.png",
      category: "Business Solutions",
      description:
        "Comprehensive Japanese business management application featuring integrated tools for administration, monitoring, time keeping, file management, and secure cloud storage solutions",
      features: [
        "Management & Administration",
        "Time Keeping & Monitoring",
        "File Management & Storage",
      ],
    },
    {
      name: "FOM Japan",
      image: "/products/fomjapan.png",
      category: "Beauty & Wellness",
      description:
        "Advanced Japanese skincare solution specifically formulated for skin brightening and radiance enhancement, utilizing premium Japanese ingredients and technology",
      features: [
        "Skin Brightening Formula",
        "Radiance Enhancement",
        "Premium Japanese Ingredients",
      ],
    },
    {
      name: "Pure Exom",
      image: "/products/pureexom.png",
      category: "Beauty & Wellness",
      description:
        "Revolutionary Japanese anti-aging treatment featuring advanced exosome powder contained in convenient vials for cellular regeneration and comprehensive skin rejuvenation",
      features: [
        "Advanced Exosome Powder",
        "Convenient Vial Packaging",
        "Cellular Regeneration Technology",
      ],
    },
    {
      name: "Stems AI",
      image: "/products/stemsai.png",
      category: "Beauty & Wellness",
      description:
        "Japanese anti-aging product that uses stem cell technology to help reduce signs of aging and improve skin appearance",
      features: [
        "Stem Cell Technology",
        "Anti-Aging Benefits",
        "Skin Improvement",
      ],
    },
    {
      name: "You Be You",
      image: "/products/youbeyou.png",
      category: "Beauty & Wellness",
      description:
        "Premium Japanese face mask collection featuring both Night YBY and Day YBY formulations designed for glowing skin effect and deep moisturization",
      features: [
        "Night & Day Formulations",
        "Glowing Skin Effect",
        "Deep Moisturization",
      ],
    },
  ];

  const productCategories = [
    {
      icon: "⚡",
      title: "Energy Technology",
      description: "Energy-saving solutions and efficiency innovations",
      count: "1 Product",
    },
    {
      icon: "💄",
      title: "Beauty & Wellness",
      description: "Premium skincare, anti-aging, and wellness products",
      count: "6 Products",
    },
    {
      icon: "🔒",
      title: "Security Technology",
      description: "Data protection and secure access solutions",
      count: "1 Product",
    },
    {
      icon: "💼",
      title: "Business Solutions",
      description: "Enterprise software and collaboration tools",
      count: "1 Product",
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
            Japanese Product Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover authentic Japanese products now available in the
            Philippines. Experience the perfect blend of traditional
            craftsmanship and cutting-edge innovation that defines Japanese
            excellence.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Bringing Japan to the Philippines
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Inspire Alliance Fund Group proudly brings you an exclusive
                    collection of authentic Japanese products, carefully
                    selected for their quality, innovation, and cultural
                    significance. Our marketing strategy focuses on introducing
                    Filipino consumers to the exceptional standards of Japanese
                    craftsmanship.
                  </p>
                  <p className="text-lg leading-relaxed">
                    From advanced technology solutions to premium lifestyle
                    products, each item in our portfolio represents the pinnacle
                    of Japanese innovation. We bridge the gap between Japanese
                    excellence and Philippine market needs, ensuring
                    accessibility without compromising authenticity.
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
                        Authentic Quality
                      </h4>
                      <p className="text-sm text-gray-600">
                        Genuine Japanese products with verified authenticity
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
                        Innovation Focus
                      </h4>
                      <p className="text-sm text-gray-600">
                        Cutting-edge technology and design excellence
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
                        Local Accessibility
                      </h4>
                      <p className="text-sm text-gray-600">
                        Available in the Philippines with local support
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
                        Cultural Bridge
                      </h4>
                      <p className="text-sm text-gray-600">
                        Connecting Japanese excellence with Filipino values
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
                      9+ Premium Products
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Carefully curated Japanese innovations for the Philippine
                      market
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">4</div>
                        <div className="text-gray-600">Product Categories</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">100%</div>
                        <div className="text-gray-600">Authentic Japanese</div>
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
            Product Categories
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
            Featured Japanese Products
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
                Explore Our Complete Japanese Product Collection
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                Visit our dedicated marketing platform to discover detailed
                information about all our Japanese products, pricing,
                availability, and exclusive offers. Experience authentic
                Japanese innovation today.
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
                Visit Inspire Next Global
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
                Opens in new window
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  📦 Product Catalog
                </div>
                <div className="text-gray-600">
                  Complete product information and specifications
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  💬 Inquiry Support
                </div>
                <div className="text-gray-600">
                  Direct contact for product inquiries and orders
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  🚚 Local Delivery
                </div>
                <div className="text-gray-600">
                  Convenient delivery throughout the Philippines
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Ready to Experience Japanese Excellence?
              </h4>
              <p className="text-gray-600 mb-4">
                Contact us today for product inquiries, bulk orders, or
                partnership opportunities. Let us bring authentic Japanese
                innovation to your doorstep.
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
                  <span className="text-gray-700">Phone Inquiries Welcome</span>
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
                  <span className="text-gray-700">Email Support Available</span>
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
