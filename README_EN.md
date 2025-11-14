# GSAP Hero Section - React Version

A modern, responsive hero section animation built with React, GSAP, and ScrollTrigger. Features smooth parallax effects, text reveal animations, and responsive design.

## 🎯 Features

✨ **Parallax Effect** - Background moves smoothly on scroll  
✨ **Text Reveal** - Words and text reveal from bottom to top with staggered timing  
✨ **Scroll Trigger** - Animations triggered based on scroll position  
✨ **Responsive Design** - Works perfectly on mobile, tablet, and desktop  
✨ **60 FPS Performance** - Optimized animations with GSAP  
✨ **Smooth Scroll** - Anchor links with smooth scrolling animation  

## 📁 Project Structure

```
GSAP-Hero-Section/
├── components/
│   ├── HeroSection.jsx
│   ├── HeroSection.module.css
│   ├── AboutSection.jsx
│   ├── AboutSection.module.css
│   ├── GallerySection.jsx
│   ├── GallerySection.module.css
│   ├── Footer.jsx
│   ├── Footer.module.css
│   ├── ScrollToTop.jsx
│   └── ScrollToTop.module.css
├── assets/
│   └── hero-bg.jpg
├── App.jsx
├── App.css
├── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will open at `http://localhost:5173`

## 🔧 Technology Stack

- **React 18** - UI library
- **Vite** - Fast build tool
- **GSAP 3** - Animation library with ScrollTrigger plugin
- **CSS Modules** - Scoped styling

## 📦 Key Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "gsap": "^3.12.2"
}
```

## 🎨 CSS Modules

All styles are organized using CSS Modules to prevent naming conflicts:

```jsx
import styles from './HeroSection.module.css';

<h1 className={styles.heroTitle}>Title</h1>
```

## 💡 Component Architecture

### HeroSection
- Main hero with parallax background
- Animated title, subtitle, and CTA buttons
- Scroll indicator
- Smooth scroll anchor links

### AboutSection
- Reusable AboutItem sub-component
- Grid layout with 4 feature cards
- Scroll-triggered reveal animations

### GallerySection
- Gallery with gradient backgrounds
- GalleryCard sub-component
- Staggered reveal on scroll

### ScrollToTop
- Auto-show button when scrolled > 500px
- Smooth scroll to top animation

### Footer
- Simple footer with dynamic year

## 🎬 Animation Details

### Hero Section Animations
1. **Parallax** - Background moves 100px on full scroll
2. **Title Words** - Reveal with 0.2s stagger
3. **Subtitle** - Reveal with 0.2s stagger
4. **Buttons** - Appear with 0.1s stagger
5. **Scroll Indicator** - Fades out on scroll

### Section Animations
- Title reveal from bottom to top
- Grid items staggered reveal with scale effect
- Hover effects on cards

## 📱 Responsive Breakpoints

- **Mobile** (≤480px): Single column, smaller fonts
- **Tablet** (≤768px): Adjusted spacing and typography
- **Desktop** (>768px): Full multi-column layout

## 🔄 Cleanup & Performance

- ScrollTrigger animations are properly cleaned up in useEffect returns
- useRef prevents unnecessary re-renders
- CSS `will-change` property for animation optimization
- No memory leaks from event listeners

## 🎓 Best Practices Implemented

✅ Functional components with React hooks  
✅ Proper ref usage for DOM manipulation  
✅ Clean component composition  
✅ CSS Module scoping  
✅ Semantic HTML structure  
✅ Accessibility attributes (aria-label)  
✅ Performance optimization  
✅ Responsive design  

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Open source - feel free to use and modify

---

**Created with ❤️ using React + GSAP**
