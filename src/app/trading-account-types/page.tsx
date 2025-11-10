"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

const cards = [
  {
    badge: "HOT PICK",
    title: "PREMIUM",
    subtitle: "Designed for active investors seeking maximum flexibility.",
    features: ["Spreads from 0.8 pips", "Leverage up to 1:2000", "Special promotions"],
    highlight: true,
  },
  {
    badge: null,
    title: "PROFESSIONAL",
    subtitle: "Balanced features for experienced investors.",
    features: ["Spreads from 0.5 pips", "Leverage up to 1:1000", "Commission-free options"],
  },
  {
    badge: null,
    title: "ELITE",
    subtitle: "Low spreads and direct market access for precision trading.",
    features: ["Spreads from 0.0 pips", "Leverage up to 1:1000", "Institutional-grade execution"],
  },
  {
    badge: null,
    title: "STANDARD",
    subtitle: "A versatile account for everyday investing.",
    features: ["Spreads from 1.3 pips", "Leverage up to 1:1000", "Flexible deposit options"],
  },
];

function Card({ card }: { card: any }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col shadow-sm">
      {card.badge && (
        <div className="inline-block bg-slate-200 text-slate-900 text-xs font-semibold px-3 py-1 rounded-md mb-4">
          {card.badge}
        </div>
      )}

      <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">{card.title}</h3>
      <p className="text-sm text-slate-600 mb-6">{card.subtitle}</p>

      <ul className="flex-1 space-y-4 mb-6">
        {card.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-slate-500 mt-1 flex-shrink-0" />
            <span className="text-sm text-slate-700">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <a href="https://trade.investminuae.com/register" className={`inline-block w-full text-center py-3 rounded-md ${card.highlight ? 'bg-slate-300 text-slate-900 hover:bg-slate-400' : 'border border-slate-300 text-slate-900 hover:bg-slate-100'}`}>
          Register
        </a>
      </div>
    </div>
  );
}

export default function TradingAccountTypesPage() {
  const [mainTab, setMainTab] = useState<'accounts' | 'copy'>('accounts');
  const [copyTab, setCopyTab] = useState<'copiers' | 'providers'>('copiers');

  return (
    <main className="bg-white min-h-screen">
      <NavigationHeader />
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900">An Investment Account for Every Goal</h1>
          <p className="mt-4 text-slate-600 max-w-[900px] mx-auto">Whatever your investment goals or experience level, choose an account tailored to your needs.</p>
        </div>

        {/* Main tabs (Account Types / Copy Trading) */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <button
            onClick={() => setMainTab('accounts')}
            className={`text-lg font-semibold pb-2 ${mainTab === 'accounts' ? 'border-b-4 border-slate-700 text-slate-900' : 'text-slate-500'}`}
          >
            Account Types
          </button>
          <button
            onClick={() => setMainTab('copy')}
            className={`text-lg pb-2 ${mainTab === 'copy' ? 'border-b-4 border-slate-700 text-slate-900' : 'text-slate-500'}`}
          >
            Copy Trading
          </button>
        </div>

        {/* Content area: show grid for Accounts, copy-specific UI for Copy Trading */}
        {mainTab === 'accounts' ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((c, idx) => (
                <Card key={idx} card={c} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="#" className="text-slate-600 underline">
                View detailed comparison
              </Link>
            </div>
          </>
        ) : (
          <div>
            {/* Copy Trading sub-tabs */}
            <div className="flex items-center gap-6 mb-8">
              <button
                onClick={() => setCopyTab('copiers')}
                className={`text-lg ${copyTab === 'copiers' ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}
              >
                Copiers
              </button>
              <button
                onClick={() => setCopyTab('providers')}
                className={`text-lg ${copyTab === 'providers' ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}
              >
                Strategy Providers
              </button>
            </div>

            {/* Copier Account card (visible when Copiers tab active) */}
            {copyTab === 'copiers' ? (
      <div className="max-w-[360px]">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
        <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">FOLLOWER ACCOUNT</h3>
        <p className="text-sm text-slate-600 mb-6">Designed for investors who prefer to follow proven strategies.<br/><span className="font-semibold text-slate-900">Competitive spreads and systematic risk controls</span></p>

                  <div className="space-y-6 mb-6">
                    <div>
                      <p className="text-sm text-slate-600">Leverage</p>
                      <p className="font-semibold text-slate-900">Adaptive to account size and strategy</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-600">Promotions</p>
                      <p className="font-semibold text-slate-900">Eligible for select offers</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-600">Swap-Free*</p>
                      <p className="font-semibold text-slate-900">Available on request</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-600">Stop Out</p>
                      <p className="font-semibold text-slate-900">Managed per strategy risk rules</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-slate-100 rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-slate-500" />
                      </div>
                      <p className="text-sm text-slate-700">Limit & Stop Levels</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a href="https://trade.investminuae.com/register" className={`inline-block w-full text-center py-3 rounded-md bg-slate-300 text-slate-900 hover:bg-slate-400`}>
                      Register
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-slate-600">Strategy Providers content placeholder</div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
