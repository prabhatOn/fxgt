"use client";

import Image from "next/image";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export default function SecurityOfFundsPage() {
  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        {/* Hero with image background and overlay labels */}
        <section className="relative bg-black h-[90vh] text-white py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-100"
            style={{ backgroundImage: `url('/security-of-funds-banner.jpg.webp')` }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold">Secure Your Funds with Confidence</h1>
            <p className="mt-4 text-lg text-white/80">Safeguarding your investments</p>

            {/* Visual with floating labels - represented as decorative boxes over image */}
            <div className="mt-12 relative">

              {/* labels */}
              <div className="absolute left-6 top-24 bg-white/8 text-white/95 backdrop-blur-sm px-6 py-4 rounded shadow-md text-lg">Secure network configurations</div>
              <div className="absolute right-6 top-24 bg-white/8 text-white/95 backdrop-blur-sm px-6 py-4 rounded shadow-md text-lg">Regular security testing & assessments</div>

              <div className="absolute left-12 top-64 bg-white/8 text-white/95 backdrop-blur-sm px-6 py-3 rounded shadow-md">Access controls</div>
              <div className="absolute right-12 top-64 bg-white/8 text-white/95 backdrop-blur-sm px-6 py-3 rounded shadow-md">Compliance validations</div>

              <div className="absolute left-28 bottom-12 bg-white/8 text-white/95 backdrop-blur-sm px-6 py-3 rounded shadow-md">Encryption of data in transit</div>
              <div className="absolute right-28 bottom-12 bg-white/8 text-white/95 backdrop-blur-sm px-6 py-3 rounded shadow-md">Security awareness training</div>
            </div>
          </div>
        </section>

        {/* PCI section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            {/* Simple PCI icon */}
            <div className="mx-auto w-28 h-28 flex items-center justify-center mb-6">
              <svg viewBox="0 0 64 64" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" rx="8" fill="#F3F4F6" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#111827">PCI</text>
              </svg>
            </div>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto">FXGT.com is PCI DSS certified, meaning we adhere to a strict set of security requirements, designed to protect cardholder data and prevent unauthorized access.</p>
          </div>
        </section>

        {/* Grid of security features */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Segregated Accounts</h3>
                <p className="text-slate-600">We keep your funds entirely separate from our own operational funds in various top-tier banking institutions. We won’t ever use any of your money for either our own use or any other investment, ensuring the protection of your funds at all times.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Data Security</h3>
                <p className="text-slate-600">Our advanced encryption technology means we can ensure the maximum security of your data. Your details, trading profile and activities are stored on secure servers, protected by strong firewalls, while data transmission is encrypted to prevent data theft and unauthorized third-party access.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Tier 1 Banks</h3>
                <p className="text-slate-600">We continue to establish strong partnerships with Tier 1 Banks, to ensure that client funds are deposited in creditworthy and highly rated financial institutions. These partnerships allow our business to operate with the highest possible standards.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Negative Balance Protection</h3>
                <p className="text-slate-600">We offer negative balance protection, which means you cannot lose more than what you have deposited into your live trading accounts. Therefore, your account balance cannot fall into deficit.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Risk Management</h3>
                <p className="text-slate-600">We have put in place a range of policies and procedures to ensure that your trading activities are safeguarded against certain risks. Your funds are also kept in Tier 1 financial institutions and are constantly monitored, to effectively identify and limit potential risks.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Capital & Reserves</h3>
                <p className="text-slate-600">We maintain a capital adequacy ratio of 40%, which is four times more than the typical capital-to-risk weighted exposure ratio required by reputable regulators. This is much higher than most of our competitors, meaning that we offer one of the highest levels of protection of clients’ funds found anywhere in the industry.</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Regulation</h3>
                <p className="text-slate-600">We are a fully regulated broker, adhering to all regulatory standards and a high level of capital adequacy ratio at all times.</p>

                <div className="mt-4 text-sm text-slate-500">
                  CT Global Ltd is a registered company in Seychelles, with Registration Number 8421720-1. It is regulated by the Seychelles Financial Services Authority (SFSA) under the Securities Dealer's License Number SD019.

                  <br /><br />
                  CT IO Markets (PTY) Ltd is a registered company in South Africa, with Registration Number 2015/059344/07. It is regulated by the South African Financial Services Conduct Authority (FSCA) under the Financial Services Provider (FSP) License Number 48896.

                  <br /><br />
                  CT Global Markets Ltd is a registered company in Vanuatu licensed and regulated by the Vanuatu Financial Services Commission (VFSC) under the Principal's License Number 700601 and has its registered address at Law Partners House, Kumul Highway, Port Vila, Vanuatu.
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">Liability Insurance</h3>
                <p className="text-slate-600">Our clients are insured up to a total of €1,000,000. This insurance includes market coverage to secure liabilities against clients and other third parties against: errors, omissions, negligence, or other risks that may result in financial loss.</p>
                <p className="mt-4 text-sm"><a href="#" className="text-[#0f766e] underline">View Certificate</a></p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
