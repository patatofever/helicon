import { Course, Stat, GalleryItem, Testimonial, FAQItem } from "./types";

export const musicCourses: Course[] = [
  {
    id: "guitar",
    title: "Guitar Mastery",
    category: "music",
    description: "Learn acoustic, electric, and classical guitar techniques, from basic chords to advanced solos, scale theory, and fingerstyle compositions.",
    iconName: "Guitar",
    duration: "6 Months",
    level: "All Levels",
    highlights: ["Acoustic & Electric styles", "Chords & scales fluency", "Fingerpicking & classical solos", "Performance preparation"]
  },
  {
    id: "piano",
    title: "Classical Piano",
    category: "music",
    description: "Comprehensive training in classical piano, keyboard navigation, sight-reading sheet music, hand independence, and expressive dynamics.",
    iconName: "Piano",
    duration: "12 Months",
    level: "All Levels",
    highlights: ["Solfège & sight reading", "Both hands coordination", "Master classical pieces", "Dynamic control & expressions"]
  },
  {
    id: "keyboard",
    title: "Electronic Keyboard",
    category: "music",
    description: "Explore synthesized sounds, chord accompaniment, melody playing, and electronic music arrangements on modern keyboards.",
    iconName: "Keyboard",
    duration: "6 Months",
    level: "Beginner",
    highlights: ["Instrument tones & styles", "Left-hand chord backing", "Lead melody synchronization", "Contemporary songs repertoire"]
  },
  {
    id: "violin",
    title: "Violin Expression",
    category: "music",
    description: "Master the delicate art of the violin. Develop perfect intonation, bowing techniques, vibrato, and classical posture.",
    iconName: "Music2",
    duration: "12 Months",
    level: "All Levels",
    highlights: ["Proper posture & bow hold", "Intonation & ear training", "Vibrato & shifting positions", "Ensemble performance style"]
  },
  {
    id: "drums",
    title: "Drums & Percussion",
    category: "music",
    description: "Build exceptional rhythm, timing, drum roll rudiments, and modern beat synchronization across rock, jazz, and fusion genres.",
    iconName: "Drum",
    duration: "6 Months",
    level: "All Levels",
    highlights: ["Stick control & rudiments", "Timing, metronome & polyrhythms", "Genre-specific beat patterns", "Solos and fill creations"]
  },
  {
    id: "tabla",
    title: "Indian Classical Tabla",
    category: "music",
    description: "Immerse yourself in traditional Indian percussion. Learn Bols, Taals, Kaidas, and rhythmic patterns on the Tabla.",
    iconName: "CircleDot",
    duration: "8 Months",
    level: "All Levels",
    highlights: ["Classical Taal structures", "Hand positioning & resonance", "Bols & rhythmic variations", "Vocal/instrumental accompaniment"]
  },
  {
    id: "harmonium",
    title: "Harmonium & Vocal Guide",
    category: "music",
    description: "Perfect instrument for light classical, ghazals, and bhans. Learn keyboard coordination, bellows operation, and Raag structures.",
    iconName: "AlignJustify",
    duration: "6 Months",
    level: "All Levels",
    highlights: ["Bellows control technique", "Raag & Thaat structures", "Melodic accompaniment", "Vocal pitch matching"]
  },
  {
    id: "vocal-music",
    title: "Hindustani Classical Vocal",
    category: "music",
    description: "Train your voice in the deep traditions of Hindustani music, focusing on Alankars, Raags, voice modulation, and breathing exercises.",
    iconName: "Mic",
    duration: "12 Months",
    level: "All Levels",
    highlights: ["Voice culture & pitch control", "Classical Raag frameworks", "Swar & Alaap exercises", "Stage presence training"]
  },
  {
    id: "western-vocal",
    title: "Western & Pop Vocal",
    category: "music",
    description: "Modern vocal training exploring pitch range, pop dynamics, jazz vocalization, microphone usage, and falsetto transitions.",
    iconName: "Mic2",
    duration: "6 Months",
    level: "All Levels",
    highlights: ["Breathing & vocal projection", "Pitch accuracy drills", "Belting & vocal registers", "Pop, jazz & theater songbooks"]
  },
  {
    id: "music-theory",
    title: "Advanced Music Theory",
    category: "music",
    description: "The mathematical backbone of music. Master notation, chord progressions, harmonic analysis, and composition architecture.",
    iconName: "FileText",
    duration: "4 Months",
    level: "Intermediate",
    highlights: ["Sheet music transcription", "Circle of fifths & keys", "Chord substitution models", "Melody writing & composition"]
  }
];

export const danceCourses: Course[] = [
  {
    id: "bharatanatyam",
    title: "Bharatanatyam",
    category: "dance",
    description: "Classical South Indian temple dance. Learn Adavus (steps), Mudras (hand gestures), Abhinaya (expressions), and rhythm alignment.",
    iconName: "Sparkles",
    duration: "12 Months",
    level: "All Levels",
    highlights: ["Basic Adavus & posture", "Mudra gestures & symbolism", "Abhinaya expression training", "Arangetram preparation path"]
  },
  {
    id: "kathak",
    title: "Kathak",
    category: "dance",
    description: "North Indian classical storytelling dance. Master rapid footwork (Tatkar), graceful spins (Chakkars), and historical storytelling narratives.",
    iconName: "Flame",
    duration: "12 Months",
    level: "All Levels",
    highlights: ["Rhythmic footwork (Tatkar)", "Spins & poise mastery", "Traditional storytelling poses", "Ghungroo resonance training"]
  },
  {
    id: "hip-hop",
    title: "Hip Hop & Street Dance",
    category: "dance",
    description: "High-energy street dance incorporating popping, locking, breaking, dynamic grooves, and commercial choreography set to popular tracks.",
    iconName: "Tv",
    duration: "6 Months",
    level: "All Levels",
    highlights: ["Popping, locking & breaking", "Grooves & rhythm isolation", "Urban culture choreography", "Battle style freestyle improvisation"]
  },
  {
    id: "contemporary",
    title: "Contemporary Grace",
    category: "dance",
    description: "Expressive dance style combining classical ballet, modern jazz, floorwork, gravity exploration, and emotional storytelling.",
    iconName: "Wind",
    duration: "6 Months",
    level: "Intermediate",
    highlights: ["Floorwork & fluid transitions", "Weight shifting & balances", "Emotional self-expression", "Improvisational dance skills"]
  },
  {
    id: "bollywood",
    title: "Bollywood Choreography",
    category: "dance",
    description: "Energetic and incredibly fun! Combines classical, folk, and modern pop dance moves to the latest blockbuster tracks.",
    iconName: "User",
    duration: "3 Months",
    level: "All Levels",
    highlights: ["Bustling energy & style", "Cinematic dance gestures", "Rhythm, beat & expressions", "Group dance synchronization"]
  },
  {
    id: "freestyle",
    title: "Freestyle & Open Choreography",
    category: "dance",
    description: "Unleash your unique movement. Combine different dance styles with emphasis on groove, self-confidence, and musicality.",
    iconName: "Accessibility",
    duration: "4 Months",
    level: "All Levels",
    highlights: ["Groove & rhythm adaptation", "Multi-genre elements", "Confidence & stage presence", "Custom routine creations"]
  },
  {
    id: "kids-dance",
    title: "Kids Creative Movement",
    category: "dance",
    description: "Playful introductory dance course for children to develop balance, coordination, rhythm, and love for dance in a fun environment.",
    iconName: "Smile",
    duration: "3 Months",
    level: "Beginner",
    highlights: ["Basic motor skill building", "Fun musical rhythm games", "Creative movement & mimicry", "Confidence & body awareness"]
  },
  {
    id: "wedding-choreography",
    title: "Wedding & Event Choreography",
    category: "dance",
    description: "Make your special day unforgettable. Customized, easy-to-learn, yet premium stage routines designed for couples and families.",
    iconName: "Heart",
    duration: "1 Month",
    level: "Beginner",
    highlights: ["Custom song mixing", "Easy yet elegant steps", "Couple entry & spacing prep", "Stage confidence training"]
  },
  {
    id: "zumba",
    title: "Zumba Fitness",
    category: "dance",
    description: "A calorie-burning dance fitness party. High-intensity interval movements combined with Latin and international music rhythms.",
    iconName: "Activity",
    duration: "Ongoing",
    level: "All Levels",
    highlights: ["Cardio & core strengthening", "Easy-to-follow steps", "Upbeat global soundscapes", "Stress relief & pure fun"]
  }
];

export const stats: Stat[] = [
  { id: "students", value: 1000, suffix: "+", label: "Active & Graduated Students", iconName: "Users" },
  { id: "courses", value: 10, suffix: "+", label: "Professional Music & Dance Programs", iconName: "Award" },
  { id: "years", value: 15, suffix: "+", label: "Years of Academic Excellence", iconName: "Calendar" },
  { id: "performances", value: 500, suffix: "+", label: "Live Stage Performances", iconName: "Music" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    title: "Academy Grand Piano Showcase",
    category: "music"
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    title: "Elite Violin Training Sessions",
    category: "music"
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    title: "Live Academy Showcase Concert",
    category: "events"
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    title: "Contemporary Dance Recital",
    category: "dance"
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    title: "Annual Stage Live Event",
    category: "events"
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80",
    title: "Expressive Classical Indian Choreography",
    category: "dance"
  },
  {
    id: "gal-7",
    url: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80",
    title: "Youth Drums Practice & Rhythm Mastery",
    category: "music"
  },
  {
    id: "gal-8",
    url: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80",
    title: "Contemporary Floor Training",
    category: "dance"
  },
  {
    id: "gal-9",
    url: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&w=800&q=80",
    title: "Hindustani Classical Vocal Concert",
    category: "events"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Amanpreet Singh",
    role: "Guitar Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Helicon Academy changed my perspective on music! The personalized training in Guitar helped me transition from a total novice to playing in my college band. Truly world-class instruction.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Priya Sharma",
    role: "Kathak Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "The teachers here are extraordinarily patient and certified experts. Studying Kathak has improved my physical grace, posture, and deep connection with Indian heritage. Highly recommended!",
    rating: 5
  },
  {
    id: "test-3",
    name: "Raman Sandhu",
    role: "Parent of Keyboard Student",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "We enrolled our 10-year-old son for Keyboard lessons. The instructors are extremely motivating and professional. The individual attention and regular stage performances built immense self-confidence in him.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Kabir Malhotra",
    role: "Hip Hop Dancer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "The energy in the Hip Hop and contemporary dance classes is unmatched. Best studio sound systems, spacious wooden floorboards, and trainers who push you to discover your custom style.",
    rating: 5
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer demo classes for new students?",
    answer: "Yes! We provide a free trial and consultation session for music and dance courses so you can meet the trainer, understand the course curriculum, and experience our premium studio infrastructure first-hand."
  },
  {
    id: "faq-2",
    question: "What are the timings of the classes? Are they flexible?",
    answer: "We offer highly flexible timings for students, college youth, and working professionals. Classes are conducted throughout the week, including special weekend slots (Saturdays and Sundays). Timings can be customized during admission."
  },
  {
    id: "faq-3",
    question: "Are there age restrictions for joining Helicon Academy?",
    answer: "No age restrictions! We welcome children (ages 4+), teenagers, and adults up to senior citizens. We offer specialized kids-oriented programs and adult-focused custom masterclasses."
  },
  {
    id: "faq-4",
    question: "Do you prepare students for certification exams and stage performances?",
    answer: "Absolutely. We prepare students for international music board exams (like Trinity College London) and Indian Classical dance/vocals certifications. Furthermore, all students get exclusive opportunities to perform in our annual grand concerts and live events."
  },
  {
    id: "faq-5",
    question: "What is your course fee structure?",
    answer: "Our fees are highly competitive and structured based on the course, frequency (weekly classes), and level (Beginner/Advanced). We believe premium education should be accessible. Contact our enquiry desk via WhatsApp or Submit Form for the detailed fee brochure."
  }
];
