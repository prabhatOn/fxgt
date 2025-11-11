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
    { title: "All Popular", href: "/markets#popular" },
    { title: "Forex", href: "/markets#forex" },
    { title: "Cryptocurrencies", href: "/markets#cryptocurrencies" },
    { title: "Synthetic Cryptos", href: "/markets#synthetic-cryptos" },
    { title: "Precious Metals", href: "/markets#precious-metals" },
    { title: "Energies", href: "/markets#energies" },
    { title: "Equity Indices", href: "/markets#equity-indices" },
    { title: "Stocks", href: "/markets#stocks" },
  ],
  accountFeatures: [
    { title: "Account Comparison", href: "/trading-account-types/" },
    { title: "Deposits & Withdrawals", href: "/deposits-and-withdrawals/" },
    { title: "Leverage & Margin", href: "/leverage-types/" },
    { title: "Copy Trading", href: "/copy-trading/", tag: "new" as const },
  ],
  toolsAndPlatforms: [
    { title: "Client Portal", href: "/client-portal/" },
  ],
};

const platformsLinks = {
  fusionFx: [
    { title: "Investmin App", href: "/fxgt-app/" },
    { title: "Investmin Trader", href: "/fxgt-trader/" },
  ],
};

const companyLinks = [
  { title: "About Investmin", href: "/about-fxgt/" },
  { title: "Security of Funds", href: "/security-of-funds/" },
  { title: "Contact Us", href: "/contact/" },
  { title: "Legal", href: "/legal/" },
];

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
            className="text-sm font-medium text-slate-800 hover:text-[#5a5d63] transition-colors flex items-center gap-2"
          >
            {l.title}
            {l.tag === "new" && (
              <span className="text-[10px] bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white px-2 py-[2px] rounded-full uppercase">
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
    "!fixed !left-0 !top-19 !bg-white !w-full h-[50vh] border-t border-gray-100 shadow-xl !p-0 overflow-y-auto !z-50 !mt-0";

  const triggerBase =
    "group inline-flex h-full items-center px-5 text-sm font-medium text-slate-900 rounded-none bg-transparent hover:bg-[#5a5d63] hover:bg-opacity-10 data-[state=open]:bg-[#5a5d63] data-[state=open]:bg-opacity-10 data-[state=open]:text-[#5a5d63] transition-colors";

  const isTradingActive = [
    ...tradingLinks.markets,
    ...tradingLinks.accountFeatures,
    ...tradingLinks.toolsAndPlatforms,
  ].some((l) => pathname.startsWith(l.href));

  const isPlatformsActive = [
    ...platformsLinks.fusionFx,
  ].some((l) => pathname.startsWith(l.href));

  const isPromotionsActive = pathname.startsWith("/trading-promotions");
  const isCompanyActive = companyLinks.some(
    (l) => !l.href.startsWith("http") && pathname.startsWith(l.href),
  );

  return (
    <>
      <style jsx global>{`
        [data-slot="navigation-menu-content"] {
          background-color: white !important;
        }
      `}</style>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center relative z-50 hover:opacity-80 transition-opacity">
          <Image
            src="/icon.png"
            width={140}
            height={36}
            alt="investmin Logo"
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
                  isTradingActive ? "bg-[#5a5d63] bg-opacity-10 text-[#5a5d63]" : ""
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
                  isPlatformsActive ? "bg-[#5a5d63] bg-opacity-10 text-[#5a5d63]" : ""
                }`}
              >
                Platforms
              </NavigationMenuTrigger>
              <NavigationMenuContent className={fullDropdownClasses} style={{ position: 'fixed', left: 0, top: '64px', width: '100vw', backgroundColor: 'white' }}>
                <div className="mx-auto max-w-6xl h-full grid grid-cols-3 gap-20 px-10 py-12">
                  <MenuColumn
                    title="Investmin Platforms"
                    links={platformsLinks.fusionFx}
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Promotions */}
            <NavigationMenuItem>
              <Link
                href="/trading-promotions/"
                className={`group inline-flex h-full items-center px-5 py-2 text-sm font-medium text-slate-900 rounded-md bg-transparent hover:bg-[#5a5d63] hover:bg-opacity-10 transition-colors ${
                  isPromotionsActive ? "bg-[#5a5d63] bg-opacity-10 text-[#5a5d63]" : ""
                }`}
              >
                Promotions
              </Link>
            </NavigationMenuItem>

            {/* Company */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${triggerBase} ${
                  isCompanyActive ? "bg-[#5a5d63] bg-opacity-10 text-[#5a5d63]" : ""
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
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6 relative z-50">
          <button className="text-sm font-medium text-slate-800 hover:text-[#5a5d63] transition-colors flex items-center gap-2">
            🌐 English
          </button>

          <Button
            variant="outline"
            asChild
            className="rounded-full border-[#5a5d63] text-[#5a5d63] font-semibold bg-transparent shadow-none hover:bg-gradient-to-br hover:from-[#8b8d91] hover:via-[#5a5d63] hover:to-[#2d2f33] hover:text-white hover:border-transparent transition-all"
          >
            <Link href="/introducing-broker">IB Partner</Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="rounded-full border-[#5a5d63] text-[#5a5d63] font-semibold bg-transparent shadow-none hover:bg-gradient-to-br hover:from-[#8b8d91] hover:via-[#5a5d63] hover:to-[#2d2f33] hover:text-white hover:border-transparent transition-all"
          >
            <a href="https://trade.investminuae.com/login">Log In</a>
          </Button>

          <Button
            asChild
            className="rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white font-semibold hover:shadow-xl hover:scale-105 hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43] transition-all"
          >
            <a href="https://trade.investminuae.com/register">Register Now</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900">
                <Menu className="text-slate-900" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-6 overflow-y-auto bg-black border-slate-800">
              <div className="flex flex-col gap-6">
                <p className="text-lg font-semibold text-white">Menu</p>
                
                <Accordion type="single" collapsible className="w-full">
                  {/* Trading */}
                  <AccordionItem value="trading" className="border-slate-800">
                    <AccordionTrigger className="text-base font-medium text-white hover:text-[#9ca3af]">Trading</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4 pl-4">
                        <p className="text-xs font-semibold uppercase text-slate-400 mt-2">Markets</p>
                        {tradingLinks.markets.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-sm text-white hover:text-[#9ca3af] transition-colors">
                              {link.title}
                            </Link>
                          </SheetClose>
                        ))}
                        
                        <p className="text-xs font-semibold uppercase text-slate-400 mt-4">Account Features</p>
                        {tradingLinks.accountFeatures.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-sm text-white hover:text-[#9ca3af] transition-colors flex items-center gap-2">
                              {link.title}
                              {link.tag === "new" && (
                                <span className="text-[10px] bg-gradient-to-r from-[#4b5563] to-[#374151] text-white px-2 py-[2px] rounded-full uppercase">
                                  New
                                </span>
                              )}
                            </Link>
                          </SheetClose>
                        ))}
                        
                        <p className="text-xs font-semibold uppercase text-slate-400 mt-4">Tools & Platforms</p>
                        {tradingLinks.toolsAndPlatforms.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-sm text-white hover:text-[#9ca3af] transition-colors">
                              {link.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Platforms */}
                  <AccordionItem value="platforms" className="border-slate-800">
                    <AccordionTrigger className="text-base font-medium text-white hover:text-[#9ca3af]">Platforms</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4 pl-4">
                        <p className="text-xs font-semibold uppercase text-slate-400 mt-2">Investmin Platforms</p>
                        {platformsLinks.fusionFx.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-sm text-white hover:text-[#9ca3af] transition-colors">
                              {link.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Company */}
                  <AccordionItem value="company" className="border-slate-800">
                    <AccordionTrigger className="text-base font-medium text-white hover:text-[#9ca3af]">Company</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4 pl-4">
                        <p className="text-xs font-semibold uppercase text-slate-400 mt-2">About Us</p>
                        {companyLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-sm text-white hover:text-[#9ca3af] transition-colors">
                              {link.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* Promotions */}
                <SheetClose asChild>
                  <Link href="/trading-promotions/" className="text-base font-medium text-white hover:text-[#9ca3af] transition-colors py-2">
                    Promotions
                  </Link>
                </SheetClose>

                {/* Language */}
                <button className="text-sm font-medium text-white hover:text-[#9ca3af] transition-colors flex items-center gap-2 py-2">
                  🌐 English
                </button>

                {/* Auth Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full rounded-full border-[#8b8d91] text-[#d1d5db] font-semibold hover:bg-gradient-to-br hover:from-[#8b8d91] hover:via-[#5a5d63] hover:to-[#2d2f33] hover:text-white hover:border-transparent"
                  >
                    <SheetClose asChild>
                      <Link href="/introducing-broker">IB Partner</Link>
                    </SheetClose>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="w-full rounded-full border-[#8b8d91] text-[#d1d5db] font-semibold hover:bg-gradient-to-br hover:from-[#8b8d91] hover:via-[#5a5d63] hover:to-[#2d2f33] hover:text-white hover:border-transparent"
                  >
                    <a href="https://trade.investminuae.com/login">Log In</a>
                  </Button>

                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white font-semibold hover:shadow-xl hover:from-[#9ea0a4] hover:via-[#6b6e73] hover:to-[#3d3f43]"
                  >
                    <a href="https://trade.investminuae.com/register">Register Now</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  );
}
