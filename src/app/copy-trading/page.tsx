import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import CopyTradingSection from "@/components/sections/copy-trading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata = {
  title: "Copy Trading — Investmin",
  description: "Copy Trading — mirror top investors or share your strategies with Investmin's Copy Trading platform.",
};

export default function CopyTradingPage() {
  const faqs = [
    "What is copy trading and who can use it?",
    "How many trading accounts can a Strategy Provider and a Copier have?",
    "How many strategies can I create as a Strategy Provider, and how many can I follow as a Copier?",
    "Can I switch between being a Copier and a Strategy Provider?",
    "Why can’t I uncopy a strategy when I have open positions?",
    "Why can’t I see the option to open existing trades when copying a strategy provider who has open trades?",
    "As a Copier, can I manually manage the trades in my account?",
    "Can I use my existing trading account to become a Strategy Provider?",
    "Can Strategy Providers delete a strategy themselves?",
    "How are performance fees calculated and paid?",
    "As a Strategy Provider, can I change the performance fee percentage for my strategy?",
    "What is the payout account that I see?",
    "What risk controls are available for Copiers?",
    "Are there any restrictions I should be aware of?",
    "Can a Copier be excluded from a strategy?",
    "How does “Equity Proportion” work when copying a trade?",
    "What are the leverage rules for Strategy Providers and Copiers?",
    "Which instruments use equity-based leverage tiers?",
    "Which instruments use volume-based leverage tiers?",
    "Does leverage change at specific times?",
    "Are there any FX pairs with unique leverage rules?",
    "What account types can Strategy Provider open?",
    "What account type can a Copier open?",
    "Is swap free available when copy trading?",
  ];

  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-24">
              <div className="z-10">
                <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">Smart Copy Investing</h1>
                <h2 className="mt-4 text-3xl md:text-4xl font-medium text-white/95">Empowering Every Investor</h2>
                <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
                  Seamlessly connect, follow proven investors, or share your strategies — experience collaborative investing with real-time results.
                </p>

                <div className="mt-10">
                  <a href="https://trade.investminuae.com/register" className="inline-block rounded-md bg-slate-300 px-8 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-400">
                    Start Copy Investing
                  </a>
                </div>
              </div>

              <div className="order-first lg:order-last flex justify-center lg:justify-end">
                <div className="w-full max-w-[820px]">
                  <div className="relative h-[380px] sm:h-[480px] lg:h-[520px]">
                    <Image
                      src="/Hero-Banner_1920x800_2.jpg.webp"
                      alt="Copy Trading Hero"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* subtle overlay gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </section>

        {/* Features grid (cards) - reuse the section component beneath for details */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3 className="text-center text-3xl font-display font-bold text-slate-900">Why Choose Copy Investing?</h3>
            <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">Discover a smarter, faster way to invest — whether you're following proven strategies or sharing your own success.</p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 h-12 w-12">
                  {/* decorative icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700" xmlns="http://www.w3.org/2000/svg"><path d="M6 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 8h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-xl font-display font-bold mb-2">Real-Time Synchronization</h4>
                <p className="text-sm text-slate-600">Instantly mirror investments and strategies as they happen, with no delays.</p>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 h-12 w-12">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700"><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-xl font-display font-bold mb-2">Beginner-Friendly Platform</h4>
                <p className="text-sm text-slate-600">Start your investment journey with confidence, even if you're new or short on time.</p>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 h-12 w-12">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-xl font-display font-bold mb-2">Flexible Roles, Maximum Control</h4>
                <p className="text-sm text-slate-600">Switch between Follower and Strategy Provider, or manage both — tailor your investment journey.</p>
              </div>

              <div className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 h-12 w-12">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-700"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h4 className="text-xl font-display font-bold mb-2">Performance Visibility</h4>
                <p className="text-sm text-slate-600">Access detailed strategy histories and set risk controls for complete peace of mind.</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href="https://trade.investminuae.com/register" className="inline-block rounded-lg bg-slate-300 px-8 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-400">
                Start Copy Investing
              </a>
            </div>
          </div>
        </section>

        {/* Details / feature section (more visual and list) */}
        <CopyTradingSection />

        {/* FAQ */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-slate-900">
            <h2 className="text-3xl font-display text-slate-900 font-bold">Frequently Asked Questions</h2>

            <div className="mt-8">
              <Accordion type="single" collapsible>
                {faqs.map((q, i) => (
                  <AccordionItem key={q} value={`q${i}`}>
                    <AccordionTrigger className="text-slate-900">{q}</AccordionTrigger>
                    <AccordionContent className="text-slate-700">We provide detailed guidance in the client portal and support team can answer account-specific questions. For this demo site, expand this item to add exact copy trading policy or contact support for full details.</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
