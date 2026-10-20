import React, { useState, useEffect } from 'react';
import {
  Share2,
  X,
  Copy,
  Check,
  MessageSquare,
  Mail,
  Linkedin,
  Facebook,
  ExternalLink,
} from 'lucide-react';

export const FloatingShareWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const pageTitle = "ABR-Verzekering (Alle Bouwplaatsrisico's) • Remaut Verzekeringen Ledegem";
  const shareMessage = `Bekijk deze complete gids over de ABR-verzekering (Alle Bouwplaatsrisico's): dekkingen, no-fault principe en premiewijzer voor bouwen en verbouwen in Vlaanderen.`;

  const handleCopyLink = async () => {
    try {
      const url = currentUrl || window.location.href;
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

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
      color: 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border-emerald-200',
      action: () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `${pageTitle}\n\n${shareMessage}\n\n${currentUrl}`
        )}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'E-mail',
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-50 text-blue-800 hover:bg-blue-100 border-blue-200',
      action: () => {
        const subject = encodeURIComponent(pageTitle);
        const body = encodeURIComponent(
          `Beste,\n\nIk deel graag deze handige gids over de ABR-verzekering (Alle Bouwplaatsrisico's):\n\n${currentUrl}\n\nMet vriendelijke groeten,`
        );
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      },
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 text-sky-700" />,
      color: 'bg-sky-50 text-sky-900 hover:bg-sky-100 border-sky-200',
      action: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          currentUrl
        )}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5 text-blue-600" />,
      color: 'bg-indigo-50 text-indigo-900 hover:bg-indigo-100 border-indigo-200',
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      },
    },
  ];

  return (
    <>
      {/* Floating Side Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#0B2545] hover:bg-[#133D72] text-white py-3 px-2 sm:px-2.5 rounded-l-2xl shadow-2xl border-l border-t border-b border-white/20 flex flex-col items-center gap-1 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400"
        title="Deel deze pagina via WhatsApp, e-mail of social media"
        aria-label="Deel deze pagina"
      >
        <Share2 className="w-4 h-4 text-blue-300 group-hover:scale-110 group-hover:text-white transition-all" />
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-100 [writing-mode:vertical-rl] rotate-180 py-1">
          Delen
        </span>
      </button>

      {/* Share Modal Backdrop & Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-dialog-title"
          >
            {/* Header */}
            <div className="bg-[#0B2545] text-white px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-blue-300">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 id="share-dialog-title" className="text-base font-extrabold text-white">
                    Deel deze pagina
                  </h3>
                  <p className="text-xs text-blue-200">
                    Handig voor partner, architect of bouwheer
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Sluit deelmenu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Copy URL Box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Directe Link Kopiëren
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={currentUrl}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-mono focus:outline-none select-all"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shrink-0 ${
                      copied
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-[#0B2545] hover:bg-[#133D72] text-white shadow-sm'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Gekopieerd!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Kopieer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels Grid */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Delen via Social Media of Bericht
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {shareOptions.map((opt) => (
                    <button
                      key={opt.name}
                      onClick={opt.action}
                      className={`flex items-center gap-3 p-3 rounded-2xl border text-xs font-bold transition-all ${opt.color}`}
                    >
                      {opt.icon}
                      <span className="flex-1 text-left">{opt.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Advice Tip */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 leading-relaxed">
                Tip: Deel deze pagina met uw werfpartners zodat iedereen vóór de start van de werken op de hoogte is van de no-fault werking en plaatsbeschrijving.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
