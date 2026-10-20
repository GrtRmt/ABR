import React from 'react';
import {
  ShieldCheck,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
  Calculator,
  CheckCircle2,
  HardHat,
  Home,
  Building2,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface AbrHeroProps {
  onOpenQuoteModal: () => void;
  onOpenAppointment: (service?: string) => void;
  onScrollToCalculator: () => void;
}

export const AbrHero: React.FC<AbrHeroProps> = ({
  onOpenQuoteModal,
  onOpenAppointment,
  onScrollToCalculator,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#071E3D] text-white pt-10 pb-16 sm:pt-14 sm:pb-20">
      {/* Background Hero Construction Image with Brand Color Preservation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/abr-hero.jpg"
          alt="Bouwwerken appartementsgebouw en werfopzichters ABR verzekering"
          className="w-full h-full object-cover object-[70%_center] lg:object-center brightness-[0.98] contrast-[1.03]"
        />
        {/* Subtle, refined gradient: ensures high-contrast readability on text column (left) while keeping the construction site, workers and crane brightly visible (right/center) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071E3D]/95 via-[#071E3D]/75 sm:via-[#071E3D]/60 to-[#071E3D]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-[#071E3D]/30" />
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Copy (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge: Local Broker + BouwCheck shortcut */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-blue-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="tracking-wide">ABR Verzekering • Remaut Verzekeringen Ledegem</span>
              </div>
              <a
                href="#bouwcheck"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black shadow-sm transition-all active:scale-95"
              >
                <span>Nieuw: Doe de BouwCheck™</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.12]">
                Alle Bouwplaatsrisico’s <span className="text-blue-300">(ABR)</span>: Zorgeloos Bouwen &amp; Verbouwen
              </h1>
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
                De complete <strong className="text-white font-semibold">omnium- en aansprakelijkheidsverzekering</strong> voor uw nieuwbouw of renovatie. Bescherm uw bouwwerk, materialen én de buren tegen storm, instorting, diefstal en zettingsschade. Met het unieke <strong className="text-white font-semibold">No-Fault principe</strong> voor directe uitbetaling zonder werfstilstand.
              </p>
            </div>

            {/* Core Trust Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Afdeling 1:</strong> All-risk schade aan het bouwwerk</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Afdeling 2:</strong> Foutloze burenhinder (Art. 3.101 BW)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>No-Fault:</strong> Direct herstel zonder aansprakelijkheidsstrijd</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>1 Centrale Polis:</strong> Bouwheer, aannemers &amp; architect</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-4 rounded-xl bg-white hover:bg-blue-50/90 text-[#0B2545] font-extrabold text-xs sm:text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-[0.98] border border-white/20 text-center"
                id="hero-primary-quote-cta"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                <span className="tracking-tight text-center">Vraag je ABR-offerte aan</span>
                <ArrowRight className="w-4 h-4 text-[#0B2545] shrink-0" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-4 rounded-xl bg-blue-600/30 hover:bg-blue-600/40 text-blue-100 font-bold text-xs sm:text-sm md:text-base border border-blue-400/30 transition-all duration-200 backdrop-blur-sm active:scale-[0.98] text-center"
              >
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 shrink-0" />
                <span className="tracking-tight text-center">Bereken hier je indicatieve premie</span>
              </button>
            </div>

            {/* Local Guidance Guarantee */}
            <div className="pt-1 flex items-center gap-2 text-xs sm:text-sm text-blue-200/90 font-medium">
              <span className="tracking-wide">Onafhankelijk advies en bijstand bij schade</span>
            </div>
          </div>

          {/* Hero Side Card: Interactive Overview & Why ABR (Col 5) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-2xl border border-slate-100 relative">
              {/* Card Header with ABR Logo pill */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs">
                    <HardHat className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-[#0B2545] tracking-tight">
                      ABR Werfverzekering
                    </h2>
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Erkend onafhankelijk verzekeringsmakelaar.
                </span>
              </div>

              {/* Quick Summary Matrix */}
              <div className="py-4 space-y-3">
                <div className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Voor wie is deze verzekering?
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Home className="w-4 h-4 text-[#0B2545]" />
                      <span className="text-xs font-bold text-[#0B2545]">Nieuwbouw</span>
                    </div>
                    <span className="text-[11px] text-slate-500 leading-snug block">
                      Volledige all-risk van ruwbouw tot oplevering
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-[#0B2545]" />
                      <span className="text-xs font-bold text-[#0B2545]">Renovatie</span>
                    </div>
                    <span className="text-[11px] text-slate-500 leading-snug block">
                      Inclusief bestaand gebouw van bouwheer
                    </span>
                  </div>
                </div>

                {/* Key Insight Box */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                  <p className="font-semibold mb-1 flex items-center gap-1.5 text-[#0B2545]">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    Wist u dat?
                  </p>
                  Een standaard brandverzekering of familiale polis dekt <strong className="font-bold">geen werfschade of burenhinder</strong> tijdens verbouwingen. Met een ABR vermijdt u dat u als bouwheer persoonlijk aansprakelijk gesteld wordt.
                </div>
              </div>

              {/* Direct Actions in Card */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onOpenAppointment('ABR Bouwverzekering advies')}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white transition-all duration-200 group shadow-md hover:shadow-lg active:scale-[0.99] border border-blue-900/30"
                  id="hero-plan-adviesgesprek-btn"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-300 group-hover:bg-white/20 transition-colors shrink-0">
                      <Calendar className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-white tracking-tight block">
                        Plan een adviesgesprek
                      </span>
                      <span className="text-[11px] sm:text-xs text-blue-200/90 font-medium block leading-snug tracking-tight mt-0.5">
                        Digitaal, op kantoor of bij je thuis
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-200 group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-1 shrink-0 ml-2">
                    <span>Direct</span>
                    <span>&rarr;</span>
                  </span>
                </button>

                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 text-emerald-950 transition-all duration-200 border border-emerald-200/80 hover:border-emerald-300 group shadow-sm active:scale-[0.99]"
                  id="hero-whatsapp-direct-btn"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600/20 transition-colors shrink-0">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-extrabold text-emerald-950 tracking-tight block">
                        Stel je vraag via WhatsApp
                      </span>
                      <span className="text-[11px] text-emerald-700/90 font-medium block leading-tight tracking-tight">
                        056/50.96.03 • Snel en rechtstreeks antwoord
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all flex items-center gap-1 shrink-0 ml-2">
                    <span>Chat</span>
                    <span>&rarr;</span>
                  </span>
                </a>
              </div>

              {/* Card Footer: Regulatory info */}
              <div className="mt-3 pt-3 border-t border-slate-100 text-center text-[11px] text-slate-400">
                <span>FSMA Erkend Verzekeringsmakelaar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
