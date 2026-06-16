/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Settings, 
  Image as ImageIcon, 
  Upload, 
  Plus, 
  Trash2, 
  Edit, 
  Save, 
  RefreshCw, 
  Check, 
  X, 
  Phone, 
  MapPin, 
  Info, 
  LogOut, 
  Eye, 
  EyeOff, 
  Sparkles,
  HelpCircle,
  MessageSquare,
  Wrench,
  Grid
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { ServiceItem, GalleryItem, TestimonialItem, AppStats } from '../types';

// Preset local images imported from the app bundle for selection
import cleanWaterWell from '../assets/images/clean_water_well_1781356198599.jpg';
import drillingRig from '../assets/images/drilling_rig_kupang_1781356181982.jpg';
import galleryAssembly from '../assets/images/gallery_assembly_1781444665193.jpg';
import galleryGushing from '../assets/images/gallery_gushing_1781444678990.jpg';
import galleryMast from '../assets/images/gallery_mast_1781444693066.jpg';
import galleryBanner from '../assets/images/gallery_banner_1781444709789.jpg';
import galleryBorehole from '../assets/images/gallery_borehole_1781444723507.jpg';
import galleryDrilling from '../assets/images/gallery_drilling_1781444739303.jpg';
import galleryBlueRig from '../assets/images/gallery_blue_rig_1781460134658.jpg';
import galleryHappyWater from '../assets/images/gallery_happy_water_1781460163508.jpg';
import galleryInauguration from '../assets/images/gallery_inauguration_1781460183935.jpg';
import gallerySolarPump from '../assets/images/gallery_solar_pump_1781460201192.jpg';

const PRESET_IMAGES = [
  { name: 'Air Bersih SWA', url: cleanWaterWell },
  { name: 'Mesin Bor Diesel', url: drillingRig },
  { name: 'Peralatan Elektro SWA', url: galleryAssembly },
  { name: 'Semburan Sumur Melimpah', url: galleryGushing },
  { name: 'Menara Derrick Baja', url: galleryMast },
  { name: 'Dokumen Spanduk SWA', url: galleryBanner },
  { name: 'Lubang Sumur Bor Kars', url: galleryBorehole },
  { name: 'Pengeboran Aktif Karang', url: galleryDrilling },
  { name: 'Unit Bor Biru Presisi', url: galleryBlueRig },
  { name: 'Keceriaan Air Jernih Warga', url: galleryHappyWater },
  { name: 'Peresmian Menara Air Alak', url: galleryInauguration },
  { name: 'Instalasi Pompa Tenaga Surya', url: gallerySolarPump },
];

export default function Admin() {
  const {
    companyName,
    companySlogan,
    whatsappNumber,
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
    updateGallery,
    updateTestimonials,
    updateFaqs,
    resetToDefaults,
    isLoggedIn,
    login,
    logout
  } = useData();

  // Authentication states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  // Dashboard Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'services' | 'gallery' | 'testimonials'>('profile');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // File Upload states / reference helper
  const [selectedImageField, setSelectedImageField] = useState<{
    type: 'service' | 'gallery';
    id: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Editing helper states
  // Profile
  const [profName, setProfName] = useState(companyName);
  const [profSlogan, setProfSlogan] = useState(companySlogan);
  const [profWA, setProfWA] = useState(whatsappNumber);
  const [profPhone, setProfPhone] = useState(contactPhone);
  const [profEmail, setProfEmail] = useState(contactEmail);
  const [profAddr, setProfAddr] = useState(contactAddress);
  const [profHours, setProfHours] = useState(operationalHours);
  // Hero
  const [editHeroBadge, setEditHeroBadge] = useState(heroBadge);
  const [editHeroTitle, setEditHeroTitle] = useState(heroTitle);
  const [editHeroSubtitle, setEditHeroSubtitle] = useState(heroSubtitle);
  const [editStats, setEditStats] = useState(JSON.parse(JSON.stringify(stats)));

  // Services
  const [editServicesList, setEditServicesList] = useState<ServiceItem[]>(services);
  // Gallery
  const [editGalleryList, setEditGalleryList] = useState<GalleryItem[]>(gallery);
  // Testimonials
  const [editTestimonialsList, setEditTestimonialsList] = useState<TestimonialItem[]>(testimonials);
  // FAQs
  const [editFaqsList, setEditFaqsList] = useState(faqs);

  const triggerAlert = (message: string) => {
    setSaveStatus(message);
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      setAuthError('');
      // Sync editing state with context values
      setProfName(companyName);
      setProfSlogan(companySlogan);
      setProfWA(whatsappNumber);
      setProfPhone(contactPhone);
      setProfEmail(contactEmail);
      setProfAddr(contactAddress);
      setProfHours(operationalHours);
      setEditHeroBadge(heroBadge);
      setEditHeroTitle(heroTitle);
      setEditHeroSubtitle(heroSubtitle);
      setEditStats(JSON.parse(JSON.stringify(stats)));
      setEditServicesList(services);
      setEditGalleryList(gallery);
      setEditTestimonialsList(testimonials);
      setEditFaqsList(faqs);
    } else {
      setAuthError('Username atau kata sandi salah. Silakan coba lagi.');
    }
  };

  const handleSaveProfile = () => {
    updateConfigs({
      companyName: profName,
      companySlogan: profSlogan,
      whatsappNumber: profWA,
      contactPhone: profPhone,
      contactEmail: profEmail,
      contactAddress: profAddr,
      operationalHours: profHours
    });
    updateHero({
      heroBadge: editHeroBadge,
      heroTitle: editHeroTitle,
      heroSubtitle: editHeroSubtitle,
      stats: editStats
    });
    triggerAlert('Konfigurasi perusahaan dan landing page berhasil disimpan!');
  };

  const handleSaveServices = () => {
    updateServices(editServicesList);
    triggerAlert('Daftar layanan berhasil diperbarui!');
  };

  const handleSaveGallery = () => {
    updateGallery(editGalleryList);
    triggerAlert('Galeri portofolio proyek berhasil diperbarui!');
  };

  const handleSaveReviewsFaqs = () => {
    updateTestimonials(editTestimonialsList);
    updateFaqs(editFaqsList);
    triggerAlert('Ulasan warga dan FAQs berhasil disimpan!');
  };

  const handleResetDefaults = () => {
    if (window.confirm('Apakah Anda yakin ingin mengembalikan semua data ke pengaturan default? Semua perubahan manual akan dihapus.')) {
      resetToDefaults();
      // Reload states
      setProfName(companyName);
      setProfSlogan(companySlogan);
      setProfWA(whatsappNumber);
      setProfPhone(contactPhone);
      setProfEmail(contactEmail);
      setProfAddr(contactAddress);
      setProfHours(operationalHours);
      setEditHeroBadge(heroBadge);
      setEditHeroTitle(heroTitle);
      setEditHeroSubtitle(heroSubtitle);
      setEditStats(JSON.parse(JSON.stringify(stats)));
      setEditServicesList(services);
      setEditGalleryList(gallery);
      setEditTestimonialsList(testimonials);
      setEditFaqsList(faqs);
      triggerAlert('Semua data berhasil direset ke pengaturan bawaan!');
    }
  };

  // Base64 file uploader logic
  const handleUploadedFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('File harus berupa gambar!');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (!base64 || !selectedImageField) return;

      if (selectedImageField.type === 'service') {
        const updated = editServicesList.map(srv => 
          srv.id === selectedImageField.id ? { ...srv, image: base64 } : srv
        );
        setEditServicesList(updated);
      } else if (selectedImageField.type === 'gallery') {
        const updated = editGalleryList.map(item => 
          item.id === selectedImageField.id ? { ...item, image: base64 } : item
        );
        setEditGalleryList(updated);
      }
      setSelectedImageField(null);
      triggerAlert('Gambar berhasil diunggah!');
    };
    reader.readAsDataURL(file);
  };

  // Preset image selection logic
  const handleSelectPreset = (url: string) => {
    if (!selectedImageField) return;
    if (selectedImageField.type === 'service') {
      const updated = editServicesList.map(srv => 
        srv.id === selectedImageField.id ? { ...srv, image: url } : srv
      );
      setEditServicesList(updated);
    } else if (selectedImageField.type === 'gallery') {
      const updated = editGalleryList.map(item => 
        item.id === selectedImageField.id ? { ...item, image: url } : item
      );
      setEditGalleryList(updated);
    }
    setSelectedImageField(null);
    triggerAlert('Gambar preset berhasil diterapkan!');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="admin-root-view">
      
      {/* Alert Notification Popup banner */}
      <AnimatePresence>
        {saveStatus && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-xl flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            {saveStatus}
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoggedIn ? (
        /* ==================== LOGIN FORM GATE ==================== */
        <div className="flex min-h-[60vh] items-center justify-center py-6 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-3xl border border-slate-200/80 bg-white p-8 shadow-2xl shadow-blue-900/5 relative overflow-hidden"
          >
            {/* Ambient backgrounds */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-100/30 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-100/30 blur-2xl pointer-events-none" />

            <div className="text-center mb-8 relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-100">
                <Lock className="h-6 w-6" id="login-lock-icon" />
              </div>
              <h1 className="mt-4 font-display text-2xl font-bold text-slate-900">
                Hub Admin SWA
              </h1>
              <p className="mt-2 text-xs text-slate-500 font-light">
                Masukkan kredensial khusus Anda untuk mengelola teks & galeri konten website.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-5 relative">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                  placeholder="Masukkan username"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-10 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {authError && (
                <div className="rounded-lg bg-rose-50 border border-rose-100 p-3 text-xs text-rose-600 font-medium">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-cyan-600 transition-all cursor-pointer"
              >
                Log In Sekarang
              </button>
              
              <div className="text-center pt-2">
                <span className="text-[10px] text-slate-400">
                  CV. Sumber Wahyu Alam (SWA) Kupang • NTT
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      ) : (
        /* ==================== SECURED ADMIN WORKSPACE ==================== */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="admin-workspace">
          
          {/* LEFT COLUMN: Sidebar Navigation Panel */}
          <div className="lg:col-span-3 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Settings className="h-5 w-5 animate-spin-slow" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 leading-tight">Admin CMS</h2>
                  <p className="text-[10px] text-slate-500 font-medium">CV. Sumber Wahyu Alam</p>
                </div>
              </div>

              {/* Tab Toggles */}
              <div className="space-y-1 flex flex-col">
                <button
                  onClick={() => setActiveSubTab('profile')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
                    activeSubTab === 'profile' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  Profil & Hero Beranda
                </button>
                <button
                  onClick={() => setActiveSubTab('services')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
                    activeSubTab === 'services' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <Wrench className="h-4 w-4" />
                  Layanan Sumur
                </button>
                <button
                  onClick={() => setActiveSubTab('gallery')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
                    activeSubTab === 'gallery' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                  Galeri & Foto Baru
                </button>
                <button
                  onClick={() => setActiveSubTab('testimonials')}
                  className={`flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-lg text-left transition-colors cursor-pointer ${
                    activeSubTab === 'testimonials' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  Ulasan & Tanya Jawab
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={logout}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5 text-slate-500" />
                  Log Out
                </button>
                <button
                  onClick={handleResetDefaults}
                  className="flex items-center justify-center gap-2 rounded-lg bg-red-50 hover:bg-red-100/80 px-3 py-2 text-xs font-bold text-red-700 transition-colors cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Reset ke Bawaan SWA
                </button>
              </div>
            </div>
            
            <div className="rounded-2xl bg-blue-50/70 border border-blue-100/60 p-4 text-xs text-blue-900 leading-relaxed font-light">
              <div className="flex gap-2 font-semibold text-blue-950 mb-1">
                <Info className="h-4 w-4 shrink-0 text-blue-600" />
                <span>Petunjuk Admin</span>
              </div>
              Semua suntingan disimpan di basis data lokal browser Anda secara andal. Ketika Anda siap mempublikasikannya, perubahan ini tidak akan hilang selama data cache Vercel Anda utuh.
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Workspaces */}
          <div className="lg:col-span-9">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              
              {activeSubTab === 'profile' && (
                /* ==================== TAB: GENERAL PROFILE & HERO ==================== */
                <div className="space-y-8" id="profile-pane">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-blue-600" />
                      Profil Perushaan & Tagline Utama
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 font-light">
                      Modifikasi nama resmi, kontak kantor Kupang, serta teks banner pahlawan (Hero Section).
                    </p>
                  </div>

                  {/* Company Info form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Nama Perusahaan</label>
                      <input
                        type="text"
                        value={profName}
                        onChange={(e) => setProfName(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Slogan Utama</label>
                      <input
                        type="text"
                        value={profSlogan}
                        onChange={(e) => setProfSlogan(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">WhatsApp Admin Link (Tanpa '+' / spasi)</label>
                      <input
                        type="text"
                        value={profWA}
                        onChange={(e) => setProfWA(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm font-mono focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">No. Telepon Kantor</label>
                      <input
                        type="text"
                        value={profPhone}
                        onChange={(e) => setProfPhone(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Email Kantor</label>
                      <input
                        type="email"
                        value={profEmail}
                        onChange={(e) => setProfEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Jam Operasional</label>
                      <input
                        type="text"
                        value={profHours}
                        onChange={(e) => setProfHours(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Alamat Lengkap Kantor</label>
                      <textarea
                        rows={2}
                        value={profAddr}
                        onChange={(e) => setProfAddr(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Hero texts */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-900">Desain Banner Hero Utama</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Badge Atas Hero</label>
                        <input
                          type="text"
                          value={editHeroBadge}
                          onChange={(e) => setEditHeroBadge(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Judul Utama H1 (Dukung tag warna)</label>
                        <input
                          type="text"
                          value={editHeroTitle}
                          onChange={(e) => setEditHeroTitle(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Sub-Deskripsi Hero</label>
                        <textarea
                          rows={3}
                          value={editHeroSubtitle}
                          onChange={(e) => setEditHeroSubtitle(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Hero Stats */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-900">Statistik Kemajuan</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {editStats.map((st: AppStats, index: number) => (
                        <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex flex-col gap-2">
                          <div>
                            <span className="block text-[10px] text-slate-500 font-bold uppercase">Angka Angka {index+1}</span>
                            <input
                              type="text"
                              value={st.value}
                              onChange={(e) => {
                                const copy = [...editStats];
                                copy[index].value = e.target.value;
                                setEditStats(copy);
                              }}
                              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm font-bold text-slate-950"
                            />
                          </div>
                          <div>
                            <span className="block text-[10px] text-slate-500 font-medium">Kategori Atribut/Label</span>
                            <input
                              type="text"
                              value={st.label}
                              onChange={(e) => {
                                const copy = [...editStats];
                                copy[index].label = e.target.value;
                                setEditStats(copy);
                              }}
                              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit buttons */}
                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-sans text-sm font-bold text-white shadow-md hover:opacity-90 transition-all cursor-pointer"
                    >
                      <Save className="h-4 w-4" />
                      Simpan Profil & Hero
                    </button>
                  </div>
                </div>
              )}

              {activeSubTab === 'services' && (
                /* ==================== TAB: SERVICES MANAGER ==================== */
                <div className="space-y-8" id="services-pane">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-blue-600" />
                        Layanan Sumur Bor & Konstruksi
                      </h2>
                      <p className="text-xs text-slate-500 mt-1 font-light">
                        Ubah pilar layanan, rincian fitur bullet points, serta dekorasi gambar.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const nextId = `sumur-bor-${Date.now()}`;
                        setEditServicesList([...editServicesList, {
                          id: nextId,
                          title: 'Layanan Sumur Bor Baru',
                          description: 'Deskripsi lengkap penawaran layanan profesional dari staf CV. Sumber Wahyu Alam Kupang.',
                          iconName: 'Home',
                          features: ['Fitur Layanan Utama 1', 'Garansi Kepuasan Air Bersih'],
                          image: cleanWaterWell
                        }]);
                      }}
                      className="flex items-center gap-1.5 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 text-xs font-bold hover:bg-blue-200 transition-all cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Tambah Layanan Baru
                    </button>
                  </div>

                  <div className="space-y-6">
                    {editServicesList.map((srv, index) => (
                      <div key={srv.id} className="rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm bg-slate-50/50">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-3">
                          <h3 className="font-display text-sm font-bold text-blue-900 uppercase tracking-wide leading-none">
                            Layanan #{index + 1}
                          </h3>
                          <button
                            onClick={() => {
                              if (window.confirm(`Hapus layanan "${srv.title}"?`)) {
                                setEditServicesList(editServicesList.filter(s => s.id !== srv.id));
                              }
                            }}
                            className="flex items-center gap-1 text-xs text-red-500 font-bold hover:text-red-700 hover:bg-slate-100 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                            Hapus Jasa
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {/* Image preview & changer */}
                          <div className="md:col-span-1 space-y-2">
                            <span className="block text-xs font-bold text-slate-700 uppercase">Foto Cover</span>
                            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative group">
                              <img src={srv.image} alt="Service preview" className="h-full w-full object-cover" />
                              <button
                                onClick={() => setSelectedImageField({ type: 'service', id: srv.id })}
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-[10px] font-bold text-white cursor-pointer"
                              >
                                <Upload className="h-5 w-5 mb-1 text-cyan-400" />
                                Ganti Gambar
                              </button>
                            </div>
                          </div>

                          <div className="md:col-span-3 space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-bold text-slate-500 uppercase">Nama Jasa</label>
                                <input
                                  type="text"
                                  value={srv.title}
                                  onChange={(e) => {
                                    const copy = [...editServicesList];
                                    copy[index].title = e.target.value;
                                    setEditServicesList(copy);
                                  }}
                                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-bold text-slate-500 uppercase">Icon Nama (Lucide)</label>
                                <select
                                  value={srv.iconName}
                                  onChange={(e) => {
                                    const copy = [...editServicesList];
                                    copy[index].iconName = e.target.value;
                                    setEditServicesList(copy);
                                  }}
                                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm cursor-pointer"
                                >
                                  <option value="Home">Home (Rumah Tinggal)</option>
                                  <option value="Building2">Building2 (Komersial)</option>
                                  <option value="Activity">Activity (Survey Geolistrik)</option>
                                  <option value="Wrench">Wrench (Perawatan/Service)</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold text-slate-500 uppercase">Ringkasan / Penjelasan</label>
                              <textarea
                                rows={2}
                                value={srv.description}
                                onChange={(e) => {
                                  const copy = [...editServicesList];
                                  copy[index].description = e.target.value;
                                  setEditServicesList(copy);
                                }}
                                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 leading-relaxed"
                              />
                            </div>

                            {/* Features list */}
                            <div className="space-y-1.5">
                              <label className="block text-[11px] font-bold text-slate-500 uppercase">Rincian Fitur Utama (Pelayanan)</label>
                              <div className="space-y-1">
                                {srv.features.map((ft, ftIdx) => (
                                  <div key={ftIdx} className="flex items-center gap-2">
                                    <input
                                      type="text"
                                      value={ft}
                                      onChange={(e) => {
                                        const copy = [...editServicesList];
                                        copy[index].features[ftIdx] = e.target.value;
                                        setEditServicesList(copy);
                                      }}
                                      className="flex-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700"
                                    />
                                    <button
                                      onClick={() => {
                                        const copy = [...editServicesList];
                                        copy[index].features.splice(ftIdx, 1);
                                        setEditServicesList(copy);
                                      }}
                                      className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-slate-200"
                                    >
                                      <X className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                ))}
                                <button
                                  onClick={() => {
                                    const copy = [...editServicesList];
                                    copy[index].features.push('Fitur Poin Baru');
                                    setEditServicesList(copy);
                                  }}
                                  className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 hover:text-blue-800"
                                >
                                  <Plus className="h-3 w-3" /> Tambah Poin Rincian
                                </button>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button
                      onClick={handleSaveServices}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-sans text-sm font-bold text-white shadow-md hover:brightness-105 transition-all cursor-pointer"
                    >
                      <Save className="h-4 w-4" />
                      Simpan Layanan Kami
                    </button>
                  </div>
                </div>
              )}

              {activeSubTab === 'gallery' && (
                /* ==================== TAB: GALLERY & PROJECTS ==================== */
                <div className="space-y-8" id="gallery-pane">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Grid className="h-5 w-5 text-blue-600" />
                        Galeri Portofolio & Proyek Sensus SWA
                      </h2>
                      <p className="text-xs text-slate-500 mt-1 font-light">
                        Ganti dokumentasi proyek, judul lokasi, ketik deskripsi baru, atau hapus item di tab Galeri.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const nextId = `g${Date.now()}`;
                        setEditGalleryList([{
                          id: nextId,
                          title: 'Kelancaran Air Bersih Baru',
                          category: 'Hasil Air',
                          image: galleryHappyWater,
                          location: 'Kecamatan Kelapa Lima, Kupang',
                          description: 'Dokumentasi keberhasilan air melimpah dari bor baru oleh tim SWA.',
                          fallbackType: 'children'
                        }, ...editGalleryList]);
                      }}
                      className="flex items-center gap-1.5 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 text-xs font-bold hover:bg-blue-200 transition-all cursor-pointer"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      Tambah Foto Proyek Baru
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {editGalleryList.map((item, index) => (
                      <div key={item.id} className="rounded-2xl border border-slate-200 p-4 space-y-3 bg-slate-50/50 shadow-sm relative group">
                        
                        {/* Image presentation & overlay changer */}
                        <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-200 relative">
                          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                          <button
                            onClick={() => setSelectedImageField({ type: 'gallery', id: item.id })}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-xs font-bold text-white cursor-pointer"
                          >
                            <Upload className="h-6 w-6 mb-1 text-cyan-400" />
                            Unggah Foto Sendiri / Pilih Preset SWA
                          </button>
                        </div>

                        {/* Title, Category & Location Edit Fields */}
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <span className="block text-[10px] font-bold text-slate-500 uppercase">Kategori Kategori</span>
                              <select
                                value={item.category}
                                onChange={(e) => {
                                  const copy = [...editGalleryList];
                                  copy[index].category = e.target.value;
                                  setEditGalleryList(copy);
                                }}
                                className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium cursor-pointer"
                              >
                                <option value="Hasil Air">Hasil Air</option>
                                <option value="Sumur Domestic">Sumur Domestic</option>
                                <option value="Sumur Industri">Sumur Industri</option>
                                <option value="Survey Lokasi">Survey Lokasi</option>
                                <option value="Instalasi Pompa">Instalasi Pompa</option>
                              </select>
                            </div>
                            <div>
                              <span className="block text-[10px] font-bold text-slate-500 uppercase">Lokasi Penugasan</span>
                              <input
                                type="text"
                                value={item.location}
                                onChange={(e) => {
                                  const copy = [...editGalleryList];
                                  copy[index].location = e.target.value;
                                  setEditGalleryList(copy);
                                }}
                                className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs"
                                placeholder="Misal: Kec. Alak, Kupang"
                              />
                            </div>
                          </div>

                          <div>
                            <span className="block text-[10px] font-bold text-slate-500 uppercase">Judul Proyek</span>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => {
                                const copy = [...editGalleryList];
                                copy[index].title = e.target.value;
                                setEditGalleryList(copy);
                              }}
                              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold"
                            />
                          </div>

                          <div>
                            <span className="block text-[10px] font-bold text-slate-500 uppercase">Deskripsi Kejadian</span>
                            <textarea
                              rows={2}
                              value={item.description || ''}
                              onChange={(e) => {
                                const copy = [...editGalleryList];
                                copy[index].description = e.target.value;
                                setEditGalleryList(copy);
                              }}
                              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 font-light"
                            />
                          </div>

                          <div className="flex justify-end pt-2 border-t border-slate-100">
                            <button
                              onClick={() => {
                                if (window.confirm('Hapus foto pengerjaan proyek galeri ini?')) {
                                  setEditGalleryList(editGalleryList.filter(g => g.id !== item.id));
                                }
                              }}
                              className="flex items-center gap-1 text-[11px] font-bold text-red-500 hover:text-red-700 px-2 py-1 rounded hover:bg-slate-100 cursor-pointer"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                              Hapus Foto
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button
                      onClick={handleSaveGallery}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-sans text-sm font-bold text-white shadow-md hover:opacity-95 transition-all cursor-pointer"
                    >
                      <Save className="h-4 w-4" />
                      Simpan Galeri Proyek
                    </button>
                  </div>
                </div>
              )}

              {activeSubTab === 'testimonials' && (
                /* ==================== TAB: REVIEWS & FAQS ==================== */
                <div className="space-y-8" id="testimonials-pane">
                  {/* Reviews Section */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                          Ulasan Kepuasan Warga & Klien
                        </h2>
                        <p className="text-xs text-slate-500 font-light mt-0.5">
                          Sesuaikan testimoni warga Kupang yang telah menggunakan jasa sumur bor.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const nextId = `t${Date.now()}`;
                          setEditTestimonialsList([...editTestimonialsList, {
                            id: nextId,
                            name: 'Bpk. Nama Baru',
                            role: 'Pekerjaan / Klien',
                            location: 'Kota Kupang, NTT',
                            text: 'Pekerjaan sangat rapi dan air langsung menyembur lancar dari sumur bor.',
                            rating: 5
                          }]);
                        }}
                        className="flex items-center gap-1 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 px-3.5 py-1.5 text-xs font-bold hover:bg-blue-200 transition-all cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Tambah Ulasan
                      </button>
                    </div>

                    <div className="space-y-4">
                      {editTestimonialsList.map((test, index) => (
                        <div key={test.id} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/40">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                              <span className="block text-[10px] font-semibold text-slate-500 uppercase">Nama Konsumen</span>
                              <input
                                type="text"
                                value={test.name}
                                onChange={(e) => {
                                  const copy = [...editTestimonialsList];
                                  copy[index].name = e.target.value;
                                  setEditTestimonialsList(copy);
                                }}
                                className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold"
                              />
                            </div>
                            <div>
                              <span className="block text-[10px] font-semibold text-slate-500 uppercase">Profesi / Peran</span>
                              <input
                                type="text"
                                value={test.role}
                                onChange={(e) => {
                                  const copy = [...editTestimonialsList];
                                  copy[index].role = e.target.value;
                                  setEditTestimonialsList(copy);
                                }}
                                className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs"
                              />
                            </div>
                            <div>
                              <span className="block text-[10px] font-semibold text-slate-500 uppercase">Asal Kelurahan/Kecamatan</span>
                              <input
                                type="text"
                                value={test.location}
                                onChange={(e) => {
                                  const copy = [...editTestimonialsList];
                                  copy[index].location = e.target.value;
                                  setEditTestimonialsList(copy);
                                }}
                                className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs"
                              />
                            </div>
                          </div>

                          <div>
                            <span className="block text-[10px] font-semibold text-slate-500 uppercase">Bunyi Kalimat Testimoni</span>
                            <textarea
                              rows={2}
                              value={test.text}
                              onChange={(e) => {
                                const copy = [...editTestimonialsList];
                                copy[index].text = e.target.value;
                                setEditTestimonialsList(copy);
                              }}
                              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-light"
                            />
                          </div>

                          <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] font-semibold text-slate-500 uppercase">Bintang Ulasan:</span>
                              <select
                                value={test.rating}
                                onChange={(e) => {
                                  const copy = [...editTestimonialsList];
                                  copy[index].rating = Number(e.target.value);
                                  setEditTestimonialsList(copy);
                                }}
                                className="rounded border border-slate-200 py-0.5 px-2 bg-white text-xs font-bold cursor-pointer"
                              >
                                <option value="5">5 Bintang ⭐⭐⭐⭐⭐</option>
                                <option value="4">4 Bintang ⭐⭐⭐⭐</option>
                                <option value="3">3 Bintang ⭐⭐⭐</option>
                              </select>
                            </div>
                            <button
                              onClick={() => {
                                setEditTestimonialsList(editTestimonialsList.filter(t => t.id !== test.id));
                              }}
                              className="text-xs text-rose-500 font-bold hover:text-rose-700 hover:bg-slate-100 p-1 rounded transition-colors cursor-pointer"
                            >
                              Hapus Testimoni
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* FAQS section */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-blue-600" />
                          Tanya Jawab (FAQs) Warga
                        </h2>
                        <p className="text-xs text-slate-500 font-light mt-0.5">
                          Ubah atau tambahkan FAQ kunci untuk meyakinkan calon pelanggan mengenai proses konstruksi sumur bor Kupang.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setEditFaqsList([...editFaqsList, {
                            q: 'Pertanyaan umum baru?',
                            a: 'Penjelasan rinci mengenai pengerjaan yang stabil, kokoh, dan rapi kami berikan.'
                          }]);
                        }}
                        className="flex items-center gap-1 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 px-3.5 py-1.5 text-xs font-bold hover:bg-blue-200 transition-all cursor-pointer"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        Tambah Q&A Baru
                      </button>
                    </div>

                    <div className="space-y-4">
                      {editFaqsList.map((item, idx) => (
                        <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/40">
                          <div>
                            <span className="block text-[10px] font-bold text-blue-900 uppercase">Pertanyaan / Kueri FAQ #{idx+1}</span>
                            <input
                              type="text"
                              value={item.q}
                              onChange={(e) => {
                                const copy = [...editFaqsList];
                                copy[idx].q = e.target.value;
                                setEditFaqsList(copy);
                              }}
                              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold"
                            />
                          </div>
                          <div>
                            <span className="block text-[10px] font-bold text-cyan-600 uppercase">Jawaban Formal</span>
                            <textarea
                              rows={2}
                              value={item.a}
                              onChange={(e) => {
                                const copy = [...editFaqsList];
                                copy[idx].a = e.target.value;
                                setEditFaqsList(copy);
                              }}
                              className="mt-0.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 font-light leading-relaxed"
                            />
                          </div>
                          <div className="flex justify-end pt-1">
                            <button
                              onClick={() => {
                                setEditFaqsList(editFaqsList.filter((_, fIdx) => fIdx !== idx));
                              }}
                              className="text-xs text-rose-500 hover:text-rose-700 p-1 rounded hover:bg-slate-150 cursor-pointer"
                            >
                              Hapus Q&A
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-slate-100">
                    <button
                      onClick={handleSaveReviewsFaqs}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-sans text-sm font-bold text-white shadow-md hover:brightness-105 transition-all cursor-pointer"
                    >
                      <Save className="h-4 w-4" />
                      Simpan Ulasan & FAQs
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      )}

      {/* ==================== SELECT / UPLOAD IMAGE DIALOG MODAL ==================== */}
      <AnimatePresence>
        {selectedImageField && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" id="image-upload-modal">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-center border-b border-slate-150 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-blue-600" />
                    Atur Foto Proyek / Layanan SWA
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-light">
                    Anda bisa memilih foto-foto asli hasil pengerjaan tim SWA di Kupang atau mengunggah foto baru.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImageField(null)}
                  className="rounded-full bg-slate-100 p-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* GRID OPTIONS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Drag and Drop Uploader Target (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Unggah Foto Baru Klien</h4>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragOver(false);
                      if (e.dataTransfer.files?.[0]) {
                        handleUploadedFile(e.dataTransfer.files[0]);
                      }
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`aspect-square sm:aspect-video lg:aspect-square flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
                      isDragOver
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-slate-350 bg-slate-50 hover:bg-slate-100/70 text-slate-500'
                    }`}
                  >
                    <Upload className="h-8 w-8 mb-2 text-blue-500" />
                    <span className="block text-xs font-bold text-slate-700">Tarik gambar ke sini</span>
                    <span className="block text-[11px] text-slate-450 mt-1 font-light">atau klik untuk menelusuri file (Mendukung drag & drop & manual click)</span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleUploadedFile(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Preset SWA Images Selector (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Foto Preset Pengerjaan SWA di Kupang</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[350px] p-1">
                    {PRESET_IMAGES.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectPreset(img.url)}
                        className="group border border-slate-200 rounded-xl overflow-hidden text-left bg-slate-50 hover:border-blue-500 hover:ring-2 hover:ring-blue-500/20 transition-all cursor-pointer"
                      >
                        <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                          <img src={img.url} alt={img.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-1 px-2 text-center">
                          <span className="block text-[10px] font-semibold text-slate-750 line-clamp-1">{img.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
