import React from "react";
import { motion } from "framer-motion";


export default function CollaborationsSection() {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] py-6 md:py-12">
      
      <motion.div
        className="pl-4 md:pl-16 pt-4 md:pt-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <span className="inline-block px-4 md:px-6 py-2 text-xl md:text-3xl font-bold text-white rounded-md shadow bg-gradient-to-r from-green-600 to-blue-600">
          Collaborations
        </span>
      </motion.div>

      
      <motion.div
        className="flex justify-center items-center mt-4 md:mt-8 px-4 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bg-white rounded shadow-lg flex flex-col md:flex-row w-full md:w-[80vw] max-w-5xl overflow-hidden">
         
          <motion.div
            className="flex-1 p-4 md:p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">
              About Inspire Alliance Fund Group Inc.
            </h3>
            <p className="text-gray-700 text-xs md:text-sm mb-4 md:mb-6">
              At Inspire Alliance Fund Group Inc., we are driven by a powerful purpose: to empower dreams and ignite meaningful change. Founded on the belief that lasting progress begins with opportunity, we exist to support individuals who are ready to make a difference—not just in their own lives, but in the communities around them.
              <br /><br />
              We go beyond traditional funding. We are a dynamic movement that bridges passionate visionaries with the support, trust, and resources they need to transform ideas into lasting impact. Whether it's launching a small business, starting a social initiative, or developing innovative solutions, we're here to back bold ambitions.
              <br /><br />
              By investing in people, we help spark growth, nurture resilience, and create a ripple effect that uplifts entire economies. Our commitment is unwavering: to fund possibilities, champion potential, and walk alongside changemakers on a shared journey toward a more empowered, hopeful, and innovative world.
            </p>
          </motion.div>
          
          <motion.div
            className="flex-1 min-w-full md:min-w-[300px] max-w-full md:max-w-[600px] h-[250px] md:h-auto"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img
              src="/tower.jpg"
              alt="Alliance Global Tower"
              className="object-cover h-full w-full"
            />
          </motion.div>
        </div>
      </motion.div>

     
    </section>
  );
}