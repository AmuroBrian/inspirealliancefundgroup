"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for at least 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete?.();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        zIndex: 9999,
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative">
          <Image
            src="/inspirealliancelogo.png"
            alt="Loading..."
            width={400}
            height={120}
            className="h-24 w-auto object-contain"
            priority
          />
          <div
            className="shine-effect"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
              animation: "shine 4s linear infinite",
              transform: "translateX(-100%)",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          40% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shine-effect {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
