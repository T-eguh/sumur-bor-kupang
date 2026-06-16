/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, X, ArrowLeft, ArrowRight, Maximize2, Info, Compass, Calendar, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { GalleryItem } from '../types';
import cleanWaterWell from '../assets/images/clean_water_well_1781356198599.jpg';

// Custom component to present gallery media
function GalleryCardImage({ item }: { item: GalleryItem }) {
  const [loading, setLoading] = useState(true);

  // Reset states on item change
  useEffect(() => {
    setLoading(true);
  }, [item.image]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100">
      {loading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <div className="h-6 w-6 border-2 border-blue-600 border-t-transparent id-loader rounded-full animate-spin" />
        </div>
      )}
      <img
        src={item.image}
        alt={item.title}
        onLoad={() => setLoading(false)}
        className={`h-full w-full object-cover transition-all duration-700 ${
          loading ? 'scale-105 blur-sm opacity-50' : 'scale-100 blur-0 opacity-100 group-hover:scale-105'
        }`}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default function Gallery() {
  const { gallery, whatsappNumber } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['Semua', 'Sumur Domestic', 'Sumur Industri', 'Hasil Air', 'Survey Lokasi', 'Instalasi Pompa'];

  const filteredItems = activeCategory === 'Semua' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  // Keyboard navigation inside lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems]);

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Dynamic Floating Bubbles background effects */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden pointer-events-none opacity-40 z-0">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Page Header */}
      <section className="relative bg-slate-900 py-24 sm:py-28 text-center text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={cleanWaterWell}
            alt="Galeri proyek sumur bor Kupang"
            className="h-full w-full object-cover object-center opacity-90 scale-110 animate-slow-pan"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay for optimal contrast of the text without blocking card */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-black/30" />
          <svg className="absolute bottom-0 left-0 w-full h-24 text-slate-50 z-10" viewBox="0 0 1440 74" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,74L1320,74C1200,74,960,74,720,74C480,74,240,74,120,74L0,74Z"></path>
          </svg>
        </div>
        <div className="relative z-25 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase"
          >
            Portfolio Proyek Lapangan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl text-white md:text-6xl"
          >
            Galeri Dokumentasi Asli
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300 font-light leading-relaxed"
          >
            Dokumentasi pekerjaan pemetaan geolistrik, rig pengeboran hidrolik, dan kegembiraan peresmian sumber air bersih warga di wilayah Kupang dan sekitarnya (NTT).
          </motion.p>
        </div>
      </section>

      {/* Categories Filter Tabs Section */}
      <section className="relative z-20 -mt-8 mx-auto max-w-5xl px-4 w-full">
        <div className="bg-white rounded-2xl border border-slate-150 shadow-md p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  id={`gallery-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedItemIndex(null); // Close active presentation if active filter shifts
                  }}
                  className={`relative px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-200 border border-blue-600' 
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 relative z-10 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => setSelectedItemIndex(idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-150 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200"
                >
                  {/* Image Presentation */}
                  <div className="aspect-[4/3] overflow-hidden bg-slate-950">
                    <GalleryCardImage item={item} />
                  </div>

                  {/* Ribbon Category Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block rounded-lg bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-blue-400 border border-blue-500/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Main Captions */}
                  <div className="p-5 bg-white relative">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-600 mb-1">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-250 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 font-light line-clamp-2">
                      {item.description || "Dokumentasi riil penggarapan sumur bor lokal Kupang."}
                    </p>
                    
                    {/* Visual Hover Trigger Indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                      <span>Lihat Detail Foto</span>
                      <Maximize2 className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-150 shadow-sm max-w-lg mx-auto">
              <Search className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="mt-4 font-display text-base font-bold text-slate-900">Tidak ada dokumentasi</h3>
              <p className="mt-1 text-xs text-slate-400 font-light">Kategori ini akan segera diperbarui dengan dokumentasi di Kupang.</p>
            </div>
          )}

        </div>
      </section>

      {/* Fullscreen Lightbox Portfolio Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && currentItem && (
          <div className="fixed inset-0 z-100 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex min-h-screen items-center justify-center p-0 text-center sm:p-4">
              
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItemIndex(null)}
                className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
              />

              {/* Modal Container Chassis */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative transform overflow-hidden rounded-none sm:rounded-3xl bg-slate-900 border border-slate-800 text-left shadow-2xl transition-all my-0 sm:my-8 w-full max-w-4xl z-20 flex flex-col md:flex-row h-screen sm:h-auto max-h-[100vh] sm:max-h-[90vh]"
              >
                
                {/* Close Button on top corner */}
                <button
                  type="button"
                  id="close-lightbox"
                  onClick={() => setSelectedItemIndex(null)}
                  className="absolute top-4 right-4 z-50 rounded-full bg-slate-950/80 hover:bg-slate-950 ring-1 ring-white/10 p-2 text-slate-300 hover:text-white transition-all cursor-pointer focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Photo Frame Display */}
                <div className="relative flex-1 bg-black flex items-center justify-center min-h-[40vh] md:min-h-0 relative select-none group">
                  
                  {/* Previous Item Trigger button */}
                  <button
                    onClick={handlePrev}
                    id="prev-lightbox"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white p-2.5 border border-white/10 hover:scale-105 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  {/* Main Display Image */}
                  <div className="w-full h-full max-h-[50vh] md:max-h-none flex items-center justify-center p-4">
                    <GalleryCardImage item={currentItem} />
                  </div>

                  {/* Next Item Trigger button */}
                  <button
                    onClick={handleNext}
                    id="next-lightbox"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white p-2.5 border border-white/10 hover:scale-105 transition-all cursor-pointer"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 left-4 bg-slate-950/70 backdrop-blur-xs text-[10px] text-slate-400 px-3 py-1.5 rounded-full font-mono">
                    Foto {selectedItemIndex + 1} dari {filteredItems.length}
                  </div>
                </div>

                {/* Right Side: Detailed Narrative Panel */}
                <div className="w-full md:w-[360px] bg-slate-950 border-t md:border-t-0 md:border-l border-slate-800 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    {/* Header Tag details */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-blue-400">
                        {currentItem.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-400">
                        <Compass className="h-3.5 w-3.5 text-blue-500" />
                        <span>Kupang Barat / Timur</span>
                      </span>
                    </div>

                    {/* Project Title */}
                    <h2 className="mt-4 font-display text-xl sm:text-2xl font-black text-white leading-tight">
                      {currentItem.title}
                    </h2>

                    {/* Pin Location Badge */}
                    <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-blue-400">
                      <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                      <span>{currentItem.location}</span>
                    </div>

                    {/* Operational Date/Time indicator */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 border-t border-b border-slate-900 py-3">
                      <Calendar className="h-4 w-4 text-slate-500 shrink-0" />
                      <span>Waktu pengerjaan tahun 2024 - 2026</span>
                    </div>

                    {/* Detailed project narrative */}
                    <div className="mt-5">
                      <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400">Keterangan Proyek</h4>
                      <p className="mt-1.5 text-slate-300 text-sm font-light leading-relaxed">
                        {currentItem.description || "Proyek pengeboran sumur selesai 100% dan sudah beroperasi aktif melayani kebutuhan air bersih lingkungan."}
                      </p>
                    </div>

                    {/* Quality Badges */}
                    <div className="mt-6 space-y-2 bg-slate-900/60 border border-slate-800/60 rounded-xl p-3">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Alat Hidrolik Mandiri SWA</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>Garansi Air Jernih & Lancar</span>
                      </div>
                    </div>
                  </div>

                  {/* Close/Consult Action panel */}
                  <div className="mt-8 pt-4 border-t border-slate-900 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Halo%20Sumur%20Bor%20Kupang,%20saya%20melihat%20galeri%20proyek%20"${encodeURIComponent(currentItem.title)}"%20dan%20ingin%20konsultasi%23pembuataan`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-950/50"
                    >
                      <span>Tanya Proyek Ini (WA)</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
