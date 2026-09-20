export type ThemeMode = 'dark' | 'light';

export interface ProgramItem {
  id: string;
  title: string;
  category: 'daily' | 'weekend' | 'camp' | 'elite';
  ageGroup: string;
  timings: string;
  description: string;
  highlights: string[];
  badge?: string;
  iconName: string;
  image: string;
}

export interface ScheduleSlot {
  day: string;
  morningSlot: {
    time: string;
    focus: string;
    targetGroup: string;
  };
  eveningSlot: {
    time: string;
    focus: string;
    targetGroup: string;
  };
}

export interface ClubStat {
  label: string;
  value: string;
  detail: string;
  icon: string;
}

export interface AdmissionFormData {
  playerName: string;
  playerAge: number | string;
  parentName: string;
  phone: string;
  preferredSlot: 'morning' | 'evening' | 'weekend';
  experienceLevel: 'beginner' | 'intermediate' | 'competitive';
  notes?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  badge: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
