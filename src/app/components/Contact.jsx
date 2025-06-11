import React, { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-5xl w-full mx-auto p-16 rounded shadow-2xl"
    >
      <div className="mb-10">
        <label className="block font-medium mb-2 text-gray-800 text-xl">
          <span className="bg-red-600 text-white text-sm px-2 py-1 rounded mr-2 align-middle">required</span>
          Your Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 rounded px-6 py-4 text-gray-900 placeholder-gray-400 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-10">
        <label className="block font-medium mb-2 text-gray-800 text-xl">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          className="w-full border border-gray-300 rounded px-6 py-4 text-gray-900 placeholder-gray-400 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.company}
          onChange={handleChange}
          placeholder="Enter your company name"
        />
      </div>

      <div className="mb-10">
        <label className="block font-medium mb-2 text-gray-800 text-xl">
          <span className="bg-red-600 text-white text-sm px-2 py-1 rounded mr-2 align-middle">required</span>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 rounded px-6 py-4 text-gray-900 placeholder-gray-400 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-10">
        <label className="block font-medium mb-2 text-gray-800 text-xl">
          <span className="bg-red-600 text-white text-sm px-2 py-1 rounded mr-2 align-middle">required</span>
          Inquiry Content
        </label>
        <textarea
          name="message"
          className="w-full border border-gray-300 rounded px-6 py-4 h-64 text-gray-900 placeholder-gray-400 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Type your inquiry here"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-5 rounded font-semibold text-xl hover:bg-gray-900 transition"
      >
        Submit
      </button>

      {submitted && (
        <p className="mt-8 text-green-700 text-center text-xl">
          Thank you! We received your inquiry.
        </p>
      )}
    </form>
  );
};

const CompanyAddress = () => (
  <div className="bg-white max-w-lg w-full mx-auto p-16 rounded shadow-2xl flex flex-col justify-center h-full">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Offices</h2>
    <div className="mb-8">
      <h3 className="font-semibold text-gray-800 mb-2 text-lg">MAIN OFFICE:</h3>
      <p className="text-gray-700 text-base">
        6F Alliance Global Tower,<br />
        11th Avenue, corner 36th St,<br />
        Taguig, Metro Manila
      </p>
    </div>
    <div className="mb-8">
      <h3 className="font-semibold text-gray-800 mb-2 text-lg">SATELLITE OFFICE:</h3>
      <p className="text-gray-700 text-base">
        1209 Mountain Road PL NE STE N<br />
        Bernalillo County Albuquerque, NM, 87110, USA
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-gray-800 mb-2 text-lg">SATELLITE OFFICE:</h3>
      <p className="text-gray-700 text-base">
        20th floor, Trust Tower Main Building,<br />
        1-8-3 Marunouchi, Chiyoda-ku,<br />
        Tokyo 100-8283
      </p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-white">
    <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 p-4 md:p-12">
      <div className="flex-1 flex items-center justify-center">
        <CompanyAddress />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ContactForm />
      </div>
    </div>
  </div>
);

export default ContactPage;