"use client";

import { useState } from 'react';
import NavigationHeader from '@/components/sections/navigation-header';
import HeroBanner from '@/components/sections/hero-banner';
import HowToStart from '@/components/sections/how-to-start';
import SpreadsTable from '@/components/sections/spreads-table';
import TrustpilotBanner from '@/components/sections/trustpilot-banner';
import BenefitsGrid from '@/components/sections/benefits-grid';
import AccountTypesSection from '@/components/sections/account-types';
import CopyTradingSection from '@/components/sections/copy-trading';
import MobileAppShowcase from '@/components/sections/mobile-app-showcase';
import TradingResources from '@/components/sections/trading-resources';
import AwardsShowcase from '@/components/sections/awards-showcase';
import VideoCta from '@/components/sections/video-cta';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';
import CookieNoticeModal from '@/components/sections/cookie-notice-modal';
import WelcomeSplash from '@/components/WelcomeSplash';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <WelcomeSplash onComplete={() => setShowSplash(false)} />}
      
      <div className="min-h-screen w-full bg-background font-body antialiased">
        <NavigationHeader />
        
        <main className="w-full">
          <HeroBanner />
          <HowToStart />
          <SpreadsTable />
          <AccountTypesSection />
          <CopyTradingSection />
          <MobileAppShowcase />
          <TradingResources />
          <ContactSection />
          <VideoCta />
        </main>

        <Footer />
        <CookieNoticeModal />
      </div>
    </>
  );
}