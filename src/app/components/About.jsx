import React from 'react';

const About = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url("/topview.jpg")'
      }}
    >
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-16 tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-300">
              Mission
            </h1>
          
            <div className="mt-8 space-y-16 text-xl leading-relaxed">
              <p className="mb-8 text-white font-semibold tracking-wide drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] backdrop-blur-[2px] p-6 rounded-lg hover:backdrop-blur-[4px] transition-all duration-300">
                At Inspire Alliance Fund Group Inc., our mission is to ignite change by empowering dreams. 
                We believe that real progress begins when individuals are given the resources, trust, and 
                opportunities to build a better future—not just for themselves, but for their communities 
                and beyond.
              </p>

              <p className="mb-8 text-white font-semibold tracking-wide drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] backdrop-blur-[2px] p-6 rounded-lg hover:backdrop-blur-[4px] transition-all duration-300">
                We are more than a funding platform; we are a movement that connects purpose-driven 
                people with the support they need to turn ideas into impact. By investing in human 
                potential, we cultivate a ripple effect—supporting lives, strengthening economies, 
                and shaping a future where hope and innovation thrive together.
              </p>

              <p className="mb-8 text-white font-semibold tracking-wide drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] backdrop-blur-[2px] p-6 rounded-lg hover:backdrop-blur-[4px] transition-all duration-300">
                Our commitment is clear: to inspire growth, fund possibilities, and fuel a collective 
                journey toward a more empowered world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
