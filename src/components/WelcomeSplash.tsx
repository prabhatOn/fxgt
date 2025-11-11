"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const WelcomeSplash = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash for 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center justify-center animate-fade-in">
        <div className="relative w-96 h-96 md:w-40 md:h-40 animate-scale-in">
          <Image
            src="/icon.png"
            alt="Investmin Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[#9ea0a4] via-[#6b6e73] to-[#3d3f43] rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default WelcomeSplash;
