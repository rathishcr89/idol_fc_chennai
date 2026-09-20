import React, { useState } from 'react';
import { FAQS } from '../data/clubData';
import { ThemeMode } from '../types';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  theme: ThemeMode;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ theme }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight font-['Outfit'] mb-3">
          Everything You Need to Know
        </h2>
        <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          Common questions from parents, guardians, and youth athletes joining our Chennai academy.
        </p>
      </div>

      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl backdrop-blur-xl border transition-all duration-200 overflow-hidden ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 hover:border-white/20'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-bold text-sm sm:text-base font-['Outfit']">
                  {faq.question}
                </span>
                <div className={`p-1.5 rounded-lg border transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 bg-emerald-500 text-white border-emerald-500' : 'border-white/10 dark:border-white/10 border-slate-200 text-slate-400'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                  theme === 'dark' ? 'border-white/5 text-slate-300' : 'border-slate-100 text-slate-600'
                }`}>
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
