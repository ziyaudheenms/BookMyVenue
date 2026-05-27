# BookMyVenue — Design Architecture

This document captures the core visual system and utility tokens for the BookMyVenue UI.

---

## 1. Typography

- Main headings, navbars, labels, form placeholders, and buttons: Plus Jakarta Sans
- Numeric UI (prices, dates, hourly matrix, analytics percentages): Roboto Mono
- Body copy, long descriptions, small details: system font stack (font-sans)

---

## 2. Colour palette

Primary brand colors: Red, White, Black

Backgrounds (prefix: bg-)

- bg-bmv-canvas — Global canvas backdrop — #FFFFFF
- bg-bmv-surface — Cards & sidebar backdrops — #F8FAFC
- bg-bmv-mutedSurface — Active states & dynamic overrides — #FFF1F2

Brand accents

- bg-bmv-primary — Primary red buttons — #E11D48
- bg-bmv-crimson — Deep contrast / hover / header — #881337

Text colors (prefix: text-)

- text-text-primary — Core bold text / headers — #0F172A
- text-text-secondary — Secondary text / subheadings — #475569
- text-text-muted — Muted captions / disabled — #94A3B8
- text-bmv-primary / text-bmv-crimson — Red accent text
- text-bmv-successText — Success badge text (emerald)
- text-bmv-warningText — Warning badge text (amber)

Borders (prefix: border-)

- border-bmv-border — Subtle dividers & grid borders — #FFE4E6
- border-bmv-borderMuted — Focused inputs & highlight outlines — #FDA4AF

---

## 3. Shadows & Elevation

- shadow-card-soft — Layered elevation for cards
- shadow-modal-elevation — Large modal / popover shadow
- focus:shadow-button-focus — CTA ring / focus highlight

---

