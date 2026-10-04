import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Video, Megaphone, ShoppingCart, ArrowRight, Sparkles, Scissors, Image as ImageIcon, Music } from 'lucide-react';

export default function AMDGMediaDesigns() {
  const sections = [
    {
      id: "graphic-designs",
      title: "Graphic Design Services",
      image: "/images/designs/graphic_design_services.jpg",
      desc: "Custom logos, flyers, corporate branding, social media posts, and visual communication created with cutting-edge software and artistic finesse.",
      link: "/designs",
      btnText: "Explore Designs Portfolio"
    },
    {
      id: "editings",
      title: "Editing Productions",
      image: "/images/designs/editing_productions.jpg",
      desc: "Professional multi-track audio engineering, cinematic 4K video editing, color grading, and high-end photo retouching. Avail discounts via REFER CODE.",
      link: "https://wa.me/916282268453?text=Hello%20AMDG%2C%20I%20am%20inquiring%20about%20Editing%20Productions%20(Photo/Video/Music).",
      btnText: "Contact Media Desk",
      isExternal: true
    },
    {
      id: "ads-marketing",
      title: "Ads & Marketing",
      image: "/images/designs/ads_and_marketing.jpg",
      desc: "Strategic advertising agency solutions, targeted social campaigns, digital ads, and physical print distributions across regional and digital networks.",
      link: "/designs#advertising",
      btnText: "View Marketing Services"
    },
    {
      id: "joy-mart",
      title: "JOY Mart Online Shopping",
      image: "/images/designs/joy_mart_shopping.jpg",
      desc: "AMDG's dedicated e-commerce boutique featuring customized gift hampers, name-engraved leather wallets, and customized keepsakes with fast home delivery.",
      link: "/memory-moulds",
      btnText: "Visit Joy Mart Shopping"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1f1f1f] via-[#1e3a5f] to-[#1f1f1f] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20">
            AMDG GROUP OF COMPANIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-montserrat tracking-tight mt-3">
            AMDG Media &amp; Designs
          </h1>
        </div>
      </section>

      {/* Subtitle matching reference site */}
      <div className="py-6 px-4 text-center border-b border-gray-100">
        <p className="text-base sm:text-lg font-bitter font-bold text-[#0277bd]">
          Here you'll Find our services provided by AMDG Group Of Companies.
        </p>
      </div>

      {/* Main 4 Services Showcase Grid Matching Reference Screenshot */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {sections.map((item) => (
            <div key={item.id} className="flex flex-col items-center group">
              {item.isExternal ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="w-full overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </Link>
              )}
              <h3 className="text-xl sm:text-2xl font-bold font-bitter text-[#1f1f1f] mt-4 text-center group-hover:text-amdg-blue transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Art & Craft Boutique and Editings Detailed Row */}
        <div id="art-craft" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Art & Craft Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold font-montserrat text-gray-900">
                Art &amp; Craft Boutique
              </h3>
            </div>
            <p className="text-sm font-bitter text-gray-700 leading-relaxed mb-4">
              Unique handcrafted gifts, custom resin moulds, customized decorative pieces, and bespoke anniversary/birthday tokens created with artisanal love.
            </p>
            <Link
              to="/memory-moulds"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
            >
              Browse Craft Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Editings Suite Card */}
          <div id="editings" className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/80 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold font-montserrat text-gray-900">
                Editings Specialization
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-montserrat font-semibold text-gray-700 mb-4">
              <div className="bg-white/80 p-2 rounded-xl border border-purple-100 flex flex-col items-center gap-1">
                <ImageIcon className="w-4 h-4 text-purple-600" /> Photo Editings
              </div>
              <div className="bg-white/80 p-2 rounded-xl border border-purple-100 flex flex-col items-center gap-1">
                <Video className="w-4 h-4 text-blue-600" /> Video Editings
              </div>
              <div className="bg-white/80 p-2 rounded-xl border border-purple-100 flex flex-col items-center gap-1">
                <Music className="w-4 h-4 text-emerald-600" /> Music Editings
              </div>
            </div>
            <p className="text-xs font-bitter text-gray-600 leading-relaxed">
              Customers can avail special discounts using a <strong>REFER CODE</strong>. Contact our editing desk via call or WhatsApp.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
