import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { ABR_IPID_COMPARISON } from '../data/abrData';

import { ScrollReveal } from './ScrollReveal';

interface AbrComparisonSectionProps {
  onOpenDocumentsModal?: () => void;
}

export const AbrComparisonSection: React.FC<AbrComparisonSectionProps> = ({
  onOpenDocumentsModal,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = ABR_IPID_COMPARISON.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="ipid-overzicht" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 uppercase tracking-wider">
              <FileText className="w-4 h-4 text-blue-600" />
              Transparantie &amp; IPID Conformiteit
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Wat is wel en niet verzekerd in de ABR-verzekering?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Geen vage beloftes of verborgen clausules. Conform het officiële <strong className="text-slate-900">IPID-informatiedocument</strong> zetten we de belangrijkste dekkingen en uitsluitingen helder op een rij.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Alle Waarborgen' },
            { id: 'materiële_schade', label: 'Materiële Schade (Afd. 1)' },
            { id: 'burenhinder', label: 'Burenhinder & Derden (Afd. 2)' },
            { id: 'diefstal_werf', label: 'Diefstal & Vandalisme' },
            { id: 'algemeen', label: 'Belangrijke Uitsluitingen' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#0B2545] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                item.isCovered
                  ? 'bg-slate-50/70 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20'
                  : 'bg-rose-50/30 border-rose-200/80 hover:bg-rose-50/50'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-start gap-2.5">
                    {item.isCovered ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    )}
                    <h4
                      className={`text-sm sm:text-base font-bold ${
                        item.isCovered ? 'text-[#0B2545]' : 'text-rose-950'
                      }`}
                    >
                      {item.item}
                    </h4>
                  </div>
                  {item.detailBadge && (
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shrink-0 ${
                        item.isCovered
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.detailBadge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
