import React from 'react';
import Link from 'next/link';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';

const IntroducingBrokerPage = () => {
  return (
    <>
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/ib.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/10 via-[#0a0a0a]/20 to-[#1a1a1a]/50" />
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute -left-20 -top-8 w-96 h-96 rounded-full bg-[#4b5563] blur-3xl" />
          <div className="absolute -right-20 -bottom-8 w-96 h-96 rounded-full bg-[#6b7280] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-[#8b8d91] mb-4">
            Introducing Broker
          </h3>
          
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Partner With <span className="bg-gradient-to-r from-[#9ea0a4] to-[#6b6e73] bg-clip-text text-transparent">Investmin</span> as an IB
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
            Join our lucrative Introducing Broker program and earn generous commissions. Unlock exclusive benefits, 
            multi-tier rewards, and fast payouts while empowering traders worldwide.
          </p>

          <Link
            href="https://trade.investminuae.com/register"
            className="inline-flex items-center justify-center bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white font-semibold text-base py-3.5 px-12 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43] transition-all duration-300"
          >
            BECOME AN IB PARTNER
          </Link>
        </div>
      </section>

      {/* Partnership Perks Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#1f2937] mb-4">
              Partnership <span className="bg-gradient-to-r from-[#6b6e73] to-[#3d3f43] bg-clip-text text-transparent">Perks</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience commission riches, award-winning trust, market evolution, and daily rewards with our IB program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1f2937] mb-3">Up to 90% Commission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Earn competitive profit share from spreads with our generous commission structure.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1f2937] mb-3">Award-Winning Broker</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Partner with a reputable broker recognized with 40+ industry awards.
              </p>
            </div>

            {/* Card 3 - Featured */}
            <div className="group p-8 rounded-2xl bg-gradient-to-b from-[#f9fafb] to-white border-2 border-[#5a5d63] shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1f2937] mb-3">Market Evolution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay ahead with a broker that evolves everyday in the dynamic forex market.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center mb-6 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1f2937] mb-3">Daily Rewards</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trade and win rewards everyday with exclusive promotional campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-[#9ea0a4] to-[#6b6e73] bg-clip-text text-transparent">Investmin IB Program?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Unlock a world of advantages by becoming an Introducing Broker with Investmin. Enjoy generous benefits and empower traders globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-[#1a1a1a] border border-[#2d2f33] hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Multi-tier up to 5 Levels</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  As an IB, you can build a network with up to 5 sub-levels of referral traders, maximizing your earning potential.
                </p>
              </div>
            </div>

            {/* Feature 2 - Featured */}
            <div className="flex gap-6 p-8 rounded-2xl bg-gradient-to-b from-[#1f2937] to-[#1a1a1a] border-2 border-[#5a5d63] shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Easy to Get Started</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No mountains of paperwork to sign or difficult IT implementation required. Quick and simple onboarding process.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-[#1a1a1a] border border-[#2d2f33] hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Personalized Service</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A dedicated personal IB account manager will be assigned to support you throughout your journey.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-[#1a1a1a] border border-[#2d2f33] hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Promotion Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Access frequent promotional events designed for IBs to attract and convert more clients effectively.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-[#1a1a1a] border border-[#2d2f33] hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Fast Payout Settlement</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Receive your commissions quickly with our streamlined payment processing system.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-6 p-8 rounded-2xl bg-[#1a1a1a] border border-[#2d2f33] hover:border-[#5a5d63] hover:shadow-xl transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-3">Real-time Reporting</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Access comprehensive analytics and real-time reports to track your performance and earnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#1f2937] mb-4">
              How to <span className="bg-gradient-to-r from-[#8b8d91] to-[#5a5d63] bg-clip-text text-transparent">Get Started</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Start your journey towards growth and success in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center text-4xl font-bold text-white mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1f2937] mb-4">Apply to Become an IB</h3>
              <p className="text-gray-600 leading-relaxed">
                Fill out our simple application form and submit your details. Our team will review and approve qualified candidates quickly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center text-4xl font-bold text-white mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1f2937] mb-4">Share Your Referral Link</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your unique referral link and marketing materials. Start attracting clients through your network and promotional channels.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] flex items-center justify-center text-4xl font-bold text-white mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1f2937] mb-4">Earn Daily Commissions</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch your earnings grow as your referred clients trade. Receive daily commission payouts directly to your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join Investmin's IB Program today and unlock unlimited earning potential. 
            Partner with an award-winning broker trusted by thousands worldwide.
          </p>

          <Link
            href="https://trade.investminuae.com/register"
            className="inline-flex items-center justify-center bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43] text-white font-bold text-base py-3.5 px-12 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Apply Now as an IB Partner
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default IntroducingBrokerPage;
