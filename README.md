<div align="center">

# 🇯🇴 Mohammed Almomani

### Full-Stack Developer & FiveM Engineer

Building clean, performant web systems — from pixel-perfect frontends to bulletproof backend APIs and high-performance FiveM server scripts.

[![HTML5](https://img.shields.io/badge/HTML5-E85D26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-F5A623?style=for-the-badge&logo=css3&logoColor=141210)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-141210?style=for-the-badge&logo=javascript&logoColor=F5A623)](#)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-c47d10?style=for-the-badge)](#)
[![Bilingual](https://img.shields.io/badge/EN%20%2F%20AR-Bilingual-e85d26?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-9e9387?style=for-the-badge)](#-license)

[View Demo](#) · [Report Bug](https://github.com/mohamme-cmd/mohamme-cmd/issues) · [Request Feature](https://github.com/mohamme-cmd/mohamme-cmd/issues)

</div>

---

## 📖 About

This repository contains my personal portfolio — a single-page, dependency-free website built with **vanilla HTML, CSS, and JavaScript**. It's designed around a warm, dark "amber & rust" aesthetic with a terminal-inspired signature element, smooth scroll-reveal animations, and full **English / Arabic (RTL)** language switching.

I'm a **Full-Stack Web Developer & FiveM Engineer** based in Jordan 🇯🇴, passionate about building clean, performant applications — whether that's architecting a scalable SaaS platform or crafting a high-performance FiveM roleplay system. I've shipped 40+ projects and collaborated with teams across the Arab world and beyond, and I'm currently **open to freelance work and long-term partnerships**.

---

## ✨ Features

- **Preloader entrance** — a branded loading sequence with a fill-bar, followed by a choreographed staggered reveal of the hero (nav → eyebrow/name → terminal → actions → visual).
- **Scroll progress bar** — a slim amber-to-rust indicator across the top of the viewport that tracks reading progress.
- **3D tilt + spotlight project cards** — cards tilt toward the cursor in real 3D (`perspective`/`rotateX`/`rotateY`) with a soft light that follows the pointer.
- **Magnetic buttons** — primary/outline/secondary CTAs subtly pull toward the cursor on hover for a tactile, premium feel.
- **Living background** — the ambient glow behind the content drifts slowly and continuously, instead of sitting static.
- **Bilingual, RTL-ready** — one-click EN ⇄ AR toggle that re-flows the entire layout (mirrored nav, timeline, stat rows, and typography) for true right-to-left support, powered by the Cairo typeface.
- **Signature terminal animation** — a hand-rolled typewriter effect in the hero that "types out" a JSON-style introduction, byte by byte.
- **Scroll-triggered reveals** — sections and cards fade/slide into view via `IntersectionObserver`, with staggered timing for grouped elements.
- **Animated stat counters** — years of experience, projects shipped, and satisfaction rate count up when scrolled into view.
- **Tabbed skills grid** — Frontend / Backend / Tools categories, switchable without a page reload.
- **Interactive project gallery** — a featured (2-column) case study plus a responsive card grid for additional work.
- **Vertical experience timeline** — chronological career history with tech-stack tags per role.
- **Working contact form UI** — client-side validation and a confirmation message (ready to wire up to a backend or form service).
- **Fully responsive** — tuned breakpoints down to small mobile devices (380px+).
- **Accessible by default** — semantic landmarks, `aria-label`s throughout, visible keyboard focus states, and full `prefers-reduced-motion` support (every animation above degrades gracefully).
- **Zero build step** — no framework, no bundler, no `node_modules`. Open the file and it runs.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Modern CSS3 (custom properties, Grid, Flexbox, `backdrop-filter`) |
| Behavior | Vanilla JavaScript (`IntersectionObserver`, no frameworks) |
| Typography | [Syne](https://fonts.google.com/specimen/Syne) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code/labels), [Cairo](https://fonts.google.com/specimen/Cairo) (Arabic) |
| Icons | [Font Awesome 6](https://fontawesome.com/) |

---

## 🎨 Design System

The site uses a dark, warm "amber & rust" palette instead of a generic dark theme — meant to evoke a terminal / code-editor feel while staying premium and readable.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#141210` | Base background |
| `--amber` | `#f5a623` | Primary accent |
| `--rust` | `#e85d26` | Secondary accent / gradients |
| `--text` | `#f0ece4` | Primary text |
| `--muted` | `#9e9387` | Secondary text |
| `--display` | Syne, 800 weight | Headings |
| `--mono` | JetBrains Mono | Labels, code, tags |

---

## 📂 Sections

| Section | Description |
|---|---|
| **Hero** | Intro, animated terminal card, tech-stack snippet, CTAs, social links |
| **About** | Bio, stats (projects / experience / satisfaction), service highlights |
| **Skills** | Tabbed grid — Frontend, Backend, Tools & Other |
| **Projects** | Featured case study + project grid with live links |
| **Experience** | Vertical timeline of roles and freelance work |
| **Contact** | Direct contact channels + a message form |

### Featured Projects

- **[IEEE ANU Store](https://ieeeanu.app)** — E-commerce platform for IEEE ANU covering educational materials, workshops, and membership services.
- **[Justice City Framework](https://justicecfw.com/)** — FiveM server framework with player stats, content-creator showcases, and a custom job/economy system.
- **TRY JO E-commerce Store** — Arabic RTL e-commerce platform with category filtering, cart, and offers.
- **ATP Security Dashboard** — Real-time monitoring dashboard (CPU/RAM/network, logs, live analytics) with an Arabic RTL interface.
- **User Management Dashboard** — Full account/role/permission management system with search, filtering, and export.

---

## 🚀 Getting Started

No build tools or dependencies required.

```bash
# Clone the repository
git clone https://github.com/mohamme-cmd/<repo-name>.git
cd <repo-name>

# Open directly in a browser
open index.html      # macOS
start index.html      # Windows
xdg-open index.html   # Linux
```

Or serve it locally for a closer-to-production preview:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

### Deploying

The site is fully static — deploy it anywhere:

- **GitHub Pages**: Settings → Pages → deploy from the `main` branch.
- **Vercel / Netlify**: drag-and-drop the folder or connect the repo — zero configuration needed.

---

## 🗂️ Project Structure

```
.
├── index.html          # Full site — markup, styles, and scripts
├── my-photo.jpg         # Hero avatar image
├── cv.pdf                # Downloadable CV
└── images/
    ├── ieeeanu-app.jpg
    ├── justicecfw.jpg
    ├── tryjo-ecommerce.jpg
    ├── atp-security-dashboard.jpg
    └── user-management-dashboard.jpg
```

---

## ⚙️ Customizing

- **Add a project** — duplicate a `.project-card` block inside `#projects` and update the thumbnail, tags, title, description, and link.
- **Update translations** — every user-facing string lives in the `translations` object (`en` / `ar`) near the bottom of the script; edit both keys to keep languages in sync.
- **Change the palette** — every color is a CSS custom property under `:root`; swap `--amber` / `--rust` / `--bg` to re-theme the entire site.
- **Update skills** — edit the `skills` object in the script (`frontend`, `backend`, `other` arrays of `[name, icon]` pairs).

---

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-mohmmedalmomani3%40gmail.com-e85d26?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohmmedalmomani3@gmail.com)
[![Discord](https://img.shields.io/badge/Discord-king__momani-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/king_momani)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-%2B962%2078%20729%207364-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/962787297364)
[![Instagram](https://img.shields.io/badge/Instagram-%407amodah__momani-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/7amodah_momani)
[![GitHub](https://img.shields.io/badge/GitHub-mohamme--cmd-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mohamme-cmd)

</div>

I typically reply within a few hours — Discord is fastest for quick questions, email is best for project briefs.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). The design, code structure, and layout are free to use as a learning reference — please don't republish the content (name, photo, project descriptions) as your own.

---

<div align="center">

**⭐ If this project inspired your own portfolio, consider giving it a star!**

</div>
