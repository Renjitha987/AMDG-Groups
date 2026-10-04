import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import FounderMD from './pages/FounderMD';
import WhatWeDo from './pages/WhatWeDo';
import AMDGMediaDesigns from './pages/AMDGMediaDesigns';
import Designs from './pages/Designs';
import MemoryMoulds from './pages/MemoryMoulds';
import More from './pages/More';
import AdminDashboard from './pages/AdminDashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Global keyboard shortcut for search (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <ScrollToTop />
      
      {/* Top Navbar (only for public consumer site) */}
      {!isAdminRoute && <Navbar onOpenSearch={() => setSearchOpen(true)} />}

      {/* Main Page Body */}
      <main className="flex-1 flex flex-col">
        <Routes>
          {/* Main Canonical Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/founder-md" element={<FounderMD />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/amdg-media-designs" element={<AMDGMediaDesigns />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/amdg-media-designs/designs" element={<Designs />} />
          <Route path="/memory-moulds" element={<MemoryMoulds />} />
          <Route path="/more" element={<More />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Google Sites direct path compatibility */}
          <Route path="/view/amdggroup/home" element={<Navigate to="/" replace />} />
          <Route path="/view/amdggroup/founder-md" element={<Navigate to="/founder-md" replace />} />
          <Route path="/view/amdggroup/what-we-do" element={<Navigate to="/what-we-do" replace />} />
          <Route path="/view/amdggroup/amdg-media-designs" element={<Navigate to="/amdg-media-designs" replace />} />
          <Route path="/view/amdggroup/amdg-media-designs/designs" element={<Navigate to="/designs" replace />} />
          <Route path="/view/amdggroup/memory-moulds" element={<Navigate to="/memory-moulds" replace />} />
          <Route path="/view/amdggroup/more" element={<Navigate to="/more" replace />} />

          {/* Catch-all to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer & Floating Widgets (only for public consumer site) */}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />}
      {!isAdminRoute && <FloatingWhatsApp phoneNumber="916282268453" />}
    </div>
  );
}
