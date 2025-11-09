"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import AwardsShowcase from "@/components/sections/awards-showcase";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function TradingPromotionsPage() {
  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        {/* Hero - matching the provided screenshot */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl text-slate-900 font-display font-extrabold">The Ultimate Trading Choice</h1>
            <p className="mt-6 text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
              We created FXGT.com to reimagine the trader experience through our core principles of choice, access, and trust. We give you what you need, to be the trader you can.
            </p>
          </div>
        </section>

        {/* By the numbers - dark section */}
        <section className="bg-[#071011] text-white py-20" style={{ backgroundImage: `url('/newfxgt_com-by-the-numbers-1024x238.jpg.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold">FXGT.com By The Numbers</h2>
            <p className="mt-4 text-lg text-slate-200">Our history and conditions speak for themselves.</p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-5xl font-bold">2019</div>
                <div className="mt-2 text-sm text-slate-200">Founded</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold">Over 750K</div>
                <div className="mt-2 text-sm text-slate-200">Registered Users</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold">10+</div>
                <div className="mt-2 text-sm text-slate-200">Major Industry Awards</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold">24/7</div>
                <div className="mt-2 text-sm text-slate-200">Client Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantage / Four columns */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold">The FXGT.com Advantage</h2>
            <p className="mt-4 text-lg text-slate-600">What makes FXGT.com special? It’s a combination of factors.</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              <div className="flex flex-col items-center">
                <Image src="/a-broker-for-you.webp" alt="Dynamic Account Types" width={120} height={120} />
                <h3 className="mt-6 text-2xl font-semibold">Dynamic Account Types</h3>
                <p className="mt-3 text-slate-600 max-w-[260px]">Choose from our Mini, Standard, ECN, PRO, and Optimus accounts, each tailored for different trading styles.</p>
              </div>

              <div className="flex flex-col items-center">
                <Image src="/powerful-trading-platforms.webp" alt="Superior Trading Conditions" width={120} height={120} />
                <h3 className="mt-6 text-2xl font-semibold">Superior Trading Conditions</h3>
                <p className="mt-3 text-slate-600 max-w-[260px]">Benefit from accounts with zero commissions, spreads from 0.0 pips, and swap-free trading options.</p>
              </div>

              <div className="flex flex-col items-center">
                <Image src="/a-broker-for-you.webp" alt="Powerful Trading Platforms" width={120} height={120} />
                <h3 className="mt-6 text-2xl font-semibold">Powerful Trading Platforms</h3>
                <p className="mt-3 text-slate-600 max-w-[260px]">Trade on the industry-leading MT4 and MT5 platforms, enhanced with an advanced toolkit for analysis and execution.</p>
              </div>

              <div className="flex flex-col items-center">
                <Image src="/wallet.webp" alt="A Broker for You" width={120} height={120} />
                <h3 className="mt-6 text-2xl font-semibold">A Broker for You</h3>
                <p className="mt-3 text-slate-600 max-w-[260px]">Whether you are a beginner trading micro-lots or a professional executing complex strategies, we have an account for you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulated for your protection - background image + accordion */}
        <section className="py-20 bg-cover bg-center text-white" style={{ backgroundImage: `url('/Regulated-for-Your-Protection-1.jpg.webp')` }}>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-display font-extrabold">Regulated for Your Protection</h2>
              <p className="mt-4 text-lg text-white/80">We are a multi-regulated broker committed to the highest standards of security.</p>
            </div>

            <div className="mt-8 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">Global Licenses</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-white/90">Regulated by CySEC (Cyprus), FSCA (South Africa), FSA (Seychelles), and the VFSC (Vanuatu).</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">Fund Security</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-white/90">Client funds are segregated and held with trusted global banking partners. We maintain strict internal controls and periodic audits.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">Data Protection</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-white/90">We use industry-standard encryption and follow robust procedures to protect personal and financial data.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Awards / recognition */}
        <AwardsShowcase />
      </main>

      <Footer />
    </>
  );
}
