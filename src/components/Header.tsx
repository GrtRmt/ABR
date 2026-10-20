import React, { useState } from 'react';
import { Menu, X, Calendar, Sparkles, Phone, MessageSquare, Lock, Share2, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HeaderProps {
  onOpenAppointment: (service?: string) => void;
  onOpenQuoteModal: () => void;
  onOpenAdmin?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointment,
  onOpenQuoteModal,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { name: 'Wat is ABR?', href: '#wat-is-abr' },
    { name: 'Waarborgen', href: '#waarborgen' },
    { name: 'Wel / Niet', href: '#ipid-overzicht' },
    { name: 'Waarom Bouwheer?', href: '#waarom-bouwheer' },
    { name: 'BouwCheck', href: '#bouwcheck' },
    { name: 'Stappenplan', href: '#stappenplan' },
    { name: 'Cases', href: '#praktijkcases' },
    { name: 'Premiewijzer', href: '#simulator' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">


          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-slate-700 hover:text-[#0B2545] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">


            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-[#0B2545] text-xs font-bold rounded-xl border border-blue-200 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Offerte ABR</span>
            </button>

            <button
              onClick={() => onOpenAppointment('ABR Werfverzekering')}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0B2545] hover:bg-[#133D72] text-white text-xs font-bold rounded-xl shadow-sm hover:shadow transition-all active:scale-95"
              id="header-cta-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Afspraak Maken</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-2 ml-auto">
            <button
              onClick={onOpenQuoteModal}
              className="sm:hidden px-3 py-1.5 bg-[#0B2545] text-white text-xs font-bold rounded-lg"
            >
              Offerte ABR
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-[#0B2545] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Menu openen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0B2545] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#0B2545] text-white font-bold rounded-xl text-center text-sm shadow"
            >
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span>Vrijblijvende Offerte ABR Aanvragen</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment('ABR Werfverzekering');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-[#0B2545] font-bold rounded-xl text-center text-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Adviesgesprek inplannen in Ledegem</span>
            </button>

            <button
              onClick={handleCopyShare}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-center text-xs font-bold border transition-all ${
                copied
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Link gekopieerd naar klembord!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Deel deze pagina (kopieer link)</span>
                </>
              )}
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 text-slate-800 font-bold rounded-xl text-center text-xs border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <span>056/50.96.03</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-50 text-emerald-800 font-bold rounded-xl text-center text-xs border border-emerald-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {onOpenAdmin && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 bg-slate-50 text-slate-600 hover:text-[#0B2545] font-semibold rounded-lg text-center text-xs border border-slate-200"
              >
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>Nieuws &amp; Beheer</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
