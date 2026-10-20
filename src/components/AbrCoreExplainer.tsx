import React from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Zap,
  Clock,
  Scale,
  Building,
  HelpCircle,
} from 'lucide-react';
import { ABR_HIGHLIGHTS } from '../data/abrData';
import { ScrollReveal } from './ScrollReveal';

interface AbrCoreExplainerProps {
  onOpenQuoteModal: () => void;
}

export const AbrCoreExplainer: React.FC<AbrCoreExplainerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="wat-is-abr" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0B2545] uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              Wat is een ABR-verzekering?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              De ultieme bescherming voor elk bouw- en verbouwproject
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Een bouw- of renovatiewerf is een dynamische omgeving met talloze risico's: weersomstandigheden, zware graafmachines, meerdere aannemers tegelijk en buren die bezorgd toekijken. Een <strong className="text-slate-900">ABR (Alle Bouwplaatsrisico's)</strong> vangt alle gaten op die traditionele polissen openlaten.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ABR_HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase block mb-1">
                  {h.subtitle}
                </span>
                <h3 className="text-lg font-bold text-[#0B2545] mb-2 group-hover:text-blue-700 transition-colors">
                  {h.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {h.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Giant Misunderstanding: Brand & BA vs ABR */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0B2545] to-[#0D315B] rounded-3xl p-7 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-xs font-bold uppercase tracking-wider inline-block">
                Het grote misverstand
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "Ik heb al een brandverzekering en mijn aannemer is toch verzekerd?"
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Dit is de meest gemaakte en gevaarlijke denkfout bij bouwers in Vlaanderen. Waarom de klassieke polissen u in de kou laten staan:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Box 1: Brandverzekering */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center text-red-300">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">De Brandverzekering</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dekt pas ná voorlopige oplevering wanneer de woning bewoond is. De brandpolis dekt <strong>géén instorting tijdens bouwwerken</strong>, géén diefstal van losse bouwmaterialen en géén scheuren bij de buren door grondbemaling.
                </p>
                <div className="text-[11px] font-semibold text-red-300 pt-1">
                  &times; Niet toereikend tijdens de bouwfase
                </div>
              </div>

              {/* Box 2: BA Aannemer */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">BA van de Aannemer</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Vereist een <strong>onomstotelijk bewijs van schuld</strong>. Als de aannemer betwist dat de scheur bij de buur zijn schuld is (of de schuld doorschuift naar de architect), keert zijn verzekeraar niets uit tot een rechter na jaren oordeelt.
                </p>
                <div className="text-[11px] font-semibold text-amber-300 pt-1">
                  &times; Risico op maandenlange werfblokkade
                </div>
              </div>

              {/* Box 3: ABR No-Fault */}
              <div className="bg-blue-600/30 backdrop-blur-md rounded-2xl p-5 border border-blue-400/40 space-y-3 relative">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">ABR-verzekering (No-Fault)</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  <strong>Onmiddellijke vergoeding</strong> van materiële schade en burenhinder, ongeacht wie de fout beging. De werf gaat door, en de verzekeraars lossen eventuele aansprakelijkheden achteraf onderling op.
                </p>
                <div className="text-[11px] font-bold text-emerald-300 pt-1 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Directe herstelling &amp; rust</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-4 text-center">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0B2545] font-extrabold text-sm hover:bg-slate-100 transition-colors shadow-lg"
              >
                <span>Vraag vrijblijvende offerte ABR aan</span>
                <Clock className="w-4 h-4 text-blue-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
