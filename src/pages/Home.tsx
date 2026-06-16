/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  UserCheck, 
  ShieldCheck, 
  Radar, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Star, 
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import { PageType } from '../types';
import { useData } from '../context/DataContext';
import drillingRig from '../assets/images/drilling_rig_kupang_1781356181982.jpg';

// Map icon strings to Lucide components
const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu: Cpu,
  UserCheck: UserCheck,
  ShieldCheck: ShieldCheck,
  Radar: Radar,
};

interface HomeProps {
  setActiveTab: (tab: PageType) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const {
    whatsappNumber,
    heroBadge,
    heroTitle,
    heroSubtitle,
    stats,
    services,
    keunggulan,
    testimonials,
    faqs
  } = useData();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent('Halo Sumur Bor Kupang, saya ingin berkonsultasi mengenai rencana pembuatan sumur bor.');
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handlePageChange = (tab: PageType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. HERO SECTION WITH ACCELERATED BACKDROP PANNING */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 md:py-32" id="hero-section-clean">
        {/* Animated Background Image and flowing overlays */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <img
            src={drillingRig}
            alt="Hydraulic well drilling rig"
            className="h-full w-full object-cover object-center opacity-90 sm:opacity-95 scale-110 animate-slow-pan"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay for optimal contrast of the text without blocking card */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-black/20" />
          
          {/* Floaters (Water Bubbles) with varying scales and speeds */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(8)].map((_, i) => {
              const bubbleStyles = [
                { left: '10%', bottom: '-20px', size: '16px', anim: 'animate-bubble-rise-1', delay: '0s' },
                { left: '25%', bottom: '-30px', size: '24px', anim: 'animate-bubble-rise-2', delay: '2s' },
                { left: '40%', bottom: '-15px', size: '32px', anim: 'animate-bubble-rise-1', delay: '4s' },
                { left: '55%', bottom: '-40px', size: '12px', anim: 'animate-bubble-rise-2', delay: '1s' },
                { left: '70%', bottom: '-20px', size: '20px', anim: 'animate-bubble-rise-1', delay: '5s' },
                { left: '85%', bottom: '-35px', size: '28px', anim: 'animate-bubble-rise-2', delay: '3s' },
                { left: '30%', bottom: '-50px', size: '14px', anim: 'animate-bubble-rise-1', delay: '6s' },
                { left: '65%', bottom: '-25px', size: '18px', anim: 'animate-bubble-rise-2', delay: '7s' },
              ];
              const b = bubbleStyles[i % bubbleStyles.length];
              return (
                <div
                   key={i}
                  className={`absolute rounded-full border border-blue-450 bg-gradient-to-tr from-blue-400/20 to-transparent shadow-inner ${b.anim}`}
                  style={{
                    left: b.left,
                    bottom: b.bottom,
                    width: b.size,
                    height: b.size,
                    animationDelay: b.delay,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.1 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-inset ring-cyan-400/30 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              {heroBadge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {heroTitle.includes('Anti-Gagal') ? (
                <>
                  {heroTitle.split('Anti-Gagal')[0]}
                  <span className="text-cyan-400">Anti-Gagal</span>
                  {heroTitle.split('Anti-Gagal')[1]}
                </>
              ) : (
                heroTitle
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-200 font-light"
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                id="hero-cta-whatsapp"
                onClick={handleWhatsAppConsult}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-sans text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl transition-all animate-pulse-premium cursor-pointer"
              >
                Konsultasi WhatsApp Free
              </button>
              <button
                id="hero-cta-services"
                onClick={() => handlePageChange('layanan')}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3.5 font-sans text-base font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                Lihat Layanan Kami
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-blue-600 py-8 relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col justify-center border-r border-blue-500/50 last:border-0 pl-2 pr-2">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-blue-100 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MENGAPA MEMILIH KAMI (KEUNGGULAN) */}
      <section className="bg-white py-20 sm:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Keunggulan Kami
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mengapa Warga Kupang Memilih Kami?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 font-light leading-relaxed">
              Kami membawa pendekatan geofisika modern dan mesin bor bertenaga besar untuk menyelesaikan problem air di tanah kering NTT.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {keunggulan.map((item, idx) => {
                const IconComponent = IconMap[item.iconName] || Cpu;
                return (
                  <motion.div
                    key={item.id}
                    id={`keunggulan-card-${item.id}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-sm">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAYANAN PREVIEW */}
      <section className="bg-slate-50 py-20 sm:py-28 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                Layanan Sumur Bor
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Layanan Pengeboran Profesional
              </h2>
              <p className="mt-2 text-sm text-slate-500 font-light max-w-md">
                Menyediakan variasi jasa bor profesional untuk perumahan, industri, geolistrik, hingga perbaikan pompa.
              </p>
            </div>
            <button
              id="home-btn-all-services"
              onClick={() => handlePageChange('layanan')}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-50 hover:bg-blue-100 px-5 py-2.5 font-sans text-sm font-semibold text-blue-600 transition-colors"
            >
              Lihat Detail Semua Layanan
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {services.slice(0, 2).map((srv) => (
              <div
                key={srv.id}
                id={`home-srv-${srv.id}`}
                className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
                    Rekomendasi Utama
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 font-light flex-1">
                    {srv.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {srv.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-light">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <button
                      id={`home-srv-btn-${srv.id}`}
                      onClick={() => handlePageChange('layanan')}
                      className="inline-flex items-center gap-2 font-semibold text-sm text-blue-600 hover:text-blue-700 transition-all cursor-pointer"
                    >
                      Selengkapnya Di Halaman Layanan
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARA KERJA TIM (TIMELINE) */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Prosedur Kerja
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Bagaimana Kami Menjamin Air Keluar Melimpah?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 font-light">
              Proses kerja terstruktur dari awal konsultasi hingga air jernih siap dialirkan ke penampung air Anda.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                { step: '01', title: 'Survey (Geolistrik)', desc: 'Melakukan analisis radar tanah dan geolistrik untuk mendeteksi letak air tanah akurat.' },
                { step: '02', title: 'Set Up Mesin', desc: 'Mobilisasi mesin bor elektro kami ke lokasi Anda secara cepat dan rapi.' },
                { step: '03', title: 'Pengeboran', desc: 'Melubangi tanah dan formasi kars batu karang keras Kupang sampai target kedalaman pipa.' },
                { step: '04', title: 'Debit Test & Clean', desc: 'Uji pompa submersible, mencuci saluran lumpur, dan serah terima air bersih jernih.' },
              ].map((work, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center px-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 font-display text-lg font-extrabold text-blue-600 border border-blue-100">
                    {work.step}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 font-light">
                    {work.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="bg-blue-900 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 via-slate-900 to-slate-950 opacity-90" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-base font-semibold tracking-wider text-cyan-400 uppercase">
              Ulasan Pelanggan
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Dipercaya Seluruh Warga Kupang
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 font-light">
              Mulai dari kos-kosan mahasiswa, rumah tinggal mewah, laundry, ruko komersial, hingga kawasan pertanian.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="flex flex-col justify-between rounded-2xl bg-white/5 backdrop-blur-sm p-6 border border-white/10"
                >
                  <div>
                    <div className="flex items-center gap-0.5 text-yellow-400 mb-4">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-slate-200 font-light italic">
                      "{test.text}"
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4 flex flex-col">
                    <span className="font-display text-sm font-bold text-white">{test.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{test.role} • {test.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Tanya Jawab (FAQ)
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 font-light">
              Informasi dasar seputar pembuatan sumur bor di wilayah Kupang, NTT.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-display text-base font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 p-6 bg-white">
                      <p className="text-sm leading-relaxed text-slate-500 font-light">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. PERSISTENT LOWER CALL TO ACTION */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">
            Butuh Solusi Pengeboran Cepat & Air Bersih Melimpah?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-blue-100 font-light">
            Hubungi kami hari ini untuk konsultasi geologis gratis dan jadwalkan survey lokasi bersama teknisi senior kami.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-bottom-whatsapp"
              onClick={handleWhatsAppConsult}
              className="w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-slate-950 px-6 py-3.5 font-sans text-base font-bold text-white shadow-xl transition-colors cursor-pointer"
            >
              Hubungi via WhatsApp
            </button>
            <button
              id="cta-bottom-contact"
              onClick={() => handlePageChange('hubungi-kami')}
              className="w-full sm:w-auto rounded-xl bg-white hover:bg-slate-50 px-6 py-3.5 font-sans text-base font-bold text-blue-700 shadow-xl transition-colors cursor-pointer"
            >
              Formulir Survey Lokasi
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
