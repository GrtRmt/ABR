import React, { useState, useId } from 'react';
import {
  Calculator,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Building,
  Home,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AbrCalculatorSectionProps {
  onOpenQuoteWithParams: (params: {
    projectType: string;
    budget: number;
    existingValue: number;
    hasNeighbors: boolean;
    hasDrainage: boolean;
    durationMonths: number;
    includeTheft: boolean;
    maintenanceMonths: number;
    indicativePremium: number;
  }) => void;
}

export const AbrCalculatorSection: React.FC<AbrCalculatorSectionProps> = ({
  onOpenQuoteWithParams,
}) => {
  const budgetInputId = useId();
  const existingValueInputId = useId();

  // Calculator inputs
  const [projectType, setProjectType] = useState<'nieuwbouw' | 'renovatie' | 'uitbreiding' | 'appartement'>('nieuwbouw');
  const [budget, setBudget] = useState<number>(350000);
  const [existingValue, setExistingValue] = useState<number>(200000);
  const [hasNeighbors, setHasNeighbors] = useState<boolean>(true);
  const [hasDrainage, setHasDrainage] = useState<boolean>(false);
  const [durationMonths, setDurationMonths] = useState<number>(18);
  const [includeTheft, setIncludeTheft] = useState<boolean>(true);
  const [maintenanceMonths, setMaintenanceMonths] = useState<number>(12);

  // Calculation Logic (Conform Belgian Market standards for ABR):
  // Base rate approx 0.28% - 0.42% of construction budget
  const calculateIndicativePremium = () => {
    let baseRate = 0.0030; // 0.30%

    if (projectType === 'renovatie') {
      baseRate = 0.0035; // Slightly higher due to working in existing structure
    } else if (projectType === 'uitbreiding') {
      baseRate = 0.0032;
    } else if (projectType === 'appartement') {
      baseRate = 0.0028;
    }

    // Neighbors surcharge (Afdeling 2 exposure)
    if (hasNeighbors) {
      baseRate += 0.0004;
    }

    // Drainage / dewatering surcharge
    if (hasDrainage) {
      baseRate += 0.0005;
    }

    // Duration adjustment (beyond 12 months)
    if (durationMonths > 18) {
      baseRate += 0.0003;
    } else if (durationMonths > 12) {
      baseRate += 0.00015;
    }

    // Theft inclusion
    if (includeTheft) {
      baseRate += 0.0002;
    }

    // Maintenance 24 months
    if (maintenanceMonths === 24) {
      baseRate += 0.0002;
    }

    let calculated = budget * baseRate;

    // Minimum premium threshold (ca. €650 in Belgian market)
    if (calculated < 650) {
      calculated = 650;
    }

    return Math.round(calculated);
  };

  const indicativePremium = calculateIndicativePremium();
  const minEstimate = Math.round(indicativePremium * 0.9);
  const maxEstimate = Math.round(indicativePremium * 1.15);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('nl-BE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleLaunchQuote = () => {
    onOpenQuoteWithParams({
      projectType,
      budget,
      existingValue: projectType === 'renovatie' ? existingValue : 0,
      hasNeighbors,
      hasDrainage,
      durationMonths,
      includeTheft,
      maintenanceMonths,
      indicativePremium,
    });
  };

  return (
    <section id="simulator" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <Calculator className="w-4 h-4 text-emerald-600" />
              Interactieve Premiewijzer
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Wat kost een ABR-verzekering voor uw werf?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Ontvang direct een realistische indicatie. Een ABR-verzekering is een <strong className="text-slate-900">éénmalige premie</strong> die de gehele bouwtijd dekt, géén jaarlijks terugkerende factuur.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box (Col 7) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2.5">
                1. Type Bouwproject
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'nieuwbouw', label: 'Nieuwbouw', icon: Home },
                  { id: 'renovatie', label: 'Renovatie', icon: Building },
                  { id: 'uitbreiding', label: 'Uitbreiding', icon: Layers },
                  { id: 'appartement', label: 'Residentie', icon: Building },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = projectType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 mx-auto mb-1.5" />
                      <span className="text-xs font-bold block">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Budget slider & input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={budgetInputId} className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                  2. Geraamde Bouwwaarde (excl. btw &amp; grond)
                </label>
                <span className="text-sm font-extrabold text-[#0B2545] bg-blue-100/70 px-2.5 py-0.5 rounded-md">
                  {formatCurrency(budget)}
                </span>
              </div>
              <input
                id={budgetInputId}
                type="range"
                min="100000"
                max="1500000"
                step="25000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>€100.000</span>
                <span>€500.000</span>
                <span>€1.000.000</span>
                <span>€1.500.000+</span>
              </div>
            </div>

            {/* If Renovation: Existing Building Value */}
            {projectType === 'renovatie' && (
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={existingValueInputId} className="text-xs font-bold text-[#0B2545]">
                    Waarde bestaande constructie (voor renovatie)
                  </label>
                  <span className="text-xs font-bold text-blue-900 bg-white px-2 py-0.5 rounded border border-blue-200">
                    {formatCurrency(existingValue)}
                  </span>
                </div>
                <input
                  id={existingValueInputId}
                  type="range"
                  min="50000"
                  max="1000000"
                  step="25000"
                  value={existingValue}
                  onChange={(e) => setExistingValue(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                />
                <span className="text-[11px] text-slate-500 block">
                  Belangrijk voor de optie "Bestaande goederen van de bouwheer" in de ABR-verzekering.
                </span>
              </div>
            )}

            {/* 3. Risk Toggles (Neighbors, Dewatering) */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                3. Werf- &amp; Omgevingskenmerken
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setHasNeighbors(!hasNeighbors)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    hasNeighbors
                      ? 'bg-blue-50/80 border-blue-300 text-[#0B2545]'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={hasNeighbors}
                    onChange={() => {}}
                    className="mt-0.5 h-4 w-4 rounded text-blue-600 accent-[#0B2545]"
                  />
                  <div>
                    <span className="text-xs font-bold block">Aanpalende woningen / buren</span>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      Vereist plaatsbeschrijving voor Afdeling 2
                    </span>
                  </div>
                </div>

                <div
                  onClick={() => setHasDrainage(!hasDrainage)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                    hasDrainage
                      ? 'bg-blue-50/80 border-blue-300 text-[#0B2545]'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={hasDrainage}
                    onChange={() => {}}
                    className="mt-0.5 h-4 w-4 rounded text-blue-600 accent-[#0B2545]"
                  />
                  <div>
                    <span className="text-xs font-bold block">Kelderbemaling / Droogzuiging</span>
                    <span className="text-[11px] text-slate-500 block leading-tight">
                      Verhoogd zettingsrisico voor aanpalende percelen
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Duration & Maintenance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-1.5">
                  Geschatte Bouwtijd
                </label>
                <select
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                >
                  <option value={12}>12 maanden (standaard)</option>
                  <option value={18}>18 maanden (aanbevolen nieuwbouw)</option>
                  <option value={24}>24 maanden (grote werven / villabouw)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-1.5">
                  Onderhoudstermijn na Oplevering
                </label>
                <select
                  value={maintenanceMonths}
                  onChange={(e) => setMaintenanceMonths(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                >
                  <option value={12}>12 maanden na oplevering</option>
                  <option value={24}>24 maanden (uitgebreide nazorg)</option>
                </select>
              </div>
            </div>

            {/* 5. Additional Coverage Check */}
            <div className="pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#0B2545]">
                <input
                  type="checkbox"
                  checked={includeTheft}
                  onChange={(e) => setIncludeTheft(e.target.checked)}
                  className="h-4 w-4 rounded text-blue-600 accent-[#0B2545]"
                />
                <span>Inclusief diefstal van verwerkte en opgeslagen bouwmaterialen</span>
              </label>
            </div>
          </div>

          {/* Result Card (Col 5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] to-[#081B33] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                  Indicatieve Berekening
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Eénmalige Premie
                </span>
              </div>

              {/* Big Price Display */}
              <div className="space-y-1">
                <div className="text-xs text-slate-300 font-medium">Geschatte premie voor de volledige bouwtijd:</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                  <span>{formatCurrency(indicativePremium)}</span>
                  <span className="text-xs font-normal text-slate-300">
                    (vork: {formatCurrency(minEstimate)} – {formatCurrency(maxEstimate)})
                  </span>
                </div>
                <p className="text-[11px] text-blue-200/80 pt-1">
                  *Excl. verzekeringstaksen (9,25%). Éénmalig te betalen vóór aanvang der werken; dekt de volledige {durationMonths} maanden werftijd + {maintenanceMonths} maanden onderhoud!
                </p>
              </div>

              {/* Breakdown Points */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Afdeling 1 (Materiële Schade Werf)</span>
                  <span className="font-bold text-white">Inbegrepen (All-Risk)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Afdeling 2 (Foutloze Burenhinder 3.101 BW)</span>
                  <span className="font-bold text-white">{hasNeighbors ? 'Inbegrepen' : 'Standaard'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Gangbare franchise per schadegeval</span>
                  <span className="font-bold text-white">ca. € 750 – € 1.000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>No-Fault afhandeling zonder stilstand</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Gegarandeerd
                  </span>
                </div>
              </div>

              {/* Documents to provide */}
              <div className="text-xs text-slate-300 space-y-1.5">
                <span className="font-bold text-white block">Wat heeft Remaut nodig voor een definitieve offerte?</span>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-blue-300" />
                    Bouwplannen / vergunning
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-blue-300" />
                    Raming van de werken / meetstaat
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-blue-300" />
                    Adres van de werf en begin-/einddatum
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleLaunchQuote}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-white text-[#0B2545] font-extrabold text-sm hover:bg-slate-100 shadow-xl transition-all duration-200 group active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Vraag Offerte Aan met Deze Gegevens</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-slate-400">
                  Vrijblijvend advies door Remaut Verzekeringen • Stationsstraat 111 Ledegem
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
