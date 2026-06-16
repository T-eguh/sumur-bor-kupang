/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Award, Heart, Check, Users2, Compass } from 'lucide-react';
import { COMPANY_NAME, COMPANY_SLOGAN } from '../data';
import cleanWaterWell from '../assets/images/clean_water_well_1781356198599.jpg';
import drillingRig from '../assets/images/drilling_rig_kupang_1781356181982.jpg';

export default function About() {
  const coverageCities = [
    'Oebobo (Kupang)',
    'Maulafa (Kupang)',
    'Alak (Kupang)',
    'Kelapa Lima (Kupang)',
    'Kota Raja (Kupang)',
    'Kota Lama (Kupang)',
    'Kupang Barat (Bolok, Tenau, dst)',
    'Kupang Timur (Oesao, Babau, dst)',
    'Kabupaten Kupang & Sekitarnya (NTT)'
  ];

  const coreValues = [
    {
      title: 'Legalitas & Terpercaya',
      desc: 'Kami adalah badan usaha terdaftar resmi yang menjamin kredibilitas kontrak pengerjaan untuk korporat, instansi pemerintah, maupun perumahan swasta.',
      icon: ShieldCheck
    },
    {
      title: 'Tim Berpengalaman Belasan Tahun',
      desc: 'Tim lapangan dipimpin oleh driller berpengalaman yang memahami betul struktur batuan kapur, karst, pasir, and andesit yang melimpah di Kupang.',
      icon: Users2
    },
    {
      title: 'Metode Ilmiah Modern',
      desc: 'Kami meyakini bahwa pengeboran modern tidak boleh hanya untung-untungan. Survey geolistrik kami menjamin kepastian mendapatkan akuifer air terbaik.',
      icon: Compass
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <section className="relative bg-slate-900 py-24 sm:py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={drillingRig}
            alt="About banner"
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
            <h1 className="font-display text-4xl font-extrabold sm:text-5xl text-white">
              Tentang Kami
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-200 font-light">
              Profil CV professional penyedia air bersih terbaik di Kupang Nusa Tenggara Timur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Backstory */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            
            {/* Image side */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video sm:aspect-square lg:aspect-auto lg:h-[500px]">
              <img
                src={cleanWaterWell}
                alt="Tentang kami sumur bor"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-slate-900/90 backdrop-blur-sm p-6 max-w-xs text-white border border-white/10">
                <span className="block font-display text-3xl font-extrabold text-blue-400">12+</span>
                <span className="block text-xs text-slate-300 font-medium mt-1">Tahun menyuplai kebutuhan air bersih berkualitas di Kupang</span>
              </div>
            </div>

            {/* Text side */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Profil Perusahaan
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl leading-snug">
                Kami Berkomitmen Mengatasi Krisis Air di Kupang dengan Pengeboran Presisi
              </h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600 font-light leading-relaxed">
                <p>
                  Didirikan dengan latar belakang untuk menjawab keresahan masyarakat Kupang dan daerah sekitarnya atas minimnya ketersediaan air bersih permukaan (terutama saat musim kemarau panjang bergulir), <strong>{COMPANY_NAME}</strong> hadir memberikan pelayanan jasa sumur bor berskala profesional.
                </p>
                <p>
                  Kondisi alam di Provinsi Nusa Tenggara Timur khususnya Kota Kupang, menyuguhkan tantangan tersendiri berupa bentang tanah kars koral kapur yang keras kepala. Pengeboran sumur manual tradisional atau alat bor ringan seringkali menyerah di pertengahan proses ketika berbenturan dengan batu karang hitam keras ini. 
                </p>
                <p>
                  Melalui dukungan armada mesin eketro yang dioperasikan secara computerized and hydraulic, kami sanggup menembus formasi bebatuan tebal Kupang hingga kedalaman puluhan bahkan ratusan meter. Didukung juga dengan metode pendataan gelombang geolistrik untuk menjamin keselamatan modal pengeboran, kami bangga mendedikasikan jangkauan jasa kami ke rumah tinggal, kost-kostan, perhotelan, ruko, perkantoran swasta hingga instansi pemerintahan.
                </p>
              </div>

              {/* Badges */}
              <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">
                  <Award className="h-5 w-5 text-blue-600" />
                  Alat Berat Hidrolik
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-sm">
                  <Heart className="h-5 w-5 text-red-500" />
                  Operator Lokal NTT
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-950 py-20 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-slate-900 opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* Vision card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Visi Perusahaan</span>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-white">Menjadi Penyelamat Kebutuhan Air Terpercaya</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 font-light">
                Menjadi perusahaan jasa sumur bor terkemuka di Kupang dan seluruh Nusa Tenggara Timur yang mengedepankan presisi sains-geofisika, kejujuran kontrak kerja, kualitas mekanikal, serta kelestarian lingkungan demi membantu masyarakat memperoleh air bersih berbiaya operasional adil.
              </p>
            </div>

            {/* Mission card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Misi Kami</span>
              <ul className="mt-6 space-y-4 text-sm font-light text-slate-300">
                {[
                  'Menjamin kualitas hasil pengeboran menggunakan sensor deteksi akuifer geolistrik.',
                  'Memodernisasi alat bor modern secara konsisten menyesuaikan teknologi global.',
                  'Memberikan transparansi rencana anggaran dan material (pipa, pompa) tanpa manipulasi.',
                  'Membina teknisi pengeboran lokal agar menguasai keahlian teknik mekanikal berstandar tinggi.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Nilai Kami</span>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-slate-900">Landasan Kerja Profesional</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900">{val.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 font-light">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Cities / Area Area */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Wilayah Layanan</span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-900">Cakupan Wilayah Pengeboran</h2>
            <p className="mt-2 text-sm text-slate-400 font-light">Kami melayani pengerjaan pengeboran sumur bor di Kota Kupang dan sekitarnya:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {coverageCities.map((city, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-700">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
