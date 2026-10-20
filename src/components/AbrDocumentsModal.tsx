import React, { useState } from 'react';
import {
  X,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Shield,
  Layers,
  Camera,
} from 'lucide-react';

interface AbrDocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const AbrDocumentsModal: React.FC<AbrDocumentsModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
}) => {
  const [activeDoc, setActiveDoc] = useState<'ipid' | 'checklist' | 'preventie'>('ipid');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B2545] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Documentatie &amp; IPID Fiches</h3>
              <p className="text-xs text-blue-200">Alle Bouwplaatsrisico's (ABR) • Remaut Verzekeringen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveDoc('ipid')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeDoc === 'ipid'
                ? 'border-[#0B2545] text-[#0B2545]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>IPID Informatiefiche</span>
          </button>

          <button
            onClick={() => setActiveDoc('checklist')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeDoc === 'checklist'
                ? 'border-[#0B2545] text-[#0B2545]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Gids Plaatsbeschrijving</span>
          </button>

          <button
            onClick={() => setActiveDoc('preventie')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeDoc === 'preventie'
                ? 'border-[#0B2545] text-[#0B2545]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Werfveiligheid Checklist</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm flex-1">
          {activeDoc === 'ipid' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                <strong>IPID Samenvatting:</strong> Dit document geeft een overzicht van de belangrijkste dekkingen en uitsluitingen van de ABR-verzekering (Alle Bouwplaatsrisico's). Dit informatiedocument is adviserend en geeft de kernwaarborgen transparant weer.
              </div>

              <div className="border border-slate-200 rounded-2xl p-4 space-y-3">
                <h4 className="font-bold text-[#0B2545] text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Wat is verzekerd?
                </h4>
                <ul className="space-y-2 text-slate-600 text-xs pl-4 list-disc">
                  <li><strong>Afdeling 1:</strong> Alle plotse en onvoorziene materiële schade aan het bouwwerk en de verwerkte bouwmaterialen (bv. storm, brand, instorting, wateroverlast, montage- en uitvoeringsfouten).</li>
                  <li><strong>Afdeling 2:</strong> Buitencontractuele aansprakelijkheid voor lichamelijke en zaakschade aan derden en foutloze burenhinder conform art. 3.101 BW (o.a. scheuren bij buren door trillingen of bemaling).</li>
                  <li><strong>Herstelkosten &amp; opruiming:</strong> Opruimings- en afbraakkosten, bereddingskosten en erelonen van deskundigen en architecten voor het opmaken van herstelplannen.</li>
                  <li><strong>Optie Bestaande Goederen:</strong> Schade aan het bestaande gebouw van de bouwheer bij renovatie.</li>
                  <li><strong>Optie Diefstal:</strong> Diefstal van reeds ingebouwde of gemonteerde materialen en sanitair.</li>
                  <li><strong>Onderhoudstermijn:</strong> Dekking gedurende 12 of 24 maanden na voorlopige oplevering voor gebreken ontstaan tijdens de bouwfase.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl p-4 space-y-3">
                <h4 className="font-bold text-rose-900 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  Wat is niet verzekerd?
                </h4>
                <ul className="space-y-2 text-slate-600 text-xs pl-4 list-disc">
                  <li>Zuiver esthetische gebreken die de stabiliteit of waterdichtheid niet schaden (bv. lichte verkleuring).</li>
                  <li>Normale slijtage, verwering of corrosie door tijd en elementen.</li>
                  <li>Vertragingsboetes of contractuele schadevergoedingen tussen aannemer en bouwheer.</li>
                  <li>Opzettelijke fouten van de verzekerde partij.</li>
                  <li>Werken uitgevoerd zonder vereiste stedenbouwkundige omgevingsvergunning.</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-2xl p-4 space-y-2 text-xs">
                <h4 className="font-bold text-[#0B2545]">Toepasselijk recht en toezicht</h4>
                <p className="text-slate-500">
                  Belgisch recht is van toepassing. Remaut Verzekeringen is ingeschreven in het FSMA-register (FSMA 044671 A) als onafhankelijk verzekeringsmakelaar onder toezicht van de Autoriteit voor Financiële Diensten en Markten.
                </p>
              </div>
            </div>
          )}

          {activeDoc === 'checklist' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                <strong>Belang van de plaatsbeschrijving:</strong> Voordat de aannemer start met graafwerken, funderingen of bemaling, is een voorafgaande tegensprekelijke plaatsbeschrijving van de buren de beste juridische bescherming voor de bouwheer.
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#0B2545] text-base">Checklist voor de bouwheer:</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>1. Bepaal de invloedszone:</strong> Minstens alle direct aanpalende woningen. Bij diepe kelderbemaling raden we aan ook panden binnen een straal van 15-25m mee te nemen.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>2. Stel een onafhankelijk expert / architect aan:</strong> Een neutrale deskundige bezoekt het buurpand samen met de buurman en legt de bestaande toestand vast.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>3. Tegensprekelijke ondertekening:</strong> Zowel bouwheer als buurman ondertekenen het verslag inclusief gedetailleerde foto’s van bestaande scheurtjes of zettingen.</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>4. Bezorging aan Remaut Verzekeringen:</strong> Wij voegen het rapport toe aan uw ABR-polisdossier zodat Afdeling 2 burenhinder direct waterdicht operationeel is.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDoc === 'preventie' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong>Tips ter voorkoming van werfdiefstal en schadeclaims:</strong>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <span className="font-bold text-[#0B2545] block">Afsluiting van de werf</span>
                  <p className="text-slate-600">Plaats degelijke werfhekkens met slot en duidelijke signalisatie "Verboden toegang voor onbevoegden".</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <span className="font-bold text-[#0B2545] block">Opslag van waardevolle materialen</span>
                  <p className="text-slate-600">Sla koperen leidingen, sanitair en gereedschap op in een afgesloten werfcontainer of wind- en waterdichte ruimte.</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <span className="font-bold text-[#0B2545] block">Weersbewaking bij ruwbouw</span>
                  <p className="text-slate-600">Veranker onafgewerkte spanten en dicht openingen af bij aangekondigde najaarsstormen of felle vorst.</p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                  <span className="font-bold text-[#0B2545] block">Snelle melding bij schade</span>
                  <p className="text-slate-600">Meld elk voorval binnen 8 dagen aan Remaut Verzekeringen en neem voorlopige bewarende maatregelen.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Vragen over uw project? Bel Remaut Verzekeringen op <strong className="text-slate-800">056/50.96.03</strong>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-xl"
            >
              Sluiten
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="px-5 py-2 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#133D72] rounded-xl shadow-sm"
            >
              Offerte Aanvragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
