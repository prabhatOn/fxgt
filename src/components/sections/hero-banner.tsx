import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section
      className="relative w-full flex items-center h-[90vh] overflow-hidden bg-black"
    >

      <div className="relative z-20 w-full max-w-[1200px] mt-20 mx-auto px-6 flex flex-col items-center">
        <h3 className="font-display font-bold text-lg md:text-base tracking-wide text-[#cfcfcf] uppercase">
          Invest with Confidence.
        </h3>

        <h1
          className="font-display font-medium text-[35px] md:text-[64px] lg:text-[70px] leading-tight tracking-[-0.02em] text-[#cfcfcf] mt-4 max-w-[1200px] whitespace-nowrap"
        >
          SMART INVESTING STARTS HERE
        </h1>

        <p className="font-body text-lg md:text-xl w-full mt-6 leading-relaxed text-[#465059]">
          Join <strong className="font-semibold text-[#cfcfcf]">thousands</strong> of investors and build your portfolio across global markets with advanced, easy-to-use tools.
        </p>

        <Link
          href="/register"
          className="inline-flex items-center justify-center bg-slate-300 text-slate-900 font-body font-semibold text-base py-3 px-10 rounded-[10px] mt-8 transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:bg-slate-400 shadow-[0_8px_24px_rgba(148,163,184,0.18)]"
        >
          Register
        </Link>

        {/* trust / rating row (PCI | Excellent | stars | reviews on Trustpilot) */}
        <div className="flex items-center justify-center gap-4 mt-8 text-sm text-[#4b5563]">
           <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Group_png-11.webp"
            alt="Trustpilot stars"
            width={60}
            height={20}
            className=""
          />
          <span className="h-4 w-px bg-[#e6e6e6] inline-block" />
         
          <a href="#" className="underline text-[#cfcfcf]">1,463 reviews on</a>
          <span className="inline-flex items-center gap-2 text-[#cfcfcf] font-semibold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#07a87e" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            Trustpilot
          </span>
        </div>

        {/* six feature items arranged as three columns with two rows (matches screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mt-12 text-center">
          <div>
            <h4 className="font-display font-light text-2xl md:text-xl text-[#cfcfcf]">Multiple Account Options</h4>
            <p className="text-base md:text-lg text-[#6b7178] mt-4">Choose the account that fits your goals.</p>
          </div>

          <div>
            <h4 className="font-display font-light text-2xl md:text-xl text-[#cfcfcf]">Mobile Platform</h4>
            <p className="text-base md:text-lg text-[#6b7178] mt-4">Invest anywhere, anytime with ease.</p>
          </div>

          <div>
            <h4 className="font-display font-light text-2xl md:text-xl text-[#cfcfcf]">Industry Recognition</h4>
            <p className="text-base md:text-lg text-[#6b7178] mt-4">Trusted and recognized platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;