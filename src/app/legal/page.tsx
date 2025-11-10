"use client";

import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Link from "next/link";

export default function LegalPage() {
  return (
    <>
      <NavigationHeader />

      <main className="bg-white text-slate-900">
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl text-slate-800 font-display font-extrabold">Legal</h1>
            <p className="mt-4 text-lg text-slate-600">Terms & Conditions and our Privacy Policy. Use the links below to jump to the section you need.</p>

            <div className="mt-8 flex justify-center gap-3">
              <a href="#terms" className="px-4 py-2 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200">Terms &amp; Conditions</a>
              <a href="#privacy" className="px-4 py-2 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200">Privacy Policy</a>
            </div>
          </div>
        </section>

        <section id="terms" className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl text-slate-800 font-semibold">Terms &amp; Conditions</h2>
            <p className="mt-4 text-slate-700">These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the services provided by FXGT (the &quot;Company&quot;). By accessing or using our website, products, or services you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">1. Eligibility</h3>
            <p className="text-slate-700">You must be 18 years or older and have the legal capacity to enter into binding contracts under applicable law to open and operate an account with the Company.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">2. Account Registration</h3>
            <p className="text-slate-700">When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">3. Services and Fees</h3>
            <p className="text-slate-700">The Company provides brokerage and related services. Fees, charges, and other terms for specific products are set out on the website and may change from time to time. You agree to review these terms before using any service.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">4. Risk Disclosure</h3>
            <p className="text-slate-700">Trading financial instruments involves risk and is not suitable for all investors. Past performance is not indicative of future results. You should carefully consider your risk tolerance and seek independent financial advice where necessary.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">5. Termination</h3>
            <p className="text-slate-700">The Company may suspend or terminate your account if you breach these Terms, where required by law, or for other legitimate reasons. On termination, outstanding obligations remain payable.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">6. Governing Law</h3>
            <p className="text-slate-700">These Terms are governed by the laws applicable to the entity offering services to you, as disclosed during account registration. Disputes will be resolved according to those laws and any dispute resolution procedures described in the account documentation.</p>

            <p className="mt-6 text-sm text-slate-500">This summary is provided for convenience and does not replace the full Terms &amp; Conditions which govern your use of the Company services. For specific legal advice, consult a qualified professional.</p>
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl text-slate-800 font-semibold">Privacy Policy</h2>
            <p className="mt-4 text-slate-700">FXGT is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal data.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">1. Personal Data We Collect</h3>
            <p className="text-slate-700">We collect information you provide during registration and account management, such as name, email, address, identity verification documents, transaction history, and other information necessary to provide our services and comply with legal obligations.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">2. How We Use Your Data</h3>
            <p className="text-slate-700">We use your data to provide and improve services, process transactions, verify identity, comply with regulatory requirements (including AML/KYC), and communicate important information about your account.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">3. Sharing and Disclosure</h3>
            <p className="text-slate-700">We may share data with service providers, payment processors, regulators, and law enforcement where required. We do not sell personal data to third parties for marketing purposes.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">4. Security</h3>
            <p className="text-slate-700">We use appropriate technical and organizational measures to protect personal data. However, no system is entirely secure; you should take steps to protect your account credentials and devices.</p>

            <h3 className="mt-6 text-slate-800 font-semibold">5. Your Rights</h3>
            <p className="text-slate-700">Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights contact us at the support address provided on our website.</p>

            <p className="mt-6 text-sm text-slate-500">For full details about our processing of your personal data and how to exercise your rights, please contact support or review the full policy provided here.</p>

            <div className="mt-6">
              <Link href="/contact/" className="text-[#0f766e] underline">Contact our Data Protection Officer</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
