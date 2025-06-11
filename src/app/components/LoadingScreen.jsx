"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for at least 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/inspirealliancelogo.png"
          alt="Loading..."
          width={400}
          height={120}
          className="h-24 w-auto object-contain"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shine"
          style={{
            width: "200%",
            left: "-50%",
          }}
        />
      </div>
    </div>
  );
}
