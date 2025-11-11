import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section
      className="relative w-full flex items-center h-[110vh] md:h-[90vh] pt-10 md:pt-0 overflow-hidden bg-white md:mt-0"
    >
        <Image
        src="/hero.jpg"
        alt="Stylized GT lettermark in the background"
        fill
        className="object-contain z-0 pointer-events-none opacity-20"
        priority
      />

      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        <h3 className="font-display font-semibold text-sm md:text-base tracking-wide text-[#6b7280] uppercase animate-fade-in">
          Invest with Confidence
        </h3>

        <h1
          className="font-display font-bold text-[32px] sm:text-[40px] md:text-[52px] lg:text-[56px] leading-tight tracking-[-0.02em] text-[#1f2937] mt-3 max-w-[900px] text-center animate-fade-in"
        >
          Smart Investing Starts Here
        </h1>

        <p className="font-body text-base md:text-lg w-full max-w-[700px] mt-5 leading-relaxed text-[#4b5563] text-center animate-fade-in">
          Join <strong className="font-semibold text-[#1f2937]">thousands</strong> of investors and build your portfolio across global markets with advanced, easy-to-use tools.
        </p>

        <a
          href="https://trade.investminuae.com/register"
          className="inline-flex items-center justify-center bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white font-body font-semibold text-base py-3.5 px-12 rounded-lg mt-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 shadow-lg hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43] animate-fade-in"
        >
          Get Started
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        {/* six feature items arranged as three columns with two rows (matches screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full mt-14 text-center animate-fade-in">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-shadow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="font-display font-semibold text-lg text-[#2d2f33] group-hover:text-[#5a5d63] transition-colors">Multiple Account Options</h4>
            <p className="text-sm text-[#6b7280] mt-3">Choose the account that fits your goals.</p>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-display font-semibold text-lg text-[#2d2f33] group-hover:text-[#5a5d63] transition-colors">Mobile Platform</h4>
            <p className="text-sm text-[#6b7280] mt-3">Invest anywhere, anytime with ease.</p>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="font-display font-semibold text-lg text-[#2d2f33] group-hover:text-[#5a5d63] transition-colors">Industry Recognition</h4>
            <p className="text-sm text-[#6b7280] mt-3">Trusted and recognized platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;