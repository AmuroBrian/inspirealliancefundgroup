import React, { useState } from "react";

// Minimal fade-in animation
const FadeIn = ({ children, delay = 0 }) => (
  <div
    style={{
      opacity: 0,
      animation: `fadeIn 0.7s ease forwards`,
      animationDelay: `${delay}ms`,
    }}
  >
    {children}
    <style>
      {`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px);}
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <FadeIn delay={200}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-xl mx-auto bg-white border border-gray-200 rounded-3xl p-16 shadow-none"
      >
        <div className="mb-10">
          <label className="block text-2xl text-gray-700 mb-3">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-200 rounded-xl px-8 py-6 text-2xl focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="mb-10">
          <label className="block text-2xl text-gray-700 mb-3">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            className="w-full border border-gray-200 rounded-xl px-8 py-6 text-2xl focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
          />
        </div>
        <div className="mb-10">
          <label className="block text-2xl text-gray-700 mb-3">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-200 rounded-xl px-8 py-6 text-2xl focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-14">
          <label className="block text-2xl text-gray-700 mb-3">
            Inquiry <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            className="w-full border border-gray-200 rounded-xl px-8 py-6 text-2xl h-52 focus:outline-none focus:ring-2 focus:ring-black bg-gray-50"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Type your inquiry here"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-6 rounded-xl text-2xl hover:bg-gray-900 transition"
        >
          Send
        </button>
        {submitted && (
          <p className="mt-10 text-green-700 text-center text-2xl">
            Thank you! We received your inquiry.
          </p>
        )}
      </form>
    </FadeIn>
  );
};

const CompanyAddress = () => (
  <FadeIn delay={80}>
    <div className="max-w-screen-xl w-full bg-white border border-gray-200 rounded-3xl p-16 mb-10 md:mb-0">
      <div className="mb-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-5">Our Offices</h2>
        <div className="mb-5">
          <div className="text-2xl font-medium text-gray-500 mb-2">MAIN OFFICE</div>
          <div className="text-2xl text-gray-700">
            6F Alliance Global Tower,<br />
            11th Ave, corner 36th St,<br />
            Taguig, Metro Manila
          </div>
        </div>
        <div className="mb-5">
          <div className="text-2xl font-medium text-gray-500 mb-2">SATELLITE (US)</div>
          <div className="text-2xl text-gray-700">
            1209 Mountain Road PL NE STE N<br />
            Albuquerque, NM, 87110, USA
          </div>
        </div>
        <div>
          <div className="text-2xl font-medium text-gray-500 mb-2">SATELLITE (JP)</div>
          <div className="text-2xl text-gray-700">
            20F, Trust Tower Main Building,<br />
            1-8-3 Marunouchi, Chiyoda-ku,<br />
            Tokyo 100-8283
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <img
          src="image1"
          alt="Inspire Alliance Logo"
          className="rounded h-24 w-auto object-contain grayscale"
          style={{
            filter: "grayscale(1)",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  </FadeIn>
);

const ContactPage = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
    <div className="w-full max-w-screen-2xl flex flex-col md:flex-row gap-16 p-8 md:p-20 items-start justify-center">
      <div className="flex-1 flex flex-col items-center">
        <CompanyAddress />
      </div>
      <div className="flex-1 flex items-center">
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactPage;