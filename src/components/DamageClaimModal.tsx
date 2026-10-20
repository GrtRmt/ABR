import React, { useState } from 'react';
import {
  X,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Mail,
  Camera,
  MessageSquare,
  FileText,
  ShieldAlert,
  Send,
  Building,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { DamageClaimFormData } from '../types';

interface DamageClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DamageClaimModal: React.FC<DamageClaimModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<DamageClaimFormData>({
    policyNumberOrAddress: '',
    damageDate: new Date().toISOString().split('T')[0],
    damageType: 'Storm- of waterschade aan de werf',
    description: '',
    emergencyMeasuresTaken: true,
    policeInvolved: false,
    policePvNumber: '',
    thirdPartyOrNeighborInfo: '',
    claimantName: '',
    claimantPhone: '',
    claimantEmail: '',
    claimantRole: 'Bouwheer',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [claimReference, setClaimReference] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ref = `SCH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setClaimReference(ref);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppClaim = () => {
    const text = encodeURIComponent(
      `🚨 DRINGENDE SCHADEMELDING WERF (Ref: ${claimReference || 'Nieuw'})\n\n` +
      `- Werf / Polis: ${formData.policyNumberOrAddress}\n` +
      `- Type schade: ${formData.damageType}\n` +
      `- Datum voorval: ${formData.damageDate}\n` +
      `- Aangever: ${formData.claimantName} (${formData.claimantRole})\n` +
      `- Telefoon: ${formData.claimantPhone}\n` +
      `- Omschrijving: ${formData.description}\n` +
      `- Bewarende maatregelen genomen: ${formData.emergencyMeasuresTaken ? 'Ja' : 'Nee'}`
    );
    window.open(`https://wa.me/3256509603?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-red-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Modal Header in Alert Red & Marine */}
        <div className="bg-gradient-to-r from-rose-900 via-red-800 to-[#0B2545] text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-red-500/30 text-red-100 text-xs font-bold border border-red-400/40 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-red-300" />
              Schadeaangifte ABR
            </span>
            <span className="text-xs text-red-200 font-semibold">• Remaut Verzekeringen</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Online Schademelding &amp; Bijstand
          </h2>
          <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-lg leading-relaxed">
            Meld uw werfschade direct bij onze schadedienst via <strong>schade@remaut.eu</strong>. Wij openen onmiddellijk uw dossier en begeleiden de schade-expert.
          </p>
        </div>

        {/* Urgent Emergency Warning Banner */}
        <div className="bg-amber-50 border-b border-amber-200 p-3.5 px-6 flex items-center justify-between gap-3 text-xs text-amber-900 shrink-0">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Dringende noodsituatie op de werf?</strong> Bel direct <strong className="text-amber-950 font-bold">056/50.96.03</strong> (24/7 bereikbaar).
            </span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px]"
          >
            <Phone className="w-3 h-3" />
            <span>Bel nu</span>
          </a>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Dossiernummer: {claimReference}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0B2545] pt-2">
                  Uw schademelding is geregistreerd
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We hebben uw schadeaangifte goed ontvangen op <strong>schade@remaut.eu</strong>. Een van onze schadebeheerders neemt binnen enkele uren contact met u op via <strong>{formData.claimantPhone}</strong> om de volgende stappen en eventuele expertise af te stemmen.
                </p>
              </div>

              {/* Practical tips */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-700 space-y-2">
                <div className="font-bold text-[#0B2545] flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-blue-600" />
                  <span>Belangrijke richtlijnen in afwachting van de expert:</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                  <li>Maak direct veel en duidelijke foto’s van alle schadehoeken.</li>
                  <li>Neem bewarende maatregelen (bv. afdekken tegen regen, afsluiten van kranen).</li>
                  <li>Gooi beschadigde materialen nog niet weg tot na inspectie.</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleWhatsAppClaim}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Stuur foto's door via WhatsApp</span>
                </button>
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
              {/* Step 1: Claim & Werf Details */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">
                  1. Werf &amp; Schadegeval
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Adres van de werf of Polisnummer *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.policyNumberOrAddress}
                      onChange={(e) => setFormData({ ...formData, policyNumberOrAddress: e.target.value })}
                      placeholder="bv. Stationsstraat 111, Ledegem of ABR-12345"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Datum van het voorval *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.damageDate}
                      onChange={(e) => setFormData({ ...formData, damageDate: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Aard van de schade *
                  </label>
                  <select
                    value={formData.damageType}
                    onChange={(e) => setFormData({ ...formData, damageType: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none bg-white"
                    required
                  >
                    <option value="Storm- of waterschade aan de werf">Storm- of waterschade (regen, wind, overstroming)</option>
                    <option value="Schade aan de buren (burenhinder art. 3.101 BW)">Schade aan de buren (scheuren, trillingen, bemaling)</option>
                    <option value="Diefstal van ingebouwd of opgeslagen materiaal">Diefstal van bouwmaterialen of uitrusting op de werf</option>
                    <option value="Vandalisme of opzettelijke beschadiging">Vandalisme of kwaadwillige vernieling</option>
                    <option value="Instorting of stabiliteitsbreuk">Instorting van bekisting, muur of gebinte</option>
                    <option value="Uitvoeringsfout van aannemer">Uitvoeringsfout of schade door onderaannemer</option>
                    <option value="Andere werfschade">Andere werfschade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Omschrijving van de schade en omstandigheden *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Beschrijf wat er gebeurd is, welke onderdelen beschadigd zijn en de geschatte omvang..."
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
                  />
                </div>

                {/* Checkboxes: precautions & police */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <label className="flex items-start gap-2 cursor-pointer p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={formData.emergencyMeasuresTaken}
                      onChange={(e) => setFormData({ ...formData, emergencyMeasuresTaken: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded text-red-600 accent-red-600 shrink-0"
                    />
                    <span>Er zijn bewarende maatregelen genomen om verdere schade te voorkomen.</span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={formData.policeInvolved}
                      onChange={(e) => setFormData({ ...formData, policeInvolved: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded text-red-600 accent-red-600 shrink-0"
                    />
                    <span>Politie is ter plaatse geweest (bij inbraak/diefstal of ongeval).</span>
                  </label>
                </div>

                {formData.policeInvolved && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      PV-nummer van de politie
                    </label>
                    <input
                      type="text"
                      value={formData.policePvNumber || ''}
                      onChange={(e) => setFormData({ ...formData, policePvNumber: e.target.value })}
                      placeholder="bv. PV/2026/..."
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Step 2: Claimant Details */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">
                  2. Gegevens van de Aangever
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Uw Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.claimantName}
                      onChange={(e) => setFormData({ ...formData, claimantName: e.target.value })}
                      placeholder="Voornaam + Naam"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.claimantPhone}
                      onChange={(e) => setFormData({ ...formData, claimantPhone: e.target.value })}
                      placeholder="0470 / 12 34 56 of 056..."
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.claimantEmail}
                      onChange={(e) => setFormData({ ...formData, claimantEmail: e.target.value })}
                      placeholder="uw.email@domein.be"
                      className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Uw rol op de werf *
                  </label>
                  <select
                    value={formData.claimantRole}
                    onChange={(e) => setFormData({ ...formData, claimantRole: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-red-600 focus:outline-none bg-white"
                  >
                    <option value="Bouwheer">Bouwheer (Eigenaar)</option>
                    <option value="Aannemer">Hoofd- of onderaannemer</option>
                    <option value="Architect">Architect / Ingenieur</option>
                    <option value="Buur">Aanpalende buur / Derde</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm shadow-xl transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Aangifte verwerken en dossier openen...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Verstuur Schadeaangifte naar schade@remaut.eu</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  Dossieropvolging door Remaut Verzekeringen • Stationsstraat 111 Ledegem
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
