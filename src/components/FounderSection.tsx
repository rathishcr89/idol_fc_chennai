import React from 'react';
import { FOUNDER_DATA, CLUB_INFO } from '../data/clubData';
import { ThemeMode } from '../types';
import { Quote, Award, Sparkles, Phone, Compass, Shield } from 'lucide-react';

interface FounderSectionProps {
  theme: ThemeMode;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ theme }) => {
  return (
    <section id="founder" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className={`rounded-3xl p-6 sm:p-10 lg:p-12 backdrop-blur-2xl border transition-all duration-300 shadow-2xl relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border-white/10 text-white'
          : 'bg-gradient-to-br from-white/95 via-slate-50/90 to-emerald-50/50 border-slate-200/90 text-slate-900'
      }`}>
        {/* Subtle accent corner glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Founder Photo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Outer frame styling */}
              <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 shadow-2xl shadow-emerald-500/20">
                <img 
                  src={FOUNDER_DATA.image} 
                  alt={FOUNDER_DATA.name}
                  className="w-full h-80 sm:h-96 object-cover object-top rounded-[22px] bg-slate-900"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>

              {/* Float Glass Badge */}
              <div className={`absolute -bottom-4 -right-2 sm:right-4 p-3.5 rounded-2xl backdrop-blur-xl border shadow-xl flex items-center gap-3 ${
                theme === 'dark' 
                  ? 'bg-slate-900/90 border-white/15 text-white' 
                  : 'bg-white/90 border-slate-200 text-slate-900'
              }`}>
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-['Outfit']">Grassroots Pioneer</div>
                  <div className="text-[11px] text-emerald-500 dark:text-emerald-400 font-medium">Chennai, Tamil Nadu</div>
                </div>
              </div>
            </div>

            {/* Direct Connect button under photo */}
            <div className="mt-8 flex items-center gap-3 w-full max-w-sm">
              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Speak with Coach Anandan</span>
              </a>
            </div>
          </div>

          {/* Founder Bio & Vision Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Leadership & Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] tracking-tight mb-2">
              Meet Our Founder
            </h2>
            
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-lg font-bold text-emerald-500 dark:text-emerald-400">
                {FOUNDER_DATA.name}
              </span>
              <span className="opacity-40">•</span>
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                {FOUNDER_DATA.role}
              </span>
              <span className="opacity-40">•</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
                {FOUNDER_DATA.formerRole}
              </span>
            </div>

            {/* Quote Box with Glass styling */}
            <div className={`p-5 rounded-2xl border mb-6 relative ${
              theme === 'dark'
                ? 'bg-white/5 border-white/10'
                : 'bg-emerald-50/70 border-emerald-200'
            }`}>
              <Quote className="w-8 h-8 text-emerald-500/30 absolute -top-3 -left-3 rotate-180" />
              <blockquote className="text-sm sm:text-base italic font-medium leading-relaxed pl-4">
                "{FOUNDER_DATA.quote}"
              </blockquote>
              <div className="text-right text-xs font-bold text-emerald-500 dark:text-emerald-400 mt-2">
                — {FOUNDER_DATA.name}
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3 mb-6">
              {FOUNDER_DATA.bio.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 3 Pillars Bento sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FOUNDER_DATA.pillars.map((pillar, i) => (
                <div 
                  key={i} 
                  className={`p-3.5 rounded-2xl border transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-900/60 border-white/5 hover:border-emerald-500/30'
                      : 'bg-white border-slate-200 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-emerald-500 dark:text-emerald-400 font-bold text-xs">
                    {i === 0 ? <Compass className="w-3.5 h-3.5" /> : i === 1 ? <Sparkles className="w-3.5 h-3.5" /> : <Shield className="w-3.5 h-3.5" />}
                    <span>{pillar.title}</span>
                  </div>
                  <p className={`text-[11px] leading-snug ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
