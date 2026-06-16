/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, GalleryItem, TestimonialItem } from './types';
import cleanWaterWell from './assets/images/clean_water_well_1781356198599.jpg';
import drillingRig from './assets/images/drilling_rig_kupang_1781356181982.jpg';
import galleryAssembly from './assets/images/gallery_assembly_1781444665193.jpg';
import galleryGushing from './assets/images/gallery_gushing_1781444678990.jpg';
import galleryMast from './assets/images/gallery_mast_1781444693066.jpg';
import galleryBanner from './assets/images/gallery_banner_1781444709789.jpg';
import galleryBorehole from './assets/images/gallery_borehole_1781444723507.jpg';
import galleryDrilling from './assets/images/gallery_drilling_1781444739303.jpg';
import galleryBlueRig from './assets/images/gallery_blue_rig_1781460134658.jpg';
import galleryHappyWater from './assets/images/gallery_happy_water_1781460163508.jpg';
import galleryInauguration from './assets/images/gallery_inauguration_1781460183935.jpg';
import gallerySolarPump from './assets/images/gallery_solar_pump_1781460201192.jpg';

export const COMPANY_NAME = 'Sumur Bor Kupang';
export const COMPANY_SLOGAN = 'Solusi Air Bersih Melimpah & Bergaransi di Nusa Tenggara Timur';
export const WHATSAPP_NUMBER = '0821-1988-5555';
export const CONTACT_PHONE = '0821-1988-5555';
export const CONTACT_EMAIL = 'aldysumurbor@gmail.com';
export const CONTACT_ADDRESS = 'Jln Air nona, Kota Raja.Kota Kupang';
export const OPERATIONAL_HOURS = 'Buka Setiap Hari (08:00 - 21:00 WITA)';

export const SERVICES: ServiceItem[] = [
  {
    id: 'sumur-bor-rumah-tangga',
    title: 'Sumur Bor Rumah Tangga & Kost',
    description: 'Pengeboran sumur untuk kebutuhan harian rumah tinggal, kontrakan, kost-kostan, dan rumah ibadah di Kupang dengan jaminan air bersih melimpah.',
    iconName: 'Home',
    features: [
      'Casing pipa PVC premium 3" - 4"',
      'Kedalaman bervariasi (40 - 80 meter) menyesuaikan letak akuifer air',
      'Penyetelan pompa air submersible / jet pump berkualitas',
      'Pengerjaan cepat (rata-rata 3-5 hari kerja)',
      'Garansi air bersih dan lancar'
    ],
    image: cleanWaterWell
  },
  {
    id: 'sumur-bor-industri',
    title: 'Sumur Bor Industri, Perkantoran & Hotel',
    description: 'Solusi pengeboran berkapasitas besar untuk mencukupi kebutuhan air komersial seperti hotel, ruko, restoran, pabrik, kolam renang, dan kawasan industri.',
    iconName: 'Building2',
    features: [
      'Casing pipa PVC / Steel tebal diameter 5" - 8"',
      'Kedalaman mencapai lebih dar 100 meter (tembus formasi batuan keras)',
      'Instalasi pompa submersible industri spesifikasi tinggi',
      'Penyusunan berkas perizinan pemanfaatan air (SIPA) jika dibutuhkan',
      'Analisis debit air (Pumping Test)'
    ],
    image: drillingRig
  },
  {
    id: 'geolistrik-survey',
    title: 'Survey Geolistrik & Deteksi Air Tanah',
    description: 'Menggunakan teknologi sensor geofisika digital untuk memetakan struktur batuan bawah tanah dan mendeteksi kedalaman akuifer air (titik air tanah) sebelum dibor.',
    iconName: 'Activity',
    features: [
      'Akurasi penentuan titik bor tinggi',
      'Menghindari resiko bor sisa (zero-water) atau gagal bor',
      'Mengetahui perkiraan tingkat kekerasan dan ketebalan lapisan batu',
      'Dilengkapi dengan laporan analisis hidrologi formal',
      'Sangat direkomendasikan untuk medan bebatuan kars Kupang'
    ],
    image: drillingRig
  },
  {
    id: 'service-cuci-sumur',
    title: 'Service, Cuci Sumur & Perbaikan Pompa',
    description: 'Perawatan berkala dan penyembuhan problem sumur bor yang surut, keruh berpasir, bau besi, pompa terbakar, atau pipa hisap bocor.',
    iconName: 'Wrench',
    features: [
      'Pengurasan dan pencucian lumpur sumur bor (Air Jetting)',
      'Pendalaman sumur bor lama yang kering akibat kemarau',
      'Penggantian dan gulung dinamo pompa submersible',
      'Penanganan pipa casing kolaps atau macet di dalam tanah',
      'Konsultasi perawatan sistem pipa air filter'
    ],
    image: cleanWaterWell
  }
];

export const KEUNGGULAN = [
  {
    id: 'k1',
    title: 'Peralatan Mesin Elektro',
    description: 'Menggunakan mesin bor elektro bertenaga tinggi yang mampu melubangi lapisan batu keras khas wilayah Kupang dan NTT dengan rapi dan stabil.',
    iconName: 'Cpu'
  },
  {
    id: 'k2',
    title: 'Teknisi Berpengalaman',
    description: 'Dikerjakan oleh operator sumur bor lokal yang sangat hafal kontur geologis Kupang (tanah liat, karst, batu karang hitam, batu kapur).',
    iconName: 'UserCheck'
  },
  {
    id: 'k3',
    title: 'Hasil Air Bergaransi',
    description: 'Kami memberikan jaminan air jernih dan debit air melimpah. Garansi perbaikan jika dalam waktu tertentu terjadi kendala pada konstruksi sumur.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'k4',
    title: 'Deteksi Geolistrik Presisi',
    description: 'Kami tidak asal menebak lokasi bor. Kami memakai metode geolistrik untuk menjamin pengeboran sampai di kedalaman sumber mata air terbaik.',
    iconName: 'Radar'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Pemasangan & Set-Up Mesin Bor Elektro SWA',
    category: 'Sumur Domestic',
    image: galleryAssembly,
    location: 'Kelurahan Air Nona, Kota Kupang',
    description: 'Proses penyetelan dan pengerjaan awal unit mesin bor elektro tumpu mandiri oleh teknisi CV. Sumber Wahyu Alam agar siap menembus batu karang.',
    fallbackType: 'drilling'
  },
  {
    id: 'g2',
    title: 'Uji Semburan Air Bersih Super Melimpah',
    category: 'Hasil Air',
    image: galleryGushing,
    location: 'Kecamatan Kota Raja, Kota Kupang',
    description: 'Hasil pumping test (uji debit air) membuktikan kejernihan dan limpahan air yang sangat besar untuk memenuhi suplai kebutuhan air harian warga.',
    fallbackType: 'gush'
  },
  {
    id: 'g3',
    title: 'Pendirian Menara Derrick Baja Tinggi',
    category: 'Sumur Industri',
    image: galleryMast,
    location: 'Kota Kupang, NTT',
    description: 'Mobilisasi dan pendirian struktur menara derrick baja kokoh dari CV. Sumber Wahyu Alam untuk menjangkau lapisan air tanah terdalam.',
    fallbackType: 'tower'
  },
  {
    id: 'g4',
    title: 'Dokumentasi Resmi CV. Sumber Wahyu Alam',
    category: 'Survey Lokasi',
    image: galleryBanner,
    location: 'Kota Kupang, NTT',
    description: 'Kemitraan resmi kami didukung oleh Pak Salim selaku pimpinan lapangan, siap melayani pengerjaan sumur bor, stros, arde, dan borpile berkualitas.',
    fallbackType: 'celebration'
  },
  {
    id: 'g5',
    title: 'Hasil Lubang Pahat Tembus Karang Tebal',
    category: 'Sumur Domestic',
    image: galleryBorehole,
    location: 'Kelurahan Liliba, Kota Kupang',
    description: 'Melihat langsung ke dalam lubang bor vertikal presisi hasil pahatan silinder menembus batu karang kering khas Kupang sampai ke titik mata air.',
    fallbackType: 'pump'
  },
  {
    id: 'g6',
    title: 'Proses Pengeboran Aktif Sumur Dalam (Deep Well)',
    category: 'Instalasi Pompa',
    image: galleryDrilling,
    location: 'Kota Kupang, NTT',
    description: 'Operator kami sedang melakukan pemantauan rotasi mata bor aktif bertekanan hidrolik di lokasi padat penduduk secara rapi dan profesional.',
    fallbackType: 'engine'
  },
  {
    id: 'g7',
    title: 'Pengoperasian Unit Mesin Bor Elektro SWA',
    category: 'Sumur Industri',
    image: galleryBlueRig,
    location: 'Kelurahan Air Nona, Kota Kupang',
    description: 'Pengoperasian mesin bor elektro tumpu mandiri bercat biru, andalan CV. Sumber Wahyu Alam untuk pengerjaan sumur bor presisi, stabil, dan cepat.',
    fallbackType: 'engine'
  },
  {
    id: 'g8',
    title: 'Keceriaan Warga Atas Limpahan Air Jernih',
    category: 'Hasil Air',
    image: galleryHappyWater,
    location: 'Kota Kupang, NTT',
    description: 'Ekspresi kebahagiaan anak-anak dan warga setempat kala air bersih nan jernih berhasil menyembur keluar ditarik pompa dengan begitu lancar.',
    fallbackType: 'children'
  },
  {
    id: 'g9',
    title: 'Peresmian Menara Air bersama POLRES Kupang',
    category: 'Hasil Air',
    image: galleryInauguration,
    location: 'Kecamatan Alak, Kota Kupang',
    description: 'Dokumentasi peresmian bak penampungan dan menara air bersih kolaborasi bersama instansi kepolisian untuk mengatasi kekeringan warga sekitar.',
    fallbackType: 'celebration'
  },
  {
    id: 'g10',
    title: 'Instalasi Pompa Submersible Tenaga Surya (Solar)',
    category: 'Instalasi Pompa',
    image: gallerySolarPump,
    location: 'Kota Kupang, NTT',
    description: 'Teknisi CV. Sumber Wahyu Alam melakukan penyambungan kelistrikan pompa satelit handal yang terintegrasi dengan jaringan panel surya hemat energi.',
    fallbackType: 'pump'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Bpk. Hermanus',
    role: 'Pemilik Rumah Kos',
    location: 'Kelapa Lima, Kupang',
    text: 'Sangat puas dengan layanannya! Air keluar melimpah dan jernih sekali walau di sini terkenal areanya berbatu keras. Timnya bekerja sangat cepat dan profesional.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ibu Fransiska',
    role: 'Ibu Rumah Tangga',
    location: 'Oebobo, Kupang',
    text: 'Sebelumnya bor dengan tukang biasa gagal di kedalaman 25 meter karena kena batu karang hitam. Tapi pakai CV Sumur Bor Kupang ini beres sampai 60 meter berkat alat hidroliknya. Recomended!',
    rating: 5
  },
  {
    id: 't3',
    name: 'Bpk. Albertus',
    role: 'Pengurus Yayasan',
    location: 'Maulafa, Kupang',
    text: 'Pengerjaan geolistriknya sangat akurat. Di bor tepat di titik yang disarankan, dan puji Tuhan air mengalir deras untuk supply asrama kami tanpa macet-macet.',
    rating: 5
  },
  {
    id: 't4',
    name: 'Ibu Paulina',
    role: 'Pengusaha Laundry',
    location: 'Penfui, Kupang',
    text: 'Bisnis laundry kami sangat butuh suplai air bersih tanpa henti. Layanan service sumur bor dari mereka sangat cekatan, pompa submersible saya diganti yang baru hanya dalam hitungan jam.',
    rating: 5
  }
];

export const FAQS = [
  {
    q: 'Berapa kedalaman umum sumur bor di Kota Kupang agar dapat air bersih?',
    a: 'Kondisi geologis Kupang didominasi batu kapur (kars) dan batu karang keras. Kedalaman optimal berkisar antara 40 hingga 80 meter untuk sumur rumah tangga guna mencapai lapisan akuifer yang aman dari surut di musim kemarau.'
  },
  {
    q: 'Kenapa pengeboran harus didahului dengan survey geolistrik?',
    a: 'Survey geolistrik berfungsi mengukur hambatan jenis bantuan secara elektronik di bawah permukaan tanah. Dengan survey ini, kita tahu pasti di kedalaman mana letak air tanah (akuifer) serta bagian mana yang berupa batu keras, sehingga mengurangi resiko nihil air saat dibor.'
  },
  {
    q: 'Apakah pengerjaannya bergaransi dan bagaimana jika air keruh?',
    a: 'Ya, seluruh pengerjaan kami bergaransi demi kenyamanan konsumen. Jika setelah pengerjaan air bermasalah atau debit merosot drastis dalam jangka waktu tertentu, kami akan kirim tim teknisi untuk evaluasi dan melakukan perbaikan tanpa biaya tambahan.'
  },
  {
    q: 'Jenis pompa apa yang direkomendasikan untuk sumur bor Kupang?',
    a: 'Kami menyarankan menggunakan Pompa Submersible (pompa satelit) dengan kapasitas dinamo (HP) yang disesuaikan kedalaman sumur. Kelebihannya adalah suara tidak bising, awet, dan dorongan airnya sangat kuat meski ditarik dari kedalaman sangat dalam.'
  },
  {
    q: 'Berapa lama estimasi waktu pembuatan sumur bor?',
    a: 'Pembuatan sumur bor rumah tangga umumnya memerlukan waktu 3 - 5 hari tergantung kondisi tingkat kekerasan formasi batuan di lokasi Anda.'
  }
];
