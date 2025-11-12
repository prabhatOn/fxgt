import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full py-10 bg-white">
        <hr className="mb-10" />
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#1f2937] mb-6">
              Get in touch
            </h2>
            <p className="text-lg text-[#4b5563] mb-6 leading-relaxed">
              Our 24/7 multilingual support team are here to help.
            </p>
            <p className="text-base text-[#6b7280] leading-relaxed">
              You can also use our Resource Center to find answers to some of the most frequently asked questions.
            </p>
          </div>

          {/* Right Side - Contact Details */}
          <div className="space-y-8">
            {/* Email Support */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#5a5d63]" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-[#1f2937] mb-2">
                  Email Support
                </h3>
                <a 
                  href="mailto:support@investminuae.com" 
                  className="block text-[#4b5563] hover:text-[#5a5d63] transition-colors"
                >
                  support@investminuae.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#5a5d63]" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-[#1f2937] mb-2">
                  Phone
                </h3>
                <a 
                  href="tel:+971543668855" 
                  className="block text-[#4b5563] hover:text-[#5a5d63] transition-colors mb-1"
                >
                  +971-543668855
                </a>
                <a 
                  href="tel:+447476989231" 
                  className="block text-[#4b5563] hover:text-[#5a5d63] transition-colors"
                >
                 +44-7476989231
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#5a5d63]" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-[#1f2937] mb-2">
                  WhatsApp
                </h3>
                <a 
                  href="https://wa.me/971543668855" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#4b5563] hover:text-[#5a5d63] transition-colors"
                >
                  +971-543668855
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#5a5d63]" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-[#1f2937] mb-2">
                  Address
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  167-169 Great Portland Street,<br />
                  London, England, W1W 5PF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
