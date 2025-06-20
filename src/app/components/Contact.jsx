import React, { useState } from "react";

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
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
      const templateId = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID;
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
      setError("Failed to send message. Please try again later.");
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
            Get In Touch
          </h2>
          <p className="text-white/90 text-center mt-2">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 h-32 focus:outline-none focus:border-[#4b888b] focus:ring-2 focus:ring-[#4b888b]/20 bg-gray-50 transition-all duration-300 hover:border-gray-300 resize-none"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
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
              {loading ? "Sending..." : "Send Message"}
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
                  ✓ Thank you! We've received your message and will get back to
                  you soon.
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </FadeIn>
  );
};

const CompanyAddress = () => (
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
          Our Offices
        </h2>
        <p className="text-white/90 text-center mt-2">
          Visit us at any of our global locations
        </p>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="space-y-6">
          {/* Main Office */}
          <div className="border-l-4 border-[#80c32a] pl-6 py-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-[#80c32a] rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">MAIN OFFICE</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              6F Alliance Global Tower,
              <br />
              11th Ave, corner 36th St,
              <br />
              Taguig, Metro Manila, Philippines
            </p>
          </div>

          {/* US Office */}
          <div className="border-l-4 border-[#4b888b] pl-6 py-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-[#4b888b] rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">
                SATELLITE OFFICE (US)
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              1209 Mountain Road PL NE STE N<br />
              Albuquerque, NM, 87110
              <br />
              United States
            </p>
          </div>

          {/* Japan Office */}
          <div className="border-l-4 border-[#3873af] pl-6 py-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-[#3873af] rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-gray-800">
                SATELLITE OFFICE (JP)
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              20F, Trust Tower Main Building,
              <br />
              1-8-3 Marunouchi, Chiyoda-ku,
              <br />
              Tokyo 100-8283, Japan
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
                <span>info@inspirealliancefund.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 mr-3 text-[#4b888b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+63 (2) 8XXX-XXXX</span>
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

const ContactPage = () => (
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
            Contact Us
          </span>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey with Inspire Alliance Fund Group? We're
            here to help you every step of the way.
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

export default ContactPage;
