"use client";

import React from "react";
import Image from "next/image";

const RealEstate = () => {
  const realEstateDevelopers = [
    {
      name: "Ayala Land",
      logo: "/realestatelogos/ayalaland.png",
      description: "Premier lifestyle communities and sustainable developments",
      specialties: [
        "Luxury Condominiums",
        "Master-planned Communities",
        "Commercial Spaces",
      ],
    },
    {
      name: "Century Properties",
      logo: "/realestatelogos/century.png",
      description: "Innovative architectural designs and premium living spaces",
      specialties: [
        "High-rise Condominiums",
        "Luxury Residences",
        "Mixed-use Developments",
      ],
    },
    {
      name: "Federal Land",
      logo: "/realestatelogos/federalland.png",
      description: "Quality homes and integrated lifestyle communities",
      specialties: [
        "Residential Communities",
        "Affordable Housing",
        "Commercial Properties",
      ],
    },
    {
      name: "Filinvest",
      logo: "/realestatelogos/filinvest.png",
      description: "Comprehensive real estate solutions and urban development",
      specialties: [
        "Township Development",
        "Residential Projects",
        "Office Buildings",
      ],
    },
    {
      name: "Golden Topper",
      logo: "/realestatelogos/goldentopper.png",
      description: "Affordable quality homes for Filipino families",
      specialties: ["House and Lot", "Townhouses", "Subdivision Development"],
    },
    {
      name: "iProsperity",
      logo: "/realestatelogos/iprosperity.png",
      description: "Investment-grade properties and rental solutions",
      specialties: [
        "Investment Properties",
        "Rental Management",
        "Property Development",
      ],
    },
    {
      name: "Megaworld",
      logo: "/realestatelogos/megaworld.png",
      description: "Live-work-play-learn township developments",
      specialties: [
        "Township Development",
        "Condominiums",
        "Commercial Centers",
      ],
    },
    {
      name: "Ortigas Land",
      logo: "/realestatelogos/ortigasland.png",
      description: "Strategic locations and premium office developments",
      specialties: [
        "Office Buildings",
        "Mixed-use Developments",
        "Retail Spaces",
      ],
    },
    {
      name: "Phirst Park Homes",
      logo: "/realestatelogos/phirst.png",
      description: "Affordable housing solutions for growing families",
      specialties: [
        "Affordable Housing",
        "House and Lot",
        "Community Development",
      ],
    },
    {
      name: "Robinson Land",
      logo: "/realestatelogos/robinsonlandcorp.png",
      description:
        "Integrated lifestyle destinations and residential communities",
      specialties: [
        "Residential Condominiums",
        "Shopping Centers",
        "Office Buildings",
      ],
    },
    {
      name: "Rockwell",
      logo: "/realestatelogos/rockwell.png",
      description: "Luxury living and premium lifestyle developments",
      specialties: [
        "Luxury Condominiums",
        "Premium Residences",
        "Exclusive Communities",
      ],
    },
    {
      name: "Shangri-La Properties",
      logo: "/realestatelogos/shang.png",
      description: "World-class luxury developments and hospitality",
      specialties: [
        "Luxury Residences",
        "Hotel Developments",
        "Premium Commercial",
      ],
    },
    {
      name: "SMDC",
      logo: "/realestatelogos/smdc.png",
      description: "Accessible luxury living in prime locations",
      specialties: ["Condominiums", "Residential Towers", "Mixed-use Projects"],
    },
    {
      name: "Vista Land",
      logo: "/realestatelogos/vistaland.png",
      description: "Comprehensive housing solutions and community development",
      specialties: [
        "Subdivision Development",
        "House and Lot",
        "Community Planning",
      ],
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
            Premium Real Estate Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover exceptional real estate opportunities through our network
            of trusted developer partners. We help you find suitable and
            affordable properties that match your lifestyle and investment
            goals.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Your Trusted Real Estate Partner
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    Inspire Alliance connects you with the Philippines' most
                    reputable real estate developers, offering a comprehensive
                    range of properties from affordable housing to luxury
                    developments.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our extensive network of affiliated developers ensures you
                    have access to the best properties in prime locations,
                    whether you're looking for your dream home or a smart
                    investment opportunity.
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
                        Expert Guidance
                      </h4>
                      <p className="text-sm text-gray-600">
                        Professional consultation throughout your property
                        journey
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
                        Diverse Portfolio
                      </h4>
                      <p className="text-sm text-gray-600">
                        Wide range of properties from various trusted developers
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
                        Affordable Options
                      </h4>
                      <p className="text-sm text-gray-600">
                        Properties that fit different budgets and requirements
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
                        Prime Locations
                      </h4>
                      <p className="text-sm text-gray-600">
                        Strategic locations with excellent connectivity and
                        amenities
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
                    <div className="text-4xl mb-4">🏢</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      14+ Developer Partners
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Trusted relationships with leading real estate developers
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">500+</div>
                        <div className="text-gray-600">Available Units</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="font-semibold text-gray-800">50+</div>
                        <div className="text-gray-600">Prime Locations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliated Developers Section */}
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
            Our Affiliated Real Estate Developers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {realEstateDevelopers.map((developer, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative h-20 w-full mb-4 flex items-center justify-center">
                  <Image
                    src={developer.logo}
                    alt={`${developer.name} logo`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {developer.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3 text-center">
                  {developer.description}
                </p>
                <div className="space-y-1">
                  {developer.specialties.map((specialty, idx) => (
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
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Our Complete Property Portfolio
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                Visit our dedicated real estate platform to browse detailed
                information about available units, floor plans, pricing, and
                amenities from all our affiliated developers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://inspire-real-estate.vercel.app"
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
                Visit Inspire Real Estate
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
                  📋 Detailed Listings
                </div>
                <div className="text-gray-600">
                  Complete property information and specifications
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  📸 Virtual Tours
                </div>
                <div className="text-gray-600">
                  High-quality images and floor plans
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-800 mb-1">
                  💰 Pricing Info
                </div>
                <div className="text-gray-600">
                  Transparent pricing and payment options
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
