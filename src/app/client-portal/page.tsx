import Image from "next/image";
import Link from "next/link";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Client Portal — Investmin",
  description: "Total control of your money, all in one place — manage eWallets, accounts, deposits and withdrawals from the Investmin Client Portal.",
};

export default function ClientPortalPage() {
  const features = [
    {
      title: "eWallets",
      description:
        "Store and manage multiple currencies across different secure eWallets. Enjoy real-time visibility and robust security.",
    },
    {
      title: "Accounts",
      description:
        "Open demo or live investment accounts in multiple currencies. Enjoy flexibility and convenience.",
    },
    {
      title: "Deposits",
      description:
        "Fund your Investment Account instantly, anytime. No hassle, no waiting, no fees.",
    },
    {
      title: "Withdrawals",
      description:
        "Withdraw funds 24/7 from any Investment Account or eWallet.",
    },
  ];

  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        {/* Hero / Intro */}
      

        {/* Features row */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-display font-bold text-slate-900">Client Portal</h2>
            <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto">Total control of your money, all in one place</p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              {features.map((f, idx) => {
                const imgs = [
                  "/online-investment-1-2-1.png.webp",
                  "/online-investment-1-3.png.webp",
                  "/online-investment-3.png.webp",
                  "/online-investment-4.png.webp",
                ];
                return (
                  <div key={idx} className="px-4">
                    <div className="flex justify-center mb-6">
                      <div className="w-[120px] h-[120px] flex items-center justify-center">
                        <Image src={imgs[idx]} alt={f.title} width={120} height={120} className="object-contain" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-semibold text-slate-900 text-center mb-4">{f.title}</h3>

                    <p className="mt-0 text-base text-slate-600 max-w-[320px] mx-auto leading-relaxed">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
          <section className="relative h-[140vh] text-white overflow-hidden">
          {/* Full-bleed background image (client_portal.jpg.webp) with dark gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image src="/client_portal.jpg.webp" alt="Client portal background" fill className="object-cover object-right" priority />
          </div>
          {/* dark overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-black/70 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/60 lg:to-transparent z-10" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-24">
             

              {/* keep column spacing on large screens; the background image now supplies the right-side visual */}
              <div className="hidden lg:block" />
            </div>
          </div>

          {/* Overlay decorative cards on the left to match the screenshot */}
          <div className="absolute left-6 top-44 lg:top-36 transform -translate-y-0 flex flex-col gap-6 w-[86%] max-w-[520px] lg:max-w-[580px] lg:left-24 pointer-events-none z-20">
            <div className="rounded-2xl bg-gradient-to-r from-slate-900/40 to-slate-800/20 backdrop-blur-md border border-white/10 px-8 py-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-slate-300">Manage Your Funds</h3>
              <ul className="mt-4 text-white/80 space-y-4">
                <li>Deposit multiple currencies directly into your Investment Account</li>
                <li>Instantly view all your balances</li>
                <li>Withdraw funds directly from your eWallets or Investment Account</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-slate-900/30 to-slate-800/10 backdrop-blur-md border border-white/8 px-8 py-6 shadow-lg flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-white">Manage Your Investment Accounts</h4>
                <p className="text-white/70 mt-2">Open and manage demo or live accounts with ease.</p>
              </div>
              <div className="text-white/90 text-2xl">➜</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-slate-900/30 to-slate-800/10 backdrop-blur-md border border-white/8 px-8 py-6 shadow-lg flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-white">Withdraw with Ease</h4>
                <p className="text-white/70 mt-2">Fast, reliable withdrawals when you need them.</p>
              </div>
              <div className="text-white/90 text-2xl">➜</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-slate-900/30 to-slate-800/10 backdrop-blur-md border border-white/8 px-8 py-6 shadow-lg flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-white">Track Every Transaction</h4>
                <p className="text-white/70 mt-2">Complete transaction history for full transparency.</p>
              </div>
              <div className="text-white/90 text-2xl">➜</div>
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">Ready to manage your funds?</h3>
              <p className="mt-3 text-slate-600">Sign in to your Investmin client portal to view balances, deposit, withdraw and manage accounts.</p>

              <div className="mt-6 flex gap-4">
                <a href="https://trade.investminuae.com/login" className="inline-block rounded-md bg-slate-300 px-6 py-3 text-slate-900 font-semibold hover:bg-slate-400">Log In</a>
                <a href="https://trade.investminuae.com/register" className="inline-block rounded-md border border-slate-200 px-6 py-3 text-slate-800 font-semibold hover:bg-slate-50">Register</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
