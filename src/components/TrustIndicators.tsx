import React from 'react';
import { Award, Clock, MapPin } from 'lucide-react';

interface TrustIndicatorsProps {
  className?: string;
}

export const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ className = '' }) => {
  const indicators = [
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      badge: 'Gecertificeerd',
      title: 'Erkend Adviseur',
      subtitle: 'Certified Advisor',
      description:
        'Erkend onafhankelijk verzekeringsmakelaar (FSMA) & specialist in ABR-bouwwaarborgen en no-fault polissen.',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      badge: 'Permanent',
      title: '24/7 Bereikbaarheid',
      subtitle: '24/7 Availability',
      description:
        'Direct aanspreekpunt bij acute werfschade, calamiteiten of dringende expertises. Geen anonieme callcenters.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-emerald-600" />,
      badge: 'Regionaal',
      title: 'Lokale Expertise',
      subtitle: 'Expert Local Service',
      description:
        'Gevestigd in Ledegem. Persoonlijk werfbezoek, lokale dossierkennis en tegensprekelijke expertise in West-Vlaanderen.',
    },
  ];

  return (
    <section className={`bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 py-8 sm:py-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {indicators.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-4.5"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-50/50 transition-all">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {item.subtitle}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#0B2545] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
