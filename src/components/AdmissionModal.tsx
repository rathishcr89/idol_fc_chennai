import React, { useState, useEffect } from 'react';
import { CLUB_INFO } from '../data/clubData';
import { ProgramItem, ThemeMode } from '../types';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Calendar, 
  User, 
  Clock,
  ShieldCheck
} from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram?: ProgramItem | null;
  theme: ThemeMode;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  selectedProgram,
  theme
}) => {
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [slot, setSlot] = useState<'morning' | 'evening' | 'weekend'>('evening');
  const [position, setPosition] = useState('All-round / Exploring');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName || !phone || !playerAge) return;
    setIsSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `Hello Coach Anandan & IDOL FC Team!%0A%0AI would like to register for a Free Training Trial:%0A• Player: ${encodeURIComponent(playerName)} (Age: ${encodeURIComponent(playerAge)})%0A• Parent/Guardian: ${encodeURIComponent(parentName || 'Self')}%0A• Contact: ${encodeURIComponent(phone)}%0A• Preferred Slot: ${encodeURIComponent(slot)}%0A• Position: ${encodeURIComponent(position)}%0A• Program: ${encodeURIComponent(selectedProgram?.title || 'General Academy Admission')}%0A• Notes: ${encodeURIComponent(notes || 'None')}%0A%0APlease let me know the reporting date at East Kavangarai Ground. Thank you!`;
    return `https://wa.me/919444014017?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark frosted Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className={`relative w-full max-w-xl rounded-3xl p-6 sm:p-8 backdrop-blur-2xl border shadow-2xl transition-all z-10 my-8 ${
        theme === 'dark'
          ? 'bg-slate-900/95 border-white/15 text-white'
          : 'bg-white/95 border-slate-200 text-slate-900'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close admission modal"
          className="absolute top-5 right-5 p-2 rounded-xl border border-white/10 dark:border-white/10 border-slate-200 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit']">
                  Apply for Free Admission
                </h3>
                <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  100% Free Coaching for Chennai Youth (Under 19)
                </p>
              </div>
            </div>

            {selectedProgram && (
              <div className="mt-3 mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs flex items-center justify-between">
                <span>Selected: <strong className="text-emerald-400">{selectedProgram.title}</strong></span>
                <span className="text-[10px] uppercase font-bold text-emerald-500">Free Trial</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Player Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                    Player Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-950/70 border-white/10 focus:border-emerald-500 text-white'
                          : 'bg-slate-50 border-slate-300 focus:border-emerald-500 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                {/* Player Age */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                    Age / DOB * (Max U19)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="number"
                      required
                      min="5"
                      max="19"
                      placeholder="e.g. 14"
                      value={playerAge}
                      onChange={(e) => setPlayerAge(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-950/70 border-white/10 focus:border-emerald-500 text-white'
                          : 'bg-slate-50 border-slate-300 focus:border-emerald-500 text-slate-900'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Parent / Guardian Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand S."
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-950/70 border-white/10 focus:border-emerald-500 text-white'
                        : 'bg-slate-50 border-slate-300 focus:border-emerald-500 text-slate-900'
                    }`}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                        theme === 'dark'
                          ? 'bg-slate-950/70 border-white/10 focus:border-emerald-500 text-white'
                          : 'bg-slate-50 border-slate-300 focus:border-emerald-500 text-slate-900'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                  Preferred Training Batch
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'morning', label: 'Morning (6-8 AM)', icon: <Clock className="w-3.5 h-3.5" /> },
                    { id: 'evening', label: 'Evening (4:30-6:30 PM)', icon: <Clock className="w-3.5 h-3.5" /> },
                    { id: 'weekend', label: 'Weekend Only', icon: <Calendar className="w-3.5 h-3.5" /> },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSlot(item.id as any)}
                      className={`py-2 px-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        slot === item.id
                          ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20'
                          : theme === 'dark'
                            ? 'bg-slate-950/50 border-white/10 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {item.icon}
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Position */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                  Football Position / Experience
                </label>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-950/70 border-white/10 focus:border-emerald-500 text-white'
                      : 'bg-slate-50 border-slate-300 focus:border-emerald-500 text-slate-900'
                  }`}
                >
                  <option value="All-round / Exploring (Beginner)">All-round / Exploring (Beginner)</option>
                  <option value="Striker / Forward">Striker / Forward</option>
                  <option value="Midfielder (Central / Winger)">Midfielder (Central / Winger)</option>
                  <option value="Defender (Centre-back / Full-back)">Defender (Centre-back / Full-back)</option>
                  <option value="Goalkeeper">Goalkeeper</option>
                  <option value="Competitive Club / School Team Player">Competitive Club / School Team Player</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 opacity-80">
                  Any Questions or Health Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Previous playing experience, boot size, or questions for Coach Anandan"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={`w-full px-4 py-2 text-sm rounded-xl border outline-none resize-none transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-950/70 border-white/10 focus:border-emerald-500 text-white'
                      : 'bg-slate-50 border-slate-300 focus:border-emerald-500 text-slate-900'
                  }`}
                />
              </div>

              {/* Notice */}
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Zero Admission Fees. IDOL FC is 100% free for all enrolled youth.</span>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Free Trial Application</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black font-['Outfit'] mb-2">
              Trial Application Received!
            </h3>
            
            <p className={`text-sm leading-relaxed max-w-md mx-auto mb-6 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Thank you, <strong>{playerName}</strong>! Coach Anandan Thangavelu and the IDOL FC coaching staff at East Kavangarai Ground look forward to meeting you.
            </p>

            <div className={`p-4 rounded-2xl border text-left text-xs space-y-2 mb-6 max-w-md mx-auto ${
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex justify-between">
                <span className="text-slate-400">Player:</span>
                <span className="font-semibold">{playerName} (Age {playerAge})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Assigned Slot:</span>
                <span className="font-semibold capitalize">{slot} Session</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-semibold">East Kavangarai Ground, Chennai</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tuition Cost:</span>
                <span className="font-bold text-emerald-400">100% Free</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp Now</span>
              </a>

              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs border flex items-center justify-center gap-2 transition-all ${
                  theme === 'dark'
                    ? 'border-white/15 bg-white/5 text-emerald-400 hover:bg-white/10'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk: {CLUB_INFO.phone}</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-6 text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Done & Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
