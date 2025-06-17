"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TravelSecurity = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.animateId;
            if (elementId && !animatedElements.has(elementId)) {
              setAnimatedElements((prev) => new Set([...prev, elementId]));

              if (elementId === "metro-manila-section") {
                // Animate coverage areas
                const coverageItems = entry.target.querySelectorAll(".coverage-item");
                coverageItems.forEach((item, idx) => {
                  setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0) scale(1)";
                  }, 200 + idx * 100);
                });

                // Animate protection features
                const protectionFeatures = entry.target.querySelectorAll(".protection-feature");
                protectionFeatures.forEach((feature, idx) => {
                  setTimeout(() => {
                    feature.style.opacity = "1";
                    feature.style.transform = "translateX(0)";
                  }, 800 + idx * 80);
                });
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animatedElements]);

  const metroManilaCities = [
    {
      city: "Manila",
      district: "National Capital Region",
      areas: ["Intramuros", "Binondo", "Ermita", "Malate", "Sampaloc", "Tondo"],
      icon: "🏛️",
      color: "from-blue-600 to-indigo-600",
      description: "Historic capital city with comprehensive business district coverage",
      keyLocations: ["Rizal Park", "Manila Bay", "Chinatown", "University Belt"]
    },
    {
      city: "Makati",
      district: "Central Business District",
      areas: ["Ayala Center", "Salcedo Village", "Legazpi Village", "Bel-Air", "Forbes Park"],
      icon: "🏢",
      color: "from-green-600 to-emerald-600",
      description: "Premier financial and business hub with 24/7 executive protection",
      keyLocations: ["Ayala Triangle", "Greenbelt", "Glorietta", "BGC Border"]
    },
    {
      city: "Bonifacio Global City",
      district: "Taguig",
      areas: ["BGC Central", "Forbes Town", "Serendra", "The Fort", "McKinley Hill"],
      icon: "🌆",
      color: "from-purple-600 to-violet-600",
      description: "Modern business district with advanced security infrastructure",
      keyLocations: ["High Street", "Bonifacio High Street", "Market! Market!", "St. Luke's Medical Center"]
    },
    {
      city: "Ortigas Center",
      district: "Pasig/Mandaluyong",
      areas: ["Ortigas CBD", "Capitol Commons", "The Podium", "Robinson's Galleria"],
      icon: "🏬",
      color: "from-orange-600 to-red-600",
      description: "Major commercial hub with comprehensive corporate security",
      keyLocations: ["ADB Avenue", "Julia Vargas Avenue", "Emerald Avenue", "Shaw Boulevard"]
    },
    {
      city: "Quezon City",
      district: "Northern Metro Manila",
      areas: ["Diliman", "Cubao", "Eastwood", "North Triangle", "Timog Avenue"],
      icon: "🏘️",
      color: "from-teal-600 to-cyan-600",
      description: "Largest city with extensive residential and commercial coverage",
      keyLocations: ["UP Diliman", "Smart Araneta Coliseum", "Eastwood City", "North EDSA"]
    },
    {
      city: "Alabang",
      district: "Muntinlupa",
      areas: ["Filinvest City", "Madrigal Business Park", "Ayala Alabang", "Festival Mall"],
      icon: "🏡",
      color: "from-pink-600 to-rose-600",
      description: "Southern business corridor with premium residential security",
      keyLocations: ["Filinvest Corporate City", "Alabang Town Center", "Festival Supermall"]
    },
    {
      city: "Eastwood City",
      district: "Quezon City",
      areas: ["Eastwood Central Plaza", "One Eastwood Avenue", "Cyber Park"],
      icon: "💼",
      color: "from-indigo-600 to-blue-600",
      description: "IT and BPO hub with specialized tech sector protection",
      keyLocations: ["Eastwood Mall", "Eastwood Central Plaza", "Cyber One Building"]
    },
    {
      city: "Newport City",
      district: "Pasay",
      areas: ["NAIA Terminal 3", "Resorts World", "Marriott Hotel", "Maxims Tower"],
      icon: "✈️",
      color: "from-amber-600 to-yellow-600",
      description: "Airport district with specialized travel and hospitality security",
      keyLocations: ["NAIA Terminal 3", "Resorts World Manila", "Newport Mall"]
    }
  ];

  const protectionServices = [
    {
      title: "Pickpocketing Protection",
      description: "Coverage for theft of personal belongings during your Metro Manila stay",
      icon: "👛",
      coverage: "3-4 day stay coverage",
      details: ["Wallet and phone theft coverage", "Valuables reimbursement", "Police report assistance", "Up to specified limits"]
    },
    {
      title: "Robbery Coverage",
      description: "Protection against robbery in hotels, public spaces, or while traveling",
      icon: "🚨",
      coverage: "Metro Manila",
      details: ["Personal property coverage", "Emergency medical expenses", "Police report costs", "Legal assistance"]
    },
    {
      title: "Physical Disputes",
      description: "Medical and legal support for physical altercations or disputes",
      icon: "⚖️",
      coverage: "Incident response",
      details: ["Medical treatment coverage", "Legal assistance", "Hospital stay expenses", "Dispute resolution support"]
    },
    {
      title: "Human Rights Violations",
      description: "Protection and support for human rights issues during your stay",
      icon: "🛡️",
      coverage: "Comprehensive support",
      details: ["Rights advocacy", "Legal representation", "Emergency assistance", "Support system access"]
    },
    {
      title: "Airport Security Escort",
      description: "Safe transportation to/from NAIA with security personnel",
      icon: "✈️",
      coverage: "Airport transfers",
      details: ["Security escort service", "Safe NAIA transport", "Baggage protection", "Terminal assistance"]
    },
    {
      title: "Hotel Security Assessment",
      description: "Security evaluation and monitoring of accommodation",
      icon: "🏨",
      coverage: "Accommodation security",
      details: ["Hotel safety evaluation", "Room security check", "24/7 monitoring", "Emergency protocols"]
    },
    {
      title: "Safe Route Planning",
      description: "Pre-planned secure routes for daily travel",
      icon: "🗺️",
      coverage: "Daily travel routes",
      details: ["Secure route mapping", "Traffic monitoring", "Risk assessment", "Alternative routes"]
    },
    {
      title: "Emergency Communication",
      description: "24/7 hotline with GPS tracking capability",
      icon: "📱",
      coverage: "Communication support",
      details: ["24/7 emergency hotline", "GPS tracking", "Real-time updates", "Family notifications"]
    },
    {
      title: "Legal Documentation Support",
      description: "Assistance with police reports and legal papers",
      icon: "📋",
      coverage: "Legal assistance",
      details: ["Police report filing", "Legal document prep", "Court assistance", "Official translations"]
    },
    {
      title: "Embassy Coordination",
      description: "Liaison with embassy/consulate services",
      icon: "🏛️",
      coverage: "Diplomatic support",
      details: ["Embassy contact", "Consular services", "Document verification", "Diplomatic assistance"]
    },
    {
      title: "Emergency Funds Access",
      description: "Quick access to emergency money",
      icon: "💰",
      coverage: "Financial emergency",
      details: ["Emergency cash advance", "Wire transfer assistance", "ATM location guidance", "Currency exchange"]
    },
    {
      title: "Banking Assistance",
      description: "Help with local banking issues",
      icon: "🏦",
      coverage: "Banking support",
      details: ["Account assistance", "Card replacement", "Transaction disputes", "Banking guidance"]
    },
    {
      title: "Language Interpretation",
      description: "Translation services for emergencies",
      icon: "🗣️",
      coverage: "Communication aid",
      details: ["Emergency translation", "Medical interpretation", "Legal translation", "Cultural mediation"]
    },
    {
      title: "Cultural Guidance",
      description: "Local customs and safety awareness",
      icon: "🏛️",
      coverage: "Cultural support",
      details: ["Local customs briefing", "Safety awareness", "Cultural etiquette", "Local contact network"]
    },
    {
      title: "Emergency Response",
      description: "24/7 rapid response throughout Metro Manila",
      icon: "🚨",
      coverage: "Metro-wide coverage",
      details: ["Medical emergencies", "Security incidents", "Natural disasters", "Evacuation services"]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-80 h-80 opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>
        <div className="absolute bottom-32 -right-24 w-72 h-72 opacity-8">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 to-teal-500"></div>
        </div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 opacity-6">
          <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 transform rotate-45 rounded-2xl"></div>
        </div>
      </div>

      <div
        ref={sectionRef}
        data-animate-id="metro-manila-section"
        className="max-w-7xl mx-auto px-4 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 rounded-full mb-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight">
            Coverage Area of Our Inspire Protection
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">Metro Manila Comprehensive Security</h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            Complete protection services across all major cities and business districts in Metro Manila. 
            From Makati CBD to BGC, from Ortigas to Alabang - we've got you covered 24/7.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-lg font-semibold text-blue-800">
              This protection covers the following situations during your 3- or 4-day stay in Metro Manila, Philippines:
            </p>
          </div>
        </div>

        {/* Metro Manila Coverage Areas */}
        <div className="mb-24 max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Metro Manila Coverage Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {metroManilaCities.map((area, index) => (
              <div
                key={index}
                className="coverage-item bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className={`h-3 bg-gradient-to-r ${area.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{area.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{area.city}</h4>
                      <p className="text-sm text-gray-500">{area.district}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{area.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm">Coverage Areas:</h5>
                    <div className="flex flex-wrap gap-1">
                      {area.areas.slice(0, 3).map((location, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${area.color}`}
                        >
                          {location}
                        </span>
                      ))}
                      {area.areas.length > 3 && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium text-gray-600 bg-gray-200">
                          +{area.areas.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 text-sm">Key Locations:</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {area.keyLocations.slice(0, 3).map((location, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${area.color}`}></div>
                          {location}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protection Services */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Protection Services
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl">
                {protectionServices.map((service, index) => (
                  <div
                    key={index}
                    className="protection-feature bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 w-full max-w-sm mx-auto"
                  >
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">{service.title}</h4>
                    <p className="text-gray-600 mb-3 text-center text-sm">{service.description}</p>
                    <div className="mb-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {service.coverage}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Protection Benefits */}
        <div className="mb-20 max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Protection Benefits
          </h3>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-green-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Police Report Assistance</h4>
                </div>
                <p className="text-gray-600">Assistance with filing police reports</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🍽️</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Daily Meal Allowance</h4>
                </div>
                <p className="text-gray-600">Meal allowance of <span className="font-bold text-blue-600">₱2,000 per day</span></p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Comprehensive Support</h4>
                </div>
                <p className="text-gray-600">Comprehensive support until your return</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏛️</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Embassy Report Support</h4>
                </div>
                <p className="text-gray-600">Assistance with filing reports at the embassy</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏥</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Medical Advance Payment</h4>
                </div>
                <p className="text-gray-600">Advance payment for medical expenses</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📄</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Administrative Support</h4>
                </div>
                <p className="text-gray-600">Support with administrative procedures, if required</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏨</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Accommodation Coverage</h4>
                </div>
                <p className="text-gray-600">Coverage for accommodation costs <span className="font-bold text-indigo-600">(up to 3 nights)</span> in case of an incident</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metro Manila Statistics */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-20 max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Our Metro Manila Network</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">17</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Response Ready</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600">Security Personnel</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10min</div>
              <div className="text-gray-600">Average Response</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative py-16 px-8 md:px-16">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 opacity-10">
              <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            
            {/* Dashed Circle */}
            <div className="absolute bottom-10 right-32 w-32 h-32 border-2 border-dashed border-white/20 rounded-full"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                  WHY CHOOSE US?
                </h3>
                
                <div className="space-y-8">
                  {/* 24/7 Support */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5zm0 0v.002a3.75 3.75 0 0 1 0 7.496 3.75 3.75 0 0 1 0-7.498z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="text-xl font-bold text-white mr-4">24/7 SUPPORT</h4>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                      </div>
                      <p className="text-gray-300 mt-2">Round-the-clock emergency assistance and monitoring</p>
                    </div>
                  </div>

                  {/* Quick & Easy */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="text-xl font-bold text-white mr-4">QUICK & EASY</h4>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                      </div>
                      <p className="text-gray-300 mt-2">Streamlined processes and rapid response deployment</p>
                    </div>
                  </div>

                  {/* Trust & Protection */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="text-xl font-bold text-white mr-4">TRUST & PROTECTION</h4>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
                      </div>
                      <p className="text-gray-300 mt-2">Comprehensive security backed by professional expertise</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 opacity-10">
                  <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </div>
                
                {/* Dashed Circle */}
                <div className="absolute bottom-10 right-32 w-32 h-32 border-2 border-dashed border-white/20 rounded-full"></div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table Section */}
        <div className="mb-20 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Pricing Content */}
              <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 p-8 md:p-12 text-white relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 opacity-10">
                  <svg className="w-48 h-48 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 opacity-5">
                  <div className="w-32 h-32 border-4 border-dashed border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">PRICING TABLE</h3>
                  </div>

                  {/* Main Description */}
                  <div className="mb-8">
                    <p className="text-lg leading-relaxed mb-6">
                      Our travel protection packed with exceptional benefits—all at an unbeatable price! For just ₱1,250, you can embark on your adventure with total peace of mind. Easily make your payment via your Inspire Wallet. But hold on, there's more!
                    </p>
                    
                    {/* Special Offer Highlight */}
                    <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-orange-300">Special Offer Alert!</h4>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        If you're already an Inspire Wallet holder with a maintaining balance, you can grab this incredible travel protection for as low as <span className="font-bold text-orange-300">₱625!</span> Yes, you read that right—you save big while getting top-notch protection.
                      </p>
                    </div>
                  </div>

                  {/* Call to Action Text */}
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-white/90">
                      And don't worry if you're not an Inspire Wallet user yet, you can still avail of our travel protection for only ₱1,250 by paying with your credit or debit card.
                    </p>
                    <p className="text-lg font-semibold mt-4 text-orange-300">
                      Why wait? Download the app now and secure your journey. Get protected while you soak in all the wonders of Manila!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Pricing Cards & Mobile App */}
              <div className="p-8 md:p-12 bg-gray-50">
                {/* Pricing Cards */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  {/* Inspire Clients Price */}
                  <div className="flex-1 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold mb-2">₱625</div>
                      <div className="text-teal-100 font-medium">Inspire Clients</div>
                      <div className="mt-4 text-sm text-teal-100">
                        Special rate for existing Inspire Wallet holders
                      </div>
                    </div>
                  </div>

                  {/* General Clients Price */}
                  <div className="flex-1 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 text-white shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold mb-2">₱1,250</div>
                      <div className="text-teal-100 font-medium">General Clients</div>
                      <div className="mt-4 text-sm text-teal-100">
                        Standard rate for new clients
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Setting Images */}
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 justify-center items-center mb-8">
                  <div className="relative w-full aspect-[9/19.5] sm:w-64 sm:h-[34.7rem] sm:aspect-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white mb-8 sm:mb-0">
                    <Image
                      src="/setting1.jpg"
                      alt="Inspire Wallet App Setting 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 256px"
                      priority={false}
                    />
                  </div>
                  <div className="relative w-full aspect-[9/19.5] sm:w-64 sm:h-[34.7rem] sm:aspect-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                    <Image
                      src="/setting2.jpg"
                      alt="Inspire Wallet App Setting 2"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 256px"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Secure Payment</span>
                  </div>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Protected Data</span>
                  </div>
                  <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                    <svg className="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Instant Activation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="rounded-3xl shadow-2xl p-8 md:p-12 text-white" style={{ background: 'linear-gradient(0deg, rgba(128, 195, 42, 1) 0%, rgba(75, 136, 139, 1) 50%, rgba(56, 115, 175, 1) 100%)' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Secure Your Business in Metro Manila</h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              From Makati's financial district to BGC's modern towers, from Ortigas commercial hub to Alabang's business parks - 
              trust Inspire Alliance Fund Group for comprehensive Metro Manila protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Get Metro Manila Protection
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Security Assessment
              </button>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="mt-24 bg-[#fdf6ed] py-16 px-4 md:px-0 relative overflow-hidden rounded-3xl max-w-5xl mx-auto shadow-xl border border-yellow-100">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <img src="/inspirealliancelogo.png" alt="Inspire Holdings Incorporated" className="h-12 w-auto mr-3" />
            <span className="text-xl font-serif font-bold tracking-wide text-gray-800">INSPIRE</span>
            <span className="ml-2 text-xs font-medium text-gray-600">HOLDINGS INCORPORATED</span>
          </div>
          {/* Thank You Heading */}
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-tight">THANK YOU</h2>
          {/* Instructions */}
          <div className="max-w-2xl mx-auto text-center text-gray-800 mb-8 text-base md:text-lg">
            <p className="mb-2">Before traveling to the Philippines, please download and register the Inspire Wallet app from the Apple Store or other platforms.</p>
            <p className="mb-2">Here's how:<br/>Navigate to MENU &gt; Travel Protection to apply for the service.</p>
            <p>Submission of a declaration form (e.g., items you are bringing) is mandatory. Please ensure the form is submitted prior to your departure.</p>
          </div>
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="space-y-4">
              <div className="flex items-center text-gray-800 text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1l1.54 2.6a2 2 0 01-.17 2.18l-1.1 1.65a11.05 11.05 0 005.52 5.52l1.65-1.1a2 2 0 012.18-.17l2.6 1.54a2 2 0 011 1.7V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V9a2 2 0 012-2z"/></svg>
                <span>8596-3717 / 8596-3670</span>
              </div>
              <div className="flex items-center text-gray-800 text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4"/></svg>
                <span>info@inspireholdings.ph</span>
              </div>
              <div className="flex items-center text-gray-800 text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 01-12 0 6 6 0 0112 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M2 20a10 10 0 0020 0"/></svg>
                <span>www.inspireholdings.ph</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start text-gray-800 text-lg">
                <svg className="w-6 h-6 text-teal-600 mr-3 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116.657 7.343z"/></svg>
                <span>PSE Tower 5th Ave. cor 28th Ave.<br/>One Bonifacio High Street,<br/>Bonifacio Global City, Taguig</span>
              </div>
            </div>
          </div>
          {/* Decorative Plane SVG */}
          <svg className="absolute right-0 top-0 w-40 h-24 md:w-64 md:h-32 opacity-80" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80 Q150 10 300 80" stroke="#222" strokeWidth="3" strokeDasharray="10 10" fill="none"/>
            <g transform="translate(270,70)">
              <path d="M0 0 L20 5 L0 10 L5 5 Z" fill="#222"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default TravelSecurity;
