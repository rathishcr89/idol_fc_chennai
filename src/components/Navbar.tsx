import React, { useState } from 'react';
import { CLUB_INFO } from '../data/clubData';
import { ThemeMode } from '../types';
import { 
  Sun, 
  Moon, 
  Phone, 
  Menu, 
  X, 
  Sparkles,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenAdmission: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenAdmission
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Programs', href: '#programs' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Founder & Vision', href: '#founder' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Top micro announcement bar */}
      <div className={`w-full py-1.5 px-4 text-xs font-medium text-center border-b transition-colors ${
        theme === 'dark'
          ? 'bg-slate-900/90 text-slate-300 border-white/5'
          : 'bg-emerald-900/95 text-emerald-100 border-emerald-800'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">
              Admissions Open 2026: <strong>100% Free Coaching</strong> for U19 Boys & Youth in Chennai
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <a 
              href={`tel:${CLUB_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Admissions: {CLUB_INFO.phone}</span>
            </a>
            <span className="opacity-30">|</span>
            <a 
              href={CLUB_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>East Kavangarai, Chennai</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div className={`w-full backdrop-blur-xl transition-all duration-300 border-b ${
        theme === 'dark' 
          ? 'bg-slate-950/80 border-white/10 text-white shadow-2xl shadow-black/40' 
          : 'bg-white/80 border-slate-200/80 text-slate-800 shadow-md shadow-slate-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#overview"
            onClick={(e) => handleLinkClick(e, '#overview')}
            className="flex items-center gap-3.5 group text-left"
            id="nav-brand-logo"
          >
            <div className="relative">
              <div className="w-13 h-13 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-emerald-500 via-emerald-400 to-amber-400 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/logo.jpg" 
                  alt="IDOL Football Club Crest" 
                  className="w-full h-full object-cover rounded-[14px] bg-slate-900"
                  onError={(e) => {
                    // Fallback to placeholder if network image delay
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=120&q=80";
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] text-white font-bold ring-2 ring-slate-950">
                ✓
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-xl leading-none font-['Outfit']">
                  IDOL FC
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Chennai
                </span>
              </div>
              <span className={`text-xs mt-1 tracking-normal font-medium ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Free Youth Football Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              id="theme-toggle-btn"
              className={`p-2.5 rounded-xl transition-all duration-200 border cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-white/10 text-amber-300 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Quick Call Button */}
            <a
              href={`tel:${CLUB_INFO.phoneRaw}`}
              id="header-call-btn"
              className={`p-2.5 rounded-xl transition-all duration-200 border flex items-center justify-center ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-white/10 text-emerald-400 hover:bg-slate-800'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
              }`}
              title="Call Academy Desk"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* CTA Button */}
            <button
              onClick={onOpenAdmission}
              id="header-admission-cta"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/25 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Trial</span>
            </button>
          </div>

          {/* Mobile Hamburger & Theme toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-white/10 text-amber-300'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-white/10 text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Glassmorphic Card */}
        {mobileMenuOpen && (
          <div className={`lg:hidden px-4 pt-2 pb-6 border-t ${
            theme === 'dark'
              ? 'bg-slate-950/95 border-white/10 text-white'
              : 'bg-white/95 border-slate-200 text-slate-900'
          } backdrop-blur-2xl transition-all duration-300`}>
            <div className="flex flex-col gap-1.5 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    theme === 'dark'
                      ? 'text-slate-200 hover:bg-white/5 active:bg-white/10'
                      : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmission();
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-center text-white bg-gradient-to-r from-emerald-600 to-teal-500 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Trial (U19)</span>
                </button>

                <a
                  href={`tel:${CLUB_INFO.phoneRaw}`}
                  className={`w-full py-2.5 rounded-xl font-medium text-center border flex items-center justify-center gap-2 ${
                    theme === 'dark'
                      ? 'border-white/10 bg-slate-900 text-emerald-400'
                      : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Admission: {CLUB_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
