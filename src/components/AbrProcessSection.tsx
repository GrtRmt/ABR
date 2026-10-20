import React from 'react';
import {
  ListOrdered,
  Camera,
  FileCheck2,
  HardHat,
  PhoneCall,
  KeyRound,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { ABR_PROCESS_STEPS } from '../data/abrData';
import { ScrollReveal } from './ScrollReveal';

interface AbrProcessSectionProps {
  onOpenQuoteModal: () => void;
}

export const AbrProcessSection: React.FC<AbrProcessSectionProps> = ({ onOpenQuoteModal }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Camera className="w-5 h-5 text-blue-600" />;
      case 1:
        return <FileCheck2 className="w-5 h-5 text-blue-600" />;
      case 2:
        return <HardHat className="w-5 h-5 text-amber-500" />;
      case 3:
        return <PhoneCall className="w-5 h-5 text-emerald-600" />;
      case 4:
        return <KeyRound className="w-5 h-5 text-purple-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="stappenplan" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-[#0B2545] uppercase tracking-wider">
              <ListOrdered className="w-4 h-4 text-blue-700" />
              Praktisch Stappenplan
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Hoe verloopt een ABR-verzekering in de praktijk?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Van de allereerste voorbereidingen met de buren tot de overdracht van de sleutels: Remaut Verzekeringen gidst u stap voor stap.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {ABR_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Step badge & icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1">
                  {step.subtitle}
                </div>
                <h3 className="text-base font-bold text-[#0B2545] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Expert tip */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-start gap-1.5 text-[11px] text-amber-900 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/70 leading-snug">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Tip:</strong> {step.tips}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Expert Callout */}
        <div className="text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all"
          >
            <span>Start uw bouwproject met een vrijblijvende ABR-analyse</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
