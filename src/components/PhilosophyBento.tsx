import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/clubData';
import { ThemeMode } from '../types';
import { Target, Heart, Zap, Shield, Sparkles } from 'lucide-react';

interface PhilosophyBentoProps {
  theme: ThemeMode;
}

export const PhilosophyBento: React.FC<PhilosophyBentoProps> = ({ theme }) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Heart': return <Heart className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      default: return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <section id="philosophy" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Ethos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] mb-4">
          The IDOL FC Philosophy
        </h2>
        <p className={`text-base leading-relaxed ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          At IDOL FC, football is more than just a game—it is a teacher of life. While we take pride in developing technically gifted players, our ultimate goal is to build strong character: teamwork, respect, humility, and resilience.
        </p>
      </div>

      {/* 4 Bento Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PHILOSOPHY_PILLARS.map((pillar) => (
          <div
            key={pillar.title}
            className={`rounded-3xl p-7 backdrop-blur-xl border transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 shadow-lg ${
              theme === 'dark'
                ? 'bg-slate-900/65 border-white/10 hover:border-emerald-500/30 text-white'
                : 'bg-white/80 border-slate-200 hover:border-emerald-500/30 text-slate-900'
            }`}
          >
            {/* Top gradient accent */}
            <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${pillar.color} rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-500`} />

            <div className="flex items-start gap-4">
              <div className={`p-3.5 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-slate-50 border-slate-200'
              } ${pillar.accent} shrink-0`}>
                {getIcon(pillar.icon)}
              </div>

              <div>
                <h3 className="text-xl font-bold font-['Outfit'] mb-2 group-hover:text-emerald-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {pillar.desc}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 dark:border-white/5 border-slate-100 flex items-center justify-between text-xs">
              <span className={`font-semibold ${pillar.accent}`}>
                Grassroots Standard
              </span>
              <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>
                East Kavangarai
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom statement banner */}
      <div className={`mt-8 p-6 rounded-2xl text-center border backdrop-blur-md ${
        theme === 'dark' 
          ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-200' 
          : 'bg-emerald-50 border-emerald-200 text-emerald-900'
      }`}>
        <p className="text-sm sm:text-base font-medium">
          "Whether your child is taking their very first kick or aiming for a professional career, we provide the perfect pathway to reach their full potential."
        </p>
      </div>
    </section>
  );
};
