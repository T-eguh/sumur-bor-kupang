/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Share2, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { useData } from '../context/DataContext';
import drillingRig from '../assets/images/drilling_rig_kupang_1781356181982.jpg';

export default function Contact() {
  const {
    companyName,
    contactPhone,
    contactEmail,
    contactAddress,
    operationalHours,
    whatsappNumber
  } = useData();

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    subdistrict: '',
    serviceType: 'Sumur Bor Rumah Tangga',
    details: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.subdistrict) {
      alert('Mohon lengkapi Nama, No WhatsApp, dan Kecamatan Anda.');
      return;
    }

    // Compose custom Indonesian WhatsApp message
    const message = `Halo Sumur Bor Kupang, saya ingin mengajukan permohonan Survey Lokasi / Konsultasi:

*Nama:* ${formData.name}
*No. WhatsApp:* ${formData.whatsapp}
*Lokasi/Kecamatan:* ${formData.subdistrict}
*Kategori Layanan:* ${formData.serviceType}
*Catatan Tambahan:* ${formData.details || '-'}

Mohon informasi analisis awal geologis dan ketersediaan tim pengeboran. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    setFormSubmitted(true);
    
    // Redirect direct to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="relative bg-slate-900 py-24 sm:py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={drillingRig}
            alt="Contact banner"
            className="h-full w-full object-cover object-center opacity-90 scale-110 animate-slow-pan select-none"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay for optimal contrast of the text without blocking card */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-black/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Hubungi Kami
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-200 font-light">
            Dapatkan konsultasi gratis & jadwalkan survey deteksi air geolistrik langsung ke alamat Anda.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            
            {/* Column 1: Info (lg:span:5) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Detail Kontak Resmi
                </h2>
                <p className="mt-2 text-xs text-slate-500 font-light leading-relaxed">
                  Hubungi kami kapan saja melalui telepon, email, atau kunjungi kantor kami langsung di Kota Kupang.
                </p>

                <div className="mt-8 space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900">Alamat Kantor</h4>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed font-light">
                        {contactAddress}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900">Telepon & WhatsApp</h4>
                      <p className="mt-1 text-xs text-slate-500 font-light">
                        <a href={`tel:${contactPhone}`} className="hover:text-blue-600 transition-colors">
                          {contactPhone} (Konsultasi Utama)
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900">Surel Resmi</h4>
                      <p className="mt-1 text-xs text-slate-500 font-light break-all">
                        <a href={`mailto:${contactEmail}`} className="hover:text-blue-600 transition-colors">
                          {contactEmail}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900">Jam Operasional</h4>
                      <p className="mt-1 text-xs text-slate-500 font-light">
                        {operationalHours}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Informative Help Card */}
              <div className="rounded-2xl bg-slate-900 text-white p-8">
                <HelpCircle className="h-8 w-8 text-cyan-400" />
                <h3 className="mt-4 font-display text-base font-bold text-white">Kenapa Butuh Detail Kecamatan Anda?</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 font-light">
                  Karakter batuan di Kota Kupang berbeda drastis. Sebagai ilustrasi, area Alak didominasi formasi karang tebal sehingga butuh bit pengebor bermata intan (diamond core bit). Daerah Oebobo dan Maulafa cenderung memiliki tanah liat merah berkapur namun berpasir di kedalaman tertentu. Mengisi detail kecamatan membantu tim geolog kami memberikan perkiraan kedalaman bor yang lebih akurat sebelum survey fisik.
                </p>
              </div>

            </div>

            {/* Column 2: Form (lg:span:7) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  Formulir Survey & Analisis Awal
                </h2>
                <p className="mt-1 text-xs text-slate-400 font-light">
                  Kirimkan detail rencana Anda. Sistem akan memformat data ini langsung ke WhatsApp tim teknis kami.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Nama Lengkap Anda *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Bpk. Hermanus"
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* WhatsApp field */}
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Nomor WhatsApp Aktif *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Contoh: 08123866XXXX"
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* Kecamatan field */}
                  <div>
                    <label htmlFor="subdistrict" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Kecamatan / Lokasi Pengeboran *
                    </label>
                    <input
                      type="text"
                      id="subdistrict"
                      name="subdistrict"
                      required
                      value={formData.subdistrict}
                      onChange={handleChange}
                      placeholder="Contoh: Kelapa Lima, Oebobo, Maulafa"
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* Service type drop down */}
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Jenis Kebutuhan Sumur Bor *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 focus:border-blue-600 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="Sumur Bor Rumah Tangga">Sumur Bor Rumah Tangga (Domestic)</option>
                      <option value="Sumur Bor Kost-kostan">Sumur Bor Kost-kostan (Menengah)</option>
                      <option value="Sumur Bor Industri, Ruko / Hotel">Sumur Bor Industri, Ruko / Hotel (Komersil)</option>
                      <option value="Survey Geolistrik Tanah">Survey Deteksi Air Geolistrik</option>
                      <option value="Perbaikan Pompa / Cuci Sumur surut">Perbaikan Pompa / Pengurasan Sumur</option>
                    </select>
                  </div>

                  {/* Details bio field */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Contoh: Kendala air saat ini surut total saat kemarau, atau ingin bor di area kebun belakang ruko..."
                      className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Form Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-sans text-base font-bold px-6 py-4 shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                    >
                      <Send className="h-5 w-5" />
                      Kirim & Konsultasi via WhatsApp
                    </button>
                  </div>
                  
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 p-4 text-xs text-emerald-800 font-medium"
                    >
                      <FileCheck2 className="h-5 w-5 text-emerald-500 shrink-0" />
                      Formulir berhasil diproses! Jendela obrolan WhatsApp resmi kami akan segera terbuka di tab Anda.
                    </motion.div>
                  )}

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
