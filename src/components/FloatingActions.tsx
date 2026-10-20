import React, { useState, useEffect } from 'react';
import {
  Share2,
  ArrowUp,
  Check,
  Copy,
  MessageSquare,
  Mail,
  Linkedin,
  Facebook,
  X as CloseIcon,
  ExternalLink,
} from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : 'https://remaut.eu';
  };

  const handleCopyLink = async () => {
    try {
      const url = getPageUrl();
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

  const shareText = "Bekijk deze complete gids over de ABR-verzekering (Alle Bouwplaatsrisico's) voor nieuwbouw en renovatie:";
  const shareTitle = "ABR-verzekering: Alle Bouwplaatsrisico's • Remaut Verzekeringen";

  const shareChannels = [
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-4 h-4 text-emerald-600" />,
      color: 'hover:bg-emerald-50 text-emerald-950 border-emerald-200',
      action: () => {
        const url = encodeURIComponent(getPageUrl());
        const text = encodeURIComponent(`${shareText} `);
        window.open(`https://wa.me/?text=${text}${url}`, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'E-mail',
      icon: <Mail className="w-4 h-4 text-blue-600" />,
      color: 'hover:bg-blue-50 text-blue-950 border-blue-200',
      action: () => {
        const url = getPageUrl();
        const subject = encodeURIComponent(shareTitle);
        const body = encodeURIComponent(
          `Beste,\n\nHier vind je alle informatie over de ABR-verzekering, inclusief no-fault dekking, burenclausule en tariefcalculator:\n\n${url}\n\nMet vriendelijke groet`
        );
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      },
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4 text-[#0077B5]" />,
      color: 'hover:bg-sky-50 text-sky-950 border-sky-200',
      action: () => {
        const url = encodeURIComponent(getPageUrl());
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4 text-[#1877F2]" />,
      color: 'hover:bg-indigo-50 text-indigo-950 border-indigo-200',
      action: () => {
        const url = encodeURIComponent(getPageUrl());
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
      },
    },
  ];

  return (
    <>
      {/* Floating Action Cluster on the right side */}
      <div className="fixed right-4 sm:right-6 bottom-20 sm:bottom-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Share Button */}
        <div className="pointer-events-auto relative">
          <button
            onClick={() => setShareMenuOpen(!shareMenuOpen)}
            className="w-12 h-12 rounded-full bg-[#0B2545] hover:bg-[#133D72] text-white shadow-xl hover:shadow-2xl border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group"
            aria-label="Deel deze pagina via social media of klembord"
            title="Deel deze pagina"
          >
            {shareMenuOpen ? (
              <CloseIcon className="w-5 h-5 text-white transition-transform group-hover:rotate-90" />
            ) : (
              <Share2 className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
            )}
          </button>

          {/* Share Menu Popup Card */}
          {shareMenuOpen && (
            <div className="absolute bottom-14 right-0 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200 text-slate-900 z-50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0B2545] flex items-center justify-center">
                    <Share2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0B2545] tracking-tight">
                      Deel deze pagina
                    </h4>
                    <span className="text-[11px] text-slate-500 font-medium block -mt-0.5">
                      Kopieer de link of deel direct
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShareMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Sluit deelmenu"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Fast Copy URL Box */}
              <div className="my-3.5">
                <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <input
                    type="text"
                    readOnly
                    value={getPageUrl()}
                    className="flex-1 bg-transparent px-2 text-xs text-slate-700 outline-hidden font-mono truncate"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 shrink-0 ${
                      copied
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-[#0B2545] hover:bg-[#133D72] text-white shadow-xs'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Gekopieerd!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopieer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Media Share Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {shareChannels.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action();
                      setShareMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border bg-white text-xs font-bold transition-all shadow-2xs hover:shadow-sm ${item.color}`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-40 ml-auto" />
                  </button>
                ))}
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-slate-100 text-center">
                <p className="text-[11px] text-slate-400">
                  ABR-verzekering • Remaut Verzekeringen Ledegem
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Floating Scroll to Top Button */}
        <div className="pointer-events-auto">
          <button
            onClick={scrollToTop}
            aria-label="Scroll naar boven"
            title="Terug naar boven"
            className={`w-12 h-12 rounded-full bg-white text-[#0B2545] hover:bg-slate-50 hover:text-blue-900 border border-slate-200 shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
              showScrollTop
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <ArrowUp className="w-5 h-5 text-[#0B2545] transition-transform hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile when share menu is open */}
      {shareMenuOpen && (
        <div
          onClick={() => setShareMenuOpen(false)}
          className="fixed inset-0 bg-black/25 backdrop-blur-2xs z-30 transition-opacity"
          aria-hidden="true"
        />
      )}
    </>
  );
};
