import Image from 'next/image';
import { Instagram, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Trading',
    links: [
      { name: 'All Popular', href: '/markets#popular' },
      { name: 'Forex', href: '/markets#forex' },
      { name: 'Cryptocurrencies', href: '/markets#cryptocurrencies' },
      { name: 'Synthetic Cryptos', href: '/markets#synthetic-cryptos' },
      { name: 'Precious Metals', href: '/markets#precious-metals' },
      { name: 'Energies', href: '/markets#energies' },
      { name: 'Equity Indices', href: '/markets#equity-indices' },
      { name: 'Stocks', href: '/markets#stocks' },
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
    title: 'Promotions',
    links: [
      { name: 'Trading Promotions', href: '/trading-promotions/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Investmin', href: '/about-fxgt/' },
      { name: 'Security of Funds', href: '/security-of-funds/' },
      { name: 'Contact Us', href: '/contact/' },
      { name: 'Legal', href: '/legal/' },
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
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/app-qr-code-23.webp"
              alt="QR Code for Fusion FX App"
              width={80}
              height={80}
              className="h-20 w-20"
            />
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
            <a href="#" className="text-[#666666] transition-colors hover:text-slate-700"><Instagram size={24} /></a>
            <a href="#" className="text-[#666666] transition-colors hover:text-slate-700"><Facebook size={24} /></a>
            <a href="#" className="text-[#666666] transition-colors hover:text-slate-700"><Youtube size={24} /></a>
            <a href="#" className="text-[#666666] transition-colors hover:text-slate-700"><Linkedin size={24} /></a>
            <a href="#" className="text-[#666666] transition-colors hover:text-slate-700"><Twitter size={24} /></a>
          </div>

          <p className="mb-8 font-['Montserrat'] text-sm text-[#666666]">
            Investment Conditions, Promotions, and Account Types may vary based on the country/location{' '}
            <a href="#" className="font-bold text-slate-700">IP Detected: US</a>
          </p>

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
              <div className="flex items-center gap-6">
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/fsca-29.webp" alt="FSCA logo" width={40} height={40} className="h-10 w-auto grayscale" />
                <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/fsa-30.webp" alt="FSA logo" width={40} height={40} className="h-10 w-auto grayscale" />
              </div>
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

          <div className="mx-auto mt-16 max-w-[1200px] space-y-4 font-['Montserrat'] text-[13px] font-normal leading-normal text-[#999999]">
            <p>
              Investmin is a brand name and registered trademark duly authorized to be operated by various companies in accordance with legislations and obtained licenses in the respective countries.
            </p>
            <p>
              Investmin Global Ltd is a registered company in Seychelles, with registration number 8427705-1 and registered address is Suite 3, Third Floor, Vairam Building, Providence, Mahe, Seychelles, licensed and regulated by the Seychelles Financial Services Authority (FSA) under the Securities Dealer's License Number [SD019].
            </p>
            <p>
              Investmin Markets (Pty) Ltd is a registered company in South Africa, with registration number 2015/084998/07.Having its registered address at Aurora Drive, Liberty Life Building 21, Office 125, 1st floor Umhlanga, 4301 Kwa-Zulu Natal South Africa and physical address at 6th Floor, 172 Long Street, Cape Town, CBD, South Africa. Investmin Markets (Pty) Ltd is an authorized FSP with FSP Number 48896 and is regulated by the Financial Sector Conduct Authority.
            </p>
            <p>
              Investmin Markets Ltd is a registered company in Vanuatu licensed and regulated by the Vanuatu Financial Services Commission (VFSC) under the Principal's License Number 700601 and has its registered address at Law Partners House, Kumul Highway, Port Vila, Vanuatu. Investmin Markets Ltd is offering its financial and investment services exclusively to eligible counterparties and is not aiming any retail clients.
            </p>
             <p>All your capital and information included herein are intended for general marketing purposes only and does not constitute investment advice or recommendation nor an invitation to acquire any financial instrument and/or be involved in any financial transaction.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;