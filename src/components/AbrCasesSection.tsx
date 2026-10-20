import React from 'react';
import {
  FileCheck,
  MapPin,
  Euro,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { ABR_REAL_CASES } from '../data/abrData';
import { ScrollReveal } from './ScrollReveal';

interface AbrCasesSectionProps {
  onOpenQuoteModal: () => void;
}

export const AbrCasesSection: React.FC<AbrCasesSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="praktijkcases" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Uit de Praktijk in West-Vlaanderen
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Zo beschermt de ABR-verzekering écht
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Op een bouwwerf telt een ongeluk in seconden, maar de financiële nasleep kan jaren duren. Bekijk hoe de ABR-polis het verschil maakte in deze reële situaties:
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ABR_REAL_CASES.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                    {item.tag}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200">
                    {item.claimAmount}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B2545] leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-slate-500 pb-2 border-b border-slate-200/80">
                  <span className="font-semibold text-slate-700">{item.projectType}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>

                {/* Scenario */}
                <div className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                  <span className="font-bold text-slate-800 block">Wat gebeurde er?</span>
                  <p className="leading-relaxed">
                    {item.scenario}
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-950 space-y-1">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Tussenkomst via Remaut Verzekeringen:
                  </span>
                  <p className="leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
              </div>

              {/* Footer info */}
              <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] text-slate-500 font-medium">
                Gedekt onder: <strong className="text-slate-700">{item.applicableSection}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 text-center space-y-3">
          <h4 className="text-base sm:text-lg font-bold text-[#0B2545]">
            Heeft u specifieke risico's op uw werf zoals bemaling of gedeelde scheidingsmuren?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Remaut Verzekeringen analyseert vooraf uw situatie en zorgt dat alle noodzakelijke clausules en plaatsbeschrijvingen waterdicht geregeld zijn.
          </p>
          <div className="pt-1">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white font-bold text-xs shadow-md"
            >
              <span>Vraag een risico-analyse voor uw werf aan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
