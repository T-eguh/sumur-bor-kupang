/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings } from 'lucide-react';
import { PageType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { useData } from './context/DataContext';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageType>('beranda');
  const [pendingTab, setPendingTab] = useState<PageType | null>(null);
  const { isLoggedIn, logout } = useData();

  const handleTabChange = (tabId: PageType) => {
    if (isLoggedIn && tabId !== 'admin') {
      setPendingTab(tabId);
      return;
    }
    setActiveTab(tabId);
  };

  const handleConfirmLogoutAndGo = () => {
    if (pendingTab) {
      logout();
      setActiveTab(pendingTab);
      setPendingTab(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Render active view dynamically based on tab selection state
  const renderPage = () => {
    switch (activeTab) {
      case 'beranda':
        return <Home setActiveTab={handleTabChange} />;
      case 'tentang-kami':
        return <About />;
      case 'layanan':
        return <Services />;
      case 'galeri':
        return <Gallery />;
      case 'hubungi-kami':
        return <Contact />;
      case 'admin':
        return <Admin />;
      default:
        return <Home setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans antialiased text-slate-800" id="app-root-container">
      {/* Global Blocked Navigation Dialog / Modal */}
      <AnimatePresence>
        {pendingTab && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 text-slate-800"
              id="global-admin-block-nav-modal"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-500 mb-4 mx-auto">
                <Settings className="h-6 w-6 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
              <h3 className="text-center font-display text-lg font-bold text-slate-900">
                Akses Navigasi Terkunci
              </h3>
              <p className="mt-2 text-center text-sm text-slate-500 leading-relaxed font-light">
                Anda sedang berada di dalam <span className="font-semibold text-slate-700">Dashboard Admin</span> SWA. Untuk menuju halaman <span className="font-semibold text-blue-600 capitalize">"{pendingTab.replace(/-/g, ' ')}"</span>, Anda wajib keluar (Log Out) terlebih dahulu demi keamanan data website.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleConfirmLogoutAndGo}
                  className="w-full rounded-xl bg-red-600 py-3 text-sm font-semibold text-white shadow-md shadow-red-100 hover:bg-red-500 transition-colors cursor-pointer text-center font-sans"
                  id="global-btn-confirm-logout-go"
                >
                  Log Out & Navigasi Sekarang
                </button>
                <button
                  type="button"
                  onClick={() => setPendingTab(null)}
                  className="w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer text-center font-sans"
                  id="global-btn-cancel-logout-go"
                >
                  Tetap di Dashboard Admin
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* 1. Stick Header with state switcher */}
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* 2. Main content container wraps views with page transition animations */}
      <main className="flex-1" id="main-content-flow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            id={`view-${activeTab}`}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Floating WhatsApp widget */}
      <FloatingWhatsApp />

      {/* 4. Footer with state updater link triggers */}
      <Footer setActiveTab={handleTabChange} />
      
    </div>
  );
}
