# MAJAL Day 3 Network Evidence & Defense

A complete Reveal.js learning module for the MAJAL Day 3 workshop. The deck implements 55 horizontal slides with MAJAL-inspired section dividers, activity cards, checkpoints, protocol references, labs, and a final investigation connecting Day 2 phishing evidence to Day 3 packet analysis.

## Source of truth reviewed

- `Day 3.pdf` — Day 3 workshop content and delivery plan.
- `MajalFinalIdentity.pdf` — MAJAL educational visual identity/template reference available in this repository.

## Run locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## GitHub Pages

This repository is ready for GitHub Pages because the entry point is `index.html` at the repository root. Configure Pages to deploy from the `main` branch root.

## Structure

- `index.html` — Reveal.js workshop deck.
- `css/majal-theme.css` — custom MAJAL-style Reveal theme and components.
- `js/majal.js` — Reveal configuration and small interactions.
- `assets/`, `images/`, `diagrams/` — reserved for workshop assets and future exports.
