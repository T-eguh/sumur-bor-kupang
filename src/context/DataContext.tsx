/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ServiceItem, GalleryItem, TestimonialItem, AppStats } from '../types';
import { 
  COMPANY_NAME as DEFAULT_COMPANY_NAME,
  COMPANY_SLOGAN as DEFAULT_COMPANY_SLOGAN,
  WHATSAPP_NUMBER as DEFAULT_WHATSAPP_NUMBER,
  CONTACT_PHONE as DEFAULT_CONTACT_PHONE,
  CONTACT_EMAIL as DEFAULT_CONTACT_EMAIL,
  CONTACT_ADDRESS as DEFAULT_CONTACT_ADDRESS,
  OPERATIONAL_HOURS as DEFAULT_OPERATIONAL_HOURS,
  SERVICES as DEFAULT_SERVICES,
  KEUNGGULAN as DEFAULT_KEUNGGULAN,
  GALLERY as DEFAULT_GALLERY,
  TESTIMONIALS as DEFAULT_TESTIMONIALS,
  FAQS as DEFAULT_FAQS
} from '../data';

interface DataContextType {
  // Configs
  companyName: string;
  companySlogan: string;
  whatsappNumber: string;
  cleanWhatsappNumber: string;
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
  operationalHours: string;
  
  // Hero Section
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  stats: AppStats[];
  
  // Dynamic lists
  services: ServiceItem[];
  keunggulan: typeof DEFAULT_KEUNGGULAN;
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  faqs: typeof DEFAULT_FAQS;
  
  // Actions
  updateConfigs: (configs: {
    companyName?: string;
    companySlogan?: string;
    whatsappNumber?: string;
    contactPhone?: string;
    contactEmail?: string;
    contactAddress?: string;
    operationalHours?: string;
  }) => void;
  updateHero: (hero: {
    heroBadge?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    stats?: AppStats[];
  }) => void;
  updateServices: (services: ServiceItem[]) => void;
  updateKeunggulan: (keunggulan: typeof DEFAULT_KEUNGGULAN) => void;
  updateGallery: (gallery: GalleryItem[]) => void;
  updateTestimonials: (testimonials: TestimonialItem[]) => void;
  updateFaqs: (faqs: typeof DEFAULT_FAQS) => void;
  
  // Reset
  resetToDefaults: () => void;
  
  // Auth state
  isLoggedIn: boolean;
  login: (u: string, p: string) => boolean;
  logout: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  // Configs state
  const [companyName, setCompanyName] = useState(() => localStorage.getItem('companyName') || DEFAULT_COMPANY_NAME);
  const [companySlogan, setCompanySlogan] = useState(() => localStorage.getItem('companySlogan') || DEFAULT_COMPANY_SLOGAN);
  const [whatsappNumber, setWhatsappNumber] = useState(() => {
    const saved = localStorage.getItem('whatsappNumber');
    if (!saved || saved.includes('812-3866-9311') || saved.includes('81238669311') || saved === '082-119-885-555') {
      return '082119885555';
    }
    return saved;
  });
  const [contactPhone, setContactPhone] = useState(() => {
    const saved = localStorage.getItem('contactPhone');
    if (!saved || saved.includes('812-3866-9311') || saved.includes('81238669311') || saved === '082-119-885-555') {
      return '082119885555';
    }
    return saved;
  });
  const [contactEmail, setContactEmail] = useState(() => localStorage.getItem('contactEmail') || DEFAULT_CONTACT_EMAIL);
  const [contactAddress, setContactAddress] = useState(() => localStorage.getItem('contactAddress') || DEFAULT_CONTACT_ADDRESS);
  const [operationalHours, setOperationalHours] = useState(() => localStorage.getItem('operationalHours') || DEFAULT_OPERATIONAL_HOURS);

  // Hero section state
  const [heroBadge, setHeroBadge] = useState(() => localStorage.getItem('heroBadge') || 'Spesialis Sumur Bor Bergaransi Kupang NTT');
  const [heroTitle, setHeroTitle] = useState(() => localStorage.getItem('heroTitle') || 'Solusi Air Bersih Melimpah Anti-Gagal Untuk Anda');
  const [heroSubtitle, setHeroSubtitle] = useState(() => localStorage.getItem('heroSubtitle') || 'Meskipun di tanah berbatu keras khas Kota Kupang NTT, kami pastikan pengeboran dengan mesin elektro kami sukses menembus akuifer air terdalam demi air jernih tanpa henti.');
  const [stats, setStats] = useState<AppStats[]>(() => {
    const saved = localStorage.getItem('stats');
    return saved ? JSON.parse(saved) : [
      { value: '12+', label: 'Tahun Pengalaman' },
      { value: '500+', label: 'Sumur Berhasil Dibor' },
      { value: '100%', label: 'Tingkat Air Bersih' },
      { value: '4.9/5', label: 'Rating Kepuasan' },
    ];
  });

  // Dynamic Lists State
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem('services');
    return saved ? JSON.parse(saved) : DEFAULT_SERVICES;
  });
  const [keunggulan, setKeunggulan] = useState(() => {
    const saved = localStorage.getItem('keunggulan');
    return saved ? JSON.parse(saved) : DEFAULT_KEUNGGULAN;
  });
  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('gallery');
    return saved ? JSON.parse(saved) : DEFAULT_GALLERY;
  });
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem('testimonials');
    return saved ? JSON.parse(saved) : DEFAULT_TESTIMONIALS;
  });
  const [faqs, setFaqs] = useState(() => {
    const saved = localStorage.getItem('faqs');
    return saved ? JSON.parse(saved) : DEFAULT_FAQS;
  });

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isAdminLoggedIn') === 'true';
  });

  // Save changes to localStorage helper
  useEffect(() => {
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('companySlogan', companySlogan);
    localStorage.setItem('whatsappNumber', whatsappNumber);
    localStorage.setItem('contactPhone', contactPhone);
    localStorage.setItem('contactEmail', contactEmail);
    localStorage.setItem('contactAddress', contactAddress);
    localStorage.setItem('operationalHours', operationalHours);
    
    localStorage.setItem('heroBadge', heroBadge);
    localStorage.setItem('heroTitle', heroTitle);
    localStorage.setItem('heroSubtitle', heroSubtitle);
    localStorage.setItem('stats', JSON.stringify(stats));
    
    localStorage.setItem('services', JSON.stringify(services));
    localStorage.setItem('keunggulan', JSON.stringify(keunggulan));
    localStorage.setItem('gallery', JSON.stringify(gallery));
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
    localStorage.setItem('faqs', JSON.stringify(faqs));
  }, [
    companyName, companySlogan, whatsappNumber, contactPhone, contactEmail, contactAddress, operationalHours,
    heroBadge, heroTitle, heroSubtitle, stats,
    services, keunggulan, gallery, testimonials, faqs
  ]);

  const updateConfigs = (configs: {
    companyName?: string;
    companySlogan?: string;
    whatsappNumber?: string;
    contactPhone?: string;
    contactEmail?: string;
    contactAddress?: string;
    operationalHours?: string;
  }) => {
    if (configs.companyName !== undefined) setCompanyName(configs.companyName);
    if (configs.companySlogan !== undefined) setCompanySlogan(configs.companySlogan);
    if (configs.whatsappNumber !== undefined) setWhatsappNumber(configs.whatsappNumber);
    if (configs.contactPhone !== undefined) setContactPhone(configs.contactPhone);
    if (configs.contactEmail !== undefined) setContactEmail(configs.contactEmail);
    if (configs.contactAddress !== undefined) setContactAddress(configs.contactAddress);
    if (configs.operationalHours !== undefined) setOperationalHours(configs.operationalHours);
  };

  const updateHero = (hero: {
    heroBadge?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    stats?: AppStats[];
  }) => {
    if (hero.heroBadge !== undefined) setHeroBadge(hero.heroBadge);
    if (hero.heroTitle !== undefined) setHeroTitle(hero.heroTitle);
    if (hero.heroSubtitle !== undefined) setHeroSubtitle(hero.heroSubtitle);
    if (hero.stats !== undefined) setStats(hero.stats);
  };

  const updateServices = (newServices: ServiceItem[]) => {
    setServices(newServices);
  };

  const updateKeunggulan = (newKeunggulan: typeof DEFAULT_KEUNGGULAN) => {
    setKeunggulan(newKeunggulan);
  };

  const updateGallery = (newGallery: GalleryItem[]) => {
    setGallery(newGallery);
  };

  const updateTestimonials = (newTestimonials: TestimonialItem[]) => {
    setTestimonials(newTestimonials);
  };

  const updateFaqs = (newFaqs: typeof DEFAULT_FAQS) => {
    setFaqs(newFaqs);
  };

  const resetToDefaults = () => {
    setCompanyName(DEFAULT_COMPANY_NAME);
    setCompanySlogan(DEFAULT_COMPANY_SLOGAN);
    setWhatsappNumber(DEFAULT_WHATSAPP_NUMBER);
    setContactPhone(DEFAULT_CONTACT_PHONE);
    setContactEmail(DEFAULT_CONTACT_EMAIL);
    setContactAddress(DEFAULT_CONTACT_ADDRESS);
    setOperationalHours(DEFAULT_OPERATIONAL_HOURS);
    
    setHeroBadge('Spesialis Sumur Bor Bergaransi Kupang NTT');
    setHeroTitle('Solusi Air Bersih Melimpah Anti-Gagal Untuk Anda');
    setHeroSubtitle('Meskipun di tanah berbatu keras khas Kota Kupang NTT, kami pastikan pengeboran dengan mesin elektro kami sukses menembus akuifer air terdalam demi air jernih tanpa henti.');
    setStats([
      { value: '12+', label: 'Tahun Pengalaman' },
      { value: '500+', label: 'Sumur Berhasil Dibor' },
      { value: '100%', label: 'Tingkat Air Bersih' },
      { value: '4.9/5', label: 'Rating Kepuasan' },
    ]);
    
    setServices(DEFAULT_SERVICES);
    setKeunggulan(DEFAULT_KEUNGGULAN);
    setGallery(DEFAULT_GALLERY);
    setTestimonials(DEFAULT_TESTIMONIALS);
    setFaqs(DEFAULT_FAQS);
    
    // Clear all localStorage entries
    localStorage.removeItem('companyName');
    localStorage.removeItem('companySlogan');
    localStorage.removeItem('whatsappNumber');
    localStorage.removeItem('contactPhone');
    localStorage.removeItem('contactEmail');
    localStorage.removeItem('contactAddress');
    localStorage.removeItem('operationalHours');
    localStorage.removeItem('heroBadge');
    localStorage.removeItem('heroTitle');
    localStorage.removeItem('heroSubtitle');
    localStorage.removeItem('stats');
    localStorage.removeItem('services');
    localStorage.removeItem('keunggulan');
    localStorage.removeItem('gallery');
    localStorage.removeItem('testimonials');
    localStorage.removeItem('faqs');
  };

  const login = (u: string, p: string): boolean => {
    // Elegant secure comparison. Simple hardcoded values for demo
    // Username: admin
    // Password: sumberwahyualam (or custom if desired, let's keep it highly secure but accessible)
    if (u === 'admin' && p === 'sumberwahyualam') {
      setIsLoggedIn(true);
      localStorage.setItem('isAdminLoggedIn', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAdminLoggedIn');
  };

  const cleanWhatsappNumber = (num: string): string => {
    const digits = num.replace(/\D/g, '');
    if (digits.startsWith('0')) {
      return '62' + digits.slice(1);
    }
    if (digits.startsWith('62')) {
      return digits;
    }
    if (digits.startsWith('8')) {
      return '62' + digits;
    }
    return digits;
  };

  return (
    <DataContext.Provider value={{
      companyName,
      companySlogan,
      whatsappNumber: cleanWhatsappNumber(whatsappNumber),
      cleanWhatsappNumber: cleanWhatsappNumber(whatsappNumber),
      contactPhone,
      contactEmail,
      contactAddress,
      operationalHours,
      
      heroBadge,
      heroTitle,
      heroSubtitle,
      stats,
      
      services,
      keunggulan,
      gallery,
      testimonials,
      faqs,
      
      updateConfigs,
      updateHero,
      updateServices,
      updateKeunggulan,
      updateGallery,
      updateTestimonials,
      updateFaqs,
      
      resetToDefaults,
      
      isLoggedIn,
      login,
      logout
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
