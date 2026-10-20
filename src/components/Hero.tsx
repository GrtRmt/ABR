import React from 'react';
import { Calendar, Phone, MessageSquare, MapPin, ShieldCheck, CheckCircle2, Building, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HeroProps {
  onOpenAppointment: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#0D2E55] to-[#071B33] text-white pt-12 pb-16 sm:pt-16 sm:pb-24">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E4E8C_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Content (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Local Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Onafhankelijk verzekeringsmakelaar &amp; Fintro bank • Ledegem</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm tracking-wider text-blue-200/90 font-bold">
                Remaut Verzekeringen &amp; Financieel advies
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.15]">
                {BUSINESS_INFO.tagline}
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
              Uw lokaal en onafhankelijk kantoor in <strong className="text-white font-semibold">Ledegem</strong> voor deskundig advies in verzekeren, sparen, beleggen, lenen en lokaal bankieren. Met een persoonlijke, oplossingsgerichte en fygitale aanpak die altijd úw belang voorop stelt.
            </p>

            {/* Quick trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Onafhankelijk advies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Oplossingsgericht bij schade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fygitaal</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenAppointment()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#0B2545] font-extrabold text-base shadow-xl hover:bg-slate-100 hover:shadow-2xl transition-all duration-200 active:scale-[0.98]"
                id="hero-primary-cta"
              >
                <Calendar className="w-5 h-5 text-[#0B2545]" />
                <span>Maak een afspraak</span>
                <ArrowRight className="w-4 h-4 text-[#0B2545] ml-0.5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 transition-all duration-200 backdrop-blur-sm"
                id="hero-call-cta"
              >
                <Phone className="w-5 h-5 text-blue-300" />
                <span>Bel: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-base border border-emerald-400/30 transition-all duration-200"
                title="Direct WhatsApp bericht sturen"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>

            {/* Local Address & Hours Signal */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-blue-200/80">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                <MapPin className="w-4 h-4 text-blue-300" />
                <span>Stationsstraat 111, 8880 Ledegem</span>
              </a>
              <span>•</span>
              <span>Open Ma-Vr: 8:30 - 12:00 | 13:30 - 17:30 (ook op afspraak)</span>
            </div>
          </div>

          {/* Hero Side Card: Quick Overview / Contact Summary (Col 5) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-2xl border border-slate-100 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-[#0B2545]">
                    Remaut Verzekeringen &amp; Financieel advies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500">
                    Onafhankelijk verzekeringsmakelaar &amp; Fintro bankier
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0B2545]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* 4 Core Focus Pillars */}
              <div className="py-4 space-y-3">
                <div className="text-xs font-bold tracking-wider text-slate-400">
                  Uw zekerheid onder één dak
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-left">
                    <span className="block text-xs font-bold text-[#0B2545]">VERZEKEREN</span>
                    <span className="text-[11px] text-slate-500">Privé & beroepsmatig</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-left">
                    <span className="block text-xs font-bold text-[#0B2545]">SPAREN & BELEGGEN</span>
                    <span className="text-[11px] text-slate-500">Vermogensopbouw</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-left">
                    <span className="block text-xs font-bold text-[#0B2545]">LENEN</span>
                    <span className="text-[11px] text-slate-500">Woon- & bedrijfskrediet</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-left">
                    <span className="block text-xs font-bold text-[#0B2545]">LOKAAL BANKIEREN</span>
                    <span className="text-[11px] text-slate-500">Fintro agentschap</span>
                  </div>
                </div>
              </div>

              {/* Practical Direct Actions in Hero Card */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors border border-slate-200/80 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0B2545] text-white flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] text-slate-500 font-medium">Rechtstreeks telefonisch</div>
                      <div className="text-sm font-bold text-[#0B2545]">{BUSINESS_INFO.phone}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                    Bellen &rarr;
                  </span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-950 transition-colors border border-emerald-200/80 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] text-emerald-700 font-medium">Snel bericht via WhatsApp</div>
                      <div className="text-sm font-bold text-emerald-900">{BUSINESS_INFO.whatsapp}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                    Chat &rarr;
                  </span>
                </a>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>Stationsstraat 111, Ledegem</span>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-semibold underline"
                >
                  Route
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
