"use client";

import React, { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

// Adjust this import path to where you saved your data file
import {
  sections,
  accountTypes,
  mockInstrumentsBySection,
  Instrument,
} from "@/lib/market-data";

export default function MarketsPage() {
  const [active, setActive] = useState<string>("popular");
  const [account, setAccount] = useState<string>(accountTypes[0].id);
  const [query, setQuery] = useState<string>("");

  const instruments = useMemo(() => {
    const list = mockInstrumentsBySection[active] || [];
    if (!query) return list;
    return list.filter((i) =>
      i.symbol.toLowerCase().includes(query.toLowerCase())
    );
  }, [active, query]);

  // Sync active tab from URL hash (so links like /markets#forex open with that tab)
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.some((s: any) => s.id === hash)) setActive(hash);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const activeAccount =
    accountTypes.find((a: any) => a.id === account) || accountTypes[0];

  const handleClick = (id: string) => {
    setActive(id);
    if (typeof window !== "undefined" && history && history.pushState) {
      history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-[#0f1724]">
        {/* This container centers everything */}
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
          <h1 className="font-display text-4xl font-extrabold text-black mb-2 text-center">
            Discover Global Market Opportunities
          </h1>
          <p className="text-lg text-[#6b7178] mb-8 text-center">
            Trade Hundreds of CFD Stocks, Forex, and Commodities on One Unified
            Account.
          </p>

          {/* Sticky Tabs + Controls Container (NO full-bleed) */}
          <div className="bg-white border-b border-gray-200 sticky top-16 z-20">
            {/* Tabs Nav */}
            <nav className="flex gap-6 overflow-x-auto pt-4 px-2 md:px-0">
              {sections.map((s: any) => (
                <button
                  key={s.id}
                  onClick={() => handleClick(s.id)}
                  className={`shrink-0 text-base pb-3 border-b-2 ${
                    active === s.id
                      ? "border-[#0f1724] font-semibold text-slate-900"
                      : "border-transparent text-[#6b6b6b] hover:text-slate-800"
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </nav>

            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 py-4">
              <label
                htmlFor="account-select"
                className="text-sm text-[#6b7178] shrink-0"
              >
                Select account type
              </label>

              {/* Styled Select Dropdown */}
              <div className="relative">
                <select
                  id="account-select"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  className="appearance-none w-full md:w-auto rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                >
                  {accountTypes.map((a: any) => (
                    <option key={a.id} value={a.id}>
                      {a.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Styled Search Input */}
              <div className="relative md:ml-4 w-full md:w-auto">
                <input
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full md:w-auto outline-none text-sm bg-slate-100 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Table (NO full-bleed) */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead className="text-sm text-[#6b7178] border-t border-b border-gray-200 bg-white">
                <tr>
                  <th className="py-4 px-6 font-medium">Symbol</th>
                  <th className="py-4 px-6 font-medium">
                    Min. Spreads (Points)
                  </th>
                  <th className="py-4 px-6 font-medium">Contract Size</th>
                  <th className="py-4 px-6 font-medium">Maximum Leverage</th>
                  <th className="py-4 px-6 font-medium">Commission</th>
                  <th className="py-4 px-6 font-medium">Min/Max Volume</th>
                  <th className="py-4 px-6 font-medium">
                    Swap-free days allowance
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-900">
                {instruments.map((ins: Instrument) => (
                  <tr
                    key={ins.symbol}
                    className="border-b border-gray-100 hover:bg-teal-50 transition-colors duration-150 cursor-default"
                  >
                    <td className="py-4 px-6 font-semibold">{ins.symbol}</td>
                    <td className="py-4 px-6">{ins.spread}</td>
                    <td className="py-4 px-6">{ins.contractSize}</td>
                    <td className="py-4 px-6">
                      {ins.leverage[account as keyof typeof ins.leverage]}
                    </td>
                    <td className="py-4 px-6">{activeAccount.commission}</td>
                    <td className="py-4 px-6">{ins.volumeMinMax}</td>
                    <td className="py-4 px-6">{ins.swapFree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom disclaimers / notes (left aligned, smaller) */}
          <div className="mt-10 max-w-[580px] text-xs text-[#6b7178] font-[4px] leading-6 space-y-2 text-left">
            <p>
              All trading conditions displayed are based on pricing provided by
              MT5. Prices may vary depending on the country & trading platform
              being used.
            </p>
            <p>All of the above instruments are based on Market Execution.</p>
            <p>
              Spreads are calculated based on the exact difference between the
              buy and sell price.
            </p>
            <p>
              You can find all the details about dynamic leverage{" "}
              <a className="underline text-[#0f6873]" href="#">
                here
              </a>
              .
            </p>
            <p>
              You can find all the details about all Instruments’ Trading
              Sessions{" "}
              <a className="underline text-[#0f6873]" href="#">
                here
              </a>
              .
            </p>
            <p>
              Learn how we calculate our swap charges{" "}
              <a className="underline text-[#0f6873]" href="#">
                here
              </a>
              .
            </p>
            <p>
              Find out when exactly swap charges take place{" "}
              <a className="underline text-[#0f6873]" href="#">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}