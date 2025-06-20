"use client";
import React, { useState } from "react";
import Image from "next/image";

const Avatar = ({
  name,
  size = 64,
  bgGradient = "from-blue-500 to-teal-500",
}) => {
  const [imageError, setImageError] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // Dynamic size classes based on size prop
  const getSizeClass = (size) => {
    if (size >= 176) return "w-44 h-44";
    if (size >= 128) return "w-32 h-32";
    if (size >= 96) return "w-24 h-24";
    if (size >= 80) return "w-20 h-20";
    if (size >= 64) return "w-16 h-16";
    return "w-14 h-14";
  };

  const getTextSize = (size) => {
    if (size >= 176) return "text-4xl";
    if (size >= 128) return "text-3xl";
    if (size >= 96) return "text-2xl";
    if (size >= 80) return "text-xl";
    if (size >= 64) return "text-xl";
    return "text-lg";
  };

  const sizeClass = getSizeClass(size);
  const textSize = getTextSize(size);

  // Map names to actual filenames in public/officers/
  const getImageFileName = (fullName) => {
    const nameMap = {
      "Rhia Alberto": "rhia.png",
      "Atty. Renato Pineda": "renato.png",
      "Freddie Reyes": "freddie.png",
      "Ronaldo Castillo": "ronald.png",
      "Carlos Perez": "carlos.png",
      "Brian Perez": "brian.png",
      "Jaime Flores": "jaime.png",
      "Gerlie De Asis": "gerlie.png",
      "Anne Colinares": "anita.png",
      "Neil Brion": "neil.png",
      "Shelah Reynaldo": "shelah.png",
      "Joanne Hermosura": "joanne.png",
    };
    return nameMap[fullName] || null;
  };

  const fileName = getImageFileName(name);
  const imageSrc = fileName ? `/officers/${fileName}` : null;

  // If no image available or image failed to load, show initials
  if (!imageSrc || imageError) {
    return (
      <div
        className={`${sizeClass} bg-gradient-to-r ${bgGradient} rounded-full flex items-center justify-center`}
      >
        <span className={`text-white font-bold ${textSize}`}>{initials}</span>
      </div>
    );
  }

  // Perfect circle image with original styling
  return (
    <div
      className={`${sizeClass} rounded-full overflow-hidden mb-4 relative bg-white border-2 border-gray-200 shadow-md`}
    >
      <Image
        src={imageSrc}
        alt={name}
        width={size}
        height={size}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
};

export default Avatar;
