import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const metadata = {
  title: "Investmin App — Investmin",
  description:
    "Invest anywhere anytime with the Investmin mobile app. Get lightning-fast execution, market access and a polished, intuitive interface.",
};

export default function FxgtAppPage() {
  const features = [
    {
      title: "Effortless investing",
      description:
        "Invest with features designed to enhance your market precision and speed, including One-Click Trading, Auto-Close orders, Close All orders, and more.",
      icon: "/wallet.webp",
    },
    {
      title: "Intuitive interface",
      description:
        "Built for simplicity, made for every investor. Whether you're a beginner or already a pro, you'll find everything right where you need it.",
      icon: "/globe.svg",
    },
    {
      title: "Blazing fast",
      description:
        "Never miss a trade with our app's lightning-fast performance. Stay ahead with real-time updates, low latency, and order execution down to milliseconds.",
      icon: "/Trade-Without-Delay-Image.png.webp",
    },
    {
      title: "Top-level Security and Privacy",
      description:
        "Your data and trading information are protected by industry-leading security measures, including end-to-end encryption.",
      icon: "/file.svg",
    },
  ];

  const faqs = [
    {
      q: "Do I need an MT5 account to use the Investmin App?",
      a: "No — the Investmin App works with your Investmin account. You can open, fund and manage demo or live accounts directly inside the app.",
    },
    {
      q: "How do I login to the Investmin App?",
      a: "Use your Investmin account email and password. We also support two-factor authentication (2FA) for added security.",
    },
    {
      q: "Are these charting tools free?",
      a: "Yes — core charting and technical analysis tools are available free to all users inside the app.",
    },
    {
      q: "What advanced chart types can I access with Investmin?",
      a: "You can use multiple chart types such as Candlestick, OHLC, Heikin-Ashi, Renko and more, plus a range of technical indicators.",
    },
    {
      q: "Can I access real-time market data on Investmin?",
      a: "Yes — the app provides real-time price feeds for supported instruments so you can invest with up-to-date market information.",
    },
    {
      q: "How secure is my account and personal information on the Investmin App?",
      a: "Security is a priority — we use industry-standard encryption, secure servers and optional 2FA to protect your account and personal data.",
    },
    {
      q: "What payment methods can I use to fund my Investmin App account?",
      a: "We support a variety of payment options including bank transfer, debit/credit cards, and popular e-wallets. Available methods may vary by region.",
    },
    {
      q: "Can I invest in my language with the Investmin App?",
      a: "The app supports multiple languages — check the settings to select your preferred language.",
    },
    {
      q: "What happens if I lose internet connection while investing on the Investmin App?",
      a: "If your connection drops, the app will attempt to reconnect. Orders may fail or be delayed — we recommend using stop-loss orders and enabling server-side protections where available.",
    },
    {
      q: "Can I benefit from Investmin's bonuses and rewards with the Mobile App?",
      a: "Yes — eligible promotions, bonuses and rewards can be accessed and managed from the app, subject to the promotion terms and your jurisdiction.",
    },
  ];

  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        {/* Hero (with full-bleed background image) */}
        <section className="relative py-20 h-[100vh]">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image src="/fxgtapp-banner-image.jpg.webp" alt="FXGT banner" fill className="object-cover object-center" priority />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-display font-bold text-white">Investmin App: <br/>Invest Anywhere, Anytime.</h1>
                <p className="mt-6 text-lg text-slate-200 max-w-2xl">
                  Experience ultimate investment freedom on a mobile app with lightning-fast execution, broad market access, and an intuitive interface.
                </p>

                {/* Download card — QR + badges (matches provided image) */}
                <div className="mt-8">
                  <div className="inline-flex items-center gap-6 rounded-2xl bg-black/60 border border-white/10 p-4 md:p-6 shadow-lg">
                    

                    <div className="flex items-center gap-4">
                      <a href="#" aria-label="Google Play" className="block">
                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Playstore-badge-24.webp" alt="Google Play" width={160} height={48} className="filter invert brightness-200" />
                      </a>
                      <a href="#" aria-label="App Store" className="block">
                        <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Appstore-badge-25.webp" alt="App Store" width={160} height={48} className="filter invert brightness-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl text-slate-700 font-semibold">Fast, secure, and friendly</h2>
            <p className="text-center mt-2 text-slate-600">Enjoy investing on the GO with a powerful Mobile App</p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="rounded-xl bg-white p-6 border border-slate-100 shadow-sm flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#e6f6f3]">
                    <Image src={f.icon} alt={f.title} width={36} height={36} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discover assistant */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl text-slate-800 font-semibold">Discover your personal investment assistant</h3>
              <p className="mt-4 text-slate-600">Invest across 500+ markets with an app that assists you with:</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-slate-400 text-white flex items-center justify-center">✓</div>
                  <div>
                    <strong>Customizable Alerts:</strong>
                    <div className="text-slate-600">Set price and market alerts to invest exactly when you need to.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-slate-400 text-white flex items-center justify-center">✓</div>
                  <div>
                    <strong>Multi-Account Management:</strong>
                    <div className="text-slate-600">Manage multiple accounts with ease, switching between them in just a few taps.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-slate-400 text-white flex items-center justify-center">✓</div>
                  <div>
                    <strong>24/7 Support:</strong>
                    <div className="text-slate-600">Stay connected with round-the-clock expert support from a friendly team.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-[320px] sm:w-[380px] lg:w-[420px]">
                <Image src="/mobile-app-1.webp" alt="FXGT mobile app" width={420} height={840} className="object-contain rounded-3xl shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA + System requirements */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-2xl bg-black text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl font-semibold">Start Investing Today</h4>
                <p className="mt-2 text-slate-300">Download the Investmin app</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-2">
                  <a href="#">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Appstore-badge-25.webp" alt="App Store" width={120} height={36} className="filter invert brightness-200" />
                  </a>
                  <a href="#">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Playstore-badge-24.webp" alt="Google Play" width={120} height={36} className="filter invert brightness-200" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 border border-slate-100">
              <h5 className="text-lg font-semibold">System requirements</h5>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h6 className="text-slate-700 font-semibold">iOS</h6>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-600">
                    <div>Phone</div>
                    <div>iPhone 11 or newer</div>
                    <div>Software</div>
                    <div>iOS version 12 or newer</div>
                  </div>
                </div>
                <div>
                  <h6 className="text-slate-700 font-semibold">Android</h6>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-600">
                    <div>Phone</div>
                    <div>at least 4GB of RAM</div>
                    <div>Software</div>
                    <div>Version 11 Red Velvet Cake or newer</div>
                  </div>
                </div>
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
