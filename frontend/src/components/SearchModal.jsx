import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, ExternalLink, Package, Briefcase, FileText, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchSite } from '../api';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      const data = await searchSite(query);
      setResults(data.results || []);
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (url) => {
    onClose();
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'Product': return <Package className="w-4 h-4 text-emerald-600" />;
      case 'Service': return <Briefcase className="w-4 h-4 text-blue-600" />;
      case 'Team': return <User className="w-4 h-4 text-purple-600" />;
      case 'Legal': return <FileText className="w-4 h-4 text-amber-600" />;
      default: return <Search className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-200 gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search this site (e.g. Wallets, Posters, Founder, Terms)..."
            className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-base focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded font-medium ml-1"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-2">
          {loading && (
            <div className="py-8 text-center text-sm text-gray-500">
              Searching AMDG GROUP site...
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="py-8 text-center text-sm text-gray-500">
              No results found for "<span className="font-semibold text-gray-700">{query}</span>"
            </div>
          )}

          {!loading && !query && (
            <div className="py-6 px-4 text-xs text-gray-400">
              <p className="font-semibold text-gray-500 uppercase tracking-wider mb-2">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {['Men\'s Wallet', 'Graphic Designing', 'Memory Moulds', 'Ajin Shibu', 'Copyright', 'WhatsApp Order'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="bg-gray-50 hover:bg-amdg-blue-light hover:text-amdg-blue border border-gray-200 px-2.5 py-1 rounded-full text-gray-600 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-1">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.url)}
                  className="p-3 rounded-lg hover:bg-blue-50/70 cursor-pointer transition-colors group flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 p-1.5 rounded-md bg-gray-100 group-hover:bg-white transition-colors">
                      {getIcon(item.type)}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-amdg-blue">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-medium uppercase px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-0.5 line-clamp-1">
                        {item.snippet}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-amdg-blue shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
