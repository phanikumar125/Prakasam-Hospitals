# Prakasam Super Speciality Hospital — Unofficial Website Redesign Demo

A complete responsive, multi-page React + TypeScript + Vite website concept for presenting to hospital management.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Pages
- `/` Home
- `/about` About
- `/specialties` and `/specialties/:slug` Department listings and details
- `/doctors` Doctor directory placeholder (no fabricated identities)
- `/facilities` Facilities gallery placeholder
- `/appointment` Interactive client-only form with Zod validation and confirmation preview
- `/contact` Contact details, map, call links
- Custom 404 page

## IMPORTANT BEFORE PRESENTING / PUBLISHING
- This is an **unofficial concept** and not affiliated with Prakasam Hospital.
- External Unsplash photos are **illustrative stock images**, not photos of the actual hospital. Replace with authorized photographs and check image licensing.
- Department names and phone numbers were sourced from a publicly indexed hospital site but require verification by management.
- The appointment form is **demo only**. No data is transmitted, saved, or booked.
- Doctor profiles, accreditations, medical claims, facility specifications and visiting hours are intentionally not invented.
- The Google Maps embed is a search query and may not point to an exact verified pin.
- Confirm the hospital's name, address, contact details and legal permissions before publishing.

## Deployment
Deploy to Vercel or Netlify as a Vite project. Configure SPA rewrites for direct access to nested routes (see `vercel.json`).
