"use client";
import React from 'react';
import { ReactTyped } from 'react-typed'; 

export default function HeroVideoSection() {
  return (
    <div className="relative h-[700px] w-full overflow-hidden flex flex-col justify-end">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/videobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for dark effect */}
      <div className="absolute z-10 inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center h-full pl-12">
        <h1 className="text-white text-5xl md:text-6xl font-light mb-6 mt-20">
          <ReactTyped
            strings={[
              'Inspire Holdings - Group Companies',
            ]}
            typeSpeed={50}
            backSpeed={30}
            // No `loop` here — so it types once and stops
          />
        </h1>
      </div>

      {/* Bottom Black Info Bar with Blur */}
      <div className="relative z-20 bg-gradient-to-r from-black/95 via-black/85 to-black/70 px-4 py-2 backdrop-blur-md">
        <p className="text-white text-xl font-bold mb-2">Welcome to Inspire Alliance Fund Group!</p>
        <p className="text-white text-lg font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </div>
    </div>
  );
}
