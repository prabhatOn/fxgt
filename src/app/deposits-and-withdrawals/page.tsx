import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import NavigationHeader from '@/components/sections/navigation-header';
import Footer from '@/components/sections/footer';

export const metadata = {
  title: 'Deposits & Withdrawals — Investmin',
  description: 'Experience fast, secure, and flexible transactions designed for the modern investor.',
};

export default function DepositsAndWithdrawalsPage() {
  return (
    <main className="bg-white">
      <NavigationHeader />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-8 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900">Deposits & Withdrawals</h1>
  <p className="mt-4 text-lg text-slate-600 max-w-[900px] mx-auto">Experience fast, secure, and flexible transactions designed for the modern investor.</p>
      </section>

      {/* Dark feature band: phone image + features */}
      <section className="bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            {/* phone mockup image - using same supabase host used elsewhere as placeholder */}
            <div className="w-[420px] md:w-[420px] lg:w-[520px] -translate-x-8 lg:translate-x-0">
              <Image
                src="/Trade-Without-Delay-Image.png.webp"
                alt="App mockup"
                width={520}
                height={720}
                className="rounded-2xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display font-extrabold text-slate-300 text-3xl lg:text-4xl mb-6">Fund Without Delay</h2>
            <p className="text-slate-300 mb-8 max-w-[520px]">We've engineered our funding process for speed and convenience, so you can focus on your investments.</p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-900/20 flex items-center justify-center">
                  <Check className="text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 text-lg">Instant Deposits</h4>
                  <p className="text-slate-300">Fund your account instantly with a wide range of payment methods and start investing without delays.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-900/20 flex items-center justify-center">
                  <Check className="text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 text-lg">Fast Withdrawals</h4>
                  <p className="text-slate-300">Access your funds through a streamlined withdrawal process with clear timelines.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-900/20 flex items-center justify-center">
                  <Check className="text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 text-lg">Strong Security</h4>
                  <p className="text-slate-300">Manage your transactions with confidence through our secure Client Portal, featuring two-factor authentication and modern encryption.</p>
                </div>
              </li>
            </ul>

            <p className="text-[12px] text-slate-400 mt-8">*Please note that occasional delays, exchange rate fluctuations, and operational factors may affect transfer times.</p>
          </div>
        </div>
      </section>

      {/* Deposit options */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 text-center">
  <h2 className="font-display font-extrabold text-slate-800 text-3xl lg:text-4xl mb-4">Multiple Ways to Fund Your Account</h2>
  <p className="text-slate-600 mb-12">Fund your account effortlessly using our diverse selection of trusted payment solutions available in your region.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="22" height="12" rx="2" fill="#CDEEE8"/><rect x="6" y="11" width="6" height="4" rx="1" fill="#DFF6F0"/></svg>
            </div>
            <h4 className="font-display text-xl font-semibold mb-3">Cards</h4>
            <p className="text-slate-600 max-w-[260px]">Use your debit or credit card for quick and familiar deposits.</p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="16" height="12" rx="2" fill="#CDEEE8"/><rect x="18" y="8" width="4" height="4" rx="1" fill="#DFF6F0"/></svg>
            </div>
            <h4 className="font-display text-xl font-semibold mb-3">E-Wallets & Digital Payments</h4>
            <p className="text-slate-600 max-w-[260px]">Instantly top up your account with popular e-wallets and digital payment providers.*</p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="h-16 w-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="8" width="20" height="12" rx="2" fill="#CDEEE8"/><path d="M8 14h12" stroke="#DFF6F0" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <h4 className="font-display text-xl font-semibold mb-3">Bank Wire Transfers</h4>
            <p className="text-slate-600 max-w-[260px]">A reliable and secure option for making larger deposits or corporate funding.</p>
          </div>
        </div>

  <p className="text-xs text-slate-400 mt-10">*Payment methods vary by region. Please check your Client Portal for availability and any applicable fees.</p>
      </section>

      {/* Withdrawals section */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-slate-900 font-extrabold text-3xl lg:text-4xl mb-6">Access Your Funds with Ease</h2>
          <p className="text-slate-600 mb-8">Our withdrawal process is designed to be simple, transparent and tailored to common investor needs.</p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Flexible Options</h4>
                <p className="text-slate-600">Withdraw to your card, e-wallet, or bank account — available methods depend on your region and verification status.</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Fast Processing</h4>
                <p className="text-slate-600">We process withdrawal requests promptly and provide status updates via your Client Portal.</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Clear & Secure</h4>
                <p className="text-slate-600">To ensure maximum security and compliance, withdrawals are typically returned to your original deposit source where possible.*</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Track Everything</h4>
                <p className="text-slate-600">Monitor the status of your withdrawal at every step in your Client Portal, with clear timestamps and history.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-[360px]">
            <Image
              src="/wallet.webp"
              alt="Card mockup"
              width={360}
              height={240}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Gray band */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="font-display text-slate-900 font-extrabold text-3xl mb-4">Your Funds, Your Control</h3>
          <p className="text-slate-600 max-w-[900px] mx-auto">All your transactions are managed through our intuitive Client Portal. Simply log in, select ‘Deposit’ or ‘Withdrawal’, and choose from the payment methods available for your specific region. Our portal gives you full visibility and control, allowing you to track your transaction history and manage your wallets effortlessly.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
