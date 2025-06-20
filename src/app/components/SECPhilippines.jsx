"use client";

import React, { useState } from "react";
import Image from "next/image";

const SECPhilippines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
        setError(
          "Email service is not configured. Please contact the administrator."
        );
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
      setError("Failed to send registration request. Please try again later.");
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
              Ready to Register Your Business with SEC Philippines?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our experts handle your SEC registration process from start to
              finish. We ensure all documentation is properly prepared and
              submitted for fast, compliant registration.
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
                Start SEC Registration
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
                SEC Registration Request
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
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 transition-all duration-300"
                      placeholder="Enter desired business name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 transition-all duration-300"
                      placeholder="your@email.com"
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
                        ? "Submitting..."
                        : "Submit Registration Request"}
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
                    Request Submitted!
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Thank you for your SEC registration request. Our team will
                    contact you shortly to assist with your business
                    registration process.
                  </p>
                  <p className="text-sm text-gray-500">
                    This window will close automatically...
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
