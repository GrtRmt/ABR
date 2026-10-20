import React from 'react';
import { ShieldCheck, TrendingUp, Home, Building2, Check, ArrowRight, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ServicesSectionProps {
  onOpenAppointment: (service?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAppointment }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#0B2545]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-[#0B2545]" />;
      case 'Home':
        return <Home className="w-7 h-7 text-[#0B2545]" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-[#0B2545]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#0B2545]" />;
    }
  };

  return (
    <section id="diensten" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0B2545] text-xs font-bold uppercase tracking-wider">
            Onze Kerndiensten
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Volledige financiële & verzekeringszekerheid in Ledegem
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Als onafhankelijk makelaar en Fintro bankier combineren we vier complementaire vakgebieden onder één dak. Helder, betrouwbaar en afgestemd op úw leven en onderneming.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-100/70 text-[#0B2545]">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-[#0B2545] tracking-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Bullets */}
                <div className="space-y-2 border-t border-slate-200/80 pt-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenAppointment(service.title)}
                className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white group-hover:bg-[#0B2545] text-[#0B2545] group-hover:text-white font-bold text-xs border border-slate-200 group-hover:border-[#0B2545] transition-all shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Advies aanvragen</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#0B2545]">
              Wilt u uw bestaande polissen of kredieten laten nakijken?
            </h4>
            <p className="text-sm text-slate-600">
              Breng uw huidige contracten mee naar ons kantoor aan de Stationsstraat 111 te Ledegem voor een vrijblijvende, onafhankelijke check.
            </p>
          </div>
          <button
            onClick={() => onOpenAppointment('Verzekeringen check')}
            className="shrink-0 px-5 py-3 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Vrijblijvende afspraak inplannen
          </button>
        </div>
      </div>
    </section>
  );
};
