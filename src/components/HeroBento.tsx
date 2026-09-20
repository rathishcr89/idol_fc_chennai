import React from 'react';
import { CLUB_INFO, CLUB_STATS, FOUNDER_DATA } from '../data/clubData';
import { ThemeMode } from '../types';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Trophy, 
  ArrowRight,
  Compass
} from 'lucide-react';

interface HeroBentoProps {
  theme: ThemeMode;
  onOpenAdmission: () => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({ theme, onOpenAdmission }) => {
  return (
    <section id="overview" className="relative pt-6 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow elements for Glassmorphic depth */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Main Hero Card (Large - 8 cols on desktop) */}
        <div className={`md:col-span-12 lg:col-span-8 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-xl border transition-all duration-300 shadow-2xl ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-slate-950/90 border-white/10 text-white shadow-emerald-950/20'
            : 'bg-gradient-to-br from-white/90 via-slate-50/80 to-emerald-50/40 border-slate-200/90 text-slate-900 shadow-slate-200/60'
        }`}>
          {/* Subtle Football pitch pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Free Youth Training Academy
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <MapPin className="w-3 h-3" />
              East Kavangarai, Chennai
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Trophy className="w-3 h-3" />
              U19 Developmental Excellence
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-['Outfit'] leading-[1.1] mb-5">
            Empowering Chennai’s Youth with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              World-Class Football
            </span>
          </h1>

          {/* Subtitle with authentic original text */}
          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <strong>IDOL Football Club</strong> is Chennai’s premier free training center, dedicated to nurturing the next generation of football talent. Located in East Kavangarai, we provide structured programs for children and youth under 19 (U19), combining expert coaching with a supportive environment.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={onOpenAdmission}
              id="hero-free-trial-btn"
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-500/30 flex items-center gap-2 transform active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register for Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLUB_INFO.phoneRaw}`}
              id="hero-call-admissions-btn"
              className={`px-5 py-3.5 rounded-xl font-semibold text-sm border flex items-center gap-2 transition-all ${
                theme === 'dark'
                  ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white'
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
              }`}
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {CLUB_INFO.phone}</span>
            </a>

            <a
              href={CLUB_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 rounded-xl font-semibold text-sm border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quick Mission Pill at bottom */}
          <div className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs ${
            theme === 'dark' ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span><strong>Mission:</strong> Discover, develop, and discipline youth talent from grassroots to professional clubs.</span>
            </div>
            <a 
              href={CLUB_INFO.googleSearchUpdates} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-500 dark:text-emerald-400 hover:underline font-semibold"
            >
              View Google Updates & Events &rarr;
            </a>
          </div>
        </div>

        {/* Right Stack (4 cols on desktop) */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-5">
          
          {/* Daily Schedule Card */}
          <div className={`rounded-3xl p-6 backdrop-blur-xl border transition-all duration-300 shadow-xl flex-1 flex flex-col justify-between ${
            theme === 'dark'
              ? 'bg-slate-900/75 border-white/10 text-white'
              : 'bg-white/80 border-slate-200 text-slate-900'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base font-['Outfit']">Daily Training Slots</h3>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      Kavangarai Ground
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Open
                </span>
              </div>

              <div className="space-y-3 mt-4">
                <div className={`p-3.5 rounded-2xl border transition-colors ${
                  theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1 text-emerald-500 dark:text-emerald-400">
                    <span>Morning Session</span>
                    <span className="font-mono">06:00 - 08:00 AM</span>
                  </div>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    Fitness, ball mastery, agility & tactical setups
                  </p>
                </div>

                <div className={`p-3.5 rounded-2xl border transition-colors ${
                  theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1 text-blue-500 dark:text-blue-400">
                    <span>Evening Session</span>
                    <span className="font-mono">04:30 - 06:30 PM</span>
                  </div>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    Match simulations, skill drills & friendly games
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-between text-xs">
              <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>
                Weekend camps available
              </span>
              <a 
                href="#schedule" 
                className="text-emerald-500 dark:text-emerald-400 font-semibold hover:underline"
              >
                Full Timetable &rarr;
              </a>
            </div>
          </div>

          {/* Founder Quick Spotlight Card */}
          <div className={`rounded-3xl p-6 backdrop-blur-xl border transition-all duration-300 shadow-xl ${
            theme === 'dark'
              ? 'bg-slate-900/75 border-white/10 text-white'
              : 'bg-white/80 border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center gap-3.5 mb-3">
              <img 
                src={FOUNDER_DATA.image} 
                alt={FOUNDER_DATA.name}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-emerald-500/40 shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80";
                }}
              />
              <div>
                <h4 className="font-bold text-sm font-['Outfit']">{FOUNDER_DATA.name}</h4>
                <p className="text-xs text-emerald-500 dark:text-emerald-400 font-medium">
                  {FOUNDER_DATA.role}
                </p>
                <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {FOUNDER_DATA.formerRole}
                </p>
              </div>
            </div>
            <blockquote className={`text-xs italic leading-relaxed border-l-2 border-emerald-500/50 pl-3 my-2 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              "{FOUNDER_DATA.quote}"
            </blockquote>
            <a 
              href="#founder" 
              className="inline-block mt-2 text-xs font-semibold text-emerald-500 dark:text-emerald-400 hover:underline"
            >
              Read Founder’s Story &rarr;
            </a>
          </div>

        </div>

        {/* 4 Responsive Bento Stats Cards below */}
        {CLUB_STATS.map((stat, idx) => {
          const icons = [
            <ShieldCheck key="sc" className="w-5 h-5 text-emerald-400" />,
            <Users key="us" className="w-5 h-5 text-blue-400" />,
            <Clock key="cl" className="w-5 h-5 text-amber-400" />,
            <Trophy key="tr" className="w-5 h-5 text-purple-400" />,
          ];

          return (
            <div
              key={stat.label}
              className={`col-span-1 sm:col-span-6 lg:col-span-3 rounded-2xl p-5 backdrop-blur-xl border transition-all duration-300 hover:-translate-y-1 shadow-lg ${
                theme === 'dark'
                  ? 'bg-slate-900/60 border-white/10 hover:border-emerald-500/40 text-white'
                  : 'bg-white/70 border-slate-200 hover:border-emerald-500/40 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${
                  theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-slate-100 border border-slate-200'
                }`}>
                  {icons[idx]}
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  Verified
                </span>
              </div>
              <div className="text-2xl font-black font-['Outfit'] tracking-tight mb-1 text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                {stat.label}
              </div>
              <div className={`text-[11px] leading-snug ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                {stat.detail}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
