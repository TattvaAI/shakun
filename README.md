<div align="center">
  <img src="public/favicon.ico" alt="Shakuns Freight Forwarders" width="64" height="64" />
  <h1>Shakuns Freight Forwarders</h1>
  <p>Premium Logistics & Freight Forwarding — Ambala, Haryana, India</p>
  <p>
    <a href="https://github.com/TattvaAI/shakun/actions"><img src="https://github.com/TattvaAI/shakun/workflows/CI/CD%20Pipeline/badge.svg" alt="CI/CD Pipeline" /></a>
    <img src="https://img.shields.io/badge/node-18.x-green" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/next.js-15.2.0-blue" alt="Next.js 15.2.0" />
    <img src="https://img.shields.io/badge/react-19.x-blue" alt="React 19" />
  </p>
</div>

---

# 🚢 Shakuns Freight Forwarders

A premium, dark-themed Next.js 15 portfolio website for Shakuns Freight Forwarders, a leading logistics and freight forwarding company based in Ambala, Haryana, India. Built with React 19, TypeScript, Framer Motion, Lenis smooth scroll, Tailwind CSS v4, and React Three Fiber for 3D hero visuals.

---

## ✨ Features

- **Dark Luxury Design**: Sophisticated dark theme with gold accents and smooth animations
- **3D Hero Section**: Interactive WebGL blob with particle effects via React Three Fiber
- **Smooth Scrolling**: Lenis-powered inertia scrolling throughout the entire page
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Animated Stats**: Counter animations triggered on scroll
- **Brand Marquee**: Animated brand partner showcase with pause on hover
- **Review Carousel**: Client testimonials with pagination controls
- **Timeline Component**: Company history with interactive elements
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Cards
- **Security Headers**: Built-in security headers for production deployment
- **Docker Ready**: Full Docker and docker-compose configuration

---

## 🚀 Tech Stack

- **Next.js**: 15.2.0
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **Framer Motion**: 12.x
- **React Three Fiber / Drei**: 9.x / 10.x
- **Lenis**: 1.x (Smooth Scroll)
- **GSAP**: 3.x
- **Docker**: Containerized deployment

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Docker (optional, for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/TattvaAI/shakun.git
cd shakun

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
pnpm build

# Start the production server
pnpm start
```

---

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build -d

# Access the application
open http://localhost:3000
```

---

## 📂 Project Structure

```
shakun/
├── public/               # Static assets (logos, images, fonts)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes (health check)
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout with metadata
│   │   └── page.tsx      # Homepage
│   └── components/       # React components
│       ├── HeroSection.tsx
│       ├── Navbar.tsx
│       ├── StatsBar.tsx
│       ├── ServicesSection.tsx
│       ├── OwnerSection.tsx
│       ├── ReviewsSection.tsx
│       ├── BrandMarquee.tsx
│       ├── Footer.tsx
│       ├── HeroScene.tsx    # 3D hero
│       ├── SmoothScroll.tsx
│       ├── TextReveal.tsx
│       └── ScrollProgress.tsx
├── .github/workflows/    # GitHub Actions CI/CD
├── Dockerfile            # Production Docker image
├── docker-compose.yml    # Docker Compose configuration
├── next.config.ts        # Next.js configuration
└── package.json
```

---

## 🔐 Security Headers

This project includes production-ready security headers:

- **X-Content-Type-Options**: nosniff
- **X-Frame-Options**: DENY
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Restricted camera, microphone, geolocation

---

## 🚀 Deployment

### Vercel (Recommended)

Vercel provides the easiest deployment experience for Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
npx vercel --prod
```

### Manual Deployment

1. Build the application: `pnpm build`
2. Start the server: `pnpm start`
3. Or use Docker: `docker-compose up -d`

---

## 📄 License

This project is proprietary to Shakuns Freight Forwarders.

---

## 📞 Contact

- **Address**: Manav Chowk, Ambala City, Haryana — 134003
- **Phone**: +91 99990 00171
- **Email**: shakunsfreight@gmail.com
