"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import AwardsShowcase from "@/components/sections/awards-showcase";

type Promotion = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  active: boolean;
};

const PROMOTIONS: Promotion[] = [
  {
    id: "vps-sponsorship",
    title: "VPS Sponsorship Program",
    excerpt: "Get low-latency VPS access to run your EAs 24/7 with sponsored credits for eligible traders.",
    image: "/vps-sponsorship-wide-image.png.webp",
    active: true,
  },
  {
    id: "spread-boost",
    title: "Spread Boost",
    excerpt: "Limited-time spread reductions across our major FX pairs for high-volume traders.",
    image: "/spread-boost.jpg.webp",
    active: true,
  },
  {
    id: "deposit-bonus",
    title: "Deposit Bonus",
    excerpt: "Boost your trading power with our tiered deposit bonus. T&Cs apply.",
    image: "/deposit-bonus.jpg.webp",
    active: false,
  },
];

export default function TradingPromotionsPage() {
  const [filter, setFilter] = useState<"all" | "active" | "past">("all");

  const filtered = PROMOTIONS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "active") return p.active;
    return !p.active;
  });

  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl text-slate-800 font-display font-extrabold">Trading Promotions</h1>
            <p className="mt-4 text-lg text-slate-600">Discover our latest promotions, offers and trader benefits. Check eligibility and full terms on each promotion.</p>

            <div className="mt-8 flex justify-center gap-3">
              <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>
                All
              </button>
              <button onClick={() => setFilter("active")} className={`px-4 py-2 rounded-md ${filter === "active" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>
                Active
              </button>
              <button onClick={() => setFilter("past")} className={`px-4 py-2 rounded-md ${filter === "past" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}>
                Past
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {filtered.map((promo) => (
                <article key={promo.id} className="border rounded-2xl overflow-hidden">
                  <div className="relative h-40 w-full">
                    <Image src={promo.image} alt={promo.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{promo.title}</h3>
                    <p className="mt-2 text-slate-600">{promo.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <Link href={`/trading-promotions/${promo.id}`} className="text-sm text-sky-600 hover:underline">View details</Link>
                      <span className={`px-2 py-1 text-xs rounded-full ${promo.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>{promo.active ? "Active" : "Ended"}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold">Why trade with us?</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Promotions are just one way we deliver value. Low spreads, fast execution, and excellent support back our offers.</p>
          </div>
        </section>

        <AwardsShowcase />
      </main>

      <Footer />
    </>
  );
}
