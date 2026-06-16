/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Settings } from 'lucide-react';
import { PageType } from '../types';
import { useData } from '../context/DataContext';
import SwaLogo from './SwaLogo';

interface HeaderProps {
  activeTab: PageType;
  setActiveTab: (tab: PageType) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { whatsappNumber } = useData();

  const menuItems = [
    { label: 'Beranda', id: 'beranda' as PageType },
    { label: 'Tentang Kami', id: 'tentang-kami' as PageType },
    { label: 'Layanan', id: 'layanan' as PageType },
    { label: 'Galeri Proyek', id: 'galeri' as PageType },
    { label: 'Hubungi Kami', id: 'hubungi-kami' as PageType },
  ];

  const handleNavClick = (tabId: PageType) => {
    setActiveTab(tabId);
    setIsOpen(false);
    // Scroll to top when shifting page views, satisfying the page shift criteria
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Halo Sumur Bor Kupang, saya tertarik untuk berkonsultasi mengenai jasa sumur bor.');
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Slogan */}
        <div 
          className="flex cursor-pointer items-center gap-3 transition-transform hover:scale-[1.01]"
          id="nav-logo"
          onClick={() => handleNavClick('beranda')}
        >
          <SwaLogo size={52} className="shadow-md shadow-blue-100 rounded-full hover:rotate-2 transition-transform duration-300" />
          <div>
            <span className="block font-display text-xl font-bold tracking-tight text-blue-900 sm:text-2xl">
              SUMUR BOR <span className="text-cyan-500">KUPANG</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Jasa Sumur Bor Profesional 
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 font-sans text-[15px] font-medium transition-colors duration-150 rounded-lg ${
                  isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-cta-wa"
            onClick={openWhatsApp}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-md shadow-blue-200 hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            <Phone className="h-4 w-4" />
            Hubungi Wa
          </button>
          
          <button
            id="nav-admin"
            onClick={() => handleNavClick('admin')}
            title="Kelola Website SWA"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors ${
              activeTab === 'admin' ? 'bg-blue-50 text-blue-600 border-blue-200' : ''
            }`}
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden hover:bg-slate-50"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-100 bg-white md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center w-full px-4 py-3 text-left text-base font-medium rounded-xl transition-all ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 font-semibold' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                id="mobile-nav-admin"
                onClick={() => handleNavClick('admin')}
                className={`flex items-center w-full px-4 py-3 text-left text-base font-medium rounded-xl transition-all ${
                  activeTab === 'admin' 
                    ? 'bg-blue-50 text-blue-600 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Atur / Kelola Website
              </button>
              <div className="mt-2 border-t border-slate-100 pt-4">
                <button
                  id="mobile-nav-cta-wa"
                  onClick={openWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-sans text-sm font-semibold text-white shadow-md hover:bg-blue-700"
                >
                  <Phone className="h-4 w-4" />
                  Hubungi Hubungi Wa
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
