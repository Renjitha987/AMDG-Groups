import React from 'react';
import { ExternalLink, Phone, MessageSquare, Award, Sparkles } from 'lucide-react';

export default function FounderMD() {
  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/aj.in_shi.bu/', icon: '/images/img_16.png', color: 'hover:bg-[#E4405F]' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ajin-shibu/', icon: '/images/img_20.png', color: 'hover:bg-[#0A66C2]' },
    { name: 'WhatsApp', url: 'http://wa.me/918590527277', isPhone: true, color: 'hover:bg-[#25D366]' },
    { name: 'Facebook', url: 'https://www.facebook.com/ajin.shibugeorge/', icon: '/images/img_15.png', color: 'hover:bg-[#1877F2]' },
    { name: 'X (Twitter)', url: 'https://x.com/ajinshibu', icon: '/images/img_22.png', color: 'hover:bg-black' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#1f1f1f] via-[#2c3e50] to-[#1f1f1f] text-white py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20">
            Leadership Profile
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-montserrat tracking-tight mt-3">
            Founder & MD
          </h1>
          <p className="text-sm sm:text-base font-bitter text-gray-300 mt-2 italic">
            AMDG GROUP Ltd — Driven by Purpose, Dedicated to Creativity
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            
            {/* Profile Intro */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 pb-10 border-b border-gray-100">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white shrink-0 bg-gray-100 ring-1 ring-gray-200">
                <img 
                  src="/images/team/ajin_shibu.jpg" 
                  alt="Ajin Shibu - Founder & Director" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-amdg-blue font-semibold text-xs mb-2">
                  <Award className="w-3.5 h-3.5" /> Founder & Director
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-gray-900 tracking-tight">
                  Ajin Shibu
                </h2>
                <p className="text-sm font-semibold text-gray-500 font-montserrat mt-0.5">
                  Founder & Director, AMDG Group
                </p>

                {/* Social Connect Badges */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold hover:text-white transition-all shadow-sm ${s.color}`}
                    >
                      {s.isPhone ? (
                        <Phone className="w-3.5 h-3.5" />
                      ) : (
                        <img src={s.icon} alt={s.name} className="w-3.5 h-3.5 object-contain" />
                      )}
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Biography Paragraphs */}
            <div className="pt-10 space-y-6 text-gray-700 font-bitter text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900 font-montserrat font-bold">Ajin Shibu</strong> is a visionary entrepreneur, designer, and social worker committed to transforming ideas into impactful realities. With a passion for creativity and innovation, he founded AMDG Group as a platform to bridge artistic excellence with purpose-driven solutions. His expertise in design, media, and digital works allows him to craft unique experiences that inspire, engage, and leave a lasting impact.
              </p>

              <p>
                Beyond the creative realm, Ajin's background in social work gives him a deep understanding of community needs and the power of media in driving positive change. His ability to blend creativity with social consciousness has shaped AMDG Group’s core values, ensuring that every project not only delivers excellence but also contributes to a greater good. He believes in the power of collaboration, fostering an environment where ideas thrive, and innovation flourishes.
              </p>

              <p>
                Under his leadership, AMDG Group has grown into a trusted name in the industry, known for its commitment to quality, integrity, and groundbreaking creativity. Ajin’s vision is to continue pushing the boundaries of design and digital innovation while empowering individuals and organizations to achieve their fullest potential. Through AMDG Group, he strives to create a legacy of meaningful impact, driven by the motto{' '}
                <span className="font-montserrat font-extrabold text-amdg-blue bg-blue-50 px-2 py-0.5 rounded">
                  Creating Creativity.
                </span>
              </p>
            </div>

            {/* Quote Callout */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-center">
              <Sparkles className="w-6 h-6 text-amdg-blue mx-auto mb-2" />
              <blockquote className="text-base sm:text-lg font-bitter italic text-gray-800 font-medium">
                “Bridging artistic excellence with purpose-driven solutions for a greater good.”
              </blockquote>
              <span className="block mt-2 text-xs font-bold uppercase tracking-wider text-amdg-blue">
                — Ajin Shibu
              </span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
