import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] text-gray-300 pt-16 pb-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700/80">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amdg-blue to-amdg-accent flex items-center justify-center text-white font-montserrat font-extrabold text-xl shadow-md">
                A
              </div>
              <span className="font-montserrat font-bold text-xl text-white tracking-wide">
                AMDG GROUP Ltd
              </span>
            </div>
            <p className="text-sm text-gray-400 font-bitter leading-relaxed italic">
              “Commit to the Lord whatever you do, and he will establish your plans.” (Proverbs 16:3)
            </p>
            <div className="text-xs uppercase tracking-widest text-amdg-blue font-bold">
              AMDG GROUP OF COMPANIES
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amdg-blue shrink-0 mt-0.5" />
                <a href="tel:+916282268453" className="hover:text-white transition-colors">
                  +91 62822 68453
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amdg-blue shrink-0 mt-0.5" />
                <a href="mailto:groupamdg.india@gmail.com" className="hover:text-white transition-colors break-all">
                  groupamdg.india@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amdg-blue shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-gray-400">
                  AMDG Digital Media · Pazhumattathil Buildings, Mar Sleeva Church, PO, Koodaranji, Calicut, Kerala 673604, India
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/founder-md" className="text-gray-400 hover:text-white transition-colors">
                  Founder & MD (About Us)
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/more" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy & Legal Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-montserrat font-bold text-sm uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/amdg-media-designs" className="text-gray-400 hover:text-white transition-colors">
                  AMDG MEDIA & DESIGNS
                </Link>
              </li>
              <li>
                <Link to="/designs" className="text-gray-400 hover:text-white transition-colors">
                  Graphic Design & Advertising
                </Link>
              </li>
              <li>
                <Link to="/memory-moulds" className="text-gray-400 hover:text-white transition-colors">
                  JOY MART (Memory Moulds)
                </Link>
              </li>
              <li>
                <a 
                  href="http://www.amdgmedia.co.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amdg-blue hover:text-white text-xs font-semibold mt-2"
                >
                  Visit amdgmedia.co.in <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700/80 hover:bg-[#1877F2] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <img src="/images/img_15.png" alt="Facebook" className="w-4 h-4 object-contain" />
              </a>
              <a 
                href="https://www.instagram.com/amdg_media.official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700/80 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <img src="/images/img_16.png" alt="Instagram" className="w-4 h-4 object-contain" />
              </a>
              <a 
                href="https://wa.me/916282268453" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-700/80 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© COPYRIGHT 2026 AMDG GROUP OF COMPANIES. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link to="/more#privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/more#copyright" className="hover:text-gray-300">Copyright Terms</Link>
            <Link to="/more#terms" className="hover:text-gray-300">Terms & Conditions</Link>
            <Link to="/admin" className="text-gray-500 hover:text-amdg-blue transition-colors flex items-center gap-1 font-semibold">
              🔒 Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
