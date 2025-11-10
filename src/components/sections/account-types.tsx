import React from 'react';
import { Check } from 'lucide-react';

type AccountTypeProps = {
  title: string;
  subtitle: string;
  features: string[];
  isHotPick?: boolean;
};

const accountTypesData: AccountTypeProps[] = [
  {
    title: "PREMIUM",
    subtitle: "Designed for active investors seeking maximum flexibility.",
    features: [
      "Leverage 1:2000",
      "️Spreads from 0.8 pips",
      "Minimum deposit: $10",
      "️Special promotions",
    ],
    isHotPick: true,
  },
  {
    title: "PROFESSIONAL",
    subtitle: "Built for experienced investors with balanced needs.",
    features: [
      "Leverage: 1:1000",
      "Spreads from 0.5 pips",
      "Minimum deposit: $10",
      "Zero commission fees",
    ],
  },
  {
    title: "ELITE",
    subtitle: "Crafted for direct market access and speed.",
    features: [
      "Leverage: 1:1000",
      "Spreads from 0.0 pips",
      "Minimum deposit: $100",
      "Institutional-grade execution",
    ],
  },
  {
    title: "STANDARD",
    subtitle: "A versatile solution for everyday investing.",
    features: [
      "Leverage: 1:1000",
      "Minimum deposit: $10",
      "Wide range of assets",
      "Exclusive bonus offers",
    ],
  },
  {
    title: "STARTER",
    subtitle: "The perfect entry point for new investors.",
    features: [
      "Leverage: 1:1000",
      "Minimum deposit: $5",
      "Micro-lot investing",
      "Ideal for learning and growth",
    ],
  },
];

const AccountCard = ({ title, subtitle, features, isHotPick }: AccountTypeProps) => {
  const cleanFeatures = features.map(f => f.replace(/️/g, '').trim());

  return (
    <div className="relative bg-card border border-border rounded-2xl p-8 flex flex-col min-h-[400px] flex-shrink-0 w-[90vw] sm:w-auto md:w-[45vw] lg:w-full snap-start transition-transform duration-300 hover:scale-[1.02]">
      {isHotPick && (
        <span className="absolute top-8 right-8 bg-slate-400 text-slate-900 text-[12px] font-semibold px-3 py-1 rounded-full">
          HOT PICK
        </span>
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="font-display font-bold text-white text-[28px] leading-tight mb-3 pt-10 lg:pt-0">
          {title}
        </h3>
        <p className="font-body text-muted-foreground text-base mb-6 min-h-[64px]">
          {subtitle}
        </p>
        <ul className="space-y-3">
          {cleanFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-slate-400 mr-3 mt-1 flex-shrink-0" />
              <span className="font-body text-[15px] text-[#e5e5e5]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const AccountTypesSection = () => {
  return (
    <section className="bg-black text-foreground">
      <div className="max-w-[1400px] mx-auto px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-white text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-[-0.02em]">
            An Investment Account for Every Goal
          </h2>
          <p className="font-body text-lg text-[#b3b3b3] leading-[1.6] max-w-[900px] mx-auto mt-4">
            Choose from five specialized account types, each designed to match your investment style, experience level, and financial goals.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-8 lg:mx-0 px-8 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {accountTypesData.map((account) => (
            <AccountCard key={account.title} {...account} />
          ))}
        </div>

        <div className="text-center mt-12">
            <a 
              href="https://trade.investminuae.com/register"
              className="inline-block bg-slate-300 hover:bg-slate-400 text-slate-900 font-semibold py-[14px] px-8 rounded-lg text-base transition-colors"
            >
              Register
            </a>
        </div>
      </div>
    </section>
  );
};

export default AccountTypesSection;