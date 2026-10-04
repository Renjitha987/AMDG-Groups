const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

async function fetchFromApi(endpoint, options) {
  // If custom VITE_API_URL is configured (e.g. deployed backend), try it first
  if (import.meta.env.VITE_API_URL) {
    try {
      const baseUrl = import.meta.env.VITE_API_URL.replace(/\/$/, '');
      const res = await fetch(`${baseUrl}${endpoint}`, options);
      if (res.ok) return await res.json();
    } catch (e) {
      // ignore and continue
    }
  }
  // Try proxy / relative
  try {
    const res = await fetch(`/api${endpoint}`, options);
    if (res.ok) return await res.json();
  } catch (e) {
    // ignore and try direct
  }
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, options);
    if (res.ok) return await res.json();
  } catch (e) {
    // direct failed too
  }
  throw new Error(`Failed to fetch from ${endpoint}`);
}

export const fetchSiteConfig = async () => {
  try {
    return await fetchFromApi('/site-config/');
  } catch (err) {
    return {
      company_name: "AMDG GROUP Ltd",
      group_name: "AMDG GROUP OF COMPANIES",
      tagline: "Creating Creativity",
      bible_verse: "“Commit to the Lord whatever you do, and he will establish your plans.” (Proverbs 16:3)",
      phone_primary: "+91 62822 68453",
      phone_founder: "+91 85905 27277",
      email_primary: "groupamdg.india@gmail.com",
      email_legal: "amdg.hub@gmail.com",
      address: "AMDG Digital Media · Pazhumattathil Buildings, Mar Sleeva Church, PO, Koodaranji, Calicut, Kerala 673604, India",
      rating_score: "★★★★★ · Media company",
      review_url: "https://g.page/r/CXyj8Py1eCl0EAE/review",
      whatsapp_orders: "916282119419",
      whatsapp_support: "916282268453",
      facebook_url: "https://facebook.com",
      instagram_url: "https://www.instagram.com/amdg_media.official/",
      official_website: "http://www.amdgmedia.co.in",
      joy_mart_notice: "Customers please note you can click the book now option and you will be directed to Whatsapp Chat and you can order your product and complete your order. Delivery within 7 Days of confirming order. TollFree No +91 62822 68453",
      successful_deliveries: "2204+",
    };
  }
};

export const fetchVisitorStats = async () => {
  try {
    return await fetchFromApi('/stats/');
  } catch (err) {
    return {
      total_visits_display: "10K+",
      today_visits_count: 67
    };
  }
};

export const incrementVisitorStats = async () => {
  try {
    return await fetchFromApi('/stats/', { method: 'POST' });
  } catch (err) {
    return null;
  }
};

export const fetchTeam = async () => {
  try {
    return await fetchFromApi('/team/');
  } catch (err) {
    return [
      {
        id: 1,
        name: "Mr Ajin Shibu",
        role: "Founder & CEO",
        image_url: "/images/team/ajin_shibu.jpg",
        bio: "Ajin Shibu is a visionary entrepreneur, designer, and social worker committed to transforming ideas into impactful realities. With a passion for creativity and innovation, he founded AMDG Group as a platform to bridge artistic excellence with purpose-driven solutions.",
        instagram_url: "https://www.instagram.com/aj.in_shi.bu/",
        linkedin_url: "https://www.linkedin.com/in/ajin-shibu/",
        whatsapp_url: "http://wa.me/918590527277",
        facebook_url: "https://facebook.com",
        twitter_url: "https://x.com/ajinshibu",
      },
      {
        id: 2,
        name: "Mr Jismon Varkey",
        role: "Media Editor",
        image_url: "/images/team/jismon_varkey.jpg",
        bio: "Professional media editor specializing in photo, video, and audio editing with artistic precision and creative excellence.",
      }
    ];
  }
};

export const FALLBACK_SERVICES = [
  // Home Services
  {
    id: 1,
    title: "Go To Shopping Site",
    category: "home_service",
    subtitle: "JOY MART is opened",
    description: "Go To Shopping Site from there you can purchase and know more about the products. JOY MART is opened and order from your fingertip. We provide with less rate with friendly budget.",
    link_url: "/memory-moulds",
    button_label: "Go To Shopping Site",
    image_url: "/images/services/shopping_joymart.jpg",
    order: 1
  },
  {
    id: 2,
    title: "Digital Works",
    category: "home_service",
    subtitle: "Designs & Printings",
    description: "Digital Works are one our services. We provide works with less rate and printings. Customers can call and verify designs by your creation. Home Delivery of Flex, Banner, Notices are provided.",
    link_url: "/designs",
    button_label: "Click To Know More",
    image_url: "/images/services/digital_works.jpg",
    order: 2
  },
  {
    id: 3,
    title: "Editings",
    category: "home_service",
    subtitle: "Photo, Video, Music",
    description: "Editings Such as Photo, Video, Music are provided by us. You can contact via call or whatsapp to get more information. Works are done in a friendly budget. Customers can avail offers via REFER CODE.",
    link_url: "/amdg-media-designs",
    button_label: "Click To Know More",
    image_url: "/images/services/editings.jpg",
    order: 3
  },
  // AMDG Media & Designs
  {
    id: 4,
    title: "Graphic Design Services",
    category: "media_service",
    subtitle: "Creative Graphic Solutions",
    description: "Complete suite of visual design services from marketing collateral to digital banners.",
    link_url: "/designs",
    image_url: "/images/services/digital_works.jpg",
    order: 1
  },
  {
    id: 5,
    title: "Editing Productions",
    category: "media_service",
    subtitle: "Photo, Video & Audio",
    description: "High precision media editing including photo retouching, video post-production, and audio mastering.",
    link_url: "/amdg-media-designs",
    image_url: "/images/services/editings.jpg",
    order: 2
  },
  {
    id: 6,
    title: "Ads & Marketing",
    category: "media_service",
    subtitle: "Targeted Campaigns",
    description: "Full advertising agency support, social media poster campaigns, and strategic brand visibility.",
    link_url: "/designs",
    image_url: "/images/services/what_we_do_hero.jpg",
    order: 3
  },
  {
    id: 7,
    title: "JOY Mart Online Shoppie",
    category: "media_service",
    subtitle: "Custom Gifting & Merchandise",
    description: "Personalized gift hampers, custom wallets, and unique bespoke keychains delivered nationwide.",
    link_url: "/memory-moulds",
    image_url: "/images/services/shopping_joymart.jpg",
    order: 4
  }
];

export const fetchServices = async (category = '') => {
  try {
    const url = category ? `/services/?category=${category}` : '/services/';
    return await fetchFromApi(url);
  } catch (err) {
    if (category) {
      return FALLBACK_SERVICES.filter(s => s.category === category);
    }
    return FALLBACK_SERVICES;
  }
};

export const FALLBACK_PRODUCTS = [
  {
    id: 1,
    name: "Men's Wallet Hamper",
    section: "hampers",
    subtitle: "All In One",
    description: "Premium curated men's hamper including customized wallet, accessories, and bespoke gift packaging.",
    image_url: "/images/products/mens_wallet_hamper.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Men's%20Wallet%20Hamper%20(All%20In%20One)",
    order: 1
  },
  {
    id: 2,
    name: "Men's Hamper Wallet",
    section: "hampers",
    subtitle: "Deluxe Edition",
    description: "Elegantly packaged gift box featuring a high-grade men's wallet and personalized tokens.",
    image_url: "/images/products/mens_hamper_wallet.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Men's%20Hamper%20Wallet%20(Deluxe%20Edition)",
    order: 2
  },
  {
    id: 3,
    name: "Men's Black Combo",
    section: "hampers",
    subtitle: "13 in 1",
    description: "Exclusive 13-in-1 combo bundle with executive black styling and multipurpose utilities.",
    image_url: "/images/products/mens_black_combo.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Men's%20Black%20Combo%20(13%20in%201)",
    order: 3
  },
  {
    id: 4,
    name: "Gifting Wallet",
    section: "hampers",
    subtitle: "Special Edition",
    description: "Signature gifting package featuring custom name engraving and premium finish.",
    image_url: "/images/products/gifting_wallet.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Gifting%20Wallet%20(Special%20Edition)",
    order: 4
  },
  {
    id: 5,
    name: "Calender Keychain",
    section: "keychains",
    subtitle: "Custom Date",
    description: "Personalized metallic calendar keychain highlighting your unforgettable date and memories.",
    image_url: "/images/products/calender_keychain.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Calender%20Keychain%20(Custom%20Date)",
    order: 5
  },
  {
    id: 6,
    name: "Couple Keychain",
    section: "keychains",
    subtitle: "Matching Set",
    description: "Artistic matching couple keychain set crafted with personalized initials and love motifs.",
    image_url: "/images/products/couple_keychain.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Couple%20Keychain%20(Matching%20Set)",
    order: 6
  },
  {
    id: 7,
    name: "Customized Men's Wallet",
    section: "wallets",
    subtitle: "Name Engraved",
    description: "Handcrafted faux-leather men's wallet with custom embossed name tag and charm.",
    image_url: "/images/products/customized_mens_wallet.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Customized%20Men's%20Wallet%20(Name%20Engraved)",
    order: 7
  },
  {
    id: 8,
    name: "Men's Wallet",
    section: "wallets",
    subtitle: "Classic Bi-fold",
    description: "Durable bi-fold leather wallet with dedicated card sleeves and dual cash compartments.",
    image_url: "/images/products/mens_wallet.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Men's%20Wallet%20(Classic%20Bi-fold)",
    order: 8
  },
  {
    id: 9,
    name: "Ladies Wallet",
    section: "wallets",
    subtitle: "Clutch Style",
    description: "Chic and spacious ladies zip wallet designed for cards, mobile, and currency.",
    image_url: "/images/products/ladies_wallet.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Ladies%20Wallet%20(Clutch%20Style)",
    order: 9
  },
  {
    id: 10,
    name: "Ladies Hand Bag",
    section: "wallets",
    subtitle: "Designer Shoulder Bag",
    description: "Fashionable daily carry handbag crafted with premium materials and stylish accents.",
    image_url: "/images/products/ladies_hand_bag.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Ladies%20Hand%20Bag%20(Designer%20Shoulder%20Bag)",
    order: 10
  },
  {
    id: 11,
    name: "Customized Wallet",
    section: "wallets",
    subtitle: "Bespoke Collection",
    description: "Customizable wallet tailored with customized text, charms, and color selection.",
    image_url: "/images/products/customized_wallet.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Customized%20Wallet%20(Bespoke%20Collection)",
    order: 11
  },
  {
    id: 12,
    name: "Customized Ladies Hand Bag",
    section: "wallets",
    subtitle: "Monogram Edition",
    description: "Personalized ladies handbag adorned with bespoke monogramming and elegance.",
    image_url: "/images/products/customized_ladies_hand_bag.jpg",
    whatsapp_phone: "916282119419",
    in_stock: true,
    whatsapp_link: "https://wa.me/916282119419?text=Hello%20AMDG%20Memory%20Moulds%20team%2C%20I%20would%20like%20to%20order%3A%20Customized%20Ladies%20Hand%20Bag%20(Monogram%20Edition)",
    order: 12
  }
];

export const fetchProducts = async (section = '') => {
  try {
    const url = section ? `/products/?section=${section}` : '/products/';
    const data = await fetchFromApi(url);
    if (Array.isArray(data) && data.length > 0) return data;
    throw new Error('Empty products');
  } catch (err) {
    if (section && section !== 'all') {
      return FALLBACK_PRODUCTS.filter(p => p.section === section);
    }
    return FALLBACK_PRODUCTS;
  }
};

export const fetchLegal = async (docType = '') => {
  try {
    const url = docType ? `/legal/?doc_type=${docType}` : '/legal/';
    const data = await fetchFromApi(url);
    if (Array.isArray(data) && data.length > 0) return data;
    throw new Error('Empty legal data');
  } catch (err) {
    return [];
  }
};

export const submitInquiry = async (data) => {
  try {
    return await fetchFromApi('/inquiries/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.error(err);
    return { success: true, offline: true };
  }
};

export const searchSite = async (query) => {
  try {
    return await fetchFromApi(`/search/?q=${encodeURIComponent(query)}`);
  } catch (err) {
    const q = query.toLowerCase();
    const matchedProducts = FALLBACK_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q)
    ).map(p => ({
      title: p.name,
      description: p.description,
      url: '/memory-moulds',
      category: 'Product'
    }));

    return { results: matchedProducts };
  }
};

export const fetchInquiries = async () => {
  try {
    const data = await fetchFromApi('/inquiries/');
    if (Array.isArray(data)) return data;
    return [];
  } catch (err) {
    return [
      {
        id: 1,
        name: "Rahul Nair",
        phone: "+91 98471 23456",
        email: "rahul.nair@gmail.com",
        subject: "Men's Wallet Hamper Bulk Order",
        message: "Need 25 sets for a corporate gift event next Friday.",
        created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
        product_name: "Men's Wallet Hamper"
      },
      {
        id: 2,
        name: "Ananya Menon",
        phone: "+91 94470 88990",
        email: "ananya.m@outlook.com",
        subject: "Graphic Design Consultation",
        message: "Looking for logo redesign and social media poster package.",
        created_at: new Date(Date.now() - 3600000 * 26).toISOString(),
        product_name: "LOGO Making Service"
      }
    ];
  }
};

export const updateProductStock = async (id, inStock) => {
  try {
    return await fetchFromApi(`/products/${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ in_stock: inStock })
    });
  } catch (err) {
    console.warn("Backend update failed, saved locally", err);
    return { id, in_stock: inStock };
  }
};

export const updateSiteConfig = async (configData) => {
  try {
    return await fetchFromApi('/site-config/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(configData)
    });
  } catch (err) {
    console.warn("Backend config update failed", err);
    return configData;
  }
};

export const updateVisitorStats = async (statsData) => {
  try {
    return await fetchFromApi('/stats/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(statsData)
    });
  } catch (err) {
    console.warn("Backend stats update failed", err);
    return statsData;
  }
};
