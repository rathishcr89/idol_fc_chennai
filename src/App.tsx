import { useState, useEffect } from 'react';
import { ThemeMode, ProgramItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroBento } from './components/HeroBento';
import { ProgramsSection } from './components/ProgramsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { FounderSection } from './components/FounderSection';
import { PhilosophyBento } from './components/PhilosophyBento';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { CLUB_INFO } from './data/clubData';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('idol_fc_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    }
    return 'dark';
  });

  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  useEffect(() => {
    localStorage.setItem('idol_fc_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenAdmissionWithProgram = (program: ProgramItem) => {
    setSelectedProgram(program);
    setIsAdmissionOpen(true);
  };

  const handleOpenAdmissionGeneral = () => {
    setSelectedProgram(null);
    setIsAdmissionOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-slate-950 text-slate-100' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Subtle radial ambient background glows for dark mode glassmorphism */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[140px] opacity-40 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-emerald-950/40' : 'bg-emerald-200/40'
        }`} />
        <div className={`absolute top-[40%] right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-blue-950/40' : 'bg-blue-200/30'
        }`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-colors duration-500 ${
          theme === 'dark' ? 'bg-amber-950/30' : 'bg-amber-200/30'
        }`} />
      </div>

      {/* Main Navigation */}
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onOpenAdmission={handleOpenAdmissionGeneral} 
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Bento Grid Hero */}
        <HeroBento 
          theme={theme} 
          onOpenAdmission={handleOpenAdmissionGeneral} 
        />

        {/* Programs & Services Grid */}
        <ProgramsSection 
          theme={theme} 
          onSelectProgram={handleOpenAdmissionWithProgram} 
        />

        {/* Weekly Ground Timetable */}
        <ScheduleSection 
          theme={theme} 
          onOpenAdmission={handleOpenAdmissionGeneral} 
        />

        {/* Founder & Managing Director Tribute */}
        <FounderSection 
          theme={theme} 
        />

        {/* Club Philosophy Bento */}
        <PhilosophyBento 
          theme={theme} 
        />

        {/* Community & Parent Testimonials */}
        <TestimonialsSection 
          theme={theme} 
        />

        {/* Ground Location & Contact */}
        <LocationContactSection 
          theme={theme} 
          onOpenAdmission={handleOpenAdmissionGeneral} 
        />

        {/* Frequently Asked Questions */}
        <FaqSection 
          theme={theme} 
        />
      </main>

      {/* Footer */}
      <Footer 
        theme={theme} 
        onOpenAdmission={handleOpenAdmissionGeneral} 
      />

      {/* Free Trial / Admission Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        selectedProgram={selectedProgram}
        theme={theme}
      />

      {/* Floating Action Buttons on Mobile / Quick Desk */}
      <aside aria-label="Quick contact links" className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={CLUB_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          title="Chat with IDOL FC on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <a
          href={`tel:${CLUB_INFO.phoneRaw}`}
          aria-label="Call admission helpline"
          className="p-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          title="Call Admission Helpline"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </div>
  );
}
