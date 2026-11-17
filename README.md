# ✨ Gautam Mishra — Modern Senior Software Engineer Portfolio

Welcome to the modernized personal portfolio repository for **Gautam Mishra | Senior Software Engineer & Full Stack Developer (MERN)**. 

Live Website: 🌐 **[https://mishragautam.github.io/me/](https://mishragautam.github.io/me/)**

---

## 🎨 Modern Aesthetic Preview

This application has been fully upgraded from an old, static Create React App to a cutting-edge **Vite + React 18 + Tailwind CSS** setup.

### Major Upgrades & Features:
* 🌌 **Glow Ambient Lights**: Beautiful, glowing blur circles in the background that animate slowly, bringing a high-tech modern aesthetic to your profile.
* 🔮 **Glassmorphism Panels**: Semi-transparent, blur-filtered containers with extremely fine borders (`glass-panel`) for a unified premium design language.
* 🔍 **Interactive Project Showcase with Real-Time Search**: Instead of a basic static table, projects are presented as beautiful cards. Visitors can now **filter projects by language** (e.g. React Native, Node, Express, MongoDB) or **search by title** dynamically.
* 🖼️ **Interactive Certifications Grid & Lightbox**: Certifications are displayed in a clean responsive grid. Clicking any card opens a beautifully centered **Lightbox modal** to inspect or save the credential directly.
* 🛡️ **Robust Fallback Images**: Leverages custom React error boundary images. If external LinkedIn or university hotlinks break or are blocked, they automatically render elegant custom fallback vector icons.
* 📱 **Fluid Mobile Drawer**: Sidebar details and tabs automatically adapt with high-fidelity transitions to smaller screens with a clean custom drawer menu.

---

## 💻 Tech Stack

* **Build Tooling:** [Vite 5.x](https://vitejs.dev/) (Instant dev starts and builds under 1s)
* **Frontend Framework:** [React 18.x](https://react.dev/) (Functional components, optimized React Hooks, and `createRoot` rendering)
* **Styling Engine:** [Tailwind CSS 3.x](https://tailwindcss.com/) with custom Autoprefixer and PostCSS
* **Icons Library:** [Lucide React](https://lucide.dev/) (Beautiful, vector-based SVG icons)
* **Hosting:** GitHub Pages via the `gh-pages` library

---

## 🚀 Local Development

To run this repository on your local computer for customization:

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
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
├── public/                # Static public assets (Favicon, Manifest, Robots)
└── src/
    ├── App.jsx            # Main cohesive Single Page App (Layout, Timelines, Projects grid)
    ├── Constants.js       # Core resume content (Skills, Experiences, Education details)
    ├── index.jsx          # Entry script utilizing React 18 createRoot
    └── styles.css         # CSS base with custom scrollbar, text gradients & animations
```

---
*Created with 💙 for Gautam Mishra's Engineering Portfolio.*
