import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  MessageSquare,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export interface AbrQuoteInitialParams {
  projectType?: string;
  budget?: number;
  existingValue?: number;
  hasNeighbors?: boolean;
  hasDrainage?: boolean;
  durationMonths?: number;
  includeTheft?: boolean;
  maintenanceMonths?: number;
  indicativePremium?: number;
}

interface AbrQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialParams?: AbrQuoteInitialParams | null;
}

export const AbrQuoteModal: React.FC<AbrQuoteModalProps> = ({
  isOpen,
  onClose,
  initialParams,
}) => {
  const [projectType, setProjectType] = useState<string>('nieuwbouw');
  const [budget, setBudget] = useState<string>('350000');
  const [werfAdres, setWerfAdres] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [hasNeighbors, setHasNeighbors] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialParams) {
      if (initialParams.projectType) setProjectType(initialParams.projectType);
      if (initialParams.budget) setBudget(initialParams.budget.toString());
      if (initialParams.hasNeighbors !== undefined) setHasNeighbors(initialParams.hasNeighbors);
    }
  }, [initialParams, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const formatEuro = (val: string) => {
    const num = Number(val);
    if (isNaN(num) || num === 0) return '€ 0';
    return new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#071B33] via-[#0B2545] to-[#133D72] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold border border-blue-400/30">
              ABR-verzekering
            </span>
            <span className="text-xs text-slate-300">• Remaut Verzekeringen</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Vrijblijvende Offerte ABR-Verzekering
          </h2>
          <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-lg">
            Bezorg ons uw werfgegevens. Remaut Verzekeringen vergelijkt de markt en bezorgt u binnen 24 uur een helder en scherp voorstel.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#0B2545]">
                  Bedankt voor uw offerte-aanvraag!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We hebben uw aanvraag goed ontvangen. Remaut Verzekeringen berekent uw ABR-offerte op maat van uw project en contacteert u spoedig via <strong>{email || phone}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs text-slate-700 text-left space-y-1">
                <div className="font-bold text-[#0B2545]">Dringende vraag over uw startdatum?</div>
                <div>Bel ons kantoor direct op <strong className="text-[#0B2545]">056/50.96.03</strong> of stuur een bericht via WhatsApp.</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Stuur WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0B2545] text-white font-bold text-xs"
                >
                  Sluiten
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Preselected indicator if from calculator */}
              {initialParams?.indicativePremium && (
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#0B2545]">
                    <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Vooraf berekende indicatie: <strong>{formatEuro(initialParams.indicativePremium.toString())}</strong></span>
                  </div>
                  <span className="text-slate-500 text-[11px]">éénmalige premie</span>
                </div>
              )}

              {/* Step 1: Project Details */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">
                  1. Gegevens van de werf
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Type Project *
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none bg-white"
                      required
                    >
                      <option value="nieuwbouw">Nieuwbouw eengezinswoning</option>
                      <option value="renovatie">Grondige renovatie / Verbouwing</option>
                      <option value="uitbreiding">Aanbouw / Veranda / Dakopbouw</option>
                      <option value="appartement">Appartementsgebouw / Residentie</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Geraamde Bouwwaarde (€ excl. btw) *
                    </label>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="bv. 350000"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Adres van de werf (Gemeente / Straat)
                    </label>
                    <input
                      type="text"
                      value={werfAdres}
                      onChange={(e) => setWerfAdres(e.target.value)}
                      placeholder="bv. Stationsstraat, 8880 Ledegem"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Geplande Startdatum der Werken
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={hasNeighbors}
                      onChange={(e) => setHasNeighbors(e.target.checked)}
                      className="h-4 w-4 rounded text-blue-600 accent-[#0B2545]"
                    />
                    <span>Er zijn direct aanpalende buurwoningen (Afdeling 2 Burenhinder gewenst)</span>
                  </label>
                </div>
              </div>

              {/* Step 2: Contact Details */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">
                  2. Uw Contactgegevens
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Uw Naam *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Voornaam + Naam"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0470 / 12 34 56"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="uw.email@domein.be"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Eventuele toelichting of vragen over plannen / aannemer
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Bv. nieuwbouw met kelderbemaling, aannemer start volgende maand..."
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-[#0B2545] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white font-extrabold text-sm shadow-xl transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Aanvraag verwerken...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Verstuur Vrijblijvende Offerte-aanvraag</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
                <div className="text-center mt-2.5 text-[11px] text-slate-400">
                  100% gratis en vrijblijvend • Behandeld door Remaut Verzekeringen (Erkend Makelaar Ledegem)
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
