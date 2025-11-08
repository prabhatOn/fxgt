import React from 'react';
import Image from 'next/image';

const data = [
  {
    title: 'MARKETS',
    items: [
      { icon: '⚖️', label: 'All Popular', spread: '—' },
      { icon: '🌐', label: 'Forex', spread: '—' },
      { icon: '🪙', label: 'Cryptocurrencies', spread: '—' },
      { icon: '🔗', label: 'Synthetic Cryptocurrency Pairs', spread: '—' },
      { icon: '🥇', label: 'Precious Metals', spread: '—' },
      { icon: '⚡', label: 'Energies', spread: '—' },
      { icon: '📈', label: 'Equity Indices', spread: '—' },
      { icon: '⭐', label: 'GTi12 Index', spread: '—' },
      { icon: '🏷️', label: 'Stocks', spread: '—' },
    ],
  },
  {
    title: 'ACCOUNT FEATURES',
    items: [
      { icon: '💼', label: 'Account Comparison', spread: '—' },
      { icon: '💳', label: 'Deposits & Withdrawals', spread: '—' },
      { icon: '📊', label: 'Leverage & Margin', spread: '—' },
      { icon: '🤝', label: 'Copy Trading', spread: 'NEW' },
    ],
  },
  {
    title: 'TOOLS & PLATFORMS',
    items: [
      { icon: '📱', label: 'Client Portal', spread: '—' },
      { icon: '🧰', label: 'MT5 Trading Tools', spread: '—' },
      { icon: '🖥️', label: 'VPS Sponsorship', spread: '—' },
    ],
  },
];

const sampleInstruments = [
  { icon: '🥇', label: 'XAUUSD', spread: '18' },
  { icon: '🟠', label: 'BTCUSD', spread: '156' },
  { icon: '🇬🇧', label: 'GBPUSD', spread: '0.2' },
  { icon: '🇪🇺', label: 'EURUSD', spread: '0.1' },
  { icon: '🇺🇸', label: 'USDJPY', spread: '0.2' },
  { icon: '🇺🇸', label: 'US30', spread: '2' },
  { icon: '🛢️', label: 'USOil', spread: '0.4' },
  { icon: '🟢', label: '#NVDA', spread: '6' },
  { icon: '🏷️', label: 'GTi12', spread: '273' },
];

const SpreadsTable: React.FC = () => {
  return (
    <section className="w-full bg-[#0b0b0b] text-white py-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Trade with 1:5000 Leverage
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Choose the asset class that fits your portfolio and trade seamlessly.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((col) => (
            <div key={col} className="px-6">
              <div className="text-left">
                <div className="grid grid-cols-2 items-center px-2">
                  <div>
                    <h4 className="text-sm font-medium text-white">Instrument</h4>
                  </div>
                  <div className="text-right">
                    <h4 className="text-sm font-medium text-white">Spread From</h4>
                  </div>
                </div>

                <ul className="mt-6">
                  {sampleInstruments.slice(col * 3, col * 3 + 3).map((it, idx) => (
                    <li
                      key={it.label}
                      className={`flex items-center justify-between py-6 px-2 ${idx !== 2 ? 'border-b border-slate-700/40' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-[#0f1724] flex items-center justify-center text-lg ring-1 ring-white/10">
                          {it.icon}
                        </div>
                        <span className="font-medium text-white">{it.label}</span>
                      </div>
                      <div className="text-lg font-medium text-white">{it.spread}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpreadsTable;
