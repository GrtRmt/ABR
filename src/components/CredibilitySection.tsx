import React from 'react';
import { ShieldCheck, Landmark, Clock, FileCheck, PhoneCall, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const CredibilitySection: React.FC = () => {
  const credibilityPillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0B2545]" />,
      title: 'Onafhankelijk Makelaar',
      description: 'Volledige onafhankelijkheid in het vergelijken en selecteren van verzekeringsmaatschappijen.',
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#0B2545]" />,
      title: 'Erkend Fintro Bankier',
      description: 'Officieel bankagentschap in Ledegem voor vertrouwde spaar-, krediet- en betaalformules.',
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-[#0B2545]" />,
      title: 'Direct Persoonlijk Contact',
      description: 'Geen anonieme callcenters of keuzemenu’s: direct contact met uw vertrouwde adviseur.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0B2545]" />,
      title: 'Snelle Opvolging & Hulp',
      description: 'Vlotte verwerking van uw schadedossiers en kredietvragen, zowel op kantoor als digitaal.',
    },
  ];

  return (
    <section className="py-16 bg-[#0B2545] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200">
            Betrouwbaarheid & Zekerheid
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Waarom cliënten in Ledegem en omstreken op ons rekenen
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Als lokaal familie- en zakelijk adviseur bouwen we aan langetermijnrelaties op basis van integriteit, vakkennis en permanente bereikbaarheid.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credibilityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-all text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-blue-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Kantoor gevestigd aan de Stationsstraat 111, 8880 Ledegem</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Persoonlijk advies op kantoor of digitaal via WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tel: 056/50.96.03 • info@remaut.eu</span>
          </div>
        </div>
      </div>
    </section>
  );
};
