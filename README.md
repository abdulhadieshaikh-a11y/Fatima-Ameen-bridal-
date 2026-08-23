# Zia Bridal — Next.js Website

A single-page bridal couture website for Zia Bridal, Karachi, built with Next.js (App Router) and plain CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/layout.js` — root layout, fonts, page metadata
- `app/page.js` — the full page (hero, atelier, collections, experience, visit, CTA, footer)
- `app/components/Header.js` — sticky nav with scroll state + mobile menu
- `app/components/Reveal.js` — scroll-reveal wrapper (IntersectionObserver)
- `app/globals.css` — design system (colors, type, layout, responsive rules)

## Things to double-check before launch

- Store hours in the "Visit Us" section are a placeholder — update to your actual hours.
- Collection descriptions are starting copy — edit to match your real offerings.
- Instagram/Facebook links in the footer are placeholders (`#`) — add your real profile URLs.
