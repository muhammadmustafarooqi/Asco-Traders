# ASCO Traders - LED Lighting Showcase Website

A high-performance, modern brand showcase website for **ASCO Traders** built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Fully configured for **Static HTML Export** (`output: 'export'`) suitable for hosting on Cloudflare Pages, GitHub Pages, Vercel, Netlify, or any static CDN.

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Static Build

To generate the static HTML export bundle ready for hosting:

```bash
npm run build
```

This compiles the project and generates the optimized static output in the `/out` directory.

---

## 🛠️ Code Formatting & Linting

- **Run Linter:**

  ```bash
  npm run lint
  ```

- **Format Code:**
  ```bash
  npm run format
  ```

---

## 📁 Project Architecture

- `/app` — App router pages & root layout
- `/components` — Section components (`Header`, `Hero`, `ProductsSection`, `WhyUsSection`, `ColourRangeSection`, `CtaSection`, `Footer`)
- `/components/ui` — Reusable primitive UI components (`Button`, `Badge`, `ProductCard`)
- `/lib` — Data types (`types.ts`), catalog items (`data.ts`), and helper utilities (`utils.ts`)
- `/styles` — Global CSS styles & ambient LED lighting glow utilities (`globals.css`)
- `/public` — Static public assets
