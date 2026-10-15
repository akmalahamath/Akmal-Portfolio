# Akmal Ahamath — Personal Portfolio

A production-quality, one-page personal portfolio for **Akmal Ahamath** (AI Engineer | Full-Stack Developer | BSc Computer Science Undergraduate), designed with:
- **Futuristic AI Dark Aesthetic** (`#020B14` / `#04131F` deep navy with electric cyan, aqua, and subtle purple accents)
- **Apple-level interaction design** & fluid motion
- **Glassmorphism UI** (`backdrop-blur-xl`, semi-transparent frosted glass, reactive cursor lighting)
- **Fluid background** with subtle ambient aurora gradients, fine digital grid, and lightweight interactive canvas neural nodes
- **Floating Glassmorphism Navbar** with Apple-style scroll-shrink animation and active section tracking

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer-motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)

---

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📂 Project Architecture

```
├── app/
│   ├── globals.css          # Glassmorphism tokens, noise patterns, custom scrollbars
│   ├── layout.tsx           # SEO metadata, Open Graph tags, font definitions
│   └── page.tsx             # One-page portfolio stream assembly
├── components/
│   ├── ui/
│   │   ├── GlassCard.tsx      # Interactive 3D tilt & mouse spotlight glass container
│   │   ├── MagneticButton.tsx # Magnetic cursor attraction & glow buttons
│   │   └── SectionHeading.tsx # Apple-style typography and category badge
│   ├── AnimatedBackground.tsx # Aurora blobs, digital grid & 60fps canvas neural network
│   ├── Navbar.tsx             # Floating glass pill navbar with scroll shrink & mobile menu
│   ├── Hero.tsx               # Futuristic portrait with orbital rings, cycling titles, CTAs
│   ├── About.tsx              # Verified profile bio, pillars, and core tags
│   ├── Skills.tsx             # Verified competencies, horizontal marquee, categorized tools
│   ├── Education.tsx          # Progressive glowing vertical timeline
│   ├── Certifications.tsx     # 5 verified credentials & achievements
│   ├── Projects.tsx           # Apple product-style showcase with alternating cards
│   ├── CurrentlyExploring.tsx # Neural aesthetic cards for AI & systems research
│   ├── Contact.tsx            # Direct contact links, copy email, glass contact form
│   ├── Footer.tsx             # Minimalist footer with social links & back-to-top
│   ├── ScrollProgress.tsx     # Top cyan gradient progress bar
│   └── SmoothScroll.tsx       # Lenis smooth scrolling provider
├── data/
│   └── portfolio.ts           # Single source of truth for all personal data & projects
└── public/
    ├── images/
    │   └── akmal-portrait.jpg # Hero portrait placeholder
    └── cv/
        └── Akmal_Ahamath_CV.pdf # CV download file
```

---

## ✏️ Customizing Your Information

All your personal details, project showcases, skills, education, and links are centralized in:
👉 [`data/portfolio.ts`](data/portfolio.ts)

- **Add Real Projects**: Update the `projects` array with your live repository links, descriptions, and screenshots.
- **Update Portrait**: Replace [`public/images/akmal-portrait.jpg`](public/images/akmal-portrait.jpg) with your real photograph.
- **Update CV**: Replace [`public/cv/Akmal_Ahamath_CV.pdf`](public/cv/Akmal_Ahamath_CV.pdf) with your actual PDF document.
