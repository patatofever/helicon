export interface Course {
  id: string;
  title: string;
  category: "music" | "dance";
  description: string;
  iconName: string; // Used to dynamically map to Lucide icons
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  highlights: string[];
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: "all" | "music" | "dance" | "events";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Piano Student" or "Parent of Dance Student"
  avatar: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}
