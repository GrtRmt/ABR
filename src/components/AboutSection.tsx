import React from 'react';
import { MapPin, Phone, MessageSquare, CheckCircle, Award, Users2, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface AboutSectionProps {
  onOpenAppointment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="over-ons" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual / Information Highlight (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B2545] text-white rounded-2xl p-7 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200">
                  <MapPin className="w-3.5 h-3.5 text-blue-300" />
                  <span>Ledegem • Stationsstraat 111</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                  Uw partner voor verzekeringen en bankzaken
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed">
                  Remaut Verzekeringen verenigt de kracht van een onafhankelijk makelaar met de vertrouwde bankdiensten van Fintro. Eén lokaal kantoor voor al uw financiële beslissingen.
                </p>

                <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-xs text-blue-200 uppercase font-semibold">Statutair</div>
                    <div className="text-sm font-bold text-white mt-0.5">Onafhankelijk Makelaar</div>
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 uppercase font-semibold">Bankagentschap</div>
                    <div className="text-sm font-bold text-white mt-0.5">Fintro Bankier</div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#0B2545] font-extrabold text-sm hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0B2545]" />
                    <span>Direct bellen: {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick reassurance strip */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-600">
                <strong className="block text-slate-900 font-bold text-sm">Vlotte communicatie via WhatsApp</strong>
                Stel uw vraag of stuur uw documenten rechtstreeks via 056/50.96.03.
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-[#0B2545] text-xs font-bold uppercase tracking-wider">
              Over Remaut Verzekeringen
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Persoonlijk advies dat vertrekt vanuit úw realiteit
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Wanneer u belangrijke keuzes maakt over uw woning, gezin, onderneming of pensioen, hebt u nood aan een raadgever die de tijd neemt om te luisteren. Bij <strong>Remaut Verzekeringen</strong> in <strong>Ledegem</strong> bent u geen dossiernummer, maar een buur en gewaardeerde klant.
              </p>
              <p>
                Omdat wij werken als <strong>onafhankelijk verzekeringsmakelaar</strong>, zijn we niet verplicht om de producten van één bepaalde maatschappij naar voren te schuiven. Wij verdedigen te allen tijde úw belang en zoeken in alle objectiviteit naar de beste dekking en voorwaarden in de markt.
              </p>
              <p>
                Tegelijkertijd kunt u bij ons als <strong>Fintro bankier</strong> rekenen op een volwaardig bancair aanbod: van dagelijks betalingsverkeer tot doordachte kredieten en vermogensoplossingen.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Shield className="w-4 h-4 text-[#0B2545]" />
                  <h4 className="font-bold text-sm text-[#0B2545]">Geen belangenconflicten</h4>
                </div>
                <p className="text-xs text-slate-600">
                  Volledige vrijheid in maatschappijkeuze garandeert een eerlijke vergelijking op maat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Users2 className="w-4 h-4 text-[#0B2545]" />
                  <h4 className="font-bold text-sm text-[#0B2545]">Vaste contactpersonen</h4>
                </div>
                <p className="text-xs text-slate-600">
                  Steeds dezelfde vertrouwde gezichten die uw historiek en situatie werkelijk kennen.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B2545] hover:bg-[#133D72] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
              >
                <span>Kom kennismaken op kantoor</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
