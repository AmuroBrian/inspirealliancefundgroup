"use client";
import React, { useEffect, useRef, useState } from 'react';
import { ReactTyped } from 'react-typed';
import News from "./components/News";
import Mission from "./components/Mission";
import SuccessStories from './components/SuccessStories';
import Contact from "./components/Contact";
import SplashScreen from "./components/SplashScreen";
import About from './components/About';
import Subsidiaries from './components/Subsidiaries';
import ServicesAndSolution from './components/ServicesAndSolution';
import InvestmentInsights from './components/InvestmentInsights';
import Organization from './components/Organization';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay before showing content
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  useEffect(() => {
    if (!showContent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            entry.target.style.width = '100%';
            setIsAnimating(true);
          } else if (!entry.isIntersecting) {
            entry.target.style.width = '0%';
            setIsAnimating(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimating, showContent]);

  return (
    <div className="relative w-full overflow-x-hidden">
      <SplashScreen onLoadingComplete={handleLoadingComplete} />

      {/* Background Video */}
      <div
        className={`fixed inset-0 w-full h-full -z-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className={`relative z-0 w-full transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'
        }`}>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col w-full">
          {/* Main Content */}
          <div className="flex-grow flex items-end px-4 sm:px-8 md:px-12 pb-4 sm:pb-6 md:pb-8">
            <div className="space-y-4 relative z-20 w-full">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light">
                <ReactTyped
                  strings={[
                    'Welcome to Inspire Alliance Fund Group',
                    'Empowering Global Financial Innovation',
                    'Your Trusted Partner in Investment Excellence',
                    'Building Tomorrow\'s Financial Solutions Today',
                    'Where Vision Meets Financial Expertise',
                    'Driving Sustainable Investment Growth',
                    'Connecting Opportunities, Creating Value'
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  showCursor={true}
                  cursorChar="|"
                  startDelay={showContent ? 1000 : 0}
                />
              </h1>
            </div>
          </div>

          {/* Progress Bar - Between Typed and Info Bar */}
          <div className="relative mb-4 sm:mb-6 md:mb-8 z-30 px-4 sm:px-8 md:px-12">
            <div className="relative w-full sm:w-[85%] md:w-[70%] p-1 rounded">
              <div
                ref={sectionRef}
                className="h-15"
                style={{
                  background: 'linear-gradient(90deg, rgb(128, 195, 42) 0%, rgb(75, 136, 139) 50%, rgb(56, 115, 175) 100%)',
                  borderRadius: '2px',
                  width: '0%',
                  transition: 'width 2s ease-out'
                }}
              />
            </div>
          </div>

          {/* Bottom Black Info Bar with Blur */}
          <div className="relative bg-gradient-to-r from-black/95 via-black/85 to-black/70 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 backdrop-blur-md">
            <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Transforming Financial Futures</p>
            <p className="text-white text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
              At Inspire Alliance Fund Group, we're dedicated to revolutionizing the financial landscape through innovative investment strategies and unwavering commitment to excellence. Our comprehensive suite of financial services, combined with cutting-edge technology and expert insights, empowers businesses and individuals to achieve their financial goals. Join us in shaping a future where financial success knows no bounds.
            </p>
          </div>
        </section>

        {/* About Section - Company Introduction */}
        <section className="relative bg-gray-100 w-full">
          <About />
        </section>

        {/* Mission Section - Company Purpose & Values */}
        <section className="relative bg-white w-full">
          <Mission />
        </section>

        {/* Services Section - What We Offer */}
        <section id="services" className="relative bg-gray-100 w-full">
          <ServicesAndSolution />
        </section>

        {/* Investment Insights Section - Our Expertise */}
        <section id="investment-insights" className="relative bg-white w-full">
          <InvestmentInsights />
        </section>

        {/* Subsidiaries Section - Our Network */}
        <section className="relative bg-white w-full">
          <Subsidiaries />
        </section>

        {/* Success Stories Section - Social Proof */}
        <section className="relative bg-gray-100 w-full">
          <SuccessStories />
        </section>

        {/* News Section - Latest Updates */}
        <section className="relative bg-black w-full">
          <News />
        </section>

        {/* Contact Section - Call to Action */}
        <section id="contact" className="relative bg-gray-100 w-full">
          <Contact />
        </section>
      </div>
    </div>
  );
}