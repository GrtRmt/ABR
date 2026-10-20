import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Calendar, CheckCircle2, Send, ShieldCheck, ArrowRight, AlertTriangle, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { AppointmentFormData } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  initialService?: string;
  onOpenDamageClaim?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Verzekeren',
  onOpenDamageClaim,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    preferredTiming: 'Op kantoor in Ledegem (tijdens openingsuren)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean, robust submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hallo Remaut Verzekeringen,\n\nIk wil graag een afspraak maken:\n- Naam: ${formData.name || 'Niet ingevuld'}\n- Telefoon: ${formData.phone || 'Niet ingevuld'}\n- Onderwerp: ${formData.service}\n- Voorkeur: ${formData.preferredTiming}\n- Bericht: ${formData.notes || 'Geen toelichting'}`
    );
    window.open(`https://wa.me/3256509603?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0B2545] text-xs font-bold uppercase tracking-wider">
              Contact & Afspraak
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Maak direct een afspraak of neem contact op
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Heeft u een vraag over een verzekering, krediet of belegging? Of wenst u een rustig gesprek op kantoor in Ledegem? Wij helpen u graag met plezier verder.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Immediate Channels (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B2545] text-white rounded-2xl p-7 sm:p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Directe Lijnen
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  Remaut Verzekeringen
                </h3>
                <p className="text-xs text-blue-200 mt-1">
                  Onafhankelijk Verzekeringsmakelaar & Fintro Bankier
                </p>
              </div>

              {/* Action Cards inside Dark Marine Block */}
              <div className="space-y-3">
                {/* Phone */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#0B2545] flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-blue-200">Bellen naar kantoor</div>
                    <div className="text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                      {BUSINESS_INFO.phone}
                    </div>
                  </div>
                  <span className="text-xs text-blue-300 font-semibold pr-1">Direct &rarr;</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/25 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-emerald-200">WhatsApp bericht</div>
                    <div className="text-base font-bold text-white group-hover:text-emerald-200 transition-colors">
                      {BUSINESS_INFO.whatsapp}
                    </div>
                  </div>
                  <span className="text-xs text-emerald-300 font-semibold pr-1">Chat &rarr;</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#0B2545] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-blue-200">E-mailadres</div>
                    <div className="text-sm font-bold text-white truncate group-hover:text-blue-200 transition-colors">
                      {BUSINESS_INFO.email}
                    </div>
                  </div>
                  <span className="text-xs text-blue-300 font-semibold pr-1">Mail &rarr;</span>
                </a>

                {/* Schade Contact with Red Text & Online Aangifte Popup */}
                <div className="p-4 rounded-xl bg-red-950/40 border-2 border-red-500/50 space-y-2.5 text-left shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-black uppercase tracking-wider text-red-400">
                        Schade Contact &amp; Werfbijstand
                      </div>
                      <a
                        href="mailto:schade@remaut.eu"
                        className="text-sm sm:text-base font-extrabold text-red-300 hover:text-white transition-colors block truncate"
                      >
                        schade@remaut.eu
                      </a>
                    </div>
                  </div>

                  <p className="text-[11px] text-red-200/90 leading-snug">
                    Dringend schadegeval op de werf of burenclaim? Meld het direct online voor snelle No-Fault expertise.
                  </p>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={onOpenDamageClaim}
                      className="w-full flex items-center justify-between py-2.5 px-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-white" />
                        <span>Aangifte online van de schade</span>
                      </span>
                      <span className="text-white font-bold">&rarr;</span>
                    </button>
                  </div>
                </div>

                {/* Address */}
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-left group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white text-[#0B2545] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-blue-200">Kantooradres</div>
                    <div className="text-sm font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                      {BUSINESS_INFO.address}
                    </div>
                  </div>
                  <span className="text-xs text-blue-300 font-semibold pr-1">Kaart &rarr;</span>
                </a>
              </div>

              {/* Hours reminder */}
              <div className="pt-4 border-t border-white/15 space-y-1 text-xs text-blue-200/90">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span>Kantooruren:</span>
                </div>
                <p>Maandag t/m vrijdag: 08:30 - 12:00 en 13:30 - 17:30</p>
                <p className="text-blue-300 italic">Buiten de kantooruren op afspraak mogelijk.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Request Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm relative">
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4 text-[#0B2545]" />
                  <span>Afspraakformulier</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B2545]">
                  Plan uw afspraak in
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Vul onderstaand formulier in. We bevestigen uw afspraak zo spoedig mogelijk per telefoon of mail.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-5 bg-white rounded-xl border border-emerald-200 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="text-2xl font-extrabold text-slate-900">
                      Hartelijk dank voor uw aanvraag!
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We hebben uw afspraakverzoek voor <strong className="text-slate-900">{formData.service}</strong> goed ontvangen. Een adviseur van Remaut Verzekeringen neemt snel contact met u op ter bevestiging.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Verstuur ook via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: 'Verzekeren',
                          preferredTiming: 'Op kantoor in Ledegem (tijdens openingsuren)',
                          notes: '',
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors"
                    >
                      Nieuwe aanvraag
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select Service */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Waarover wenst u advies? *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm font-medium text-slate-800 focus:ring-2 focus:ring-[#0B2545] focus:border-[#0B2545] transition-all"
                    >
                      <option value="ABR Bouwverzekering">ABR Bouwverzekering (Nieuwbouw of Renovatie)</option>
                      <option value="Verzekeren">Verzekeren (Woning, Auto, Gezin)</option>
                      <option value="Sparen en Beleggen">Sparen en Beleggen (Vermogen & Pensioen)</option>
                      <option value="Lenen">Lenen (Woonkrediet, Renovatielening)</option>
                      <option value="Lokaal Bankieren">Lokaal Bankieren (Fintro Diensten & Rekeningen)</option>
                      <option value="Schadeaangifte">Schadeaangifte of opvolging werfdossier</option>
                      <option value="Algemeen advies">Algemene vraag / Vrijblijvende check</option>
                    </select>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Uw Naam *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="bijv. Jan De Smet"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#0B2545] focus:border-[#0B2545] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="bijv. 0470 12 34 56 of 056..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#0B2545] focus:border-[#0B2545] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Preferred Channel/Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        E-mailadres
                      </label>
                      <input
                        type="email"
                        placeholder="uw.naam@voorbeeld.be"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#0B2545] focus:border-[#0B2545] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Voorkeur moment / wijze
                      </label>
                      <select
                        value={formData.preferredTiming}
                        onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#0B2545] focus:border-[#0B2545] transition-all"
                      >
                        <option value="Op kantoor in Ledegem (Voormiddag 8.30-12.00)">Op kantoor (Voormiddag 8.30 - 12.00)</option>
                        <option value="Op kantoor in Ledegem (Namiddag 13.30-17.30)">Op kantoor (Namiddag 13.30 - 17.30)</option>
                        <option value="Buiten kantooruren op afspraak">Buiten kantooruren (op afspraak)</option>
                        <option value="Telefonisch overleg">Telefonisch overleg</option>
                        <option value="Via WhatsApp">Contact via WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Korte toelichting (optioneel)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Waar kunnen we u concreet mee van dienst zijn?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-[#0B2545] focus:border-[#0B2545] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white font-extrabold text-base shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                      id="submit-appointment-btn"
                    >
                      {isSubmitting ? (
                        <span>Even geduld...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>VERSTUUR AFSPRAAKVERZOEK</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0B2545]" />
                      <span>Uw gegevens worden vertrouwelijk en strikt discreet behandeld.</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Of stuur meteen via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
