import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Inbox, 
  Palette, 
  Sliders, 
  Database, 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  Search, 
  RefreshCw, 
  TrendingUp, 
  Eye, 
  Phone, 
  Mail, 
  MessageCircle, 
  Save, 
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Filter,
  Check,
  Globe,
  Bell,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  Clock,
  Layers,
  Building2,
  FileText
} from 'lucide-react';
import { 
  fetchSiteConfig, 
  fetchVisitorStats, 
  incrementVisitorStats,
  fetchProducts, 
  fetchInquiries,
  fetchServices,
  updateProductStock,
  updateSiteConfig,
  updateVisitorStats
} from '../api';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  // Data states
  const [siteConfig, setSiteConfig] = useState(null);
  const [visitorStats, setVisitorStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [services, setServices] = useState([]);
  
  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  
  // Toast
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const loadAllData = async () => {
    setRefreshing(true);
    try {
      const [config, stats, prods, inqs, servs] = await Promise.all([
        fetchSiteConfig(),
        fetchVisitorStats(),
        fetchProducts(),
        fetchInquiries(),
        fetchServices()
      ]);
      setSiteConfig(config);
      setVisitorStats(stats);
      setProducts(prods);
      setInquiries(inqs);
      setServices(servs);
      if (inqs.length > 0 && !selectedInquiry) {
        setSelectedInquiry(inqs[0]);
      }
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // Stock toggle
  const handleToggleStock = async (product) => {
    const updatedStatus = !product.in_stock;
    setProducts(prev => prev.map(p => p.id === product.id ? { ...p, in_stock: updatedStatus } : p));
    await updateProductStock(product.id, updatedStatus);
    showToast(`"${product.name}" marked as ${updatedStatus ? 'IN STOCK' : 'SOLD OUT'}`);
  };

  // Visitor increment test
  const handleIncrementVisit = async () => {
    const res = await incrementVisitorStats();
    if (res) {
      setVisitorStats(res);
      showToast("Audience counter incremented (+1)");
    } else {
      setVisitorStats(prev => ({ ...prev, today_visits_count: (prev?.today_visits_count || 0) + 1 }));
      showToast("Audience counter incremented locally (+1)");
    }
  };

  // Save config
  const handleSaveConfig = async (e) => {
    e.preventDefault();
    await updateSiteConfig(siteConfig);
    showToast("Official corporate settings saved successfully!");
  };

  // Filtered products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (p.subtitle && p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSection = selectedSection === 'all' || p.section === selectedSection;
    const matchesStock = stockFilter === 'all' || 
                         (stockFilter === 'in_stock' && p.in_stock) || 
                         (stockFilter === 'sold_out' && !p.in_stock);
    return matchesSearch && matchesSection && matchesStock;
  });

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col md:flex-row antialiased font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-fade-in">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">System Notification</p>
            <p className="text-xs font-semibold text-slate-100">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. EXECUTIVE FORMAL SIDEBAR (Navy / Slate-900, Formal Corporate Look) */}
      {/* ========================================================================= */}
      <aside className="w-full md:w-72 lg:w-80 bg-[#0f172a] border-r border-slate-800 flex flex-col justify-between shrink-0 md:h-screen md:sticky md:top-0 z-40 text-slate-300">
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-lg text-white shadow-md">
                A
              </div>
              <div>
                <h1 className="font-montserrat font-extrabold text-sm tracking-tight text-white flex items-center gap-2">
                  AMDG GROUP Ltd
                  <span className="text-[9px] uppercase font-bold tracking-widest bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                    Official
                  </span>
                </h1>
                <p className="text-[11px] text-slate-400 font-medium">Administration &amp; Operations</p>
              </div>
            </div>
          </div>

          {/* System Status Pill */}
          <div className="mx-6 my-4 px-3.5 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] font-semibold text-slate-300">System Connected</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 font-medium">Port 8000</span>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Management Portal
            </p>

            {[
              { id: 'overview', label: 'Executive Dashboard', icon: LayoutDashboard },
              { id: 'products', label: 'Products & Inventory', icon: Package, badge: products.length },
              { id: 'inquiries', label: 'Customer Inquiries', icon: Inbox, badge: inquiries.length, badgeColor: 'bg-rose-500/20 text-rose-300 border border-rose-500/30' },
              { id: 'services', label: 'Creative Services', icon: Palette, badge: services.length },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors duration-150 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.badgeColor || (isActive ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-300')
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 pt-5 mb-2">
              System Administration
            </p>

            {[
              { id: 'settings', label: 'Corporate Configuration', icon: Sliders },
              { id: 'django', label: 'Django Database Console', icon: Database, badge: '8000' },
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors duration-150 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>View Public Website</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 flex items-center justify-center font-bold text-xs">
              AD
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-white truncate">Administrator</p>
              <p className="text-[10px] text-slate-400 truncate">admin@amdggroup.in</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN FORMAL WORKSPACE CANVAS (100% Full Width, Clean Executive Gray) */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f8fafc] overflow-x-hidden">
        
        {/* Top Formal Header Bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-6 lg:px-10 h-16 flex items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-2 min-w-0 text-xs">
            <span className="font-semibold text-slate-500">AMDG Administration</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <h2 className="font-montserrat font-bold text-sm text-slate-900 capitalize truncate">
              {activeTab === 'overview' ? 'Executive Dashboard' : 
               activeTab === 'products' ? 'Products & Inventory' :
               activeTab === 'inquiries' ? 'Customer Inquiries & Leads' :
               activeTab === 'services' ? 'Creative Services Catalog' :
               activeTab === 'settings' ? 'Corporate Configuration' : 'Django Database Console'}
            </h2>
          </div>

          {/* Quick Metrics Bar & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Audience:</span>
                <span className="font-bold text-slate-900 font-montserrat">{visitorStats?.total_visits_display || '10K+'}</span>
              </div>
              <div className="w-px h-3 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-medium">Today Visits:</span>
                <span className="font-bold text-slate-900 font-montserrat">{visitorStats?.today_visits_count ?? 85}</span>
                <button 
                  onClick={handleIncrementVisit}
                  className="ml-1 px-2 py-0.5 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-[10px] transition-colors"
                  title="Simulate +1 visitor"
                >
                  +1
                </button>
              </div>
            </div>

            <button
              onClick={loadAllData}
              disabled={refreshing}
              className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-blue-600' : ''}`} />
            </button>

            <a
              href="http://127.0.0.1:8000/admin/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Django Console</span>
            </a>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-6 lg:p-10 space-y-8 max-w-full">
          
          {/* ========================================================================= */}
          {/* TAB 1: EXECUTIVE DASHBOARD */}
          {/* ========================================================================= */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Top 4 KPI Metrics (Formal White Cards with Corporate Accents) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                
                {/* Metric 1: Total Audience */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Audience Reach</span>
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-extrabold font-montserrat text-slate-900 tracking-tight">
                      {visitorStats?.total_visits_display || '10K+'}
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Cumulative customer visits recorded</p>
                </div>

                {/* Metric 2: Today Visits */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Today Visits</span>
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-extrabold font-montserrat text-slate-900 tracking-tight">
                      {visitorStats?.today_visits_count ?? 85}
                    </div>
                    <button
                      onClick={handleIncrementVisit}
                      className="text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded transition-colors"
                    >
                      +1 Simulate
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Daily traffic activity</p>
                </div>

                {/* Metric 3: Active Products */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Products in Catalog</span>
                    <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Package className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-extrabold font-montserrat text-slate-900 tracking-tight">
                      {products.length}
                    </div>
                    <span className="text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded">
                      {products.filter(p => p.in_stock).length} In Stock
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Memory Moulds &amp; Joy Mart orders</p>
                </div>

                {/* Metric 4: Customer Inquiries */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Customer Inquiries</span>
                    <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Inbox className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-3xl font-extrabold font-montserrat text-slate-900 tracking-tight">
                      {inquiries.length}
                    </div>
                    <span className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                      New Leads
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Direct customer order requests</p>
                </div>
              </div>

              {/* Main Split Grid (Formal Corporate Tables) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left (8 Cols): Fast Inventory Control Table */}
                <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 lg:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-montserrat font-bold text-base text-slate-900">Memory Moulds Product Status</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Manage live stock availability and test WhatsApp ordering</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('products')}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      View All {products.length} Products <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                          <th className="py-3 px-4">Item Details</th>
                          <th className="py-3 px-4">Section</th>
                          <th className="py-3 px-4">Availability</th>
                          <th className="py-3 px-4 text-right">Order Test</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs">
                        {products.slice(0, 6).map((p) => (
                          <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3.5 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={p.image_url}
                                  alt={p.name}
                                  className="w-10 h-10 rounded-lg object-cover border border-slate-200 shadow-2xs"
                                />
                                <div>
                                  <span className="font-montserrat font-bold text-slate-900 block">{p.name}</span>
                                  <span className="text-[11px] text-slate-500">{p.subtitle || 'Personalized Gift'}</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                                {p.section}
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <button
                                onClick={() => handleToggleStock(p)}
                                className={`px-3 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                                  p.in_stock
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                                    : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                                }`}
                              >
                                {p.in_stock ? '● In Stock' : '○ Sold Out'}
                              </button>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <a
                                href={`https://wa.me/${p.whatsapp_phone || '916282268453'}?text=Test+Order+for+${encodeURIComponent(p.name)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-[11px] font-semibold transition-colors"
                              >
                                <MessageCircle className="w-3.5 h-3.5" /> Test Order
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right (4 Cols): Recent Inquiries Feed */}
                <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-6 lg:p-8 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <div>
                        <h3 className="font-montserrat font-bold text-base text-slate-900">Recent Inquiries</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Leads submitted via customer forms</p>
                      </div>
                      <button
                        onClick={() => setActiveTab('inquiries')}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                      >
                        View All →
                      </button>
                    </div>

                    <div className="space-y-3">
                      {inquiries.slice(0, 3).map((inq, i) => (
                        <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-montserrat font-bold text-sm text-slate-900">{inq.name}</span>
                            <span className="text-[10px] text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold">
                              {inq.subject || 'Order'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 line-clamp-2 font-bitter">{inq.message}</p>
                          <div className="pt-2 flex items-center justify-between border-t border-slate-200/60 text-[11px]">
                            <span className="text-slate-500">📞 {inq.phone}</span>
                            <a
                              href={`https://wa.me/${inq.phone?.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1"
                            >
                              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Database Log</span>
                    <a
                      href="http://127.0.0.1:8000/admin/core_api/inquiry/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1"
                    >
                      Open in Django Admin <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: PRODUCTS & INVENTORY (FULL SCREEN FORMAL TABLE) */}
          {/* ========================================================================= */}
          {activeTab === 'products' && (
            <div className="space-y-6 animate-fade-in">
              {/* Full Width Filter Toolbar */}
              <div className="bg-white rounded-xl p-4 lg:p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative w-full md:w-96">
                  <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, price, description..."
                    className="w-full pl-11 pr-4 py-2.5 rounded-lg text-xs sm:text-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  {['all', 'hampers', 'keychains', 'wallets'].map((sec) => (
                    <button
                      key={sec}
                      onClick={() => setSelectedSection(sec)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold capitalize transition-colors ${
                        selectedSection === sec
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                      }`}
                    >
                      {sec === 'all' ? `All Sections (${products.length})` : sec}
                    </button>
                  ))}

                  <div className="w-px h-6 bg-slate-200 mx-2 hidden sm:block"></div>

                  <select
                    value={stockFilter}
                    onChange={(e) => setStockFilter(e.target.value)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 focus:outline-hidden"
                  >
                    <option value="all">All Availability</option>
                    <option value="in_stock">In Stock Only</option>
                    <option value="sold_out">Sold Out Only</option>
                  </select>
                </div>
              </div>

              {/* Products Table (Full Screen Width) */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="font-montserrat font-bold text-sm text-slate-900">
                    Catalog Inventory ({filteredProducts.length} items)
                  </h3>
                  <span className="text-xs text-slate-500">Live synchronized with Google Sites authentic assets</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                        <th className="py-3.5 px-6">Preview</th>
                        <th className="py-3.5 px-6">Product Details</th>
                        <th className="py-3.5 px-6">Category</th>
                        <th className="py-3.5 px-6">Inventory State</th>
                        <th className="py-3.5 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-4 px-6">
                            <img
                              src={p.image_url}
                              alt={p.name}
                              className="w-14 h-14 rounded-lg object-cover border border-slate-200 shadow-2xs"
                            />
                          </td>
                          <td className="py-4 px-6">
                            <h4 className="font-montserrat font-bold text-slate-900 text-sm">{p.name}</h4>
                            <p className="text-xs text-blue-600 font-semibold mt-0.5">{p.subtitle || 'Personalized Gift'}</p>
                            <p className="text-xs text-slate-500 font-bitter line-clamp-1 mt-1">{p.description}</p>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-3 py-1 rounded text-xs font-semibold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                              {p.section}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <button
                              onClick={() => handleToggleStock(p)}
                              className={`px-3.5 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer shadow-2xs ${
                                p.in_stock
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                                  : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                              }`}
                            >
                              {p.in_stock ? '● In Stock' : '○ Sold Out'}
                            </button>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="inline-flex items-center gap-2">
                              <a
                                href={`https://wa.me/${p.whatsapp_phone || '916282268453'}?text=Test+Order+for+${encodeURIComponent(p.name)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-2xs flex items-center gap-1.5"
                              >
                                <MessageCircle className="w-3.5 h-3.5" /> Test Order
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: CUSTOMER INQUIRIES & LEADS (SPLIT INBOX VIEW) */}
          {/* ========================================================================= */}
          {activeTab === 'inquiries' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in">
              {/* Left Inbox List */}
              <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <h3 className="font-montserrat font-bold text-sm text-slate-900">Inquiries Received</h3>
                  <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded font-semibold">
                    {inquiries.length} Inquiries
                  </span>
                </div>

                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                  {inquiries.map((inq, i) => {
                    const isSelected = selectedInquiry?.id === inq.id;
                    return (
                      <div
                        key={i}
                        onClick={() => setSelectedInquiry(inq)}
                        className={`p-4 rounded-xl border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-400 shadow-2xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-montserrat font-bold text-slate-900 text-sm">{inq.name}</h4>
                          <span className="text-[11px] text-slate-400">
                            {inq.created_at ? new Date(inq.created_at).toLocaleDateString() : 'Recent'}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-blue-700">{inq.subject || inq.product_name || 'General Inquiry'}</p>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1 font-bitter">{inq.message}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Lead Detail Card */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between">
                {selectedInquiry ? (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between border-b border-slate-200 pb-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Client Profile</span>
                        <h3 className="font-montserrat font-extrabold text-2xl text-slate-900 mt-1">{selectedInquiry.name}</h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Submitted on: {selectedInquiry.created_at ? new Date(selectedInquiry.created_at).toLocaleString() : 'Recent'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/${selectedInquiry.phone?.replace(/\D/g, '')}?text=Hi+${encodeURIComponent(selectedInquiry.name)},+thank+you+for+contacting+AMDG+Group.`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-2xs transition-colors flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" /> Reply via WhatsApp
                        </a>
                        <a
                          href={`tel:${selectedInquiry.phone}`}
                          className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors flex items-center gap-2"
                        >
                          <Phone className="w-4 h-4" /> Call
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Phone Number</span>
                        <span className="text-sm font-montserrat font-bold text-slate-900 mt-1 block">{selectedInquiry.phone}</span>
                      </div>
                      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Email Address</span>
                        <span className="text-sm font-montserrat font-bold text-slate-900 mt-1 block">{selectedInquiry.email || 'Not specified'}</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Customer Message / Requirements</span>
                      <p className="text-sm text-slate-800 font-bitter leading-relaxed whitespace-pre-wrap">
                        {selectedInquiry.message}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-slate-400">
                    <Inbox className="w-12 h-12 stroke-1 mb-2" />
                    <p className="text-sm font-medium">Select an inquiry from the left to view details</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: CREATIVE SERVICES */}
          {/* ========================================================================= */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-slate-900">Creative Services &amp; Designs</h3>
                    <p className="text-xs text-slate-500 mt-1">Official graphic design cards and media offerings presented on public routes</p>
                  </div>
                  <a
                    href="/designs"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    View Public Gallery <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {services.map((srv, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-400 transition-colors flex flex-col justify-between shadow-2xs">
                      <div>
                        {srv.image_url ? (
                          <div className="aspect-16/10 rounded-lg overflow-hidden mb-3 border border-slate-200">
                            <img src={srv.image_url} alt={srv.title} className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="aspect-16/10 rounded-lg bg-slate-100 flex items-center justify-center mb-3 text-slate-400 text-xs">
                            No Graphic
                          </div>
                        )}
                        <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {srv.category}
                        </span>
                        <h4 className="font-montserrat font-bold text-sm text-slate-900 mt-2">{srv.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-bitter">{srv.description || srv.subtitle}</p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-mono">Order: #{srv.order}</span>
                        <a
                          href={srv.link_url || '/what-we-do'}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          View <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: SITE CONFIGURATION */}
          {/* ========================================================================= */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl p-8 lg:p-10 border border-slate-200 shadow-xs max-w-4xl mx-auto animate-fade-in">
              <div className="border-b border-slate-200 pb-6 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Official Settings</span>
                <h3 className="font-montserrat font-extrabold text-xl text-slate-900 mt-1">Corporate &amp; Site Configuration</h3>
                <p className="text-xs text-slate-500 mt-1 font-bitter">
                  Update official company contact numbers, WhatsApp lines, email inboxes, and legal terms.
                </p>
              </div>

              {siteConfig && (
                <form onSubmit={handleSaveConfig} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        value={siteConfig.company_name || ''}
                        onChange={(e) => setSiteConfig({ ...siteConfig, company_name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Tagline</label>
                      <input
                        type="text"
                        value={siteConfig.tagline || ''}
                        onChange={(e) => setSiteConfig({ ...siteConfig, tagline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Primary Phone</label>
                      <input
                        type="text"
                        value={siteConfig.phone_primary || ''}
                        onChange={(e) => setSiteConfig({ ...siteConfig, phone_primary: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">WhatsApp Orders Line</label>
                      <input
                        type="text"
                        value={siteConfig.whatsapp_orders || ''}
                        onChange={(e) => setSiteConfig({ ...siteConfig, whatsapp_orders: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Primary Email</label>
                      <input
                        type="email"
                        value={siteConfig.email_primary || ''}
                        onChange={(e) => setSiteConfig({ ...siteConfig, email_primary: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Legal Email</label>
                      <input
                        type="email"
                        value={siteConfig.email_legal || ''}
                        onChange={(e) => setSiteConfig({ ...siteConfig, email_legal: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Corporate Address</label>
                    <textarea
                      rows={3}
                      value={siteConfig.address || ''}
                      onChange={(e) => setSiteConfig({ ...siteConfig, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden font-bitter"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Motto / Bible Verse</label>
                    <input
                      type="text"
                      value={siteConfig.bible_verse || ''}
                      onChange={(e) => setSiteConfig({ ...siteConfig, bible_verse: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-hidden italic font-bitter"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-bold text-xs shadow-xs transition-colors flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" /> Save Configuration
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: DJANGO BACKEND CONSOLE */}
          {/* ========================================================================= */}
          {activeTab === 'django' && (
            <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-xs max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto shadow-md">
                <Database className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Database &amp; Administration</span>
                <h3 className="text-xl font-bold font-montserrat text-slate-900 mt-1">Django Management Console</h3>
                <p className="text-xs text-slate-500 mt-1 font-bitter max-w-md mx-auto leading-relaxed">
                  Direct database access to models, permissions, auth user records, and backend tables.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-left max-w-md mx-auto text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service URL:</span>
                  <span className="text-blue-600 font-bold">http://127.0.0.1:8000/admin/</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Username:</span>
                  <span className="text-slate-900 font-bold">admin</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Password:</span>
                  <span className="text-slate-900 font-bold">admin123</span>
                </div>
              </div>

              <div>
                <a
                  href="http://127.0.0.1:8000/admin/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-montserrat font-bold text-xs shadow-xs transition-colors"
                >
                  <span>Open Django Admin</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
