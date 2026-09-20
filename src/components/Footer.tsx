import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { ThemeMode } from '../types';
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  Compass, 
  ArrowUp,
  Heart,
  Star
} from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  onOpenAdmission: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onOpenAdmission }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`w-full border-t transition-colors duration-300 relative ${
      theme === 'dark'
        ? 'bg-slate-950 border-white/10 text-slate-300'
        : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-emerald-500 to-amber-400">
                <img 
                  src="./images/logo.jpg" 
                  alt="IDOL FC Crest" 
                  className="w-full h-full object-cover rounded-[14px] bg-slate-900"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit'] block leading-none">
                  IDOL FOOTBALL CLUB
                </span>
                <span className="text-xs text-emerald-400 font-semibold tracking-wide">
                  Chennai • 100% Free Youth Training
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Chennai’s premier free training center, dedicated to discovering, developing, and disciplining under-19 football talent across Tamil Nadu.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:text-pink-400 transition-colors"
                title="Instagram @idolfc10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.googleReviewsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:text-amber-400 transition-colors"
                title="Google Reviews (4.7★)"
              >
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
              </a>
              <a
                href={CLUB_INFO.googleSearchUpdates}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:text-amber-400 transition-colors"
                title="Google Updates & Events"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-emerald-400 transition-colors">Timetable & Batches</a>
              </li>
              <li>
                <a href="#founder" className="hover:text-emerald-400 transition-colors">Founder & Vision</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-emerald-400 transition-colors">Club Philosophy</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">Reviews & Ratings (4.7★)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Ground Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ground & Admissions
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Kanchi Arul Nagar, 2nd Street, East Kavangarai, Chennai 600 066</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CLUB_INFO.phoneRaw}`} className="text-white hover:text-emerald-400 font-semibold">
                  {CLUB_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmission}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md hover:from-emerald-500 hover:to-teal-400 transition-all cursor-pointer"
              >
                Register for Free Trial Evaluation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 IDOL Football Club. All rights reserved. Chennai, Tamil Nadu.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Building leaders with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> in Chennai
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
