"use client";

// I'll generate the full updated React component here.
// It will reflect: full-width dropdown, 50vh height, white background,
// no icon overlap, clean spacing.

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// -------- DATA ---------

const tradingLinks = {
  markets: [
    { title: "All Popular", href: "/" },
    { title: "Forex", href: "/forex/" },
    { title: "Cryptocurrencies", href: "/crypto/" },
    { title: "Synthetic Cryptocurrency Pairs", href: "/synth-crypto/" },
    { title: "Precious Metals", href: "/precious-metals/" },
    { title: "Energies", href: "/energies/" },
    { title: "Equity Indices", href: "/equity-indices/" },
    { title: "GTi12 Index", href: "/gti12/" },
    { title: "Stocks", href: "/stocks/" },
  ],
  accountFeatures: [
    { title: "Account Comparison", href: "/trading-account-types/" },
    { title: "Deposits & Withdrawals", href: "/deposits-and-withdrawals/" },
    { title: "Leverage & Margin", href: "/leverage-types/" },
    { title: "Copy Trading", href: "/copy-trading/", tag: "new" as const },
  ],
  toolsAndPlatforms: [
    { title: "Client Portal", href: "/client-portal/" },
    { title: "MT5 Trading Tools", href: "/metatrader-5-trading-tools/" },
    { title: "VPS Sponsorship", href: "/metatrader-vps-sponsorship-program/" },
  ],
};

const platformsLinks = {
  fusionFx: [
    { title: "Fusion FX App", href: "/fxgt-app/" },
    { title: "Fusion FX Trader", href: "/fxgt-trader/" },
  ],
  mt5: [
    { title: "Windows", href: "/metatrader-5-for-windows/" },
    { title: "macOS", href: "/metatrader-5-for-mac/" },
    { title: "Android", href: "/metatrader-5-for-android/" },
    { title: "iOS", href: "/metatrader-5-for-ios/" },
  ],
  mt4: [
    { title: "Windows", href: "/metatrader-4-for-windows/" },
    { title: "macOS", href: "/metatrader-4-for-macos/" },
    { title: "Android", href: "/metatrader-4-for-android/" },
    { title: "iOS", href: "/mt4-for-ios/" },
  ],
};

const companyLinks = [
  { title: "About Fusion FX", href: "/about-fxgt/" },
  { title: "Security of Funds", href: "/security-of-funds/" },
  { title: "Company News", href: "/blog/category/company-news/" },
  { title: "Contact Us", href: "/contact/" },
  { title: "Fusion FX Careers", href: "https://fxgtcareers.com/" },
  { title: "Legal", href: "/legal/" },
];

const researchLinks = [
  { title: "Blog", href: "/blog" },
  { title: "Market Analysis", href: "/blog/category/market-analysis/" },
  { title: "Economic Calendar", href: "/economic-calendar/" },
  { title: "Holiday Calendar", href: "/trading-holidays-calendar/" },
];

const partnersLink = { title: "Partners", href: "https://mypartners.fxgt.com/" };

// --------- COMPONENTS ---------

type MenuLink = {
  title: string;
  href: string;
  tag?: "new" | "soon";
};

const MenuColumn = ({ title, links }: { title: string; links: MenuLink[] }) => (
  <div className="flex flex-col bg-white gap-4">
    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
      {title}
    </h4>
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.title}>
          <Link
            href={l.href}
            className="text-sm font-medium text-slate-800 hover:text-black flex items-center gap-2"
          >
            {l.title}
            {l.tag === "new" && (
              <span className="text-[10px] bg-white text-black px-2 py-[2px] rounded-full uppercase">
                New
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Main Navbar
export default function NavigationHeader() {
  const pathname = usePathname();

  const fullDropdownClasses =
    "!fixed !left-0 !top-16 !bg-white !w-full h-[50vh] border-t border-gray-100 shadow-xl !p-0 overflow-y-auto !z-50 !mt-0";

  const triggerBase =
    "group inline-flex h-full items-center px-5 text-sm font-medium text-slate-900 rounded-none bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50 transition-colors";

  const isTradingActive = [
    ...tradingLinks.markets,
    ...tradingLinks.accountFeatures,
    ...tradingLinks.toolsAndPlatforms,
  ].some((l) => pathname.startsWith(l.href));

  const isPlatformsActive = [
    ...platformsLinks.fusionFx,
    ...platformsLinks.mt5,
    ...platformsLinks.mt4,
  ].some((l) => pathname.startsWith(l.href));

  const isPromotionsActive = pathname.startsWith("/trading-promotions");
  const isCompanyActive = companyLinks.some(
    (l) => !l.href.startsWith("http") && pathname.startsWith(l.href),
  );
  const isResearchActive = researchLinks.some((l) => pathname.startsWith(l.href));

  return (
    <>
      <style jsx global>{`
        [data-slot="navigation-menu-content"] {
          background-color: white !important;
        }
      `}</style>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center relative z-50">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/fxgt-logo_png-1.webp"
            width={108}
            height={24}
            alt="FXGT Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu
          viewport={false}
          className="hidden lg:flex bg-white flex-1 items-center justify-center mx-8"
        >
          <NavigationMenuList className="flex items-center h-16 gap-2">
            {/* Trading */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${triggerBase} ${
                  isTradingActive ? "bg-gray-100" : ""
                }`}
              >
                Trading
              </NavigationMenuTrigger>
              <NavigationMenuContent className={fullDropdownClasses} style={{ position: 'fixed', left: 0, top: '64px', width: '100vw', backgroundColor: 'white' }}>
                <div className="mx-auto max-w-6xl h-full grid grid-cols-3 gap-20 px-10 py-12">
                  <MenuColumn title="Markets" links={tradingLinks.markets} />
                  <MenuColumn
                    title="Account Features"
                    links={tradingLinks.accountFeatures}
                  />
                  <MenuColumn
                    title="Tools & Platforms"
                    links={tradingLinks.toolsAndPlatforms}
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Platforms */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${triggerBase} ${
                  isPlatformsActive ? "bg-gray-100" : ""
                }`}
              >
                Platforms
              </NavigationMenuTrigger>
              <NavigationMenuContent className={fullDropdownClasses} style={{ position: 'fixed', left: 0, top: '64px', width: '100vw', backgroundColor: 'white' }}>
                <div className="mx-auto max-w-6xl h-full grid grid-cols-3 gap-20 px-10 py-12">
                  <MenuColumn
                    title="Fusion FX Platforms"
                    links={platformsLinks.fusionFx}
                  />
                  <MenuColumn title="MT5" links={platformsLinks.mt5} />
                  <MenuColumn title="MT4" links={platformsLinks.mt4} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Promotions */}
            <NavigationMenuItem>
              <Link
                href="/trading-promotions/"
                className={`${triggerBase} ${
                  isPromotionsActive ? "bg-gray-50" : ""
                }`}
              >
                Promotions
              </Link>
            </NavigationMenuItem>

            {/* Company */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${triggerBase} ${
                  isCompanyActive ? "bg-gray-100" : ""
                }`}
              >
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className={fullDropdownClasses} style={{ position: 'fixed', left: 0, top: '64px', width: '100vw', backgroundColor: 'white' }}>
                <div className="mx-auto max-w-6xl h-full grid grid-cols-3 gap-20 px-10 py-12">
                  <MenuColumn title="About Us" links={companyLinks} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Research */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${triggerBase} ${
                  isResearchActive ? "bg-gray-100" : ""
                }`}
              >
                Research & Education
              </NavigationMenuTrigger>
              <NavigationMenuContent className={fullDropdownClasses} style={{ position: 'fixed', left: 0, top: '64px', width: '100vw', backgroundColor: 'white' }}>
                <div className="mx-auto max-w-6xl h-full grid grid-cols-3 gap-20 px-10 py-12">
                  <MenuColumn title="Resources" links={researchLinks} />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Partners */}
            <NavigationMenuItem>
              <Link href={partnersLink.href} className={triggerBase}>
                Partners
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6 relative z-50">
          <button className="text-sm font-medium text-slate-800 hover:text-black flex items-center gap-2">
            🌐 English
          </button>

          <Button
            variant="outline"
            asChild
            className="rounded-full border-[#0f766e] text-[#0f766e] font-semibold bg-transparent shadow-none hover:bg-[#0f766e]/10"
          >
            <Link href="/log-in/">Log In</Link>
          </Button>

          <Button
            asChild
            className="rounded-full bg-[#0f766e] text-white font-semibold hover:bg-[#0e665f]"
          >
            <Link href="/register/">Register Now</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-6 overflow-y-auto">
              <p className="text-lg font-semibold mb-4">Menu</p>
              {/* Keeping mobile simple */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  );
}
