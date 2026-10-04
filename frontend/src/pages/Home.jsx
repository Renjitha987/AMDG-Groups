import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Eye, Star, MapPin, ArrowRight, Phone, MessageSquare, 
  Sparkles, CheckCircle2, ShoppingBag, Palette, Video, ExternalLink,
  Target, Compass, Shield, Lightbulb, Handshake, GraduationCap, HeartHandshake,
  ChevronLeft, ChevronRight, Layers, FileText, CheckCircle, Award
} from 'lucide-react';
import { fetchSiteConfig, fetchVisitorStats, incrementVisitorStats, fetchTeam, fetchServices } from '../api';

export default function Home() {
  const [config, setConfig] = useState(null);
  const [stats, setStats] = useState({ total_visits_display: '10K+', today_visits_count: 67 });
  const [team, setTeam] = useState([]);
  const [services, setServices] = useState([]);
  const [displayMode, setDisplayMode] = useState('overview'); // 'overview' | 'slides'
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    async function loadData() {
      const cfg = await fetchSiteConfig();
      setConfig(cfg);
      const st = await fetchVisitorStats();
      if (st) setStats(st);
      const tm = await fetchTeam();
      setTeam(tm);
      const srv = await fetchServices('home_service');
      setServices(srv);
      
      // Auto-increment visitor stat for dynamic experience
      incrementVisitorStats().then(newSt => {
        if (newSt) setStats(newSt);
      });
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Header Section */}
      <section className="relative bg-[#1f1f1f] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Texture matching Vision theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('/images/img_18.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-black/50"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-montserrat uppercase tracking-widest text-amdg-blue-light">
            <Sparkles className="w-3.5 h-3.5 text-amdg-blue" />
            AMDG GROUP OF COMPANIES
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat tracking-tight leading-tight text-white drop-shadow-sm">
            AMDG GROUP Ltd
          </h1>

          {/* Authentic Biblical Motto */}
          <div className="max-w-2xl mx-auto pt-2">
            <blockquote className="text-lg sm:text-2xl font-bitter italic font-normal text-gray-200 leading-relaxed">
              “Commit to the Lord whatever you do, and he will establish your plans.”
            </blockquote>
            <p className="mt-2 text-sm font-semibold text-amdg-blue uppercase tracking-widest">
              (Proverbs 16:3)
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/memory-moulds"
              className="bg-amdg-blue hover:bg-amdg-blue-dark text-white font-montserrat font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Go To Shopping Site
            </Link>
            <Link
              to="/what-we-do"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-montserrat font-semibold text-sm px-6 py-3 rounded-lg transition-all"
            >
              Explore What We Do
            </Link>
          </div>
        </div>
      </section>

      {/* Visitor Counter Badges Section */}
      <section className="bg-amdg-gray py-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {/* Stat 1 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-amdg-blue flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-montserrat font-extrabold text-2xl text-amdg-blue">
                  {stats.total_visits_display}
                </div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Customer Visits
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <div className="font-montserrat font-extrabold text-2xl text-emerald-600">
                  {stats.today_visits_count}
                </div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  People Visited Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile, Vision, Mission & Values Section */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50/50 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-amdg-blue font-bold text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Corporate Profile & Direction
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-montserrat text-gray-900 tracking-tight">
              About AMDG Group
            </h2>
            <p className="mt-3 text-base sm:text-lg font-bitter text-gray-600">
              Pioneering creative excellence, transformative solutions, and purpose-driven impact since 2013.
            </p>

            {/* View Mode Switcher */}
            <div className="inline-flex p-1 mt-6 rounded-xl bg-gray-200/80 border border-gray-300/60 shadow-inner">
              <button
                onClick={() => setDisplayMode('overview')}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-montserrat font-bold transition-all ${
                  displayMode === 'overview'
                    ? 'bg-white text-amdg-blue shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <FileText className="w-4 h-4" /> Clear Overview
              </button>
              <button
                onClick={() => setDisplayMode('slides')}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-montserrat font-bold transition-all ${
                  displayMode === 'slides'
                    ? 'bg-white text-amdg-blue shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Layers className="w-4 h-4" /> Official Slide Presentation
              </button>
            </div>
          </div>

          {displayMode === 'overview' ? (
            <div className="space-y-12 animate-fade-in">
              
              {/* 1. About Us Hero Card */}
              <div className="bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amdg-blue/10 text-amdg-blue font-montserrat text-xs font-bold uppercase tracking-wider">
                    Since 2013 • Group of Companies
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-gray-900 leading-tight">
                    Dedicated to Fostering Innovation &amp; Delivering Excellence
                  </h3>
                  <div className="space-y-4 font-bitter text-gray-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      At <strong>AMDG Group</strong>, we are dedicated to fostering innovation and delivering excellence across every aspect of our work. As a team of creative thinkers, problem solvers, and industry experts, we specialize in crafting impactful solutions that resonate with today's ever-evolving landscape.
                    </p>
                    <p>
                      Whether it's transforming visionary ideas into tangible results or redefining boundaries through collaboration, our commitment remains rooted in driving meaningful progress for our clients, communities, and beyond.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-montserrat font-semibold text-xs">
                      ✓ Creative Thinking
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-montserrat font-semibold text-xs">
                      ✓ Problem Solving
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-montserrat font-semibold text-xs">
                      ✓ Industry Expertise
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 lg:p-8 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white flex flex-col justify-center h-full rounded-r-3xl">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
                    <img 
                      src="/images/home_slides/c2_about_us.jpg" 
                      alt="About AMDG Group" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-400 font-montserrat uppercase tracking-widest">
                      AMDG Group of Companies
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. Vision & Mission Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 text-amdg-blue flex items-center justify-center font-bold mb-6 shadow-sm">
                      <Target className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amdg-blue font-montserrat">
                      Our Guiding Direction
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-gray-900 mt-1 mb-4">
                      Our Vision
                    </h3>
                    <blockquote className="text-base sm:text-lg font-bitter italic text-gray-800 leading-relaxed bg-blue-50/60 p-5 rounded-2xl border-l-4 border-amdg-blue">
                      “To inspire and empower individuals and organizations to reach their fullest potential by turning challenges into opportunities and creativity into success.”
                    </blockquote>
                  </div>
                  <div className="relative z-10 pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Sparkles className="w-4 h-4 text-amdg-blue" />
                    <span>Inspiration • Empowerment • Turning Challenges into Success</span>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-6 shadow-sm">
                      <Compass className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 font-montserrat">
                      Our Core Purpose
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-gray-900 mt-1 mb-4">
                      Our Mission
                    </h3>
                    <div className="text-sm sm:text-base font-bitter text-gray-700 leading-relaxed space-y-3 bg-emerald-50/50 p-5 rounded-2xl border-l-4 border-emerald-500">
                      <p>
                        Our mission is to <strong>empower creativity</strong>, <strong>foster innovation</strong>, and deliver <strong>transformative solutions</strong> that drive meaningful progress.
                      </p>
                      <p>
                        We are committed to building lasting partnerships, embracing challenges as opportunities, and creating value that benefits our clients, communities, and stakeholders through integrity, collaboration, and a passion for excellence.
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Integrity • Collaboration • Shaping a Brighter Future</span>
                  </div>
                </div>
              </div>

              {/* 3. Objectives & Values Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* 5 Objectives */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-md">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amdg-blue font-montserrat">
                    Strategic Goals
                  </span>
                  <h3 className="text-2xl font-extrabold font-montserrat text-gray-900 mt-1 mb-6">
                    Our Core Objectives
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Foster Innovation",
                        desc: "Encourage creative thinking and groundbreaking solutions to drive progress and industry transformation.",
                        icon: Lightbulb,
                        color: "text-amber-500 bg-amber-50"
                      },
                      {
                        title: "Deliver Excellence",
                        desc: "Uphold the highest standards of quality, professionalism, and efficiency in every project we undertake.",
                        icon: Award,
                        color: "text-blue-500 bg-blue-50"
                      },
                      {
                        title: "Build Strong Partnerships",
                        desc: "Cultivate meaningful relationships with clients, stakeholders, and communities to create lasting value.",
                        icon: Handshake,
                        color: "text-emerald-500 bg-emerald-50"
                      },
                      {
                        title: "Empower Growth",
                        desc: "Provide opportunities for continuous learning, development, and leadership to inspire success at every level.",
                        icon: GraduationCap,
                        color: "text-purple-500 bg-purple-50"
                      },
                      {
                        title: "Create Impact",
                        desc: "Leverage our expertise to make a positive difference in the industries we serve and the communities we support.",
                        icon: Sparkles,
                        color: "text-rose-500 bg-rose-50"
                      }
                    ].map((obj, i) => {
                      const Icon = obj.icon;
                      return (
                        <div key={i} className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-100">
                          <div className={`w-10 h-10 rounded-xl ${obj.color} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-montserrat font-bold text-sm text-gray-900">
                              {obj.title}
                            </h4>
                            <p className="font-bitter text-xs sm:text-sm text-gray-600 mt-0.5 leading-relaxed">
                              {obj.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3 Values & Founder Card */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Values */}
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amdg-blue font-montserrat">
                      Guiding Principles
                    </span>
                    <h3 className="text-2xl font-extrabold font-montserrat text-gray-900 mt-1 mb-5">
                      Our Values
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Integrity",
                          desc: "Upholding the highest standards in everything we do.",
                          icon: Shield,
                          color: "bg-blue-50 text-amdg-blue"
                        },
                        {
                          title: "Innovation",
                          desc: "Pioneering bold, creative solutions for complex problems.",
                          icon: Lightbulb,
                          color: "bg-amber-50 text-amber-600"
                        },
                        {
                          title: "Collaboration",
                          desc: "Partnering with our clients and communities to create lasting value.",
                          icon: HeartHandshake,
                          color: "bg-emerald-50 text-emerald-600"
                        }
                      ].map((val, i) => {
                        const Icon = val.icon;
                        return (
                          <div key={i} className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100">
                            <div className={`w-10 h-10 rounded-xl ${val.color} flex items-center justify-center shrink-0`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-montserrat font-bold text-sm text-gray-900">
                                {val.title}
                              </h4>
                              <p className="font-bitter text-xs text-gray-600 mt-0.5">
                                {val.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Founder Spotlight Card */}
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white rounded-3xl p-8 shadow-lg border border-white/10 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/40 shadow-md shrink-0">
                        <img 
                          src="/images/team/ajin_shibu.jpg" 
                          alt="Mr. Ajin Shibu" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-amdg-blue-light block">
                          Meet Our Founder
                        </span>
                        <h4 className="font-montserrat font-extrabold text-lg text-white">
                          Mr. Ajin Shibu
                        </h4>
                        <p className="text-xs text-gray-300">
                          Founder &amp; Director, AMDG Group
                        </p>
                      </div>
                    </div>
                    <p className="font-bitter italic text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                      “Welcome to AMDG Group, where creativity meets purpose and innovation drives progress. Together, we strive to transform challenges into opportunities.”
                    </p>
                    <Link
                      to="/founder-md"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition-colors"
                    >
                      Read Full Biography <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* Slide Deck Carousel View */
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="bg-black/95 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 p-4 sm:p-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={`/images/home_slides/${[
                      'c1_amdg_group.jpg',
                      'c2_about_us.jpg',
                      'c3_our_vision.jpg',
                      'c4_our_mission.jpg',
                      'c5_our_objectives.jpg',
                      'c6_our_values.jpg',
                      'c7_meet_founder.jpg',
                    ][slideIndex]}`}
                    alt="Corporate Slide"
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Prev Button */}
                  <button
                    onClick={() => setSlideIndex((slideIndex - 1 + 7) % 7)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-sm transition-all border border-white/20"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={() => setSlideIndex((slideIndex + 1) % 7)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-sm transition-all border border-white/20"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <span className="text-xs font-montserrat font-bold text-gray-400">
                    Slide {slideIndex + 1} of 7: {[
                      'AMDG Group Introduction',
                      'About Us & Background',
                      'Our Vision',
                      'Our Mission',
                      'Strategic Objectives',
                      'Core Values',
                      'Meet Our Founder'
                    ][slideIndex]}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                          slideIndex === i ? 'w-6 bg-amdg-blue' : 'w-2 bg-gray-700 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14 border-t border-b border-gray-200 py-6">
          <h2 className="text-4xl font-extrabold font-montserrat text-[#2563eb]">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1: Joy Mart Shopping */}
          <div className="flex flex-col">
            <img 
              src="/images/services/shopping_joymart.jpg" 
              alt="JOY MART" 
              className="w-full h-auto"
            />
            <Link
              to="/memory-moulds"
              className="w-full bg-[#0277bd] text-white text-center font-montserrat font-semibold text-sm py-2"
            >
              Go To Shopping Site
            </Link>
            <div className="p-4 bg-white text-center">
              <p className="text-[13px] text-[#0277bd] font-bitter leading-relaxed">
                Go To Shopping Site from there you can purchase and know more about the products. JOY MART is opened and order from your fingertip. We provide with less rate with friendly budget.
              </p>
            </div>
          </div>

          {/* Service 2: Digital Works */}
          <div className="flex flex-col">
            <img 
              src="/images/services/digital_works.jpg" 
              alt="Digital Works" 
              className="w-full h-auto"
            />
            <Link
              to="/designs"
              className="w-full bg-[#0277bd] text-white text-center font-montserrat font-semibold text-sm py-2"
            >
              Click To Know More
            </Link>
            <div className="p-4 bg-white text-center">
              <p className="text-[13px] text-[#0277bd] font-bitter leading-relaxed">
                Digital Works are one our services. We provide works with less rate and printings. Customers can call and verify designs by your creation. Home Delivery of Flex, Banner, Notices are provided.
              </p>
            </div>
          </div>

          {/* Service 3: Editings */}
          <div className="flex flex-col">
            <img 
              src="/images/services/editings.jpg" 
              alt="Editings" 
              className="w-full h-auto"
            />
            <Link
              to="/amdg-media-designs"
              className="w-full bg-[#0277bd] text-white text-center font-montserrat font-semibold text-sm py-2"
            >
              Click To Know More
            </Link>
            <div className="p-4 bg-white text-center">
              <p className="text-[13px] text-[#0277bd] font-bitter leading-relaxed">
                Editings Such as Photo, Video, Music are provided by us. You can contact via call or whatsapp to get more information. Works are done in a friendly budget. Customers can avail offers via REFER CODE.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold">
              Leadership & Creative Staff
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-[#1f1f1f] mt-1">
              Our Team
            </h2>
            <div className="w-16 h-1 bg-amdg-blue mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* Member 1: Ajin Shibu */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-amdg-blue/20 shadow-md">
                <img 
                  src="/images/team/ajin_shibu.jpg" 
                  alt="Mr Ajin Shibu" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-900">
                Mr Ajin Shibu
              </h3>
              <p className="text-sm font-semibold text-amdg-blue uppercase tracking-wider mt-0.5 mb-3">
                Founder & CEO
              </p>
              <p className="text-xs text-gray-600 line-clamp-3 font-bitter mb-4 leading-relaxed">
                Visionary entrepreneur, designer, and social worker committed to transforming ideas into impactful realities.
              </p>
              <Link
                to="/founder-md"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amdg-blue hover:text-amdg-blue-dark transition-colors"
              >
                Read Full Biography <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Member 2: Jismon Varkey */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-200 shadow-md">
                <img 
                  src="/images/team/jismon_varkey.jpg" 
                  alt="Mr Jismon Varkey" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-900">
                Mr Jismon Varkey
              </h3>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mt-0.5 mb-3">
                Media Editor
              </p>
              <p className="text-xs text-gray-600 font-bitter leading-relaxed mb-4">
                Specialized in professional video post-production, photo retouching, color grading, and audio mastering for brands.
              </p>
              <a
                href="https://wa.me/916282268453"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Contact Media Desk
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Locate Us & Rate Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Details & Rate Us */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amdg-blue font-bold">
                Find Us in Kerala
              </span>
              <h2 className="text-3xl font-extrabold font-montserrat text-[#1f1f1f] mt-1">
                Locate Us & Rate Us
              </h2>
            </div>

            <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-amdg-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-montserrat font-bold text-gray-900 text-base">
                    AMDG Digital Media
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed font-bitter mt-1">
                    Pazhumattathil Buildings, Mar Sleeva Church, PO, Koodaranji, Calicut, Kerala 673604, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-blue-200/60">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-montserrat font-bold text-sm text-gray-800">
                  ★★★★★ · Media company
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://g.page/r/CXyj8Py1eCl0EAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amdg-blue hover:bg-amdg-blue-dark text-white font-montserrat font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Star className="w-4 h-4" /> Rate Us on Google Review
              </a>
              <a
                href="https://maps.google.com/?q=AMDG+Digital+Media+Pazhumattathil+Buildings+Koodaranji"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-montserrat font-semibold text-sm px-6 py-3 rounded-lg transition-all inline-flex items-center gap-2 border border-gray-200"
              >
                <ExternalLink className="w-4 h-4" /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Map Image preview */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative group">
            <img 
              src="/images/img_14.jpg" 
              alt="AMDG Digital Media Location" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = '/images/services/what_we_do_hero.jpg'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-blue-200">Koodaranji, Calicut, Kerala</p>
                <p className="font-montserrat font-bold text-lg">AMDG Digital Media Studio</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
