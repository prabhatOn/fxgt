import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata = {
  title: "Leverage & Margin — Investmin",
  description: "Learn about leverage types, equity & volume leverage and margin requirements at Investmin.",
};

export default function LeveragePage() {
  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        {/* Hero / Leverage Types */}
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-slate-900 text-5xl md:text-6xl font-bold">Leverage & Margin</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">Flexible leverage options up to 1:5000 — choose the exposure that fits your strategy.</p>

            <h3 className="mt-8 text-2xl text-slate-600 font-medium">Manage exposure with smarter margin and leverage</h3>

            <p className="mt-4 text-slate-600 max-w-2xl">
              Investmin provides flexible leverage models including <strong>equity-based</strong> leverage. These settings
              adjust allowed exposure depending on account equity and influence the margin required for opened positions.
              Use leverage responsibly — it can magnify gains and losses.
            </p>

            <div className="mt-8">
              <a href="https://trade.investminuae.com/register" className="inline-block rounded-md bg-slate-300 text-slate-900 px-6 py-3 font-semibold hover:bg-slate-400">
                Open account
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-[420px] h-[320px] relative">
              <Image
                src="/wallet.webp"
                alt="Leverage Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Dark band - Equity Leverage */}
        <section className="bg-[#0f0f0f] text-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-4xl font-display font-bold text-center">Equity Leverage</h2>

            <div className="mt-10 bg-slate-800/60 rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm">
                  <thead>
                    <tr className="text-left text-slate-300">
                      <th className="px-6 py-4">Equity</th>
                      <th className="px-6 py-4">0-1000</th>
                      <th className="px-6 py-4">1000-3000</th>
                      <th className="px-6 py-4">3000-5000</th>
                      <th className="px-6 py-4">5000-10000</th>
                      <th className="px-6 py-4">10000-30000</th>
                      <th className="px-6 py-4">30000-100000</th>
                      <th className="px-6 py-4">&gt;100000</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-100">
                    {[
                      ["PREMIUM Fx Majors/Minors", "1:5000", "1:2000", "1:1000", "1:500", "1:200", "1:100", "1:50"],
                      ["PREMIUM Precious Metals", "", "1:2000", "1:1000", "1:500", "1:200", "1:100", "1:50"],
                      ["STANDARD Fx Majors/Minors & Precious Metals", "", "", "1:1000", "1:500", "1:200", "1:100", "1:50"],
                      ["STARTER Fx Majors/Minors & Precious Metals", "", "", "1:1000", "1:500", "1:200", "1:100", "1:50"],
                      ["PROFESSIONAL Fx Majors/Minors & Precious Metals", "", "", "1:1000", "1:500", "1:200", "1:100", "1:50"],
                      ["ELITE Fx Majors/Minors & Precious Metals", "", "", "1:1000", "1:500", "1:200", "1:100", "1:50"],
                      ["Equity Indices and Energies", "", "", "", "1:100", "1:50", "1:20", "1:10"],
                      ["Stocks", "", "", "", "1:50", "1:20", "1:10", "1:5"],
                      ["CHF pairs and Exotics", "", "", "1:500", "", "1:200", "1:100", "1:50"],
                      ["TRY pairs", "", "", "", "", "", "", "1:50"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-slate-900/30" : "bg-transparent"}>
                        {row.map((c, j) => (
                          <td key={j} className="px-6 py-4 border-t border-slate-700">
                            {c || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

                <ul className="mt-6 text-slate-300 list-disc list-inside space-y-2">
                <li>To access leverage up to 1:5000, open a Premium account and meet the eligibility requirements.</li>
                <li>The maximum leverage allowed on Metals and FX Pairs is set to 1:200 on new positions opened between Fridays at 22:00 until Monday to 02:00 (GMT+3).</li>
                <li>The above leverage levels do not apply to cryptocurrencies.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Volume Leverage */}
        <section className="bg-black text-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-4xl font-display font-bold text-center">Volume Leverage</h2>

            <div className="mt-10 bg-slate-800/60 rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full table-auto text-left text-slate-100">
                  <thead>
                    <tr className="text-teal-400">
                      <th className="px-6 py-4">Tiers</th>
                      <th className="px-6 py-4">Volume (USD)</th>
                      <th className="px-6 py-4">Leverage</th>
                      <th className="px-6 py-4">Margin %</th>
                      <th className="px-6 py-4">Max Limit per Symbol (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Tier 1", "0 – 150,000", "1:50", "2", "1,000,000"],
                      ["Tier 2", "150,000– 400,000", "1:25", "4", "1,000,000"],
                      ["Tier 3", ">400,000", "1:10", "10", "1,000,000"],
                    ].map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "border-b border-slate-700" : "border-b border-slate-800"}>
                        {r.map((c, j) => (
                          <td key={j} className={`px-6 py-6 ${j === 0 ? 'font-semibold' : ''}`}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <a href="https://trade.investminuae.com/register" className="inline-block rounded-md bg-slate-300 text-slate-900 px-8 py-3 font-semibold hover:bg-slate-400">
                  Register
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-slate-900">
            <h2 className="text-3xl font-display text-slate-900 font-bold">Frequently Asked Questions</h2>

            <div className="mt-8">
              <Accordion type="single" collapsible>
                <AccordionItem value="q1">
                  <AccordionTrigger className="text-slate-900">What are the requirements to unlock leverage up to 1:5000?</AccordionTrigger>
                  <AccordionContent className="text-slate-900">
                    Complete the required trading volume and other account verification steps. Contact support for details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2">
                  <AccordionTrigger className="text-slate-900">Does the leverage change between Friday and Monday?</AccordionTrigger>
                  <AccordionContent className="text-slate-900">
                    Yes — leverage on some instruments is reduced over weekends and around major market events.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3">
                  <AccordionTrigger className="text-slate-900">Does equity-based leverage change during key market events?</AccordionTrigger>
                  <AccordionContent className="text-slate-900">
                    Leverage can be adjusted around major macro events such as CPI releases, central bank decisions and other high-volatility events.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
