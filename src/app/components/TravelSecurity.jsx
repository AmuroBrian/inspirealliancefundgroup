"use client";

import React, { useState, useEffect, useRef } from "react";

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
                className="coverage-item opacity-0 transform translate-y-8 scale-95 transition-all duration-800 ease-out bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
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
                    className="protection-feature opacity-0 transform translate-x-[-40px] transition-all duration-600 ease-out bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 w-full max-w-sm mx-auto"
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
      </div>
    </section>
  );
};

export default TravelSecurity;