import React from 'react';
import {
  Users,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { ABR_WHY_BOUWHEER } from '../data/abrData';
import { ScrollReveal } from './ScrollReveal';

interface AbrWhyClientSectionProps {
  onOpenQuoteModal: () => void;
}

export const AbrWhyClientSection: React.FC<AbrWhyClientSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="waarom-bouwheer" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-[#0B2545] uppercase tracking-wider">
              <Users className="w-4 h-4 text-blue-700" />
              Strategisch Makelaarsadvies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Waarom u als bouwheer zélf de ABR-polis moet afsluiten
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Vaak zegt een hoofdaannemer: <em>"Geen zorgen, wij zijn verzekerd."</em> Toch is het in <strong className="text-slate-900">95% van de gevallen verstandiger</strong> dat u als bouwheer zelf de verzekeringnemer bent. Ontdek het cruciale verschil:
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Grid */}
        <div className="space-y-4 mb-12">
          {ABR_WHY_BOUWHEER.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 sm:p-6 transition-all border ${
                item.highlight
                  ? 'bg-white border-blue-300 shadow-md ring-1 ring-blue-100'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                {/* Metric & Title (Col 4) */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 block">
                    {item.metric}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    {item.title}
                  </h3>
                </div>

                {/* Bouwheer Self (Col 4 - Positive) */}
                <div className="lg:col-span-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>U sluit zélf de ABR-verzekering af:</span>
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                    {item.bouwheer}
                  </p>
                </div>

                {/* Contractor Alone (Col 4 - Negative/Risky) */}
                <div className="lg:col-span-4 p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                  <div className="flex items-center gap-2 mb-1.5 font-bold text-xs text-rose-900">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>U vertrouwt op de polis van de aannemer:</span>
                  </div>
                  <p className="text-xs text-rose-950 leading-relaxed">
                    {item.contractor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* In-depth Advisory Note */}
        <div className="bg-[#0B2545] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">
                Wat als de aannemer een korting belooft als hij de polis regelt?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Vraag altijd een kopie van de polisvoorwaarden en het betalingsbewijs. Als onafhankelijk makelaar kijkt Remaut Verzekeringen gratis uw aannemersovereenkomst en verzekeringsclausules na om dubbele dekking of gevaarlijke hiaten te vermijden.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-[#0B2545] font-extrabold text-sm hover:bg-slate-100 transition-colors shadow-md flex items-center gap-2"
          >
            <span>Vraag vrijblijvend advies aan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
