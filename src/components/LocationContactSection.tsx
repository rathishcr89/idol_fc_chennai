import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { ThemeMode } from '../types';
import { 
  Phone, 
  MapPin, 
  Compass, 
  MessageCircle, 
  ExternalLink, 
  Instagram, 
  Facebook, 
  Clock, 
  Sparkles,
  Navigation
} from 'lucide-react';

interface LocationContactSectionProps {
  theme: ThemeMode;
  onOpenAdmission: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  theme,
  onOpenAdmission
}) => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Location & Admissions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit'] mb-4">
          Visit Us at East Kavangarai Ground
        </h2>
        <p className={`text-base leading-relaxed ${
          theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Have questions about admission, trial evaluations, or scheduling? Reach out to our coaching staff or visit our home ground in Chennai directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Contact Cards Stack (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          {/* Direct Call & Admission Card */}
          <div className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl border transition-all duration-300 shadow-xl ${
            theme === 'dark'
              ? 'bg-slate-900/75 border-white/10 text-white'
              : 'bg-white/85 border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                  Admission Helpline
                </span>
                <h3 className="text-xl font-bold font-['Outfit']">
                  Direct Phone & WhatsApp
                </h3>
              </div>
            </div>

            <p className={`text-xs leading-relaxed mb-5 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              For any admission-related inquiries, trial slots, or academy information, call our management team directly or text us on WhatsApp.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-400 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Call {CLUB_INFO.phone}</span>
                </div>
                <span className="text-xs opacity-80 uppercase tracking-wider">Dial Now</span>
              </a>

              <a
                href={CLUB_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-2xl font-bold text-sm bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </div>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Address & Ground Timings Card */}
          <div className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl border transition-all duration-300 shadow-xl ${
            theme === 'dark'
              ? 'bg-slate-900/75 border-white/10 text-white'
              : 'bg-white/85 border-slate-200 text-slate-900'
          }`}>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-2xl bg-blue-500/15 text-blue-400 border border-blue-500/25">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400">
                  Home Ground
                </span>
                <h3 className="text-xl font-bold font-['Outfit']">
                  East Kavangarai, Chennai
                </h3>
              </div>
            </div>

            <p className={`text-xs sm:text-sm font-medium leading-relaxed mb-4 ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
            }`}>
              {CLUB_INFO.address}
            </p>

            <div className={`p-3.5 rounded-2xl border text-xs space-y-2 mb-5 ${
              theme === 'dark' ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Morning session: 06:00 AM – 08:00 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Evening session: 04:30 PM – 06:30 PM</span>
              </div>
            </div>

            <a
              href={CLUB_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all ${
                theme === 'dark'
                  ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white'
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
              }`}
            >
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Social Channels Glass Card */}
          <div className={`rounded-3xl p-5 backdrop-blur-xl border flex items-center justify-between gap-3 shadow-lg ${
            theme === 'dark'
              ? 'bg-slate-900/60 border-white/10 text-white'
              : 'bg-white/80 border-slate-200 text-slate-800'
          }`}>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Follow IDOL FC:
            </span>

            <div className="flex items-center gap-2">
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-pink-500/20 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 transition-colors"
                title="Instagram @idolfc10"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                title="Facebook IDOL FC"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.googleSearchUpdates}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                title="Google Updates & Events"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Map & Trial Registration Card (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          
          {/* Interactive Map Visualizer Card */}
          <div className={`rounded-3xl overflow-hidden backdrop-blur-xl border transition-all duration-300 shadow-xl flex-1 flex flex-col ${
            theme === 'dark'
              ? 'bg-slate-900/75 border-white/10 text-white'
              : 'bg-white/85 border-slate-200 text-slate-900'
          }`}>
            <div className="p-6 pb-4 flex items-center justify-between border-b border-white/10 dark:border-white/10 border-slate-200">
              <div>
                <h3 className="font-bold text-lg font-['Outfit']">East Kavangarai Training Pitch</h3>
                <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Chennai 600 066 • Tamil Nadu
                </p>
              </div>

              <a
                href={CLUB_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-900">
              <iframe
                title="IDOL Football Club Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.2530113149594!2d80.17983637508053!3d13.146445587185073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.146445587185073!3m3!1m2!1s0x3a5263625f5cfd7f%3A0xb351fe2ba505da1c!2sEast%20Kavangarai%2C%20Puzhal%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Floating overlay chip */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold">IDOL FC Home Ground</span>
                </div>
                <a 
                  href={CLUB_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Open in App &rarr;
                </a>
              </div>
            </div>

            {/* Quick Admission CTA Banner inside card */}
            <div className="p-6 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Ready to start your football journey?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Evaluations and free trials are open for youth under 19.
                </p>
              </div>
              <button
                onClick={onOpenAdmission}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-500/25 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Submit Free Trial Application</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
