import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenAppointment?: (service?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onOpenAppointment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="article-detail-modal"
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 z-10 my-auto"
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <Badge variant="accent" className="text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </Badge>

          <button
            onClick={onClose}
            id="btn-close-article-modal"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Sluit artikel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-slate-100">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback image in case user enters broken URL
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          {post.imageCaption && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-xs text-white/90">
              {post.imageCaption}
            </div>
          )}
        </div>

        {/* Article Meta & Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata info */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <User className="w-4 h-4 text-blue-600" />
              <span>{post.author}</span>
              {post.authorRole && (
                <span className="text-slate-400">({post.authorRole})</span>
              )}
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] leading-snug">
            {post.title}
          </h1>

          {/* Excerpt callout */}
          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#0B2545] text-slate-700 font-medium text-base leading-relaxed">
            {post.excerpt}
          </div>

          {/* Body content with paragraph rendering */}
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-[#0B2545] pt-3 pb-1">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="space-y-2 my-2 list-none pl-1">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                        <span>{item.replace(/^- /, '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Footer Call-to-action */}
          <div className="mt-8 pt-6 border-t border-slate-200 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-[#0B2545] text-base">
                Wilt u meer advies over dit onderwerp?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Onze adviseurs staan klaar op kantoor in Ledegem of via een snel adviesgesprek.
              </p>
            </div>
            <Button
              onClick={() => {
                onClose();
                onOpenAppointment?.(`Vraag over artikel: ${post.title}`);
              }}
              className="shrink-0 bg-[#0B2545] hover:bg-[#133D72] text-white font-bold"
            >
              <span>Maak een afspraak</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
