import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ phoneNumber = "916282268453" }) {
  const handleClick = () => {
    const text = encodeURIComponent("Hello AMDG GROUP, I would like to inquire about your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-montserrat font-bold text-sm">
          Chat With Us
        </span>
      </button>
    </div>
  );
}
