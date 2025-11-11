'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const faqs = [
  {
    question: "How can I help you?",
    answer: "I'm here to assist you with information about Investmin's trading services, IB program, account types, and more. Feel free to ask me anything!"
  },
  {
    question: "What is an IB Partner?",
    answer: "An Introducing Broker (IB) Partner is someone who refers clients to Investmin and earns up to 90% commission from their trading activity. Our multi-tier program lets you earn from 5 levels of referrals with daily payouts!"
  },
  {
    question: "How do I open an account?",
    answer: "Opening an account takes less than 5 minutes! Simply click 'Register Now' at the top, complete the quick form with your details, verify your identity, and start trading immediately."
  },
  {
    question: "What are the trading hours?",
    answer: "Forex markets: 24/5 (Monday-Friday). Cryptocurrencies: 24/7 non-stop. Stock indices and commodities have specific hours based on their exchanges. All times are displayed in your local timezone."
  },
  {
    question: "How can I contact support?",
    answer: "Our dedicated support team is available 24/5 via live chat, email (support@investminuae.com), or phone. Average response time is under 2 minutes during business hours!"
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showFAQs, setShowFAQs] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when first opened
  const handleToggleChat = () => {
    if (!isOpen && messages.length === 0) {
      setMessages([{
        id: '1',
        text: 'Welcome back, let us know if you have any questions.',
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
    setIsOpen(!isOpen);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowFAQs(false);

    // Simulate bot response
    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      let botResponse = "Thank you for reaching out! For specific inquiries, our support team is available 24/5. You can also explore our Help Center or ask me about accounts, trading, or our IB program.";

      // Check for FAQ matches
      if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
        botResponse = "Hi there! 👋 I'm here to help. What would you like to know about Investmin? Ask me about our IB Partner program, account types, trading platforms, or anything else!";
      } else if (lowerText.includes('ib') || lowerText.includes('partner') || lowerText.includes('broker')) {
        botResponse = "Our IB Partner program is one of the best in the industry! Earn up to 90% commission with multi-tier rewards (5 levels), get daily payouts, dedicated account manager, and promotional support. Ready to become a partner?";
      } else if (lowerText.includes('account') || lowerText.includes('register') || lowerText.includes('sign up') || lowerText.includes('open')) {
        botResponse = "Opening an account is super quick! Just click 'Register Now' at the top, fill in your basic details (takes 3 minutes), verify your identity, and you're ready to trade. No hidden fees, instant approval for most applicants!";
      } else if (lowerText.includes('help') || lowerText.includes('support') || lowerText.includes('contact')) {
        botResponse = "Our award-winning support team is ready to help! Available 24/5 via live chat (fastest), email at support@investminuae.com, or phone. Average response time is under 2 minutes. What do you need help with?";
      } else if (lowerText.includes('trading') || lowerText.includes('trade') || lowerText.includes('market')) {
        botResponse = "We offer 1000+ trading instruments: Forex pairs, Cryptocurrencies (BTC, ETH, etc.), Stocks, Indices, Precious Metals (Gold, Silver), and Energies (Oil, Gas). Tight spreads, fast execution, and leverage up to 1:500!";
      } else if (lowerText.includes('commission') || lowerText.includes('earn') || lowerText.includes('money')) {
        botResponse = "With our IB program, you can earn up to 90% commission on every trade your referrals make. Plus, earn from 5 levels of sub-IBs! Payments are processed daily. Top partners earn $10,000+ monthly!";
      } else if (lowerText.includes('deposit') || lowerText.includes('withdraw') || lowerText.includes('payment')) {
        botResponse = "We support 15+ payment methods including cards, bank transfers, e-wallets (Skrill, Neteller), and crypto. Deposits are instant, withdrawals processed within 24 hours. Minimum deposit is just $5!";
      } else if (lowerText.includes('platform') || lowerText.includes('app') || lowerText.includes('mt4') || lowerText.includes('mt5')) {
        botResponse = "Trade on MT4, MT5, or our custom Investmin App (iOS & Android). All platforms feature advanced charts, automated trading, real-time alerts, and sync across devices. Download now from the App Store or Google Play!";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleFAQClick = (faq: typeof faqs[0]) => {
    handleSendMessage(faq.question);
  };

  return (
    <>
      {/* Chat Icon Button */}
      <button
        onClick={handleToggleChat}
        aria-label="Open chat"
        className={`fixed z-50 bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group`}
      >
        <MessageCircle size={24} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed z-50 bottom-20 right-4 sm:bottom-24 sm:right-6 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Floating card (mobile small width bottom-right) and slightly larger on sm+ */}
          <div className="w-[320px] sm:w-[380px] rounded-2xl bg-gradient-to-b from-gray-50/90 to-transparent backdrop-blur-sm shadow-lg sm:shadow-2xl overflow-hidden relative">
            {/* Close button (visible on all sizes) */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="absolute top-3 right-3 bg-white/70 hover:bg-white rounded-full p-1 text-gray-700 shadow-sm"
            >
              <X size={16} />
            </button>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-3 p-3 max-h-[60vh] sm:max-h-[500px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 shadow-md ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {/* FAQ Suggestions */}
            {showFAQs && messages.length <= 1 && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-600 font-medium px-1">Quick questions:</p>
                {faqs.slice(1, 4).map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => handleFAQClick(faq)}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 bg-white rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 shadow-sm"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

            {/* Input Area */}
            <div className="bg-white border-t border-gray-100">
              <div className="flex gap-2 items-center px-3 py-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Write a message..."
                  className="flex-1 px-3 py-2 text-sm text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8b8d91] via-[#5a5d63] to-[#2d2f33] text-white flex items-center justify-center hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
