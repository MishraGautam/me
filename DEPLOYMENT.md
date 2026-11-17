# 🚀 Deployment Guide: Gautam Mishra Portfolio

This project has been completely modernized using **Vite**, **React 18**, **Tailwind CSS**, and **Lucide React**. It compiles lightning-fast and is fully optimized for GitHub Pages.

Follow these simple steps to run the site locally, build it, and deploy it to your GitHub Pages URL: `https://mishragautam.github.io/me/`

---

## 🛠️ 1. Local Development

To run the project on your local machine for development and live preview:

```bash
# Install dependencies (if you haven't already)
npm install --legacy-peer-deps

# Start the local development server (Vite)
npm run dev
```

Your terminal will show a link like `http://localhost:5173/me/`. Open it in your browser to see your updated portfolio with hot-reloading active!

---

## 📦 2. Production Build Check

To manually trigger a production bundle compilation (just to verify code outputs):

```bash
npm run build
```

This compiles your optimized code into the `dist/` folder in just a fraction of a second!

---

## 🚀 3. Deploying to GitHub Pages (Automated!)

We have pre-configured `gh-pages` and automated deployment scripts inside your `package.json`. 

To deploy your new site to production, run a single command in your terminal:

```bash
npm run deploy
```

### What this command does automatically:
1. Triggers `npm run build` (via the `predeploy` lifecycle script) to compile the latest code into the `dist/` directory.
2. Runs `gh-pages -d dist` to take the build files and automatically push them to a specialized `gh-pages` branch on your GitHub repository.
3. GitHub will detect the update and publish your updated website to your URL: **`https://mishragautam.github.io/me/`** in under 1-2 minutes!

---

## ⚠️ 4. First-Time Setup Troubleshooting

If you get any git errors during deployment, ensure your Git environment is correctly set up:

### A. Ensure Git is Initialized & Remote is Configured
If your folder does not have Git initialized, run the following commands in your project folder:

```bash
# Initialize git repository
git init

# Add all files
git add .
git commit -m "feat: modernize portfolio with React 18, Vite, and Tailwind CSS"

# Rename branch to main (standard)
git branch -M main

# Add your GitHub repository remote path
git remote add origin https://github.com/MishraGautam/me.git
```

### B. Configure GitHub Repository Pages Settings
Once you run `npm run deploy` for the first time, a branch named `gh-pages` will be created in your GitHub repository.

1. Go to your GitHub repository: `https://github.com/MishraGautam/me`
2. Click on the **Settings** tab.
3. In the left-hand sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   * **Source**: Select `Deploy from a branch`.
   * **Branch**: Select `gh-pages` (and keep the folder as `/ (root)`).
5. Click **Save**.
6. Wait 1 minute, and your site will be live and spectacular at `https://mishragautam.github.io/me/`!
