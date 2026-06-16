/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function FloatingWhatsApp() {
  const { whatsappNumber } = useData();

  const handleClick = () => {
    const text = encodeURIComponent('Halo Sumur Bor Kupang, saya ingin bertanya tentang layanan pengeboran sumur.');
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Small popover badge to prompt action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.4 }}
        className="hidden sm:block rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-xl border border-slate-800"
      >
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Konsultasi Gratis via WA
        </span>
      </motion.div>

      {/* Floating Button */}
      <motion.button
        id="floating-whatsapp-btn"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-all focus:outline-none"
        aria-label="Contact on WhatsApp"
      >
        <PhoneCall className="h-6 w-6 stroke-[2.5]" />
      </motion.button>
    </div>
  );
}
