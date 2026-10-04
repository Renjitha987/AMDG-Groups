import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Truck, Phone, MessageSquare, CheckCircle, 
  Sparkles, Filter, ShieldCheck, Heart 
} from 'lucide-react';
import { fetchProducts } from '../api';
import OrderModal from '../components/OrderModal';

export default function MemoryMoulds() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await fetchProducts();
      setProducts(data);
    }
    load();
  }, []);

  const handleOrder = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.section === activeTab);

  return (
    <div className="min-h-screen bg-gray-50/50">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#182a3a] via-[#103046] to-[#182a3a] text-white py-16 sm:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20">
            MEMORY MOULDS BOUTIQUE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-montserrat tracking-tight mt-3">
            JOY MART — Online Shopping
          </h1>
          <p className="text-base sm:text-lg font-bitter text-gray-300 mt-2 italic">
            Order custom handcrafted gifts, personalized wallets, and bespoke memory items directly to your door.
          </p>

          {/* Highlights Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-semibold border border-white/20">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Delivery within 7 Days of confirming order</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-semibold border border-white/20">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>TollFree No: +91 62822 68453</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-emerald-300 border border-emerald-400/40">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>2204+ Successful Deliveries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <section className="max-w-5xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/90 shadow-md flex items-start sm:items-center gap-3 bg-gradient-to-r from-amber-50/60 to-orange-50/40">
          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 font-bold">
            !
          </div>
          <div className="text-xs sm:text-sm text-gray-700 font-bitter leading-relaxed flex-1">
            <strong>Order Notice:</strong> Customers please note you can click the <strong>Order Now</strong> option and you will be directed to WhatsApp Chat to confirm and complete your order. Delivery is fulfilled directly by the Memory Moulds team. For complaints and queries, call <strong>+91 62822 68453</strong>.
          </div>
        </div>
      </section>

      {/* Authentic Joy Mart Graphic Banner */}
      <section className="max-w-5xl mx-auto px-4 mt-8">
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <img 
            src="/images/services/joy_mart_banner.jpg" 
            alt="JOY MART Online Shopping Delivery Notice" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Main Catalog Area */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'hampers', label: 'Hampers Section' },
            { id: 'keychains', label: 'Key Chains Section' },
            { id: 'wallets', label: 'Wallets & Bags Section' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-montserrat font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-amdg-blue text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group card-hover"
            >
              <div>
                {/* Product Image */}
                <div className="h-56 overflow-hidden bg-gray-100 relative">
                  <img
                    src={prod.image_url || '/images/products/mens_wallet.jpg'}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = '/images/products/mens_wallet.jpg'; }}
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-gray-700 shadow-sm">
                    {prod.section}
                  </span>
                  {prod.subtitle && (
                    <span className="absolute bottom-3 right-3 bg-amdg-blue/90 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm">
                      {prod.subtitle}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-montserrat font-bold text-base text-gray-900 group-hover:text-amdg-blue transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-bitter mt-1 line-clamp-2 leading-relaxed">
                    {prod.description || 'Custom crafted with premium materials by Memory Moulds team.'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                  <button
                    onClick={() => handleOrder(prod)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1eb957] text-white font-montserrat font-bold text-xs py-2.5 px-3 rounded-lg shadow-sm hover:shadow transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> Order Now
                  </button>
                  <button
                    onClick={() => handleOrder(prod)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
                    title="Quick Details"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 max-w-3xl mx-auto text-center shadow-md">
          <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-2">
            Looking for Custom Bulk Orders or Unique Hampers?
          </h3>
          <p className="text-sm font-bitter text-gray-600 mb-6 leading-relaxed">
            We customize hampers for weddings, corporate gifting, anniversaries, and personal milestones with tailored inscriptions.
          </p>
          <a
            href="https://wa.me/916282119419?text=Hello%20Memory%20Moulds%20team%2C%20I%20have%20a%20bulk%20custom%20order%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amdg-blue hover:bg-amdg-blue-dark text-white font-montserrat font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" /> Message Memory Moulds Team (+91 62821 19419)
          </a>
        </div>

      </section>

      {/* Order Modal Component */}
      <OrderModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
