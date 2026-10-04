import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { submitInquiry } from '../api';

export default function OrderModal({ product, isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  const handleWhatsAppDirect = () => {
    const link = product.whatsapp_link || `https://wa.me/916282119419?text=${encodeURIComponent(`Hello AMDG Memory Moulds team, I would like to order: ${product.name}${product.subtitle ? ` (${product.subtitle})` : ''}`)}`;
    window.open(link, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    await submitInquiry({
      ...formData,
      subject: `Order Inquiry: ${product.name}`,
      product_name: product.name,
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div>
            <span className="text-[11px] font-semibold text-amdg-blue uppercase tracking-wider">
              {product.section?.toUpperCase()} • MEMORY MOULDS
            </span>
            <h3 className="text-xl font-bold font-montserrat text-gray-900 mt-0.5">
              {product.name}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-3" />
              <h4 className="text-xl font-bold font-montserrat text-gray-900 mb-1">
                Order Inquiry Received!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6">
                Thank you, {formData.name}. Our Memory Moulds executive will contact you at {formData.phone} shortly.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Also Open in WhatsApp Chat
              </button>
            </div>
          ) : (
            <div>
              {/* Product preview */}
              <div className="flex gap-4 p-3 bg-blue-50/50 rounded-xl border border-blue-100/60 mb-6">
                <img 
                  src={product.image_url || '/images/products/mens_wallet.jpg'} 
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg shadow-sm border border-white"
                  onError={(e) => { e.target.src = '/images/products/mens_wallet.jpg'; }}
                />
                <div className="flex-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-amdg-blue">
                    {product.subtitle || 'Customized Edition'}
                  </span>
                  <p className="text-xs text-gray-600 mt-1.5 line-clamp-2">
                    {product.description || 'Personalized gift item from Memory Moulds with high-grade materials.'}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-amdg-blue" /> 7 Days Delivery
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> AMDG Quality Assured
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Checkout Option */}
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1eb957] text-white py-3 px-4 rounded-xl font-bold font-montserrat text-sm shadow-md hover:shadow-lg transition-all mb-4"
              >
                <MessageSquare className="w-5 h-5" />
                Instant WhatsApp Checkout (Recommended)
              </button>

              <div className="relative flex items-center justify-center my-4">
                <div className="border-t border-gray-200 w-full"></div>
                <span className="bg-white px-3 text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Or Send On-Site Inquiry
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amdg-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amdg-blue focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Delivery Address & Customization Note</label>
                  <textarea 
                    rows="2"
                    placeholder="Enter delivery address, name to be engraved, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amdg-blue focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amdg-dark hover:bg-black text-white py-2.5 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {loading ? 'Submitting...' : 'Submit Inquiry & Order Request'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
