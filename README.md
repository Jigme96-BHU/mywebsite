# Sprout Web — Agency Website

A modern, single-page marketing website for a web development agency targeting small businesses in Australia. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Deployed on **Vercel**.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for hosting

## Project Structure

```
sprout-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, metadata
│   │   ├── page.tsx          # Home page (assembles all sections)
│   │   └── globals.css       # Global styles + CSS variables
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SocialBar.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhatIsIncluded.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Faq.tsx
│   │   ├── Cta.tsx
│   │   ├── Footer.tsx
│   │   └── ContactModal.tsx
│   └── lib/
│       └── data.ts           # All site content (projects, pricing, FAQs, etc.)
├── public/                   # Static assets
├── .env.example
├── .gitignore
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — just click **Deploy**

No environment variables required for the base site.

## Customising Content

All site content lives in **`src/lib/data.ts`** — edit that file to update:
- Portfolio projects
- Pricing plans
- FAQ items
- Testimonials
- Nav links

## Adding a Real Contact Form

The contact modal currently shows a success state on submit. To wire it up:

1. Sign up at [Formspree](https://formspree.io) or [Resend](https://resend.com)
2. Add your endpoint/API key to `.env.local`
3. Update `ContactModal.tsx` to POST to your endpoint
