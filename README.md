<div align="center">

<br>

<img src="https://raw.githubusercontent.com/Jsolee/el-toc-d-olerdola/main/public/favicon.svg" width="80" alt="El Toc d'Olèrdola" />

<br>

# El Toc d'Olèrdola

### *Ball de Bastons · Cultura Popular Catalana*

<br>

[![Deploy](https://img.shields.io/badge/vercel-deployed-000?style=for-the-badge&logo=vercel&logoColor=white)](https://el-toc-d-olerdola.vercel.app)
[![React](https://img.shields.io/badge/react-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/typescript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Three.js](https://img.shields.io/badge/three.js-r183-000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)

<br>

<p align="center">
  <b>Website for the Ball de Bastons folk dance group from Olèrdola, Catalonia.</b>
  <br>
  <sub>A celebration of tradition, rhythm, and community — brought to life on the web.</sub>
</p>

<br>

---

<br>

<table>
<tr>
<td width="50%">

```
   ⚔️  Ball de Bastons
   ━━━━━━━━━━━━━━━━━━━

   An ancestral stick dance
   passed down through
   generations in the heart
   of Penedès, Catalonia.

   🎵 Rhythm  · Tradition
   🌿 Land    · Community
   ⚡ Energy  · Heritage
```

</td>
<td width="50%">

```
   🏗️  Tech Stack
   ━━━━━━━━━━━━━━━━━━━

   ▸ React 19 + TypeScript
   ▸ Tailwind CSS v4
   ▸ GSAP ScrollTrigger
   ▸ Three.js particles
   ▸ Vite 8
   ▸ i18n (CA / ES)
```

</td>
</tr>
</table>

<br>

</div>

## ✦ Features

<table>
<tr>
<td width="60">🌊</td>
<td><b>Animated particle background</b> — Three.js dotted wave surface with organic motion</td>
</tr>
<tr>
<td>🎭</td>
<td><b>Scroll-driven animations</b> — GSAP ScrollTrigger reveals, parallax, and counters</td>
</tr>
<tr>
<td>🌐</td>
<td><b>Bilingual</b> — Full Catalan and Spanish support with instant switching</td>
</tr>
<tr>
<td>🖋️</td>
<td><b>Editorial design</b> — Playfair Display + Inter, drop caps, ornamental dividers</td>
</tr>
<tr>
<td>📱</td>
<td><b>Fully responsive</b> — Mobile-first with animated hamburger menu</td>
</tr>
<tr>
<td>🎨</td>
<td><b>Forest green palette</b> — Earthy tones reflecting Catalan countryside</td>
</tr>
</table>

<br>

## ✦ Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── dotted-surface.tsx    # Three.js particle wave background
│   ├── Navbar.tsx                # Fixed nav with language toggle
│   ├── Hero.tsx                  # Animated letter-by-letter title
│   ├── About.tsx                 # History section with animated counters
│   ├── Instagram.tsx             # Photo grid with hover overlays
│   ├── Contact.tsx               # Contact cards with scroll reveal
│   └── Footer.tsx                # Minimal footer
├── context/
│   └── LanguageContext.tsx        # i18n provider (CA/ES)
├── lib/
│   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
├── index.css                     # Theme tokens & custom animations
├── main.tsx                      # GSAP plugin registration
└── App.tsx                       # Root layout
```

<br>

## ✦ Quick Start

```bash
# Clone
git clone https://github.com/Jsolee/el-toc-d-olerdola.git
cd el-toc-d-olerdola

# Install
npm install

# Dev server
npm run dev
```

<details>
<summary><b>Other commands</b></summary>

<br>

| Command | Description |
|---------|-------------|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

</details>

<br>

## ✦ Color Palette

```
 ┌─────────────────────────────────────────────────────────┐
 │                                                         │
 │   ■ Forest        #4A6B3A    Primary accent             │
 │   ■ Forest Light  #6B8F56    Hover states               │
 │   ■ Forest Dark   #354D2A    Deep accent                │
 │   ■ Cream         #FAF6F0    Background                 │
 │   ■ Warm 900      #1A150F    Headings                   │
 │   ■ Warm 500      #8C7E6C    Body text                  │
 │   ■ Ochre         #C49B2A    Secondary accent           │
 │                                                         │
 └─────────────────────────────────────────────────────────┘
```

<br>

## ✦ Deployment

This project is optimized for **Vercel**:

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Framework is auto-detected as **Vite**
3. Zero configuration needed — just deploy

<br>

---

<div align="center">

<br>

```
  ╔══════════════════════════════════════════════════╗
  ║                                                  ║
  ║   Cada cop de bastó és un batec de la terra.     ║
  ║   Every strike of the stick is a heartbeat       ║
  ║   of the land.                                   ║
  ║                                                  ║
  ║                          — Dita popular catalana  ║
  ╚══════════════════════════════════════════════════╝
```

<br>

<sub>Made with ♥ in Olèrdola, Penedès</sub>

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=4A6B3A&height=100&section=footer" width="100%" />

</div>
