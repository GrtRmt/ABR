import React, { useState, useMemo } from 'react';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Users,
  Home,
  MessageSquareQuote,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import {
  CLIENT_TESTIMONIALS,
  PARTNER_INSURERS,
  REVIEWS_STATS,
  type ClientReview,
} from '../data/reviewsData';

interface ReviewsSectionProps {
  onOpenAppointment?: (service?: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenAppointment,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Alle ervaringen', icon: Sparkles, count: CLIENT_TESTIMONIALS.length },
    { id: 'kmo', label: 'Zelfstandigen & KMO', icon: Building2, count: CLIENT_TESTIMONIALS.filter(r => r.category === 'kmo').length },
    { id: 'particulier', label: 'Gezinnen & Particulieren', icon: Users, count: CLIENT_TESTIMONIALS.filter(r => r.category === 'particulier').length },
    { id: 'krediet', label: 'Wonen & Kredieten', icon: Home, count: CLIENT_TESTIMONIALS.filter(r => r.category === 'krediet').length },
  ];

  const filteredReviews = useMemo(() => {
    if (activeCategory === 'all') return CLIENT_TESTIMONIALS;
    return CLIENT_TESTIMONIALS.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="ervaringen"
      className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-y border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* SECTION HEADER & FINTECH TRUST SUMMARY */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="accent" className="px-3 py-1 font-semibold text-xs tracking-wide uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-700 mr-1.5 inline" />
                Klanttevredenheid & Vertrouwen
              </Badge>
              <Badge variant="success" className="px-2.5 py-1 text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mr-1 inline" />
                Geverifieerde cliënten
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Wat onze cliënten zeggen over onze fygitale aanpak
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Persoonlijk advies aan tafel in Ledegem, gecombineerd met de snelheid van moderne digitale service. Ontdek hoe we gezinnen en ondernemers in West-Vlaanderen ontzorgen.
            </p>
          </div>

          {/* Fintech Score Summary Card */}
          <div className="shrink-0">
            <Card className="p-6 bg-white/95 backdrop-blur border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-50 border border-amber-200/60">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    {REVIEWS_STATS.averageRating}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">
                      Uitstekende waardering
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Gebaseerd op <span className="font-semibold text-slate-700">{REVIEWS_STATS.totalReviews}+ tevreden cliënten</span>
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 pt-0.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{REVIEWS_STATS.recommendationRate} beveelt ons aan</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-start gap-2 pt-2 pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <Button
                key={cat.id}
                id={`filter-${cat.id}`}
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={`h-10 px-4 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#0B2545] text-white shadow-xs hover:bg-[#0B2545]/95'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 mr-2 ${isActive ? 'text-blue-300' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
                <span
                  className={`ml-2 px-1.5 py-0.5 text-[10px] rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((review) => (
            <Card
              key={review.id}
              id={`review-card-${review.id}`}
              className="flex flex-col justify-between h-full bg-white border-slate-200/85 hover:border-blue-300/80 transition-all duration-300 group hover:-translate-y-1"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between gap-2">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Badge variant="secondary" className="text-[11px] font-medium bg-slate-100/90 text-slate-700">
                    {review.categoryLabel}
                  </Badge>
                </div>

                <CardTitle className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#0B2545] transition-colors">
                  “{review.highlight}”
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 pb-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {review.text}
                </p>
              </CardContent>

              <CardFooter className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className={`${review.avatarBg} text-white font-bold text-xs`}>
                      {review.avatarInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-slate-900">
                        {review.author}
                      </span>
                      {review.verified && (
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-emerald-500 shrink-0"
                          title="Geverifieerde cliënt"
                        />
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 leading-tight">
                      {review.roleOrCompany} • {review.location}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 whitespace-nowrap">
                  {review.date}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* LOGO'S & MAATSCHAPPIJEN / INSTITUTIONELE PARTNERS STRIP */}
        <div className="pt-10 border-t border-slate-200/80 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Onafhankelijk netwerk & Maatschappijen
              </div>
              <h3 className="text-lg font-bold text-[#0B2545]">
                Directe samenwerking met de meest solide verzekeraars en bankpartners
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md md:text-right">
              Omdat we niet gebonden zijn aan één aanbieder, vergelijken we objectief voorwaarden en premies in uw belang.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {PARTNER_INSURERS.map((partner) => (
              <div
                key={partner.name}
                id={`partner-logo-${partner.shortCode.toLowerCase()}`}
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all duration-200 text-center"
              >
                <span className="font-extrabold tracking-wider text-sm sm:text-base text-slate-700 group-hover:text-[#0B2545] transition-colors">
                  {partner.shortCode}
                </span>
                <span className="text-[10px] font-medium text-slate-400 mt-0.5 group-hover:text-slate-600 transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE ACTION BANNER */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0B2545] to-[#133D72] p-8 sm:p-10 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200">
              <MessageSquareQuote className="w-3.5 h-3.5 text-blue-300" />
              Ervaar zelf het verschil
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Wilt u ook een onafhankelijke check van uw verzekeringen of lening?
            </h3>
            <p className="text-sm text-blue-100/90">
              We analyseren kosteloos uw huidige polissen en kijken waar u kunt besparen of beter beschermd kunt zijn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              id="cta-reviews-appointment"
              size="lg"
              onClick={() => onOpenAppointment?.('Klantreview check')}
              className="w-full sm:w-auto bg-white text-[#0B2545] hover:bg-blue-50 font-bold px-6 py-3 rounded-xl shadow-xs transition-all"
            >
              <span>Maak een afspraak</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#0B2545]" />
            </Button>
            <a
              href="https://maps.app.goo.gl/UHhrPkNmsWg7CYDy8"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-reviews-google-link"
              className="w-full sm:w-auto text-xs text-blue-200 hover:text-white px-4 py-2.5 rounded-xl border border-white/20 hover:border-white/40 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Bekijk op Google Maps</span>
              <ExternalLink className="w-3 h-3 text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
