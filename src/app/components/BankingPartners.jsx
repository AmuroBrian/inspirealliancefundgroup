import React from "react";
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
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Banks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bankingPartners.map((bank, index) => (
            <div
              key={bank.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Header with Gradient */}
              <div
                className="relative h-32"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 0.8) 0%, rgba(75, 136, 139, 0.8) 50%, rgba(56, 115, 175, 0.8) 100%)",
                }}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div
                    className="bg-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden flex items-center justify-center p-3"
                    style={{ width: "140px", height: "70px" }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={bank.logo}
                        alt={`${bank.name} Logo`}
                        fill
                        className="object-contain"
                        style={{
                          padding:
                            bank.name === "BPI"
                              ? "8px"
                              : bank.name === "CTBC Bank"
                              ? "6px"
                              : bank.name === "UnionBank"
                              ? "10px"
                              : bank.name === "Security Bank"
                              ? "8px"
                              : "6px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {bank.fullName}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 italic">
                    "{bank.tagline}"
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {bank.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {bank.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div
                          className="w-2 h-2 rounded-full mr-2"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                          }}
                        ></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-2xl transition-all duration-300"
                style={{
                  borderImage:
                    "linear-gradient(135deg, rgba(128, 195, 42, 0.5) 0%, rgba(75, 136, 139, 0.5) 50%, rgba(56, 115, 175, 0.5) 100%) 1",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div
            className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)",
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                {bankingPartners.slice(0, 5).map((bank, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-white overflow-hidden flex items-center justify-center"
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <Image
                        src={bank.logo}
                        alt={bank.name}
                        fill
                        className="object-contain"
                        style={{
                          padding:
                            bank.name === "BPI"
                              ? "2px"
                              : bank.name === "CTBC Bank"
                              ? "1px"
                              : bank.name === "UnionBank"
                              ? "3px"
                              : bank.name === "Security Bank"
                              ? "2px"
                              : "1px",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Open Your Philippine Bank Account?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert consultants will help you choose the perfect bank for
              your needs and guide you through the entire account opening
              process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
                }}
              >
                Start Your Application
              </button>
              <button className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingPartners;
