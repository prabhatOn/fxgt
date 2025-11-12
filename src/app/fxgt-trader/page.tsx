import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata = {
  title: "Investmin Trader — Investmin",
  description: "Access global markets from your browser with Investmin Trader. Powerful charts, advanced tools and fast execution.",
};

const features = [
  {
    title: "Account management",
    description:
      "Manage all your Investmin accounts in separate browser windows. Execute different market strategies at the same time.",
    icon: "/wallet.webp",
  },
  {
    title: "Auto-Close orders",
    description:
      "Stay in control of your trades by closing them at predefined P/L levels or equity percentages. Manage your risks with precision and protect your profits.",
    icon: "/online-investment-1-1-1png.webp",
  },
  {
    title: "Multi-chart, unlimited windows",
    description:
      "Add as many markets as you want in one charting window. Use as many chart windows as you need for the perfect trading setup.",
    icon: "/window.svg",
  },
  {
    title: "Top-level Security and Privacy",
    description:
      "Invest with peace of mind on a platform secured by industry leading protection, including end-to-end encryption.",
    icon: "/file.svg",
  },
];

const faqs = [
  { q: "Do I need an MT5 trading account to access Investmin Trader?", a: "No — Investmin Trader works with supported Investmin accounts. You can access it via your client portal and invest directly from the browser." },
  { q: "How do I login to the Investmin Trader platform?", a: "Open the Trader from your client portal and sign in with your Investmin credentials. Follow the prompts for account linking if required." },
  { q: "Are these charting tools free?", a: "Core charting and drawing tools are provided free; advanced premium indicators may require additional subscriptions depending on third-party terms." },
  { q: "What order types are available on Investmin Trader?", a: "Market, limit, stop, stop-limit, trailing stop and One-Click orders are available depending on instrument and account type." },
  { q: "Can I save my chart settings for future investment sessions?", a: "Yes — chart layouts, indicators and timeframes are saved for your account so you get your workspace back every time." },
];

export default function FxgtTraderPage() {
  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="relative h-[100vh] bg-black">
          <div className="absolute inset-0 z-0">
            <Image src="/FXGTtrader-banner-desktop.jpg.png" alt="FXGT Trader" fill className="object-cover object-right" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-lg text-white">
                <h1 className="text-4xl lg:text-5xl font-display font-bold">Investmin Trader</h1>
                <p className="mt-6 text-lg text-slate-200">
                  Access global markets from your web browser and invest with powerful features across a wide range of financial instruments.
                </p>

                <div className="mt-8">
                  <Link href="/client-portal/" className="inline-block">
                    <Button className="rounded-md bg-slate-300 text-slate-900 px-6 py-3 font-semibold hover:bg-slate-400">Start Investing</Button>
                  </Link>
                </div>
              </div>

              {/* empty right column used by background image */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* Trade confidently section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900">Invest confidently</h2>
            <p className="mt-3 text-slate-600">Experience full investment control with Investmin Trader</p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#e6f6f3]">
                      <Image src={f.icon} alt={f.title} width={36} height={36} />
                    </div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{f.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild className="rounded-md bg-slate-300 text-slate-900 px-6 py-3 font-semibold hover:bg-slate-400">
                <Link href="/client-portal/">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Trade Easily section with features and image */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-slate-900">Invest Easily</h3>
              <p className="mt-4 text-slate-600">Enjoy effortless market access and take advantage of our integration with TradingView's advanced charting capabilities.</p>

              <ul className="mt-8 space-y-6">
                <li>
                  <h4 className="font-semibold text-slate-900">Drawing tools:</h4>
                  <p className="text-slate-600">Enhance your technical analysis with over 90 chart drawing features.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-slate-900">Chart auto-save:</h4>
                  <p className="text-slate-600">Your last timeframe, indicators, and chart styles are loaded every time you get back to investing.</p>
                </li>
                <li>
                  <h4 className="font-semibold text-slate-900">Easy customization:</h4>
                  <p className="text-slate-600">Switch between timeframes, bar styles, chart colors, text, and gridlines for a personalized investment setup.</p>
                </li>
              </ul>

              <div className="mt-6 text-sm text-slate-500">*Powered by TradingView</div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-[520px]">
                <Image src="/Rectangle-21881.png.png" alt="trader monitor" width={920} height={560} className="object-contain rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl text-slate-900 font-semibold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-black">{f.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-black">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
