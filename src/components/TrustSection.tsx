import React from 'react';
import { Scale, Compass, Smartphone, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface TrustSectionProps {
  onOpenAppointment: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenAppointment }) => {
  const uspsWithDetails = [
    {
      title: 'ONAFHANKELIJK',
      subtitle: 'Uw belang staat altijd centraal',
      icon: <Scale className="w-8 h-8 text-[#0B2545]" />,
      description: 'Als onafhankelijk verzekeringsmakelaar zijn wij gebonden aan u, niet aan een verzekeringsmaatschappij. We vergelijken polissen, voorwaarden en tarieven van verschillende spelers in de markt om de oplossing te selecteren die exact beantwoordt aan uw situatie.',
      points: [
        'Vrije keuze uit het brede marktaanbod',
        'Objectieve prijs-kwaliteitvergelijking',
        'Eerlijk advies zonder strakke verkoopquota',
      ],
    },
    {
      title: 'OPLOSSINGSGERICHT',
      subtitle: 'Doortastend bij advies én bij schade',
      icon: <Compass className="w-8 h-8 text-[#0B2545]" />,
      description: 'Verzekeringen en financiën bewijzen hun waarde op cruciale momenten. Of het nu gaat om het scherp stellen van een complex kredietdossier of actieve ondersteuning bij schade, wij nemen de leiding en zorgen voor concrete, pragmatische oplossingen.',
      points: [
        'Actieve verdediging bij schadeclaims',
        'Directe afhandeling zonder tussenpersonen',
        'Duidelijke communicatie zonder vakjargon',
      ],
    },
    {
      title: 'FYGITAAL',
      subtitle: 'Fysieke nabijheid & digitaal comfort',
      icon: <Smartphone className="w-8 h-8 text-[#0B2545]" />,
      description: 'U hoeft niet te kiezen tussen een modern digitaal contact en een persoonlijk gesprek. Bij Remaut geniet u van een warm onthaal in ons kantoor aan de Stationsstraat 111 te Ledegem én van snelle, laagdrempelige bereikbaarheid via WhatsApp, telefoon en e-mail.',
      points: [
        'Kantoor in de Stationsstraat 111, Ledegem',
        'Snel contact via WhatsApp en telefoon (056/50.96.03)',
        'Flexibele afspraken, ook buiten kantooruren',
      ],
    },
  ];

  return (
    <section id="waarom-ons" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0B2545] text-xs font-bold uppercase tracking-wider">
            Waarom Kiezen Voor Remaut?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Drie duidelijke garanties voor uw gemoedsrust
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Geen vage beloftes, maar drie heldere pijlers die onze dagelijkse werking in Ledegem typeren.
          </p>
        </div>

        {/* 3 USPs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uspsWithDetails.map((usp, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-[#0B2545]/30 hover:shadow-xl transition-all duration-200"
            >
              <div>
                {/* Icon & Title */}
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm mb-6">
                  {usp.icon}
                </div>

                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Pijler 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0B2545] tracking-tight mt-1">
                    {usp.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {usp.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {usp.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200/70 mb-6">
                  {usp.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] hover:text-blue-800 transition-colors group"
                >
                  <span>Bespreek uw dossier met ons</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
