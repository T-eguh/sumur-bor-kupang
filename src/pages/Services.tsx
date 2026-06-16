/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Activity, Wrench, Check, ShieldAlert, Phone } from 'lucide-react';
import { useData } from '../context/DataContext';
import cleanWaterWell from '../assets/images/clean_water_well_1781356198599.jpg';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  Building2: Building2,
  Activity: Activity,
  Wrench: Wrench
};

export default function Services() {
  const { services, whatsappNumber } = useData();
  
  const handleWhatsAppInquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(`Halo Sumur Bor Kupang, saya ingin berkonsultasi mengenai layanan "${serviceTitle}". Mohon informasi selengkapnya.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="relative bg-slate-900 py-24 sm:py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={cleanWaterWell}
            alt="Services banner"
            className="h-full w-full object-cover object-center opacity-90 scale-110 animate-slow-pan select-none"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay for optimal contrast of the text without blocking card */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Pilihan Terbaik</span>
            <h1 className="font-display text-4xl font-extrabold sm:text-5xl text-white mt-2">
              Layanan Pengeboran Kupang
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-200 font-light">
              Solusi rekayasa hidrologi handal, cepat, dan teruji di berbagai medan bebatuan kars Nusa Tenggara Timur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((srv, index) => {
              const IconComp = IconMap[srv.iconName] || Home;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={srv.id}
                  id={`service-layout-${srv.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col gap-8 lg:gap-12 rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 lg:p-12 shadow-sm ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Photo Section */}
                  <div className="w-full lg:w-1/2 shrink-0 overflow-hidden rounded-2xl bg-slate-100 relative aspect-video lg:aspect-auto min-h-[280px] lg:h-[400px]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 rounded-xl bg-blue-600/95 backdrop-blur-sm p-3.5 text-white shadow-lg">
                      <IconComp className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between py-2">
                    <div>
                      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {srv.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-slate-500 font-light">
                        {srv.description}
                      </p>

                      <div className="mt-6">
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400">
                          Spesifikasi & Cakupan Layanan
                        </h4>
                        <ul className="mt-3.5 space-y-3">
                          {srv.features.map((ft, key) => (
                            <li key={key} className="flex items-start gap-2.5 text-xs text-slate-600 font-light leading-relaxed">
                              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                                <Check className="h-3 w-3 stroke-[2.5]" />
                              </div>
                              <span>{ft}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Button without pricing details */}
                    <div className="mt-8 border-t border-slate-100 pt-6">
                      <button
                        id={`btn-inquire-${srv.id}`}
                        onClick={() => handleWhatsAppInquiry(srv.title)}
                        className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-semibold px-6 py-3 shadow-md shadow-blue-200 transition-all cursor-pointer"
                      >
                        <Phone className="h-4 w-4" />
                        Tanya Estimasi & Konsultasi Gratis
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Info banner */}
      <section className="bg-slate-900 py-16 text-white border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ShieldAlert className="mx-auto h-12 w-12 text-yellow-400 animate-bounce" />
          <h3 className="mt-4 font-display text-lg font-bold text-white">Catatan Bagi Calon Konsumen Sumur Bor Kupang:</h3>
          <p className="mt-3 text-xs leading-relaxed text-slate-400 font-light">
            Biaya pengeboran sangat dipengaruhi oleh lokasi koordinat rumah Anda (karena perbedaan formasi ketebalan batuan kapur antara Oebobo, Maulafa, Penfui, Alak, dst), diameter casing PVC yang Anda pilih, serta kebutuhan kedalaman air jernih. Silakan sampaikan titik lokasi Anda sekarang, dan ahli geofisika kami akan menganalisis gratis estimasi kedalaman aman serta kebutuhan pipa Anda via WhatsApp.
          </p>
        </div>
      </section>

    </div>
  );
}
