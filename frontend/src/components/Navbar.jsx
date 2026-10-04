import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Founder & MD', path: '/founder-md' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'AMDG Media & Designs', path: '/amdg-media-designs' },
    { name: 'Designs', path: '/designs' },
    { name: 'Memory Moulds', path: '/memory-moulds' },
    { name: 'More', path: '/more' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amdg-blue to-amdg-accent flex items-center justify-center text-white font-montserrat font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <span className="font-montserrat font-bold text-lg sm:text-xl tracking-tight text-gray-900 group-hover:text-amdg-blue transition-colors block">
                AMDG GROUP Ltd
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold block -mt-0.5">
                Creating Creativity
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold tracking-wide transition-all border-b-2 ${
                    isActive
                      ? 'border-amdg-blue text-amdg-blue font-bold'
                      : 'border-transparent text-gray-700 hover:text-amdg-blue hover:border-amdg-blue/40'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Search & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200/80 transition-all border border-gray-200"
              title="Search this site (Ctrl + K)"
            >
              <Search className="w-4 h-4 text-amdg-blue" />
              <span className="hidden sm:inline">Search site</span>
              <kbd className="hidden md:inline text-[10px] bg-white px-1.5 py-0.5 rounded text-gray-400 border border-gray-200">
                ⌘K
              </kbd>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  isActive
                    ? 'bg-amdg-blue-light text-amdg-blue font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/916282268453"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg font-bold text-sm"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
