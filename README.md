# System Demo Hub

A very simple mobile-first React + Vite + Tailwind website for QR-code access.

## What it includes
- Demo video section first on the page
- Download buttons for the user manual, admin manual, and system scan guide
- Deployment documentation gallery

## How to use
Replace the placeholder files in `public/docs/` with your real PDFs and add your real demo video and deployment photos in `public/`.

## Run locally
```bash
npm install
npm run dev
```

## Build for publishing
```bash
npm run build
```

## Deploy to Vercel

Preferred (GitHub):

1. Create a GitHub repository and push this project.
2. In Vercel, choose "New Project" → import from GitHub and select the repo.
3. Ensure the detected settings are:

```
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

4. Deploy — Vercel will build and publish automatically.

Quick CLI option:

```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# First run - follow prompts to link or create a project
vercel

# Deploy production
vercel --prod
```

The `public/` folder is served as static assets, so place your video, `docs/*.pdf`, and gallery images there before pushing.
