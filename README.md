# DUO — Unlock Your Strength · Achieve Your Ultimate

Official website and Google Sheets registration system for **DUO**, a personality development, soft-skills training, motivational coaching, and personal development initiative based in Bengaluru, Karnataka, India.

## Tech Stack
- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 + Editorial Typography (`Newsreader`, `Plus Jakarta Sans`, `JetBrains Mono`)
- **Routing & Icons:** React Router (`react-router`) + Lucide React (`lucide-react`)
- **Registration Integration:** Google Apps Script Web App (`google-apps-script/Code.gs`) → Private Google Sheet

## Pages Included
- **Home (`/`)**
- **Programmes (`/programmes`)** — 3-Day Motivational Crash Course (₹6,000) & 3-Month Personality Development Course (₹30,000)
- **About DUO (`/about`)** — Founders Raghuvir Ojha & Mousumi Ojha
- **Register (`/register`)** — Direct registration form connected to Google Sheets
- **Privacy Policy (`/privacy-policy`)**

## Local Development
```bash
pnpm install
pnpm run dev
```

## Production Build & Deployment (Vercel)
```bash
pnpm run build
```
Includes `vercel.json` for single-page application (SPA) route rewrites.
