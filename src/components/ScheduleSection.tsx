import React, { useState } from 'react';
import { SCHEDULE_DATA, CLUB_INFO } from '../data/clubData';
import { ThemeMode } from '../types';
import { Calendar, Clock, Sun, Moon, Users, CheckCircle, Bell } from 'lucide-react';

interface ScheduleSectionProps {
  theme: ThemeMode;
  onOpenAdmission: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ theme, onOpenAdmission }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const activeDay = SCHEDULE_DATA[selectedDayIndex];

  return (
    <section id="schedule" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>Training Timetable</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] mb-4">
          Weekly Ground Schedule
        </h2>
        <p className={`text-base leading-relaxed ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          We operate structured double training sessions every single day at East Kavangarai Ground. Select a day to view timings, tactical focus, and target age groups.
        </p>
      </div>

      {/* Day Selector Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {SCHEDULE_DATA.map((item, idx) => (
          <button
            key={item.day}
            onClick={() => setSelectedDayIndex(idx)}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedDayIndex === idx
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                : theme === 'dark'
                  ? 'bg-slate-900/60 border border-white/10 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {item.day}
          </button>
        ))}
      </div>

      {/* Active Day Slots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Morning Slot Card */}
        <div className={`rounded-3xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-300 shadow-xl relative overflow-hidden ${
          theme === 'dark'
            ? 'bg-slate-900/70 border-white/10 text-white'
            : 'bg-white/85 border-slate-200 text-slate-900'
        }`}>
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl -z-10" />
          
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/20">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
                  Morning Batch
                </span>
                <h3 className="text-xl font-bold font-['Outfit']">
                  {activeDay.morningSlot.time}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10">
              {activeDay.day}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Tactical & Technical Focus
              </div>
              <p className="text-base font-semibold text-emerald-400">
                {activeDay.morningSlot.focus}
              </p>
            </div>

            <div className={`p-4 rounded-2xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-semibold mb-1 text-slate-400">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Target Squad:</span>
              </div>
              <p className="text-sm font-medium">
                {activeDay.morningSlot.targetGroup}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Reporting time: 10 minutes prior at pitch</span>
            </div>
          </div>
        </div>

        {/* Evening Slot Card */}
        <div className={`rounded-3xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-300 shadow-xl relative overflow-hidden ${
          theme === 'dark'
            ? 'bg-slate-900/70 border-white/10 text-white'
            : 'bg-white/85 border-slate-200 text-slate-900'
        }`}>
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl -z-10" />

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/20">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400">
                  Evening Batch
                </span>
                <h3 className="text-xl font-bold font-['Outfit']">
                  {activeDay.eveningSlot.time}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10">
              {activeDay.day}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Tactical & Technical Focus
              </div>
              <p className="text-base font-semibold text-blue-400">
                {activeDay.eveningSlot.focus}
              </p>
            </div>

            <div className={`p-4 rounded-2xl border ${
              theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center gap-2 text-xs font-semibold mb-1 text-slate-400">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>Target Squad:</span>
              </div>
              <p className="text-sm font-medium">
                {activeDay.eveningSlot.targetGroup}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>Hydration and shin-guards mandatory</span>
            </div>
          </div>
        </div>

      </div>

      {/* Schedule helper banner */}
      <div className={`mt-8 max-w-5xl mx-auto p-5 rounded-2xl border backdrop-blur-md flex flex-wrap items-center justify-between gap-4 ${
        theme === 'dark'
          ? 'bg-slate-900/50 border-white/10 text-slate-300'
          : 'bg-white border-slate-200 text-slate-700'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
            <Bell className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm">
            Interested in joining a morning or evening batch? New evaluations take place every Saturday.
          </span>
        </div>
        <button
          onClick={onOpenAdmission}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-md transition-all cursor-pointer"
        >
          Book Evaluation Slot
        </button>
      </div>
    </section>
  );
};
