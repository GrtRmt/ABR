import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, ExternalLink, Building, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ScrollReveal } from './ScrollReveal';

interface LocationSectionProps {
  onOpenAppointment: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="locatie" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-[#0B2545] text-xs font-bold uppercase tracking-wider">
              Kantoor & Bereikbaarheid
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Welkom in ons kantoor te Ledegem
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Centraal gelegen aan de Stationsstraat 111 in Ledegem. Vlot bereikbaar voor inwoners en ondernemers uit Ledegem en de omliggende gemeenten.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Office Details, Hours & Directions (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0B2545] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Adres
                  </h3>
                  <div className="text-lg font-bold text-[#0B2545] mt-0.5">
                    {BUSINESS_INFO.address}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Gunstig gelegen in de Stationsstraat met parkeergelegenheid in de nabije omgeving.
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#0B2545]" />
                  <h4 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                    Openingsuren Kantoor
                  </h4>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-700">Maandag t/m Vrijdag</span>
                    <span className="font-bold text-[#0B2545]">
                      08:30 - 12:00 &bull; 13:30 - 17:30
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-blue-50/60 border border-blue-100 text-xs">
                    <span className="font-semibold text-[#0B2545]">Buiten openingsuren</span>
                    <span className="font-bold text-blue-800">
                      Steeds mogelijk op afspraak
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-3 italic">
                  Past een bezoek tijdens kantooruren niet in uw werkschema? Wij plannen graag een moment op maat voor u in.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] hover:bg-[#133D72] text-white font-bold text-sm shadow-sm transition-all"
                  id="open-google-maps-btn"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Route via Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2545] font-bold text-sm border border-slate-200 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#0B2545]" />
                  <span>Afspraak maken</span>
                </button>
              </div>
            </div>

            {/* Coverage note */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 text-xs text-slate-600 leading-relaxed">
              <Building className="w-5 h-5 text-[#0B2545] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[#0B2545] font-bold">Actief in Vlaanderen:</strong> Wij adviseren, gezinnen, handelaars, zelfstandigen, landbouwers, wijnbouwers, transporteurs, IT-ers, consultants, horeca-uitbaters en ondernemers over gans West-Vlaanderen (regio Ledegem, Kortrijk, Menen, Roeselare, Iepers, Poperinge en bredere regio)
              </span>
            </div>
          </div>

          {/* Right Column: Visual Interactive Map & Location Overview Card (Col 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
              {/* Map simulation header */}
              <div className="p-4 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-bold text-slate-800">Remaut Verzekeringen • Stationsstraat 111, Ledegem</span>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-blue-700 hover:underline"
                >
                  <span>Volledige kaart openen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Visual Map Preview */}
              <div className="relative flex-1 bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-200 flex items-center justify-center p-8 min-h-[300px]">
                {/* SVG Stylized Local Map Backdrop */}
                <svg className="absolute inset-0 w-full h-full text-slate-300/60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                  {/* Road representations */}
                  <path d="M-50 150 Q 200 130 500 200 T 900 180" fill="none" stroke="#CBD5E1" strokeWidth="12" />
                  <path d="M250 -50 L 300 450" fill="none" stroke="#CBD5E1" strokeWidth="8" />
                  <path d="M400 -50 L 380 450" fill="none" stroke="#CBD5E1" strokeWidth="6" />
                </svg>

                {/* Location Marker Pin Card */}
                <div className="relative z-10 max-w-sm bg-white rounded-2xl p-6 shadow-2xl border border-slate-200/80 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#0B2545] text-white flex items-center justify-center shadow-lg ring-4 ring-blue-100">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <h4 className="text-lg font-extrabold text-[#0B2545]">
                      Remaut Verzekeringen
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                      Onafhankelijk Makelaar & Fintro Bankier
                    </p>
                    <p className="text-sm font-medium text-slate-700 mt-2">
                      Stationsstraat 111, 8880 Ledegem
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-3">
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-[#0B2545] hover:bg-[#133D72] text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Start Navigatie</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0B2545] text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0B2545]" />
                      <span>Bellen</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact bar */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-[#0B2545] shrink-0" />
                  <span>Tel: <strong>056/50.96.03</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp: <strong>056/50.96.03</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
