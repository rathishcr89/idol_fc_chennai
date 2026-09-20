# IDOL Football Club — Chennai

Official website for **IDOL Football Club** — Chennai's premier 100% free youth football training academy (U19) in East Kavangarai.

---

## 🚀 Free Deployment on GitHub Pages

This project is fully configured for automated 1-click deployment on GitHub Pages using either:
1. **GitHub Actions (Recommended - fully automatic)**
2. **Direct Branch Deployment (`gh-pages`)**

---

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

1. Push this repository to your GitHub account (e.g. `https://github.com/rathishcr89/idolfc`).
2. Go to your repository on GitHub.
3. Click **Settings** (tab at the top) → **Pages** (in the left sidebar).
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**.
5. That's it! Every time you push to `main` or `master`, the `.github/workflows/deploy.yml` workflow will automatically build and publish your site at:
   `https://rathishcr89.github.io/idolfc/` (or your repository's custom domain).

---

### Method 2: Manual / Build Folder Deployment

If you prefer building locally and pushing the output:

```bash
# 1. Install dependencies
npm install

# 2. Build the production site
npm run build
```

The compiled static files will be generated in `./dist`. You can deploy the contents of the `dist/` directory directly to your `gh-pages` branch or root.

---

## 💻 Local Development

```bash
# Run local development server
npm run dev

# Run TypeScript type check
npm run lint

# Build for production
npm run build
```
