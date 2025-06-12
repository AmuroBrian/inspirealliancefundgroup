import React, { useRef, useEffect } from "react";

const Mission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = "40%";
          }
        });
      },
      {
        threshold: 0.1,
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
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Diagonal shape element */}
      <div
        ref={sectionRef}
        className="absolute left-0 top-0 h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(128, 195, 42, 0.9) 0%, rgba(75, 136, 139, 0.9) 50%, rgba(56, 115, 175, 0.9) 100%)",
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)",
          width: "0%",
          transition: "width 1.5s ease-out",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
            Our Mission
          </h1>
        </div>

        <div className="mt-8 space-y-8 text-lg text-gray-600 leading-relaxed bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <p className="mb-6">
            At Inspire Alliance Fund Group Inc., our mission is to ignite change
            by empowering dreams. We believe that real progress begins when
            individuals are given the resources, trust, and opportunities to
            build a better future—not just for themselves, but for their
            communities and beyond.
          </p>

          <p className="mb-6">
            We are more than a funding platform; we are a movement that connects
            purpose-driven people with the support they need to turn ideas into
            impact. By investing in human potential, we cultivate a ripple
            effect—supporting lives, strengthening economies, and shaping a
            future where hope and innovation thrive together.
          </p>

          <p className="mb-6">
            Our commitment is clear: to inspire growth, fund possibilities, and
            fuel a collective journey toward a more empowered world.
          </p>
        </div>

        {/* Vision Statement Section */}
        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-8">
              Our Vision
            </h2>
          </div>

          <div className="mt-8 space-y-8 text-lg text-gray-600 leading-relaxed bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
            <p className="mb-6">
              We envision a world where every individual has the opportunity to
              transform their dreams into reality. Through strategic
              partnerships, innovative solutions, and unwavering support, we aim
              to be the catalyst for sustainable growth and positive change
              across communities worldwide.
            </p>

            <p className="mb-6">
              Our vision extends beyond financial success—we strive to create a
              legacy of empowerment, where each investment we make contributes
              to a more equitable and prosperous future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
