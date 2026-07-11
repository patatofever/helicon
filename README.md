# Helicon Academy - Premium Music & Dance Website

A state-of-the-art, fully responsive, SEO-optimized, and premium landing website for **Helicon Academy**, Amritsar’s premier conservatory for classical and contemporary music and dance. Built with **React**, **TypeScript**, and **Tailwind CSS v4** to ensure exceptional performance, fluid micro-interactions, and accessibility.

## 🌟 Elite Features

*   **Luxury Aesthetics & Typography**: Dark/Light mode toggle system supporting clean "Poppins" sans-serif pairings alongside sophisticated "Playfair Display" serif headings.
*   **Aesthetic Animations**: 
    *   Dynamic background parallax and text staggers powered by **GSAP** on first load.
    *   State-driven program transitions and responsive lightbox pop-ups powered by **Framer Motion (`motion/react`)**.
    *   Floating, randomized musical notes floating on the screen to accent the creative theme.
*   **Modular Architecture**: Fully typed and split structure separating static datasets (`data.ts`) and global interfaces (`types.ts`) from components.
*   **Comprehensive Course Index**: Detailed, interactive cards with dynamically mapped Lucide React Icons covering 10 Music Programs and 9 Dance Programs, paired with an interactive detail modal.
*   **Stats Count-Up Animation**: Reactive count-up counters for students, courses, years of excellence, and live performances triggered on viewport intersection.
*   **Advanced Media Gallery**: Categorizable photo masonry with interactive, custom full-screen slider lightbox supporting left/right navigation and keyboard accessibility.
*   **Flexible Enquiry Form**: High-fidelity enquiry form with real-time field validation, error guards, full loading animations, a beautiful success card, and direct **WhatsApp link generation** prefilled with client inputs.
*   **Search Engine Optimization (SEO)**: Includes Semantic HTML5 tags, comprehensive page-level Open Graph & Twitter meta tags, Google Font preconnecting, custom SVG favicon integration, automated `sitemap.xml`, fully-formed `robots.txt`, and rich **Schema.org JSON-LD Structured Data** targeting local educational organizations.
*   **Accessibility & Responsiveness**: Fully WCAG compliant with standard touch targets, keyboard support, screen-reader friendly layouts, and optimized responsive layouts.

---

## 📂 Project Directory Structure

```text
├── public/
│   ├── robots.txt           # SEO directives for web crawlers
│   └── sitemap.xml          # Search engine crawler index map
├── src/
│   ├── components/
│   │   ├── ThemeContext.tsx # Global Light/Dark Theme context engine
│   │   ├── Header.tsx       # Sticky glassmorphism responsive navbar & mobile drawer
│   │   ├── Hero.tsx         # Fullscreen sliding media banner with GSAP & floating notes
│   │   ├── About.tsx        # Structured brand copy with floating graphic collages
│   │   ├── Courses.tsx      # Dual-tab layout grid with custom dialog details modal
│   │   ├── WhyChooseUs.tsx  # Standard core features grid with clean glass panels
│   │   ├── Stats.tsx        # Viewport count-up numbers trigger for academic stats
│   │   ├── Gallery.tsx      # Filterable photo masonry with navigation lightbox
│   │   ├── Testimonials.tsx # Cross-fading student reviews slider panel
│   │   ├── FAQ.tsx          # Smooth-height accordion list
│   │   ├── Admission.tsx    # Validation form with direct WhatsApp prefill generation
│   │   ├── Contact.tsx      # Physical coordinates, direct dial links & Maps embed
│   │   └── FloatingButtons.tsx # Floating WhatsApp, Call, & Scroll-to-Top controls
│   ├── data.ts              # Central static content repository (courses, testimonials...)
│   ├── types.ts             # Strongly typed TypeScript interfaces
│   ├── App.tsx              # Main entry layout with loading preloader
│   ├── index.css            # Custom Tailwind v4 stylesheet with core theme variables
│   └── main.tsx             # Strict React mounting root
├── index.html               # Main template with preconnected Google Fonts & JSON-LD
├── tsconfig.json            # Strict TypeScript configuration
├── vite.config.ts           # Bundler environment configurations
└── package.json             # NPM dependencies & build automation scripts
```

---

## 🛠️ Tech Stack & Dependencies

*   **React 19** & **Vite 6**: Fast development cycles and highly optimized production asset bundle sizing.
*   **TypeScript 5**: Complete type safety and autocomplete reliability.
*   **Tailwind CSS v4**: High-performance CSS compiling featuring raw CSS-variable theme configurations.
*   **Framer Motion 12 (`motion/react`)**: High-performance layout and exit state animations.
*   **GSAP**: Micro-precision staggers and mouse parallax hero movements.
*   **Lucide React**: Clean, lightweight, vector-based line icons.

---

## 🚀 How to Customize Content & Replace Media

### 1. Update Gallery & Program Images
To replace the high-quality Unsplash image assets with actual academy photographs, open **`src/data.ts`** and substitute the image URLs inside `galleryItems` and `courses` arrays:
```typescript
// Example from src/data.ts
export const galleryItems = [
  {
    id: "gal-1",
    url: "https://your-custom-image-url.com/piano.jpg", // Update here!
    title: "Academy Grand Piano Showcase",
    category: "music"
  },
  ...
]
```

### 2. Configure Contact Details
To update addresses, phone numbers, or social media links across both the footer and contact sections globally, edit the constants inside **`src/components/Contact.tsx`** or **`src/components/Footer.tsx`**.
For the Google Maps embed location, update the `iframe` `src` tag inside **`src/components/Contact.tsx`**.

---

## 💎 Design Concept Notes

*   **Cosmic Luxury Palette**: The theme is designed using a base of Slate Navy (`#0B132B`, `#1C2541`) paired with pristine accents of Sparkle Gold (`#FFD700`, `#FFE033`) representing a professional, elite conservatory feel.
*   **Negative Space**: Employs spacious paddings and margins, giving content room to breathe and boosting user readability (Lighthouse scoring optimized).
