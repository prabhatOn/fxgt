import React from 'react';
import Link from 'next/link';

const HowToStart = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-black">
      {/* subtle decorative gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -left-20 -top-8 w-96 h-96 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-6">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#2d2f33] to-[#1a1c1e] p-10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="max-w-xl">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                How Can You Start Making
              </h2>
              <h3 className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-r from-[#8b8d91] to-[#d1d5db] bg-clip-text text-transparent -mt-1">
                Money With Us
              </h3>
            </div>

            <Link
              href="https://trade.investminuae.com/register"
              className="mt-6 md:mt-0 inline-flex items-center justify-center bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white font-medium text-sm py-2.5 px-5 rounded-full border border-white/20 shadow-sm hover:shadow-md hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43] transition-all duration-200"
            >
              Open Account
            </Link>
          </div>

          {/* Steps Grid - card style with more breathing room */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="transform transition-all duration-300">
            <div className="p-10 rounded-2xl bg-white/5 border border-white/8 transition-colors shadow-sm hover:shadow-xl min-h-[260px] flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>

              <h4 className="font-display font-semibold text-2xl text-white mb-3">Open an account</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Click the button above and just follow a few easy steps to set up your account.</p>

              <div className="mt-auto pt-4">
                <span className="inline-flex items-center text-sm text-[#d1d5db] font-medium">Get started →</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="transform transition-all duration-300">
            <div className="p-10 rounded-2xl bg-white/5 border border-white/8 transition-colors shadow-sm hover:shadow-xl min-h-[260px] flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <h4 className="font-display font-semibold text-2xl text-white mb-3">Make a deposit</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Pro tip: USDT deposits and withdrawals are fast and reliable for funding your account.</p>

              <div className="mt-auto pt-4">
                <span className="inline-flex items-center text-sm text-[#d1d5db] font-medium">Learn how →</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="transform transition-all duration-300">
            <div className="p-10 rounded-2xl bg-white/5 border-2 border-transparent hover:border-[#5a5d63]/40 transition-colors shadow-sm hover:shadow-xl min-h-[260px] flex flex-col">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center mb-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              <h4 className="font-display font-semibold text-2xl text-white mb-3">Start trading</h4>
              <p className="text-gray-300 text-sm leading-relaxed">Start with small positions, learn the platform, and scale as you gain confidence.</p>

              <div className="mt-auto pt-4">
                <span className="inline-flex items-center text-sm text-[#d1d5db] font-medium">Start now →</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
