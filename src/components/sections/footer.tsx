import Image from 'next/image';
import { Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Markets',
    links: [
      { name: 'All Popular', href: '/markets#popular' },
      { name: 'Forex', href: '/markets#forex' },
      { name: 'Cryptocurrencies', href: '/markets#cryptocurrencies' },
      { name: 'Synthetic Cryptos', href: '/markets#synthetic-cryptos' },
      { name: 'Precious Metals', href: '/markets#precious-metals' },
      { name: 'Energies', href: '/markets#energies' },
      { name: 'Equity Indices', href: '/markets#equity-indices' },
      { name: 'Stocks', href: '/markets#stocks' },
    ],
  },
  {
    title: 'Trading',
    links: [
      { name: 'Account Comparison', href: '/trading-account-types/' },
      { name: 'Deposits & Withdrawals', href: '/deposits-and-withdrawals/' },
      { name: 'Leverage & Margin', href: '/leverage-types/' },
      { name: 'Copy Trading', href: '/copy-trading/' },
      { name: 'Client Portal', href: '/client-portal/' },
    ],
  },
  {
    title: 'Platforms',
    links: [
      { name: 'Investmin App', href: '/fxgt-app/' },
      { name: 'Investmin Trader', href: '/fxgt-trader/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Investmin', href: '/about-fxgt/' },
      { name: 'Security of Funds', href: '/security-of-funds/' },
      { name: 'Contact Us', href: '/contact/' },
      { name: 'Legal', href: '/legal/' },
      { name: 'Trading Promotions', href: '/trading-promotions/' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a]">
      <div className="bg-slate-700">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-8 py-4 lg:flex-row">
          <p className="font-['Montserrat'] text-sm font-normal text-white md:max-w-xl lg:max-w-2xl">
            Leveraged products may not be suitable for everyone and may result in loss of all your capital. Please ensure you fully understand the risks involved and whether investing is appropriate for you. Read Full Risk Disclosure <a href="#" className="underline hover:text-slate-200">here</a>.
          </p>
          <div className="flex items-center gap-2">
            <p className="font-['Montserrat'] text-base font-semibold text-white">Get the Investmin App</p>
            
            <div className="flex flex-col gap-2">
              <a href="#">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Playstore-badge-24.webp"
                  alt="Get it on Google Play"
                  width={100}
                  height={30}
                />
              </a>
              <a href="#">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Appstore-badge-25.webp"
                  alt="Download on the App Store"
                  width={100}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] text-black">
        <div className="mx-auto max-w-[1400px] px-8 py-16 sm:py-12">
          <div className="mb-8 flex gap-4">
            <a href="https://www.instagram.com/iinvest.min?igsh=MTJyNWNpNzVubzVxaw==" target="_blank" rel="noopener noreferrer" className="text-[#666666] transition-colors hover:text-slate-700"><Instagram size={24} /></a>
            <a href="https://www.facebook.com/share/17Ub2nCfGD/" target="_blank" rel="noopener noreferrer" className="text-[#666666] transition-colors hover:text-slate-700"><Facebook size={24} /></a>
            <a href="https://youtube.com/@investmin?si=Zydqqku2pOolxGaJ" target="_blank" rel="noopener noreferrer" className="text-[#666666] transition-colors hover:text-slate-700"><Youtube size={24} /></a>
            <a href="https://www.linkedin.com/in/invest-min-ba0aab385" target="_blank" rel="noopener noreferrer" className="text-[#666666] transition-colors hover:text-slate-700"><Linkedin size={24} /></a>
            <a href="https://x.com/investmin1?t=3umHG0rYWoNa-4Tl8i3S-A&s=09" target="_blank" rel="noopener noreferrer" className="text-[#666666] transition-colors hover:text-slate-700"><Twitter size={24} /></a>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h5 className="mb-4 font-['Raleway'] text-base font-bold text-[#1a1a1a]">{column.title}</h5>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="font-['Montserrat'] text-[15px] font-normal text-[#666666] transition-colors hover:text-slate-700">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-start gap-x-16 gap-y-8">
            <div className="flex-shrink-0">
              <h6 className="mb-4 font-['Raleway'] text-base font-bold text-[#1a1a1a]">Licensing Authorities</h6>
              <div className="flex items-center gap-6 mb-4">
                {/* Each flag with short label below */}
                <div className="flex flex-col items-center">
                  <Image
                    src="https://flagcdn.com/w80/gb.png"
                    alt="UK flag"
                    width={40}
                    height={40}
                    className="rounded-full border border-white/10 shadow-sm"
                  />
                  <span className="mt-2 text-sm font-semibold text-[#1a1a1a]">FCA</span>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://flagcdn.com/w80/ae.png"
                    alt="UAE flag"
                    width={40}
                    height={40}
                    className="rounded-full border border-white/10 shadow-sm"
                  />
                  <span className="mt-2 text-sm font-semibold text-[#1a1a1a]">SCA</span>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src="https://flagcdn.com/w80/ae.png"
                    alt="UAE flag DFSA"
                    width={40}
                    height={40}
                    className="rounded-full border border-white/10 shadow-sm"
                  />
                  <span className="mt-2 text-sm font-semibold text-[#1a1a1a]">DFSA</span>
                </div>
              </div>
              {/* ...existing code... */}
            </div>
            <div>
              <h6 className="mb-4 font-['Raleway'] text-base font-bold text-[#1a1a1a]">Payment Methods</h6>
              {/* Payment method logos omitted as they are not in the provided assets */}
            </div>
             <div>
              <h6 className="mb-4 font-['Raleway'] text-base font-bold text-[#1a1a1a]">Security</h6>
              {/* Security logo omitted as it is not in the provided assets */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;