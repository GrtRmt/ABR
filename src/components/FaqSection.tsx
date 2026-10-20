import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { ABR_FAQS } from '../data/abrData';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data/businessInfo';
import { ScrollReveal } from './ScrollReveal';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Combine ABR FAQs with relevant general broker questions
  const allFaqs = [
    ...ABR_FAQS.map((f) => ({ ...f, isAbr: true })),
    ...FAQ_ITEMS.map((f) => ({
      category: 'makelaar',
      question: f.question,
      answer: f.answer,
      isAbr: false,
    })),
  ];

  const filteredFaqs = allFaqs.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-[#0B2545] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
              Vragen &amp; Antwoorden
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Veelgestelde vragen over de ABR-verzekering
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Duidelijke antwoorden over wettelijke verplichtingen, premies, franchise, plaatsbeschrijvingen en schadeloosstelling.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Alle Vragen' },
            { id: 'basis', label: 'Basis & Wetgeving' },
            { id: 'dekking', label: 'Waarborgen & Uitsluitingen' },
            { id: 'kosten', label: 'Premies & Franchise' },
            { id: 'procedure', label: 'Plaatsbeschrijving & Schade' },
            { id: 'makelaar', label: 'Over Remaut Makelaar' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0B2545] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0B2545]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-[#0B2545]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Helper */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center sm:flex sm:items-center sm:justify-between gap-4 shadow-sm">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="text-sm font-bold text-[#0B2545]">
              Heeft u een specifieke vraag over uw bouwplannen?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Remaut Verzekeringen beantwoordt uw vraag persoonlijk via telefoon of WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-end">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0B2545] text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>056/50.96.03</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
