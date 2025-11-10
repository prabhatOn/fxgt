import Image from 'next/image';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Real-Time Synchronization",
    description: "Automatically mirror successful investment strategies as they execute, with zero delays."
  },
  {
    title: "Flexible Roles, Maximum Control",
    description: "Choose to follow others, share your strategies, or do both – customize your investment experience."
  },
  {
    title: "Beginner-Friendly Platform",
    description: "Start your investment journey with confidence, even with limited experience or time."
  },
  {
    title: "Performance Visibility",
    description: "Review detailed performance histories and set personalized risk parameters for complete peace of mind."
  }
];

const CopyTradingSection = () => {
  return (
    <section className="bg-[#f9fafb]">
      <div className="mx-auto max-w-[1200px] px-8 py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/copytrading_png-12.webp"
              alt="3D visualization of a device with exploding dollar coins, representing copy trading"
              width={600}
              height={600}
              className="drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-[#1a1a1a] lg:text-[40px] mb-4">
              Smart Copy Investing
            </h2>
            <p className="font-body text-lg font-normal text-[#555555] mb-10" style={{ lineHeight: 1.6 }}>
              Follow proven investors or share your own approach — a simple way to scale strategies while keeping control.
            </p>
            <ul className="mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f3f4f6]">
                    <Check className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1a1a1a] mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-base font-normal leading-normal text-[#666666]">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block self-start rounded-lg bg-slate-300 px-8 py-3.5 font-body text-base font-semibold text-slate-900 transition-all duration-200 hover:scale-[1.02] hover:bg-slate-400"
            >
              Start Copy Investing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopyTradingSection;