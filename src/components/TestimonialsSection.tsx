import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { ThemeMode } from '../types';
import { Star, ExternalLink, CheckCircle2, MessageSquarePlus, Trophy, Users, ShieldCheck } from 'lucide-react';

interface TestimonialsSectionProps {
  theme: ThemeMode;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ theme }) => {
  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/25 mb-3">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
          <span>Verified Google Reviews</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] mb-4">
          Community Trust & Google Reviews
        </h2>
        <p className={`text-base leading-relaxed ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Real ratings and community feedback from parents, youth athletes, and football enthusiasts at our East Kavangarai academy.
        </p>
      </div>

      {/* Main Google Rating Showcase Card */}
      <div className={`rounded-3xl p-6 sm:p-10 backdrop-blur-xl border transition-all duration-300 shadow-2xl mb-8 ${
        theme === 'dark'
          ? 'bg-slate-900/70 border-white/10 text-white'
          : 'bg-white/90 border-slate-200 text-slate-900'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Rating Badge */}
          <div className="lg:col-span-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 pb-8 lg:pb-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-bold text-sm tracking-wide text-slate-400 uppercase">
                Google Business Rating
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                Official Listing
              </span>
            </div>

            <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-3">
              <span className="text-6xl sm:text-7xl font-black font-['Outfit'] tracking-tight text-emerald-400">
                {CLUB_INFO.googleRating}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-slate-400">out of 5.0</span>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < 4 
                          ? 'fill-amber-400 text-amber-400' 
                          : 'fill-amber-400/80 text-amber-400'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className={`text-sm mb-6 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Based on <strong>{CLUB_INFO.googleReviewCount} genuine reviews</strong> from players, guardians, and visitors on Google Maps.
            </p>

            {/* Direct Google Review Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={CLUB_INFO.googleReviewsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <span>Read Reviews on Google</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.googleReviewsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm border transition-all cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 hover:bg-white/5 text-slate-200'
                    : 'border-slate-300 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <MessageSquarePlus className="w-4 h-4 text-emerald-400" />
                <span>Write a Review</span>
              </a>
            </div>
          </div>

          {/* Right: Key Verified Highlights Reported on Google */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold font-['Outfit'] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>What People Value Most About IDOL FC</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Highlight 1 */}
              <div className={`p-4 rounded-2xl border transition-colors ${
                theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-['Outfit']">Dedicated Coaching</h4>
                </div>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Licensed coaches offering individualized guidance, aerobic fitness, and tactical positional play.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className={`p-4 rounded-2xl border transition-colors ${
                theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-['Outfit']">100% Free Academy</h4>
                </div>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Zero tuition fees or hidden costs, opening real football training to every aspiring child in Chennai.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className={`p-4 rounded-2xl border transition-colors ${
                theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-['Outfit']">Character & Discipline</h4>
                </div>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Mentorship instilling sportsmanship, punctuality, peer respect, and healthy academic balance.
                </p>
              </div>

              {/* Highlight 4 */}
              <div className={`p-4 rounded-2xl border transition-colors ${
                theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Star className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm font-['Outfit']">U10 to U19 Pathways</h4>
                </div>
                <p className={`text-xs leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Developmental training starting from grassroots ball familiarity up to district and state match exposure.
                </p>
              </div>
            </div>

            {/* Direct Link Banner */}
            <div className={`p-3.5 rounded-2xl flex items-center justify-between gap-3 text-xs border ${
              theme === 'dark'
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}>
              <span>View live ratings, photos, and feedback on Google Maps</span>
              <a
                href={CLUB_INFO.googleReviewsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline shrink-0 hover:text-emerald-400 flex items-center gap-1"
              >
                <span>Open Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
