import React, { useState, useId } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Building2,
  Home,
  MapPin,
  Waves,
  Hammer,
  Users,
  Layers,
  ArrowRight,
  Sparkles,
  Info,
  Calendar,
  FileCheck,
  Zap,
  ChevronRight,
  ShieldAlert,
  Flame,
  KeyRound,
  RotateCcw,
} from 'lucide-react';
import { AbrQuoteInitialParams } from './AbrQuoteModal';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ScrollReveal } from './ScrollReveal';

export interface AbrBouwCheckProps {
  onOpenQuoteWithParams: (params: AbrQuoteInitialParams) => void;
  onOpenAppointment: (service?: string) => void;
}

type BuildingType = 'rijwoning' | 'halfopen' | 'vrijstaand' | 'renovatie' | 'appartement' | 'bedrijfspand';
type LocationSetting = 'stadskern' | 'residentieel' | 'landelijk' | 'erfgoed';
type BudgetTier = 200000 | 350000 | 650000 | 1200000;

interface RequiredCoverage {
  id: string;
  title: string;
  section: 'Afdeling 1' | 'Afdeling 2' | 'Aanvullende Waarborg' | 'Bijzondere Clausule';
  importance: 'Verplicht / Cruciaal' | 'Ten Zeerste Aanbevolen' | 'Optioneel / Naar Wens';
  description: string;
  reason: string;
  iconName: string;
}

export const AbrBouwCheck: React.FC<AbrBouwCheckProps> = ({
  onOpenQuoteWithParams,
  onOpenAppointment,
}) => {
  const checkSectionId = useId();

  // Inputs
  const [buildingType, setBuildingType] = useState<BuildingType>('halfopen');
  const [locationSetting, setLocationSetting] = useState<LocationSetting>('residentieel');
  const [hasSharedWall, setHasSharedWall] = useState<boolean>(true);
  const [hasWaterDrainage, setHasWaterDrainage] = useState<boolean>(false);
  const [hasCraneOverflight, setHasCraneOverflight] = useState<boolean>(false);
  const [hasVolunteers, setHasVolunteers] = useState<boolean>(false);
  const [isRenovationKeepStructure, setIsRenovationKeepStructure] = useState<boolean>(false);
  const [budgetTier, setBudgetTier] = useState<BudgetTier>(350000);

  // Auto-adjust toggles when building type changes
  const handleSelectBuildingType = (type: BuildingType) => {
    setBuildingType(type);
    if (type === 'rijwoning') {
      setHasSharedWall(true);
      if (locationSetting === 'landelijk') setLocationSetting('stadskern');
    } else if (type === 'vrijstaand') {
      setHasSharedWall(false);
    } else if (type === 'renovatie') {
      setIsRenovationKeepStructure(true);
    }
  };

  // Auto-adjust when location changes
  const handleSelectLocation = (loc: LocationSetting) => {
    setLocationSetting(loc);
    if (loc === 'stadskern' || loc === 'erfgoed') {
      setHasCraneOverflight(true);
    }
  };

  // Determine Neighbor Risk Level
  const hasNeighborExposure =
    buildingType === 'rijwoning' ||
    buildingType === 'halfopen' ||
    hasSharedWall ||
    locationSetting === 'stadskern' ||
    locationSetting === 'erfgoed';

  const riskScore = React.useMemo(() => {
    let score = 50; // base risk
    if (buildingType === 'rijwoning') score += 25;
    if (buildingType === 'halfopen') score += 15;
    if (buildingType === 'appartement') score += 20;
    if (buildingType === 'renovatie') score += 15;
    if (locationSetting === 'stadskern') score += 15;
    if (locationSetting === 'erfgoed') score += 25;
    if (hasWaterDrainage) score += 20;
    if (hasSharedWall) score += 15;
    if (hasCraneOverflight) score += 10;
    if (hasVolunteers) score += 10;
    return Math.min(score, 100);
  }, [
    buildingType,
    locationSetting,
    hasWaterDrainage,
    hasSharedWall,
    hasCraneOverflight,
    hasVolunteers,
  ]);

  // Dynamic Required Coverages list
  const coverages: RequiredCoverage[] = React.useMemo(() => {
    const list: RequiredCoverage[] = [
      {
        id: 'afd1',
        title: 'Afdeling 1: Materiële Schade aan het Werk & Materialen',
        section: 'Afdeling 1',
        importance: 'Verplicht / Cruciaal',
        description: 'Dekt storm, wateroverlast, instorting, constructiefouten, diefstal van ingebouwde bouwmaterialen en vandalen.',
        reason: 'Onmisbaar voor elke werf in België; beschermt uw investering bij schade zonder discussie wie schuldig is.',
        iconName: 'ShieldCheck',
      },
    ];

    if (hasNeighborExposure) {
      list.push({
        id: 'afd2-buren',
        title: 'Afdeling 2: Burenvergoeding zonder Fout (Art. 3.101 BW)',
        section: 'Afdeling 2',
        importance: 'Verplicht / Cruciaal',
        description: 'Vergoedt scheurvorming, verzakking of trillingsschade bij aanpalende buren, zelfs als de aannemer geen fout maakte.',
        reason: 'Omdat u buren hebt (gemene muren of dichte bebouwing) kan een buur u als bouwheer direct aansprakelijk stellen voor hinder.',
        iconName: 'AlertTriangle',
      });
    } else {
      list.push({
        id: 'afd2-standaard',
        title: 'Afdeling 2: Burgerlijke Aansprakelijkheid derden',
        section: 'Afdeling 2',
        importance: 'Ten Zeerste Aanbevolen',
        description: 'Dekt lichamelijke en stoffelijke schade aan voorbijgangers, bezoekers of naburige percelen.',
        reason: 'Beschermt tegen claims van derden rondom uw werf.',
        iconName: 'ShieldCheck',
      });
    }

    if (hasSharedWall || buildingType === 'rijwoning' || buildingType === 'halfopen') {
      list.push({
        id: 'onderschoeiing',
        title: 'Uitbreiding Onderschoeiing & Gemene Muren',
        section: 'Aanvullende Waarborg',
        importance: 'Verplicht / Cruciaal',
        description: 'Dekt verzakkingen en scheurvorming bij het onderkappen of verstevigen van de funderingen van de buren.',
        reason: 'Klassieke polis sluit zettingsschade door onderschoeiing vaak uit zonder deze expliciete uitbreidingsclausule.',
        iconName: 'Building2',
      });
    }

    if (hasWaterDrainage) {
      list.push({
        id: 'bemaling',
        title: 'Waarborg Grondwaterverlaging / Bronbemaling',
        section: 'Aanvullende Waarborg',
        importance: 'Verplicht / Cruciaal',
        description: 'Dekt zakkingsschade en stabiliteitsverlies in de buurt ten gevolge van het wegpompen van grondwater voor de kelder.',
        reason: 'Bronbemaling trekt de watertafel in de straat naar beneden, wat bij buren tot acute scheuren in vloeren kan leiden.',
        iconName: 'Waves',
      });
    }

    if (buildingType === 'renovatie' || isRenovationKeepStructure) {
      list.push({
        id: 'bestaande-goederen',
        title: 'Dekking Bestaande Goederen (Bestaande Constructie)',
        section: 'Aanvullende Waarborg',
        importance: 'Verplicht / Cruciaal',
        description: 'Dekt schade aan de bestaande woning die niet gesloopt wordt (bv. scheur in behouden gevel door doorkap).',
        reason: 'Standaard brandpolis sluit werven uit; zonder deze ABR-clausule is uw bestaande woning tijdens zware werken onbeschermd.',
        iconName: 'Home',
      });
    }

    if (hasVolunteers) {
      list.push({
        id: 'zelfbouwers',
        title: 'Clausule Vrienden- en Familiehulp (Zelfbouwers)',
        section: 'Bijzondere Clausule',
        importance: 'Ten Zeerste Aanbevolen',
        description: 'Dekt de persoonlijke aansprakelijkheid en lichamelijke ongevallen van familie en vrienden die kosteloos helpen.',
        reason: 'Voorkomt dat u of helpende familieleden persoonlijk aangesproken worden bij een werfongeval.',
        iconName: 'Users',
      });
    }

    if (hasCraneOverflight) {
      list.push({
        id: 'kraan',
        title: 'Kruislingse Aansprakelijkheid & Kraanovervlucht',
        section: 'Bijzondere Clausule',
        importance: 'Ten Zeerste Aanbevolen',
        description: 'Dekt schade bij zwenken over naburige daken of openbaar domein, en zorgt dat aannemers elkaar direct aanspreken via de ABR.',
        reason: 'Vermijdt eindeloze juridische blokkades tussen architect, hoofdaannemer en kraanbedrijf.',
        iconName: 'Hammer',
      });
    }

    list.push({
      id: 'onderhoud',
      title: 'Onderhouds- en Waarborgtermijn (12 of 24 maanden)',
      section: 'Aanvullende Waarborg',
      importance: 'Ten Zeerste Aanbevolen',
      description: 'Verlengt de dekking ná de voorlopige oplevering voor schade veroorzaakt tijdens herstelwerken door aannemers.',
      reason: 'Veel verborgen gebreken manifesteren zich pas tijdens het eerste stookseizoen na intrek in het pand.',
      iconName: 'CheckCircle2',
    });

    return list;
  }, [
    buildingType,
    hasNeighborExposure,
    hasSharedWall,
    hasWaterDrainage,
    isRenovationKeepStructure,
    hasVolunteers,
    hasCraneOverflight,
  ]);

  // Handle direct launch of quote modal with pre-configured parameters
  const handleLaunchQuote = () => {
    onOpenQuoteWithParams({
      projectType: buildingType,
      budget: budgetTier,
      existingValue: buildingType === 'renovatie' ? 200000 : 0,
      hasNeighbors: hasNeighborExposure,
      hasDrainage: hasWaterDrainage,
      durationMonths: buildingType === 'appartement' ? 24 : 18,
      includeTheft: true,
      maintenanceMonths: 12,
      indicativePremium: Math.round(budgetTier * (hasNeighborExposure ? 0.0034 : 0.0028)),
    });
  };

  return (
    <section id="bouwcheck" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Interactieve BouwCheck™ Tool</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight mb-4">
              Welke ABR-dekking vereist <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                uw specifiek bouwproject?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Geen twee werven zijn gelijk. Selecteer uw gebouwtype, ligging en werfomstandigheden. 
              Onze tool analyseert direct uw wettelijke buuraansprakelijkheid (Art. 3.101 BW) en toont 
              exact welke clausules onmisbaar zijn voor uw gemoedsrust.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Grid: Inputs Left, Live Results Right */}
        <ScrollReveal delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Input Configuration (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* STAP 1: Gebouwtype */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#0B2545] text-white flex items-center justify-center text-xs font-black">
                    1
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                    Wat voor bouwproject realiseert u?
                  </h3>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Gebouwtype
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'halfopen',
                    title: 'Halfopen bebouwing',
                    sub: '1 gemene muur',
                    icon: Building2,
                  },
                  {
                    id: 'rijwoning',
                    title: 'Rijwoning / Gesloten',
                    sub: 'Direct tussen 2 buren',
                    icon: Building2,
                  },
                  {
                    id: 'vrijstaand',
                    title: 'Vrijstaande villa',
                    sub: 'Open perceel',
                    icon: Home,
                  },
                  {
                    id: 'renovatie',
                    title: 'Grondige Renovatie',
                    sub: 'Bestaande structuur',
                    icon: Hammer,
                  },
                  {
                    id: 'appartement',
                    title: 'Appartementsbouw',
                    sub: 'Meergezinswoning',
                    icon: Layers,
                  },
                  {
                    id: 'bedrijfspand',
                    title: 'Bedrijfspand / KMO',
                    sub: 'Loods of kantoor',
                    icon: Building2,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = buildingType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectBuildingType(item.id as BuildingType)}
                      className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all relative ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/40 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg mb-2 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5">
                        {item.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STAP 2: Ligging & Omgeving */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#0B2545] text-white flex items-center justify-center text-xs font-black">
                    2
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                    Waar bevindt de werf zich?
                  </h3>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Omgeving
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'stadskern',
                    title: 'Dichtbebouwde dorps- of stadskern',
                    desc: 'Aangrenzende gevels, voetpad & straat direct langs de werf (bv. Ledegem centrum, Roeselare, Kortrijk).',
                    badge: 'Hoog buurtrisico',
                  },
                  {
                    id: 'residentieel',
                    title: 'Woonwijk / Verkaveling',
                    desc: 'Moderne verkaveling met buren op gemiddelde afstand (5 tot 15 meter).',
                    badge: 'Gemiddeld risico',
                  },
                  {
                    id: 'landelijk',
                    title: 'Landelijke zone / Vrijstaand veld',
                    desc: 'Ruime afstand tot omliggende woningen (> 25 meter). Nauwelijks burenrisico.',
                    badge: 'Laag buurtrisico',
                  },
                  {
                    id: 'erfgoed',
                    title: 'Naast historische / kwetsbare panden',
                    desc: 'Oudere aanpalende gebouwen met gevoelige kalkvoegen of ondiepe funderingen.',
                    badge: 'Speciale clausule vereist',
                  },
                ].map((item) => {
                  const isSelected = locationSetting === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectLocation(item.id as LocationSetting)}
                      className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/40 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-bold text-xs sm:text-sm text-slate-900">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed mb-2">
                        {item.desc}
                      </p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STAP 3: Specifieke Werfparameters (Toggles) */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#0B2545] text-white flex items-center justify-center text-xs font-black">
                    3
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                    Specifieke werf- en constructiekenmerken
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Selecteer wat van toepassing is
                </span>
              </div>

              <div className="space-y-3">
                {/* Toggle 1: Gemene muren */}
                <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={hasSharedWall}
                    onChange={(e) => setHasSharedWall(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-slate-900 block text-sm">
                      Werken aan of tegen een gemene muur / Onderschoeiing
                    </span>
                    <span className="text-slate-500">
                      Er wordt tegen een bestaande scheidingsmuur gebouwd of de fundering van de buren moet worden onderschoeid.
                    </span>
                  </div>
                </label>

                {/* Toggle 2: Grondwaterbemaling */}
                <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={hasWaterDrainage}
                    onChange={(e) => setHasWaterDrainage(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-slate-900 block text-sm">
                      Kelderwerken met bronbemaling (grondwateronttrekking)
                    </span>
                    <span className="text-slate-500">
                      Er worden pompen geplaatst om de bouwput of kelder droog te houden tijdens de graafwerken.
                    </span>
                  </div>
                </label>

                {/* Toggle 3: Kraan & Overvlucht */}
                <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={hasCraneOverflight}
                    onChange={(e) => setHasCraneOverflight(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-slate-900 block text-sm">
                      Zware torenkraan of zwenken over naburige percelen
                    </span>
                    <span className="text-slate-500">
                      De kraanarm zwaait over daken van de buren of over het openbaar voetpad/straat.
                    </span>
                  </div>
                </label>

                {/* Toggle 4: Bestaand gebouw behouden */}
                {buildingType === 'renovatie' && (
                  <label className="flex items-start gap-3 p-3 rounded-xl border border-blue-200 bg-blue-50/40 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={isRenovationKeepStructure}
                      onChange={(e) => setIsRenovationKeepStructure(e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <div className="flex-1 text-xs">
                      <span className="font-bold text-slate-900 block text-sm">
                        Bestaande constructie blijft gedeeltelijk behouden
                      </span>
                      <span className="text-slate-600">
                        Het bestaande woonhuis wordt niet volledig gesloopt; de niet-bewerkte delen moeten meeverzekerd worden.
                      </span>
                    </div>
                  </label>
                )}

                {/* Toggle 5: Familie & Vrienden hulp */}
                <label className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={hasVolunteers}
                    onChange={(e) => setHasVolunteers(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-bold text-slate-900 block text-sm">
                      Zelfbouwers: vrienden of familieleden helpen op de werf
                    </span>
                    <span className="text-slate-500">
                      Helpende handen voeren gratis isolatie-, dak-, pleister- of elektriciteitswerken uit.
                    </span>
                  </div>
                </label>
              </div>

              {/* Geschat werfbudget */}
              <div className="mt-5 pt-4 border-t border-slate-200">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Geschatte bouwwaarde (excl. bouwgrond):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: '< €250.000', val: 200000 },
                    { label: '€250k - €500k', val: 350000 },
                    { label: '€500k - €1M', val: 650000 },
                    { label: '> €1.000.000', val: 1200000 },
                  ].map((b) => (
                    <button
                      key={b.val}
                      type="button"
                      onClick={() => setBudgetTier(b.val as BudgetTier)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                        budgetTier === b.val
                          ? 'bg-[#0B2545] text-white border-[#0B2545]'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Live Verification Results & Recommended Package (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Verdict Card */}
            <div className="bg-[#0B2545] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-blue-900/60 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-700 text-xs font-bold text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>BouwCheck Analyse</span>
                </span>
              </div>

              {/* Risk Gauge */}
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Berekende Werf-Risicoindex:
                  </span>
                  <span className="text-sm font-extrabold text-amber-400">
                    {riskScore >= 75 ? 'Hoog Risico' : riskScore >= 55 ? 'Matig Verhoogd Risico' : 'Standaard Werfrisico'} ({riskScore}/100)
                  </span>
                </div>
                <div className="w-full bg-blue-950/80 rounded-full h-3 p-0.5 border border-blue-800">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      riskScore >= 75
                        ? 'bg-gradient-to-r from-amber-400 to-rose-500'
                        : riskScore >= 55
                        ? 'bg-gradient-to-r from-blue-400 to-amber-400'
                        : 'bg-gradient-to-r from-emerald-400 to-blue-400'
                    }`}
                    style={{ width: `${riskScore}%` }}
                  />
                </div>
              </div>

              {/* Primary Legal Takeaway */}
              <div className="bg-blue-950/60 rounded-2xl p-4 border border-blue-800/80 mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-400/20 text-amber-300 shrink-0 mt-0.5">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                      {hasNeighborExposure ? 'Art. 3.101 BW Buurhinder van toepassing' : 'Bescherming eigen bouwwerk primair'}
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {hasNeighborExposure
                        ? 'Bij uw project is Afdeling 2 (Burenvergoeding zonder fout) wettelijk cruciaal. Als uw buur barsten vertoont, moet u als bouwheer vergoeden, zelfs als de aannemer alle regels volgde.'
                        : 'U bouwt vrijstaand met beperkt burencontact. De focus ligt hier maximaal op Afdeling 1 (Materiële schade door storm, diefstal en constructiefouten).'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Required Coverages Checklist */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Aanbevolen ABR-clausules voor uw werf:
                </span>
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {coverages.map((cov) => (
                    <div
                      key={cov.id}
                      className="bg-white/10 hover:bg-white/15 rounded-xl p-3 border border-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="font-bold text-xs text-white leading-tight">
                          {cov.title}
                        </span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full shrink-0 ${
                          cov.importance.includes('Cruciaal')
                            ? 'bg-rose-500/80 text-white'
                            : 'bg-blue-600/80 text-blue-100'
                        }`}>
                          {cov.importance}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug mb-1.5">
                        {cov.description}
                      </p>
                      <div className="text-[10px] text-amber-200/90 italic flex items-center gap-1">
                        <span>💡 {cov.reason}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleLaunchQuote}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition-all active:scale-98"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Offerte berekenen voor dit profiel</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenAppointment(`BouwCheck Werfadvies (${buildingType} - ${locationSetting})`)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5 text-blue-300" />
                  <span>Adviesgesprek inplannen in Ledegem</span>
                </button>
              </div>

              {/* Broker Guarantee Note */}
              <div className="mt-4 pt-3 border-t border-blue-900/60 text-center">
                <p className="text-[11px] text-slate-400">
                  Advies door <strong className="text-white">Remaut Verzekeringen</strong> • Erkend makelaar FSMA 044671 A
                </p>
              </div>

            </div>

            {/* Quick Tips Box from Remaut Verzekeringen */}
            <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200/80 text-amber-950 text-xs">
              <h4 className="font-extrabold text-amber-900 text-sm mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Gouden tip van onze makelaar:</span>
              </h4>
              <p className="leading-relaxed text-amber-900/90 mb-3">
                Laat <strong>vóór</strong> de eerste spade in de grond gaat steeds een <em>tegensprekelijke plaatsbeschrijving</em> opmaken van de aanpalende percelen. 
                Samen met een ABR-verzekering met foutloze burenvergoeding sluit dit 99% van alle burenconflicten in West-Vlaanderen uit.
              </p>
              <div className="flex items-center justify-between text-[11px] font-semibold text-amber-800">
                <span>Hulp nodig bij de plaatsbeschrijving?</span>
                <button
                  onClick={() => onOpenAppointment('Vraag over plaatsbeschrijving buren')}
                  className="underline hover:text-amber-950"
                >
                  Vraag advies &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
