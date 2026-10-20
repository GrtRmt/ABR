import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageSquare, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Verzekeren',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    preferredTiming: 'Op kantoor in Ledegem (tijdens kantooruren)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hallo Remaut Verzekeringen,\n\nIk wil graag een afspraak maken:\n- Naam: ${formData.name || 'Niet ingevuld'}\n- Telefoon: ${formData.phone || 'Niet ingevuld'}\n- Onderwerp: ${formData.service}\n- Tijdsvoorkeur: ${formData.preferredTiming}\n- Toelichting: ${formData.notes || 'Geen toelichting'}`
    );
    window.open(`https://wa.me/3256509603?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
            <Calendar className="w-4 h-4" />
            <span>Afspraak Inplannen</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {BUSINESS_INFO.name}
          </h3>
          <p className="text-xs sm:text-sm text-blue-200 mt-1">
            Stationsstraat 111, Ledegem • Bel 056/50.96.03
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Aanvraag succesvol verstuurd!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Dank u wel, <strong className="text-slate-800">{formData.name}</strong>. Wij nemen spoedig contact met u op via <strong>{formData.phone}</strong> om uw afspraak definitief te bevestigen.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Stuur ook door via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-colors"
                >
                  Sluiten
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Onderwerp / Dienst *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                >
                  <option value="ABR Werfverzekering">ABR Werfverzekering (Nieuwbouw of Renovatie)</option>
                  <option value="Verzekeren">Verzekeren (Woning, Auto, Gezin, Bedrijf)</option>
                  <option value="Sparen en Beleggen">Sparen en Beleggen (Vermogen & Pensioen)</option>
                  <option value="Lenen">Lenen (Woonkrediet, Lening op afbetaling)</option>
                  <option value="Lokaal Bankieren">Lokaal Bankieren (Fintro Rekeningen & Zaken)</option>
                  <option value="Schadeaangifte">Schadeaangifte of schadeopvolging</option>
                  <option value="Algemeen advies">Algemene vraag / Vrijblijvende check</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Uw Naam *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="bijv. Sophie Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="bijv. 056... of 047..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    placeholder="uw@email.be"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Voorkeur Tijdstip
                  </label>
                  <select
                    value={formData.preferredTiming}
                    onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                  >
                    <option value="Op kantoor (Voormiddag 8.30-12.00)">Op kantoor (8.30 - 12.00)</option>
                    <option value="Op kantoor (Namiddag 13.30-17.30)">Op kantoor (13.30 - 17.30)</option>
                    <option value="Buiten kantooruren op afspraak">Buiten kantooruren (op afspraak)</option>
                    <option value="Telefonisch overleg">Telefonisch overleg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Korte opmerking (optioneel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Eventuele toelichting bij uw dossier..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#0B2545] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white font-extrabold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Bezig met versturen...' : 'BEVESTIG AFSPRAAKVERZOEK'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Strikte privacy gegarandeerd
                </span>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="text-emerald-700 hover:underline font-bold"
                >
                  Of stuur via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
