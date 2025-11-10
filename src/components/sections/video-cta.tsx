"use client";

import React from "react";
import Image from "next/image";

const VideoCta = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Full-section background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Registration-Banner_png-22.webp"
          alt="Abstract 3D cylindrical pipe graphics"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] pointer-events-none" />

      <div className="relative z-20 mx-auto max-w-[1200px] px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-[70%] w-full text-center lg:text-left">
            <h2 className="font-display font-extrabold text-white text-[32px] lg:text-[40px] leading-tight tracking-[-0.02em] mb-4">
              Get started with Fusion FX
            </h2>
            <p className="font-body text-[#b3b3b3] text-lg mb-8">
              Apply and start trading in minutes
            </p>
            <a
              href="/register"
              className="inline-block bg-[#0f766e] hover:bg-[#0d6b63] text-white font-body font-semibold py-3.5 px-10 rounded-lg transition-colors text-base"
            >
              Register
            </a>
          </div>
          {/* Right column intentionally empty since background image covers the section */}
          <div className="lg:w-[30%] w-full" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default VideoCta;