/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Lock } from 'lucide-react';
import SwaLogo from './SwaLogo';
import { PageType } from '../types';
import { useData } from '../context/DataContext';

interface FooterProps {
  setActiveTab: (tab: PageType) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const {
    companyName,
    companySlogan,
    contactPhone,
    contactEmail,
    contactAddress,
    operationalHours,
    services
  } = useData();
  
  const handleNavClick = (tabId: PageType) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Upper Footer section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Info */}
          <div className="flex flex-col gap-4">
            <div 
              className="flex cursor-pointer items-center gap-3" 
              id="footer-logo"
              onClick={() => handleNavClick('beranda')}
            >
              <SwaLogo size={44} className="rounded-full shadow-md shadow-slate-950/20" />
              <span className="font-display text-lg font-bold tracking-tight text-white uppercase">
                {companyName.split(' ')[0]} <span className="text-cyan-400">{companyName.split(' ').slice(1).join(' ')}</span>
              </span>
            </div>
            <p className="text-sm font-light text-slate-400 leading-relaxed">
              {companySlogan}. Tim spesialis pengeboran profesional yang siap mengatasi kendala air bersih di properti Anda.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="h-4 w-4 text-blue-400 shrink-0" />
                <span>{operationalHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Menu Navigasi
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <button 
                  id="footer-nav-beranda"
                  onClick={() => handleNavClick('beranda')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-tentang"
                  onClick={() => handleNavClick('tentang-kami')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-layanan"
                  onClick={() => handleNavClick('layanan')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Layanan Sumur
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-galeri"
                  onClick={() => handleNavClick('galeri')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Galeri Proyek
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-hubungi"
                  onClick={() => handleNavClick('hubungi-kami')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Layanan Sumur Bor
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              {services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <button
                    id={`footer-srv-${srv.id}`}
                    onClick={() => handleNavClick('layanan')}
                    className="hover:text-cyan-400 text-left transition-colors cursor-pointer"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Kontak Kami
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{contactAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <a href={`tel:${contactPhone}`} className="hover:text-white transition-colors">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors break-all">
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Footer section */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {companyName}. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-4 items-center">
            <span className="hover:text-slate-400 transition-all cursor-pointer">Kota Kupang, NTT | Indonesia</span>
            <span>•</span>
            <button
              onClick={() => handleNavClick('admin')}
              className="flex items-center gap-1.5 hover:text-white text-slate-400 uppercase tracking-widest text-[10px] font-bold transition-all cursor-pointer"
            >
              <Lock className="h-3.5 w-3.5 text-blue-500" />
              Kelola CMS SWA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
