"use client";
import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import About from './components/About';

export default function HeroVideoSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-width-expand');
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
  }, []);

  return (
    <div className="relative">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full -z-10">
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
      <div className="relative z-0">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col">
          {/* Main Content */}
          <div className="flex-grow flex items-center px-12">
            <div className="space-y-4 relative z-20">
              <h1 className="text-white text-5xl md:text-6xl font-light">
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
                />
              </h1>
              <div className="relative w-full mt-4 bg-black/30 p-1 rounded">
                <div
                  ref={sectionRef}
                  className="h-3 w-0 opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)',
                    boxShadow: '0 0 15px rgba(128, 195, 42, 0.7)',
                    borderRadius: '2px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Black Info Bar with Blur */}
          <div className="relative bg-gradient-to-r from-black/95 via-black/85 to-black/70 px-4 py-2 backdrop-blur-md">
            <p className="text-white text-xl font-bold mb-2">Transforming Financial Futures</p>
            <p className="text-white text-lg font-semibold">
              At Inspire Alliance Fund Group, we're dedicated to revolutionizing the financial landscape through innovative investment strategies and unwavering commitment to excellence. Our comprehensive suite of financial services, combined with cutting-edge technology and expert insights, empowers businesses and individuals to achieve their financial goals. Join us in shaping a future where financial success knows no bounds.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="relative bg-white">
          <About />
        </section>
      </div>
    </div>
  );
}