# ✨ Gautam Mishra — Modern Engineering Lead Portfolio

Welcome to the modernized personal portfolio repository for **Gautam Mishra | Engineering Lead**. 

Live Website: 🌐 **[https://mishragautam.github.io/me/](https://mishragautam.github.io/me/)**

---

## 🎨 Modern Aesthetic Preview

This application has been fully upgraded from an old, static Create React App to a cutting-edge **Vite + React 18 + Tailwind CSS** setup.

### Major Upgrades & Features:
* 🌌 **Glow Ambient Lights**: Beautiful, glowing blur circles in the background that animate slowly, bringing a high-tech modern aesthetic to your profile.
* 🔮 **Glassmorphism Panels**: Semi-transparent, blur-filtered containers with extremely fine borders (`glass-panel`) for a unified premium design language.
* 🧩 **Fully Modular Component Architecture**: The original monolothic app structure has been divided into clean, isolated, and reusable functional JSX components in `src/components/`.
* 🔍 **Interactive Project Showcase with Real-Time Search**: Instead of a basic static list, projects are presented as responsive cards. Visitors can filter projects by language tags (e.g., React Native, Node, Express, MongoDB) or search by title dynamically.
* 🖼️ **Full-Screen Lightbox Portal**: Certifications are displayed in a clean responsive grid. Clicking any card triggers a **React Portal** that mounts a beautifully centered lightbox modal directly at `document.body` level, bypassing container filter clips for a seamless mobile/desktop preview.
* 🛡️ **Self-Hosted Local Assets**: All employer/college logos and certificate images are safely self-hosted within the `public/` directory (rather than externally hotlinked), preventing cross-domain `403 Forbidden` hotlink-blocking errors.
* 📱 **Fluid Mobile Drawer**: Sidebar details and tabs automatically adapt with high-fidelity transitions to smaller screens with a clean custom drawer menu.
* 🚀 **Clean Single Scrollbar**: Programmed global body/html rules to share a unified container scroll, and implemented `.scrollbar-none` CSS helpers to suppress awkward nested vertical/horizontal scroll tracks.

---

## 💻 Tech Stack

* **Build Tooling:** [Vite 5.x](https://vitejs.dev/) (Instant dev starts and builds under 1s)
* **Frontend Framework:** [React 18.x](https://react.dev/) (Functional components, optimized React Hooks, and React Portals)
* **Styling Engine:** [Tailwind CSS 3.x](https://tailwindcss.com/) with custom Autoprefixer and PostCSS
* **Icons Library:** [Lucide React](https://lucide.dev/) (Beautiful, vector-based SVG icons)
* **Hosting:** GitHub Pages via the automated `gh-pages` library

---

## 🚀 Local Development

To run this repository on your local computer for customization:

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Local Dev Server
```bash
npm run dev
```
Open **`http://localhost:5173/me/`** in your browser. Vite's hot-module replacement (HMR) allows you to see edits to your code instantly!

### 3. Production Compilation Check
```bash
npm run build
```
*(This compiles your code into lightweight, compressed bundles inside the `/dist` directory in just a fraction of a second.)*

---

## 🚀 One-Command Automatic Deployment

We have fully automated your deployment process inside `package.json`. To push your latest changes live, simply run:

```bash
npm run deploy
```

### What this does automatically:
1. Triggers `npm run build` (via the automated `predeploy` hook) to build fresh production files in the `/dist` folder.
2. Commits and pushes the `/dist` bundle directly to your GitHub repository's `gh-pages` branch.
3. Your update is live in under 1-2 minutes at [`https://mishragautam.github.io/me/`](https://mishragautam.github.io/me/)!

---

## 📂 Project Structure

```text
├── DEPLOYMENT.md          # Detailed deployment guidelines & troubleshooting
├── README.md              # Project overview (You are here)
├── index.html             # Main entry HTML template with Google web fonts
├── package.json           # Scripts, dependencies, and deployment paths
├── postcss.config.js      # PostCSS configurations for Tailwind
├── tailwind.config.js     # Tailwind CSS scanning and theme configuration
├── vite.config.js         # Vite asset compilation and subdirectory routing
├── public/                # Static public assets
│   ├── certificates/      # 22+ local certificate credential images
│   ├── logos/             # Local company & university logos
│   ├── favicon.ico        
│   └── manifest.json      
└── src/
    ├── App.jsx            # Core page coordinator, background graphics, and mobile drawer
    ├── Constants.js       # Central data parameters (Resume arrays, contacts, skills)
    ├── index.jsx          # React 18 entry client root
    ├── styles.css         # Custom animations, text gradients, scrollbars, and body styling
    └── components/        # Isolated panel components
        ├── AboutTab.jsx           # Bio page featuring detailed IBM project highlights
        ├── CertificationsTab.jsx  # Credentials grid with React Portal-mounted lightbox
        ├── EducationTab.jsx       # Academic background timeline with local assets
        ├── ExperienceTab.jsx      # Chronological career roadmap with local company logos
        ├── ProfileCard.jsx        # Contact info card with glow indicators & resume actions
        ├── ProjectsTab.jsx        # Deployed application showcase with search & filters
        ├── SafeImage.jsx          # Custom fallback renderer to avoid broken hotlinks
        └── SkillsTab.jsx          # Skill percentage matrix, frameworks, & tools
```

---
*Created with 💙 for Gautam Mishra's Engineering Portfolio.*
