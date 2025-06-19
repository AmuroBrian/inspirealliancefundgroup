"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of the fixed header (h-20 = 80px)
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-3 px-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/inspirealliancelogo.png"
                alt="Inspire Alliance Fund Group"
                width={300}
                height={90}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              About
            </Link>
            <button
              onClick={() => handleScrollToSection("services")}
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollToSection("solutions")}
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide cursor-pointer"
            >
              Solutions
            </button>
            <button
              onClick={() => handleScrollToSection("investment-insights")}
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide cursor-pointer"
            >
              Investment Insights
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button
              className="hidden md:flex items-center space-x-2 bg-[#b8860b] text-white px-6 py-1.5 rounded text-sm hover:bg-[#96700a] transition-colors duration-300 min-w-[120px] justify-center"
              style={{
                background:
                  "linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)",
              }}
            >
              <Image
                src="/icon%20logo.png"
                alt="Language"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Lang</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-1.5 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 top-2" : "top-1"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "top-2"
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 top-2" : "top-3"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              href="/about"
              className="block px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              About
            </Link>
            <button
              onClick={() => handleScrollToSection("services")}
              className="block w-full text-left px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => handleScrollToSection("solutions")}
              className="block w-full text-left px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Solutions
            </button>
            <button
              onClick={() => handleScrollToSection("investment-insights")}
              className="block w-full text-left px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Investment Insights
            </button>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="block w-full text-left px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Contact
            </button>
            <button className="w-full mt-2 flex items-center justify-center space-x-2 bg-[#b8860b] text-white px-3 py-1.5 rounded text-sm hover:bg-[#96700a] transition-colors duration-300">
              <Image
                src="/icon%20logo.png"
                alt="Language"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Lang</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
