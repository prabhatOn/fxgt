// src/lib/market-data.ts

export type Instrument = {
  symbol: string;
  spread: number | string;
  contractSize: number;
  volumeMinMax: string;
  swapFree: number;
  leverage: {
    optimus: string;
    pro: string;
    ecn: string;
  };
};

export const sections = [
  { id: "popular", title: "Popular" },
  { id: "forex", title: "Forex" },
  { id: "cryptocurrencies", title: "Cryptocurrencies" },
  { id: "synthetic-cryptos", title: "Synthetic Cryptos" },
  { id: "precious-metals", title: "Precious Metals" },
  { id: "energies", title: "Energies" },
  { id: "equity-indices", title: "Equity Indices" },
  { id: "stocks", title: "Stocks" },
];

export const accountTypes = [
  { id: "optimus", label: "OPTIMUS", commission: "No", leverage: "1:5000" },
  { id: "pro", label: "PRO", commission: "No", leverage: "1:1000" },
  { id: "ecn", label: "ECN", commission: "$3/lot", leverage: "1:500" },
];

export const mockInstrumentsBySection: Record<string, Array<Instrument>> = {
  popular: [
    { symbol: "XAUUSD", spread: 26, contractSize: 100, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:2000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "BTCUSD", spread: 4314, contractSize: 1, volumeMinMax: "0.01/50", swapFree: 0, leverage: { optimus: "1:1000", pro: "1:100", ecn: "1:50" } },
    { symbol: "USDJPY", spread: 13, contractSize: 100000, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "USOIL", spread: 8, contractSize: 100, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "EURUSD", spread: 10, contractSize: 100000, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "US30", spread: 195, contractSize: 1, volumeMinMax: "1/150", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "GBPUSD", spread: 7, contractSize: 100000, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
  ],
  forex: [
    { symbol: "EURUSD", spread: 10, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "GBPUSD", spread: 12, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "AUDUSD", spread: 14, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "USDJPY", spread: 13, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "USDCAD", spread: 15, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "USDCHF", spread: 16, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "NZDUSD", spread: 18, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:5000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "EURJPY", spread: 20, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 0, leverage: { optimus: "1:3000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "GBPJPY", spread: 22, contractSize: 100000, volumeMinMax: "0.01/50", swapFree: 0, leverage: { optimus: "1:3000", pro: "1:1000", ecn: "1:500" } },
  ],
  cryptocurrencies: [
    { symbol: "BTCUSD", spread: 4314, contractSize: 1, volumeMinMax: "0.01/50", swapFree: 0, leverage: { optimus: "1:1000", pro: "1:100", ecn: "1:50" } },
    { symbol: "BTCJPY", spread: 7521, contractSize: 1, volumeMinMax: "0.01/50", swapFree: 0, leverage: { optimus: "1:1000", pro: "1:100", ecn: "1:50" } },
    { symbol: "ETHUSD", spread: 160, contractSize: 1, volumeMinMax: "0.1/150", swapFree: 0, leverage: { optimus: "1:1000", pro: "1:100", ecn: "1:50" } },
    { symbol: "ETHJPY", spread: 283, contractSize: 1, volumeMinMax: "0.1/150", swapFree: 0, leverage: { optimus: "1:1000", pro: "1:100", ecn: "1:50" } },
    { symbol: "XRPUSD", spread: 694, contractSize: 1, volumeMinMax: "100/120000", swapFree: 0, leverage: { optimus: "1:500", pro: "1:50", ecn: "1:20" } },
    { symbol: "XRPJPY", spread: 1164, contractSize: 1, volumeMinMax: "100/120000", swapFree: 0, leverage: { optimus: "1:500", pro: "1:50", ecn: "1:20" } },
    { symbol: "LTCUSD", spread: 35, contractSize: 1, volumeMinMax: "0.1/500", swapFree: 0, leverage: { optimus: "1:500", pro: "1:50", ecn: "1:20" } },
    { symbol: "SOLUSD", spread: 25, contractSize: 1, volumeMinMax: "0.1/500", swapFree: 0, leverage: { optimus: "1:250", pro: "1:50", ecn: "1:20" } },
    { symbol: "ADAUSD", spread: 0.1, contractSize: 1, volumeMinMax: "10/10000", swapFree: 0, leverage: { optimus: "1:100", pro: "1:20", ecn: "1:10" } },
  ],
  "synthetic-cryptos": [
    { symbol: "BTCXAU", spread: 30, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
    { symbol: "BTCXAG", spread: 2031, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
    { symbol: "BTCUSO", spread: 2500, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
    { symbol: "BTCSPX", spread: 213, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
    { symbol: "BTCNAS", spread: 17733, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
    { symbol: "BTCDOW", spread: 480, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
  ],
  "precious-metals": [
    { symbol: "XAUUSD", spread: 26, contractSize: 100, volumeMinMax: "0.01/50", swapFree: 2, leverage: { optimus: "1:2000", pro: "1:1000", ecn: "1:500" } },
    { symbol: "XAGUSD", spread: 3, contractSize: 100, volumeMinMax: "0.1/1000", swapFree: 2, leverage: { optimus: "1:1000", pro: "1:500", ecn: "1:200" } },
    { symbol: "XPTUSD", spread: 450, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "XPDUSD", spread: 600, contractSize: 1, volumeMinMax: "0.01/100", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
  ],
  energies: [
    { symbol: "USOIL", spread: 8, contractSize: 100, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "UKOIL", spread: 10, contractSize: 10, volumeMinMax: "0.01/100", swapFree: 2, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "XNGUSD", spread: 15, contractSize: 1000, volumeMinMax: "0.01/100", swapFree: 0, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
  ],
  "equity-indices": [
    { symbol: "US30", spread: 195, contractSize: 1, volumeMinMax: "1/150", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "US100", spread: 150, contractSize: 1, volumeMinMax: "1/150", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "SPX500", spread: 50, contractSize: 10, volumeMinMax: "1/150", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "DE40", spread: 200, contractSize: 1, volumeMinMax: "1/100", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "UK100", spread: 100, contractSize: 1, volumeMinMax: "1/100", swapFree: 0, leverage: { optimus: "1:500", pro: "1:200", ecn: "1:100" } },
    { symbol: "GTi12", spread: 2200, contractSize: 1, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:100", pro: "1:50", ecn: "1:20" } },
  ],
  stocks: [
    { symbol: "AAPL", spread: 0.01, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
    { symbol: "TSLA", spread: 0.05, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
    { symbol: "MSFT", spread: 0.02, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
    { symbol: "GOOGL", spread: 0.03, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
    { symbol: "AMZN", spread: 0.04, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
    { symbol: "NVDA", spread: 0.06, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
    { symbol: "META", spread: 0.03, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
    { symbol: "NFLX", spread: 0.05, contractSize: 100, volumeMinMax: "1/1000", swapFree: 0, leverage: { optimus: "1:50", pro: "1:20", ecn: "1:10" } },
  ],
};