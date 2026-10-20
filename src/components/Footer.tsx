import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, ArrowUp, HardHat, FileText, Share2, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FooterProps {
  onOpenAppointment: () => void;
  onOpenQuoteModal?: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppointment,
  onOpenQuoteModal,
  onOpenAdmin,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyShare = async () => {
    try {
      const url = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06152B] text-slate-300 border-t border-slate-800">
      {/* Top Footer Banner with Tagline */}
      <div className="border-b border-slate-800/80 bg-[#0B2545]/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase font-bold tracking-widest text-blue-300">
              <HardHat className="w-4 h-4 text-amber-400" />
              <span>ABR-verzekering (Alle Bouwplaatsrisico's)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </h3>
          </div>
          <div className="flex items-center gap-3">
            {onOpenQuoteModal && (
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm transition-colors shadow-lg"
              >
                OFFERTE ABR AANVRAGEN
              </button>
            )}
            <button
              onClick={onOpenAppointment}
              className="px-5 py-3 rounded-xl bg-white text-[#0B2545] font-extrabold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-lg"
            >
              AFSPRAAK MAKEN
            </button>

            {/* Share page button */}
            <button
              onClick={handleCopyShare}
              className={`px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border shadow-lg ${
                copied
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title="Deel deze pagina (kopieert link voor WhatsApp of e-mail)"
              aria-label="Deel deze pagina"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" />
                  <span>Link Gekopieerd!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-slate-400" />
                  <span>Deel pagina</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              aria-label="Naar boven scrollen"
              title="Naar boven"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Business Overview (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <h4 className="text-xl font-extrabold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </h4>
              <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                {BUSINESS_INFO.description}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Onafhankelijk verzekeringsmakelaar &amp; Fintro bankier in Ledegem. Gespecialiseerd in technische werfverzekeringen (ABR-verzekering), hypothecaire leningen en particuliere bescherming.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Onafhankelijk Makelaar • FSMA Erkend</span>
            </div>
          </div>

          {/* Col 2: ABR Quick links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              ABR Bouwverzekering
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#wat-is-abr" className="hover:text-white transition-colors">
                  Wat is een ABR-verzekering?
                </a>
              </li>
              <li>
                <a href="#waarborgen" className="hover:text-white transition-colors">
                  Afdeling 1 &amp; 2 Waarborgen
                </a>
              </li>
              <li>
                <a href="#ipid-overzicht" className="hover:text-white transition-colors">
                  Wel / Niet Verzekerd (IPID)
                </a>
              </li>
              <li>
                <a href="#waarom-bouwheer" className="hover:text-white transition-colors">
                  Waarom bouwheer zelf afsluit
                </a>
              </li>
              <li>
                <a href="#bouwcheck" className="hover:text-white transition-colors text-amber-300 font-medium">
                  ABR BouwCheck Tool
                </a>
              </li>
              <li>
                <a href="#stappenplan" className="hover:text-white transition-colors">
                  Stappenplan &amp; Plaatsbeschrijving
                </a>
              </li>
              <li>
                <a href="#praktijkcases" className="hover:text-white transition-colors">
                  Praktijkcases
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-white transition-colors text-blue-300 font-semibold">
                  Premiewijzer &amp; Simulator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Veelgestelde Vragen (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Kantoor Ledegem
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Opening Hours (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Openingsuren
            </h5>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Maandag - Vrijdag</span>
              </div>
              <p>08:30 - 12:00</p>
              <p>13:30 - 17:30</p>
              <div className="pt-2 text-[11px] text-blue-300 border-t border-slate-800">
                Buiten openingsuren steeds mogelijk op afspraak.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Onafhankelijk Verzekeringsmakelaar &amp; Fintro Bankier Ledegem. Erkend makelaar FSMA 044671 A.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>FSMA Geregistreerd</span>
            <span>•</span>
            <span>ABR-verzekering</span>
            <span>•</span>
            <span>Ledegem</span>
            {onOpenAdmin && (
              <>
                <span>•</span>
                <button
                  onClick={onOpenAdmin}
                  className="text-slate-400 hover:text-blue-300 transition-colors underline-offset-2 hover:underline"
                  id="footer-admin-link"
                >
                  Beheer
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
