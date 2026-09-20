import React, { useState } from 'react';
import { PROGRAMS } from '../data/clubData';
import { ProgramItem, ThemeMode } from '../types';
import { 
  Flame, 
  Swords, 
  Sun, 
  Trophy, 
  HeartHandshake, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Filter
} from 'lucide-react';

interface ProgramsSectionProps {
  theme: ThemeMode;
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ theme, onSelectProgram }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'daily', label: 'Daily Training' },
    { id: 'weekend', label: 'Weekend Matches' },
    { id: 'camp', label: 'Summer Camp' },
    { id: 'elite', label: 'Friendly Matches' },
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Swords': return <Swords className="w-5 h-5 text-emerald-400" />;
      case 'Sun': return <Sun className="w-5 h-5 text-yellow-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-blue-400" />;
      default: return <HeartHandshake className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>Curriculum & Services</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] mb-4">
          Structured Pathways for Every Athlete
        </h2>
        <p className={`text-base leading-relaxed ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          From fundamental grassroots skills to competitive under-19 match exposure, our training services bridge the gap between street football passion and professional discipline.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <div className={`hidden sm:flex items-center gap-1.5 text-xs font-semibold mr-2 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                  : theme === 'dark'
                    ? 'bg-slate-900/60 border border-white/10 text-slate-300 hover:bg-slate-800'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className={`group rounded-3xl overflow-hidden backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl ${
              theme === 'dark'
                ? 'bg-slate-900/70 border-white/10 hover:border-emerald-500/40 text-white hover:shadow-emerald-950/20'
                : 'bg-white/85 border-slate-200 hover:border-emerald-500/40 text-slate-900 hover:shadow-emerald-100'
            }`}
          >
            {/* Image Header with Badge Overlay */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-950">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/90 text-white shadow-md backdrop-blur-md">
                  {program.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-emerald-300 border border-white/10 backdrop-blur-md">
                  100% Free
                </span>
              </div>

              {/* Icon Bubble */}
              <div className="absolute -bottom-4 right-6 w-12 h-12 rounded-2xl bg-slate-900 border border-white/15 flex items-center justify-center shadow-lg">
                {getIcon(program.iconName)}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-['Outfit'] mb-2 group-hover:text-emerald-400 transition-colors">
                  {program.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {program.description}
                </p>

                {/* Info Pills */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                    theme === 'dark' ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate font-medium">{program.ageGroup}</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                    theme === 'dark' ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate font-medium">Daily Slots</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-6">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200">
                <button
                  onClick={() => onSelectProgram(program)}
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-emerald-500 cursor-pointer"
                >
                  <span>Enquire for this Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
