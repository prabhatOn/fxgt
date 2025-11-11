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
              Start your investment journey with Investmin
            </h2>
            <p className="font-body text-[#b3b3b3] text-lg mb-8">
              Sign up and begin investing in minutes
            </p>
            <a
              href="https://trade.investminuae.com/register"
              className="inline-block bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] px-8 py-4 text-base font-semibold text-white hover:shadow-xl hover:scale-105 hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43] transition-colors duration-300 rounded-lg font-body"
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