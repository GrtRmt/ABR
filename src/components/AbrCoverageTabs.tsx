import React, { useState } from 'react';
import {
  ShieldCheck,
  CloudLightning,
  Building2,
  Wrench,
  Lock,
  Flame,
  Layers,
  Activity,
  Droplets,
  AlertTriangle,
  HeartPulse,
  Sparkles,
  Scale,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import { ABR_SECTIONS, AbrCoveragePillar } from '../data/abrData';
import { ScrollReveal } from './ScrollReveal';

interface AbrCoverageTabsProps {
  onOpenQuoteModal: () => void;
}

export const AbrCoverageTabs: React.FC<AbrCoverageTabsProps> = ({ onOpenQuoteModal }) => {
  const [activeTabId, setActiveTabId] = useState<string>('afdeling-1');

  const currentSection = ABR_SECTIONS.find((s) => s.id === activeTabId) || ABR_SECTIONS[0];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudLightning':
        return <CloudLightning className="w-5 h-5 text-blue-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-blue-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-blue-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="waarborgen" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-[#0B2545] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              De Twee Waarborgpijlers van de ABR-verzekering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Wat dekt de Alle Bouwplaatsrisico’s (ABR) polis?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              De ABR-verzekering is gestructureerd in twee complementaire afdelingen. Samen vormen ze een ondoordringbaar schild rond uw bouwproject.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300 max-w-xl w-full">
            <button
              onClick={() => setActiveTabId('afdeling-1')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTabId === 'afdeling-1'
                  ? 'bg-[#0B2545] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0B2545]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Afdeling 1: Materiële Schade (All-Risk)</span>
            </button>
            <button
              onClick={() => setActiveTabId('afdeling-2')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTabId === 'afdeling-2'
                  ? 'bg-[#0B2545] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0B2545]'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Afdeling 2: Burenhinder &amp; Derden</span>
            </button>
          </div>
        </div>

        {/* Selected Pillar Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left summary col (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-2">
                  {currentSection.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] leading-tight mb-2">
                  {currentSection.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-3">
                  {currentSection.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentSection.description}
                </p>
              </div>

              {/* Key points checklist */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2.5">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">
                  Belangrijkste waarborgen:
                </span>
                {currentSection.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Practical Scenario Highlight Box */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <Info className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Praktijkvoorbeeld:</span>
                </div>
                <p className="leading-relaxed italic">
                  "{currentSection.practicalExample}"
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <span>Offerte berekenen voor {currentSection.title.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right grid of covered situations (Col 7) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentSection.coveredItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
                        {renderIcon(item.icon)}
                      </div>
                      <h4 className="text-base font-bold text-[#0B2545] mb-1.5 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Extension Notice */}
              {activeTabId === 'afdeling-1' ? (
                <div className="mt-4 p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs text-blue-950 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0B2545]">Extra opties:</span>
                    <span>Diefstal werfmateriaal • Bestaande constructies • 24m onderhoud</span>
                  </div>
                  <span className="text-blue-700 font-semibold cursor-pointer underline hover:text-blue-900" onClick={onOpenQuoteModal}>
                    Informeer bij Remaut &rarr;
                  </span>
                </div>
              ) : (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-900">Plaatsbeschrijving:</span>
                    <span>Wettelijke bescherming tegen ongegronde schadeclaims van buren</span>
                  </div>
                  <span className="text-emerald-800 font-semibold cursor-pointer underline hover:text-emerald-950" onClick={onOpenQuoteModal}>
                    Vraag advies &rarr;
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
