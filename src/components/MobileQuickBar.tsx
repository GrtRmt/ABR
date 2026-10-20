import React from 'react';
import { Phone, MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface MobileQuickBarProps {
  onOpenAppointment: () => void;
  onOpenQuoteModal?: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenAppointment,
  onOpenQuoteModal,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2">
      <div className="grid grid-cols-4 gap-1.5">
        {/* Offerte ABR */}
        <button
          onClick={onOpenQuoteModal || onOpenAppointment}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-blue-50 text-[#0B2545] font-bold text-[11px] border border-blue-200"
        >
          <Sparkles className="w-4 h-4 text-blue-600 mb-0.5" />
          <span>Offerte</span>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2545] font-bold text-[11px] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#0B2545] mb-0.5" />
          <span>Bellen</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[11px] border border-emerald-200 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Appointment CTA */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#0B2545] text-white font-bold text-[11px] transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>Afspraak</span>
        </button>
      </div>
    </div>
  );
};
