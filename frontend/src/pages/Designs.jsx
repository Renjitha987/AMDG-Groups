import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Palette, Globe, Megaphone, Share2, Award, FileText, 
  Video, Sparkles, MessageSquare, ArrowRight 
} from 'lucide-react';

export default function Designs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const items = [
    {
      id: "advertising",
      title: "Advertising & Marketing",
      subtitle: "Multi-Channel Promotion",
      desc: "Tailored brand campaigns designed to reach your target demographics across print, digital channels, and regional publicity networks.",
      icon: Megaphone,
      tag: "Campaigns",
      image: "/images/designs/items/advertising_agency.jpg"
    },
    {
      id: "graphic",
      title: "Graphic Designs",
      subtitle: "Impactful Visuals",
      desc: "Artistic flyers, brochures, menus, flex banners, and corporate presentation templates crafted to turn heads and convey your message.",
      icon: Palette,
      tag: "Print & Digital",
      image: "/images/designs/items/graphic_designs.jpg"
    },
    {
      id: "website",
      title: "Website Creation",
      subtitle: "Modern Web Solutions",
      desc: "Clean, responsive, fast-loading websites and e-commerce portals engineered for modern customer experiences and business growth.",
      icon: Globe,
      tag: "Web Dev",
      image: "/images/designs/items/website_creation.jpg"
    },
    {
      id: "social",
      title: "Social Media Posters",
      subtitle: "High-Engagement Visuals",
      desc: "Daily promo posters, festival greetings, announcement banners, and story graphics formatted for Instagram, Facebook, and WhatsApp.",
      icon: Share2,
      tag: "Social Media",
      image: "/images/designs/items/social_media_posters.jpg"
    },
    {
      id: "ads",
      title: "Advertisements",
      subtitle: "Strategic Commercials",
      desc: "Engaging commercial designs and publicity materials for newspapers, online ad placements, billboards, and local sponsorships.",
      icon: Sparkles,
      tag: "Paid Media",
      image: "/images/designs/items/advertisements.jpg"
    },
    {
      id: "logo",
      title: "LOGO Making Service",
      subtitle: "Distinct Corporate Identity",
      desc: "Iconic emblems, wordmarks, vector logos, and complete brand identity packages built to ensure timeless recognition.",
      icon: Award,
      tag: "Identity",
      image: "/images/designs/items/logo_making_service.jpg"
    },
    {
      id: "marketing",
      title: "Editing Productions",
      subtitle: "Photo, Video & Music",
      desc: "Professional multi-track audio engineering, cinematic 4K video editing, color grading, and high-end photo retouching.",
      icon: Video,
      tag: "Editing",
      image: "/images/designs/items/editing_productions.jpg"
    },
    {
      id: "content",
      title: "Content Creation",
      subtitle: "Storytelling & Copy",
      desc: "Persuasive copywriting, photography curation, voiceovers, scriptwriting, and creative direction for products and initiatives.",
      icon: FileText,
      tag: "Content",
      image: "/images/designs/items/content_creation.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1f1f1f] via-[#1a365d] to-[#1f1f1f] text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20">
            AMDG Media &amp; Designs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-montserrat tracking-tight mt-3">
            Designs &amp; Productions
          </h1>
          <p className="text-base sm:text-lg font-bitter text-gray-300 mt-2 italic">
            Professional graphic designing, website development, advertising, and creative services.
          </p>
        </div>
      </section>

      {/* Grid of 8 Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold">
            Full Creative Portfolio
          </span>
          <h2 className="text-3xl font-extrabold font-montserrat text-gray-900 mt-1">
            Designs Offered
          </h2>
          <div className="w-16 h-1 bg-amdg-blue mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-hover overflow-hidden"
              >
                {item.image && (
                  <div className="w-full h-48 overflow-hidden bg-gray-50 border-b border-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-amdg-blue flex items-center justify-center group-hover:bg-amdg-blue group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-lg text-gray-900 group-hover:text-amdg-blue transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amdg-blue mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs font-bitter text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={`https://wa.me/916282268453?text=Hello%20AMDG%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(item.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-amdg-blue hover:text-white text-gray-800 text-xs font-bold font-montserrat py-2.5 px-3 rounded-lg border border-gray-200 hover:border-amdg-blue transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Home Delivery Banner */}
        <div className="mt-14 bg-blue-50/70 border border-blue-200 rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-2">
            Doorstep Delivery of Flex, Banners, and Notices
          </h3>
          <p className="text-sm font-bitter text-gray-700 leading-relaxed mb-4">
            Customers can call and verify designs by your creation. Home Delivery of Flex, Banner, Notices are provided with less rate and friendly budget.
          </p>
          <a
            href="tel:+916282268453"
            className="inline-flex items-center gap-2 bg-amdg-blue hover:bg-amdg-blue-dark text-white font-montserrat font-bold text-sm px-6 py-2.5 rounded-lg shadow-sm transition-all"
          >
            Call Us: +91 62822 68453
          </a>
        </div>
      </section>
    </div>
  );
}
