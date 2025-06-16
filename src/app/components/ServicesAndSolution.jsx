import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "International Banking Solutions",
    description:
      "Expert consultancy services helping foreigners open bank accounts in the Philippines. We provide comprehensive guidance through the Philippine banking system, payment solutions, and financial growth strategies tailored for international clients.",
    image: "/bankingsolution.jpg",
    slug: "international-banking-solutions",
  },
  {
    id: 2,
    title: "Strategic Business Advisory",
    description:
      "Comprehensive business consulting for foreigners establishing businesses in the Philippines. We handle SEC registration, business banking, corporate setup, and complete regulatory compliance to help you successfully launch your Philippine business.",
    image: "/business.jpg",
    slug: "strategic-business-advisory",
  },
  {
    id: 3,
    title: "Comprehensive Travel Security",
    description:
      "Travel with confidence through our comprehensive protection services. We offer extensive coverage and support for international travelers, ensuring peace of mind throughout your journey.",
    image: "/travelprotection.png",
    slug: "comprehensive-travel-security",
  },
  {
    id: 4,
    title: "Premium Real Estate Solutions",
    description:
      "Discover exceptional real estate opportunities in Japan. Our dedicated team provides end-to-end property services, from investment consultation to property management, tailored to your specific needs.",
    image: "/realestate.jpg",
    slug: "premium-real-estate-solutions",
  },
  {
    id: 5,
    title: "Japanese Product Innovation",
    description:
      "Bridge the gap between Japanese innovation and global markets. We specialize in marketing and promoting authentic Japanese products, helping businesses expand their reach while maintaining cultural authenticity.",
    image: "/marketing.jpeg",
    slug: "japanese-product-innovation",
  },
];

const ServicesAndSolution = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            entry.target.style.width = "30%";
            setIsAnimating(true);
          } else if (!entry.isIntersecting) {
            entry.target.style.width = "0%";
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
  }, [isAnimating]);

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Decorative background element */}
      <div
        ref={sectionRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[80vh]"
        style={{
          background:
            "linear-gradient(90deg, rgba(128, 195, 42, 0.8) 0%, rgba(75, 136, 139, 0.8) 50%, rgba(56, 115, 175, 0.8) 100%)",
          width: "0%",
          transition: "width 1.5s ease-out",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services & Solutions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of services designed to help you
            succeed in the Japanese market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndSolution;
