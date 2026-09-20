import { ProgramItem, ScheduleSlot, ClubStat, TestimonialItem, FaqItem } from '../types';

export const CLUB_INFO = {
  name: "IDOL Football Club",
  shortName: "IDOL FC",
  tagline: "Chennai's Premier Free Youth Football Academy",
  subtitle: "Nurturing grassroots passion into disciplined professional excellence.",
  foundedYear: "2012",
  phone: "+91 94440 14017",
  phoneRaw: "+919444014017",
  whatsappUrl: "https://wa.me/919444014017?text=Hello%20IDOL%20FC%20Admin,%20I%20would%20like%20to%20inquire%20about%20free%20admission%20and%20trials%20for%20my%20child.",
  address: "IDOL FC, Kanchi Arul Nagar, 2nd Street, East Kavangarai, Chennai 600 066, Tamil Nadu, India",
  googleMapsUrl: "https://maps.app.goo.gl/ZVFKaPvDawAPpduH7",
  googleReviewsShareUrl: "https://share.google/fibhHDvcv1A68YxxG",
  googleRating: 4.7,
  googleReviewCount: "43+",
  googleSearchUpdates: "https://www.google.com/search?q=IDOL+FOOTBALL+CLUB+East+Kavangarai&rlz=1C1RXQR_enIN995IN995&oq=idol&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBwgCEAAYjwIyBwgDEAAYjwIyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDzSAQc3NzJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8&sei=9Zg-asSjE52f4-EPttC2qAk#lpstate=pid:-1",
  instagramUrl: "https://www.instagram.com/idolfc10",
  facebookUrl: "https://www.facebook.com/profile.php?id=100067028260486",
  ageLimit: "Under 19 (U19)",
  cost: "100% Free Training & Development",
  trainingGround: "East Kavangarai Ground, Chennai",
};

export const CLUB_STATS: ClubStat[] = [
  {
    label: "Tuition Cost",
    value: "100% Free",
    detail: "Zero fees for all deserving young talent",
    icon: "ShieldCheck",
  },
  {
    label: "Age Group",
    value: "U10 - U19",
    detail: "Structured age-specific developmental batches",
    icon: "Users",
  },
  {
    label: "Daily Sessions",
    value: "2 Batches",
    detail: "Dedicated morning (6-8 AM) & evening (4:30-6:30 PM)",
    icon: "Clock",
  },
  {
    label: "Youth Developed",
    value: "500+",
    detail: "Transformed from grassroots to competitive clubs",
    icon: "Trophy",
  },
];

export const FOUNDER_DATA = {
  name: "Anandan Thangavelu",
  role: "Founder & Managing Director",
  formerRole: "Former Professional Footballer",
  quote: "Our goal is not just to build great football players, but to shape disciplined, confident, and resilient leaders for tomorrow.",
  image: "./images/founder.jpeg",
  bio: [
    "Anandan Thangavelu launched IDOL FC with a singular, unwavering vision: to transform Chennai into a powerhouse of Indian football. Having competed on the pitch himself, he spent over a decade witnessing the immense, untapped raw talent thriving across Tamil Nadu's youth.",
    "Driven by the conviction that every aspiring player deserves world-class guidance regardless of financial background, he established IDOL FC as a completely free training center. Under his personal mentorship, the academy has grown into one of Chennai's most respected youth development hubs, actively preparing under-19 athletes for professional trials, state championships, and club academies."
  ],
  pillars: [
    {
      title: "Grassroots Access",
      desc: "Democratizing elite football training so no child in Chennai is held back by financial barriers."
    },
    {
      title: "Technical Mastery",
      desc: "Modern ball mastery, spatial awareness, and cognitive decision-making drills."
    },
    {
      title: "Character First",
      desc: "Instilling deep respect, humility, punctuality, and unwavering mental fortitude."
    }
  ]
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: "daily-training",
    title: "Daily Intensive Football Training",
    category: "daily",
    ageGroup: "Ages 7 – 19",
    timings: "Morning (06:00 - 08:00 AM) & Evening (04:30 - 06:30 PM)",
    description: "Daily regimented training focusing on close ball control, passing accuracy, agility, first touch, stamina, and match positional intelligence.",
    highlights: [
      "Dynamic warmups & injury prevention",
      "Dribbling, shielding & quick combinations",
      "Small-sided tactical games (4v4 / 7v7)",
      "Daily fitness and speed conditioning"
    ],
    badge: "Core Program",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "weekend-matches",
    title: "Weekend Match Simulations & Scrimmages",
    category: "weekend",
    ageGroup: "Ages 10 – 19",
    timings: "Saturdays & Sundays (06:30 - 09:30 AM)",
    description: "Full-pitch 11-a-side matches, structured match simulations, set-piece execution, and competitive game management under live refereeing.",
    highlights: [
      "11v11 full pitch tactical deployment",
      "Offensive & defensive corner set-pieces",
      "In-game psychological resilience drills",
      "Post-match tactical video and feedback debrief"
    ],
    badge: "Match Day",
    iconName: "Swords",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "summer-camp",
    title: "Special Summer High-Performance Camp",
    category: "camp",
    ageGroup: "Ages 6 – 19",
    timings: "Seasonal Intensive (April - June)",
    description: "An intensive football immersion camp designed during academic breaks featuring guest coaches, fitness benchmarks, and competitive showcase tournaments.",
    highlights: [
      "Double training sessions & nutrition clinics",
      "Goalkeeper specialized coaching modules",
      "Speed, Agility, and Quickness (SAQ) drills",
      "Certificate of Excellence upon completion"
    ],
    badge: "High Demand",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "friendly-fixtures",
    title: "Competitive Friendly Fixtures & League Prep",
    category: "elite",
    ageGroup: "U13, U15, U17, U19",
    timings: "Scheduled Fixtures vs Chennai & State Academies",
    description: "Regular inter-club matches against top academies, state leagues, and district squads to provide real pressure test conditions for players.",
    highlights: [
      "Inter-district competitive friendlies",
      "Scouting opportunities for professional club scouts",
      "Home & Away match day experience",
      "Official match kit & tournament representation"
    ],
    badge: "Exposure",
    iconName: "Trophy",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "character-mentorship",
    title: "Skill Mastery & Leadership Mentorship",
    category: "daily",
    ageGroup: "All Age Groups",
    timings: "Integrated with daily sessions",
    description: "Developing the person behind the footballer. We instill core tenets of humility, academic commitment, team communication, and leadership.",
    highlights: [
      "One-on-one mentor check-ins with coaches",
      "Sportsmanship and peer respect workshops",
      "Academic balancing guidance for students",
      "Confidence building & public speaking on pitch"
    ],
    badge: "Holistic",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
  }
];

export const SCHEDULE_DATA: ScheduleSlot[] = [
  {
    day: "Monday",
    morningSlot: {
      time: "06:00 AM - 08:00 AM",
      focus: "Aerobic Conditioning & Ball Mastery",
      targetGroup: "U15 & U19 Elite"
    },
    eveningSlot: {
      time: "04:30 PM - 06:30 PM",
      focus: "First Touch, Passing Drills & Rondo",
      targetGroup: "U10 & U14 Grassroots"
    }
  },
  {
    day: "Tuesday",
    morningSlot: {
      time: "06:00 AM - 08:00 AM",
      focus: "Tactical Positioning & Positional Play",
      targetGroup: "U15 & U19 Elite"
    },
    eveningSlot: {
      time: "04:30 PM - 06:30 PM",
      focus: "1v1 Dribbling, Shielding & Turns",
      targetGroup: "All Age Groups"
    }
  },
  {
    day: "Wednesday",
    morningSlot: {
      time: "06:00 AM - 08:00 AM",
      focus: "Speed Agility Quickness (SAQ) & Finishing",
      targetGroup: "U15 & U19 Elite"
    },
    eveningSlot: {
      time: "04:30 PM - 06:30 PM",
      focus: "Small-Sided Tournament (5v5 Pitch)",
      targetGroup: "U10, U14 & U17"
    }
  },
  {
    day: "Thursday",
    morningSlot: {
      time: "06:00 AM - 08:00 AM",
      focus: "Defensive Shape, Pressing & Counter",
      targetGroup: "U15 & U19 Elite"
    },
    eveningSlot: {
      time: "04:30 PM - 06:30 PM",
      focus: "Shooting Accuracy & Free Kicks",
      targetGroup: "All Age Groups"
    }
  },
  {
    day: "Friday",
    morningSlot: {
      time: "06:00 AM - 08:00 AM",
      focus: "Set-piece Routines & Match Strategy",
      targetGroup: "Match Squads"
    },
    eveningSlot: {
      time: "04:30 PM - 06:30 PM",
      focus: "Fun Skills Competition & Crossbar Challenge",
      targetGroup: "All Age Groups"
    }
  },
  {
    day: "Saturday",
    morningSlot: {
      time: "06:30 AM - 09:30 AM",
      focus: "Full-Scale 11v11 Match Simulation",
      targetGroup: "Senior Squads & Academy Teams"
    },
    eveningSlot: {
      time: "04:30 PM - 06:30 PM",
      focus: "Friendly Match vs Visiting Academy",
      targetGroup: "Selected Academy Teams"
    }
  },
  {
    day: "Sunday",
    morningSlot: {
      time: "06:30 AM - 09:00 AM",
      focus: "Competitive Inter-Club Friendly Fixture",
      targetGroup: "Match Teams"
    },
    eveningSlot: {
      time: "Rest / Tactical Debrief",
      focus: "Video Analysis & Recovery Clinic",
      targetGroup: "All Squads"
    }
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    icon: "Target",
    title: "Grassroots to Glory",
    desc: "We bridge the gap between street and playground enthusiasm and high-performance tactical discipline, scouting Chennai's rawest talent.",
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400"
  },
  {
    icon: "Heart",
    title: "Character & Humility",
    desc: "Wins on the pitch mean nothing without integrity. We teach our athletes that humility in victory and grace in defeat define true leaders.",
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400"
  },
  {
    icon: "Zap",
    title: "Elite Modern Coaching",
    desc: "Implementing progressive European and Asian training methodologies calibrated for Indian youth, emphasizing rapid mental execution.",
    color: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-400"
  },
  {
    icon: "Shield",
    title: "100% Free & Accessible",
    desc: "No tuition fees, no hidden gatekeeping. Football is the people's game, and every deserving child in Kavangarai and Chennai belongs here.",
    color: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-400"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Karthik Subramanian",
    role: "Parent of U14 Striker",
    quote: "Finding a free football academy with this caliber of coaching in Chennai seemed impossible until we joined IDOL FC. My son has developed tremendous stamina, discipline, and football IQ under coach Anandan.",
    badge: "U14 Parent",
    rating: 5
  },
  {
    id: "t2",
    name: "M. Vignesh",
    role: "U19 Player (Represented District)",
    quote: "IDOL FC gave me the boots, the guidance, and the confidence to believe I could play beyond our street ground. Today I competed in the district tournament thanks to the daily morning rigor.",
    badge: "Academy Player",
    rating: 5
  },
  {
    id: "t3",
    name: "Revathi Sundaram",
    role: "Parent of U11 Midfielder",
    quote: "The values taught at IDOL FC go far beyond scoring goals. The coaches emphasize homework, respect for elders, and teamwork. It is a genuine community pillar for East Kavangarai.",
    badge: "Grassroots Parent",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Is training really 100% free at IDOL Football Club?",
    answer: "Yes, absolutely! IDOL FC was founded as Chennai's premier free youth football training academy. We do not charge tuition fees for our structured coaching programs. Our mission is to nurture young football talent without financial hindrance.",
    category: "Admission"
  },
  {
    question: "What is the age requirement to join IDOL FC?",
    answer: "We welcome children and youth under 19 years old (U19), starting as young as 6 or 7 years old in our grassroots introductory batches, up to advanced under-19 competitive athletes.",
    category: "Eligibility"
  },
  {
    question: "What equipment do I need to bring for the trial session?",
    answer: "Players should wear comfortable athletic clothing (t-shirt and shorts), football boots (studs or turf shoes), shin guards, and bring a personal water bottle. If you do not yet own studs, running shoes are acceptable for your very first trial evaluation.",
    category: "Gear"
  },
  {
    question: "How do I enroll my child or sign up for a trial?",
    answer: "You can either call our admission desk directly at +91 94440 14017, click the 'Book Free Trial' button to submit an online form, or visit East Kavangarai Ground during our morning (6:00 AM) or evening (4:30 PM) training sessions to meet Coach Anandan Thangavelu.",
    category: "Admission"
  },
  {
    question: "Where are the training grounds located?",
    answer: "Our home ground is located at Kanchi Arul Nagar, 2nd Street, East Kavangarai, Chennai 600 066. It is easily reachable from Puzhal, Kavangarai Bus Stop, and surrounding North Chennai neighborhoods.",
    category: "Location"
  }
];
