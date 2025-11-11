import React from 'react';

const videoUrl = "/vid1.mp4";

const resources = [
  {
    title: 'Investment Toolkit',
    description: 'Access advanced market indicators, real-time economic calendars, and investment calculators to optimize your portfolio decisions.',
  },
  {
    title: 'Market Insights',
    description: 'Stay informed with daily market updates, expert analysis, and comprehensive research from our team of financial professionals.',
  },
  {
    title: 'Practice Account',
    description: 'Perfect your investment strategies in a risk-free environment using virtual funds.',
  },
];

const TradingResources = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-12 md:py-16 lg:py-20">
  <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <h2 className="font-display text-[2rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#1a1a1a] lg:text-[2.5rem]">
                Make informed decisions: Investment choices backed by knowledge
              </h2>
              <p className="font-body mx-auto mt-4 max-w-[800px] text-lg leading-[1.6] text-[#666666]">
                Our investment resources are designed to enhance your performance at every stage of your journey – leverage them effectively.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-8">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-xl border border-[#e5e5e5] bg-white p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="mb-3 font-display text-2xl font-bold text-[#1a1a1a]">
                    {resource.title}
                  </h3>
                  <p className="font-body text-base leading-6 text-[#666666]">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-left lg:text-left">
              <a
                href="https://trade.investminuae.com/register"
                className="inline-block rounded-lg bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] px-8 py-4 font-semibold text-white transition-colors duration-300 hover:shadow-xl hover:scale-105 hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43]"
              >
                Register
              </a>
            </div>
          </div>

          {/* Right column: video showcase */}
          <div className="flex items-center justify-center self-center">
            <div className="w-full max-w-[620px] overflow-hidden">
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full ml-10 h-64 md:h-[360px] lg:h-[420px] object-cover bg-[#000]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingResources;