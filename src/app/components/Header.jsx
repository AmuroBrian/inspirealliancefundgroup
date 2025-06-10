'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Inspire Alliance Fund Group"
                width={400}
                height={120}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/news" 
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              News
            </Link>
            <Link 
              href="/mission" 
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Mission
            </Link>
            <Link 
              href="/collaborations" 
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Collaborations
            </Link>
            <Link 
              href="/services" 
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button className="hidden md:flex items-center space-x-2 bg-[#b8860b] text-white px-6 py-1.5 rounded text-sm hover:bg-[#96700a] transition-colors duration-300 min-w-[120px] justify-center" style={{ background: 'linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)' }}>
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
                <span className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2' : 'top-1'}`} />
                <span className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-2'}`} />
                <span className={`absolute w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2' : 'top-3'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link 
              href="/news"
              className="block px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              News
            </Link>
            <Link 
              href="/mission"
              className="block px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Mission
            </Link>
            <Link 
              href="/collaborations"
              className="block px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Collaborations
            </Link>
            <Link 
              href="/services"
              className="block px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Services
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-1.5 text-gray-800 hover:text-[#b8860b] transition-colors duration-300 tracking-wide"
            >
              Contact Us
            </Link>
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