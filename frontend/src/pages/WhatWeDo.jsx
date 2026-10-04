import React from 'react';
import { Star, CheckCircle, Sparkles, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeDo() {
  const servicesList = [
    { title: "Brand Identity & Logo Design", desc: "Crafting memorable trademarks, logos, brand guides, and cohesive visual identities." },
    { title: "Graphic Design & Creative Content", desc: "Striking graphics tailored for promotional campaigns, brochures, and digital displays." },
    { title: "Website Design & Development", desc: "Modern responsive web applications, hosting setups, and online portfolios." },
    { title: "Social Media Management", desc: "Consistent posting schedules, community engagement, and brand reach amplification." },
    { title: "Digital Marketing", desc: "Targeted campaigns engineered to acquire leads and elevate visibility across platforms." },
    { title: "Photography & Videography", desc: "Studio product photography, event recordings, promotional reels, and commercial shoots." },
    { title: "Printing & Promotional Materials", desc: "Flex banners, hoardings, flyers, notices, business cards with prompt doorstep delivery." },
    { title: "Business Registration & Documentation Assistance", desc: "Guidance with enterprise paperwork, license documentation, and formal filings." },
    { title: "Online Application Services", desc: "Swift assistance for digital paperwork, public portal applications, and e-services." },
    { title: "Content Creation & Media Production", desc: "Engaging multimedia storytelling, podcast/audio mastering, and promotional clips." },
    { title: "Event Branding & Publicity", desc: "Complete visual kits, stage backdrops, posters, and outreach for events." },
    { title: "Corporate Profile Design", desc: "Authoritative, elegant company profile dossiers designed to impress stakeholders." },
    { title: "Presentation Design", desc: "High-impact pitch decks and interactive visual presentations for businesses." },
    { title: "Business Consultancy", desc: "Practical guidance to align design, technology, and operations for sustainable growth." },
    { title: "Technology & Digital Solutions", desc: "Custom web systems, digital integrations, and modern automation tools." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1f1f1f] via-[#243342] to-[#1f1f1f] text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20">
            AMDG MEDIA
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-montserrat tracking-tight mt-3">
            What We Do
          </h1>
          <p className="text-base sm:text-lg font-bitter text-gray-300 mt-2 italic">
            AMDG MEDIA provides comprehensive solutions.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Intro Highlight Box */}
        <div className="bg-blue-50/70 border border-blue-200/70 rounded-2xl p-6 sm:p-8 mb-12 text-center max-w-3xl mx-auto">
          <Sparkles className="w-6 h-6 text-amdg-blue mx-auto mb-2" />
          <h2 className="text-xl sm:text-2xl font-bold font-montserrat text-gray-900 mb-2">
            AMDG MEDIA provides comprehensive solutions.
          </h2>
          <p className="text-sm font-bitter text-gray-700 leading-relaxed">
            Our integrated approach allows clients to access multiple professional services from a single trusted partner.
          </p>
        </div>

        {/* 15 Services Grid with Star Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((srv, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-amdg-blue/40 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-amdg-blue group-hover:text-white transition-colors">
                    ★
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-gray-900 group-hover:text-amdg-blue transition-colors">
                    {srv.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-bitter leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-amdg-blue">
                <span>Inquire Service</span>
                <a 
                  href={`https://wa.me/916282268453?text=Hello%20AMDG%2C%20I%20am%20interested%20in%20${encodeURIComponent(srv.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  WhatsApp <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-[#1f1f1f] text-white text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl font-bold font-montserrat mb-3">
            Ready to Build Your Next Project With Us?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto font-bitter mb-6 leading-relaxed">
            Our integrated approach allows clients to access multiple professional services from a single trusted partner. Contact us today for friendly budget solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/916282268453"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white font-montserrat font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Chat on WhatsApp (+91 62822 68453)
            </a>
            <Link
              to="/designs"
              className="bg-white/10 hover:bg-white/20 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-lg transition-all border border-white/20"
            >
              View Designs & Media
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
