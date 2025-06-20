"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/logo.jpg"
                alt="Inspire Alliance Fund Group"
                width={500}
                height={150}
                className="h-32 w-auto"
                priority
              />
            </Link>
            <p className="text-white/90 mb-6">
              At Inspire Alliance Fund Group Inc., our mission is to ignite
              change by empowering dreams. We are more than a funding platform;
              we are a movement that connects purpose-driven people with the
              support they need to turn ideas into impact. By investing in human
              potential, we cultivate a ripple effect—supporting lives,
              strengthening economies, and shaping a future where hope and
              innovation thrive together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Investment Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/international-banking-solutions"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  International Banking Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strategic-business-advisory"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Strategic Business Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/comprehensive-travel-security"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Comprehensive Travel Security
                </Link>
              </li>
              <li>
                <Link
                  href="/services/premium-real-estate-solutions"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Premium Real Estate Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/japanese-product-innovation"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                >
                  Japanese Product Innovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="text-white/80 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@example.com
              </li>
              <li className="text-white/80 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +971 123 456 789
              </li>
              <li className="text-white/80 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                MAIN OFFICE: 6F Alliance Global Tower, 11th Avenue, corner 36th
                St, Taguig, Metro Manila
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Inspire Alliance Fund Group. All
              rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
